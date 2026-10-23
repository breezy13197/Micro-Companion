/* ============================================================
   MANIFEST: Mycoses · Fungal Infections and Antifungals
   The table of contents for this companion. The page (mycoses.html)
   builds its menu and its "what counts as done" rules from this,
   and the hub reads the same file for its dashboard.
   ============================================================ */
var MANIFEST = {
  topic      : 'mycoses',
  title      : "Mycoses · Fungal Infections and Antifungals",
  file       : 'mycoses.html',
  accent     : '#4B4719',
  accentSoft : '#E8F0FD',

  modules: [
    { id:'home', title:'Start here', sections:[
      { key:'start', label:'Welcome' }
    ]},

    { id:"m1", title:"Module 1 · Meet the fungi", sections:[
      { key:"m1home", label:"Module overview" },
      { key:"m1s1", label:"Anatomy of a fungal cell", checks:['c1a', 'c1b', 'c1c'], activity:'cellBuilder' },
      { key:"m1s2", label:"Yeast, mold, or dimorphic?", checks:['c2a', 'c2b', 'c2c'], activity:'morphLab' },
      { key:"m1s3", label:"The host defense challenge", checks:['c3a', 'c3b', 'c3c'], activity:'hostPredict' },
      { key:"m1s4", label:"The fungal investigation lab", checks:['c4a', 'c4b', 'c4c'], activity:'dxMatch' },
      { key:"m1quiz", label:"Module 1 quiz", quiz:"m1" }
    ]},

    { id:"m2", title:"Module 2 · Attack the fungus", sections:[
      { key:"m2home", label:"Module overview" },
      { key:"m2s1", label:"Destroying the cell wall", checks:['c5a', 'c5b', 'c5c'], activity:'wallSteps' },
      { key:"m2s2", label:"Disrupting the membrane", checks:['c6a', 'c6b', 'c6c'], activity:'polyLab' },
      { key:"m2s3", label:"Blocking ergosterol synthesis", checks:['c7a', 'c7b', 'c7c'], activity:'ergoLab' },
      { key:"m2s4", label:"Beyond the membrane", checks:['c8a', 'c8b', 'c8c'], activity:'mechMatch' },
      { key:"m2quiz", label:"Module 2 quiz", quiz:"m2" }
    ]},

    { id:"m3", title:"Module 3 · When fungi invade the skin", sections:[
      { key:"m3home", label:"Module overview" },
      { key:"m3s1", label:"Classify the mycosis", checks:['c9a', 'c9b', 'c9c'], activity:'depthSort' },
      { key:"m3s2", label:"Dermatophyte detective", checks:['c10a', 'c10b', 'c10c'], activity:'dermCase' },
      { key:"m3s3", label:"The rose gardener’s case", checks:['c11a', 'c11b', 'c11c'], activity:'roseCase' },
      { key:"m3quiz", label:"Module 3 quiz", quiz:"m3" }
    ]},

    { id:"m4", title:"Module 4 · From soil to systemic infection", sections:[
      { key:"m4home", label:"Module overview" },
      { key:"m4s1", label:"Endemic fungal investigation", checks:['c12a', 'c12b', 'c12c'], activity:'exposureMatch' },
      { key:"m4s2", label:"The Coccidioides life cycle", checks:['c13a', 'c13b', 'c13c'], activity:'coccidOrder' },
      { key:"m4s3", label:"Systemic mycosis case files", checks:['c14a', 'c14b', 'c14c'], activity:'caseFiles' },
      { key:"m4quiz", label:"Module 4 quiz", quiz:"m4" }
    ]},

    { id:"m5", title:"Module 5 · Candida: from commensal to pathogen", sections:[
      { key:"m5home", label:"Module overview" },
      { key:"m5s1", label:"From colonization to infection", checks:['c15a', 'c15b', 'c15c'], activity:'candidaSim' },
      { key:"m5s2", label:"Localized or invasive?", checks:['c16a', 'c16b', 'c16c'], activity:'candidaTriage' },
      { key:"m5s3", label:"Beyond Candida albicans", checks:['c17a', 'c17b', 'c17c'], activity:'candidemiaCase' },
      { key:"m5quiz", label:"Module 5 quiz", quiz:"m5" }
    ]},

    { id:"m6", title:"Module 6 · Opportunistic fungal threats", sections:[
      { key:"m6home", label:"Module overview" },
      { key:"m6s1", label:"Cryptococcus and the CNS", checks:['c18a', 'c18b', 'c18c'], activity:'cryptoSeq' },
      { key:"m6s2", label:"The many faces of Aspergillus", checks:['c19a', 'c19b', 'c19c'], activity:'aspLab' },
      { key:"m6s3", label:"The immunocompromised patient", checks:['c20a', 'c20b', 'c20c'], activity:'hostRisk' },
      { key:"m6quiz", label:"Module 6 quiz", quiz:"m6" }
    ]},

    { id:'consult', title:'Fungal Consult Service', sections:[
      { key:'consult', label:'Three patient consults', checks:[], activity:'consult' }
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
    "Fungal cell structure" : 'm1s1',
    "Fungal morphology and dimorphism" : 'm1s2',
    "Host defects and fungal risk" : 'm1s3',
    "Laboratory diagnosis and fungal harm" : 'm1s4',
    "Cell wall inhibitors (echinocandins)" : 'm2s1',
    "Polyenes (amphotericin B)" : 'm2s2',
    "Ergosterol synthesis inhibitors (azoles, allylamines)" : 'm2s3',
    "Flucytosine, griseofulvin, and drug matching" : 'm2s4',
    "Classifying mycoses by depth and host" : 'm3s1',
    "Dermatophytes and tinea" : 'm3s2',
    "Sporotrichosis and subcutaneous infection" : 'm3s3',
    "Endemic fungi: forms, places, and clues" : 'm4s1',
    "Coccidioides life cycle and dissemination" : 'm4s2',
    "Treating endemic mycoses" : 'm4s3',
    "Candida: commensal to invader" : 'm5s1',
    "Candida infection sites and therapy" : 'm5s2',
    "Non-albicans Candida and candidemia" : 'm5s3',
    "Cryptococcus and the central nervous system" : 'm6s1',
    "Aspergillus forms and treatment" : 'm6s2',
    "Matching host defects to fungi" : 'm6s3',
    "Integrating host, organism, and therapy" : 'consult'
  }
};
