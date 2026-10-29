/* ============================================================
   STORAGE CORE — the one place that talks to the browser's storage
   Loaded by the hub (index.html) AND by every companion, before
   anything else that saves or loads. Defines one global, MCStore,
   plus `storageWorks` (kept as its own global because engine.js
   and the hub read it to decide whether to show the "this browser
   is blocking saved progress" notice).

   Before this file existed, the hub and the companions each had
   their own copy of: the availability check, reading and writing,
   the backup file format, the backup validation rules, and the
   "your progress could not be saved" warning. A fix to one copy
   had to be remembered in the other. Now there is one copy.

   What lives here (see companion-architecture.md for the rest):
     - reading and writing a stored value, where a write says
       whether it worked
     - a memory copy of anything that could not be saved, so the
       student can still download it
     - the backup file format and the rules a backup must pass
     - writing several values all-or-nothing (used by restore)
     - the persistent warning bar for a failed save

   What does NOT live here: each companion's own state shape and
   cleaning rules (shared/storage.js), and the hub's own record
   (index.html). This file never decides what progress means.
   ============================================================ */
var MCStore=(function(){
  var memory={};   /* newest value written this visit, whether or not it was saved */
  var unsaved={};  /* keys whose newest value the browser refused to store */

  var works=(function(){
    try{localStorage.setItem('__t','1');localStorage.removeItem('__t');return true;}
    catch(e){return false;}
  })();

  /* Returns the stored string, or null. A value the browser refused to
     save wins over the older stored one, so what the student sees and
     downloads is always their latest work. */
  function get(k){
    if(unsaved[k])return memory[k];
    try{
      if(works){var v=localStorage.getItem(k);return v===null?null:v;}
      return memory[k]===undefined?null:memory[k];
    }catch(e){return memory[k]===undefined?null:memory[k];}
  }

  /* Returns true if the value was stored, false if the browser refused it
     (storage full, or blocked after the start-up check). The value is kept
     in memory either way. When storage was blocked from the start there is
     nothing to fail, so that case returns true: the page already tells the
     student progress will not be remembered. */
  function set(k,v){
    memory[k]=v;
    if(!works)return true;
    try{localStorage.setItem(k,v);delete unsaved[k];return true;}
    catch(e){unsaved[k]=true;return false;}
  }

  function remove(k){
    delete memory[k];delete unsaved[k];
    try{if(works)localStorage.removeItem(k);return true;}
    catch(e){return false;}
  }

  function isPlainObject(v){return v!==null&&typeof v==='object'&&!Array.isArray(v);}

  /* ---------------- backup file format ---------------- */
  function buildBackup(label,hub,companions){
    return {kind:'micro-hub-backup',version:1,exportedAt:new Date().toISOString(),
            label:(label||'').trim(),hub:hub||{},companions:companions||{}};
  }

  /* The one gate a companion's raw stored string must pass before it is
     previewed or written. It must be a string that parses to a plain
     object, and any known field that is present must be the right kind
     of value. Missing fields are fine (older saves lack newer ones). */
  function validateCompanionRaw(raw){
    if(typeof raw!=='string')return {ok:false};
    var parsed;
    try{parsed=JSON.parse(raw);}catch(e){return {ok:false};}
    if(!isPlainObject(parsed))return {ok:false};
    var objs=['checks','activities','best','flags','pending','attempts','recorded','lastScore','seenQ','spaced','mastered'];
    for(var i=0;i<objs.length;i++){
      if(parsed[objs[i]]!==undefined&&!isPlainObject(parsed[objs[i]]))return {ok:false};
    }
    if(parsed.lastSection!==undefined&&parsed.lastSection!==null&&typeof parsed.lastSection!=='string')return {ok:false};
    return {ok:true,state:parsed};
  }

  /* Writes several values all-or-nothing. `entries` is a list of
     {key, value}. Every previous value is remembered first; if any write
     fails, the ones already made are put back. Returns
       {ok:true}                                  everything written
       {ok:false, failed:key, rollbackFailed:[]}  nothing changed, unless
                                                  rollbackFailed lists keys
                                                  that could not be put back */
  function writeAll(entries){
    var undo=[];
    for(var i=0;i<entries.length;i++){
      var e=entries[i];
      undo.push({key:e.key,prev:get(e.key)});
      if(!set(e.key,e.value)){
        var bad=[];
        undo.forEach(function(u){
          var ok=(u.prev===null)?remove(u.key):set(u.key,u.prev);
          if(!ok)bad.push(u.key);
        });
        return {ok:false,failed:e.key,rollbackFailed:bad};
      }
    }
    return {ok:true};
  }

  /* ---------------- downloads and the warning bar ---------------- */
  function download(filename,obj){
    var blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'});
    var url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download=filename;
    document.body.appendChild(a);a.click();document.body.removeChild(a);
    setTimeout(function(){URL.revokeObjectURL(url);},4000);
  }

  /* Shows (or removes) the warning bar. It stays up until a save works
     again. `onDownload` builds and downloads a backup of the current
     session; it is only used when the bar is first shown. Not shown when
     storage was blocked from the start (see set()). */
  function warn(show,onDownload){
    function apply(){
      var bar=document.getElementById('saveWarning');
      if(!show){if(bar)bar.parentNode.removeChild(bar);return;}
      if(bar)return;
      bar=document.createElement('div');
      bar.id='saveWarning';bar.setAttribute('role','alert');
      bar.style.cssText='position:sticky;top:0;z-index:9999;background:#fff3cd;color:#5c4400;border-bottom:2px solid #e0a73c;padding:10px 14px;font:600 14px/1.4 system-ui,sans-serif;';
      bar.appendChild(document.createTextNode('Your latest progress could not be saved. Your browser storage may be full or blocked. Keep this tab open and download a backup so you do not lose your work. '));
      var b=document.createElement('button');
      b.type='button';b.textContent='Download backup';
      b.style.cssText='margin-left:8px;padding:4px 10px;font:inherit;cursor:pointer;';
      b.onclick=onDownload;bar.appendChild(b);
      document.body.insertBefore(bar,document.body.firstChild);
    }
    if(document.body)apply();else document.addEventListener('DOMContentLoaded',apply);
  }

  return {works:works,get:get,set:set,remove:remove,isPlainObject:isPlainObject,
          buildBackup:buildBackup,validateCompanionRaw:validateCompanionRaw,
          writeAll:writeAll,download:download,warn:warn};
})();
var storageWorks=MCStore.works;
