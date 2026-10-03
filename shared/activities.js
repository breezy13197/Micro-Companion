/* ============================================================
   COMPANION ACTIVITIES — shared across every topic
   A small toolkit of practice activities (drag-and-drop, sorting,
   ordering, fill-in-the-blank, clickable diagrams, staged cases,
   step-through animations). Like engine.js, it knows nothing about
   any one subject: a topic's page describes WHAT to show, and this
   file supplies HOW it behaves, saves, and scores.

   It reads these globals, which must already exist when it loads:
     state, saveState()          (shared/storage.js)
     el(), shuffle(), order(), LETTERS   (shared/helpers.js)
   It calls paintNav() (shared/engine.js) only inside click
   handlers, after the page has finished loading, so it is safe to
   load BEFORE engine.js. Load it after helpers.js and before the
   page's own content script.

   Every activity follows the completion pattern in
   companion-architecture.md §8:
     - Check       -> state.activities.<name> = <data>; saveState(); paintNav()
     - Try again   -> state.activities.<name> = null;   saveState(); paintNav()
   A section listing `activity:'<name>'` in the manifest counts as
   done once state.activities.<name> is non-null. Activities that
   are explored rather than checked (explore, stages, stepper) set
   it to `true` only when the whole activity has been finished, and
   keep their partial progress under `<name>_v` / `<name>_n`, keys
   the completion rules never look at.

   Every builder returns a small object with solve(), which
   performs the activity correctly through the same code path a
   student's clicks use. It exists only so automated QA can drive a
   page to 100% (see §12); students never see it.
   ============================================================ */
