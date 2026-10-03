/* ============================================================
   COMPANION ENGINE — shared across every topic
   This file knows nothing about enzymes, kinetics, or any other
   subject. It reads generic globals that other files are expected
   to define before this script runs:
     TOPIC_ID, TOPIC_TITLE   (banks/<topic>.js)
     CHECKPOINTS, POOL, CARDS (banks/<topic>.js)
     state, saveState(), storageWorks (shared/storage.js)
     MYCARD_LIMITS, cleanMyCards()  (shared/storage.js) — the student's own flashcards
     el(), shuffle(), order(), LETTERS (shared/helpers.js)
   This file also reads/writes state.lastSection (shared/storage.js)
   and a `?s=<sectionKey>` query param on the page's own URL, to
   resume a student's last section on return and to let a section be
   linked to directly — see "SECTION URLS" below goTo().
     MODULES, UNGRADED, FLOW, AREA_SECTION,
     SECTION_REQ, QUIZ_KEY_FOR_SECTION,
     FINAL_EXAM_MIX, MODULE_QUIZ_SIZE (optional)  (the page's own content script)
   Any MODULES entry may also carry an optional `unlockAfter` field —
   see "MODULE LOCKING" below — to gate that module behind others.
   Load order in the HTML file should be:
     1. shared/styles.css
     2. banks/<topic>.js       (TOPIC_ID, CHECKPOINTS, POOL, CARDS)
     3. shared/storage.js      (defines `state` — needs TOPIC_ID)
     4. shared/helpers.js      (el, shuffle, order — no dependencies)
     5. the page's own inline content script (module figures, etc.
        — several figures call el()/shuffle() and read
        `state.activities.*` as soon as they run, not just inside
        click handlers, so both must exist by this point)
     6. shared/engine.js       (this file — must load last; builds
        the nav from MODULES and wires every section up)
   ============================================================ */
var current=0,navEl=document.getElementById('nav');
var navLockBadges={};
MODULES.forEach(function(mod,mi){
  var row=el('div','mod-row');
  var head=el('button','mod-head','<span class="mod-badge">'+mod.badge+'</span><span class="mod-title-text">'+mod.title+'</span>');
  var chev=el('button','chev-btn','▶');
  chev.setAttribute('aria-label','Expand '+mod.title);
  var list=el('ul','sub');
  mod.sections.forEach(function(s){
    var li=el('li');
    var b=el('button',null,'<span class="dot"></span><span>'+s.label+'</span>');
    b.onclick=function(){goTo(FLOW.findIndex(function(f){return f.key===s.key;}));};
    li.appendChild(b);list.appendChild(li);
  });
  /* Clicking the module title navigates to that module's landing page.
     The chevron is a separate control so a student can preview the
     sub-section list without leaving the page they're on. */
  head.onclick=function(){goTo(FLOW.findIndex(function(f){return f.key===mod.sections[0].key;}));};
  chev.onclick=function(){list.classList.toggle('open');chev.classList.toggle('open');};
  /* Optional module lock (see MODULE LOCKING below): a small badge next
     to the title, shown only while this module is still locked. */
  if(mod.unlockAfter){
    var lockBadge=el('span','nav-lock','&#128274;');
    lockBadge.setAttribute('aria-label','Locked until other modules are complete');
    head.appendChild(lockBadge);
    navLockBadges[mod.id]=lockBadge;
  }
  row.appendChild(head);row.appendChild(chev);
  navEl.appendChild(row);navEl.appendChild(list);
});

/* ------------------------------------------------------------
   MODULE LOCKING (optional, opt-in per module)
   Any module in MODULES can declare `unlockAfter` to gate it behind
   other modules:
     unlockAfter: ['lab','m1','m2','m3','m4','m5']   an explicit list, or
     unlockAfter: '*'                                every other module
                                                       that has gradable
                                                       content
   A module without `unlockAfter` is never locked, so companions that
   don't use this field (including ones already built) are unaffected.
   A locked module's sections have their normal `.card` children hidden
   and replaced with one generic lock card built here — nothing about
   it is topic-specific, so no companion needs its own markup or script
   for this; adding `unlockAfter` to a MODULES entry is the whole job.
   ------------------------------------------------------------ */
function buildLockCard(mod){
  var card=el('div','card lock-card');
  card.innerHTML=
    '<div class="lock-icon" aria-hidden="true">&#128274;</div>'+
    '<h2>Locked</h2>'+
    '<p>&#8220;'+mod.title+'&#8221; unlocks once the following are complete:</p>'+
    '<ul class="lock-list"></ul>'+
    '<button class="btn lock-go" type="button">Take me to what\u2019s left</button>';
  return card;
}
var LOCKED_SECTIONS={};
MODULES.forEach(function(mod){
  if(!mod.unlockAfter)return;
  mod.sections.forEach(function(s){
    var sectionEl=document.querySelector('.section[data-key="'+s.key+'"]');
    if(!sectionEl)return;
    var cards=Array.prototype.slice.call(sectionEl.children).filter(function(c){return c.classList.contains('card');});
    var lockCard=buildLockCard(mod);
    sectionEl.insertBefore(lockCard,sectionEl.firstChild);
    var rec={cards:cards,lockCard:lockCard,
             list:lockCard.querySelector('.lock-list'),
             btn:lockCard.querySelector('.lock-go')};
    rec.btn.onclick=function(){
      var target=firstIncompleteFor(mod);
      if(target)goTo(FLOW.findIndex(function(f){return f.key===target;}));
    };
    LOCKED_SECTIONS[s.key]=rec;
  });
});

/* ------------------------------------------------------------
   SECTION URLS ("continue where I left off" + direct linking)
   The current section is mirrored into a `?s=<key>` query param via
   history.replaceState (never pushState — in-page Back/Next already
   has its own pager, so this deliberately doesn't add a browser-
   history entry per section). That makes the address bar always a
   valid, shareable, bookmarkable link straight to what's on screen,
   which is what lets an instructor link a specific section from
   Brightspace instead of only ever linking the companion's front page.

   On load, resolveStartSection() below picks the section to open:
   an explicit `?s=` in the URL wins first (so a Brightspace link
   always lands where it says it will), otherwise `state.lastSection`
   resumes wherever the student stopped, otherwise section 0. A
   locked module's sections already degrade to a lock card via
   refreshLocks() regardless of how the student arrived there, so
   landing on one directly (a stale link, a link shared before that
   module unlocked) is already handled with no extra guard needed
   here.
   ------------------------------------------------------------ */
function sectionKeyFromURL(){
  try{
    var m=/[?&]s=([^&]+)/.exec(location.search);
    return m?decodeURIComponent(m[1]):null;
  }catch(e){return null;}
}
function setSectionParam(key){
  try{
    var url=new URL(location.href);
    url.searchParams.set('s',key);
    history.replaceState(null,'',url);
  }catch(e){/* URL API missing or blocked — resume from storage still works */}
}
function resolveStartSection(){
  var fromURL=sectionKeyFromURL();
  if(fromURL && FLOW.some(function(f){return f.key===fromURL;})){
    return FLOW.findIndex(function(f){return f.key===fromURL;});
  }
  if(state.lastSection && FLOW.some(function(f){return f.key===state.lastSection;})){
    return FLOW.findIndex(function(f){return f.key===state.lastSection;});
  }
  return 0;
}

function goTo(i){
  if(i<0||i>=FLOW.length)return;
  current=i;var key=FLOW[i].key;
  document.querySelectorAll('.section').forEach(function(s){s.classList.toggle('active',s.dataset.key===key);});
  paintNav();
  window.scrollTo({top:0,behavior:'smooth'});
  state.lastSection=key;saveState();
  setSectionParam(key);
}

