/* ============================================================
   COMPANION STORAGE — shared across every topic
   Defines `state`, the one object every other script reads and
   writes progress through. Loads right after the bank file (it
   needs TOPIC_ID for a per-topic storage key) and before both the
   content script and engine.js (they both read/write `state` as
   soon as they run, not just inside click handlers).
   ============================================================ */
var KEY='companion.'+(typeof TOPIC_ID!=='undefined'?TOPIC_ID:'default')+'.v1';
/* Reading, writing, the backup format, and the "could not be saved" warning
   all live in shared/storage-core.js (MCStore), which must load before this
   file. This file only decides what a companion's progress looks like. */
/* ------------------------------------------------------------
   STUDENT-MADE FLASHCARDS (state.myCards)
   A list of {id, t, d, ts}: id = a short unique code, t = the front
   (term or question), d = the back (answer), ts = when it was made.
   The field names t and d match the course cards in CARDS on purpose.

   These live in the companion's own saved state, so they travel
   inside the hub's backup file with no extra work. They are NOT part
   of the completion rules, the quizzes, or any hub exam: they are a
   personal study aid only.

   The hub has its own copy of MYCARD_LIMITS and cleanMyCards() (it
   does not load this file). If you change a limit or a rule here,
   change it in index.html too — see §9 and §14.10 of
   companion-architecture.md.
   ------------------------------------------------------------ */
var MYCARD_LIMITS={front:120,back:300,count:200};
function cleanMyCards(list){
  if(!Array.isArray(list))return [];
  var seen={},out=[];
  list.forEach(function(c){
    if(out.length>=MYCARD_LIMITS.count)return;
    if(!c||typeof c!=='object'||Array.isArray(c))return;
    if(typeof c.id!=='string'||typeof c.t!=='string'||typeof c.d!=='string')return;
    if(!/^[A-Za-z0-9_-]{1,40}$/.test(c.id)||seen[c.id])return;
    var t=c.t.trim().slice(0,MYCARD_LIMITS.front);
    var d=c.d.trim().slice(0,MYCARD_LIMITS.back);
    if(!t||!d)return;
    seen[c.id]=1;
    out.push({id:c.id,t:t,d:d,ts:(typeof c.ts==='number'&&isFinite(c.ts))?c.ts:0});
  });
  return out;
}
/* Rebuilds the review-queue fields into a known-good shape on every load,
   for the same reason myCards is rebuilt: a save can come from an older
   version (key absent) or from a backup file the hub restored. Anything that
   does not fit is dropped rather than trusted. */
