/* ============================================================
   MANIFEST — Bacteria III · Cocci and Rods
   The single source of truth for this companion's module/section
   structure. bacteria3.html's content script derives MODULES,
   FLOW, SECTION_REQ, QUIZ_KEY_FOR_SECTION and AREA_SECTION from
   this file at load time (see companion-architecture.md §5, §14).

   STATUS (read this before adding a module):
   All six content modules, the flashcard deck, and the cumulative
   Mastery Challenge are built. This companion is complete.

   CORRECTION (standardization pass): 'start' originally sat as
   Module 1's first section, with no landing page for Module 1 at
   all. Both bacteria1 and bacteria2 keep 'start'/'welcome' in its
   own 'home' module, and every module elsewhere in this file has
   a landing page as its first section (§5, §7). Module 1 now
   matches: it has its own 'home' module, and 'm1home' was added
   as Module 1's landing page (see bacteria3.html for its markup).
   ============================================================ */
var MANIFEST = {
  topic  : 'bacteria3',
  title  : 'Bacteria III · Cocci and Rods',
  file   : 'bacteria3.html',
  accent : '#12333A',      // this companion's "ink" primary (Ink & Coral scheme)
  accentSoft : '#FFE8E0',  // the soft coral tint

  modules: [
    { id:'home', title:'Start here', sections:[
      { key:'start', label:'Welcome' }
    ]},
    { id:'m1', title:'Module 1 \u00b7 Sorting the Gram-Positive Cocci', sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1', label:'Staph or strep, at a glance',
        checks:['c1a','c1b'], activity:'genusID' },
      { key:'m1s2', label:'Sorting the staphylococci',
        checks:['c2a','c2b','c2c'], activity:'staphTree' },
      { key:'m1s3', label:'Sorting the streptococci and enterococcus',
        checks:['c3a','c3b','c3c'], activity:'strepTree' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},
    { id:'m2', title:'Module 2 \u00b7 Staphylococci & Streptococci in Disease', sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1', label:'S. aureus: from factor to disease',
        checks:['c4a','c4b','c4c'], activity:'aureusMap' },
      { key:'m2s2', label:'Group A strep: a case that unfolds',
        checks:['c5a','c5b','c5c'], activity:'gasCase' },
      { key:'m2s3', label:'The rest of the gram-positive cocci in disease',
        checks:['c6a','c6b','c6c'], activity:'pharmLens2' },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},
    { id:'m3', title:'Module 3 \u00b7 The Neisseria Challenge', sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1', label:'Meningococcus or gonococcus?',
        checks:['c7a','c7b','c7c'], activity:'neisseriaID' },
      { key:'m3s2', label:'Meningococcus: treatment, prophylaxis, and vaccines',
        checks:['c8a','c8b','c8c'], activity:'meningoCase' },
      { key:'m3s3', label:'Gonococcus: treatment and prevention',
        checks:['c9a','c9b','c9c'], activity:'gonoLens' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},
    { id:'m4', title:'Module 4 \u00b7 Gram-Positive Rods & Toxin Syndromes', sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1', label:'Anthrax: which door did it come through?',
        checks:['c10a','c10b'], activity:'anthraxDoors' },
      { key:'m4s2', label:'The toxin mechanism challenge',
        checks:['c11a','c11b','c11c'], activity:'toxinChallenge' },
      { key:'m4s3', label:'C. difficile: the antibiotic-associated cycle',
        checks:['c12a','c12b','c12c'], activity:'cdiffCycle' },
      { key:'m4s4', label:'Listeria and diphtheria: two more invaders',
        checks:['c13a','c13b','c13c'], activity:'listeriaDipMap' },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},
    { id:'m5', title:'Module 5 \u00b7 Enteric Gram-Negative Rods', sections:[
      { key:'m5home', label:'Module overview' },
      { key:'m5s1', label:'E. coli: same organism, opposite diarrheas',
        checks:['c14a','c14b'], activity:'ecoliCase' },
      { key:'m5s2', label:'Salmonella, Shigella, and Klebsiella',
        checks:['c15a','c15b','c15c'], activity:'entericMap' },
      { key:'m5s3', label:'Vibrio, Campylobacter, and H. pylori',
        checks:['c16a','c16b','c16c'], activity:'entericLens' },
      { key:'m5s4', label:'Where the enteric bacteria strike',
        checks:['c17a','c17b','c17c'], activity:'giMap' },
      { key:'m5quiz', label:'Module 5 quiz', quiz:'m5' }
    ]},
    { id:'m6', title:'Module 6 \u00b7 Respiratory, Zoonotic & Integrative Pathogens', sections:[
      { key:'m6home', label:'Module overview' },
      { key:'m6s1', label:'Pseudomonas: the opportunist',
        checks:['c18a','c18b'], activity:'pseudoMap' },
      { key:'m6s2', label:'H. influenzae and B. pertussis',
        checks:['c19a','c19b','c19c'], activity:'pertussisStages' },
      { key:'m6s3', label:'Tularemia and plague: zoonotic hazards',
        checks:['c20a','c20b','c20c'], activity:'zoonoticID' },
      { key:'m6s4', label:'Anaerobes and the big picture',
        checks:['c21a','c21b','c21c'], activity:'integrativeLens' },
      { key:'m6quiz', label:'Module 6 quiz', quiz:'m6' }
    ]},
    { id:'flash', title:'Retrieval Practice', sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},
    { id:'final', title:'Final Mastery Exam', unlockAfter:'*', sections:[
      { key:'final', label:'25 Question Mastery Exam', quiz:'final' }
    ]}
  ],

  areaSection: {
    'Staph vs strep basics'                        : 'm1s1',
    'Staphylococcal identification'                : 'm1s2',
    'Streptococcal & enterococcal identification'  : 'm1s3',
    'S. aureus virulence and disease'                          : 'm2s1',
    'Group A strep virulence and disease'                      : 'm2s2',
    'Pneumococcus, viridans, enterococcus & GBS disease'       : 'm2s3',
    'Neisseria: virulence and diagnosis'           : 'm3s1',
    'Meningococcus: treatment and prevention'      : 'm3s2',
    'Gonococcus: treatment and prevention'         : 'm3s3',
    'Anthrax: portals and toxin'                          : 'm4s1',
    'Toxin mechanism: flaccid, spastic, and destructive'  : 'm4s2',
    'C. difficile: the antibiotic-associated cycle'       : 'm4s3',
    'Listeria and diphtheria'                             : 'm4s4',
    'E. coli: ETEC vs EHEC'                      : 'm5s1',
    'Salmonella, Shigella & Klebsiella'          : 'm5s2',
    'Vibrio, Campylobacter & H. pylori'          : 'm5s3',
    'Where the enteric bacteria strike'          : 'm5s4',
    'Pseudomonas: the opportunist'                        : 'm6s1',
    'H. influenzae & B. pertussis: vaccine-preventable'   : 'm6s2',
    'Tularemia and plague: zoonotic hazards'              : 'm6s3',
    'Anaerobes & the encapsulated-organism synthesis'     : 'm6s4'
  }
};