/* ------------------------------------------------------------
   COMPLETION RULES
   A section only counts toward progress once the student has
   earned it: every "Can You Predict It?" checkpoint in that
   section answered CORRECTLY, plus any hands-on activity checked
   at least once. Quiz sections and the final exam count once
   submitted a first time. Just opening a section no longer moves
   the needle. Module landing pages and the flashcard deck are
   reference pages, not graded content, so they never block a
   module from reading "done" and never show a status dot.
   ------------------------------------------------------------ */
function sectionComplete(key){
  if(QUIZ_KEY_FOR_SECTION[key]!==undefined){
    return state.best[QUIZ_KEY_FOR_SECTION[key]]!==undefined;
  }
  var req=SECTION_REQ[key];
  if(!req)return true; /* landing pages & flashcards never block progress */
  var checksOK=req.checks.every(function(id){
    return state.checks[id]!==undefined && state.checks[id]===CHECKPOINTS[id].answer;
  });
  var activityOK=!req.activity || (state.activities[req.activity]!==null && state.activities[req.activity]!==undefined);
  return checksOK && activityOK;
}
function isGradable(key){return SECTION_REQ[key]!==undefined || QUIZ_KEY_FOR_SECTION[key]!==undefined;}

/* A module counts as complete once every gradable section inside it
   does — the same rule the sidebar badge uses, pulled out here so the
   lock logic reuses it exactly rather than recomputing it separately. */
function moduleComplete(mod){
  var g=mod.sections.filter(function(s){return isGradable(s.key);});
  return g.length>0 && g.every(function(s){return sectionComplete(s.key);});
}
function requiredIdsFor(mod){
  if(!mod.unlockAfter)return [];
  if(mod.unlockAfter==='*'){
    return MODULES.filter(function(m){
      return m.id!==mod.id && m.sections.some(function(s){return isGradable(s.key);});
    }).map(function(m){return m.id;});
  }
  return mod.unlockAfter;
}
function moduleLocked(mod){
  var ids=requiredIdsFor(mod);
  if(!ids.length)return false;
  return ids.some(function(id){
    var target=MODULES.filter(function(m){return m.id===id;})[0];
    return target && !moduleComplete(target);
  });
}
function firstIncompleteFor(mod){
  var ids=requiredIdsFor(mod);
  for(var i=0;i<ids.length;i++){
    var m=MODULES.filter(function(x){return x.id===ids[i];})[0];
    if(m && !moduleComplete(m)){
      for(var j=0;j<m.sections.length;j++){
        if(isGradable(m.sections[j].key)&&!sectionComplete(m.sections[j].key))return m.sections[j].key;
      }
      return m.sections[0].key; /* fallback: that module's landing page */
    }
  }
  return null;
}
/* Re-checks every locked module's status. Called at the end of
   paintNav(), so a lock lifts the instant its last requirement is met,
   in step with everything else paintNav already recalculates. */
function refreshLocks(){
  MODULES.forEach(function(mod){
    if(!mod.unlockAfter)return;
    var locked=moduleLocked(mod);
    if(navLockBadges[mod.id])navLockBadges[mod.id].style.display=locked?'':'none';
    mod.sections.forEach(function(s){
      var rec=LOCKED_SECTIONS[s.key];
      if(!rec)return;
      rec.lockCard.style.display=locked?'':'none';
      rec.cards.forEach(function(c){c.style.display=locked?'none':'';});
      if(locked){
        rec.list.innerHTML='';
        requiredIdsFor(mod).forEach(function(id){
          var m=MODULES.filter(function(x){return x.id===id;})[0];
          if(!m)return;
          var done=moduleComplete(m);
          var li=document.createElement('li');
          li.className=done?'done':'';
          li.innerHTML='<span class="lock-dot'+(done?' done':'')+'"></span>'+m.title;
          rec.list.appendChild(li);
        });
      }
    });
  });
}

/* Painters registered by each quiz page's status strip; paintNav() runs them
   so the three indicators stay in step with everything else. */
var QSP=[];
function paintNav(){
  MODULES.forEach(function(mod,mi){
    var row=navEl.children[mi*2],list=navEl.children[mi*2+1];
    var head=row.children[0],chev=row.children[1];
    var inMod=mod.sections.some(function(s){return s.key===FLOW[current].key;});
    list.classList.toggle('open',inMod);
    chev.classList.toggle('open',inMod);
    head.classList.toggle('current',inMod);
    var allDone=moduleComplete(mod);
    head.querySelector('.mod-badge').classList.toggle('done',allDone);
    mod.sections.forEach(function(s,si){
      var b=list.children[si].firstChild;
      b.classList.toggle('current',s.key===FLOW[current].key);
      b.classList.toggle('done',isGradable(s.key)&&sectionComplete(s.key));
    });
  });
  var gradableFlow=FLOW.filter(function(f){return isGradable(f.key);});
  var done=gradableFlow.filter(function(s){return sectionComplete(s.key);}).length;
  var pct=gradableFlow.length?Math.round(done/gradableFlow.length*100):0;
  document.getElementById('ringPct').textContent=pct+'%';
  document.getElementById('ringFill').style.strokeDashoffset=113-(113*pct/100);
  document.getElementById('topTitle').textContent=FLOW[current].label;
  var pill=document.getElementById('topPill');
  if(state.best.final!==undefined){pill.textContent='Final exam best: '+state.best.final+'%';}
  else if(pct===0){pill.textContent='Not started';}
  else{pill.textContent=pct+'% complete';}

  /* Keep any landing-page checklist in sync with real completion,
     including the one the student is currently looking at. */
  document.querySelectorAll('.home-item[data-goto]').forEach(function(btn){
    var key=btn.dataset.goto,done2=sectionComplete(key);
    var num=btn.querySelector('.home-num'),st=btn.querySelector('.home-status');
    num.classList.toggle('done',done2);
    st.classList.toggle('done',done2);
    var qid=QUIZ_KEY_FOR_SECTION[key];
    if(qid!==undefined&&done2&&typeof pendingInScope==='function'){
      /* Completion and mastery are shown separately: a quiz row reads
         "Done" for completing it, plus the result and whether review is
         still pending. */
      st.textContent='Done · best '+state.best[qid]+'%'+(reviewListInScope(qid).length?' · review pending':'');
    }else{st.textContent=done2?'Done':'Not started';}
  });
  refreshLocks();
  QSP.forEach(function(f){f();});
}

/* Back / Next follow the study path in FLOW, not the order the
   sections happen to appear in the file. */
document.querySelectorAll('.section').forEach(function(sec){
  var p=sec.querySelector('.pager');if(!p)return;
  var i=FLOW.findIndex(function(f){return f.key===sec.dataset.key;});
  var back=el('button','btn ghost','← Back');
  back.onclick=function(){goTo(i-1);};
  if(i<=0)back.style.visibility='hidden';
  var next=el('button','btn',i>=0&&FLOW[i+1]?('Next: '+FLOW[i+1].label+' →'):'Next →');
  next.onclick=function(){goTo(i+1);};
  if(i===FLOW.length-1)next.style.visibility='hidden';
  p.appendChild(back);p.appendChild(next);
});
document.querySelectorAll('[data-check]').forEach(function(host){
  var id=host.dataset.check,cp=CHECKPOINTS[id];
  var box=host.classList.contains('choices')?host:host.querySelector('.choices');
  var fb=host.classList.contains('choices')?host.parentElement.querySelector('.feedback'):host.querySelector('.feedback');
  var ord=order(cp.options.length);
  ord.forEach(function(realIdx,pos){
    var b=el('button','choice','<span class="mark">'+LETTERS[pos]+'</span>'+cp.options[realIdx]);
    b.onclick=function(){answer(realIdx);};
    box.appendChild(b);
  });
  /* These are retry-until-correct: a wrong pick shows a nudge and stays
     open for another try, so one slip never blocks a section from being
     marked complete. Only a correct answer locks the question and saves
     it — which is also what "done" in the sidebar is built from. */
  function answer(realIdx){
    var right=(realIdx===cp.answer);
    if(right){
      box.querySelectorAll('.choice').forEach(function(b,pos){
        b.disabled=true;b.classList.remove('wrong');
        if(ord[pos]===cp.answer)b.classList.add('right');
      });
      fb.className='feedback show';
      fb.innerHTML='<strong>That\u2019s it.</strong>'+cp.why;
      state.checks[id]=realIdx;saveState();paintNav();
    }else{
      box.querySelectorAll('.choice').forEach(function(b){b.classList.remove('right','wrong');});
      box.querySelectorAll('.choice')[ord.indexOf(realIdx)].classList.add('wrong');
      fb.className='feedback show miss';
      fb.innerHTML='<strong>Not quite — try again.</strong>';
    }
  }
  if(state.checks[id]!==undefined)answer(state.checks[id]);
});
/* ------------------------------------------------------------
   FLASHCARDS: the course deck, and the student's own deck
   One viewer (the #fcCard flip card) shows either deck. fcMode is
   'course' (CARDS from the bank file) or 'mine' (state.myCards, the
   cards the student wrote). The switch that changes fcMode, and the
   panel for adding/editing/deleting cards, are built by
   buildMyCards() further down — no companion's HTML needs to
   contain them. See §7 and §9 of companion-architecture.md.
   ------------------------------------------------------------ */
