/* MANIFEST: Viruses III · Herpes to Flu — the ONLY place the modules and sections are written. */
var MANIFEST = {
 "topic": "viruses3",
 "title": "Viruses III · Herpes to Flu",
 "file": "viruses3.html",
 "accent": "#0B5563",
 "accentSoft": "#E3F2F4",
 "modules": [
  {
   "id": "home",
   "title": "Start here",
   "sections": [
    {
     "key": "start",
     "label": "Welcome"
    }
   ]
  },
  {
   "id": "m1",
   "title": "Module 1 · Herpesvirus latency",
   "sections": [
    {
     "key": "m1home",
     "label": "Module overview"
    },
    {
     "key": "m1s1",
     "label": "Build a herpesvirion",
     "checks": [
      "c1a",
      "c1b",
      "c1c"
     ],
     "activity": "virionBuild"
    },
    {
     "key": "m1s2",
     "label": "Latency and reactivation",
     "checks": [
      "c2a",
      "c2b",
      "c2c"
     ],
     "activity": "latencySwitch"
    },
    {
     "key": "m1s3",
     "label": "Acyclovir, foscarnet, and urgent HSV",
     "checks": [
      "c3a",
      "c3b",
      "c3c"
     ],
     "activity": "acvCircuit"
    },
    {
     "key": "m1quiz",
     "label": "Module 1 quiz",
     "quiz": "m1"
    }
   ]
  },
  {
   "id": "m2",
   "title": "Module 2 · Herpesvirus spectrum",
   "sections": [
    {
     "key": "m2home",
     "label": "Module overview"
    },
    {
     "key": "m2s1",
     "label": "VZV: chickenpox, zoster, vaccines",
     "checks": [
      "c4a",
      "c4b",
      "c4c"
     ],
     "activity": "vzvTimeline"
    },
    {
     "key": "m2s2",
     "label": "EBV and B lymphocytes",
     "checks": [
      "c5a",
      "c5b"
     ],
     "activity": "ebvDetective"
    },
    {
     "key": "m2s3",
     "label": "CMV and the transplant patient",
     "checks": [
      "c6a",
      "c6b",
      "c6c"
     ],
     "activity": "cmvWorkbench"
    },
    {
     "key": "m2quiz",
     "label": "Module 2 quiz",
     "quiz": "m2"
    }
   ]
  },
  {
   "id": "m3",
   "title": "Module 3 · Lesions and HPV",
   "sections": [
    {
     "key": "m3home",
     "label": "Module overview"
    },
    {
     "key": "m3s1",
     "label": "DNA viruses: nucleus or cytoplasm?",
     "checks": [
      "c7a",
      "c7b",
      "c7c"
     ],
     "activity": "dnaLab"
    },
    {
     "key": "m3s2",
     "label": "Skin lesion detective",
     "checks": [
      "c8a",
      "c8b"
     ],
     "activity": "lesionLab"
    },
    {
     "key": "m3s3",
     "label": "HPV: warts, cancer, vaccination",
     "checks": [
      "c9a",
      "c9b",
      "c9c"
     ],
     "activity": "hpvLab"
    },
    {
     "key": "m3quiz",
     "label": "Module 3 quiz",
     "quiz": "m3"
    }
   ]
  },
  {
   "id": "m4",
   "title": "Module 4 · Influenza variation",
   "sections": [
    {
     "key": "m4home",
     "label": "Module overview"
    },
    {
     "key": "m4s1",
     "label": "The influenza virion: H and N",
     "checks": [
      "c10a",
      "c10b",
      "c10c"
     ],
     "activity": "fluVirion"
    },
    {
     "key": "m4s2",
     "label": "Drift and shift simulator",
     "checks": [
      "c11a",
      "c11b",
      "c11c"
     ],
     "activity": "driftShift"
    },
    {
     "key": "m4s3",
     "label": "Flu outbreak investigator",
     "checks": [
      "c12a",
      "c12b"
     ],
     "activity": "fluInvestigator"
    },
    {
     "key": "m4quiz",
     "label": "Module 4 quiz",
     "quiz": "m4"
    }
   ]
  },
  {
   "id": "m5",
   "title": "Module 5 · Influenza treatment",
   "sections": [
    {
     "key": "m5home",
     "label": "Module overview"
    },
    {
     "key": "m5s1",
     "label": "Block the influenza life cycle",
     "checks": [
      "c13a",
      "c13b"
     ],
     "activity": "fluDrugs"
    },
    {
     "key": "m5s2",
     "label": "Pharmacist at the counter",
     "checks": [
      "c14a",
      "c14b"
     ],
     "activity": "counterCases"
    },
    {
     "key": "m5s3",
     "label": "Build a flu vaccine",
     "checks": [
      "c15a",
      "c15b"
     ],
     "activity": "vaccineLab"
    },
    {
     "key": "m5quiz",
     "label": "Module 5 quiz",
     "quiz": "m5"
    }
   ]
  },
  {
   "id": "m6",
   "title": "Module 6 · Respiratory detective",
   "sections": [
    {
     "key": "m6home",
     "label": "Module overview"
    },
    {
     "key": "m6s1",
     "label": "Viral fingerprint challenge",
     "checks": [
      "c16a",
      "c16b",
      "c16c"
     ],
     "activity": "fingerprint"
    },
    {
     "key": "m6s2",
     "label": "Fusion lab",
     "checks": [
      "c17a",
      "c17b"
     ],
     "activity": "fusionLab"
    },
    {
     "key": "m6s3",
     "label": "Prevention and treatment clinic",
     "checks": [
      "c18a",
      "c18b",
      "c18c"
     ],
     "activity": "clinicLab"
    },
    {
     "key": "m6quiz",
     "label": "Module 6 quiz",
     "quiz": "m6"
    }
   ]
  },
  {
   "id": "detective",
   "title": "Pathogen Detective",
   "sections": [
    {
     "key": "detective",
     "label": "Six case files",
     "activity": "pathogenDetective"
    }
   ]
  },
  {
   "id": "flash",
   "title": "Retrieval Practice",
   "sections": [
    {
     "key": "flashcards",
     "label": "Flashcards"
    }
   ]
  },
  {
   "id": "final",
   "title": "Final Mastery Exam",
   "unlockAfter": "*",
   "sections": [
    {
     "key": "final",
     "label": "25 Question Mastery Challenge",
     "quiz": "final"
    }
   ]
  }
 ],
 "areaSection": {
  "Herpesvirion structure": "m1s1",
  "HSV latency and reactivation": "m1s2",
  "Acyclovir and foscarnet": "m1s3",
  "HSV disease and urgency": "m1s3",
  "VZV chickenpox and zoster": "m2s1",
  "VZV prevention": "m2s1",
  "EBV features": "m2s2",
  "CMV disease": "m2s3",
  "CMV drug targets": "m2s3",
  "DNA virus replication site": "m3s1",
  "Poxviruses and mpox": "m3s1",
  "Skin lesion patterns": "m3s2",
  "HPV oncogenesis": "m3s3",
  "HPV vaccination": "m3s3",
  "Influenza structure": "m4s1",
  "HA and NA": "m4s1",
  "Drift and shift": "m4s2",
  "Reassortment": "m4s2",
  "Influenza pathogenesis": "m4s3",
  "Flu antiviral mechanisms": "m5s1",
  "Zanamivir caution": "m5s2",
  "Flu vaccines": "m5s3",
  "Respiratory classification": "m6s1",
  "Rhinovirus and adenovirus": "m6s1",
  "Fusion proteins": "m6s2",
  "RSV prevention": "m6s3",
  "Coronavirus drugs": "m6s3",
  "Local vs systemic": "m6s3"
 }
};
