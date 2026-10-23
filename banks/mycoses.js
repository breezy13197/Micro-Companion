/* Question bank: Mycoses · Fungal Infections and Antifungals. Written for the PHA3109 Mycoses lecture. */
var TOPIC_ID = "mycoses";
var TOPIC_TITLE = "Mycoses · Fungal Infections and Antifungals";

/* Checkpoint answers. The question text itself lives in mycoses.html. */
var CHECKPOINTS = {
 "c1a": {
  "options": [
   "Peptidoglycan",
   "Chitin",
   "Cholesterol",
   "Lipopolysaccharide"
  ],
  "answer": 1,
  "why": "Chitin, a polymer of N-acetylglucosamine, works together with β-glucan to form the fungal wall. Peptidoglycan is the bacterial wall polymer."
 },
 "c1b": {
  "options": [
   "Cholesterol",
   "Phosphatidylcholine",
   "Sphingomyelin",
   "Ergosterol"
  ],
  "answer": 3,
  "why": "Fungal membranes contain ergosterol where human membranes contain cholesterol. Phospholipids such as phosphatidylcholine are found in both."
 },
 "c1c": {
  "options": [
   "Human cells do not build these polymers",
   "Human cells destroy the drug before it acts",
   "Human cells keep these polymers inside the nucleus",
   "Human enzymes bind the drug more weakly than fungal ones do"
  ],
  "answer": 0,
  "why": "Selective toxicity comes from a target that the host does not have. Human cells have no wall, so chitin and β-glucan synthesis offers a target found only in the fungus."
 },
 "c2a": {
  "options": [
   "Aspergillus fumigatus",
   "Rhizopus oryzae",
   "Histoplasma capsulatum",
   "Cryptococcus neoformans"
  ],
  "answer": 2,
  "why": "Histoplasma is a mold in the environment and a yeast at body temperature. Aspergillus and Rhizopus stay molds, and Cryptococcus stays a yeast."
 },
 "c2b": {
  "options": [
   "A budding yeast with a single bud",
   "A spherule filled with endospores",
   "Septate hyphae with conidia",
   "A yeast with a thick capsule"
  ],
  "answer": 1,
  "why": "Coccidioides forms spherules that fill with endospores and rupture. A budding yeast is the tissue form of Histoplasma, and a capsule is a feature of Cryptococcus."
 },
 "c2c": {
  "options": [
   "Antigenic variation",
   "Spore dormancy",
   "Biofilm formation",
   "Thermal dimorphism"
  ],
  "answer": 3,
  "why": "The organism changes form with temperature, which is thermal dimorphism. The other terms describe different processes."
 },
 "c3a": {
  "options": [
   "Aspergillus and Candida",
   "Cryptococcus and Pneumocystis",
   "Mucor and Rhizopus",
   "Trichophyton and Microsporum"
  ],
  "answer": 0,
  "why": "Neutrophils kill yeasts and hyphae, so neutropenia favors Aspergillus and Candida. T-cell loss points to Cryptococcus, and ketoacidosis points to Mucor."
 },
 "c3b": {
  "options": [
   "Acute adrenal crisis",
   "Hypoglycemia",
   "Diabetic ketoacidosis",
   "Respiratory alkalosis"
  ],
  "answer": 2,
  "why": "Acidic, high-glucose tissue favors these molds, which invade vessels and cause necrosis."
 },
 "c3c": {
  "options": [
   "Lipopolysaccharide released from the fungal wall",
   "The host inflammatory response, granulomatous or suppurative",
   "An A-B exotoxin that blocks protein synthesis",
   "Proteins injected through a secretion system"
  ],
  "answer": 1,
  "why": "Fungi produce no endotoxin or exotoxin of the bacterial kind. Granulomas (cell-mediated) and neutrophil-rich pus (suppurative) account for the damage."
 },
 "c4a": {
  "options": [
   "Potassium hydroxide preparation",
   "Acid-fast stain",
   "Crystal violet",
   "India ink"
  ],
  "answer": 3,
  "why": "India ink is excluded by the capsule, which leaves a clear halo around each yeast. KOH is used to clear skin scrapings."
 },
 "c4b": {
  "options": [
   "It dissolves human cells and keratin",
   "It colors the fungal capsule dark",
   "It kills bacteria that cover the fungi",
   "It makes the fungal wall glow"
  ],
  "answer": 0,
  "why": "KOH clears the background of human cells and keratin, leaving the fungal hyphae easy to see."
 },
 "c4c": {
  "options": [
   "Ergotamine",
   "Aflatoxin",
   "α-Amanitin",
   "Lysergic acid"
  ],
  "answer": 2,
  "why": "α-Amanitin blocks RNA polymerase II. Ergotamine and lysergic acid come from ergot, and aflatoxin comes from Aspergillus flavus."
 },
 "c5a": {
  "options": [
   "Squalene epoxidase",
   "β-glucan synthase",
   "14α-Demethylase",
   "Thymidylate synthase"
  ],
  "answer": 1,
  "why": "Echinocandins block β-glucan synthase in the fungal membrane. Squalene epoxidase and 14α-demethylase are steps in ergosterol synthesis, and thymidylate synthase is the target of fluorouracil."
 },
 "c5b": {
  "options": [
   "They are taken by mouth and absorbed from the intestine",
   "They are applied to the skin and nails",
   "They are inhaled to reach the lungs",
   "They are given by IV infusion because they are not orally active"
  ],
  "answer": 3,
  "why": "None of the echinocandins is orally active, so each is given as an IV infusion."
 },
 "c5c": {
  "options": [
   "They cause fewer interactions",
   "They cause more interactions through strong CYP3A inhibition",
   "They cause the same number of interactions",
   "They induce CYP enzymes and lower other drug levels"
  ],
  "answer": 0,
  "why": "Echinocandins are not CYP inhibitors and are poor CYP substrates. That makes interactions fewer than with the azoles."
 },
 "c6a": {
  "options": [
   "It blocks synthesis of β-glucan in the cell wall",
   "It inhibits squalene epoxidase in the pathway",
   "It forms aggregates that extract ergosterol from the membrane",
   "It binds tubulin and stops the mitotic spindle"
  ],
  "answer": 2,
  "why": "Amphotericin B acts as a sterol sponge. Pores and ion leakage are secondary effects."
 },
 "c6b": {
  "options": [
   "Liver injury and taste disturbance",
   "Kidney damage and infusion reactions",
   "Bone marrow suppression and rash",
   "Adrenal insufficiency and enlarged breasts in men"
  ],
  "answer": 1,
  "why": "Nephrotoxicity and infusion reactions limit amphotericin B. Liver injury and taste change are associated with terbinafine, and bone marrow toxicity with flucytosine."
 },
 "c6c": {
  "options": [
   "To allow oral absorption",
   "To extend activity to bacteria",
   "To increase binding to cholesterol",
   "To limit renal toxicity"
  ],
  "answer": 3,
  "why": "The liposomal preparation limits kidney toxicity while keeping the antifungal effect."
 },
 "c7a": {
  "options": [
   "14α-Demethylase (CYP51)",
   "Squalene epoxidase",
   "β-Glucan synthase",
   "Thymidylate synthase"
  ],
  "answer": 0,
  "why": "Azoles bind the heme iron of CYP51 and stop the removal of the 14α-methyl group from lanosterol."
 },
 "c7b": {
  "options": [
   "Cytosine deaminase",
   "14α-Demethylase",
   "Squalene epoxidase",
   "β-Glucan synthase"
  ],
  "answer": 2,
  "why": "Allylamines block squalene epoxidase, so squalene builds up."
 },
 "c7c": {
  "options": [
   "They bind albumin so tightly that other drugs are displaced",
   "They inhibit several human CYP450 enzymes that metabolize other drugs",
   "They are converted into fluorouracil in the liver",
   "They induce every glucuronidation enzyme"
  ],
  "answer": 1,
  "why": "The same iron-binding chemistry that blocks fungal CYP51 also affects human CYP450 isoforms, so levels of co-administered drugs change."
 },
 "c8a": {
  "options": [
   "Griseofulvin",
   "Terbinafine",
   "Nystatin",
   "Flucytosine"
  ],
  "answer": 3,
  "why": "Cytosine permease takes flucytosine into the fungus, and cytosine deaminase converts it to fluorouracil."
 },
 "c8b": {
  "options": [
   "Human cells lack cytosine deaminase",
   "Human cells lack thymidylate synthase",
   "Human cells cannot take up any cytosine analogs",
   "Human cells convert it to ergosterol"
  ],
  "answer": 0,
  "why": "Without cytosine deaminase, human cells do not make fluorouracil from flucytosine."
 },
 "c8c": {
  "options": [
   "Flucytosine",
   "Caspofungin",
   "Griseofulvin",
   "Fluconazole"
  ],
  "answer": 2,
  "why": "Griseofulvin interferes with cell division by binding tubulin."
 },
 "c9a": {
  "options": [
   "Subcutaneous",
   "Cutaneous",
   "Systemic",
   "Opportunistic"
  ],
  "answer": 1,
  "why": "Infection of superficial keratinized structures is the definition of a cutaneous mycosis."
 },
 "c9b": {
  "options": [
   "Inhalation of spores",
   "Antibiotic use",
   "Contact with a catheter",
   "Trauma such as a puncture wound"
  ],
  "answer": 3,
  "why": "Subcutaneous mycoses begin when trauma carries the fungus under the skin. Inhalation leads to systemic mycoses."
 },
 "c9c": {
  "options": [
   "Disease occurs mainly in patients with weak defenses",
   "Infection stays in the keratin layer",
   "Infection begins with a thorn puncture",
   "The fungus grows at room temperature"
  ],
  "answer": 0,
  "why": "The category depends on the host. A weakly pathogenic fungus becomes dangerous when immunity fails."
 },
 "c10a": {
  "options": [
   "Encapsulated yeast",
   "Spherules with endospores",
   "Septate hyphae",
   "Cigar-shaped yeasts"
  ],
  "answer": 2,
  "why": "Dermatophytes appear as septate hyphae. Encapsulated yeast suggests Cryptococcus, and spherules suggest Coccidioides."
 },
 "c10b": {
  "options": [
   "Tinea capitis",
   "Tinea cruris",
   "Tinea pedis",
   "Tinea corporis"
  ],
  "answer": 1,
  "why": "Tinea cruris is the groin. Capitis is the head, pedis the foot, and corporis the body."
 },
 "c10c": {
  "options": [
   "Oral drugs kill bacteria that live in nails",
   "Topical drugs are destroyed by sunlight",
   "The fungus lives in the bloodstream",
   "Topical drugs do not penetrate deeply enough"
  ],
  "answer": 3,
  "why": "The infection sits in keratin structures that creams cannot reach well."
 },
 "c11a": {
  "options": [
   "Sporothrix schenckii",
   "Trichophyton rubrum",
   "Candida albicans",
   "Cryptococcus neoformans"
  ],
  "answer": 0,
  "why": "Sporothrix is carried on plants and enters through puncture wounds."
 },
 "c11b": {
  "options": [
   "Coccidioides",
   "Aspergillus",
   "Sporothrix",
   "Microsporum"
  ],
  "answer": 2,
  "why": "Cigar-shaped yeasts are the tissue form of Sporothrix. Coccidioides forms spherules, and Aspergillus forms hyphae."
 },
 "c11c": {
  "options": [
   "Caspofungin",
   "Itraconazole",
   "Flucytosine",
   "Nystatin"
  ],
  "answer": 1,
  "why": "Itraconazole or terbinafine treats sporotrichosis. Echinocandins are not part of this plan."
 },
 "c12a": {
  "options": [
   "Yeast with multiple buds",
   "Yeast inside macrophages",
   "Septate hyphae with sporangia",
   "Spherule with endospores"
  ],
  "answer": 3,
  "why": "The spherule filled with endospores is unique to Coccidioides. Multiple buds mark Paracoccidioides, and macrophage yeast marks Histoplasma."
 },
 "c12b": {
  "options": [
   "Histoplasma",
   "Blastomyces",
   "Coccidioides",
   "Cryptococcus"
  ],
  "answer": 0,
  "why": "Small yeasts inside macrophages plus the river valley location point to Histoplasma."
 },
 "c12c": {
  "options": [
   "Paracoccidioides",
   "Histoplasma",
   "Blastomyces",
   "Candida"
  ],
  "answer": 2,
  "why": "A single broad-based bud is the Blastomyces clue, while Paracoccidioides has multiple buds."
 },
 "c13a": {
  "options": [
   "The arthrospore",
   "The spherule",
   "The hypha",
   "The granuloma"
  ],
  "answer": 1,
  "why": "A spherule matures by filling with endospores. The wall then ruptures and releases them."
 },
 "c13b": {
  "options": [
   "Neutrophil abscess formation",
   "Killing by circulating antibody alone",
   "Lysis by complement in the airway",
   "Granuloma formation by cell-mediated immunity"
  ],
  "answer": 3,
  "why": "Cell-mediated immunity forms granulomas, which are collections of macrophages and lymphocytes."
 },
 "c13c": {
  "options": [
   "Skin, bone, and meninges",
   "Teeth, hair, and nails",
   "Thyroid, pancreas, and spleen",
   "Retina and cornea"
  ],
  "answer": 0,
  "why": "The lecture lists skin, bone, and meninges as common sites of dissemination."
 },
 "c14a": {
  "options": [
   "Caspofungin",
   "Griseofulvin",
   "Itraconazole",
   "Flucytosine"
  ],
  "answer": 2,
  "why": "Itraconazole is the usual first choice for Histoplasma, Blastomyces, and Paracoccidioides."
 },
 "c14b": {
  "options": [
   "Micafungin",
   "Fluconazole",
   "Terbinafine",
   "Nystatin"
  ],
  "answer": 1,
  "why": "Fluconazole penetrates the CNS and is the lecture choice for coccidioidal meningitis."
 },
 "c14c": {
  "options": [
   "A positive KOH preparation",
   "A travel history",
   "A negative blood culture",
   "Severe disease"
  ],
  "answer": 3,
  "why": "Amphotericin B is held for severe disease. Itraconazole or fluconazole covers milder cases."
 },
 "c15a": {
  "options": [
   "Intact skin and cell-mediated immunity",
   "Alkaline stomach acid",
   "Circulating IgE",
   "Complement in the urine"
  ],
  "answer": 0,
  "why": "The lecture states that intact skin and cell-mediated immunity prevent overgrowth of this normal flora."
 },
 "c15b": {
  "options": [
   "Yeast forms an endospore",
   "Yeast forms a capsule",
   "Yeast converts to hyphae",
   "Yeast forms sporangia"
  ],
  "answer": 2,
  "why": "Invasion involves the yeast-to-hypha switch, plus biofilm formation on catheters."
 },
 "c15c": {
  "options": [
   "A healthy keratin layer",
   "An indwelling catheter",
   "A wool sweater",
   "Normal gastric acid"
  ],
  "answer": 1,
  "why": "Catheters provide a surface on which Candida builds a biofilm and can seed the bloodstream."
 },
 "c16a": {
  "options": [
   "Nystatin",
   "Caspofungin",
   "Griseofulvin",
   "Fluconazole"
  ],
  "answer": 3,
  "why": "Esophageal candidiasis is treated with fluconazole."
 },
 "c16b": {
  "options": [
   "An echinocandin",
   "A polyene suspension",
   "An allylamine",
   "An imidazole cream"
  ],
  "answer": 0,
  "why": "Echinocandins such as caspofungin or micafungin are the first-line choice for candidemia."
 },
 "c16c": {
  "options": [
   "Apply a topical cream to the line",
   "Increase the antibiotic dose",
   "Remove or replace the catheter",
   "Delay treatment until the line is cultured"
  ],
  "answer": 2,
  "why": "The catheter can hold a biofilm, so removal or replacement is part of treatment."
 },
 "c17a": {
  "options": [
   "Candida parapsilosis",
   "Candida krusei",
   "Candida albicans",
   "Candida tropicalis"
  ],
  "answer": 1,
  "why": "C. krusei is intrinsically resistant, so fluconazole should not be assumed effective."
 },
 "c17b": {
  "options": [
   "Candida albicans",
   "Candida parapsilosis",
   "Candida glabrata",
   "Candida auris"
  ],
  "answer": 3,
  "why": "C. auris spreads between patients in healthcare settings, and an echinocandin is first-line."
 },
 "c17c": {
  "options": [
   "When the patient is stable and the isolate is susceptible",
   "When the isolate is C. krusei",
   "When the catheter has been left in place",
   "When blood cultures are still positive"
  ],
  "answer": 0,
  "why": "Step-down to fluconazole is for stable patients with a susceptible isolate."
 },
 "c18a": {
  "options": [
   "A chitin wall",
   "Hyphae",
   "The polysaccharide capsule",
   "A spherule wall"
  ],
  "answer": 2,
  "why": "India ink is excluded by the capsule, so each yeast appears with a halo."
 },
 "c18b": {
  "options": [
   "Caspofungin plus fluconazole",
   "Liposomal amphotericin B plus flucytosine",
   "Terbinafine plus griseofulvin",
   "Nystatin plus clotrimazole"
  ],
  "answer": 1,
  "why": "Liposomal amphotericin B plus flucytosine is followed by fluconazole. Echinocandins are inactive against Cryptococcus."
 },
 "c18c": {
  "options": [
   "To avoid drug absorption problems",
   "Because ART kills the yeast",
   "Because flucytosine blocks ART",
   "To lower the risk of IRIS"
  ],
  "answer": 3,
  "why": "Rising CD4 cells can cause a profound inflammatory response, and cryptococcal IRIS may be deadly."
 },
 "c19a": {
  "options": [
   "A fungus ball in an existing lung cavity",
   "Hyphae invading blood vessels",
   "An allergic airway reaction",
   "A thick-walled spherule"
  ],
  "answer": 0,
  "why": "An aspergilloma is a fungus ball. Hyphae invading vessels describes invasive disease."
 },
 "c19b": {
  "options": [
   "Caspofungin alone",
   "Terbinafine",
   "Voriconazole",
   "Nystatin"
  ],
  "answer": 2,
  "why": "Voriconazole is the lecture choice, with isavuconazole or liposomal amphotericin B as alternatives."
 },
 "c19c": {
  "options": [
   "A patient with a mild toenail infection",
   "A patient who is neutropenic after chemotherapy",
   "A patient with intact immunity and healthy lungs",
   "A patient with a pricked finger"
  ],
  "answer": 1,
  "why": "Neutropenia and high-dose steroids allow Aspergillus hyphae to invade."
 },
 "c20a": {
  "options": [
   "Tinea pedis",
   "Valley fever",
   "Mild thrush",
   "Diabetic ketoacidosis"
  ],
  "answer": 3,
  "why": "Ketoacidosis, renal acidosis, and cancer are listed risks for Mucor and Rhizopus."
 },
 "c20b": {
  "options": [
   "Nonseptate hyphae",
   "Septate hyphae",
   "Pseudohyphae",
   "Budding yeast"
  ],
  "answer": 0,
  "why": "Mucor and Rhizopus have nonseptate hyphae, while Aspergillus hyphae are septate."
 },
 "c20c": {
  "options": [
   "Mucor",
   "Sporothrix",
   "Cryptococcus",
   "Trichophyton"
  ],
  "answer": 2,
  "why": "Compromised cell-mediated immunity increases the risk of Cryptococcus."
 }
};

