/* ============================================================
   VIRUSES I · INTRODUCTION — manifest
   The ONLY place this companion's module and section structure is
   written. viruses1.html derives its sidebar, progress tracking, and
   quiz wiring from this file, and the hub reads it for its dashboard.
   The hub registration are added here as they
   are built.
   ============================================================ */
var MANIFEST = {
  topic      : 'viruses1',
  title      : 'Viruses I · Introduction',
  file       : 'viruses1.html',
  accent     : '#4A1D5C',
  accentSoft : '#F1E8F5',

  modules: [
    { id:'start', title:'Start Here', sections:[
      { key:'start', label:'Welcome' }
    ]},

    { id:'m1', title:'Module 1 · Build a Virus', sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1', label:'Virus or cell?',        checks:['c1a','c1b'],        activity:'virusOrCell' },
      { key:'m1s2', label:'Build a virion',        checks:['c2a','c2b','c2c'],  activity:'buildVirion' },
      { key:'m1s3', label:'Envelope consequences', checks:['c3a','c3b','c3c'], activity:'envelopeLab' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},

    { id:'m2', title:'Module 2 \u00B7 Replicate It', sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1', label:'Put the cycle in order',          checks:['c4a','c4b'],        activity:'replOrder' },
      { key:'m2s2', label:'Where would a drug work?',        checks:['c5a','c5b','c5c'],  activity:'drugTargets' },
      { key:'m2s3', label:'Lytic or lysogenic?',             checks:['c6a','c6b','c6c'],  activity:'phageBranch' },
      { key:'m2s4', label:'When a phage changes a bacterium',checks:['c7a','c7b'],        activity:'betaPhage' },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},

    { id:'m3', title:'Module 3 \u00B7 Change It', sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1', label:'Make a mutation',                checks:['c8a','c8b'],        activity:'mutationLab' },
      { key:'m3s2', label:'Drift, shift, or swap?',         checks:['c9a','c9b','c9c'],  activity:'genomeLab' },
      { key:'m3s3', label:'Viruses as gene-delivery tools', checks:['c10a','c10b'],      activity:'vectorChoice' },
      { key:'m3s4', label:'Identify the virus',             checks:['c11a','c11b'],      activity:'identifyVirus' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},

    { id:'m4', title:'Module 4 \u00B7 Through the Patient', sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1', label:'What happens to the cell?',        checks:['c12a','c12b'],        activity:'cellEffects' },
      { key:'m4s2', label:'Why does the patient feel sick?',  checks:['c13a','c13b','c13c'], activity:'immuneDial' },
      { key:'m4s3', label:'Local or systemic?',               checks:['c14a','c14b'],        activity:'spreadSort' },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},

    { id:'m5', title:'Module 5 \u00B7 Fight It', sections:[
      { key:'m5home', label:'Module overview' },
      { key:'m5s1', label:'The interferon alarm',  checks:['c15a','c15b'],        activity:'ifnLab' },
      { key:'m5s2', label:'Nonspecific defenses',  checks:['c16a','c16b','c16c'], activity:'defenseMatch' },
      { key:'m5s3', label:'Antibody defense',      checks:['c17a','c17b'],        activity:'antibodySim' },
      { key:'m5s4', label:'Active, passive, or herd?', checks:['c18a','c18b'],    activity:'herdSim' },
      { key:'m5s5', label:'CD8 or NK?',            checks:['c19a','c19b'],        activity:'mhcLab' },
      { key:'m5s6', label:'Escape and persistence', checks:['c20a','c20b','c20c'], activity:'persistBuilder' },
      { key:'m5quiz', label:'Module 5 quiz', quiz:'m5' }
    ]},

    { id:'m6', title:'Module 6 \u00B7 Diagnose It', sections:[
      { key:'m6home', label:'Module overview' },
      { key:'m6s1', label:'Choose the test',        checks:['c21a','c21b','c21c'], activity:'labBench' },
      { key:'m6s2', label:'Interpret the result',   checks:['c22a','c22b'],        activity:'titerLab' },
      { key:'m6s3', label:'The unknown patient',    checks:['c23a','c23b'],        activity:'unknownPatient' },
      { key:'m6quiz', label:'Module 6 quiz', quiz:'m6' }
    ]},

    { id:'flash', title:'Retrieval Practice', sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},

    { id:'final', title:'Final Mastery Exam', unlockAfter:'*', sections:[
      { key:'final', label:'25-question exam', quiz:'final' }
    ]}
  ],

  /* where "review this concept" sends a student after a quiz */
  areaSection: {
    'Viruses versus cells'  : 'm1s1',
    'Virion components'     : 'm1s2',
    'Capsid structure'      : 'm1s2',
    'Envelope consequences' : 'm1s3',
    'Replication steps'          : 'm2s1',
    'Antiviral targets'          : 'm2s2',
    'Phage replication cycles'   : 'm2s3',
    'Lysogenic conversion'       : 'm2s4',
    'Mutations'                       : 'm3s1',
    'Recombination and reassortment'  : 'm3s2',
    'Gene therapy vectors'            : 'm3s3',
    'Virus classification'            : 'm3s4',
    'Cell alterations'                : 'm4s1',
    'Causes of symptoms'              : 'm4s2',
    'Immunopathogenesis'              : 'm4s2',
    'Local versus systemic spread'    : 'm4s3',
    'Interferon'                      : 'm5s1',
    'Nonspecific defenses'            : 'm5s2',
    'Antibody defense'                : 'm5s3',
    'Immunization and herd immunity'  : 'm5s4',
    'CD8 and NK cells'                : 'm5s5',
    'Immune evasion and persistence'  : 'm5s6',
    'Choosing a test'                 : 'm6s1',
    'Serology and titers'             : 'm6s2',
    'Culture and CPE'                 : 'm6s2',
    'Integrated cases'                : 'm6s3'
  }
};