var fcIdx=0,fcMode='course',fcCard=document.getElementById('fcCard');
var fcEmptyEl=null; /* the "no cards of your own yet" message, made by buildMyCards() */
/* ---- cards linked to the concepts under review ------------------------
   A flashcard does not say which concept area it belongs to, and the bank
   files are not changed for this. Instead each card is matched to areas by
   its front text: a card relates to an area when that wording appears in the
   area's name or in that area's quiz questions (stem, options, explanation).
   A card goes with the area(s) where it appears most (within 60% of the
   best), never with a weak one-off mention. If a card ever carries an
   explicit `area` that is a real concept area, that is used instead and
   nothing is guessed. The matching only REORDERS and GROUPS cards for the
   "review list" deck; it never hides a card from the course deck. */
var CARD_AREA_INDEX=null;
function normText(t){return ' '+String(t||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim()+' ';}
function cardTermVariants(front){
  var raw=String(front||''),out=[],m=raw.match(/^([^(]*)\(([^)]*)\)/);
  var cands=[raw];
  if(m){cands.push(m[1]);cands.push(m[2]);}
  cands.forEach(function(c){
    var n=normText(c).trim();
    if(n.length<4)return;
    out.push(' '+n+' ');
    if(/[a-z]s$/.test(n)&&n.length>4)out.push(' '+n.slice(0,-1)+' ');
  });
  return out;
}
function cardAreaIndex(){
  if(CARD_AREA_INDEX)return CARD_AREA_INDEX;
  var corpus={},names={};
  Object.keys(AREA_SECTION).forEach(function(a){corpus[a]=[];names[a]=normText(a);});
  POOL.forEach(function(q){
    if(!corpus[q.area])return;
    corpus[q.area].push(normText(q.stem+' '+q.options.join(' ')+' '+q.why));
  });
  var idx=[];
  CARDS.forEach(function(card){
    var scores={};
    if(typeof card.area==='string'&&corpus[card.area]){scores[card.area]=999;}
    else{
      var vs=cardTermVariants(card.t);
      Object.keys(corpus).forEach(function(a){
        var best=0;
        vs.forEach(function(v){
          var n=0;corpus[a].forEach(function(doc){if(doc.indexOf(v)>-1)n++;});
          if(names[a].indexOf(v)>-1)n+=2;
          if(n>best)best=n;
        });
        if(best>0)scores[a]=best;
      });
    }
    var max=0;Object.keys(scores).forEach(function(a){if(scores[a]>max)max=scores[a];});
    var keep={};
    Object.keys(scores).forEach(function(a){if(scores[a]>=1&&scores[a]>=0.6*max)keep[a]=scores[a];});
    idx.push(keep);
  });
  CARD_AREA_INDEX=idx;return idx;
}
/* The review-list deck: for every concept that needs attention (open ones
   first, then due re-checks), the cards that belong to it. A card appears
   once, under the first concept that claims it. */
function reviewCards(){
  var list=reviewListInScope('final'),idx=cardAreaIndex(),used={},out=[];
  list.forEach(function(area){
    var p=state.pending[area];
    var label=!p?'Recheck due':(p.status==='retry'?'Still needs practice':'Not yet reassessed');
    var hits=[];
    CARDS.forEach(function(card,i){
      if(!used[i]&&idx[i][area])hits.push({i:i,score:idx[i][area]});
    });
    hits.sort(function(x,y){return y.score-x.score||x.i-y.i;});
    hits.forEach(function(h){used[h.i]=1;out.push({card:CARDS[h.i],area:area,label:label});});
  });
  return out;
}
function openReviewDeck(){
  var at=FLOW.findIndex(function(f){return f.key==='flashcards';});
  if(at<0)return;
  fcMode='review';fcIdx=0;
  goTo(at);
  QSP.forEach(function(f){f();});paintCard();
}
var fcTagEl=null; /* the "related to ..." line above the card, made by buildMyCards() */
function fcDeck(){
  if(fcMode==='review')return reviewCards().map(function(x){return x.card;});
  return fcMode==='mine'?(state.myCards||[]):CARDS;
}
function paintCard(){
  if(fcMode==='review'&&!reviewCards().length)fcMode='course';   /* nothing left to review: back to the full deck */
  var deck=fcDeck();
  var stageEl=fcCard.closest('.fc-stage'),barEl=document.getElementById('fcPrev').parentElement;
  var empty=deck.length===0;
  if(stageEl)stageEl.style.display=empty?'none':'';
  if(barEl)barEl.style.display=empty?'none':'';
  if(fcEmptyEl)fcEmptyEl.style.display=(empty&&fcMode==='mine')?'':'none';
  if(fcTagEl){
    var rcs=(fcMode==='review')?reviewCards():[];
    fcTagEl.style.display=(fcMode==='review'&&rcs.length)?'':'none';
    if(fcMode==='review'&&rcs.length&&rcs[Math.min(fcIdx,rcs.length-1)]){
      var rc0=rcs[Math.min(fcIdx,rcs.length-1)];
      fcTagEl.textContent='Related to: '+rc0.area+' \u00b7 '+rc0.label;
    }
  }
  if(empty){document.getElementById('fcCount').textContent='';return;}
  if(fcIdx>=deck.length)fcIdx=0;
  var wasFlipped=fcCard.classList.contains('flipped');
  fcCard.classList.remove('flipped');
  var shown=fcIdx;
  setTimeout(function(){
    /* re-read the deck inside the timer: the card may have been edited or
       deleted during the 250ms flip-back, and textContent keeps whatever a
       student typed as plain text, never as markup */
    var d=fcDeck()[shown];
    if(!d)return;
    document.getElementById('fcFront').textContent=d.t;
    var backEl=document.getElementById('fcBack');
    backEl.textContent=d.d;
    /* a student can press Enter in the Back box; keep those line breaks on
       their own cards, without changing how course cards are laid out */
    backEl.style.whiteSpace=(fcMode==='mine')?'pre-line':'';
  },wasFlipped?250:0);
  document.getElementById('fcCount').textContent=(fcMode==='mine'?'Your card ':(fcMode==='review'?'Review card ':'Card '))+(fcIdx+1)+' of '+deck.length;
}
fcCard.onclick=function(){fcCard.classList.toggle('flipped');};
fcCard.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();fcCard.classList.toggle('flipped');}};
document.getElementById('fcNext').onclick=function(){var n=fcDeck().length;if(!n)return;fcIdx=(fcIdx+1)%n;paintCard();};
document.getElementById('fcPrev').onclick=function(){var n=fcDeck().length;if(!n)return;fcIdx=(fcIdx-1+n)%n;paintCard();};
paintCard();