var Act=(function(){
  var registry={};

  /* Styles live here (not in styles.css) so styles.css stays exactly
     as every other companion has it. They use only design tokens, so
     each companion's own accent color themes them automatically. */
  (function injectCSS(){
    var css=
    '.act-order{list-style:none;margin:8px 0;padding:0;display:grid;gap:8px}'+
    '.act-order li{display:flex;align-items:center;gap:12px;padding:10px 12px;background:#F7FAFB;border:1.5px solid var(--line);border-radius:var(--r-md)}'+
    '.act-order li.ok{border-color:var(--ok,#2FA97A);background:var(--ok-soft,#E7F6EF)}'+
    '.act-order li.no{border-color:var(--rose);background:var(--rose-soft)}'+
    '.act-num{flex:0 0 28px;height:28px;border-radius:9px;background:#EAEFF3;display:grid;place-items:center;font-weight:700;font-size:.8rem;color:var(--ink-soft)}'+
    '.act-txt{flex:1;min-width:0;font-size:.93rem}'+
    '.act-mv{display:flex;gap:4px}'+
    '.act-mv button{width:34px;height:34px;padding:0;border:1.5px solid var(--line);background:#fff;border-radius:9px;color:var(--ink-mid);font-size:.85rem}'+
    '.act-mv button:hover:not(:disabled){border-color:var(--green-line);color:var(--green)}'+
    '.act-mv button:disabled{opacity:.35;cursor:not-allowed}'+
    '.act-answer{display:block;font-size:.78rem;color:var(--rose);font-weight:650;margin-top:3px}'+
    '.act-hint{font-size:.85rem;color:var(--ink-soft);margin:0 0 10px}'+
    '.act-explore .figure{margin:8px 0 14px}'+
    '.act-chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}'+
    '.act-chip{border:1.5px solid var(--line);background:#fff;border-radius:999px;padding:6px 13px;font-size:.82rem;color:var(--ink-mid)}'+
    '.act-chip:hover{border-color:var(--green-line)}'+
    '.act-chip.done{border-color:var(--ok,#2FA97A)}'+
    '.act-chip.done::after{content:" \\2713";color:var(--ok,#2FA97A);font-weight:700}'+
    '.act-chip.on{background:var(--green-soft);border-color:var(--green);color:var(--green);font-weight:650}'+
    '.act-panel{background:#F7FAFB;border:1px solid var(--line);border-radius:var(--r-md);padding:16px 18px;min-height:92px}'+
    '.act-panel h4{margin:0 0 6px;font-size:1rem}'+
    '.act-panel p:last-child{margin-bottom:0}'+
    '.act-hs{cursor:pointer;transition:filter .15s}'+
    '.act-hs:hover,.act-hs:focus-visible{filter:brightness(1.1)}'+
    '.act-hs.on{filter:drop-shadow(0 0 5px rgba(245,179,43,.95))}'+
    '.act-stage{border-top:1px solid var(--line);padding:20px 0}'+
    '.act-stage:first-child{border-top:0;padding-top:4px}'+
    '.act-lead{background:#F7FAFB;border:1px solid var(--line);border-radius:var(--r-md);padding:14px 16px;margin:0 0 14px;font-size:.94rem}'+
    '.act-lead p:last-child{margin-bottom:0}'+
    '.act-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}'+
    '.act-scene .figure{margin:0}'+
    '.act-scene svg *{transition:transform .9s ease,opacity .7s ease,fill .7s ease;transform-box:fill-box;transform-origin:center}'+
    '.act-cap{min-height:3.4em;background:#F7FAFB;border:1px solid var(--line);border-radius:var(--r-sm);padding:12px 14px;margin-top:10px;font-size:.93rem}'+
    '.act-fill{line-height:2.4}'+
    '.act-fill select{font:inherit;font-size:.9rem;padding:4px 8px;border:1.5px solid var(--line);border-radius:8px;background:#fff;color:var(--ink);max-width:100%}'+
    '.act-fill select.ok{border-color:var(--ok,#2FA97A);background:var(--ok-soft,#E7F6EF)}'+
    '.act-fill select.no{border-color:var(--rose);background:var(--rose-soft)}'+
    '.dnd-desc svg{vertical-align:middle}'+
    '.act-why{flex:1 1 100%;font-size:.84rem;line-height:1.5;color:var(--ink-mid);background:#F7FAFB;border-left:3px solid var(--line);padding:6px 10px;border-radius:6px;margin-top:6px}'+
    '.dnd-desc .act-why{margin-top:8px}'+
    '.act-gate{background:#F7FAFB;border:1px solid var(--line);border-radius:var(--r-md);padding:14px 16px;margin:0 0 14px}'+
    '.act-gate .q-stem{margin-bottom:6px}'+
    '.act-gate .choices{margin:8px 0}'+
    '.act-panel .choices{margin:10px 0}'+
    '.act-panel .figure{margin:14px 0 4px;background:#fff}'+
    '@media (prefers-reduced-motion:reduce){.act-scene svg *{transition:none !important}}';
    var s=document.createElement('style');s.setAttribute('data-act','1');s.textContent=css;document.head.appendChild(s);
  })();

  function host(h){return typeof h==='string'?document.getElementById(h):h;}
  function done(name,val){state.activities[name]=val;saveState();if(typeof paintNav==='function')paintNav();}
  function keep(name,val){state.activities[name]=val;saveState();}
  function controls(withCheck){
    var c=el('div','controls');
    var chk=null,again=el('button','btn ghost','Try again'),cap=el('span','caption');
    cap.style.margin='0';cap.setAttribute('aria-live','polite');
    if(withCheck!==false){chk=el('button','btn','Check my answers');c.appendChild(chk);}
    c.appendChild(again);c.appendChild(cap);
    return {box:c,check:chk,again:again,cap:cap};
  }
  function press(node){
    node.addEventListener('keydown',function(e){
      if(e.key==='Enter'||e.key===' '){e.preventDefault();node.click();}
    });
  }
  function scoreText(right,total){
    return 'Score: '+right+' of '+total+' correct.'+(right===total?' Every one is right.':' The answers you missed are marked so you can see the pattern.');
  }

  /* ---------- DRAG AND DROP (match each row to a labeled pill) ----------
     cfg: {name, rows:[{text:'html', answer:'Pill label'}], pills:['Pill label',...]}
     Pills can be dragged with a mouse or finger, or selected and then
     placed by clicking a row (keyboard: Enter on a pill, then Enter on a row). */
  function dnd(h,cfg){
    h=host(h);var name=cfg.name,N=cfg.rows.length;
    var board=el('div','dnd-board'),tray=el('div','dnd-tray'),ctl=controls();
    var slots=[],pills=[],selected=null,locked=false,justDragged=false;
    cfg.rows.forEach(function(r,i){
      var row=el('div','dnd-row');row.appendChild(el('div','dnd-desc',r.text));
      var slot=el('div','dnd-slot');slot.tabIndex=0;slot.setAttribute('role','button');
      slot.setAttribute('aria-label','Answer slot for item '+(i+1));
      row.appendChild(slot);board.appendChild(row);slots.push({row:row,slot:slot,desc:row.firstChild});
    });
    shuffle(cfg.pills).forEach(function(label){
      var p=el('div','dnd-pill');p.textContent=label;p.tabIndex=0;p.setAttribute('role','button');
      p.setAttribute('aria-pressed','false');tray.appendChild(p);pills.push(p);
    });
    h.appendChild(board);h.appendChild(tray);h.appendChild(ctl.box);
    function slotOf(p){var s=p.parentNode;return s&&s.classList.contains('dnd-slot')?s:null;}
    function clearSel(){if(selected){selected.classList.remove('sel');selected.setAttribute('aria-pressed','false');selected.style.outline='';}selected=null;}
    function select(p){
      if(selected===p){clearSel();return;}
      clearSel();selected=p;p.setAttribute('aria-pressed','true');p.style.outline='3px solid var(--green-bright)';
    }
    function place(p,target){
      if(locked)return;
      var from=slotOf(p)||tray;
      if(target===from){clearSel();return;}
      if(target.classList.contains('dnd-slot')){
        var occ=target.querySelector('.dnd-pill');
        if(occ&&occ!==p){from.appendChild(occ);occ.classList.toggle('placed',from!==tray);}
        target.appendChild(p);
      }else{tray.appendChild(p);}
      p.classList.toggle('placed',!!slotOf(p));
      clearSel();ctl.cap.textContent='';
    }
    pills.forEach(function(p){
      p.addEventListener('click',function(e){e.stopPropagation();if(justDragged||locked)return;select(p);});
      press(p);
      p.addEventListener('pointerdown',function(e){
        if(locked||(e.button&&e.button>0))return;
        var sx=e.clientX,sy=e.clientY,moved=false,ghost=null;
        try{p.setPointerCapture(e.pointerId);}catch(x){}
        function under(x,y){var t=document.elementFromPoint(x,y);return t?t.closest('.dnd-slot,.dnd-tray'):null;}
        function mv(ev){
          if(!moved&&Math.abs(ev.clientX-sx)+Math.abs(ev.clientY-sy)<7)return;
          if(!moved){moved=true;ghost=el('div','dnd-ghost');ghost.textContent=p.textContent;document.body.appendChild(ghost);p.classList.add('dragging');}
          ghost.style.left=ev.clientX+'px';ghost.style.top=ev.clientY+'px';
          slots.forEach(function(s){s.slot.classList.remove('over');});
          var t=under(ev.clientX,ev.clientY);if(t&&t.classList.contains('dnd-slot'))t.classList.add('over');
        }
        function up(ev){
          p.removeEventListener('pointermove',mv);p.removeEventListener('pointerup',up);p.removeEventListener('pointercancel',up);
          try{p.releasePointerCapture(e.pointerId);}catch(x){}
          slots.forEach(function(s){s.slot.classList.remove('over');});
          if(ghost){ghost.remove();p.classList.remove('dragging');}
          if(moved){justDragged=true;setTimeout(function(){justDragged=false;},0);var t=under(ev.clientX,ev.clientY);if(t)place(p,t);}
        }
        p.addEventListener('pointermove',mv);p.addEventListener('pointerup',up);p.addEventListener('pointercancel',up);
      });
    });
    slots.forEach(function(s){
      s.slot.addEventListener('click',function(){
        if(locked)return;
        if(selected){place(selected,s.slot);}
        else{var p=s.slot.querySelector('.dnd-pill');if(p)select(p);}
      });
      press(s.slot);
    });
    tray.addEventListener('click',function(){if(!locked&&selected&&slotOf(selected))place(selected,tray);});

    function layout(){return slots.map(function(s){var p=s.slot.querySelector('.dnd-pill');return p?p.textContent:null;});}
    function mark(){
      var right=0;locked=true;
      slots.forEach(function(s,i){
        var p=s.slot.querySelector('.dnd-pill'),ok=p&&p.textContent===cfg.rows[i].answer;
        if(ok)right++;
        s.row.classList.add(ok?'correct':'incorrect');
        if(!ok){var a=el('span','act-answer','Correct match: '+cfg.rows[i].answer);s.desc.appendChild(a);}
        if(cfg.rows[i].why)s.desc.appendChild(el('div','act-why',cfg.rows[i].why));
      });
      pills.forEach(function(p){p.classList.add('locked');});
      ctl.check.disabled=true;ctl.cap.textContent=scoreText(right,N);
    }
    function reset(){
      locked=false;clearSel();
      slots.forEach(function(s){s.row.classList.remove('correct','incorrect');
        var a=s.desc.querySelector('.act-answer');if(a)a.remove();
        var w=s.desc.querySelector('.act-why');if(w)w.remove();});
      shuffle(pills).forEach(function(p){p.classList.remove('locked','placed');tray.appendChild(p);});
      ctl.check.disabled=false;ctl.cap.textContent='';
    }
    ctl.check.onclick=function(){
      var L=layout();
      if(L.some(function(x){return x===null;})){ctl.cap.textContent='Place a pill in every row, then check.';return;}
      mark();done(name,{layout:L});
    };
    ctl.again.onclick=function(){reset();done(name,null);};
    function apply(L){
      L.forEach(function(label,i){
        var p=pills.filter(function(x){return x.textContent===label;})[0];
        if(p){slots[i].slot.appendChild(p);p.classList.add('placed');}
      });
    }
    var saved=state.activities[name];
    if(saved&&saved.layout){apply(saved.layout);mark();}
    var api={cfg:cfg,solve:function(){
      if(locked)reset();
      cfg.rows.forEach(function(r,i){
        var p=pills.filter(function(x){return x.textContent===r.answer;})[0];
        p.click();slots[i].slot.click();
      });
      ctl.check.click();
    }};
    registry[name]=api;return api;
  }

  /* ---------- SORT / MATCH (pick one option per row) ----------
     cfg: {name, options:['A','B',...], rows:[{text:'html', answer:'A'}]} */
  function sort(h,cfg){
    h=host(h);var name=cfg.name,N=cfg.rows.length,picks=new Array(N).fill(null),locked=false;
    var box=el('div'),ctl=controls(),rowEls=[];
    cfg.rows.forEach(function(r,i){
      var row=el('div','sort-row');row.appendChild(el('div','sort-text',r.text));
      var opts=el('div','sort-opts');
      cfg.options.forEach(function(o){
        var b=el('button','opt');b.type='button';b.textContent=o;b.dataset.val=o;
        b.onclick=function(){
          if(locked)return;picks[i]=o;
          opts.querySelectorAll('.opt').forEach(function(x){x.classList.remove('sel');});
          b.classList.add('sel');ctl.cap.textContent='';
        };
        opts.appendChild(b);
      });
      row.appendChild(opts);box.appendChild(row);rowEls.push(row);
    });
    h.appendChild(box);h.appendChild(ctl.box);
    function mark(){
      var right=0;locked=true;
      rowEls.forEach(function(row,i){
        row.querySelectorAll('.opt').forEach(function(b){
          b.disabled=true;var v=b.dataset.val;
          b.classList.toggle('sel',v===picks[i]);
          if(v===cfg.rows[i].answer)b.classList.add('reveal');
          if(v===picks[i]&&v!==cfg.rows[i].answer)b.classList.add('bad');
        });
        if(picks[i]===cfg.rows[i].answer)right++;
        if(cfg.rows[i].why&&!row.querySelector('.act-why'))row.appendChild(el('div','act-why',cfg.rows[i].why));
      });
      ctl.check.disabled=true;ctl.cap.textContent=scoreText(right,N);
    }
    ctl.check.onclick=function(){
      if(picks.some(function(x){return x===null;})){ctl.cap.textContent='Choose an answer in every row, then check.';return;}
      mark();done(name,{picks:picks.slice()});
    };
    ctl.again.onclick=function(){
      locked=false;picks=new Array(N).fill(null);
      rowEls.forEach(function(row){row.querySelectorAll('.opt').forEach(function(b){b.disabled=false;b.classList.remove('sel','reveal','bad');});
        var w=row.querySelector('.act-why');if(w)w.remove();});
      ctl.check.disabled=false;ctl.cap.textContent='';done(name,null);
    };
    var saved=state.activities[name];
    if(saved&&saved.picks){picks=saved.picks.slice();mark();}
    var api={cfg:cfg,solve:function(){
      if(locked)ctl.again.click();
      cfg.rows.forEach(function(r,i){
        rowEls[i].querySelector('.opt[data-val="'+r.answer.replace(/"/g,'\\"')+'"]').click();
      });
      ctl.check.click();
    }};
    registry[name]=api;return api;
  }

  /* ---------- PUT IN ORDER (move items up/down) ----------
     cfg: {name, items:['step 1 html','step 2 html',...]}  — listed in the CORRECT order */
  function orderAct(h,cfg){
    h=host(h);var name=cfg.name,N=cfg.items.length,locked=false;
    var seq=[];
    function fresh(){
      var s;do{s=shuffle(cfg.items.map(function(_,i){return i;}));}
      while(s.every(function(v,i){return v===i;})&&N>1);
      return s;
    }
    seq=fresh();
    var list=el('ol','act-order'),ctl=controls();
    h.appendChild(list);h.appendChild(ctl.box);
    function paint(res){
      list.innerHTML='';
      seq.forEach(function(idx,pos){
        var li=el('li');
        li.appendChild(el('span','act-num',String(pos+1)));
        var t=el('div','act-txt',cfg.items[idx]);li.appendChild(t);
        var mv=el('div','act-mv');
        var up=el('button',null,'\u25B2'),dn=el('button',null,'\u25BC');
        up.type=dn.type='button';
        up.setAttribute('aria-label','Move up');dn.setAttribute('aria-label','Move down');
        up.disabled=locked||pos===0;dn.disabled=locked||pos===N-1;
        up.onclick=function(){swap(pos,pos-1);};dn.onclick=function(){swap(pos,pos+1);};
        mv.appendChild(up);mv.appendChild(dn);li.appendChild(mv);
        if(res){
          var ok=idx===pos;li.classList.add(ok?'ok':'no');
          if(!ok)t.appendChild(el('span','act-answer','Belongs at position '+(idx+1)));
        }
        list.appendChild(li);
      });
    }
    function swap(a,b){
      if(locked||b<0||b>=N)return;
      var t=seq[a];seq[a]=seq[b];seq[b]=t;ctl.cap.textContent='';paint();
      var moved=list.children[b].querySelectorAll('.act-mv button');
      var target=(b<a)?moved[0]:moved[1];if(target&&!target.disabled){try{target.focus();}catch(e){}}
    }
    function mark(){
      locked=true;paint(true);
      var right=seq.filter(function(idx,pos){return idx===pos;}).length;
      ctl.check.disabled=true;ctl.cap.textContent=scoreText(right,N).replace('Every one is right.','Every step is in the right place.');
    }
    ctl.check.onclick=function(){mark();done(name,{seq:seq.slice()});};
    ctl.again.onclick=function(){locked=false;seq=fresh();ctl.check.disabled=false;ctl.cap.textContent='';paint();done(name,null);};
    var saved=state.activities[name];
    if(saved&&saved.seq&&saved.seq.length===N){seq=saved.seq.slice();mark();}else{paint();}
    var api={cfg:cfg,solve:function(){
      if(locked)ctl.again.click();
      seq=cfg.items.map(function(_,i){return i;});paint();ctl.check.click();
    }};
    registry[name]=api;return api;
  }

  /* ---------- FILL IN THE BLANK (choose from a word bank) ----------
     cfg: {name, text:'A sentence with {0} and {1}.', bank:['word',...], answers:['word','word']} */
  function fill(h,cfg){
    h=host(h);var name=cfg.name,sels=[],locked=false;
    var p=el('p','act-fill'),ctl=controls();
    var parts=cfg.text.split(/\{(\d+)\}/);
    parts.forEach(function(part,i){
      if(i%2===0){p.appendChild(document.createTextNode(part));return;}
      var sel=document.createElement('select');sel.setAttribute('aria-label','Blank '+(Number(part)+1));
      var o0=document.createElement('option');o0.value='';o0.textContent='choose…';sel.appendChild(o0);
      shuffle(cfg.bank).forEach(function(w){var o=document.createElement('option');o.value=w;o.textContent=w;sel.appendChild(o);});
      sel.onchange=function(){ctl.cap.textContent='';};
      sels[Number(part)]=sel;p.appendChild(sel);
    });
    h.appendChild(p);h.appendChild(ctl.box);
    function mark(){
      var right=0;locked=true;
      sels.forEach(function(s,i){
        s.disabled=true;var ok=s.value===cfg.answers[i];if(ok)right++;
        s.classList.add(ok?'ok':'no');
        if(!ok){var a=el('span','act-answer','Should be: '+cfg.answers[i]);s.parentNode.insertBefore(a,s.nextSibling);a.style.display='inline';a.style.marginLeft='6px';}
      });
      ctl.check.disabled=true;ctl.cap.textContent=scoreText(right,sels.length);
    }
    ctl.check.onclick=function(){
      if(sels.some(function(s){return !s.value;})){ctl.cap.textContent='Fill every blank, then check.';return;}
      mark();done(name,{v:sels.map(function(s){return s.value;})});
    };
    ctl.again.onclick=function(){
      locked=false;
      sels.forEach(function(s){s.disabled=false;s.value='';s.classList.remove('ok','no');});
      p.querySelectorAll('.act-answer').forEach(function(a){a.remove();});
      ctl.check.disabled=false;ctl.cap.textContent='';done(name,null);
    };
    var saved=state.activities[name];
    if(saved&&saved.v){saved.v.forEach(function(v,i){if(sels[i])sels[i].value=v;});mark();}
    var api={cfg:cfg,solve:function(){
      if(locked)ctl.again.click();
      sels.forEach(function(s,i){s.value=cfg.answers[i];});ctl.check.click();
    }};
    registry[name]=api;return api;
  }

  /* ---------- EXPLORE (clickable diagram; done once every part is opened) ----------
     cfg: {name, svg:'<svg>…</svg>' whose clickable parts carry data-hs="id",
           items:{id:{title:'…', html:'…'}}, ids:['id',...] (display order of the chips),
           start:'text shown before anything is chosen'} */
  function explore(h,cfg){
    h=host(h);var name=cfg.name,ids=cfg.ids,vkey=name+'_v';
    var visited=(state.activities[vkey]||[]).slice();
    var wrap=el('div','act-explore'),fig=el('div','figure',cfg.svg),chips=el('div','act-chips'),
        panel=el('div','act-panel'),prog=el('p','caption');
    panel.setAttribute('aria-live','polite');
    panel.innerHTML='<p style="color:var(--ink-soft);margin:0">'+(cfg.start||'Select a part of the diagram, or a button below, to see what it does.')+'</p>';
    var chipEls={};
    ids.forEach(function(id){
      var b=el('button','act-chip');b.type='button';b.textContent=cfg.items[id].title;
      b.onclick=function(){show(id);};chips.appendChild(b);chipEls[id]=b;
    });
    wrap.appendChild(fig);wrap.appendChild(chips);wrap.appendChild(panel);wrap.appendChild(prog);h.appendChild(wrap);
    var spots={};
    fig.querySelectorAll('[data-hs]').forEach(function(n){
      var id=n.getAttribute('data-hs');spots[id]=n;n.classList.add('act-hs');
      n.setAttribute('tabindex','0');n.setAttribute('role','button');
      n.setAttribute('aria-label',(cfg.items[id]||{}).title||id);
      n.addEventListener('click',function(){show(id);});press(n);
    });
    function paint(cur){
      ids.forEach(function(id){
        chipEls[id].classList.toggle('done',visited.indexOf(id)>-1);
        chipEls[id].classList.toggle('on',id===cur);
        if(spots[id])spots[id].classList.toggle('on',id===cur);
      });
      prog.textContent=visited.length>=ids.length?'You have opened every part. \u2713':visited.length+' of '+ids.length+' parts opened.';
    }
    function show(id){
      var it=cfg.items[id];
      panel.innerHTML='<h4>'+it.title+'</h4>'+it.html;
      if(visited.indexOf(id)===-1){visited.push(id);keep(vkey,visited.slice());}
      paint(id);
      if(visited.length>=ids.length&&!state.activities[name])done(name,true);
    }
    paint(null);
    var api={cfg:cfg,solve:function(){ids.forEach(function(id){show(id);});}};
    registry[name]=api;return api;
  }

  /* ---------- STAGES (a case unfolds one decision at a time) ----------
     cfg: {name, stages:[{lead:'html shown first', prompt:'question', options:[…],
           answer:0, why:'explanation', reveal:'html shown once answered'}]}
     Each stage retries until correct, like a checkpoint. */
  function stages(h,cfg){
    h=host(h);var name=cfg.name,N=cfg.stages.length,nkey=name+'_n';
    var n=Number(state.activities[nkey]||0),wrap=el('div','act-stages'),levels=[];
    h.appendChild(wrap);
    function build(i,already){
      var s=cfg.stages[i],box=el('div','act-stage');
      if(s.lead)box.appendChild(el('div','act-lead',s.lead));
      box.appendChild(el('p','q-stem',s.prompt));
      var ch=el('div','choices'),fb=el('div','feedback'),ord=order(s.options.length);
      box.appendChild(ch);box.appendChild(fb);
      var btns=[];
      ord.forEach(function(ri,pos){
        var b=el('button','choice','<span class="mark">'+LETTERS[pos]+'</span>'+s.options[ri]);
        b.onclick=function(){pick(ri);};ch.appendChild(b);btns.push(b);
      });
      function pick(ri){
        if(ri===s.answer){
          btns.forEach(function(b,pos){b.disabled=true;b.classList.remove('wrong');if(ord[pos]===s.answer)b.classList.add('right');});
          fb.className='feedback show';
          fb.innerHTML='<strong>That\u2019s it.</strong>'+s.why+(s.reveal?'<div style="margin-top:10px">'+s.reveal+'</div>':'');
          if(!already){
            keep(nkey,i+1);
            if(i+1===N)done(name,true);else build(i+1,false);
          }
        }else{
          btns.forEach(function(b){b.classList.remove('right','wrong');});
          btns[ord.indexOf(ri)].classList.add('wrong');
          fb.className='feedback show miss';fb.innerHTML='<strong>Not quite \u2014 try again.</strong>';
        }
      }
      wrap.appendChild(box);levels[i]={pick:pick};
    }
    var again=el('button','btn ghost','Start this case over');again.type='button';again.style.marginTop='12px';
    again.onclick=function(){wrap.innerHTML='';levels=[];keep(nkey,0);done(name,null);build(0,false);};
    for(var i=0;i<Math.min(n,N);i++){build(i,true);levels[i].pick(cfg.stages[i].answer);}
    if(n<N)build(n,false);
    h.appendChild(again);
    var api={cfg:cfg,solve:function(){
      var k=Number(state.activities[nkey]||0);
      for(var j=k;j<N;j++){levels[j].pick(cfg.stages[j].answer);}
    }};
    registry[name]=api;return api;
  }

  /* ---------- STEPPER (tabbed step-through animations) ----------
     cfg: {name, scenes:[{id,label,intro,svg,
            steps:[{caption:'html', set:{elementId:{t:[x,y], o:0..1, s:scale, c:'#fill'}}}]}]}
     Values are cumulative: an element keeps its last-set value until a later step changes it.
     Step 0 should set every element that starts hidden or displaced. Complete once every
     scene has been played to its last step. */
  function stepper(h,cfg){
    h=host(h);var name=cfg.name,vkey=name+'_v',S=cfg.scenes;
    var seen=(state.activities[vkey]||[]).slice(),cur=0,at=0;
    var wrap=el('div','act-scene'),tabs=el('div','act-tabs'),intro=el('p','act-hint'),
        fig=el('div','figure'),cap=el('div','act-cap'),ctl=el('div','controls'),prog=el('p','caption');
    var back=el('button','btn ghost','\u2190 Back'),next=el('button','btn','Next step \u2192'),replay=el('button','btn ghost','Replay');
    back.type=next.type=replay.type='button';
    cap.setAttribute('aria-live','polite');
    ctl.appendChild(back);ctl.appendChild(next);ctl.appendChild(replay);
    wrap.appendChild(tabs);wrap.appendChild(intro);wrap.appendChild(fig);wrap.appendChild(cap);wrap.appendChild(ctl);wrap.appendChild(prog);
    h.appendChild(wrap);
    var tabEls=S.map(function(sc,i){
      var b=el('button','act-chip');b.type='button';b.textContent=sc.label;b.onclick=function(){load(i);};tabs.appendChild(b);return b;
    });
    function styleFor(o){
      var t='',v=o.t||[0,0];
      t='translate('+v[0]+'px,'+v[1]+'px)';
      if(o.s!==undefined)t+=' scale('+o.s+')';
      return t;
    }
    function paintScene(){
      var sc=S[cur],svg=fig.querySelector('svg'),merged={};
      for(var k=0;k<=at;k++){
        var set=sc.steps[k].set||{};
        Object.keys(set).forEach(function(id){merged[id]=Object.assign(merged[id]||{},set[id]);});
      }
      Object.keys(merged).forEach(function(id){
        var n=svg.querySelector('#'+id);if(!n)return;var o=merged[id];
        if(o.t||o.s!==undefined)n.style.transform=styleFor(o);
        if(o.o!==undefined)n.style.opacity=o.o;
        if(o.c)n.style.fill=o.c;
      });
      cap.innerHTML='<strong>Step '+(at+1)+' of '+sc.steps.length+'.</strong> '+sc.steps[at].caption;
      back.disabled=at===0;next.disabled=at===sc.steps.length-1;
      tabEls.forEach(function(b,i){b.classList.toggle('on',i===cur);b.classList.toggle('done',seen.indexOf(S[i].id)>-1);});
      if(at===sc.steps.length-1&&seen.indexOf(sc.id)===-1){
        seen.push(sc.id);keep(vkey,seen.slice());
        if(seen.length>=S.length&&!state.activities[name])done(name,true);
      }
      prog.textContent=seen.length>=S.length?'You have played every scene. \u2713':seen.length+' of '+S.length+' scenes played to the end.';
      tabEls.forEach(function(b,i){b.classList.toggle('done',seen.indexOf(S[i].id)>-1);});
    }
    function load(i){
      cur=i;at=0;fig.innerHTML=S[i].svg;intro.textContent=S[i].intro||'';paintScene();
    }
    back.onclick=function(){if(at>0){at--;paintScene();}};
    next.onclick=function(){if(at<S[cur].steps.length-1){at++;paintScene();}};
    replay.onclick=function(){load(cur);};
    load(0);
    var api={cfg:cfg,solve:function(){
      S.forEach(function(sc,i){load(i);at=sc.steps.length-1;paintScene();});
    }};
    registry[name]=api;return api;
  }


  /* ---------- PREDICT (choose an item, commit to a prediction, then see what happens) ----------
     cfg: {name, start:'text', items:[{id, title, prompt, options:[…], answer:idx,
           why:'html', reveal:'html or <svg>' shown after the student commits}]}
     Each item is answered once: the prediction is the point, and the reveal follows
     either way. Complete once every item has been answered. */
  function predict(h,cfg){
    h=host(h);var name=cfg.name,vkey=name+'_v',items=cfg.items;
    var picks=Object.assign({},state.activities[vkey]||{}),cur=null,byId={},chipEls={};
    var wrap=el('div','act-predict'),chips=el('div','act-chips'),panel=el('div','act-panel'),prog=el('p','caption');
    panel.setAttribute('aria-live','polite');
    items.forEach(function(it){
      byId[it.id]=it;
      var b=el('button','act-chip');b.type='button';b.textContent=it.title;
      b.onclick=function(){show(it.id);};chips.appendChild(b);chipEls[it.id]=b;
    });
    wrap.appendChild(chips);wrap.appendChild(panel);wrap.appendChild(prog);h.appendChild(wrap);
    function answered(){return items.filter(function(it){return picks[it.id]!==undefined;}).length;}
    function paintChips(){
      items.forEach(function(it){
        chipEls[it.id].classList.toggle('done',picks[it.id]!==undefined);
        chipEls[it.id].classList.toggle('on',it.id===cur);
      });
      prog.textContent=answered()>=items.length?'You have made every prediction. \u2713':answered()+' of '+items.length+' predictions made.';
    }
    function show(id){
      cur=id;var it=byId[id];panel.innerHTML='';
      panel.appendChild(el('h4',null,it.title));
      panel.appendChild(el('p','q-stem',it.prompt));
      var ch=el('div','choices'),fb=el('div','feedback'),ord=order(it.options.length),btns=[];
      ord.forEach(function(ri,pos){
        var b=el('button','choice','<span class="mark">'+LETTERS[pos]+'</span>'+it.options[ri]);
        b.type='button';b.onclick=function(){commit(id,ri);};ch.appendChild(b);btns.push(b);
      });
      panel.appendChild(ch);panel.appendChild(fb);
      if(picks[id]!==undefined){
        var ri=picks[id],right=ri===it.answer;
        btns.forEach(function(b,pos){
          b.disabled=true;
          if(ord[pos]===it.answer)b.classList.add('right');
          else if(ord[pos]===ri)b.classList.add('wrong');
        });
        fb.className='feedback show'+(right?'':' miss');
        fb.innerHTML='<strong>'+(right?'Good prediction.':'Not quite \u2014 the better answer is highlighted.')+'</strong>'+(it.why||'')+
          (it.reveal?'<div style="margin-top:12px">'+it.reveal+'</div>':'');
      }
      paintChips();
    }
    function commit(id,ri){
      if(picks[id]!==undefined)return;
      picks[id]=ri;keep(vkey,Object.assign({},picks));
      if(cur===id)show(id);else paintChips();
      if(answered()>=items.length&&!state.activities[name])done(name,true);
    }
    panel.innerHTML='<p style="color:var(--ink-soft);margin:0">'+(cfg.start||'Choose an item above, make your prediction, and see what happens.')+'</p>';
    paintChips();
    var api={cfg:cfg,solve:function(){items.forEach(function(it){commit(it.id,it.answer);});}};
    registry[name]=api;return api;
  }

  /* ---------- GATE (a one-question "predict first" prompt that unlocks a custom activity) ----------
     cfg: {name, prompt, options:[…], answer:idx, why:'html'}
     onDone(right) runs once the student has answered (also on reload, from saved state).
     Returns {solve()} so QA can answer it. */
  function gate(h,cfg,onDone){
    h=host(h);var key=cfg.name+'_g',box=el('div','act-gate');
    box.appendChild(el('p','q-stem',cfg.prompt));
    var ch=el('div','choices'),fb=el('div','feedback'),ord=order(cfg.options.length),btns=[];
    ord.forEach(function(ri,pos){
      var b=el('button','choice','<span class="mark">'+LETTERS[pos]+'</span>'+cfg.options[ri]);
      b.type='button';b.onclick=function(){choose(ri,true);};ch.appendChild(b);btns.push(b);
    });
    box.appendChild(ch);box.appendChild(fb);h.appendChild(box);
    function choose(ri,fresh){
      var right=ri===cfg.answer;
      btns.forEach(function(b,pos){b.disabled=true;if(ord[pos]===cfg.answer)b.classList.add('right');else if(ord[pos]===ri)b.classList.add('wrong');});
      fb.className='feedback show'+(right?'':' miss');
      fb.innerHTML='<strong>'+(right?'Good prediction.':'Not quite \u2014 the better answer is highlighted.')+'</strong>'+(cfg.why||'')+
        '<div style="margin-top:8px">Now try it yourself below and check your prediction against what you see.</div>';
      if(fresh)keep(key,ri);
      if(onDone)onDone(right);
    }
    var saved=state.activities[key];
    if(saved!==undefined&&saved!==null)choose(saved,false);
    return {answered:function(){var v=state.activities[key];return v!==undefined&&v!==null;},
            solve:function(){if(!(state.activities[key]!==undefined&&state.activities[key]!==null))choose(cfg.answer,true);}};
  }

  return {dnd:dnd,sort:sort,order:orderAct,fill:fill,explore:explore,stages:stages,stepper:stepper,
          predict:predict,gate:gate,
          /* custom activities on a page register their own solve() here, so solveAll() reaches them too */
          register:function(name,api){registry[name]=api;return api;},
          done:done,keep:keep,
          registry:registry,
          solve:function(name){registry[name].solve();},
          solveAll:function(){Object.keys(registry).forEach(function(k){registry[k].solve();});}};
})();
