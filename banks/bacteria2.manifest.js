/* banks/bacteria2.manifest.js — the ONLY place this companion's module/section structure is written.
   bacteria2.html derives MODULES, FLOW, SECTION_REQ, QUIZ_KEY_FOR_SECTION and AREA_SECTION from this file,
   and the hub reads the same file for its dashboard. */
var MANIFEST = {
  topic  : 'bacteria2',
  title  : 'Antibacterial Mechanisms, Resistance & Prevention',
  file   : 'bacteria2.html',
  accent : '#4A2F27',          /* espresso (primary); methylene-blue accent #4DB6EA is set in the page's own style block */
  accentSoft : '#F3ECE8',

  modules: [
    { id:'start', title:'Start here', sections:[
      { key:'welcome', label:'Welcome' }
    ]},

    { id:'m1', title:'Module 1 · Selective toxicity', sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1', label:'Why a drug can spare the patient', checks:['c11a','c11b','c11c'], activity:'cellMap' },
      { key:'m1s2', label:'Kill, stop, or both?',             checks:['c12a','c12b','c12c'], activity:'cidalLab' },
      { key:'m1s3', label:'The five-part mechanism lens',      checks:['c13a','c13b'],        activity:'lensLab' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},

    { id:'m2', title:'Module 2 · The bacterial envelope', sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1', label:'Building the wall and blocking it',    checks:['c21a','c21b','c21c'], activity:'pgBuild' },
      { key:'m2s2', label:'β-Lactams, PBPs, and β-lactamases',    checks:['c22a','c22b','c22c','c22d'], activity:'betaLab' },
      { key:'m2s3', label:'Vancomycin and the membrane',           checks:['c23a','c23b'],        activity:'envelopeSort' },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},

    { id:'m3', title:'Module 3 · Genetic information', sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1', label:'The folate pathway lab',                checks:['c31a','c31b'],        activity:'folateLab' },
      { key:'m3s2', label:'DNA and RNA targets',                    checks:['c32a','c32b','c32c'], activity:'nucleicLab' },
      { key:'m3s3', label:'Activated by the enemy',                 checks:['c33a','c33b','c33c'],        activity:'prodrugLab' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},

    { id:'m4', title:'Module 4 · The ribosome', sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1', label:'Assemble the ribosome',                  checks:['c41a','c41b'],        activity:'ribBuild' },
      { key:'m4s2', label:'Drugs on the ribosome map',              checks:['c42a','c42b','c42c'], activity:'ribLab' },
      { key:'m4s3', label:'The unfamiliar drug challenge',          checks:['c43a','c43b'],        activity:'ribCase' },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},

    { id:'m5', title:'Module 5 · When bacteria fight back', sections:[
      { key:'m5home', label:'Module overview' },
      { key:'m5s1', label:'Four routes to resistance',              checks:['c51a','c51b','c51c'], activity:'routesLab' },
      { key:'m5s2', label:'The resistance escape lab',              checks:['c52a','c52b','c52c','c52d'], activity:'escapeAll' },
      { key:'m5s3', label:'The susceptibility lab',                 checks:['c53a','c53b','c53c','c53d'], activity:'susceptLab' },
      { key:'m5s4', label:'Stewardship and combinations',           checks:['c54a','c54b','c54c'], activity:'stewardLab' },
      { key:'m5quiz', label:'Module 5 quiz', quiz:'m5' }
    ]},

    { id:'m6', title:'Module 6 · Prevention', sections:[
      { key:'m6home', label:'Module overview' },
      { key:'m6s1', label:'Active, passive, or both?',              checks:['c61a','c61b'],        activity:'immunityLab' },
      { key:'m6s2', label:'Vaccine platforms and conjugation',      checks:['c62a','c62b','c62c','c62d','c62e'], activity:'vaccineLab' },
      { key:'m6s3', label:'Stopping transmission',                   checks:['c63a','c63b'],        activity:'controlLab' },
      { key:'m6quiz', label:'Module 6 quiz', quiz:'m6' }
    ]},

    { id:'flash', title:'Retrieval practice', sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},

    { id:'final', title:'Mastery Challenge', unlockAfter:'*', sections:[
      { key:'final', label:'25-question mastery challenge', quiz:'final' }
    ]}
  ],

  /* Where "review this" sends a student after a quiz. Every key must match a POOL `area` string exactly. */
  areaSection: {
    'Selective toxicity'                      : 'm1s1',
    'Killing, growth arrest, and spectrum'    : 'm1s2',
    'The mechanism lens'                      : 'm1s3',
    'Peptidoglycan pathway and drug targets'  : 'm2s1',
    'β-Lactams, PBPs, and β-lactamases'       : 'm2s2',
    'Vancomycin and membrane-active drugs'    : 'm2s3',
    'Folate pathway'                          : 'm3s1',
    'DNA and RNA synthesis targets'           : 'm3s2',
    'Prodrugs and TB drugs'                   : 'm3s3',
    'Ribosome structure'                      : 'm4s1',
    'Drug classes and ribosome targets'       : 'm4s2',
    'Translation mechanics and inference'     : 'm4s3',
    'Routes to resistance'                    : 'm5s1',
    'Escape mechanisms by drug'               : 'm5s2',
    'MIC, MBC, and susceptibility reports'    : 'm5s3',
    'Stewardship and combinations'            : 'm5s4',
    'Active and passive immunity'             : 'm6s1',
    'Vaccine platforms'                       : 'm6s2',
    'Infection control'                       : 'm6s3'
  }
};