/* ------------------------------------------------------------
   MY CARDS: the add / edit / delete panel and the deck switch
   Built here, inside the flashcards section, so every companion gets
   it from this one shared file. Everything a student types is put on
   the page with textContent (never innerHTML), so card text can never
   be read as markup or script. Limits and cleaning rules come from
   MYCARD_LIMITS / cleanMyCards() in storage.js.

   The whole thing is wrapped in try/catch on purpose: engine.js builds
   the quizzes after this point, so a mistake in an optional extra must
   never be able to stop the quizzes from loading.
   ------------------------------------------------------------ */
function mk(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
function buildMyCards(){
  var deckCard=fcCard.closest('.card');
  if(!deckCard||!deckCard.parentNode)return;
  var L=MYCARD_LIMITS;
  if(!Array.isArray(state.myCards))state.myCards=[];

  /* ---- the switch above the viewer: Course cards | My cards ---- */
  var sw=mk('div','mc-switch');
  sw.setAttribute('role','group');sw.setAttribute('aria-label','Choose a deck');
  var bCourse=mk('button','mc-sw-btn'),bMine=mk('button','mc-sw-btn'),bReview=mk('button','mc-sw-btn');
  bCourse.type='button';bMine.type='button';bReview.type='button';
  sw.appendChild(bCourse);sw.appendChild(bReview);sw.appendChild(bMine);
  var stageEl=fcCard.closest('.fc-stage');
  deckCard.insertBefore(sw,stageEl||deckCard.firstChild);
  fcEmptyEl=mk('p','mc-empty','You have not made any cards yet. Add your first one in the “Your own cards” box below.');
  deckCard.insertBefore(fcEmptyEl,stageEl||null);
  fcTagEl=mk('p','fc-review-tag');fcTagEl.style.display='none';
  fcTagEl.setAttribute('role','status');
  deckCard.insertBefore(fcTagEl,stageEl||null);
  function paintSwitch(){
    var rn=reviewCards().length;
    if(fcMode==='review'&&!rn)fcMode='course';
    bCourse.textContent='Course cards ('+CARDS.length+')';
    bMine.textContent='My cards ('+state.myCards.length+')';
    bReview.textContent='For your review list ('+rn+')';
    bReview.style.display=rn?'':'none';
    bCourse.setAttribute('aria-pressed',fcMode==='course'?'true':'false');
    bMine.setAttribute('aria-pressed',fcMode==='mine'?'true':'false');
    bReview.setAttribute('aria-pressed',fcMode==='review'?'true':'false');
    bCourse.classList.toggle('on',fcMode==='course');
    bMine.classList.toggle('on',fcMode==='mine');
    bReview.classList.toggle('on',fcMode==='review');
  }
  bCourse.onclick=function(){fcMode='course';fcIdx=0;paintSwitch();paintCard();};
  bMine.onclick=function(){fcMode='mine';fcIdx=0;paintSwitch();paintCard();};
  bReview.onclick=function(){fcMode='review';fcIdx=0;paintSwitch();paintCard();};
  QSP.push(paintSwitch);

  /* ---- the panel below the viewer ---- */
  var panel=mk('div','card mc-panel');
  panel.appendChild(mk('div','eyebrow hands','Make it yours'));
  panel.appendChild(mk('h3',null,'Your own cards'));
  panel.appendChild(mk('p','mc-intro','Write a card for anything you want to remember, in your own words. Your cards are private and are never part of any quiz or exam.'));
  panel.appendChild(mk('p','caption',storageWorks
    ? 'Your cards are saved in this browser on this device. To keep them when you switch devices, download a backup from the study hub.'
    : 'This browser is blocking saved data, so your cards will be lost when you close this page.'));

  var form=mk('div','mc-form');
  var fId='mcFront',bId='mcBack';
  var fLab=mk('label',null,'Front (a term or a question)');fLab.setAttribute('for',fId);
  var fIn=document.createElement('input');fIn.type='text';fIn.id=fId;fIn.className='mc-input';
  fIn.maxLength=L.front;fIn.autocomplete='off';
  var bLab=mk('label',null,'Back (the answer)');bLab.setAttribute('for',bId);
  var bIn=document.createElement('textarea');bIn.id=bId;bIn.className='mc-input';bIn.rows=3;bIn.maxLength=L.back;
  var addBtn=mk('button','btn','Add card');addBtn.type='button';
  var msg=mk('p','mc-msg');msg.setAttribute('role','status');msg.setAttribute('aria-live','polite');
  var fCount=mk('span','mc-count'),bCount=mk('span','mc-count');
  function paintCounters(){
    fCount.textContent=fIn.value.length+' / '+L.front;
    bCount.textContent=bIn.value.length+' / '+L.back;
  }
  fIn.oninput=paintCounters;bIn.oninput=paintCounters;paintCounters();
  var fRow=mk('div','mc-row');fRow.appendChild(fLab);fRow.appendChild(fCount);
  var bRow=mk('div','mc-row');bRow.appendChild(bLab);bRow.appendChild(bCount);
  form.appendChild(fRow);form.appendChild(fIn);form.appendChild(bRow);form.appendChild(bIn);
  var actions=mk('div','mc-actions');actions.appendChild(addBtn);actions.appendChild(msg);
  form.appendChild(actions);
  panel.appendChild(form);

  var listHead=mk('h4','mc-list-head');listHead.tabIndex=-1;
  var list=mk('ul','mc-list');
  panel.appendChild(listHead);panel.appendChild(list);
  deckCard.parentNode.insertBefore(panel,deckCard.nextSibling);

  function say(text,bad){msg.textContent=text;msg.classList.toggle('bad',!!bad);}
  function newId(){return 'u'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);}
  function afterChange(){
    saveState();paintSwitch();paintList();
    if(fcMode==='mine'){if(fcIdx>=state.myCards.length)fcIdx=Math.max(0,state.myCards.length-1);paintCard();}
  }

  addBtn.onclick=function(){
    var t=fIn.value.trim(),d=bIn.value.trim();
    if(!t||!d){say('Fill in both the front and the back, then add the card.',true);(!t?fIn:bIn).focus();return;}
    if(state.myCards.length>=L.count){say('You have reached the limit of '+L.count+' cards. Delete one to make room.',true);return;}
    state.myCards.push({id:newId(),t:t.slice(0,L.front),d:d.slice(0,L.back),ts:Date.now()});
    fIn.value='';bIn.value='';paintCounters();
    afterChange();
    say('Card added.',false);
    fIn.focus();
  };

  /* One row per card. Editing swaps that row's text for two boxes in place. */
  function paintList(){
    list.innerHTML=''; /* safe: this only clears the list; no student text goes through innerHTML */
    var n=state.myCards.length;
    listHead.textContent=n?('Your cards ('+n+' of '+L.count+')'):'Your cards';
    if(!n){list.appendChild(mk('li','mc-none','Nothing here yet. Cards you add will appear in this list.'));return;}
    state.myCards.slice().reverse().forEach(function(c){list.appendChild(rowFor(c));});
  }
  function rowFor(c){
    var li=mk('li','mc-item');
    showView();
    function showView(){
      li.innerHTML='';li.classList.remove('editing');
      var txt=mk('div','mc-text');
      txt.appendChild(mk('div','mc-front',c.t));
      txt.appendChild(mk('div','mc-back',c.d));
      var acts=mk('div','mc-item-actions');
      var edit=mk('button','btn ghost mc-small','Edit');edit.type='button';
      edit.setAttribute('aria-label','Edit card: '+c.t);
      var del=mk('button','btn ghost mc-small mc-del','Delete');del.type='button';
      del.setAttribute('aria-label','Delete card: '+c.t);
      acts.appendChild(edit);acts.appendChild(del);
      li.appendChild(txt);li.appendChild(acts);
      edit.onclick=showEdit;
      del.onclick=function(){
        /* two steps, inline, so a slip of the finger can't delete a card */
        acts.innerHTML='';
        acts.appendChild(mk('span','mc-ask','Delete this card?'));
        var yes=mk('button','btn ghost mc-small mc-del','Yes, delete');yes.type='button';
        var no=mk('button','btn ghost mc-small','Keep it');no.type='button';
        acts.appendChild(yes);acts.appendChild(no);
        no.onclick=function(){showView();};
        yes.onclick=function(){
          state.myCards=state.myCards.filter(function(x){return x.id!==c.id;});
          afterChange();say('Card deleted.',false);listHead.focus();
        };
        no.focus();
      };
    }
    function showEdit(){
      li.innerHTML='';li.classList.add('editing');
      var f=document.createElement('input');f.type='text';f.className='mc-input';f.maxLength=L.front;f.value=c.t;
      f.setAttribute('aria-label','Front of card');
      var b=document.createElement('textarea');b.className='mc-input';b.rows=3;b.maxLength=L.back;b.value=c.d;
      b.setAttribute('aria-label','Back of card');
      var acts=mk('div','mc-item-actions');
      var save=mk('button','btn mc-small','Save');save.type='button';
      var cancel=mk('button','btn ghost mc-small','Cancel');cancel.type='button';
      var err=mk('span','mc-ask');
      acts.appendChild(save);acts.appendChild(cancel);acts.appendChild(err);
      li.appendChild(f);li.appendChild(b);li.appendChild(acts);
      f.focus();
      cancel.onclick=function(){showView();li.querySelector('.mc-item-actions button').focus();};
      save.onclick=function(){
        var t=f.value.trim(),d=b.value.trim();
        if(!t||!d){err.textContent='Both sides need some text.';return;}
        c.t=t.slice(0,L.front);c.d=d.slice(0,L.back);
        /* c is the same object that lives in state.myCards, so saving is enough */
        afterChange();say('Card saved.',false);listHead.focus();
      };
    }
    return li;
  }

  paintSwitch();paintList();
}
try{buildMyCards();}catch(e){try{console.error('My cards panel failed to build:',e);}catch(_){}}
function sampleFrom(list,n){return shuffle(list).slice(0,n);}
function buildFinalSet(){
  var mix=(typeof FINAL_EXAM_MIX!=='undefined')?FINAL_EXAM_MIX:{concept:8,application:10,integration:7};
  var total=Object.keys(mix).reduce(function(s,k){return s+mix[k];},0);
  var picked=[];
  Object.keys(mix).forEach(function(lv){
    picked=picked.concat(sampleFrom(POOL.filter(function(q){return q.level===lv;}),mix[lv]));
  });
  if(picked.length<total){
    var rest=POOL.filter(function(q){return picked.indexOf(q)===-1;});
    picked=picked.concat(sampleFrom(rest,total-picked.length));
  }
  return shuffle(picked);
}
function buildSet(quizId){
  if(quizId==='final')return buildFinalSet();
  var n=(typeof MODULE_QUIZ_SIZE!=='undefined')?MODULE_QUIZ_SIZE:8;
  return sampleFrom(POOL.filter(function(q){return q.m===quizId;}),n);
}

