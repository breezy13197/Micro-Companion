/* ------------------------------------------------------------
   a11y.js — small accessibility helpers shared by the hub and
   every companion. Defines one global, MCA11y. It loads before
   engine.js (companions) and before the hub's own script.

   What it does, in plain terms:
   - announce(): speaks a short message to screen readers through
     one hidden "live" area, without changing anything on screen.
   - focusHeading(): after the page's content changes (a new
     section, a new hub screen), moves the keyboard cursor to the
     new heading so keyboard and screen-reader users start at the
     top of the new content instead of at the old button.
   - setPicked(): marks an answer button as chosen (aria-pressed)
     so the choice is not communicated by color alone.
   - markResult(): adds hidden "Correct answer" / "Your answer,
     incorrect" wording to a graded answer button.
   - restoreFocus(): after a screen is redrawn, puts the keyboard
     cursor back on the same control the student was using.
   ------------------------------------------------------------ */
var MCA11y=(function(){
  var live=null;
  function liveRegion(){
    if(live&&document.body.contains(live))return live;
    live=document.createElement('div');
    live.className='sr-only';
    live.id='mc-live';
    live.setAttribute('role','status');
    live.setAttribute('aria-live','polite');
    live.setAttribute('aria-atomic','true');
    document.body.appendChild(live);
    return live;
  }
  /* Clearing first, then setting the text on the next tick, makes screen
     readers announce a repeated message (e.g. the same hint twice). */
  function announce(msg){
    var r=liveRegion();r.textContent='';
    setTimeout(function(){r.textContent=String(msg);},30);
  }
  function focusEl(node){
    if(!node)return false;
    if(!node.hasAttribute('tabindex')&&!/^(a|button|input|select|textarea)$/i.test(node.tagName))node.setAttribute('tabindex','-1');
    try{node.focus({preventScroll:true});}catch(e){try{node.focus();}catch(e2){return false;}}
    return document.activeElement===node;
  }
  function focusHeading(root){
    var h=(root||document).querySelector('h1,h2,h3');
    return focusEl(h);
  }
  function setPicked(btn,on){
    btn.setAttribute('aria-pressed',on?'true':'false');
  }
  function markResult(btn,kind){
    var old=btn.querySelector('.sr-result');if(old)old.remove();
    if(!kind)return;
    var s=document.createElement('span');
    s.className='sr-only sr-result';
    s.textContent=kind==='right'?' Correct answer.':' Your answer, incorrect.';
    btn.appendChild(s);
  }
  /* Call with a function that redraws part of the page, plus a way to find
     the control again afterwards. The cursor goes back to it. */
  function restoreFocus(find){
    var n=typeof find==='function'?find():document.querySelector(find);
    return focusEl(n);
  }
  return {announce:announce,focusEl:focusEl,focusHeading:focusHeading,setPicked:setPicked,markResult:markResult,restoreFocus:restoreFocus};
})();
