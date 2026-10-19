/* ============================================================
   MANIFEST: Viruses V · Hepatitis, Arboviruses, Rabies, Ebola, HIV
   The table of contents for this companion. The page (viruses5.html)
   builds its menu and its "what counts as done" rules from this,
   and the hub reads the same file for its dashboard.
   ============================================================ */
var MANIFEST = {
  topic      : 'viruses5',
  title      : "Viruses V · Hepatitis, Arboviruses, Rabies, Ebola, HIV",
  file       : 'viruses5.html',
  accent     : '#8A3B12',
  accentSoft : '#F0EAFC',

  modules: [
    { id:'home', title:'Start here', sections:[
      { key:'start', label:'Welcome' }
    ]},

    { id:'m1', title:"Module 1 · Hepatitis A–E", sections:[
      { key:'m1home', label:"Module overview" },
      { key:'m1s1', label:"Five viruses, one organ", checks:['c1a','c1b','c1c'], activity:'liverSort' },
      { key:'m1s2', label:"Telling A through E apart", checks:['c2a','c2b','c2c'], activity:'abcdeSort' },
      { key:'m1s3', label:"Age, exposure, and prevention", checks:['c3a','c3b','c3c'], activity:'hepCase' },
      { key:'m1quiz', label:"Module 1 quiz", quiz:'m1' }
    ]},

    { id:'m2', title:"Module 2 · Serology & antivirals", sections:[
      { key:'m2home', label:"Module overview" },
      { key:'m2s1', label:"Reading HBV serology", checks:['c4a','c4b','c4c'], activity:'serologyPredict' },
      { key:'m2s2', label:"HBV replication and cccDNA", checks:['c5a','c5b','c5c'], activity:'hbvExplore' },
      { key:'m2s3', label:"HCV: SVR and direct-acting antivirals", checks:['c6a','c6b','c6c'], activity:'daaMatch' },
      { key:'m2s4', label:"HDV: a virus that borrows an envelope", checks:['c7a','c7b','c7c'], activity:'hdvSteps' },
      { key:'m2quiz', label:"Module 2 quiz", quiz:'m2' }
    ]},

    { id:'m3', title:"Module 3 · Arboviruses & vectors", sections:[
      { key:'m3home', label:"Module overview" },
      { key:'m3s1', label:"Vectors and the transmission cycle", checks:['c8a','c8b','c8c'], activity:'cycleSteps' },
      { key:'m3s2', label:"Dead-end hosts and reservoirs", checks:['c9a','c9b','c9c'], activity:'viremiaLab' },
      { key:'m3s3', label:"Four arboviruses compared", checks:['c10a','c10b','c10c'], activity:'arboSort' },
      { key:'m3quiz', label:"Module 3 quiz", quiz:'m3' }
    ]},

    { id:'m4', title:"Module 4 · Rabies and Ebola", sections:[
      { key:'m4home', label:"Module overview" },
      { key:'m4s1', label:"Rabies: a virus that travels by nerve", checks:['c11a','c11b','c11c'], activity:'rabiesPath' },
      { key:'m4s2', label:"Rabies exposure management", checks:['c12a','c12b','c12c'], activity:'whoTriage' },
      { key:'m4s3', label:"Ebola: structure and how it kills", checks:['c13a','c13b','c13c'], activity:'ebolaFill' },
      { key:'m4s4', label:"Ebola species and countermeasures", checks:['c14a','c14b','c14c'], activity:'ebolaSpecies' },
      { key:'m4quiz', label:"Module 4 quiz", quiz:'m4' }
    ]},

    { id:'m5', title:"Module 5 · HIV drug targets", sections:[
      { key:'m5home', label:"Module overview" },
      { key:'m5s1', label:"The HIV virion and CD4 loss", checks:['c15a','c15b','c15c'], activity:'hivExplore' },
      { key:'m5s2', label:"The HIV life cycle", checks:['c16a','c16b','c16c'], activity:'hivCycle' },
      { key:'m5s3', label:"Where each drug class acts", checks:['c17a','c17b','c17c'], activity:'drugTarget' },
      { key:'m5s4', label:"How NRTIs stop DNA synthesis", checks:['c18a','c18b','c18c'], activity:'nrtiChain' },
      { key:'m5s5', label:"Protease inhibitors and boosting", checks:['c19a','c19b','c19c'], activity:'boostLab' },
      { key:'m5quiz', label:"Module 5 quiz", quiz:'m5' }
    ]},

    { id:'m6', title:"Module 6 · HIV care & prevention", sections:[
      { key:'m6home', label:"Module overview" },
      { key:'m6s1', label:"Combination therapy and resistance", checks:['c20a','c20b','c20c'], activity:'adherenceLab' },
      { key:'m6s2', label:"Today’s first-line options", checks:['c21a','c21b'], activity:'regimenCase' },
      { key:'m6s3', label:"Preventing HIV: PrEP, PEP, and more", checks:['c22a','c22b','c22c'], activity:'preventSort' },
      { key:'m6s4', label:"HIV in pregnancy: delivery and feeding", checks:['c23a','c23b','c23c'], activity:'deliveryLab' },
      { key:'m6quiz', label:"Module 6 quiz", quiz:'m6' }
    ]},

    { id:'flash', title:'Retrieval Practice', sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},

    { id:'final', title:'Final Mastery Exam', unlockAfter:'*', sections:[
      { key:'final', label:'25 Question Mastery Exam', quiz:'final' }
    ]}
  ],

  /* Where "revisit this" sends a student after a quiz. Every key must match an `area` used in the question pool. */
  areaSection: {
    "Liver injury and shared presentation" : 'm1s1',
    "Differentiating hepatitis A–E" : 'm1s2',
    "Hepatitis A, B, E: age, exposure, prevention" : 'm1s3',
    "HBV serology" : 'm2s1',
    "HBV replication and cccDNA" : 'm2s2',
    "HCV antivirals" : 'm2s3',
    "HDV dependency" : 'm2s4',
    "Arbovirus vectors and transmission" : 'm3s1',
    "Viremia and host role" : 'm3s2',
    "Arbovirus syndromes" : 'm3s3',
    "Rabies pathogenesis" : 'm4s1',
    "Rabies exposure management" : 'm4s2',
    "Ebola virus and pathogenesis" : 'm4s3',
    "Ebola species and countermeasures" : 'm4s4',
    "HIV structure and CD4 loss" : 'm5s1',
    "HIV life cycle" : 'm5s2',
    "Antiretroviral targets" : 'm5s3',
    "NRTI mechanism" : 'm5s4',
    "Protease inhibitor boosting" : 'm5s5',
    "Combination therapy and resistance" : 'm6s1',
    "First-line regimens" : 'm6s2',
    "HIV prevention" : 'm6s3',
    "HIV in pregnancy" : 'm6s4'
  }
};