/* ============================================================
   QUIZZES, THE REVIEW QUEUE, AND SAVED ATTEMPTS
   Four rules this block exists to enforce (each was a real bug):

   1. A concept the student missed stays on a REVIEW QUEUE
      (state.pending) until a later question about that same concept
      is answered correctly. A follow-up round can only shrink the
      queue by actually reassessing a concept; one it did not ask
      about stays pending. "Nothing is waiting for review" is shown
      only when the queue really is empty.
   2. An attempt is graded and recorded exactly once. Submit locks
      after grading, and every attempt carries an id that is stored
      in state.recorded, so even a stray second call cannot add to
      the saved counts or add a second Flag button.
   3. Completion and mastery are different things. Finishing a quiz
      still counts as complete at any score (sectionComplete() is
      untouched); the status strip on each quiz page shows practice
      completed, the assessment result, and review pending
      as three separate facts.
   4. An unfinished attempt survives a refresh: question ids, option
      order, picks, and (if one is ever set) a deadline are saved on
      every answer and deleted on grading.
   ============================================================ */
function plural(n,one,many){return n+' '+(n===1?one:many);}
function newAttemptId(){return 'a'+Date.now().toString(36)+Math.random().toString(36).slice(2,8);}

/* Every concept area a given quiz can ask about. The final exam draws on
   every module; a module quiz only on questions tagged with its id. */
function areasInScope(quizId){
  var seen={},out=[];
  POOL.forEach(function(q){
    if(!q.area||seen[q.area])return;
    if(quizId==='final'||q.m===quizId){seen[q.area]=1;out.push(q.area);}
  });
  return out;
}
/* The spaced re-check. A concept that has just been fixed is checked again
   after RECHECK_DAYS[0] days; if it holds, once more after RECHECK_DAYS[1]
   days; only then is it "mastered". Change the numbers here to change the
   schedule everywhere. */
var RECHECK_DAYS=[2,7];
var DAY_MS=86400000;
function pendingInScope(quizId){
  return areasInScope(quizId).filter(function(a){return state.pending[a];});
}
function isDue(a){var sp=state.spaced[a];return !!sp&&sp.due<=Date.now();}
function dueInScope(quizId){
  return areasInScope(quizId).filter(isDue);
}
function scheduledInScope(quizId){
  return areasInScope(quizId).filter(function(a){return state.spaced[a]&&!isDue(a);});
}
function masteredInScope(quizId){
  return areasInScope(quizId).filter(function(a){return state.mastered[a];});
}
/* Everything the student should act on: concepts still open first (the ones
   missed twice before the ones missed once), then re-checks that are due. */
