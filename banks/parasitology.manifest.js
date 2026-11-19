/* ============================================================
   MANIFEST: Parasitology · Protozoa and Antiparasitics
   The table of contents for this companion. The page
   (parasitology.html) builds its menu and its "what counts as done"
   rules from this, and the hub reads the same file for its dashboard.
   ============================================================ */
var MANIFEST = {
  topic      : 'parasitology',
  title      : "Parasitology · Protozoa and Antiparasitics",
  file       : 'parasitology.html',
  accent     : '#1F3D2B',
  accentSoft : '#FBE6EB',

  modules: [
    { id:'home', title:'Start here', sections:[
      { key:'start', label:'Welcome' }
    ]},

    { id:'m1', title:'Module 1 · Foundations', sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1', label:'Parasite classification', checks:['c1a','c1b','c1c'], activity:'parasiteSorter' },
      { key:'m1s2', label:'Life-cycle forms', checks:['c2a','c2b','c2c'], activity:'formLab' },
      { key:'m1s3', label:'Hosts and transmission', checks:['c3a','c3b','c3c'], activity:'chainLab' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},

    { id:'m2', title:'Module 2 · Intestinal & GU protozoa', sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1', label:'Entamoeba histolytica', checks:['c4a','c4b','c4c'], activity:'amebaLab' },
      { key:'m2s2', label:'Giardia and Cryptosporidium', checks:['c5a','c5b','c5c'], activity:'surfaceLab' },
      { key:'m2s3', label:'Trichomonas vaginalis', checks:['c6a','c6b','c6c'], activity:'trichLab' },
      { key:'m2s4', label:'Diagnostic challenge and drugs', checks:['c7a','c7b','c7c'], activity:'protozoaLab' },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},

    { id:'m3', title:'Module 3 · Malaria biology', sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1', label:'The malaria life cycle', checks:['c8a','c8b','c8c'], activity:'cycleBuild' },
      { key:'m3s2', label:'Five species of Plasmodium', checks:['c9a','c9b','c9c'], activity:'speciesLab' },
      { key:'m3s3', label:'Red cell destruction', checks:['c10a','c10b','c10c'], activity:'pathoSim' },
      { key:'m3s4', label:'Malaria diagnosis', checks:['c11a','c11b','c11c'], activity:'smearLab' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},

    { id:'m4', title:'Module 4 · Antimalarial drugs', sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1', label:'Drug targets in the life cycle', checks:['c12a','c12b','c12c'], activity:'drugTarget' },
      { key:'m4s2', label:'Inside the parasite', checks:['c13a','c13b','c13c'], activity:'insideLab' },
      { key:'m4s3', label:'Hypnozoites and G6PD', checks:['c14a','c14b','c14c'], activity:'g6pdLab' },
      { key:'m4s4', label:'Treatment and prevention', checks:['c15a','c15b','c15c'], activity:'rxLab' },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},

    { id:'m5', title:'Module 5 · Toxoplasma & Pneumocystis', sections:[
      { key:'m5home', label:'Module overview' },
      { key:'m5s1', label:'Toxoplasma gondii', checks:['c16a','c16b','c16c'], activity:'toxoLab' },
      { key:'m5s2', label:'Pneumocystis jirovecii', checks:['c17a','c17b','c17c'], activity:'pcpLab' },
      { key:'m5s3', label:'Host defenses and persistence', checks:['c18a','c18b','c18c'], activity:'immunityLab' },
      { key:'m5quiz', label:'Module 5 quiz', quiz:'m5' }
    ]},

    { id:'cases', title:'Parasite Case Conference', sections:[
      { key:'cases', label:'Three integrated cases', checks:[], activity:'caseConf' }
    ]},

    { id:'flash', title:'Retrieval Practice', sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},

    { id:'final', title:'Final Mastery Exam', unlockAfter:'*', sections:[
      { key:'final', label:'30 Question Mastery Exam', quiz:'final' }
    ]}
  ],

  /* Where "revisit this" sends a student after a quiz. Every key must match an `area` used in the question pool. */
  areaSection: {
    "Parasite classification" : 'm1s1',
    "Protozoan life-cycle forms" : 'm1s2',
    "Hosts and transmission" : 'm1s3',
    "Entamoeba histolytica" : 'm2s1',
    "Giardia and Cryptosporidium" : 'm2s2',
    "Trichomonas vaginalis" : 'm2s3',
    "Differentiating protozoa and their drugs" : 'm2s4',
    "Malaria life cycle" : 'm3s1',
    "Plasmodium species" : 'm3s2',
    "Malaria pathogenesis" : 'm3s3',
    "Malaria diagnosis" : 'm3s4',
    "Antimalarial targets by stage" : 'm4s1',
    "Antimalarial mechanisms" : 'm4s2',
    "G6PD and relapse prevention" : 'm4s3',
    "Antimalarial selection and prevention" : 'm4s4',
    "Toxoplasma gondii" : 'm5s1',
    "Pneumocystis jirovecii" : 'm5s2',
    "Host defenses and folate antagonists" : 'm5s3',
    "Integrating malaria care" : 'cases',
    "Integrating protozoal and opportunistic infections" : 'cases'
  }
};
