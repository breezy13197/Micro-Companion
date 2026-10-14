/* ============================================================
   MANIFEST: Viruses IV · Childhood and Enteric Tract Viruses
   The table of contents for this companion: the ONLY place its
   modules and sections are written. The page (viruses4.html)
   builds its menu and its "what counts as done" rules from this,
   and the hub reads the same file for its dashboard.

   How to read a section line:
     { key:'m1s1', label:'…', checks:['k1a','k1b','k1c'], activity:'fingerprintLab' }
        key       = the section's id in viruses4.html (data-key)
        label     = the name shown in the menu
        checks    = the "Can you predict it?" questions that must be answered correctly
        activity  = the hands-on activity that must be completed
     { key:'m1quiz', label:'…', quiz:'m1' }   = a quiz (counts once submitted)
     { key:'m1home', label:'…' }               = a landing page (never blocks progress)
   ============================================================ */
var MANIFEST = {
  topic      : 'viruses4',
  title      : 'Viruses IV · Childhood and Enteric Tract Viruses',
  file       : 'viruses4.html',
  accent     : '#1F2A80',
  accentSoft : '#E9ECFA',

  modules: [
    { id:'home', title:'Start here', sections:[
      { key:'start', label:'Welcome' }
    ]},

    { id:'m1', title:'Module 1 · Childhood viruses and measles', sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1', label:'Viral fingerprint lab',        checks:['k1a','k1b','k1c'], activity:'fingerprintLab' },
      { key:'m1s2', label:'Measles exposure timeline',    checks:['k2a','k2b','k2c'], activity:'exposureTimeline' },
      { key:'m1s3', label:'Rash, immunity, and complications', checks:['k3a','k3b','k3c'], activity:'rashSim' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},

    { id:'m2', title:'Module 2 · Mumps and rubella', sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1', label:'Mumps: where it goes',          checks:['k4a','k4b','k4c'], activity:'mumpsMap' },
      { key:'m2s2', label:'Rubella: mother to fetus',      checks:['k5a','k5b','k5c'], activity:'rubellaPath' },
      { key:'m2s3', label:'Who can receive MMR?',          checks:['k6a','k6b','k6c'], activity:'mmrSorter' },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},

    { id:'m3', title:'Module 3 · Parvovirus B19, HHV-6, and a pregnancy case', sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1', label:'B19 and the hydrops chain',     checks:['k7a','k7b','k7c'], activity:'hydropsChain' },
      { key:'m3s2', label:'Roseola and reactivation',      checks:['k8a','k8b','k8c'], activity:'roseolaTimeline' },
      { key:'m3s3', label:'The pregnancy rash case',       checks:['k9a','k9b','k9c'], activity:'pregCase' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},

    { id:'m4', title:'Module 4 · Enteric transmission and norovirus', sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1', label:'The fecal-oral chain',          checks:['k10a','k10b','k10c'], activity:'fecalOral' },
      { key:'m4s2', label:'Genomes and polymerases',       checks:['k11a','k11b','k11c'], activity:'genomeChallenge' },
      { key:'m4s3', label:'Norovirus outbreak commander',  checks:['k12a','k12b','k12c'], activity:'outbreakCmd' },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},

    { id:'m5', title:'Module 5 · Rotavirus, fluids, and vaccines', sections:[
      { key:'m5home', label:'Module overview' },
      { key:'m5s1', label:'Norovirus vs. rotavirus',       checks:['k13a','k13b','k13c'], activity:'h2hMatch' },
      { key:'m5s2', label:'The gut fluid balance',         checks:['k14a','k14b','k14c'], activity:'fluidSim' },
      { key:'m5s3', label:'Rotavirus vaccine screening',   checks:['k15a','k15b','k15c'], activity:'vaccineScreen' },
      { key:'m5quiz', label:'Module 5 quiz', quiz:'m5' }
    ]},

    { id:'m6', title:'Module 6 · Enteroviruses and local vs. systemic infection', sections:[
      { key:'m6home', label:'Module overview' },
      { key:'m6s1', label:'Poliovirus: four stages',       checks:['k16a','k16b','k16c'], activity:'polioPath' },
      { key:'m6s2', label:'Coxsackievirus and echovirus',  checks:['k17a','k17b','k17c'], activity:'coxTriage' },
      { key:'m6s3', label:'Local vs. systemic infection',  checks:['k18a','k18b','k18c'], activity:'bodyExplorer' },
      { key:'m6quiz', label:'Module 6 quiz', quiz:'m6' }
    ]},

    { id:'flash', title:'Retrieval Practice', sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},

    { id:'final', title:'Final Mastery Exam', unlockAfter:'*', sections:[
      { key:'final', label:'25 Question Mastery Exam', quiz:'final' }
    ]}
  ],

  /* Where "revisit this" sends a student after a quiz. Every key must match
     an `area` used in the question pool (spelling and capitalization). */
  areaSection: {
    'Childhood virus features'                : 'm1s1',
    'Measles transmission and prevention'      : 'm1s2',
    'Measles pathogenesis and complications'   : 'm1s3',
    'Mumps tissue tropism'                     : 'm2s1',
    'Rubella and congenital infection'         : 'm2s2',
    'MMR vaccination'                          : 'm2s3',
    'Parvovirus B19'                           : 'm3s1',
    'HHV-6 and roseola'                        : 'm3s2',
    'Pregnancy rash case'                      : 'm3s3',
    'Fecal–oral transmission'                  : 'm4s1',
    'Enteric virus genomes'                    : 'm4s2',
    'Norovirus outbreaks'                      : 'm4s3',
    'Norovirus vs. rotavirus'                  : 'm5s1',
    'Rotavirus pathogenesis and fluids'        : 'm5s2',
    'Rotavirus vaccines'                       : 'm5s3',
    'Poliovirus pathogenesis and vaccines'     : 'm6s1',
    'Coxsackievirus and echovirus'             : 'm6s2',
    'Local vs. systemic infection'             : 'm6s3'
  }
};