function reviewListInScope(quizId){
  var open=pendingInScope(quizId).sort(function(x,y){
    return (state.pending[y].status==='retry'?1:0)-(state.pending[x].status==='retry'?1:0);
  });
  return open.concat(dueInScope(quizId));
}
function niceDate(ts){
  try{return new Date(ts).toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'});}
  catch(e){return '';}
}
function sectionInfoForArea(area){
  var key=AREA_SECTION[area];
  if(!key)return null;
  var f=FLOW.filter(function(s){return s.key===key;})[0];
  if(!f)return null;
  var req=SECTION_REQ[key];
  return {key:key,label:f.label,activity:(req&&req.activity)||null};
}
/* Takes the student to the section that teaches a concept and scrolls to
   its hands-on activity (or, if the section has none, its first
   practice card), with the same brief highlight a missed question gets. */
function openConcept(area){
  var info=sectionInfoForArea(area);
  if(!info)return;
  var idx=FLOW.findIndex(function(f){return f.key===info.key;});
  if(idx<0)return;
  goTo(idx);
  setTimeout(function(){
    var target=info.activity?document.getElementById('act-'+info.activity):null;
    if(!target){
      var sec=document.querySelector('.section[data-key="'+info.key+'"]');
      target=sec&&sec.querySelector('.hands-card');
    }
    if(!target)return;
    var card=(target.closest&&target.closest('.card'))||target;
    try{card.scrollIntoView({behavior:'smooth',block:'start'});}catch(e){}
    card.classList.remove('q-jumped');void card.offsetWidth;card.classList.add('q-jumped');
  },380);
}
/* Applies one graded attempt to the review queue and the re-check schedule.
   Returns what changed so the results screen can report it truthfully.
     improved  = was open, answered correctly now -> a re-check is scheduled
     held      = a re-check that was due and passed -> scheduled again, or
     mastered  = ...passed its last re-check
     still     = was open, missed again
     slipped   = had been fixed or mastered, missed now -> back on the list
     added     = missed for the first time
     notAsked  = was on the review list but this attempt did not ask about it */
function recordReview(byArea,before){
  var out={reassessed:[],improved:[],held:[],mastered:[],still:[],slipped:[],added:[],notAsked:[]};
  var now=Date.now();
  Object.keys(byArea).forEach(function(a){
    var b=byArea[a],allRight=(b.got===b.total),p=state.pending[a],sp=state.spaced[a];
    if(p){
      out.reassessed.push(a);
      if(allRight){
        delete state.pending[a];
        state.spaced[a]={step:0,due:now+RECHECK_DAYS[0]*DAY_MS};
        out.improved.push(a);
      }else{p.status='retry';p.ts=now;out.still.push(a);}
    }else if(sp){
      if(!allRight){
        delete state.spaced[a];
        state.pending[a]={status:'retry',ts:now};
        out.reassessed.push(a);out.slipped.push(a);
      }else if(sp.due<=now){
        out.reassessed.push(a);
        if(sp.step===0){state.spaced[a]={step:1,due:now+RECHECK_DAYS[1]*DAY_MS};out.held.push(a);}
        else{delete state.spaced[a];state.mastered[a]=now;out.mastered.push(a);}
      }
      /* answered correctly but not yet due: nothing to change */
    }else if(!allRight){
      var wasMastered=!!state.mastered[a];
      delete state.mastered[a];
      state.pending[a]={status:wasMastered?'retry':'waiting',ts:now};
      if(wasMastered){out.reassessed.push(a);out.slipped.push(a);}else out.added.push(a);
    }
  });
  out.notAsked=before.filter(function(a){return !byArea[a];});
  return out;
}
/* A targeted round: every queued concept gets at least one question (two
   when there is room), and within a concept the questions the student has
   met least come first. The cap only limits the extras; it never drops a
   concept. */
function buildMasteryRound(targets,asked){
  var per=targets.length<=3?2:1;
  function familiarity(q){return (asked.indexOf(q)>-1?1000:0)+(state.seenQ[q.id]||0);}
  var set=[],leftovers=[];
  targets.forEach(function(a){
    var all=shuffle(POOL.filter(function(q){return q.area===a;}))
      .sort(function(x,y){return familiarity(x)-familiarity(y);});
    set=set.concat(all.slice(0,per));
    leftovers=leftovers.concat(all.slice(per));
  });
  if(set.length<4){
    set=set.concat(leftovers.sort(function(x,y){return familiarity(x)-familiarity(y);}).slice(0,4-set.length));
  }
  return shuffle(set);
}
/* "Practice completed" for a quiz page: the checkpoint-and-activity
   sections this quiz sits on top of. */
function practiceProgress(quizId){
  var secs=[];
  MODULES.forEach(function(m){
    var holdsThisQuiz=m.sections.some(function(s){return QUIZ_KEY_FOR_SECTION[s.key]===quizId;});
    if(quizId!=='final'&&!holdsThisQuiz)return;
    if(quizId==='final'&&holdsThisQuiz)return;
    m.sections.forEach(function(s){if(SECTION_REQ[s.key])secs.push(s.key);});
  });
  var done=secs.filter(sectionComplete).length;
  return {done:done,total:secs.length};
}
var NAME_FOR_QUIZ_SECTION={};
Object.keys(QUIZ_KEY_FOR_SECTION).forEach(function(k){NAME_FOR_QUIZ_SECTION[QUIZ_KEY_FOR_SECTION[k]]=k;});

document.querySelectorAll('.quiz-body').forEach(function(body){
  var quizId=body.dataset.quiz;
  var sec=body.closest('.section');
  var resultCard=sec.querySelector('.q-result');
  var warn=sec.querySelector('.q-warn');
  var submitBtn=sec.querySelector('.q-submit');
  var submitLabel=submitBtn.textContent;
  var questions=[],picks=[],orders=[],mode='normal',heading='',attempt=null,graded=false;

  /* ---- the three separate indicators ---- */
  var strip=el('div','q-status');
  body.parentNode.insertBefore(strip,body);
  function paintStrip(){
    var pp=practiceProgress(quizId);
    var pend=reviewListInScope(quizId).length,dueN=dueInScope(quizId).length;
    var best=state.best[quizId],last=state.lastScore[quizId];
    var practiceDone=pp.total>0&&pp.done===pp.total;
    strip.innerHTML=
      '<div class="q-stat'+(practiceDone?' ok':'')+'"><span class="k">Practice completed</span>'+
        '<span class="v">'+(pp.total?pp.done+' of '+plural(pp.total,'section','sections'):'No practice sections')+'</span></div>'+
      '<div class="q-stat'+(best!==undefined?' ok':'')+'"><span class="k">Assessment result</span>'+
        '<span class="v">'+(best!==undefined?('Best '+best+'%'+(last!==undefined?' · last '+last+'%':'')):'Not taken yet')+'</span></div>'+
      '<div class="q-stat'+(pend?' warn':(best!==undefined?' ok':''))+'"><span class="k">Review pending</span>'+
        '<span class="v">'+(pend?plural(pend,'concept','concepts')+(dueN?' ('+dueN+' recheck due)':''):'None')+'</span></div>';
  }
  QSP.push(paintStrip);paintStrip();

  /* ---- saving an unfinished attempt ---- */
  function saveAttempt(){
    if(!attempt||graded)return;
    state.attempts[quizId]={id:attempt.id,mode:mode,heading:heading,targets:attempt.targets||[],
      qids:questions.map(function(q){return q.id;}),orders:orders,picks:picks,
      ts:Date.now(),deadline:attempt.deadline||null};
    saveState();
  }
  function isPermutation(a,n){
    if(!Array.isArray(a)||a.length!==n)return false;
    var seen={};
    for(var i=0;i<a.length;i++){
      if(typeof a[i]!=='number'||a[i]%1!==0||a[i]<0||a[i]>=n||seen[a[i]])return false;
      seen[a[i]]=1;
    }
    return true;
  }
  /* Returns true only if the saved attempt still matches the question bank
     exactly. Anything off (a question edited out, a changed option count)
     and the saved attempt is dropped in favor of a fresh one. */
  function tryRestore(){
    var a=state.attempts[quizId];
    if(!a||!Array.isArray(a.qids)||!a.qids.length||typeof a.id!=='string')return false;
    if(state.recorded[a.id])return false;
    var list=[];
    for(var i=0;i<a.qids.length;i++){
      var q=POOL.filter(function(x){return x.id===a.qids[i];})[0];
      if(!q)return false;
      list.push(q);
    }
    if(!Array.isArray(a.orders)||a.orders.length!==list.length||!Array.isArray(a.picks)||a.picks.length!==list.length)return false;
    for(var j=0;j<list.length;j++){
      if(!isPermutation(a.orders[j],list[j].options.length))return false;
      var p=a.picks[j];
      if(p!==null&&!(typeof p==='number'&&p%1===0&&p>=0&&p<list[j].options.length))return false;
    }
    mode=(a.mode==='mastery')?'mastery':'normal';
    render(list,(typeof a.heading==='string'&&a.heading)?a.heading:'',
      {id:a.id,orders:a.orders,picks:a.picks,targets:Array.isArray(a.targets)?a.targets:[],
       deadline:(typeof a.deadline==='number')?a.deadline:null});
    return true;
  }

  function render(list,head,restore){
    questions=list;heading=head||'';graded=false;
    picks=restore?restore.picks.slice():new Array(list.length).fill(null);
    orders=[];
    attempt={id:restore?restore.id:newAttemptId(),targets:restore?restore.targets:[],deadline:restore?restore.deadline:null};
    submitBtn.disabled=false;submitBtn.textContent=submitLabel;
    body.innerHTML='';
    if(heading)body.appendChild(el('h3',null,heading));
    list.forEach(function(q,i){
      var ord=restore?restore.orders[i].slice():order(q.options.length);orders.push(ord);
      var wrap=el('div','q');
      wrap.id='qjump-'+quizId+'-'+i;
      wrap.appendChild(el('div','q-num','Question '+(i+1)+' of '+list.length+
        '<span class="q-level">'+q.level+'</span>'));
      wrap.appendChild(el('p','q-stem',q.stem));
      var box=el('div','choices');
      ord.forEach(function(realIdx,pos){
        var b=el('button','choice'+((restore&&picks[i]===realIdx)?' picked':''),'<span class="mark">'+LETTERS[pos]+'</span>'+q.options[realIdx]);
        b.onclick=function(){
          if(graded)return;
          picks[i]=realIdx;
          box.querySelectorAll('.choice').forEach(function(x){x.classList.remove('picked');});
          b.classList.add('picked');
          wrap.classList.remove('q-missing');
          saveAttempt();
        };
        box.appendChild(b);
      });
      wrap.appendChild(box);wrap.appendChild(el('div','feedback'));
      body.appendChild(wrap);
    });
    resultCard.classList.add('hidden');resultCard.innerHTML='';warn.textContent='';
    if(!restore)saveAttempt();
  }

  function grade(){
    if(graded)return;   /* a second click on Submit does nothing */
    var qWraps=body.querySelectorAll('.q');
    var missingIdx=[];
    picks.forEach(function(p,i){if(p===null)missingIdx.push(i);});
    qWraps.forEach(function(wrap,i){wrap.classList.toggle('q-missing',missingIdx.indexOf(i)>-1);});
    if(missingIdx.length>0){
      var n=missingIdx.length;
      warn.textContent=n+' question'+(n>1?'s still need':' still needs')+' an answer.';
      var first=qWraps[missingIdx[0]];
      first.setAttribute('tabindex','-1');
      try{first.scrollIntoView({behavior:'smooth',block:'center'});}catch(e){}
      try{first.focus();}catch(e){}
      return;
    }
    graded=true;
    submitBtn.disabled=true;submitBtn.textContent='Submitted';
    warn.textContent='';
    var byArea={},correct=0,missed=[];
    body.querySelectorAll('.q').forEach(function(wrap,i){
      var q=questions[i],right=(picks[i]===q.answer);
      if(right)correct++;
      else missed.push({num:i+1,area:q.area,stem:q.stem,id:wrap.id});
      if(!byArea[q.area])byArea[q.area]={got:0,total:0};
      byArea[q.area].total++;if(right)byArea[q.area].got++;
      wrap.querySelectorAll('.choice').forEach(function(b,pos){
        b.disabled=true;b.classList.remove('picked');
        if(orders[i][pos]===q.answer)b.classList.add('right');
        else if(orders[i][pos]===picks[i])b.classList.add('wrong');
      });
      var fb=wrap.querySelector('.feedback');
      fb.className='feedback show'+(right?'':' miss');
      fb.innerHTML='<strong>'+(right?'Correct.':'The better answer is highlighted above.')+'</strong>'+q.why;
      /* Flagging is offered only once an answer has been graded. Any button
         from an earlier grading of this same wrapper is removed first, so a
         question can never end up with two. */
      if(!state.flags)state.flags={};
      Array.prototype.slice.call(wrap.querySelectorAll('.flag-btn')).forEach(function(old){old.remove();});
      var flagBtn=el('button','btn ghost flag-btn'+(state.flags[q.id]?' on':''),
        state.flags[q.id]?'★ Flagged for review':'☆ Flag for review');
      flagBtn.style.marginTop='12px';
      flagBtn.setAttribute('aria-pressed',state.flags[q.id]?'true':'false');
      flagBtn.onclick=function(){
        if(state.flags[q.id]){delete state.flags[q.id];}
        else{state.flags[q.id]=Date.now();}
        saveState();
        var on=!!state.flags[q.id];
        flagBtn.className='btn ghost flag-btn'+(on?' on':'');
        flagBtn.innerHTML=on?'★ Flagged for review':'☆ Flag for review';
        flagBtn.setAttribute('aria-pressed',on?'true':'false');
      };
      wrap.appendChild(flagBtn);
    });
    var pct=Math.round(correct/questions.length*100);
    var weak=Object.keys(byArea).filter(function(a){return byArea[a].got<byArea[a].total;});

    /* Record the attempt exactly once. Everything that adds to a running
       total lives inside this one check. */
    var summary=null;
    if(!state.recorded[attempt.id]){
      var before=reviewListInScope(quizId);
      Object.keys(byArea).forEach(function(a){
        var b=byArea[a];
        var s=state.areaStats[a]||(state.areaStats[a]={asked:0,right:0,lastAcc:null,lastTs:0});
        s.asked+=b.total;s.right+=b.got;
        s.lastAcc=b.got/b.total;s.lastTs=Date.now();
      });
      questions.forEach(function(q){state.seenQ[q.id]=(state.seenQ[q.id]||0)+1;});
      summary=recordReview(byArea,before);
      /* "needed review" counts what was already on the list, plus any fixed
         concept that was missed again (it was not on the list a moment ago,
         but it is now, and it was reassessed by this attempt). */
      summary.hadPending=before.length+summary.slipped.filter(function(a){return before.indexOf(a)<0;}).length;
      if(mode==='normal'){
        state.lastScore[quizId]=pct;
        if(state.best[quizId]===undefined||pct>state.best[quizId])state.best[quizId]=pct;
      }
      state.recorded[attempt.id]=Date.now();
      var rk=Object.keys(state.recorded);
      if(rk.length>40){rk.sort(function(a,b){return state.recorded[a]-state.recorded[b];})
        .slice(0,rk.length-40).forEach(function(k){delete state.recorded[k];});}
      delete state.attempts[quizId];
      saveState();paintNav();
    }
    showResult(pct,correct,byArea,missed,summary);
  }

  function jumpToMissed(id){
    var target=document.getElementById(id);
    if(!target)return;
    try{target.scrollIntoView({behavior:'smooth',block:'center'});}catch(e){}
    target.classList.remove('q-jumped');
    void target.offsetWidth;
    target.classList.add('q-jumped');
  }

  /* The review panel: what needs attention, how each concept stands, where
     to study it, and the round that reassesses it. Shown after grading and
     again on every later visit while anything needs attention. */
  function renderReview(host,summary){
    var list=reviewListInScope(quizId);
    var panel=el('div','review-panel');
    if(summary&&(summary.hadPending||summary.held.length||summary.mastered.length)){
      var bits=[];
      if(summary.improved.length)bits.push(plural(summary.improved.length,'concept','concepts')+' improved');
      if(summary.held.length)bits.push(plural(summary.held.length,'concept','concepts')+' held up on recheck');
      if(summary.mastered.length)bits.push(plural(summary.mastered.length,'concept','concepts')+' mastered');
      if(summary.slipped.length)bits.push(plural(summary.slipped.length,'concept','concepts')+' slipped back');
      if(summary.still.length)bits.push(summary.still.length+(summary.still.length===1?' still needs':' still need')+' practice');
      if(summary.notAsked.length)bits.push(summary.notAsked.length+' not yet reassessed');
      var head=el('div','rv-sum');
      head.appendChild(el('strong',null,(bits.length?bits.join('; '):'No change')+'.'));
      head.appendChild(el('div','rv-sum-sub','Reassessed '+summary.reassessed.length+' of '+summary.hadPending+
        ' concept'+(summary.hadPending===1?'':'s')+' that needed review.'+
        (summary.improved.length?' Improved concepts will be rechecked in '+RECHECK_DAYS[0]+' days, to make sure they stuck.':'')));
      panel.appendChild(head);
    }
    var sched=scheduledInScope(quizId),mast=masteredInScope(quizId);
    if(!list.length){
      panel.appendChild(el('div','next-step ok','<strong>Nothing is waiting for review.</strong> '+
        (sched.length?'Concepts you fixed are not marked as mastered yet: '+plural(sched.length,'concept','concepts')+
          ' will be rechecked later, starting '+niceDate(Math.min.apply(null,sched.map(function(a){return state.spaced[a].due;})))+'.':
          (mast.length||(summary&&summary.improved.length)?'Every concept you missed has been answered correctly on a later try.':'Every concept area was answered correctly.'))));
      if(mast.length)panel.appendChild(el('p','rv-note','Mastered so far: '+plural(mast.length,'concept','concepts')+'.'));
      host.appendChild(panel);return;
    }
    panel.appendChild(el('h3',null,'Review next: '+plural(list.length,'concept','concepts')));
    var rows=el('div','review-rows');
    list.forEach(function(area){
      var p=state.pending[area];
      var isNew=!!(summary&&summary.added.indexOf(area)>-1);
      var cls,label;
      if(!p){cls='due';label='Recheck due';}
      else if(isNew){cls='new';label='Newly missed';}
      else if(summary&&summary.slipped.indexOf(area)>-1){cls='retry';label='Slipped back';}
      else if(p.status==='retry'){cls='retry';label='Still needs practice';}
      else{cls='wait';label='Not yet reassessed';}
      var info=sectionInfoForArea(area);
      var row=el('div','review-row');
      row.appendChild(el('span','rv-name',area));
      row.appendChild(el('span','rv-chip '+cls,label));
      if(info){
        var ob=el('button','btn ghost small',info.activity?'Open the activity':'Open the section');
        ob.type='button';ob.title=info.label;
        ob.onclick=function(){openConcept(area);};
        row.appendChild(ob);
      }
      rows.appendChild(row);
    });
    panel.appendChild(rows);
    var btnRow=el('div','rv-actions');
    var mb=el('button','btn','Practice these '+plural(list.length,'concept','concepts'));
    mb.type='button';
    mb.onclick=function(){startMastery(list.slice());};
    btnRow.appendChild(mb);
    if(typeof reviewCards==='function'&&reviewCards().length){
      var fb=el('button','btn ghost','Study the related flashcards');
      fb.type='button';fb.onclick=function(){openReviewDeck();};
      btnRow.appendChild(fb);
    }
    panel.appendChild(btnRow);
    var foot=[];
    if(sched.length)foot.push(plural(sched.length,'fixed concept','fixed concepts')+' scheduled for a recheck (next: '+
      niceDate(Math.min.apply(null,sched.map(function(a){return state.spaced[a].due;})))+')');
    if(mast.length)foot.push(plural(mast.length,'concept','concepts')+' mastered');
    foot.push('Concepts stay on this list, even if you leave or reload, until you answer a question about them correctly');
    panel.appendChild(el('p','rv-note',foot.join('. ')+'.'));
    host.appendChild(panel);
  }

  function showResult(pct,correct,byArea,missed,summary){
    resultCard.classList.remove('hidden');resultCard.innerHTML='';
    var hero=el('div','score-hero');
    hero.appendChild(el('div','big',pct+'%'));
    hero.appendChild(el('div',null,'<strong>'+correct+' of '+questions.length+' correct</strong>'));
    hero.appendChild(el('p',null,
      pct>=88?'Strong command of this material.':
      pct>=63?'A solid foundation with a few gaps worth closing.':
              'Worth another pass through the sections before moving on.'));
    resultCard.appendChild(hero);

    if(missed&&missed.length){
      resultCard.appendChild(el('h3',null,'Questions to review ('+missed.length+')'));
      var ml=el('div','missed-list');
      missed.forEach(function(m){
        var row=el('button','missed-row');
        row.type='button';
        row.title=m.stem;
        row.innerHTML='<span class="missed-num">Q'+m.num+'</span>'+
          '<span class="missed-stem">'+m.stem+'</span>'+
          '<span class="missed-area">'+m.area+'</span>'+
          '<span class="missed-arrow">Review &darr;</span>';
        row.onclick=function(){jumpToMissed(m.id);};
        ml.appendChild(row);
      });
      resultCard.appendChild(ml);
    }

    resultCard.appendChild(el('h3',null,'Mastery by concept area'));
    var bd=el('div','bd');
    Object.keys(byArea).forEach(function(area){
      var a=byArea[area],p=Math.round(a.got/a.total*100);
      var label=p===100?'Strong':(p>=50?'Developing':'Needs review');
      var cls=p===100?'s-strong':(p>=50?'s-dev':'s-review');
      var color=p===100?'#2FA97A':(p>=50?'#E0A73C':'#D4536B');
      bd.appendChild(el('div','bd-row',
        '<span class="bd-name">'+area+'</span>'+
        '<span class="bd-bar"><span class="bd-fill" style="width:'+p+'%;background:'+color+'"></span></span>'+
        '<span class="bd-state '+cls+'">'+label+' · '+a.got+'/'+a.total+'</span>'));
    });
    resultCard.appendChild(bd);
    renderReview(resultCard,summary);
    paintStrip();
    try{resultCard.scrollIntoView({behavior:'smooth',block:'start'});}catch(e){}
  }

  function startMastery(targets){
    var asked=questions.slice();
    var set=buildMasteryRound(targets,asked);
    if(!set.length)return;
    mode='mastery';
    render(set,'Targeted round · '+plural(set.length,'question','questions')+' on '+plural(targets.length,'concept','concepts')+': '+targets.join(', '));
    attempt.targets=targets.slice();
    saveAttempt();
    try{body.scrollIntoView({behavior:'smooth',block:'start'});}catch(e){}
  }

  submitBtn.onclick=grade;
  sec.querySelector('.q-retake').onclick=function(){
    delete state.attempts[quizId];
    mode='normal';render(buildSet(quizId));
    window.scrollTo({top:0,behavior:'smooth'});};

  if(tryRestore()){
    warn.textContent='Restored your unfinished attempt.';
    var pq=reviewListInScope(quizId);
    if(pq.length){resultCard.classList.remove('hidden');resultCard.innerHTML='';renderReview(resultCard,null);}
  }else{
    delete state.attempts[quizId];
    render(buildSet(quizId));
    var pq2=reviewListInScope(quizId);
    if(pq2.length){resultCard.classList.remove('hidden');resultCard.innerHTML='';renderReview(resultCard,null);}
  }
});
document.getElementById('resetBtn').onclick=function(){
  var keepN=(state.myCards||[]).length;
  if(!confirm('Clear all saved progress on this device? This cannot be undone.'+
    (keepN?'\n\nThe '+keepN+' flashcard'+(keepN===1?'':'s')+' you made will be kept. You can delete them one at a time on the Flashcards page.':'')))return;
  /* Progress is cleared; the student's own cards are not progress, so they
     are written straight back. Deleting a student's own writing as a side
     effect of "reset progress" would be a far worse surprise than keeping it. */
  var keep=(state.myCards||[]).slice();
  try{
    if(storageWorks){localStorage.removeItem(KEY);}else{delete memory[KEY];}
    if(keep.length){
      var raw=JSON.stringify({myCards:keep});
      if(storageWorks){localStorage.setItem(KEY,raw);}else{memory[KEY]=raw;}
    }
  }catch(e){}
  location.reload();
};

/* Module landing-page checklist rows navigate like any other nav item. */
document.querySelectorAll('.home-item[data-goto]').forEach(function(btn){
  btn.onclick=function(){goTo(FLOW.findIndex(function(f){return f.key===btn.dataset.goto;}));};
});
var jumpFlash=document.getElementById('jumpFlash');
if(jumpFlash){jumpFlash.onclick=function(){goTo(FLOW.findIndex(function(f){return f.key==='flashcards';}));};}

goTo(resolveStartSection());
if(!storageWorks){
  document.getElementById('topMeta').textContent=
    (typeof TOPIC_TITLE!=='undefined'?TOPIC_TITLE:'This companion')+
    ' · This browser is blocking saved progress, so this session will not be remembered.';
}