var CARDS = [
 {
  "id": "MYC-CARD-01",
  "t": "Fungal cell wall",
  "d": "Made of chitin and β-glucan. Human cells have no wall, so wall synthesis is a selective drug target.",
  "area": "Fungal cell structure"
 },
 {
  "id": "MYC-CARD-02",
  "t": "Ergosterol",
  "d": "The main sterol of the fungal membrane. Human membranes use cholesterol, so ergosterol and its synthesis are selective targets.",
  "area": "Fungal cell structure"
 },
 {
  "id": "MYC-CARD-03",
  "t": "Peptidoglycan",
  "d": "The bacterial wall polymer. Fungal walls lack it, so antibacterial wall inhibitors such as penicillins are ineffective against fungi.",
  "area": "Fungal cell structure"
 },
 {
  "id": "MYC-CARD-04",
  "t": "Eukaryote",
  "d": "A cell with a nucleus and mitochondria. Fungi are eukaryotes, which is why many antifungal targets are limited.",
  "area": "Fungal cell structure"
 },
 {
  "id": "MYC-CARD-05",
  "t": "Yeast",
  "d": "A single-celled fungal form that reproduces by budding.",
  "area": "Fungal morphology and dimorphism"
 },
 {
  "id": "MYC-CARD-06",
  "t": "Mold",
  "d": "A multicellular fungal form made of hyphae.",
  "area": "Fungal morphology and dimorphism"
 },
 {
  "id": "MYC-CARD-07",
  "t": "Thermal dimorphism",
  "d": "A mold at 20–25 °C that converts to a yeast (or spherule) at body temperature of 37 °C.",
  "area": "Fungal morphology and dimorphism"
 },
 {
  "id": "MYC-CARD-08",
  "t": "Spherule",
  "d": "A large, thick-walled structure of Coccidioides that encloses endospores in tissue.",
  "area": "Fungal morphology and dimorphism"
 },
 {
  "id": "MYC-CARD-09",
  "t": "Hypha",
  "d": "A filament of a mold. Septate hyphae have cross-walls; Mucor and Rhizopus have nonseptate hyphae.",
  "area": "Fungal morphology and dimorphism"
 },
 {
  "id": "MYC-CARD-10",
  "t": "Neutropenia",
  "d": "Low neutrophils. Raises risk for Candida and Aspergillus.",
  "area": "Host defects and fungal risk"
 },
 {
  "id": "MYC-CARD-11",
  "t": "Cell-mediated immunity defect",
  "d": "Low CD4 T-cell function, as in advanced HIV. Raises risk for Cryptococcus and mucosal Candida.",
  "area": "Host defects and fungal risk"
 },
 {
  "id": "MYC-CARD-12",
  "t": "High-dose corticosteroids",
  "d": "Blunt macrophage and T-cell function. Raise risk for Aspergillus, Cryptococcus, and reactivated endemic fungi.",
  "area": "Host defects and fungal risk"
 },
 {
  "id": "MYC-CARD-13",
  "t": "Ketoacidosis",
  "d": "Raises the risk of Mucor and Rhizopus infection.",
  "area": "Host defects and fungal risk"
 },
 {
  "id": "MYC-CARD-14",
  "t": "KOH preparation",
  "d": "Dissolves human cells to reveal fungal elements. Dermatophytes show septate hyphae.",
  "area": "Laboratory diagnosis and fungal harm"
 },
 {
  "id": "MYC-CARD-15",
  "t": "India ink",
  "d": "A stain that outlines the Cryptococcus capsule as a clear halo.",
  "area": "Laboratory diagnosis and fungal harm"
 },
 {
  "id": "MYC-CARD-16",
  "t": "Sabouraud agar",
  "d": "The standard culture medium for dermatophytes.",
  "area": "Laboratory diagnosis and fungal harm"
 },
 {
  "id": "MYC-CARD-17",
  "t": "Mycosis, mycotoxicosis, allergy",
  "d": "Infection by a fungus; poisoning by a fungal toxin; and an allergic reaction to fungal antigens.",
  "area": "Laboratory diagnosis and fungal harm"
 },
 {
  "id": "MYC-CARD-18",
  "t": "Echinocandins",
  "d": "Caspofungin, anidulafungin, micafungin. Inhibit β-glucan synthase. IV only, few CYP interactions.",
  "area": "Cell wall inhibitors (echinocandins)"
 },
 {
  "id": "MYC-CARD-19",
  "t": "β-Glucan synthase",
  "d": "The enzyme that builds β-glucan for the wall. The target of echinocandins.",
  "area": "Cell wall inhibitors (echinocandins)"
 },
 {
  "id": "MYC-CARD-20",
  "t": "Amphotericin B",
  "d": "A polyene that extracts ergosterol (sterol sponge). The only IV polyene. Toxicity: kidneys and infusion reactions.",
  "area": "Polyenes (amphotericin B)"
 },
 {
  "id": "MYC-CARD-21",
  "t": "Liposomal amphotericin B",
  "d": "A formulation that limits renal toxicity.",
  "area": "Polyenes (amphotericin B)"
 },
 {
  "id": "MYC-CARD-22",
  "t": "Nystatin and natamycin",
  "d": "Polyenes too toxic for IV use. Nystatin is not absorbed orally; natamycin is used for the eye.",
  "area": "Polyenes (amphotericin B)"
 },
 {
  "id": "MYC-CARD-23",
  "t": "Azoles",
  "d": "Inhibit CYP51 (14α-demethylase) by binding heme iron. Many drug interactions.",
  "area": "Ergosterol synthesis inhibitors (azoles, allylamines)"
 },
 {
  "id": "MYC-CARD-24",
  "t": "Imidazole vs triazole",
  "d": "Imidazoles (ketoconazole, clotrimazole) are used on the skin; triazoles (fluconazole, itraconazole) are preferred orally.",
  "area": "Ergosterol synthesis inhibitors (azoles, allylamines)"
 },
 {
  "id": "MYC-CARD-25",
  "t": "Allylamines",
  "d": "Terbinafine, naftifine, butenafine. Inhibit squalene epoxidase, so squalene accumulates.",
  "area": "Ergosterol synthesis inhibitors (azoles, allylamines)"
 },
 {
  "id": "MYC-CARD-26",
  "t": "Mold-active azoles",
  "d": "Voriconazole, posaconazole, isavuconazole.",
  "area": "Ergosterol synthesis inhibitors (azoles, allylamines)"
 },
 {
  "id": "MYC-CARD-27",
  "t": "Flucytosine",
  "d": "Converted to fluorouracil by cytosine deaminase, which human cells lack. Used with amphotericin B. Toxicity: bone marrow.",
  "area": "Flucytosine, griseofulvin, and drug matching"
 },
 {
  "id": "MYC-CARD-28",
  "t": "Griseofulvin",
  "d": "Binds tubulin and blocks the mitotic spindle. Oral use for cutaneous infection when topical agents fail.",
  "area": "Flucytosine, griseofulvin, and drug matching"
 },
 {
  "id": "MYC-CARD-29",
  "t": "Terbinafine",
  "d": "Lipophilic; reaches skin, hair, nails, and fat. Oral therapy for nail infection.",
  "area": "Flucytosine, griseofulvin, and drug matching"
 },
 {
  "id": "MYC-CARD-30",
  "t": "Cutaneous mycosis",
  "d": "Infection of superficial keratinized structures: skin, hair, nails.",
  "area": "Classifying mycoses by depth and host"
 },
 {
  "id": "MYC-CARD-31",
  "t": "Subcutaneous mycosis",
  "d": "Fungus introduced into deeper tissue by trauma.",
  "area": "Classifying mycoses by depth and host"
 },
 {
  "id": "MYC-CARD-32",
  "t": "Systemic mycosis",
  "d": "Typically follows inhalation of spores.",
  "area": "Classifying mycoses by depth and host"
 },
 {
  "id": "MYC-CARD-33",
  "t": "Opportunistic mycosis",
  "d": "Weakly pathogenic fungus that causes disease mainly in immunocompromised patients.",
  "area": "Classifying mycoses by depth and host"
 },
 {
  "id": "MYC-CARD-34",
  "t": "Dermatophytes",
  "d": "Trichophyton, Epidermophyton, Microsporum. Infect keratinized structures only.",
  "area": "Dermatophytes and tinea"
 },
 {
  "id": "MYC-CARD-35",
  "t": "Tinea",
  "d": "Ringworm named for the body site: capitis, corporis, cruris, pedis.",
  "area": "Dermatophytes and tinea"
 },
 {
  "id": "MYC-CARD-36",
  "t": "Onychomycosis",
  "d": "Fungal nail infection. Needs oral therapy, because topical drugs do not penetrate well.",
  "area": "Dermatophytes and tinea"
 },
 {
  "id": "MYC-CARD-37",
  "t": "Sporothrix schenckii",
  "d": "Dimorphic fungus on plants. Cause of rose gardener’s disease.",
  "area": "Sporotrichosis and subcutaneous infection"
 },
 {
  "id": "MYC-CARD-38",
  "t": "Sporotrichosis findings",
  "d": "Pustule with nodules after a puncture. Cigar-shaped yeasts in tissue; daisy-like conidia at 20 °C. Treat with itraconazole or terbinafine.",
  "area": "Sporotrichosis and subcutaneous infection"
 },
 {
  "id": "MYC-CARD-39",
  "t": "Coccidioides",
  "d": "Southwestern US and Latin America. Spherules with endospores.",
  "area": "Endemic fungi: forms, places, and clues"
 },
 {
  "id": "MYC-CARD-40",
  "t": "Histoplasma",
  "d": "Ohio and Mississippi River valleys. Small yeasts inside macrophages. Urinary antigen.",
  "area": "Endemic fungi: forms, places, and clues"
 },
 {
  "id": "MYC-CARD-41",
  "t": "Blastomyces",
  "d": "Yeast with a single broad-based bud. Ulcerated skin lesions.",
  "area": "Endemic fungi: forms, places, and clues"
 },
 {
  "id": "MYC-CARD-42",
  "t": "Paracoccidioides",
  "d": "Latin America. Yeast with multiple buds. Ulcerated lesions of the face and mouth.",
  "area": "Endemic fungi: forms, places, and clues"
 },
 {
  "id": "MYC-CARD-43",
  "t": "Arthrospores",
  "d": "Infective form of Coccidioides formed at the ends of hyphae in soil.",
  "area": "Coccidioides life cycle and dissemination"
 },
 {
  "id": "MYC-CARD-44",
  "t": "Endospores",
  "d": "Released when a spherule ruptures. Form new spherules.",
  "area": "Coccidioides life cycle and dissemination"
 },
 {
  "id": "MYC-CARD-45",
  "t": "Granuloma",
  "d": "A collection of activated macrophages and lymphocytes that walls off the fungus. Not pus.",
  "area": "Coccidioides life cycle and dissemination"
 },
 {
  "id": "MYC-CARD-46",
  "t": "Dissemination",
  "d": "Spread to skin, bone, and meninges when cell-mediated immunity is inadequate.",
  "area": "Coccidioides life cycle and dissemination"
 },
 {
  "id": "MYC-CARD-47",
  "t": "Endemic mycosis first-line",
  "d": "Itraconazole for Histoplasma, Blastomyces, and Paracoccidioides. Amphotericin B if severe.",
  "area": "Treating endemic mycoses"
 },
 {
  "id": "MYC-CARD-48",
  "t": "Coccidioides therapy",
  "d": "Fluconazole or itraconazole. Meningitis: fluconazole.",
  "area": "Treating endemic mycoses"
 },
 {
  "id": "MYC-CARD-49",
  "t": "Candida albicans",
  "d": "Normal flora. Intact skin and cell-mediated immunity prevent overgrowth.",
  "area": "Candida: commensal to invader"
 },
 {
  "id": "MYC-CARD-50",
  "t": "Biofilm",
  "d": "A community of yeast attached to a surface such as a catheter.",
  "area": "Candida: commensal to invader"
 },
 {
  "id": "MYC-CARD-51",
  "t": "Yeast-to-hypha switch",
  "d": "A change that supports tissue invasion.",
  "area": "Candida: commensal to invader"
 },
 {
  "id": "MYC-CARD-52",
  "t": "Thrush therapy",
  "d": "Topical clotrimazole or nystatin. Fluconazole if moderate to severe.",
  "area": "Candida infection sites and therapy"
 },
 {
  "id": "MYC-CARD-53",
  "t": "Candidemia",
  "d": "Echinocandin first and remove or replace the central venous catheter.",
  "area": "Candida infection sites and therapy"
 },
 {
  "id": "MYC-CARD-54",
  "t": "C. krusei",
  "d": "Intrinsically resistant to fluconazole.",
  "area": "Non-albicans Candida and candidemia"
 },
 {
  "id": "MYC-CARD-55",
  "t": "C. glabrata",
  "d": "Reduced fluconazole susceptibility. Echinocandin often preferred.",
  "area": "Non-albicans Candida and candidemia"
 },
 {
  "id": "MYC-CARD-56",
  "t": "C. auris",
  "d": "Often multidrug resistant. Spreads in healthcare. Echinocandin first-line.",
  "area": "Non-albicans Candida and candidemia"
 },
 {
  "id": "MYC-CARD-57",
  "t": "Cryptococcus neoformans",
  "d": "Encapsulated yeast. Causes meningitis. Capsule resists phagocytosis.",
  "area": "Cryptococcus and the central nervous system"
 },
 {
  "id": "MYC-CARD-58",
  "t": "Cryptococcal meningitis therapy",
  "d": "Liposomal amphotericin B plus flucytosine, then fluconazole. Echinocandins are inactive.",
  "area": "Cryptococcus and the central nervous system"
 },
 {
  "id": "MYC-CARD-59",
  "t": "IRIS",
  "d": "Immune reconstitution inflammatory syndrome. ART is started about 4 to 6 weeks after antifungal therapy begins.",
  "area": "Cryptococcus and the central nervous system"
 },
 {
  "id": "MYC-CARD-60",
  "t": "Aspergillus",
  "d": "Mold with septate hyphae. Inhaled conidia. Commonly A. fumigatus or A. flavus.",
  "area": "Aspergillus forms and treatment"
 },
 {
  "id": "MYC-CARD-61",
  "t": "Three forms",
  "d": "Invasive disease, aspergilloma, and allergic (ABPA).",
  "area": "Aspergillus forms and treatment"
 },
 {
  "id": "MYC-CARD-62",
  "t": "Invasive aspergillosis therapy",
  "d": "Voriconazole; alternatives isavuconazole or liposomal amphotericin B.",
  "area": "Aspergillus forms and treatment"
 },
 {
  "id": "MYC-CARD-63",
  "t": "Mucor and Rhizopus",
  "d": "Nonseptate hyphae; sporangium. Risk: ketoacidosis, renal acidosis, cancer. Necrotic lesions invading vessels.",
  "area": "Matching host defects to fungi"
 },
 {
  "id": "MYC-CARD-64",
  "t": "Host-risk rule",
  "d": "Neutropenia: Candida and Aspergillus. T-cell loss: Cryptococcus. Ketoacidosis: Mucor and Rhizopus.",
  "area": "Matching host defects to fungi"
 },
 {
  "id": "MYC-CARD-65",
  "t": "Consult chain",
  "d": "Host factors, organism, pathogenesis, diagnostic evidence, treatment. Each link constrains the next.",
  "area": "Integrating host, organism, and therapy"
 },
 {
  "id": "MYC-CARD-66",
  "t": "Pharmacist’s first question",
  "d": "What is the site of infection, and what is wrong with the host?",
  "area": "Integrating host, organism, and therapy"
 }
];

