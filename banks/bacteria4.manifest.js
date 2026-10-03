/* ============================================================
   banks/bacteria4.manifest.js
   Module/section map for Bacteria IV — Other Pathogens.

   This is the ONLY place this companion's structure is written.
   bacteria4.html reads this file and derives MODULES, FLOW,
   SECTION_REQ, QUIZ_KEY_FOR_SECTION, and AREA_SECTION from it at
   load time — nothing in bacteria4.html restates this by hand.

   BUILD STATUS: Complete. All six modules, Flashcards, and the
   Mastery Challenge are live.
   ============================================================ */

var MANIFEST = {
  topic: 'bacteria4',
  title: 'Bacteria IV · Other Pathogens',
  file: 'bacteria4.html',
  accent: '#262B36',
  accentSoft: '#ECEDF0',

  modules: [
    { id: 'home', title: 'Welcome', sections: [
      { key: 'start', label: 'Welcome' }
    ]},

    { id: 'm1', title: 'Module 1 · Mycobacteria', sections: [
      { key: 'm1home', label: 'Module overview' },
      { key: 'm1s1', label: 'Built to persist: the acid-fast wall',
        checks: ['c1', 'c1b', 'c1c'], activity: 'mycoEnvelope' },
      { key: 'm1s2', label: 'Infection, containment, and disease',
        checks: ['c2', 'c2b', 'c2c'], activity: 'tbProgression' },
      { key: 'm1s3', label: 'Why four drugs?',
        checks: ['c3', 'c3b', 'c3c'], activity: 'tbRegimenBuilder' },
      { key: 'm1s4', label: 'Resistance lab',
        checks: ['c4', 'c4b', 'c4c'], activity: 'tbResistanceLab' },
      { key: 'm1s5', label: 'TB, MAC, or leprosy?',
        checks: ['c5', 'c5b', 'c5c'], activity: 'tbMacLeprosySort' },
      { key: 'm1quiz', label: 'Module 1 quiz', quiz: 'm1' }
    ]},

    { id: 'm2', title: 'Module 2 · Structural Outliers', sections: [
      { key: 'm2home', label: 'Module overview' },
      { key: 'm2s1', label: 'Actinomyces or Nocardia?',
        checks: ['c6', 'c6b', 'c6c'], activity: 'actinoNocardiaSort' },
      { key: 'm2s2', label: 'Follow the infection',
        checks: ['c7', 'c7b', 'c7c'], activity: 'followInfection' },
      { key: 'm2s3', label: 'Remove the cell wall',
        checks: ['c8', 'c8b', 'c8c'], activity: 'cellWallPredict' },
      { key: 'm2s4', label: 'Walking pneumonia case',
        checks: ['c9', 'c9b', 'c9c'], activity: 'walkingPneumoniaCase' },
      { key: 'm2quiz', label: 'Module 2 quiz', quiz: 'm2' }
    ]},

    { id: 'm3', title: 'Module 3 · Spirochetes', sections: [
      { key: 'm3home', label: 'Module overview' },
      { key: 'm3s1', label: 'Build a spirochete',
        checks: ['c10', 'c10b', 'c10c'], activity: 'spirocheteStructure' },
      { key: 'm3s2', label: 'Stage the syphilis patient',
        checks: ['c11', 'c11b', 'c11c'], activity: 'syphilisTimeline' },
      { key: 'm3s3', label: 'Follow Lyme disease',
        checks: ['c12', 'c12b', 'c12c'], activity: 'lymeProgression' },
      { key: 'm3s4', label: 'Syphilis or Lyme?',
        checks: ['c13', 'c13b', 'c13c'], activity: 'syphilisOrLyme' },
      { key: 'm3s5', label: 'Reaction detective',
        checks: ['c14', 'c14b', 'c14c'], activity: 'reactionDetective' },
      { key: 'm3quiz', label: 'Module 3 quiz', quiz: 'm3' }
    ]},

    { id: 'm4', title: 'Module 4 · Chlamydiae', sections: [
      { key: 'm4home', label: 'Module overview' },
      { key: 'm4s1', label: 'EB or RB?',
        checks: ['c15', 'c15b', 'c15c'], activity: 'ebOrRb' },
      { key: 'm4s2', label: 'Build the chlamydial lifecycle',
        checks: ['c16', 'c16b', 'c16c'], activity: 'chlamydiaLifecycle' },
      { key: 'm4s3', label: 'Break the lifecycle',
        checks: ['c17', 'c17b', 'c17c'], activity: 'breakLifecycle' },
      { key: 'm4s4', label: 'Which Chlamydia?',
        checks: ['c18', 'c18b', 'c18c'], activity: 'whichChlamydia' },
      { key: 'm4s5', label: 'C. trachomatis clinical challenge',
        checks: ['c19', 'c19b', 'c19c'], activity: 'trachomatisCase' },
      { key: 'm4quiz', label: 'Module 4 quiz', quiz: 'm4' }
    ]},

    { id: 'm5', title: 'Module 5 · Rickettsiae', sections: [
      { key: 'm5home', label: 'Module overview' },
      { key: 'm5s1', label: 'From endothelium to rash',
        checks: ['c20', 'c20b', 'c20c'], activity: 'endotheliumToRash' },
      { key: 'm5s2', label: 'RMSF clinical clock',
        checks: ['c21', 'c21b', 'c21c'], activity: 'rmsfClock' },
      { key: 'm5s3', label: 'Vector match',
        checks: ['c22', 'c22b', 'c22c'], activity: 'vectorMatch' },
      { key: 'm5s4', label: 'Find the outlier',
        checks: ['c23', 'c23b', 'c23c'], activity: 'findOutlier' },
      { key: 'm5s5', label: 'Shared tick problem',
        checks: ['c24', 'c24b', 'c24c'], activity: 'sharedTick' },
      { key: 'm5quiz', label: 'Module 5 quiz', quiz: 'm5' }
    ]},

    { id: 'm6', title: 'Module 6 · Pathogen Detective', sections: [
      { key: 'm6home', label: 'Module overview' },
      { key: 'm6s1', label: "What doesn't fit?",
        checks: ['c25', 'c25b', 'c25c'], activity: 'whatDoesntFit' },
      { key: 'm6s2', label: 'Exposure detective',
        checks: ['c26', 'c26b', 'c26c'], activity: 'exposureDetective' },
      { key: 'm6s3', label: 'Treatment constraint',
        checks: ['c27', 'c27b', 'c27c'], activity: 'treatmentConstraint' },
      { key: 'm6s4', label: 'Unknown patient',
        checks: ['c28', 'c28b', 'c28c'], activity: 'unknownPatient' },
      { key: 'm6s5', label: 'Build your final recap',
        checks: ['c29', 'c29b', 'c29c'], activity: 'finalRecap' },
      { key: 'm6quiz', label: 'Module 6 quiz', quiz: 'm6' }
    ]},

    { id: 'flash', title: 'Retrieval Practice', sections: [
      { key: 'flashcards', label: 'Flashcards' }
    ]},

    { id: 'final', title: 'Mastery Challenge', unlockAfter: '*', sections: [
      { key: 'final', label: '25-question mastery exam', quiz: 'final' }
    ]}
  ],

  areaSection: {
    'Acid-fast cell wall':    'm1s1',
    'TB disease progression': 'm1s2',
    'TB drug regimen':        'm1s3',
    'TB drug resistance':     'm1s4',
    'TB vs MAC vs leprosy':   'm1s5',

    'Actinomyces vs Nocardia':          'm2s1',
    'Infection pathway':                'm2s2',
    'No cell wall organisms':           'm2s3',
    'Walking pneumonia identification': 'm2s4',

    'Spirochete structure':          'm3s1',
    'Syphilis staging':              'm3s2',
    'Lyme staging':                  'm3s3',
    'Syphilis vs Lyme differential': 'm3s4',
    'Jarisch-Herxheimer reaction':   'm3s5',

    'EB vs RB':                        'm4s1',
    'Chlamydial lifecycle':            'm4s2',
    'Lifecycle disruption':            'm4s3',
    'Which Chlamydia species':         'm4s4',
    'C. trachomatis clinical management': 'm4s5',

    'Rickettsial pathogenesis':      'm5s1',
    'RMSF clinical timing':          'm5s2',
    'Vector-organism matching':      'm5s3',
    'Coxiella and Wolbachia outliers': 'm5s4',
    'Shared tick exposures':         'm5s5',

    'Cross-organism outliers':          'm6s1',
    'Exposure-based identification':    'm6s2',
    'Treatment constraints from biology': 'm6s3',
    'Unknown patient reasoning':        'm6s4',
    'Cumulative recap':                 'm6s5'
  }
};