function cleanReviewState(s){
  function obj(o){return(o&&typeof o==='object'&&!Array.isArray(o))?o:{};}
  var p=obj(s.pending),pend={};
  Object.keys(p).forEach(function(a){
    var v=p[a];
    if(!v||typeof v!=='object')return;
    pend[a]={status:v.status==='retry'?'retry':'waiting',ts:(typeof v.ts==='number'&&isFinite(v.ts))?v.ts:0};
  });
  s.pending=pend;
  var sp=obj(s.spaced),spaced={};
  Object.keys(sp).forEach(function(a){
    var v=sp[a];
    if(!v||typeof v!=='object'||typeof v.due!=='number'||!isFinite(v.due))return;
    spaced[a]={step:v.step===1?1:0,due:v.due};
  });
  s.spaced=spaced;
  var ms=obj(s.mastered),mas={};
  Object.keys(ms).forEach(function(a){if(typeof ms[a]==='number'&&isFinite(ms[a]))mas[a]=ms[a];});
  s.mastered=mas;
  s.attempts=obj(s.attempts);
  s.lastScore=obj(s.lastScore);
  var sq=obj(s.seenQ),seen={};
  Object.keys(sq).forEach(function(id){if(typeof sq[id]==='number'&&sq[id]>0&&isFinite(sq[id]))seen[id]=Math.floor(sq[id]);});
  s.seenQ=seen;
  var rc=obj(s.recorded),ids=Object.keys(rc).sort(function(a,b){return (rc[a]||0)-(rc[b]||0);});
  var rec={};ids.slice(-40).forEach(function(id){rec[id]=(typeof rc[id]==='number')?rc[id]:0;});
  s.recorded=rec;
}
function loadState(){
  /* `flags` holds question ids the student marked "come back to this"
     after grading a quiz or the mastery exam: {questionId: timestamp}.
     It lives here rather than in the hub so a companion stays
     self-contained, and so flags travel automatically with this
     companion's progress in a hub backup file. The hub reads these to
     build its Flagged questions list, and is the one place a flag can
     be cleared from outside this page.

     `lastSection` holds the FLOW key of the section the student was
     last on (e.g. "m2s3"), written by engine.js's goTo() on every
     navigation. It powers "continue where I left off" on the next
     visit — see engine.js for how the starting section is resolved.

     `areaStats` holds real per-concept-area evidence from graded quiz
     questions: {area: {asked, right, lastAcc, lastTs}}. engine.js's
     grade() already computes exactly this breakdown (byArea) for every
     quiz submission to render the "Mastery by concept area" panel —
     this is that same data, kept, instead of discarded once the panel
     is drawn. It's updated on EVERY submission (a retake, a mastery
     round, not just a new personal best), because each one is real
     evidence about specific concepts, even when the overall score
     isn't a new high. The hub's weaknessMap() reads this instead of
     spreading a quiz's single overall score across every area the
     quiz happens to touch. */
  /* ---- Added for the assessment-review fixes (all safe to add without a
     version bump: an older save simply lacks the key and gets the blank).

     `pending` is the REVIEW QUEUE: {area: {status, ts}}. An area goes in
     when a graded quiz question about it is missed, and comes out only
     when a LATER question about that same area is answered correctly.
     status is 'waiting' (missed, not asked about again yet) or 'retry'
     (asked again and missed again). Unlike `areaStats`, which is a
     lifetime tally, this is a to-do list, so an area can never silently
     disappear just because a follow-up round happened not to ask about it.

     `attempts` holds ONE unfinished quiz attempt per quiz id, so a refresh
     does not lose it: {quizId: {id, mode, heading, targets, qids, orders,
     picks, ts, deadline}}. It is deleted the moment the attempt is graded.

     `recorded` lists attempt ids already counted, so the same attempt can
     never be counted twice. `lastScore` is the most recent normal-attempt
     percentage per quiz (state.best keeps the high score). `seenQ` counts how
     many times each question id has been graded, so a targeted round can
     prefer questions the student has not met yet.

     `spaced` and `mastered` add the spaced re-check. When a queued concept
     is answered correctly it does not simply vanish (one right answer can be
     luck). It moves to `spaced`: {area: {step, due}}, where step 0 means
     "waiting for its first re-check" and step 1 "waiting for its second",
     and `due` is the time it becomes due. Passing a due re-check moves it a
     step along; passing the last one moves it to `mastered`: {area: ts}.
     Missing it, at any point, puts it back on `pending`. The gaps between
     re-checks are RECHECK_DAYS in engine.js. */
  var blank={checks:{},activities:{},best:{},flags:{},lastSection:null,areaStats:{},myCards:[],
             pending:{},attempts:{},recorded:{},lastScore:{},seenQ:{},spaced:{},mastered:{}};
  try{var raw=MCStore.get(KEY);
      var s=raw?Object.assign(blank,JSON.parse(raw)):blank;
      /* Never trust the saved shape of myCards: it can arrive from an
         older save (key absent), or from a backup file the hub restored.
         cleanMyCards() rebuilds it into a known-good list every load. */
      s.myCards=cleanMyCards(s.myCards);
      cleanReviewState(s);
      return s;}catch(e){blank.myCards=[];return blank;}
}
/* Saves progress and says whether it worked (true/false). When the browser
   refuses the write (storage full, or blocked after the first check), the
   work is still kept in memory by MCStore so the page keeps running, and a
   warning bar with a backup button stays up until a save succeeds again. */
function saveState(){
  var raw;
  try{raw=JSON.stringify(state);}catch(e){raw=null;}
  var ok=(raw!==null)&&MCStore.set(KEY,raw);
  MCStore.warn(!ok,downloadSessionBackup);
  return ok;
}
/* Downloads this companion's progress in the hub's backup format, so the
   hub's "Save / load progress" screen can load it back in. Built from the
   in-memory state, so it works even when the browser refuses writes. */
function downloadSessionBackup(){
  var id=typeof TOPIC_ID!=='undefined'?TOPIC_ID:'default',companions={};
  try{companions[id]=JSON.stringify(state);}catch(e){}
  MCStore.download('microbiology-progress-'+id+'-'+new Date().toISOString().slice(0,10)+'.json',
    MCStore.buildBackup('unsaved session',{},companions));
}
var state=loadState();