var POOL = [
 {
  "id": "MYC-001",
  "m": "m1",
  "area": "Fungal cell structure",
  "level": "concept",
  "stem": "Which feature makes a fungal cell more like a human cell than like a bacterium?",
  "options": [
   "A peptidoglycan wall around the cell",
   "Mitochondria and other organelles",
   "A single circular chromosome in the cytoplasm",
   "Endospores that resist heat and drying"
  ],
  "answer": 1,
  "why": "Fungi and humans are eukaryotes with a nucleus and organelles. A peptidoglycan wall, a circular chromosome, and endospores belong to bacteria."
 },
 {
  "id": "MYC-002",
  "m": "m1",
  "area": "Fungal cell structure",
  "level": "application",
  "stem": "A researcher measures sterols in three cell types. Which result fits a fungal cell?",
  "options": [
   "Cholesterol present and ergosterol absent",
   "Both sterols absent",
   "Both sterols present in equal amounts",
   "Ergosterol present and cholesterol absent"
  ],
  "answer": 3,
  "why": "Fungal membranes use ergosterol. Cholesterol is the human sterol, and bacterial membranes have no sterols, so only the first result fits a fungus."
 },
 {
  "id": "MYC-003",
  "m": "m1",
  "area": "Fungal cell structure",
  "level": "concept",
  "stem": "A new compound blocks assembly of a wall polymer found in fungi but absent from human cells. Which polymer could it target?",
  "options": [
   "β-glucan",
   "Cholesterol",
   "Actin",
   "Glycogen"
  ],
  "answer": 0,
  "why": "β-glucan is a fungal wall polymer made by β-glucan synthase. Cholesterol is a human membrane lipid, actin is a cytoskeleton protein, and glycogen is an energy store found in both."
 },
 {
  "id": "MYC-004",
  "m": "m1",
  "area": "Fungal cell structure",
  "level": "integration",
  "stem": "A drug that binds a fungal membrane sterol spares the patient’s own cells. Which difference explains this selectivity?",
  "options": [
   "Human cells have a thicker cell wall than fungi",
   "Human cells lack a nucleus",
   "Human membranes contain cholesterol rather than ergosterol",
   "Human cells make no lipids for their membranes"
  ],
  "answer": 2,
  "why": "The drug finds its binding partner mainly in fungal membranes. Human cells have no wall problem, do have a nucleus, and do make membrane lipids."
 },
 {
  "id": "MYC-005",
  "m": "m1",
  "area": "Fungal morphology and dimorphism",
  "level": "concept",
  "stem": "Which growth form is characteristic of Candida and Cryptococcus?",
  "options": [
   "Branching hyphae with septa",
   "Budding yeast",
   "Spherules with endospores",
   "Barrel-shaped arthrospores"
  ],
  "answer": 1,
  "why": "Candida and Cryptococcus are yeasts that reproduce by budding. Branching hyphae mark molds, and spherules and arthrospores are features of Coccidioides."
 },
 {
  "id": "MYC-006",
  "m": "m1",
  "area": "Fungal morphology and dimorphism",
  "level": "application",
  "stem": "A lab grows a fungus from a lung biopsy at 25 °C and sees hyphae with small microconidia. The tissue stain showed small yeasts inside macrophages. Which organism fits both findings?",
  "options": [
   "Aspergillus",
   "Candida",
   "Mucor",
   "Histoplasma"
  ],
  "answer": 3,
  "why": "Histoplasma is a mold with microconidia in culture at room temperature and a yeast inside macrophages in tissue. Aspergillus and Mucor are molds in tissue, and Candida does not change form with temperature."
 },
 {
  "id": "MYC-007",
  "m": "m1",
  "area": "Fungal morphology and dimorphism",
  "level": "concept",
  "stem": "Which pair correctly names the room-temperature form and the 37 °C tissue form of Coccidioides?",
  "options": [
   "Hyphae with arthrospores, then spherules",
   "Budding yeast, then hyphae",
   "Spherules, then arthrospores",
   "Pseudohyphae, then budding yeast"
  ],
  "answer": 0,
  "why": "Coccidioides is a mold with arthrospores in soil, and a spherule with endospores in tissue. The other pairs reverse the forms or name other organisms."
 },
 {
  "id": "MYC-008",
  "m": "m1",
  "area": "Fungal morphology and dimorphism",
  "level": "integration",
  "stem": "A pharmacist reads a report: \"septate hyphae with conidia in radiating chains from a lung sample.\" Which statement about this organism is supported?",
  "options": [
   "It is a yeast that buds in tissue",
   "It forms spherules at 37 °C",
   "It is a mold and is not thermally dimorphic",
   "It has a polysaccharide capsule"
  ],
  "answer": 2,
  "why": "Hyphae with radiating conidia describe Aspergillus, a mold that stays a mold at body temperature. Budding, spherules, and a capsule describe other fungi."
 },
 {
  "id": "MYC-009",
  "m": "m1",
  "area": "Host defects and fungal risk",
  "level": "concept",
  "stem": "Which fungal group is typical of a patient who has lost T-cell function?",
  "options": [
   "Mucor, Rhizopus, and Sporothrix",
   "Cryptococcus, mucosal Candida, and Pneumocystis",
   "Trichophyton, Microsporum, and Epidermophyton",
   "Aspergillus fumigatus and Aspergillus flavus"
  ],
  "answer": 1,
  "why": "Cell-mediated immunity controls these organisms. Mucor is linked to ketoacidosis, dermatophytes to skin, and Aspergillus to neutropenia and steroids."
 },
 {
  "id": "MYC-010",
  "m": "m1",
  "area": "Host defects and fungal risk",
  "level": "application",
  "stem": "A patient has had a central venous catheter for three weeks and has received broad-spectrum antibiotics. Which organism is the leading concern for a new fever?",
  "options": [
   "Cryptococcus",
   "Coccidioides",
   "Trichophyton",
   "Candida"
  ],
  "answer": 3,
  "why": "The catheter breaks the skin barrier, and antibiotics remove competing flora, so normal-flora Candida can reach the blood."
 },
 {
  "id": "MYC-011",
  "m": "m1",
  "area": "Host defects and fungal risk",
  "level": "concept",
  "stem": "Which portal of entry is typical of Aspergillus, Histoplasma, and Cryptococcus?",
  "options": [
   "Inhalation of spores or yeasts",
   "A bite from an arthropod",
   "Swallowing contaminated water",
   "Injection with a contaminated needle"
  ],
  "answer": 0,
  "why": "These fungi enter through the lungs, which is why pulmonary disease is the first site for many mycoses. Candida is the exception because it already lives on the body."
 },
 {
  "id": "MYC-012",
  "m": "m1",
  "area": "Host defects and fungal risk",
  "level": "integration",
  "stem": "A patient has leukemia and an absolute neutrophil count near zero. A chest CT shows a new lung nodule. Which mechanism best explains the risk?",
  "options": [
   "Granuloma formation is excessive",
   "Fungal endotoxin triggers shock",
   "Neutrophils that normally kill hyphae are absent",
   "Cholesterol in host membranes binds the fungus"
  ],
  "answer": 2,
  "why": "Hyphae are killed mainly by neutrophils, so neutropenia lets Aspergillus grow and invade. Fungi make no endotoxin, and cholesterol is not involved."
 },
 {
  "id": "MYC-013",
  "m": "m1",
  "area": "Laboratory diagnosis and fungal harm",
  "level": "concept",
  "stem": "Which test is used to look for IgM and IgG in suspected coccidioidomycosis?",
  "options": [
   "India ink preparation",
   "Serology",
   "KOH preparation",
   "MALDI-TOF"
  ],
  "answer": 1,
  "why": "Antibody testing is the lecture example for Coccidioides. India ink and KOH are microscopy methods, and MALDI-TOF identifies an organism from a culture."
 },
 {
  "id": "MYC-014",
  "m": "m1",
  "area": "Laboratory diagnosis and fungal harm",
  "level": "application",
  "stem": "A child has a scaly, itchy, ring-shaped patch. Which rapid laboratory test confirms a dermatophyte?",
  "options": [
   "India ink of the scraping",
   "A urine antigen test",
   "A blood culture",
   "KOH preparation of a skin scraping"
  ],
  "answer": 3,
  "why": "KOH clears the scraping so septate hyphae can be seen. India ink is for the Cryptococcus capsule, and urine antigen is for Histoplasma."
 },
 {
  "id": "MYC-015",
  "m": "m1",
  "area": "Laboratory diagnosis and fungal harm",
  "level": "concept",
  "stem": "Which type of harm results from eating grain contaminated with Claviceps?",
  "options": [
   "Mycotoxicosis",
   "Mycosis",
   "Fungal allergy",
   "Candidemia"
  ],
  "answer": 0,
  "why": "Ergot alkaloids are fungal toxins, so eating contaminated grain causes poisoning, not infection."
 },
 {
  "id": "MYC-016",
  "m": "m1",
  "area": "Laboratory diagnosis and fungal harm",
  "level": "integration",
  "stem": "A patient with asthma has wheezing and eosinophilia after inhaling Aspergillus spores, and the lung tissue stays free of fungus. What is the best classification?",
  "options": [
   "Mycosis",
   "Mycotoxicosis",
   "Allergy",
   "Superficial infection"
  ],
  "answer": 2,
  "why": "The immune response to inhaled antigens causes the disease, so this is allergic bronchopulmonary aspergillosis rather than infection or poisoning."
 },
 {
  "id": "MYC-017",
  "m": "m2",
  "area": "Cell wall inhibitors (echinocandins)",
  "level": "concept",
  "stem": "Which fungal structure is weakened when an echinocandin blocks its target enzyme?",
  "options": [
   "The ergosterol in the membrane",
   "The β-glucan layer of the cell wall",
   "The mitotic spindle",
   "The thymidine pathway"
  ],
  "answer": 1,
  "why": "Echinocandins inhibit β-glucan synthase, so the wall loses a main structural polymer."
 },
 {
  "id": "MYC-018",
  "m": "m2",
  "area": "Cell wall inhibitors (echinocandins)",
  "level": "application",
  "stem": "A student proposes treating Candida with a penicillin, because penicillin damages bacteria. What is the best response?",
  "options": [
   "Penicillin works on cells that have no wall",
   "Penicillin cannot enter any eukaryotic cell",
   "Fungal walls are too thick for any drug to cross",
   "Fungal walls contain chitin and β-glucan rather than peptidoglycan"
  ],
  "answer": 3,
  "why": "A penicillin blocks peptidoglycan cross-linking, and fungi make no peptidoglycan, so the drug has no target. Antibacterial drugs are ineffective against fungal infections."
 },
 {
  "id": "MYC-019",
  "m": "m2",
  "area": "Cell wall inhibitors (echinocandins)",
  "level": "concept",
  "stem": "Which drug is an echinocandin?",
  "options": [
   "Micafungin",
   "Terbinafine",
   "Flucytosine",
   "Griseofulvin"
  ],
  "answer": 0,
  "why": "Micafungin, caspofungin, and anidulafungin are the echinocandins. The other drugs belong to other classes."
 },
 {
  "id": "MYC-020",
  "m": "m2",
  "area": "Cell wall inhibitors (echinocandins)",
  "level": "integration",
  "stem": "A patient takes several CYP-metabolized drugs and needs an IV antifungal for candidemia. Which property of the echinocandins best suits this patient?",
  "options": [
   "Absorption after oral dosing",
   "Penetration into nail keratin",
   "Few CYP-mediated drug interactions",
   "Binding to ergosterol in the membrane"
  ],
  "answer": 2,
  "why": "Echinocandins neither inhibit CYP nor depend on it, so interactions are few. They are IV only and act on the wall, not on ergosterol."
 },
 {
  "id": "MYC-021",
  "m": "m2",
  "area": "Polyenes (amphotericin B)",
  "level": "concept",
  "stem": "Which polyene is given intravenously for systemic infections?",
  "options": [
   "Nystatin",
   "Amphotericin B",
   "Natamycin",
   "Terbinafine"
  ],
  "answer": 1,
  "why": "Amphotericin B is the only polyene given IV. Nystatin and natamycin are too toxic for IV use, and terbinafine is an allylamine."
 },
 {
  "id": "MYC-022",
  "m": "m2",
  "area": "Polyenes (amphotericin B)",
  "level": "application",
  "stem": "A patient has a fungal infection of the eye. Which polyene is used for this site?",
  "options": [
   "Amphotericin B by IV infusion",
   "Oral nystatin",
   "Flucytosine by mouth",
   "Natamycin"
  ],
  "answer": 3,
  "why": "Natamycin is used for fungal infections of the eye. Amphotericin B is for systemic use, and oral nystatin is not absorbed."
 },
 {
  "id": "MYC-023",
  "m": "m2",
  "area": "Polyenes (amphotericin B)",
  "level": "concept",
  "stem": "Why does oral nystatin cause little systemic toxicity?",
  "options": [
   "It is not absorbed from the gastrointestinal tract",
   "It is inactivated by stomach acid",
   "It is cleared rapidly by the liver",
   "It binds to bacteria in the gut"
  ],
  "answer": 0,
  "why": "Oral preparations stay in the gut lumen and mouth, so they carry no systemic risk."
 },
 {
  "id": "MYC-024",
  "m": "m2",
  "area": "Polyenes (amphotericin B)",
  "level": "integration",
  "stem": "A patient needs amphotericin B for cryptococcal meningitis but has reduced kidney function. Which change best lowers the risk of renal toxicity?",
  "options": [
   "Switch to an echinocandin",
   "Switch to oral nystatin",
   "Use the liposomal formulation",
   "Add terbinafine"
  ],
  "answer": 2,
  "why": "The liposomal preparation limits renal toxicity. Echinocandins are inactive against Cryptococcus, and oral nystatin is not absorbed."
 },
 {
  "id": "MYC-025",
  "m": "m2",
  "area": "Ergosterol synthesis inhibitors (azoles, allylamines)",
  "level": "concept",
  "stem": "What does the nitrogen atom of an azole bind in its target enzyme?",
  "options": [
   "The 14α-methyl group of lanosterol",
   "The iron atom of the heme",
   "Squalene itself",
   "Ergosterol in the membrane"
  ],
  "answer": 1,
  "why": "The nitrogen heterocycle binds the iron at the center of the heme in CYP51, which blocks the enzyme."
 },
 {
  "id": "MYC-026",
  "m": "m2",
  "area": "Ergosterol synthesis inhibitors (azoles, allylamines)",
  "level": "application",
  "stem": "A fungal cell treated with a drug accumulates a toxic early intermediate of the sterol pathway. Which enzyme is inhibited?",
  "options": [
   "14α-Demethylase",
   "β-Glucan synthase",
   "Cytosine deaminase",
   "Squalene epoxidase"
  ],
  "answer": 3,
  "why": "Blocking squalene epoxidase stops the first committed step, so squalene builds up. An azole would instead lead to lanosterol buildup."
 },
 {
  "id": "MYC-027",
  "m": "m2",
  "area": "Ergosterol synthesis inhibitors (azoles, allylamines)",
  "level": "concept",
  "stem": "Which azole class is preferred for oral therapy because of better oral bioavailability?",
  "options": [
   "Triazoles",
   "Imidazoles",
   "Allylamines",
   "Polyenes"
  ],
  "answer": 0,
  "why": "Fluconazole and itraconazole are triazoles. Imidazoles are used mostly on the skin."
 },
 {
  "id": "MYC-028",
  "m": "m2",
  "area": "Ergosterol synthesis inhibitors (azoles, allylamines)",
  "level": "integration",
  "stem": "A patient with cryptococcal meningitis has finished induction therapy and needs an oral drug that reaches the brain. Which property makes fluconazole suitable?",
  "options": [
   "It inhibits β-glucan synthase",
   "It is not metabolized by any CYP enzyme",
   "It crosses the blood-brain barrier",
   "It is applied to the skin"
  ],
  "answer": 2,
  "why": "Fluconazole is a triazole that penetrates the blood-brain barrier, which makes it useful for CNS infections. It blocks CYP51, not β-glucan synthase."
 },
 {
  "id": "MYC-029",
  "m": "m2",
  "area": "Flucytosine, griseofulvin, and drug matching",
  "level": "concept",
  "stem": "What limits the use of flucytosine as a single agent?",
  "options": [
   "It is not absorbed after oral dosing",
   "Resistance develops quickly",
   "It has no activity against yeasts",
   "It binds cholesterol in human cells"
  ],
  "answer": 1,
  "why": "Resistance develops quickly during flucytosine monotherapy, so it is given with amphotericin B."
 },
 {
  "id": "MYC-030",
  "m": "m2",
  "area": "Flucytosine, griseofulvin, and drug matching",
  "level": "application",
  "stem": "A patient has a cutaneous fungal infection that persists despite topical agents. Which oral drug binds tubulin?",
  "options": [
   "Flucytosine",
   "Nystatin",
   "Micafungin",
   "Griseofulvin"
  ],
  "answer": 3,
  "why": "Griseofulvin blocks the mitotic spindle and is reserved for cases where topical treatments are ineffective."
 },
 {
  "id": "MYC-031",
  "m": "m2",
  "area": "Flucytosine, griseofulvin, and drug matching",
  "level": "concept",
  "stem": "Which adverse reaction is the main concern with flucytosine?",
  "options": [
   "Bone marrow toxicity",
   "Nephrotoxicity",
   "Taste and smell disturbance",
   "Adrenal insufficiency"
  ],
  "answer": 0,
  "why": "Flucytosine is converted to fluorouracil, and bone marrow suppression is its important toxicity. Kidney toxicity is linked to amphotericin B."
 },
 {
  "id": "MYC-032",
  "m": "m2",
  "area": "Flucytosine, griseofulvin, and drug matching",
  "level": "integration",
  "stem": "A patient has a fungal toenail infection that persists despite creams. Which oral drug is lipophilic enough to distribute into nails?",
  "options": [
   "Caspofungin",
   "Amphotericin B",
   "Terbinafine",
   "Flucytosine"
  ],
  "answer": 2,
  "why": "Terbinafine is highly lipophilic and reaches hair, skin, nails, and fat. Caspofungin and amphotericin B are IV drugs, and flucytosine is used for systemic infection."
 },
 {
  "id": "MYC-033",
  "m": "m3",
  "area": "Classifying mycoses by depth and host",
  "level": "concept",
  "stem": "Which category of mycosis typically follows inhalation of spores?",
  "options": [
   "Cutaneous",
   "Systemic",
   "Subcutaneous",
   "Dermatophytic"
  ],
  "answer": 1,
  "why": "Spores from dimorphic fungi in soil are inhaled and cause systemic mycoses."
 },
 {
  "id": "MYC-034",
  "m": "m3",
  "area": "Classifying mycoses by depth and host",
  "level": "application",
  "stem": "A gardener develops nodules after a rose thorn puncture. Which category fits this infection?",
  "options": [
   "Cutaneous",
   "Systemic",
   "Opportunistic",
   "Subcutaneous"
  ],
  "answer": 3,
  "why": "A puncture introduces the fungus into deeper tissue, which defines a subcutaneous mycosis."
 },
 {
  "id": "MYC-035",
  "m": "m3",
  "area": "Classifying mycoses by depth and host",
  "level": "concept",
  "stem": "Which structures are the sites of cutaneous mycoses?",
  "options": [
   "Skin, hair, and nails",
   "Lungs and meninges",
   "Muscle and bone",
   "Blood and heart valves"
  ],
  "answer": 0,
  "why": "Cutaneous infections are limited to superficial keratinized structures."
 },
 {
  "id": "MYC-036",
  "m": "m3",
  "area": "Classifying mycoses by depth and host",
  "level": "integration",
  "stem": "A patient with advanced HIV has a Candida infection of the esophagus. Which feature explains why this is called an opportunistic mycosis?",
  "options": [
   "The fungus entered through a puncture wound",
   "The fungus lives in keratin",
   "The host has weakened cell-mediated immunity",
   "The spores were inhaled from desert soil"
  ],
  "answer": 2,
  "why": "Opportunistic describes weakly pathogenic fungi that cause disease when immunity is impaired."
 },
 {
  "id": "MYC-037",
  "m": "m3",
  "area": "Dermatophytes and tinea",
  "level": "concept",
  "stem": "Which three genera are the medically important dermatophytes?",
  "options": [
   "Candida, Cryptococcus, and Aspergillus",
   "Trichophyton, Epidermophyton, and Microsporum",
   "Histoplasma, Blastomyces, and Coccidioides",
   "Sporothrix, Malassezia, and Mucor"
  ],
  "answer": 1,
  "why": "Dermatophytes belong to these three genera. The other sets include yeasts, molds, and endemic fungi."
 },
 {
  "id": "MYC-038",
  "m": "m3",
  "area": "Dermatophytes and tinea",
  "level": "application",
  "stem": "A veterinarian develops a ring-shaped lesion on the forearm after handling infected cats. Which genus is a likely source?",
  "options": [
   "Sporothrix",
   "Coccidioides",
   "Cryptococcus",
   "Microsporum"
  ],
  "answer": 3,
  "why": "Microsporum can be spread from animals to people."
 },
 {
  "id": "MYC-039",
  "m": "m3",
  "area": "Dermatophytes and tinea",
  "level": "concept",
  "stem": "On which agar are dermatophytes cultured?",
  "options": [
   "Sabouraud agar",
   "Blood agar",
   "MacConkey agar",
   "Chocolate agar"
  ],
  "answer": 0,
  "why": "Sabouraud agar is the standard fungal culture medium for dermatophytes."
 },
 {
  "id": "MYC-040",
  "m": "m3",
  "area": "Dermatophytes and tinea",
  "level": "integration",
  "stem": "A patient has thick, brittle fingernails that have failed topical treatment. Which plan matches the lecture?",
  "options": [
   "Add a stronger topical cream",
   "Begin IV amphotericin B",
   "Start an oral drug such as terbinafine",
   "Start an echinocandin"
  ],
  "answer": 2,
  "why": "Nail infections need oral therapy because topical drugs do not penetrate deeply. IV drugs are for systemic disease."
 },
 {
  "id": "MYC-041",
  "m": "m3",
  "area": "Sporotrichosis and subcutaneous infection",
  "level": "concept",
  "stem": "In which form does Sporothrix live in human tissue?",
  "options": [
   "Mold with sporangia",
   "Yeast",
   "Spherule with endospores",
   "Pseudohyphae with a capsule"
  ],
  "answer": 1,
  "why": "Sporothrix is dimorphic: mold on plants, yeast in human tissue."
 },
 {
  "id": "MYC-042",
  "m": "m3",
  "area": "Sporotrichosis and subcutaneous infection",
  "level": "application",
  "stem": "A culture grown at 20 °C shows hyphae with daisy-like conidia. Which organism is likely?",
  "options": [
   "Cryptococcus neoformans",
   "Candida albicans",
   "Trichophyton rubrum",
   "Sporothrix schenckii"
  ],
  "answer": 3,
  "why": "Daisy-like conidia at 20 °C identify the mold form of Sporothrix."
 },
 {
  "id": "MYC-043",
  "m": "m3",
  "area": "Sporotrichosis and subcutaneous infection",
  "level": "concept",
  "stem": "Which drug pair treats sporotrichosis?",
  "options": [
   "Itraconazole or terbinafine",
   "Amphotericin B or flucytosine",
   "Caspofungin or micafungin",
   "Nystatin or natamycin"
  ],
  "answer": 0,
  "why": "Itraconazole or terbinafine is the lecture treatment for Sporothrix."
 },
 {
  "id": "MYC-044",
  "m": "m3",
  "area": "Sporotrichosis and subcutaneous infection",
  "level": "integration",
  "stem": "A healthy patient has a painless pustule on a hand and nodules up the arm after pruning roses. Why is little systemic illness expected?",
  "options": [
   "The fungus is inactivated by skin oils",
   "The fungus lives in keratin",
   "The infection stays in subcutaneous tissue in a host with intact immunity",
   "The yeast is encapsulated and resists the immune system"
  ],
  "answer": 2,
  "why": "In immunocompetent patients the lesions are painless with little systemic illness because the infection remains local."
 },
 {
  "id": "MYC-045",
  "m": "m4",
  "area": "Endemic fungi: forms, places, and clues",
  "level": "concept",
  "stem": "What is the infective form of Coccidioides in soil?",
  "options": [
   "Spherules",
   "Arthrospores",
   "Endospores",
   "Microconidia"
  ],
  "answer": 1,
  "why": "Arthrospores form at the ends of hyphae in soil and are inhaled. Spherules form only inside the host."
 },
 {
  "id": "MYC-046",
  "m": "m4",
  "area": "Endemic fungi: forms, places, and clues",
  "level": "application",
  "stem": "A patient from Brazil has ulcerated lesions of the face and mouth. Microscopy shows yeast with multiple buds. Which organism is likely?",
  "options": [
   "Blastomyces",
   "Histoplasma",
   "Coccidioides",
   "Paracoccidioides"
  ],
  "answer": 3,
  "why": "Multiple buds and Latin American origin point to Paracoccidioides."
 },
 {
  "id": "MYC-047",
  "m": "m4",
  "area": "Endemic fungi: forms, places, and clues",
  "level": "concept",
  "stem": "What portal of entry do the endemic dimorphic fungi share?",
  "options": [
   "Inhalation",
   "Puncture wounds",
   "Catheter placement",
   "Contact with animals"
  ],
  "answer": 0,
  "why": "Spores from soil are inhaled and cause primary lung infection."
 },
 {
  "id": "MYC-048",
  "m": "m4",
  "area": "Endemic fungi: forms, places, and clues",
  "level": "integration",
  "stem": "A patient from the Northeast, with a travel history limited to that region, has a lung infection caused by a dimorphic fungus. Which statement best explains this?",
  "options": [
   "Dimorphic fungi pass from one person to another through coughing",
   "The fungus changed into a bacterium inside the lung",
   "Historical ranges are expanding, so these fungi appear outside old areas",
   "The fungus was acquired through a contaminated catheter"
  ],
  "answer": 2,
  "why": "The lecture notes that the dimorphic fungi are now seen outside their historical areas."
 },
 {
  "id": "MYC-049",
  "m": "m4",
  "area": "Coccidioides life cycle and dissemination",
  "level": "concept",
  "stem": "Which form is released when a spherule ruptures?",
  "options": [
   "Arthrospores",
   "Endospores",
   "Microconidia",
   "Pseudohyphae"
  ],
  "answer": 1,
  "why": "Endospores are released and form new spherules."
 },
 {
  "id": "MYC-050",
  "m": "m4",
  "area": "Coccidioides life cycle and dissemination",
  "level": "application",
  "stem": "A patient on long-term immunosuppression develops lesions in bone and skin after a Coccidioides lung infection. Which factor explains the spread?",
  "options": [
   "An excess of neutrophils",
   "A bacterial co-infection",
   "Exposure to a second soil fungus",
   "Inadequate cell-mediated immunity"
  ],
  "answer": 3,
  "why": "Dissemination occurs when cell-mediated immunity is inadequate to wall off the fungus."
 },
 {
  "id": "MYC-051",
  "m": "m4",
  "area": "Coccidioides life cycle and dissemination",
  "level": "concept",
  "stem": "What is a granuloma?",
  "options": [
   "A collection of activated macrophages and lymphocytes",
   "A pocket of pus in the lung tissue",
   "A fungal ball growing in a lung cavity",
   "A layer of polysaccharide capsule around yeast"
  ],
  "answer": 0,
  "why": "Granulomas are cell collections that wall off an organism. They are not pus."
 },
 {
  "id": "MYC-052",
  "m": "m4",
  "area": "Coccidioides life cycle and dissemination",
  "level": "integration",
  "stem": "Which sequence correctly orders the early life cycle?",
  "options": [
   "Spherule forms, arthrospore inhaled, endospores develop",
   "Endospores develop, spherule forms, arthrospore inhaled",
   "Arthrospore inhaled, spherule forms, endospores develop",
   "Endospores released, arthrospore forms, spherule inhaled"
  ],
  "answer": 2,
  "why": "Inhaled arthrospores become spherules, and spherules fill with endospores."
 },
 {
  "id": "MYC-053",
  "m": "m4",
  "area": "Treating endemic mycoses",
  "level": "concept",
  "stem": "Which drug is the first choice for mild to moderate blastomycosis?",
  "options": [
   "Caspofungin",
   "Itraconazole",
   "Terbinafine",
   "Nystatin"
  ],
  "answer": 1,
  "why": "Itraconazole is the usual first choice, with amphotericin B for severe disease."
 },
 {
  "id": "MYC-054",
  "m": "m4",
  "area": "Treating endemic mycoses",
  "level": "application",
  "stem": "A patient has severe, life-threatening histoplasmosis. Which drug does the lecture reserve for this situation?",
  "options": [
   "Griseofulvin",
   "Terbinafine",
   "Fluconazole by mouth",
   "Amphotericin B"
  ],
  "answer": 3,
  "why": "Amphotericin B is used when endemic mycoses are severe."
 },
 {
  "id": "MYC-055",
  "m": "m4",
  "area": "Treating endemic mycoses",
  "level": "concept",
  "stem": "Which preventive measure is available for coccidioidomycosis?",
  "options": [
   "Avoiding travel to endemic areas",
   "A routine vaccine",
   "Daily fluconazole for every traveler",
   "Wearing sunscreen"
  ],
  "answer": 0,
  "why": "There is no vaccine, so prevention depends on avoiding exposure in endemic areas."
 },
 {
  "id": "MYC-056",
  "m": "m4",
  "area": "Treating endemic mycoses",
  "level": "integration",
  "stem": "A patient with Valley fever who is otherwise well has mild symptoms. Which approach fits the lecture?",
  "options": [
   "Begin IV amphotericin B at once to prevent spread",
   "Start an echinocandin infusion in the hospital",
   "Treatment may be unnecessary, with closer follow-up for higher-risk patients",
   "Give oral griseofulvin for several months"
  ],
  "answer": 2,
  "why": "Mild primary infection often needs no treatment, while immunosuppressed or severely ill patients are treated."
 },
 {
  "id": "MYC-057",
  "m": "m5",
  "area": "Candida: commensal to invader",
  "level": "concept",
  "stem": "Where is Candida albicans found in a healthy person?",
  "options": [
   "In soil",
   "In the normal flora of the body",
   "In bird droppings",
   "Inside macrophages"
  ],
  "answer": 1,
  "why": "Candida is a member of the normal flora, and defenses keep it in check."
 },
 {
  "id": "MYC-058",
  "m": "m5",
  "area": "Candida: commensal to invader",
  "level": "application",
  "stem": "A patient on a long course of broad-spectrum antibiotics develops white plaques on the tongue. What best explains this?",
  "options": [
   "The antibiotic is infected with Candida",
   "The patient inhaled spores from soil",
   "A thorn introduced the yeast",
   "Loss of competing flora allowed Candida to overgrow"
  ],
  "answer": 3,
  "why": "Antibiotics remove competing bacteria, and Candida then overgrows on the mucosa as thrush."
 },
 {
  "id": "MYC-059",
  "m": "m5",
  "area": "Candida: commensal to invader",
  "level": "concept",
  "stem": "Which feature allows Candida to persist on a central line?",
  "options": [
   "Biofilm formation",
   "Spherule formation",
   "Capsule formation",
   "Sporangium formation"
  ],
  "answer": 0,
  "why": "Biofilm on the catheter surface is how Candida persists on devices."
 },
 {
  "id": "MYC-060",
  "m": "m5",
  "area": "Candida: commensal to invader",
  "level": "integration",
  "stem": "Which person is at highest risk for Candida bloodstream infection?",
  "options": [
   "A patient with healthy skin and no devices",
   "A patient with a mild toenail infection",
   "A patient with a central line and neutropenia",
   "A gardener with a pricked finger on one hand"
  ],
  "answer": 2,
  "why": "A catheter, lost flora, and weak defenses combine to raise the risk of invasion."
 },
 {
  "id": "MYC-061",
  "m": "m5",
  "area": "Candida infection sites and therapy",
  "level": "concept",
  "stem": "Which topical drugs treat Candida skin infections?",
  "options": [
   "Caspofungin or micafungin",
   "Clotrimazole or nystatin",
   "Flucytosine or griseofulvin",
   "Voriconazole or posaconazole"
  ],
  "answer": 1,
  "why": "Skin infections are treated with topical clotrimazole or nystatin."
 },
 {
  "id": "MYC-062",
  "m": "m5",
  "area": "Candida infection sites and therapy",
  "level": "application",
  "stem": "A patient has moderate to severe thrush. Which step fits the lecture?",
  "options": [
   "Switch to IV amphotericin B",
   "Start an echinocandin infusion",
   "Use griseofulvin",
   "Add oral fluconazole"
  ],
  "answer": 3,
  "why": "Fluconazole is used when thrush is moderate to severe, with voriconazole kept for refractory disease."
 },
 {
  "id": "MYC-063",
  "m": "m5",
  "area": "Candida infection sites and therapy",
  "level": "concept",
  "stem": "Which patients receive fluconazole prophylaxis for Candida?",
  "options": [
   "Infants under 1,000 g in high-risk nurseries",
   "Healthy adults who travel abroad",
   "Gardeners who handle roses",
   "Each patient with thrush"
  ],
  "answer": 0,
  "why": "The lecture limits prophylaxis to high-risk infants in nurseries with a high rate of invasive candidiasis."
 },
 {
  "id": "MYC-064",
  "m": "m5",
  "area": "Candida infection sites and therapy",
  "level": "integration",
  "stem": "A patient with Candida in the blood also has a central line. Which plan is correct?",
  "options": [
   "Topical clotrimazole to the insertion site",
   "Oral griseofulvin",
   "An echinocandin and removal or replacement of the line",
   "Oral fluconazole alone, leaving the line"
  ],
  "answer": 2,
  "why": "Candidemia needs an echinocandin first, plus catheter removal or replacement."
 },
 {
  "id": "MYC-065",
  "m": "m5",
  "area": "Non-albicans Candida and candidemia",
  "level": "concept",
  "stem": "Which species has reduced susceptibility to fluconazole, which leads clinicians to prefer an echinocandin?",
  "options": [
   "Candida albicans",
   "Candida glabrata",
   "Candida parapsilosis",
   "Candida dubliniensis"
  ],
  "answer": 1,
  "why": "C. glabrata has reduced fluconazole susceptibility."
 },
 {
  "id": "MYC-066",
  "m": "m5",
  "area": "Non-albicans Candida and candidemia",
  "level": "application",
  "stem": "A hospital reports spread of a multidrug-resistant yeast between ICU patients. Which drug class is the first-line choice?",
  "options": [
   "Fluconazole",
   "Griseofulvin",
   "Topical clotrimazole",
   "An echinocandin"
  ],
  "answer": 3,
  "why": "For C. auris, an echinocandin is first-line (CDC)."
 },
 {
  "id": "MYC-067",
  "m": "m5",
  "area": "Non-albicans Candida and candidemia",
  "level": "concept",
  "stem": "Which species is linked to catheters and skin colonization?",
  "options": [
   "Candida parapsilosis",
   "Candida krusei",
   "Candida auris",
   "Candida glabrata"
  ],
  "answer": 0,
  "why": "C. parapsilosis is linked to catheters and skin colonization."
 },
 {
  "id": "MYC-068",
  "m": "m5",
  "area": "Non-albicans Candida and candidemia",
  "level": "integration",
  "stem": "A stable ICU patient with candidemia has been on caspofungin for five days. The isolate is C. albicans and is susceptible to the azole that was tested. What is a reasonable change?",
  "options": [
   "Switch to terbinafine",
   "Add flucytosine",
   "Step down to oral fluconazole",
   "Stop treatment"
  ],
  "answer": 2,
  "why": "Step-down is appropriate for a stable patient with a susceptible isolate."
 },
 {
  "id": "MYC-069",
  "m": "m6",
  "area": "Cryptococcus and the central nervous system",
  "level": "concept",
  "stem": "Which virulence factor of Cryptococcus resists phagocytosis?",
  "options": [
   "The chitin wall",
   "The polysaccharide capsule",
   "The spherule",
   "The sporangium"
  ],
  "answer": 1,
  "why": "The polysaccharide capsule resists phagocytosis and appears as a halo on India ink."
 },
 {
  "id": "MYC-070",
  "m": "m6",
  "area": "Cryptococcus and the central nervous system",
  "level": "application",
  "stem": "A patient with advanced HIV has headache and fever. CSF India ink shows encapsulated yeast. Which drug pair starts therapy?",
  "options": [
   "Micafungin and terbinafine",
   "Griseofulvin and nystatin",
   "Fluconazole and clotrimazole",
   "Liposomal amphotericin B and flucytosine"
  ],
  "answer": 3,
  "why": "Induction uses liposomal amphotericin B plus flucytosine. Fluconazole follows for consolidation."
 },
 {
  "id": "MYC-071",
  "m": "m6",
  "area": "Cryptococcus and the central nervous system",
  "level": "concept",
  "stem": "What does IRIS stand for?",
  "options": [
   "Immune reconstitution inflammatory syndrome",
   "Invasive respiratory infection syndrome",
   "Inhaled resistant isolate syndrome",
   "Immune receptor inhibition syndrome"
  ],
  "answer": 0,
  "why": "IRIS is the worsening inflammation that can follow ART as CD4 cells recover."
 },
 {
  "id": "MYC-072",
  "m": "m6",
  "area": "Cryptococcus and the central nervous system",
  "level": "integration",
  "stem": "A patient with cryptococcal meningitis has improved after two weeks of induction. Which step comes next?",
  "options": [
   "Stop the antifungals",
   "Start caspofungin",
   "Fluconazole for consolidation",
   "Apply topical nystatin"
  ],
  "answer": 2,
  "why": "Fluconazole follows induction as consolidation and long-term suppression, and ART begins about 4 to 6 weeks after antifungal therapy starts."
 },
 {
  "id": "MYC-073",
  "m": "m6",
  "area": "Aspergillus forms and treatment",
  "level": "concept",
  "stem": "What is the infective form of Aspergillus?",
  "options": [
   "Spherules",
   "Inhaled conidia",
   "Endospores",
   "Yeast with a capsule"
  ],
  "answer": 1,
  "why": "Aspergillus is acquired by inhaling conidia."
 },
 {
  "id": "MYC-074",
  "m": "m6",
  "area": "Aspergillus forms and treatment",
  "level": "application",
  "stem": "A neutropenic patient has new lung infiltrates and branching septate hyphae on biopsy. Which drug is first-line?",
  "options": [
   "Fluconazole",
   "Nystatin",
   "Griseofulvin",
   "Voriconazole"
  ],
  "answer": 3,
  "why": "Voriconazole is the lecture choice for invasive aspergillosis."
 },
 {
  "id": "MYC-075",
  "m": "m6",
  "area": "Aspergillus forms and treatment",
  "level": "concept",
  "stem": "Which three forms of aspergillosis does the lecture describe?",
  "options": [
   "Invasive disease, aspergilloma, and allergic disease",
   "Cutaneous, subcutaneous, and systemic",
   "Thrush, vaginitis, and esophagitis",
   "Meningitis, pneumonia, and sepsis"
  ],
  "answer": 0,
  "why": "The three forms are invasive, aspergilloma, and allergic (ABPA)."
 },
 {
  "id": "MYC-076",
  "m": "m6",
  "area": "Aspergillus forms and treatment",
  "level": "integration",
  "stem": "Which drug can be used for prophylaxis in a high-risk immunocompromised patient?",
  "options": [
   "Terbinafine",
   "Flucytosine",
   "Posaconazole",
   "Nystatin"
  ],
  "answer": 2,
  "why": "Posaconazole or voriconazole can be used prophylactically."
 },
 {
  "id": "MYC-077",
  "m": "m6",
  "area": "Matching host defects to fungi",
  "level": "concept",
  "stem": "Which fungi are associated with diabetic ketoacidosis?",
  "options": [
   "Sporothrix and Microsporum",
   "Mucor and Rhizopus",
   "Coccidioides and Histoplasma",
   "Cryptococcus and Candida"
  ],
  "answer": 1,
  "why": "Mucor and Rhizopus invade blood vessels in patients with ketoacidosis."
 },
 {
  "id": "MYC-078",
  "m": "m6",
  "area": "Matching host defects to fungi",
  "level": "application",
  "stem": "A neutropenic patient has a lung infection with septate hyphae. Which organism is likely?",
  "options": [
   "Mucor",
   "Cryptococcus",
   "Sporothrix",
   "Aspergillus"
  ],
  "answer": 3,
  "why": "Septate hyphae with neutropenia suggest Aspergillus."
 },
 {
  "id": "MYC-079",
  "m": "m6",
  "area": "Matching host defects to fungi",
  "level": "concept",
  "stem": "Which immune defect increases susceptibility to Cryptococcus?",
  "options": [
   "Compromised cell-mediated immunity",
   "Complement deficiency",
   "Excess neutrophils",
   "Elevated IgE"
  ],
  "answer": 0,
  "why": "Cryptococcus disease often occurs with compromised cell-mediated immunity."
 },
 {
  "id": "MYC-080",
  "m": "m6",
  "area": "Matching host defects to fungi",
  "level": "integration",
  "stem": "A patient with poorly controlled diabetes has a black necrotic lesion in the nose. Which treatment concern should the team raise?",
  "options": [
   "A dermatophyte on the skin",
   "A tinea of the groin",
   "Possible Mucor or Rhizopus infection",
   "Sporotrichosis from a thorn"
  ],
  "answer": 2,
  "why": "Ketoacidosis with necrotic lesions invading vessels is the Mucor and Rhizopus pattern."
 },
 {
  "id": "MYC-081",
  "m": "m6",
  "area": "Integrating host, organism, and therapy",
  "level": "integration",
  "stem": "A patient has a central line, broad-spectrum antibiotics, and yeast in the blood. Which combination links host, organism, and treatment?",
  "options": [
   "Low CD4 cells, Cryptococcus, an echinocandin",
   "Lost flora and a catheter, Candida, an echinocandin",
   "Neutropenia, Aspergillus, nystatin",
   "Ketoacidosis, Mucor, terbinafine"
  ],
  "answer": 1,
  "why": "The setup fits Candida, and an echinocandin is first-line for candidemia."
 },
 {
  "id": "MYC-082",
  "m": "m6",
  "area": "Integrating host, organism, and therapy",
  "level": "integration",
  "stem": "A patient with advanced HIV has encapsulated yeast in the CSF. Which combination links host, organism, and treatment?",
  "options": [
   "Neutropenia, Aspergillus, oral voriconazole",
   "Intact immunity, Sporothrix, itraconazole by mouth",
   "Lost flora and a catheter, Candida, micafungin",
   "Weak cellular immunity, Cryptococcus, amphotericin B with flucytosine"
  ],
  "answer": 3,
  "why": "Cryptococcus meningitis begins with liposomal amphotericin B plus flucytosine. An echinocandin is inactive."
 },
 {
  "id": "MYC-083",
  "m": "m6",
  "area": "Integrating host, organism, and therapy",
  "level": "integration",
  "stem": "A neutropenic patient has lung infiltrates and septate hyphae on biopsy. Which pairing is best?",
  "options": [
   "Aspergillus and voriconazole",
   "Cryptococcus and fluconazole",
   "Candida and nystatin",
   "Histoplasma and terbinafine"
  ],
  "answer": 0,
  "why": "Septate hyphae with neutropenia point to Aspergillus, and voriconazole is the lecture first-line drug."
 },
 {
  "id": "MYC-084",
  "m": "m6",
  "area": "Integrating host, organism, and therapy",
  "level": "integration",
  "stem": "Which finding explains why an echinocandin is a poor choice for cryptococcal meningitis?",
  "options": [
   "Echinocandins are metabolized by CYP51",
   "Echinocandins cannot be given by vein",
   "Echinocandins are inactive against Cryptococcus",
   "Echinocandins bind ergosterol"
  ],
  "answer": 2,
  "why": "The class inhibits β-glucan synthase and is inactive against Cryptococcus."
 },
 {
  "id": "MYC-085",
  "m": "m6",
  "area": "Integrating host, organism, and therapy",
  "level": "integration",
  "stem": "A clinician asks why ART is delayed after starting treatment for cryptococcal meningitis. Which answer links pathogenesis and treatment?",
  "options": [
   "ART kills the yeast too quickly for the host",
   "Rising CD4 cells can cause a deadly inflammatory response",
   "ART blocks absorption of fluconazole",
   "Cryptococcus requires CD4 cells to grow"
  ],
  "answer": 1,
  "why": "Delaying ART by about 4 to 6 weeks lowers the risk of IRIS."
 },
 {
  "id": "MYC-086",
  "m": "m6",
  "area": "Integrating host, organism, and therapy",
  "level": "integration",
  "stem": "Which pair of facts links a diagnostic result to a treatment choice?",
  "options": [
   "Septate hyphae point to Mucor, which responds to fluconazole",
   "A halo on India ink points to Candida, which responds to micafungin",
   "Cigar-shaped yeasts point to Cryptococcus, which responds to terbinafine",
   "Septate hyphae on biopsy point to Aspergillus, which responds to voriconazole"
  ],
  "answer": 3,
  "why": "Linking microscopy to organism to drug is the skill this consult trains."
 }
];
