/* ============================================================
   WELCOME (START HERE) PAGE — generic wiring, no topic content.
   Call initWelcome() ONCE, at the very END of the companion's own
   content script (after every activity has been built).

   It does three things:
   1. draws the icons   ([data-ico="name"] elements)
   2. fills live counts ([data-stat="modules|activities|questions|cards"])
   3. wires buttons     ([data-go="section-key"] jumps to that section)
   ============================================================ */
var WELCOME_ICONS = {
  microbe:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/></svg>',
  layers:'<svg viewBox="0 0 24 24"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg>',
  dna:'<svg viewBox="0 0 24 24"><path d="M7 3c0 6 10 6 10 12"/><path d="M17 3c0 6-10 6-10 12"/><path d="M7 15c0 3 4 6 5 6"/><path d="M17 15c0 3-4 6-5 6"/><path d="M9 6h6M9 11h6"/></svg>',
  shield:'<svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  flask:'<svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"/><path d="M7.5 15h9"/></svg>',
  spark:'<svg viewBox="0 0 24 24"><path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z"/><path d="M19 15v5M16.5 17.5h5"/></svg>',
  question:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1.9-1.1 1.8M12 17h.01"/></svg>',
  cards:'<svg viewBox="0 0 24 24"><rect x="3" y="7" width="14" height="13" rx="2"/><path d="M7 4h12a2 2 0 0 1 2 2v11"/></svg>',
  book:'<svg viewBox="0 0 24 24"><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M9 7h5"/></svg>',
  /* added after bacteria1 */
  target:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/></svg>',
  ribosome:'<svg viewBox="0 0 24 24"><ellipse cx="12" cy="8.5" rx="7" ry="5.5"/><ellipse cx="12" cy="16.5" rx="5.2" ry="3.2"/><path d="M2.5 21h19"/></svg>',
  pill:'<svg viewBox="0 0 24 24"><rect x="2.5" y="8" width="19" height="8" rx="4" transform="rotate(-40 12 12)"/><path d="M9.6 9.6l4.8 4.8"/></svg>'
};

function initWelcome(extraIcons){
  var icons = {}, k;
  for(k in WELCOME_ICONS) icons[k] = WELCOME_ICONS[k];
  if(extraIcons) for(k in extraIcons) icons[k] = extraIcons[k];

  /* 1. icons */
  document.querySelectorAll('[data-ico]').forEach(function(n){
    n.innerHTML = icons[n.getAttribute('data-ico')] || '';
  });

  /* 2. live counts. Activities are counted from the activity registry when there is one
        (so a section holding three activities counts as three), otherwise from the manifest. */
  var nMods = MANIFEST.modules.filter(function(m){ return /^m\d/.test(m.id); }).length;
  var nActs = (typeof Act !== 'undefined' && Act.registry) ? Object.keys(Act.registry).length : 0;
  if(!nActs) MANIFEST.modules.forEach(function(m){ m.sections.forEach(function(s){ if(s.activity) nActs++; }); });
  var vals = {modules:nMods, activities:nActs, questions:POOL.length, cards:CARDS.length};
  document.querySelectorAll('[data-stat]').forEach(function(n){
    var v = vals[n.getAttribute('data-stat')]; if(v !== undefined) n.textContent = v;
  });

  /* 3. buttons that jump to a section (goTo comes from engine.js and is only called on click) */
  document.querySelectorAll('[data-go]').forEach(function(b){
    b.onclick = function(){
      var i = FLOW.findIndex(function(f){ return f.key === b.getAttribute('data-go'); });
      if(i > -1) goTo(i);
    };
  });
}
