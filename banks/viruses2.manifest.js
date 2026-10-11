/* ============================================================
   MANIFEST: Viruses II · Antivirals and Vaccines
   The table of contents for this companion: the ONLY place its modules and
   sections are written. The page (viruses2.html) builds its menu and its
   "what counts as done" rules from this, and the hub reads the same file.

   How to read a section line:
     { key:'m1s1', label:'…', checks:['c1a','c1b','c1c'], activity:'targetRisk' }
        key       = the section's id in viruses2.html (data-key)
        label     = the name shown in the menu
        checks    = the "Can you predict it?" questions that must be answered correctly
        activity  = the hands-on activity that must be completed
     { key:'m1quiz', label:'…', quiz:'m1' }   = a quiz (counts once submitted)
     { key:'m1home', label:'…' }               = a landing page (never blocks progress)

   BUILD STATUS: Complete. Modules 1 to 6, the Integration Challenge, and the Mastery Exam are all built. and the Integration
   Challenge are listed so the menu is final, and gain checks / activity /
   quiz fields as each is built.
   ============================================================ */
var MANIFEST = {
  topic      : 'viruses2',
  title      : 'Viruses II · Antivirals and Vaccines',
  file       : 'viruses2.html',
  accent     : '#5E1224',
  accentSoft : '#FBEDF0',

  modules: [
    { id:'home', title:'Start here', sections:[
      { key:'start', label:'Welcome' }
    ]},

    { id:'m1', title:'Module 1 · Finding a Viral Target', sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1', label:'Why antivirals are difficult',  checks:['c1a','c1b','c1c'], activity:'targetRisk' },
      { key:'m1s2', label:'The replication roadmap',        checks:['c2a','c2b','c2c'], activity:'targetPlace' },
      { key:'m1s3', label:'Target and consequence',         checks:['c3a','c3b','c3c'], activity:'blockLab' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},

    { id:'m2', title:'Module 2 · Entry and Genome Replication', sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1', label:'Stop the virus at the door', checks:['c4a','c4b','c4c'], activity:'entryPlace' },
      { key:'m2s2', label:'Build a chain terminator',    checks:['c5a','c5b','c5c'], activity:'chainLab' },
      { key:'m2s3', label:'Polymerase challenge',        checks:['c6a','c6b','c6c'], activity:'polySort' },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},

    { id:'m3', title:'Module 3 · Viral-Specific Machinery', sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1', label:'Integration',             checks:['c7a','c7b','c7c'], activity:'integraseLab' },
      { key:'m3s2', label:'Capsids and packaging',   checks:['c8a','c8b','c8c'], activity:'capsidTargets' },
      { key:'m3s3', label:'Cut to function',         checks:['c9a','c9b','c9c'], activity:'proteaseLab' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},

    { id:'m4', title:'Module 4 · From Mechanism to Strategy', sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1', label:'Stop release',      checks:['c10a','c10b','c10c'], activity:'releaseLab' },
      { key:'m4s2', label:'Steal the cap',     checks:['c11a','c11b','c11c'], activity:'capLab' },
      { key:'m4s3', label:'Treat or prevent?', checks:['c12a','c12b','c12c'], activity:'caseFile' },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},

    { id:'m5', title:'Module 5 · How Vaccine Platforms Work', sections:[
      { key:'m5home', label:'Module overview' },
      { key:'m5s1', label:'Live, killed, and subunit',    checks:['c13a','c13b','c13c'], activity:'matrixLab' },
      { key:'m5s2', label:'Build a vaccine platform',     checks:['c14a','c14b','c14c'], activity:'platformBuild' },
      { key:'m5s3', label:'Vaccine safety challenge',     checks:['c15a','c15b','c15c'], activity:'vaccineCases' },
      { key:'m5quiz', label:'Module 5 quiz', quiz:'m5' }
    ]},

    { id:'m6', title:'Module 6 · Immunity in the Patient and the Population', sections:[
      { key:'m6home', label:'Module overview' },
      { key:'m6s1', label:'Active vs. passive immunity',       checks:['c16a','c16b','c16c'], activity:'timelineLab' },
      { key:'m6s2', label:'Immediate and durable protection',  checks:['c17a','c17b','c17c'], activity:'rabiesOrder' },
      { key:'m6s3', label:'Herd immunity simulator',           checks:['c18a','c18b','c18c'], activity:'herdLab' },
      { key:'m6quiz', label:'Module 6 quiz', quiz:'m6' }
    ]},

    /* Not a numbered module: id does not match m1, m2, ... so the Start page's module count skips it. */
    { id:'challenge', title:'Integration Challenge · Stop the Virus', sections:[
      { key:'challengehome', label:'Challenge overview' },
      { key:'challenge1', label:'Stop the Virus', checks:[], activity:'stopVirus' }
    ]},

    { id:'flash', title:'Retrieval Practice', sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},

    /* unlockAfter:'*' keeps the exam locked until every other module (and the challenge) is complete */
    { id:'final', title:'Final Mastery Exam', unlockAfter:'*', sections:[
      { key:'final', label:'25 Question Mastery Exam', quiz:'final' }
    ]}
  ],

  /* Where "revisit this" sends a student after a quiz. Every key must match
     an `area` used in the question pool (spelling and capitalization). */
  areaSection: {
    'Selective toxicity'               : 'm1s1',
    'Replication roadmap'              : 'm1s2',
    'Blocked steps and consequences'   : 'm1s3',
    'Entry and uncoating'                         : 'm2s1',
    'Nucleoside analogs and chain termination'  : 'm2s2',
    'Polymerase targets by virus'                 : 'm2s3',
    'Integrase and combination therapy'           : 'm3s1',
    'Capsid and packaging'                        : 'm3s2',
    'Protease inhibitors and boosting'            : 'm3s3',
    'Release inhibition'                          : 'm4s1',
    'Cap-snatching and other mechanisms'          : 'm4s2',
    'Treatment versus prevention'                 : 'm4s3',
    'Vaccine types compared'                      : 'm5s1',
    'Platform mechanisms'                         : 'm5s2',
    'Matching vaccines to patients'               : 'm5s3',
    'Active and passive immunity'                 : 'm6s1',
    'Passive-active protection'                   : 'm6s2',
    'Herd immunity'                               : 'm6s3'
  }
};
