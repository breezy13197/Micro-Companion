/* banks/bacteria2.js — pure content data (no dependency on shared/ or the DOM). */
var TOPIC_ID = 'bacteria2';
var TOPIC_TITLE = 'Antibacterial Mechanisms, Resistance & Prevention';

/* Checkpoint questions. The question STEM lives in bacteria2.html next to its data-check id;
   options / answer / rationale live here so the hub can read them. */
var CHECKPOINTS = {
  "c11a": {
    "options": [
      "Peptidoglycan cross-linking in the cell wall",
      "DNA polymerase activity during replication",
      "Phospholipids of the cytoplasmic membrane",
      "Glycolytic enzymes of central metabolism"
    ],
    "answer": 0,
    "why": "Human cells build no peptidoglycan wall, so a drug that blocks its assembly harms bacteria and spares the patient. Targets shared with human cells would injure the patient at similar drug concentrations."
  },
  "c11b": {
    "options": [
      "Blocking the transporter bacteria use to take up dietary folate",
      "Inhibiting an enzyme in bacterial folate synthesis",
      "Inhibiting folate-using enzymes shared by both cell types",
      "Blocking folate absorption from the patient's diet"
    ],
    "answer": 1,
    "why": "Because humans lack the folate-synthesis enzymes, a drug aimed at those enzymes reaches a target that only bacteria have."
  },
  "c11c": {
    "options": [
      "Drugs that fit bacterial subunits and spare human subunits",
      "Drugs that fit both subunit types equally well",
      "Drugs that fit human subunits inside infected cells",
      "Drugs that fit mitochondrial subunits and spare bacterial ones"
    ],
    "answer": 0,
    "why": "The two ribosomes carry out the same job but differ in structure, so a drug can be shaped to fit the bacterial subunits and leave the human ones alone."
  },
  "c12a": {
    "options": [
      "Bactericidal",
      "Broad-spectrum",
      "Narrow-spectrum",
      "Bacteriostatic"
    ],
    "answer": 3,
    "why": "A bacteriostatic drug halts growth but leaves the cells alive, so growth resumes once the drug is removed. A bactericidal drug lowers the viable count."
  },
  "c12b": {
    "options": [
      "It clears bacteria without relying on host phagocytosis",
      "It concentrates in heart tissue at high levels",
      "It acts against a single bacterial species",
      "It halts growth until the drug is stopped"
    ],
    "answer": 0,
    "why": "A bacteriostatic drug needs host defenses such as phagocytosis to finish the job. In a severe infection, a drug that kills bacteria directly gives the patient the greatest margin of safety."
  },
  "c12c": {
    "options": [
      "Broad-spectrum activity",
      "Narrow-spectrum activity",
      "Extended-spectrum activity",
      "Anti-anaerobic activity"
    ],
    "answer": 1,
    "why": "A drug that acts against one or very few types of microbes is narrow-spectrum. A broad-spectrum drug, such as a tetracycline, acts against several unrelated groups."
  },
  "c13a": {
    "options": [
      "Action",
      "Selective toxicity",
      "Target",
      "Resistance link"
    ],
    "answer": 2,
    "why": "Target asks which bacterial molecule or process is directly affected. Here that is the 30S subunit."
  },
  "c13b": {
    "options": [
      "Target",
      "Action",
      "Spectrum / context",
      "Resistance link"
    ],
    "answer": 3,
    "why": "Resistance link asks for the simplest escape route from the mechanism. Changing the binding site so the drug no longer fits is one such route."
  },
  "c21a": {
    "options": [
      "Precursor formation",
      "Lipid-carrier transport",
      "Glycan polymerization",
      "Peptide cross-linking"
    ],
    "answer": 0,
    "why": "Cycloserine blocks the formation of D-alanyl-D-alanine in the cytoplasm, so the building blocks are never made."
  },
  "c21b": {
    "options": [
      "Precursor formation",
      "Lipid-carrier transport",
      "Glycan polymerization",
      "Peptide cross-linking"
    ],
    "answer": 1,
    "why": "The lipid carrier moves peptidoglycan subunits across the inner membrane. If it cannot be recycled, the subunits stop reaching the wall."
  },
  "c21c": {
    "options": [
      "Cycloserine and bacitracin",
      "Bacitracin and vancomycin",
      "Vancomycin and β-lactams",
      "Cycloserine and β-lactams"
    ],
    "answer": 2,
    "why": "Vancomycin binds the substrate and β-lactams inhibit the PBP enzyme, so both stop the last step: cross-linking. Cycloserine acts earlier, in the cytoplasm, and bacitracin acts at the inner membrane."
  },
  "c22a": {
    "options": [
      "Transglycosylase linking of glycan strands",
      "Transpeptidase cross-linking of peptide side chains",
      "D-alanine racemization in the cytoplasm",
      "Dephosphorylation of the lipid carrier"
    ],
    "answer": 1,
    "why": "β-Lactams bind and inhibit the transpeptidase activity of PBPs, not their transglycosylase activity. Without cross-linking, the wall is weak."
  },
  "c22b": {
    "options": [
      "Active growth with new wall synthesis",
      "A resting state with no wall synthesis",
      "Survival as wall-deficient protoplasts",
      "Dormancy inside a foreign body"
    ],
    "answer": 0,
    "why": "β-Lactams are bactericidal, but they kill cells that are growing and building new wall. Resting cells and protoplasts are examples of nongenetic ways to escape."
  },
  "c22c": {
    "options": [
      "Providing its own antibacterial activity",
      "Protecting the antibiotic from enzymatic cleavage",
      "Increasing drug entry through porins",
      "Slowing kidney clearance of the antibiotic"
    ],
    "answer": 1,
    "why": "Clavulanate, tazobactam, and avibactam have little useful antibacterial activity alone (sulbactam is an exception against Acinetobacter). Their role is to occupy the β-lactamase so the partner β-lactam survives to reach its PBP target."
  },
  "c23a": {
    "options": [
      "Gram-negative bacteria lack D-alanyl-D-alanine precursors",
      "Gram-negative bacteria lack a peptidoglycan layer",
      "The Gram-negative outer membrane blocks large glycopeptides",
      "Gram-positive bacteria have a thinner peptidoglycan layer"
    ],
    "answer": 2,
    "why": "Vancomycin is a large glycopeptide. The outer membrane of Gram-negative bacteria is impermeable to it, so the drug never reaches its target."
  },
  "c23b": {
    "options": [
      "Activity restricted to Gram-positive cocci",
      "Poor absorption that limits use to topical therapy",
      "Dependence on host phagocytes to clear bacteria",
      "Poor bacterial selectivity that risks kidney and nerve toxicity"
    ],
    "answer": 3,
    "why": "A detergent-like action does not distinguish bacterial membranes well from human membranes. Polymyxins were largely set aside in the 1970s for nephrotoxicity and neurotoxicity."
  },
  "c31a": {
    "options": [
      "PABA",
      "Dihydrofolic acid",
      "Tetrahydrofolic acid",
      "D-alanine"
    ],
    "answer": 0,
    "why": "Sulfonamides resemble PABA, so the enzyme binds the drug instead of its real substrate and folate synthesis stalls."
  },
  "c31b": {
    "options": [
      "PABA to dihydropteroate",
      "Dihydrofolic acid to tetrahydrofolic acid",
      "Dihydropteroate to dihydrofolic acid",
      "Tetrahydrofolic acid to nucleotides"
    ],
    "answer": 1,
    "why": "Dihydrofolate reductase converts DHF to THF, a step later in the pathway than the enzyme that sulfamethoxazole blocks."
  },
  "c32a": {
    "options": [
      "Dihydropteroate synthase and dihydrofolate reductase",
      "Transpeptidase and transglycosylase",
      "DNA gyrase and topoisomerase IV",
      "DNA polymerase III and RNA polymerase"
    ],
    "answer": 2,
    "why": "Blocking DNA gyrase and topoisomerase IV prevents bacterial DNA replication. Gram-negative organisms rely more on gyrase, and Gram-positive organisms rely more on topoisomerase IV."
  },
  "c32b": {
    "options": [
      "DNA replication",
      "Transcription",
      "Translation",
      "Folate synthesis"
    ],
    "answer": 1,
    "why": "RNA polymerase copies DNA into RNA, which is transcription. Translation stops later because no new mRNA is made, but the direct block is transcription."
  },
  "c32c": {
    "options": [
      "R7",
      "R6",
      "R5",
      "R8"
    ],
    "answer": 0,
    "why": "On the fluoroquinolone core, R7 is tied to spectrum of activity and R6 to cell wall penetration. The substituent on the ring nitrogen is tied to potency."
  },
  "c33a": {
    "options": [
      "Blocks peptidoglycan cross-linking in the wall",
      "Damages microbial DNA and causes strand breaks",
      "Binds the 30S ribosomal subunit to cause misreading",
      "Inhibits folate synthesis by blocking a reductase"
    ],
    "answer": 1,
    "why": "The reductively activated radical binds and breaks DNA strands, which inhibits DNA synthesis."
  },
  "c33b": {
    "options": [
      "Peptidoglycan",
      "Arabinogalactan",
      "Mycolic acids",
      "Folate"
    ],
    "answer": 2,
    "why": "Isoniazid inhibits mycolic acid synthesis and is specific for mycobacteria. Ethambutol acts on arabinogalactan synthesis."
  },
  "c41a": {
    "options": [
      "60S and 40S",
      "50S and 40S",
      "60S and 30S",
      "50S and 30S"
    ],
    "answer": 3,
    "why": "The bacterial 70S ribosome has a large 50S subunit and a small 30S subunit. The human ribosome has 60S and 40S subunits."
  },
  "c41b": {
    "options": [
      "A site",
      "P site",
      "E site",
      "Exit tunnel"
    ],
    "answer": 0,
    "why": "The A (aminoacyl) site accepts the incoming tRNA. The P site holds the growing peptide, and the E site is where empty tRNA leaves."
  },
  "c42a": {
    "options": [
      "Macrolides",
      "Tetracyclines",
      "Lincosamides",
      "Oxazolidinones"
    ],
    "answer": 1,
    "why": "Tetracyclines bind 30S and block aminoacyl-tRNA entry. The other three classes act on the 50S subunit."
  },
  "c42b": {
    "options": [
      "Assembly of the 70S initiation complex",
      "Entry of aminoacyl-tRNA into the A site",
      "tRNA leaving the ribosome after amino acid transfer",
      "Accurate reading of mRNA codons"
    ],
    "answer": 2,
    "why": "Macrolides interfere with translocation, so tRNA cannot leave after it has transferred its amino acid. Linezolid blocks initiation, tetracyclines block A-site entry, and aminoglycosides cause misreading."
  },
  "c42c": {
    "options": [
      "A-site blockade and mRNA misreading",
      "Initiation complex inhibition and peptide bond blockade",
      "Translocation blockade and A-site blockade",
      "Initiation complex inhibition and mRNA misreading"
    ],
    "answer": 3,
    "why": "Aminoglycosides inhibit formation of the initiation complex and cause misreading of mRNA."
  },
  "c43a": {
    "options": [
      "Oxazolidinones",
      "Macrolides",
      "Aminoglycosides",
      "Tetracyclines"
    ],
    "answer": 0,
    "why": "Linezolid, an oxazolidinone, binds 23S rRNA in the 50S subunit and inhibits formation of the 70S initiation complex."
  },
  "c43b": {
    "options": [
      "Bind the 30S subunit instead of the 50S subunit",
      "Evade macrolide-resistance mechanisms",
      "Become activated inside anaerobic organisms",
      "Cross the Gram-negative outer membrane"
    ],
    "answer": 1,
    "why": "Telithromycin still binds the 50S subunit and blocks translocation, but its modifications help it escape macrolide-resistance mechanisms."
  },
  "c51a": {
    "options": [
      "Target change",
      "Reduced entry",
      "Drug inactivation",
      "Efflux"
    ],
    "answer": 2,
    "why": "Adenylylating, acetylating, and phosphorylating enzymes chemically modify the drug so it no longer works. That is drug inactivation."
  },
  "c51b": {
    "options": [
      "Drug inactivation",
      "Target change",
      "Reduced entry",
      "Efflux"
    ],
    "answer": 3,
    "why": "Pumps keep the intracellular concentration below the level needed to inhibit the ribosome. That is efflux."
  },
  "c51c": {
    "options": [
      "A high transfer rate by conjugation",
      "Confinement to a single bacterial species",
      "Loss of the gene at each cell division",
      "Resistance limited to one drug class"
    ],
    "answer": 0,
    "why": "Plasmids move between cells by conjugation, occur in different species, and can carry resistance to different drugs at once."
  },
  "c52a": {
    "options": [
      "Drug inactivation",
      "Target change",
      "Reduced entry",
      "Efflux"
    ],
    "answer": 1,
    "why": "The drug is intact and enters the cell, but its target has changed. PBP2a in MRSA is the classic example."
  },
  "c52b": {
    "options": [
      "Altered DNA gyrase",
      "Altered dihydrofolate reductase",
      "Altered RNA polymerase",
      "Acetylation of the drug"
    ],
    "answer": 2,
    "why": "Rifampin targets RNA polymerase, and chromosomal mutations that alter it reduce drug binding. Altered gyrase is the fluoroquinolone pattern."
  },
  "c52c": {
    "options": [
      "Tetracycline",
      "Vancomycin",
      "Rifampin",
      "Chloramphenicol"
    ],
    "answer": 3,
    "why": "Acetylation inactivates chloramphenicol, which is an example of drug inactivation."
  },
  "c53a": {
    "options": [
      "4 µg/mL",
      "1 µg/mL",
      "2 µg/mL",
      "32 µg/mL"
    ],
    "answer": 0,
    "why": "The MIC is the lowest concentration that prevents visible growth. The 4 µg/mL tube is the lowest clear tube."
  },
  "c53b": {
    "options": [
      "4 µg/mL",
      "16 µg/mL",
      "8 µg/mL",
      "32 µg/mL"
    ],
    "answer": 1,
    "why": "The MBC is the lowest concentration that kills at least 99.9% of the organisms, shown here by a subculture with no colonies."
  },
  "c53c": {
    "options": [
      "Disk diffusion test",
      "Serum bactericidal test",
      "Antibiogram",
      "Tube dilution test"
    ],
    "answer": 2,
    "why": "An antibiogram is a periodic facility-level summary built from routine susceptibility testing. It guides empiric therapy before a patient's own results are back."
  },
  "c54a": {
    "options": [
      "Add a second broad-spectrum drug",
      "Extend the planned duration",
      "Raise the dose of the current drug",
      "Switch to the narrow-spectrum drug"
    ],
    "answer": 3,
    "why": "Stewardship favors targeted therapy. When broad-spectrum drugs are started first, a narrow-spectrum drug should replace them as soon as possible."
  },
  "c54b": {
    "options": [
      "Penicillin damages the cell wall, which enhances gentamicin entry",
      "Gentamicin degrades the β-lactamase enzymes made by the cell",
      "Penicillin blocks the efflux pumps that expel gentamicin",
      "Gentamicin activates penicillin inside the bacterial cell"
    ],
    "answer": 0,
    "why": "A damaged wall lets more aminoglycoside enter the cell, so the two drugs together do more than either does alone."
  },
  "c54c": {
    "options": [
      "Lengthening the intravenous course",
      "Switching from intravenous to oral dosing",
      "Adding a second intravenous drug",
      "Switching to a broader-spectrum drug"
    ],
    "answer": 1,
    "why": "Removing the need for a catheter removes a route for infection. Oral therapy is preferred once the patient can absorb the drug."
  },
  "c61a": {
    "options": [
      "Active immunity",
      "Passive-active immunity",
      "Passive immunity",
      "Herd immunity"
    ],
    "answer": 2,
    "why": "Passive immunity comes from antibody made elsewhere, such as an antitoxin or an immune globulin. The patient's own immune system has not been engaged."
  },
  "c61b": {
    "options": [
      "Immediate protection with short-lived coverage",
      "Delayed protection with long-term immunity",
      "Delayed protection with short-lived coverage",
      "Immediate protection and long-term immunity"
    ],
    "answer": 3,
    "why": "The immune globulin gives immediate antibody, and the toxoid vaccine starts the patient's own long-term immune response. This is passive-active immunity."
  },
  "c62a": {
    "options": [
      "Toxoid",
      "Conjugate",
      "Live attenuated",
      "Inactivated whole-cell"
    ],
    "answer": 0,
    "why": "Diphtheria and tetanus vaccines are toxoids: the toxin is inactivated but still triggers antibodies."
  },
  "c62b": {
    "options": [
      "Toxoid",
      "Conjugate",
      "Protein / subunit",
      "Live attenuated"
    ],
    "answer": 1,
    "why": "A conjugate vaccine chemically links a polysaccharide antigen to a carrier protein."
  },
  "c62c": {
    "options": [
      "Inactivated whole-cell",
      "Toxoid",
      "Live attenuated",
      "Protein / subunit"
    ],
    "answer": 2,
    "why": "Live attenuated vaccines contain a weakened organism. Inactivated whole-cell vaccines contain killed organisms."
  },
  "c63a": {
    "options": [
      "Contact precautions",
      "Droplet precautions",
      "Airborne precautions",
      "Standard precautions"
    ],
    "answer": 3,
    "why": "Standard precautions, such as hand hygiene and safe injection practices, apply to every patient. The three transmission-based sets are added when the pathogen or syndrome warrants it."
  },
  "c63b": {
    "options": [
      "Sterile filtration with aseptic processing",
      "Steam sterilization in an autoclave",
      "Ethylene oxide gas sterilization",
      "Chemical surface disinfection"
    ],
    "answer": 0,
    "why": "Filtration removes microorganisms without heat, but the whole process must be validated. Steam needs heat, and gas methods suit heat-sensitive devices."
  },
  "c22d": {
    "options": [
      "Piperacillin-tazobactam",
      "Amoxicillin-clavulanate",
      "Ceftazidime-avibactam"
    ],
    "answer": 1,
    "why": "Amoxicillin-clavulanate is the oral combination. Piperacillin-tazobactam and ceftazidime-avibactam are given intravenously."
  },
  "c33c": {
    "options": [
      "Extra copies of the activating enzyme",
      "Faster activation of the drug by the enzyme",
      "Loss or mutation of the activating enzyme",
      "A higher affinity of the enzyme for the drug"
    ],
    "answer": 2,
    "why": "Because activation happens inside the target organism, resistance can arise simply by losing or mutating the activating enzyme. This is seen with isoniazid and pyrazinamide."
  },
  "c52d": {
    "options": [
      "PBP2a cleaves the β-lactam ring",
      "PBP2a exports the β-lactam from the cell",
      "PBP2a closes the porin channels",
      "PBP2a has markedly reduced affinity for β-lactams"
    ],
    "answer": 3,
    "why": "PBP2a is a different, insensitive penicillin-binding protein, so cross-linking continues even when the organism's normal PBPs are fully inhibited. This is target change, not a β-lactamase."
  },
  "c53d": {
    "options": [
      "The breakpoint for that drug and organism",
      "The MIC of another drug tested on the same isolate",
      "The average MIC from the facility antibiogram",
      "The MIC of the same drug against a different organism"
    ],
    "answer": 0,
    "why": "Breakpoints are specific to a drug-organism pair, so an MIC is interpreted against its own breakpoint. Raw MIC values are not compared across different drugs or organisms."
  },
  "c62d": {
    "options": [
      "A stronger response with lasting immune memory",
      "A weaker, shorter-lived response with little immune memory",
      "A response that boosts effectively in infants",
      "A response that is strongest in children younger than 2 years"
    ],
    "answer": 1,
    "why": "Plain polysaccharide antigens trigger a T-independent response: weaker, shorter-lived, with little immune memory. Infants and young children respond poorly to them."
  },
  "c62e": {
    "options": [
      "It converts a T-dependent response into a T-independent response",
      "It replaces the B-cell response with an innate response",
      "It converts a T-independent response into a T-dependent response",
      "It removes the need for booster doses"
    ],
    "answer": 2,
    "why": "The carrier protein brings T-cell help, which produces a stronger response, immune memory, and effective booster responses."
  }
};

var CARDS = [
  {
    "id": "BAC2-CARD-01",
    "t": "β-Lactams: target and effect",
    "d": "Penicillin-binding proteins (transpeptidase). Cross-linking of peptidoglycan is blocked, so the wall weakens.",
    "area": "β-Lactams, PBPs, and β-lactamases"
  },
  {
    "id": "BAC2-CARD-02",
    "t": "Which drug binds D-alanyl-D-alanine on the growing precursor?",
    "d": "Vancomycin. It sterically blocks the transpeptidase.",
    "area": "Vancomycin and membrane-active drugs"
  },
  {
    "id": "BAC2-CARD-03",
    "t": "Cycloserine: target and effect",
    "d": "Mimics D-alanine and inhibits synthesis of D-alanyl-D-alanine, so wall precursors are not made.",
    "area": "Peptidoglycan pathway and drug targets"
  },
  {
    "id": "BAC2-CARD-04",
    "t": "Bacitracin: target and effect",
    "d": "Prevents recycling of the lipid carrier that moves peptidoglycan subunits across the membrane.",
    "area": "Peptidoglycan pathway and drug targets"
  },
  {
    "id": "BAC2-CARD-05",
    "t": "Polymyxins: target and effect",
    "d": "Cationic detergent-like action on the phospholipid bilayer. Poor bacterial selectivity limits their use.",
    "area": "Vancomycin and membrane-active drugs"
  },
  {
    "id": "BAC2-CARD-06",
    "t": "Daptomycin: target and effect",
    "d": "Disrupts the cell membrane of Gram-positive cocci. It is bactericidal.",
    "area": "Vancomycin and membrane-active drugs"
  },
  {
    "id": "BAC2-CARD-07",
    "t": "Sulfonamides: target and effect",
    "d": "Mimic PABA and inhibit dihydropteroate synthase, blocking an early folate-pathway step.",
    "area": "Folate pathway"
  },
  {
    "id": "BAC2-CARD-08",
    "t": "Trimethoprim: target and effect",
    "d": "Inhibits dihydrofolate reductase (DHF to THF). It is about 60,000-fold selective for the bacterial enzyme.",
    "area": "Folate pathway"
  },
  {
    "id": "BAC2-CARD-09",
    "t": "Fluoroquinolones: target and effect",
    "d": "Inhibit DNA gyrase and topoisomerase IV, preventing bacterial DNA replication.",
    "area": "DNA and RNA synthesis targets"
  },
  {
    "id": "BAC2-CARD-10",
    "t": "Rifampin: target and effect",
    "d": "Inhibits bacterial DNA-dependent RNA polymerase, blocking mRNA synthesis.",
    "area": "DNA and RNA synthesis targets"
  },
  {
    "id": "BAC2-CARD-11",
    "t": "Aminoglycosides: target and effect",
    "d": "Bind the 30S subunit, inhibit initiation complex formation, and cause mRNA misreading.",
    "area": "Drug classes and ribosome targets"
  },
  {
    "id": "BAC2-CARD-12",
    "t": "Tetracyclines: target and effect",
    "d": "Bind the 30S subunit and block aminoacyl-tRNA from entering the A site.",
    "area": "Drug classes and ribosome targets"
  },
  {
    "id": "BAC2-CARD-13",
    "t": "Macrolides: target and effect",
    "d": "Bind the 50S subunit and prevent tRNA from leaving the ribosome after amino acid transfer.",
    "area": "Drug classes and ribosome targets"
  },
  {
    "id": "BAC2-CARD-14",
    "t": "Clindamycin: target and effect",
    "d": "Binds the 50S subunit and blocks peptide bond formation. It cannot bind the human 60S ribosome.",
    "area": "Drug classes and ribosome targets"
  },
  {
    "id": "BAC2-CARD-15",
    "t": "Linezolid: target and effect",
    "d": "Binds 23S rRNA in the 50S subunit and inhibits formation of the 70S initiation complex.",
    "area": "Drug classes and ribosome targets"
  },
  {
    "id": "BAC2-CARD-16",
    "t": "What follows when DNA gyrase and topoisomerase IV are blocked?",
    "d": "Bacterial DNA replication stops.",
    "area": "DNA and RNA synthesis targets"
  },
  {
    "id": "BAC2-CARD-17",
    "t": "What follows when the A site is blocked?",
    "d": "Aminoacyl-tRNA cannot enter, so no new amino acids are added to the chain.",
    "area": "Translation mechanics and inference"
  },
  {
    "id": "BAC2-CARD-18",
    "t": "Metronidazole: how does it work?",
    "d": "A prodrug reductively activated in anaerobic organisms. The activated radical breaks DNA strands.",
    "area": "Prodrugs and TB drugs"
  },
  {
    "id": "BAC2-CARD-19",
    "t": "Isoniazid versus ethambutol",
    "d": "Isoniazid inhibits mycolic acid synthesis. Ethambutol inhibits arabinogalactan synthesis.",
    "area": "Prodrugs and TB drugs"
  },
  {
    "id": "BAC2-CARD-20",
    "t": "Drug inactivation: example",
    "d": "β-lactamases cleave the β-lactam ring. Aminoglycoside-modifying enzymes adenylylate, acetylate, or phosphorylate the drug.",
    "area": "Routes to resistance"
  },
  {
    "id": "BAC2-CARD-21",
    "t": "Target change: example",
    "d": "PBP2a in MRSA, or methylation of 23S rRNA that blocks erythromycin binding.",
    "area": "Escape mechanisms by drug"
  },
  {
    "id": "BAC2-CARD-22",
    "t": "Reduced entry: example",
    "d": "Porin loss or altered permeability lowers the amount of drug that reaches the cell.",
    "area": "Routes to resistance"
  },
  {
    "id": "BAC2-CARD-23",
    "t": "Efflux: example",
    "d": "Tetracycline and multidrug efflux pumps keep the intracellular drug concentration too low.",
    "area": "Escape mechanisms by drug"
  },
  {
    "id": "BAC2-CARD-24",
    "t": "MIC",
    "d": "The lowest drug concentration that inhibits visible growth. It comes from a tube dilution test.",
    "area": "MIC, MBC, and susceptibility reports"
  },
  {
    "id": "BAC2-CARD-25",
    "t": "MBC",
    "d": "The lowest drug concentration that kills at least 99.9% of the organisms after subculture.",
    "area": "MIC, MBC, and susceptibility reports"
  },
  {
    "id": "BAC2-CARD-26",
    "t": "Antibiogram",
    "d": "A periodic facility-level summary of the percentage of isolates susceptible to each antibiotic. It guides empiric therapy.",
    "area": "MIC, MBC, and susceptibility reports"
  },
  {
    "id": "BAC2-CARD-27",
    "t": "Passive-active immunity",
    "d": "Immune globulin plus vaccine: immediate protection and long-term immunity, as with tetanus immune globulin plus toxoid.",
    "area": "Active and passive immunity"
  },
  {
    "id": "BAC2-CARD-28",
    "t": "Toxoid vaccine",
    "d": "An inactivated toxin. Examples: diphtheria and tetanus.",
    "area": "Vaccine platforms"
  },
  {
    "id": "BAC2-CARD-29",
    "t": "Conjugate vaccine",
    "d": "A polysaccharide linked to a protein. Examples: Hib, PCV, and MenACWY.",
    "area": "Vaccine platforms"
  },
  {
    "id": "BAC2-CARD-30",
    "t": "Live attenuated vaccine",
    "d": "A weakened organism. Examples: Ty21a and BCG.",
    "area": "Vaccine platforms"
  },
  {
    "id": "BAC2-CARD-31",
    "t": "Sterilization versus disinfection",
    "d": "Sterilization destroys all microorganisms, including spores. Disinfection does not necessarily eliminate spores.",
    "area": "Infection control"
  },
  {
    "id": "BAC2-CARD-32",
    "t": "Antiseptic versus disinfectant",
    "d": "Antiseptics are used on living tissue. Disinfectants are used on inanimate surfaces.",
    "area": "Infection control"
  },
  {
    "id": "BAC2-CARD-33",
    "t": "Ceftazidime-avibactam: what does it cover?",
    "d": "Many organisms that produce serine carbapenemases such as KPC, but not metallo-β-lactamase producers.",
    "area": "β-Lactams, PBPs, and β-lactamases"
  },
  {
    "id": "BAC2-CARD-34",
    "t": "Prodrugs activated inside the microbe: how can resistance arise?",
    "d": "By losing or mutating the activating enzyme, as seen with isoniazid and pyrazinamide.",
    "area": "Prodrugs and TB drugs"
  },
  {
    "id": "BAC2-CARD-35",
    "t": "PBP2a in MRSA",
    "d": "An altered penicillin-binding protein encoded by mecA. It has markedly reduced affinity for β-lactams, so cross-linking continues. β-Lactamase inhibitors do not restore activity.",
    "area": "Escape mechanisms by drug"
  },
  {
    "id": "BAC2-CARD-36",
    "t": "MRSA versus VRE: how do the mechanisms differ?",
    "d": "MRSA alters the target enzyme (PBP2a). VRE alters the drug's binding substrate (D-Ala-D-Lac instead of D-Ala-D-Ala).",
    "area": "Escape mechanisms by drug"
  },
  {
    "id": "BAC2-CARD-37",
    "t": "Susceptible, Intermediate, and Resistant",
    "d": "S: likely to respond to standard dosing. I: may respond at higher dosing or when the drug concentrates at the infection site. R: unlikely to respond even at maximum safe dosing. Breakpoints are specific to each drug-organism pair.",
    "area": "MIC, MBC, and susceptibility reports"
  },
  {
    "id": "BAC2-CARD-38",
    "t": "Plain polysaccharide versus conjugate vaccine",
    "d": "Plain: T-independent response, weaker and shorter-lived, little memory. Conjugate: polysaccharide linked to a carrier protein, T-dependent, stronger response with memory and effective boosters.",
    "area": "Vaccine platforms"
  },
  {
    "id": "BAC2-CARD-39",
    "t": "Selective toxicity: where it comes from",
    "d": "A difference between the bacterial and human target. The target may be absent from humans (the peptidoglycan wall, folate synthesis) or built differently (the 70S ribosome; trimethoprim inhibits bacterial dihydrofolate reductase at a far lower concentration than the human enzyme). A near-identical shared target means host toxicity at effective doses.",
    "area": "Selective toxicity"
  },
  {
    "id": "BAC2-CARD-40",
    "t": "Bactericidal versus bacteriostatic",
    "d": "Bactericidal drugs kill. Bacteriostatic drugs stop growth without killing, so the bacteria regrow if the drug is removed, and clearing them depends on host defenses such as phagocytes. That is why bactericidal therapy is favored in life-threatening infections such as endocarditis, where phagocytes reach the bacteria poorly.",
    "area": "Killing, growth arrest, and spectrum"
  },
  {
    "id": "BAC2-CARD-41",
    "t": "Broad versus narrow spectrum",
    "d": "Broad: several unrelated groups are affected, as with tetracyclines (Gram-negative rods, chlamydiae, mycoplasmas, rickettsiae). Narrow: one group or organism, as with vancomycin (Gram-positive cocci), fidaxomicin (C. difficile), or isoniazid (mycobacteria).",
    "area": "Killing, growth arrest, and spectrum"
  },
  {
    "id": "BAC2-CARD-42",
    "t": "The five-part mechanism lens",
    "d": "Target: what bacterial molecule or process is directly affected. Action: what the drug does to it (inhibit, bind, block, disrupt, cause misreading). Selective toxicity: why bacterial cells are more vulnerable than human cells. Spectrum / context: which organisms it reaches and the broad clinical pattern. Resistance link: the simplest escape route from the mechanism.",
    "area": "The mechanism lens"
  },
  {
    "id": "BAC2-CARD-43",
    "t": "Bacterial versus human ribosome",
    "d": "Bacterial: 70S, a 30S subunit (16S rRNA) plus a 50S subunit (23S rRNA and the exit tunnel). Human: 80S, a 40S plus a 60S subunit. The difference in size and structure lets drugs such as clindamycin bind the bacterial ribosome and spare the human one.",
    "area": "Ribosome structure"
  },
  {
    "id": "BAC2-CARD-44",
    "t": "Antibiotic stewardship and combination therapy",
    "d": "For a serious infection, start empiric coverage and send cultures, then narrow to the drug that covers the identified organism. Use the shortest effective course, and adjust the dose when kidney function is reduced. Two drugs together are justified for a serious infection before the organism is identified, for synergy, or to prevent resistance.",
    "area": "Stewardship and combinations"
  }
];

var POOL = [
  {
    "id": "BAC2-001",
    "m": "m1",
    "area": "Selective toxicity",
    "level": "concept",
    "stem": "Which structure is present in bacteria but absent from human cells, making it an attractive drug target?",
    "options": [
      "Phospholipid bilayer",
      "Double-stranded DNA",
      "Protein-synthesizing ribosome",
      "Peptidoglycan cell wall"
    ],
    "answer": 3,
    "why": "Human cells have no peptidoglycan wall. Membranes, DNA, and ribosomes exist in both cell types, so drugs aimed at them need extra structural selectivity."
  },
  {
    "id": "BAC2-002",
    "m": "m1",
    "area": "Selective toxicity",
    "level": "application",
    "stem": "Drug B inhibits bacterial and human DNA polymerase with equal potency. Which prediction about selective toxicity is best?",
    "options": [
      "High selectivity, because DNA replication is essential in bacteria",
      "High selectivity, because bacteria replicate faster",
      "Poor selectivity, because human cells are injured at similar concentrations",
      "Moderate selectivity, because bacterial DNA is circular"
    ],
    "answer": 2,
    "why": "Selective toxicity depends on a difference between bacterial and human targets. Equal potency against both enzymes means the patient is exposed to the same injury as the bacteria."
  },
  {
    "id": "BAC2-003",
    "m": "m1",
    "area": "Selective toxicity",
    "level": "application",
    "stem": "Trimethoprim is 60,000-fold more selective for bacterial dihydrofolate reductase than for the human enzyme. What does this mean?",
    "options": [
      "The drug accumulates at 60,000 times the concentration inside bacteria",
      "A much lower drug concentration inhibits the bacterial enzyme",
      "The human enzyme is absent from human cells",
      "The drug is activated by bacterial enzymes"
    ],
    "answer": 1,
    "why": "Selectivity here is a difference in potency: far less drug is needed to inhibit the bacterial enzyme than the human one."
  },
  {
    "id": "BAC2-004",
    "m": "m1",
    "area": "Selective toxicity",
    "level": "integration",
    "stem": "A candidate drug binds a target that bacteria and humans share with a nearly identical structure. Which outcome should the developers expect?",
    "options": [
      "Broad-spectrum activity with low toxicity",
      "Host toxicity at effective antibacterial doses",
      "Bactericidal activity with slow resistance",
      "Narrow-spectrum activity with high selectivity"
    ],
    "answer": 1,
    "why": "A shared, near-identical target offers little selective toxicity. Both cell types are affected at similar drug concentrations."
  },
  {
    "id": "BAC2-005",
    "m": "m1",
    "area": "Killing, growth arrest, and spectrum",
    "level": "concept",
    "stem": "Which term describes an antibiotic that inhibits growth without killing bacteria?",
    "options": [
      "Bacteriostatic",
      "Bactericidal",
      "Broad-spectrum",
      "Narrow-spectrum"
    ],
    "answer": 0,
    "why": "Bacteriostatic drugs halt growth. Bactericidal drugs kill. Spectrum terms describe how many microbe types are affected."
  },
  {
    "id": "BAC2-006",
    "m": "m1",
    "area": "Killing, growth arrest, and spectrum",
    "level": "application",
    "stem": "A patient has infective endocarditis, with bacteria growing inside heart-valve vegetations. Why is a bacteriostatic antibiotic a weaker choice for this patient?",
    "options": [
      "Its activity depends on enzymes released by neutrophils",
      "Its spectrum covers too few of the likely species",
      "Its blood levels fall too quickly between doses",
      "It relies on phagocytes, which reach vegetations poorly"
    ],
    "answer": 3,
    "why": "A bacteriostatic drug only holds the bacteria in check, and phagocytes must then remove them. Inside vegetations, phagocytes reach the bacteria poorly, so that second step fails. The other options describe problems unrelated to whether a drug kills bacteria or only halts their growth."
  },
  {
    "id": "BAC2-007",
    "m": "m1",
    "area": "Killing, growth arrest, and spectrum",
    "level": "application",
    "stem": "A treated culture plateaus after drug addition. Which result is expected after removing a bacteriostatic drug?",
    "options": [
      "The viable count keeps falling",
      "The plateau continues indefinitely",
      "Growth resumes toward the untreated level",
      "The culture becomes permanently resistant"
    ],
    "answer": 2,
    "why": "Bacteriostatic drugs leave cells alive. When the drug is removed, the surviving cells resume growth."
  },
  {
    "id": "BAC2-008",
    "m": "m1",
    "area": "Killing, growth arrest, and spectrum",
    "level": "application",
    "stem": "Tetracyclines act against Gram-negative rods, chlamydiae, mycoplasmas, and rickettsiae. Which statement fits this range?",
    "options": [
      "Narrow spectrum, because one organism type is affected",
      "Broad spectrum, because one organism type is affected",
      "Broad spectrum, because several unrelated groups are affected",
      "Narrow spectrum, because several unrelated groups are affected"
    ],
    "answer": 2,
    "why": "Activity against several different types of microbes defines a broad-spectrum antibiotic."
  },
  {
    "id": "BAC2-009",
    "m": "m1",
    "area": "The mechanism lens",
    "level": "concept",
    "stem": "Which lens prompt asks why bacterial cells are more vulnerable than human cells?",
    "options": [
      "Target",
      "Selective toxicity",
      "Action",
      "Resistance link"
    ],
    "answer": 1,
    "why": "Selective toxicity asks what difference between bacterial and human cells the drug exploits."
  },
  {
    "id": "BAC2-010",
    "m": "m1",
    "area": "The mechanism lens",
    "level": "application",
    "stem": "Bacteria acquire a pump that exports a drug. Which lens prompt does this address?",
    "options": [
      "Resistance link",
      "Action",
      "Target",
      "Spectrum / context"
    ],
    "answer": 0,
    "why": "A pump is an escape route from the mechanism, which is what the resistance link prompt asks about."
  },
  {
    "id": "BAC2-011",
    "m": "m1",
    "area": "The mechanism lens",
    "level": "application",
    "stem": "A drug binds an enzyme and blocks its activity. Which lens prompt does this statement answer?",
    "options": [
      "Target",
      "Selective toxicity",
      "Spectrum / context",
      "Action"
    ],
    "answer": 3,
    "why": "Action asks what the drug does: inhibit, bind, block, disrupt, or cause misreading."
  },
  {
    "id": "BAC2-012",
    "m": "m1",
    "area": "The mechanism lens",
    "level": "integration",
    "stem": "Which lens summary fits vancomycin?",
    "options": [
      "Target: 30S subunit; Action: misreading; Spectrum: Gram-negative bacteria",
      "Target: DNA gyrase; Action: inhibition; Spectrum: broad",
      "Target: RNA polymerase; Action: blockade; Spectrum: mycobacteria",
      "Target: D-Ala-D-Ala substrate; Action: binding; Spectrum: Gram-positive bacteria"
    ],
    "answer": 3,
    "why": "Vancomycin binds the D-alanyl-D-alanine end of the growing precursor and acts against Gram-positive bacteria. The other summaries describe other classes."
  },
  {
    "id": "BAC2-013",
    "m": "m2",
    "area": "Peptidoglycan pathway and drug targets",
    "level": "concept",
    "stem": "Which sequence lists the stages of peptidoglycan synthesis from first to last?",
    "options": [
      "Lipid-carrier transport, precursor formation, cross-linking, glycan polymerization",
      "Precursor formation, glycan polymerization, lipid-carrier transport, cross-linking",
      "Precursor formation, lipid-carrier transport, glycan polymerization, cross-linking",
      "Glycan polymerization, precursor formation, cross-linking, lipid-carrier transport"
    ],
    "answer": 2,
    "why": "Precursors are built in the cytoplasm, carried across the inner membrane, joined into glycan strands, and finally cross-linked."
  },
  {
    "id": "BAC2-014",
    "m": "m2",
    "area": "Peptidoglycan pathway and drug targets",
    "level": "concept",
    "stem": "Which drug binds the D-alanyl-D-alanine end of the growing peptidoglycan precursor?",
    "options": [
      "Cycloserine",
      "Vancomycin",
      "Bacitracin",
      "Aztreonam"
    ],
    "answer": 1,
    "why": "Vancomycin binds this substrate and sterically blocks the transpeptidase. Cycloserine blocks its formation, and bacitracin acts on the lipid carrier."
  },
  {
    "id": "BAC2-015",
    "m": "m2",
    "area": "Peptidoglycan pathway and drug targets",
    "level": "concept",
    "stem": "A drug blocks dephosphorylation of the phospholipid that carries peptidoglycan subunits across the membrane. Which drug fits?",
    "options": [
      "Bacitracin",
      "Cycloserine",
      "Vancomycin",
      "Daptomycin"
    ],
    "answer": 0,
    "why": "Bacitracin prevents recycling of the lipid carrier. It is too toxic for systemic use and is applied topically."
  },
  {
    "id": "BAC2-016",
    "m": "m2",
    "area": "Peptidoglycan pathway and drug targets",
    "level": "integration",
    "stem": "Which change would let a bacterium keep cross-linking its wall in the presence of a β-lactam without destroying the drug?",
    "options": [
      "A PBP with reduced affinity for the drug",
      "Overproduction of alanine racemase",
      "Faster recycling of the lipid carrier",
      "Replacement of D-Ala-D-Ala with D-Ala-D-Lac"
    ],
    "answer": 0,
    "why": "A PBP with low affinity for the drug keeps cross-linking even though the β-lactam is present and intact. This is target change. D-Ala-D-Lac is the vancomycin escape route, and extra alanine racemase or faster lipid-carrier recycling would counter cycloserine or bacitracin, not a β-lactam."
  },
  {
    "id": "BAC2-017",
    "m": "m2",
    "area": "β-Lactams, PBPs, and β-lactamases",
    "level": "concept",
    "stem": "Which mechanism of action do the β-lactam classes share?",
    "options": [
      "Inhibition of DNA gyrase",
      "Inhibition of ribosomal translocation",
      "Disruption of the phospholipid bilayer",
      "Inhibition of PBP transpeptidase activity"
    ],
    "answer": 3,
    "why": "Penicillins, cephalosporins, carbapenems, and monobactams all bind PBPs and block cross-linking."
  },
  {
    "id": "BAC2-018",
    "m": "m2",
    "area": "β-Lactams, PBPs, and β-lactamases",
    "level": "concept",
    "stem": "Which β-lactam class is reserved for hospital use as drugs of last resort?",
    "options": [
      "Penicillins",
      "Cephalosporins",
      "Carbapenems",
      "Monobactams"
    ],
    "answer": 2,
    "why": "Carbapenems such as meropenem and ertapenem are kept for serious hospital infections."
  },
  {
    "id": "BAC2-019",
    "m": "m2",
    "area": "β-Lactams, PBPs, and β-lactamases",
    "level": "concept",
    "stem": "Imipenem is given with cilastatin. What does cilastatin do?",
    "options": [
      "Inhibits bacterial β-lactamases",
      "Inhibits a kidney enzyme that inactivates imipenem",
      "Enhances imipenem entry through porins",
      "Blocks the altered PBP of resistant strains"
    ],
    "answer": 1,
    "why": "Cilastatin inhibits kidney dehydropeptidase, which would otherwise inactivate imipenem."
  },
  {
    "id": "BAC2-020",
    "m": "m2",
    "area": "β-Lactams, PBPs, and β-lactamases",
    "level": "concept",
    "stem": "Penicillins, cephalosporins, and carbapenems can each be destroyed by bacterial enzymes that attack a structure all three classes share. Which structure is attacked?",
    "options": [
      "The thiazolidine ring",
      "The four-membered β-lactam ring",
      "The acyl side chain",
      "The carboxylic acid group"
    ],
    "answer": 1,
    "why": "β-Lactamases break the four-membered ring that all β-lactams share. Individual enzymes differ in which classes they reach: penicillinases, ESBLs, and carbapenemases have progressively broader ranges."
  },
  {
    "id": "BAC2-021",
    "m": "m2",
    "area": "β-Lactams, PBPs, and β-lactamases",
    "level": "integration",
    "stem": "A Gram-negative isolate makes a metallo-β-lactamase. What is the expected effect of adding a β-lactamase inhibitor to a penicillin?",
    "options": [
      "Little restoration, because standard inhibitors lack activity against metallo-enzymes",
      "Full restoration, because inhibitors protect against both enzyme types",
      "Partial restoration, because the inhibitor kills the organism directly",
      "Greater resistance, because inhibitors induce more enzyme"
    ],
    "answer": 0,
    "why": "The inhibitors in current combinations (clavulanate, sulbactam, tazobactam, avibactam) do not block zinc-dependent metallo-β-lactamases, so the penicillin is still destroyed. An inhibitor protects the antibiotic; it is not a substitute for it."
  },
  {
    "id": "BAC2-022",
    "m": "m2",
    "area": "Vancomycin and membrane-active drugs",
    "level": "concept",
    "stem": "A hospitalized patient needs vancomycin for MRSA bacteremia. How is it given?",
    "options": [
      "Oral capsules",
      "Intramuscular injection",
      "Subcutaneous injection",
      "Slow intravenous infusion"
    ],
    "answer": 3,
    "why": "Oral vancomycin stays in the gut, so it is used only for Clostridioides difficile infection. Systemic infections need slow IV infusion to limit infusion reactions."
  },
  {
    "id": "BAC2-023",
    "m": "m2",
    "area": "Vancomycin and membrane-active drugs",
    "level": "application",
    "stem": "Which change lowers the risk of vancomycin infusion reaction (formerly called red man syndrome)?",
    "options": [
      "Switching to oral vancomycin",
      "Adding a β-lactamase inhibitor",
      "Slowing the infusion rate",
      "Doubling the dose"
    ],
    "answer": 2,
    "why": "Vancomycin infusion reaction is linked to rapid administration, so a slower infusion reduces the risk."
  },
  {
    "id": "BAC2-024",
    "m": "m2",
    "area": "Vancomycin and membrane-active drugs",
    "level": "application",
    "stem": "Daptomycin disrupts the membrane of Gram-positive cocci. For which infection is it used?",
    "options": [
      "Community-acquired pneumonia",
      "Tuberculosis",
      "Right-sided endocarditis",
      "Gram-negative urinary tract infection"
    ],
    "answer": 2,
    "why": "Daptomycin is labeled for Staphylococcus aureus bacteremia, including right-sided endocarditis, and for complicated skin infections. It is not used for pneumonia because lung surfactant inactivates it, and it has no Gram-negative activity."
  },
  {
    "id": "BAC2-025",
    "m": "m2",
    "area": "Vancomycin and membrane-active drugs",
    "level": "integration",
    "stem": "Which statement fits both polymyxin E (colistin) and daptomycin?",
    "options": [
      "Both act against Gram-positive cocci",
      "Both disrupt the cell membrane",
      "Both bind penicillin-binding proteins",
      "Both are activated inside bacteria"
    ],
    "answer": 1,
    "why": "Polymyxins act like a cationic detergent on the phospholipid bilayer, and daptomycin disrupts the membrane of Gram-positive cocci. Neither targets peptidoglycan synthesis."
  },
  {
    "id": "BAC2-026",
    "m": "m3",
    "area": "Folate pathway",
    "level": "concept",
    "stem": "Which enzyme does sulfamethoxazole inhibit?",
    "options": [
      "Dihydropteroate synthase",
      "Dihydrofolate reductase",
      "DNA gyrase",
      "RNA polymerase"
    ],
    "answer": 0,
    "why": "Sulfonamides mimic PABA and inhibit dihydropteroate synthase. Trimethoprim inhibits dihydrofolate reductase."
  },
  {
    "id": "BAC2-027",
    "m": "m3",
    "area": "Folate pathway",
    "level": "application",
    "stem": "Why can folate synthesis be targeted selectively even though humans also need folate?",
    "options": [
      "Human folate enzymes have a different active site",
      "Human cells absorb folate more slowly",
      "Humans convert folate into PABA",
      "Humans obtain folate from their diet"
    ],
    "answer": 3,
    "why": "Humans lack the synthesis enzymes, so a drug aimed at them has no human counterpart to injure."
  },
  {
    "id": "BAC2-028",
    "m": "m3",
    "area": "Folate pathway",
    "level": "application",
    "stem": "Sulfamethoxazole and trimethoprim each block one step in the same folate pathway. What is the expected effect of combining them?",
    "options": [
      "Folate output matches trimethoprim alone, because both act on one enzyme",
      "Folate output recovers, because the drugs compete for one site",
      "Folate output falls less, because each drug is given at a lower dose",
      "Folate output falls further, because two sequential steps are blocked"
    ],
    "answer": 3,
    "why": "Sulfamethoxazole blocks dihydropteroate synthase and trimethoprim blocks dihydrofolate reductase, two steps in sequence. Blocking both lowers folate output more than blocking either step alone."
  },
  {
    "id": "BAC2-029",
    "m": "m3",
    "area": "Folate pathway",
    "level": "integration",
    "stem": "A bacterium acquires a plasmid gene for a sulfonamide-insensitive dihydropteroate synthase. Which route and drug does this describe?",
    "options": [
      "Drug inactivation against trimethoprim",
      "Efflux against sulfonamides",
      "Target change against sulfonamides",
      "Reduced entry against trimethoprim"
    ],
    "answer": 2,
    "why": "Plasmid-borne sul genes encode a drug-insensitive version of the target enzyme, which is a target-change route."
  },
  {
    "id": "BAC2-030",
    "m": "m3",
    "area": "DNA and RNA synthesis targets",
    "level": "concept",
    "stem": "Ciprofloxacin, levofloxacin, and moxifloxacin belong to which class?",
    "options": [
      "Macrolides",
      "Fluoroquinolones",
      "Sulfonamides",
      "Rifamycins"
    ],
    "answer": 1,
    "why": "Most commonly prescribed quinolones contain a fluorine, so they are called fluoroquinolones."
  },
  {
    "id": "BAC2-031",
    "m": "m3",
    "area": "DNA and RNA synthesis targets",
    "level": "concept",
    "stem": "Gram-positive organisms rely more on which enzyme, making it a key fluoroquinolone target in those bacteria?",
    "options": [
      "Topoisomerase IV",
      "DNA gyrase",
      "RNA polymerase",
      "Dihydrofolate reductase"
    ],
    "answer": 0,
    "why": "Gram-negative organisms rely more on DNA gyrase, and Gram-positive organisms rely more on topoisomerase IV."
  },
  {
    "id": "BAC2-032",
    "m": "m3",
    "area": "DNA and RNA synthesis targets",
    "level": "application",
    "stem": "A patient taking rifampin notices orange urine, sweat, and saliva. Which statement fits?",
    "options": [
      "This is a harmless effect of the drug",
      "This is an early sign of kidney failure",
      "This is a sign of bleeding",
      "This is a sign of dehydration"
    ],
    "answer": 0,
    "why": "Rifampin can turn body fluids orange, and the color change is harmless."
  },
  {
    "id": "BAC2-033",
    "m": "m3",
    "area": "DNA and RNA synthesis targets",
    "level": "concept",
    "stem": "Fidaxomicin inhibits RNA polymerase. Against which organism is it specific?",
    "options": [
      "Mycobacterium tuberculosis",
      "Staphylococcus aureus",
      "Enterococcus faecalis",
      "Clostridioides difficile"
    ],
    "answer": 3,
    "why": "Fidaxomicin is specific for Clostridioides difficile. Rifampin is first-line therapy for Mycobacterium tuberculosis."
  },
  {
    "id": "BAC2-034",
    "m": "m3",
    "area": "Prodrugs and TB drugs",
    "level": "application",
    "stem": "Why is metronidazole active against anaerobes but not against aerobic bacteria?",
    "options": [
      "Anaerobes carry electron-transport proteins that reduce it to its active form",
      "Anaerobes have porins that admit it while aerobes do not",
      "Anaerobes lack the efflux pumps that aerobes use to expel it",
      "Anaerobes have a DNA gyrase form that the drug binds"
    ],
    "answer": 0,
    "why": "Metronidazole is a prodrug. Low-redox-potential electron-transport proteins in anaerobes reduce it to a radical that breaks DNA strands. Aerobic bacteria do not carry out this reduction, so the drug stays inactive."
  },
  {
    "id": "BAC2-035",
    "m": "m3",
    "area": "Prodrugs and TB drugs",
    "level": "application",
    "stem": "Nitrofurantoin is more selective for bacteria because bacteria produce more of which form of the drug?",
    "options": [
      "The oxidized form",
      "The reduced form",
      "The conjugated form",
      "The hydrolyzed form"
    ],
    "answer": 1,
    "why": "Bacterial nitroreductases convert more of the drug to its reduced, active form than human cells do, so bacteria are affected more."
  },
  {
    "id": "BAC2-036",
    "m": "m3",
    "area": "Prodrugs and TB drugs",
    "level": "concept",
    "stem": "Ethambutol weakens the attachment of the mycobacterial outer lipid layer to the cell wall. Synthesis of which component does it inhibit?",
    "options": [
      "Mycolic acid",
      "Arabinogalactan",
      "Peptidoglycan",
      "Folate"
    ],
    "answer": 1,
    "why": "Ethambutol inhibits arabinogalactan synthesis. Isoniazid inhibits mycolic acid synthesis."
  },
  {
    "id": "BAC2-037",
    "m": "m3",
    "area": "Prodrugs and TB drugs",
    "level": "concept",
    "stem": "Which antituberculosis drug is most active against slowly replicating bacilli in an acidic environment, such as inflamed tissue?",
    "options": [
      "Pyrazinamide",
      "Ethambutol",
      "Isoniazid",
      "Streptomycin"
    ],
    "answer": 0,
    "why": "Pyrazinamide is converted to pyrazinoic acid and works best at acidic pH, so it reaches slowly replicating bacilli. Rifampin also kills persisting bacilli, which is why both are given early in therapy. Isoniazid and ethambutol act mainly on actively growing bacilli, and streptomycin works poorly at acidic pH."
  },
  {
    "id": "BAC2-038",
    "m": "m4",
    "area": "Ribosome structure",
    "level": "concept",
    "stem": "Which rRNA is part of the small subunit of the bacterial ribosome?",
    "options": [
      "23S rRNA",
      "18S rRNA",
      "28S rRNA",
      "16S rRNA"
    ],
    "answer": 3,
    "why": "The 30S subunit contains 16S rRNA, and the 50S subunit contains 23S rRNA."
  },
  {
    "id": "BAC2-039",
    "m": "m4",
    "area": "Ribosome structure",
    "level": "concept",
    "stem": "Which statement compares bacterial and human ribosomes?",
    "options": [
      "The bacterial ribosome is 70S, and the human ribosome is smaller",
      "The bacterial ribosome is 80S, and the human ribosome is 70S",
      "The bacterial ribosome is 70S, and the human ribosome is larger",
      "Both ribosomes are 70S and identical in size"
    ],
    "answer": 2,
    "why": "The bacterial ribosome has 50S and 30S subunits. The eukaryotic ribosome is larger, with 60S and 40S subunits."
  },
  {
    "id": "BAC2-040",
    "m": "m4",
    "area": "Ribosome structure",
    "level": "application",
    "stem": "Clindamycin binds the bacterial 50S subunit and spares the human 60S subunit. Which lens prompt does this answer?",
    "options": [
      "Target",
      "Action",
      "Selective toxicity",
      "Resistance link"
    ],
    "answer": 2,
    "why": "The difference between bacterial and human ribosomes explains why the drug harms bacteria and spares the patient."
  },
  {
    "id": "BAC2-041",
    "m": "m4",
    "area": "Ribosome structure",
    "level": "application",
    "stem": "Which ribosomal feature is the exit for the growing polypeptide?",
    "options": [
      "The E site in the 30S subunit",
      "The exit tunnel in the 50S subunit",
      "The A site in the 30S subunit",
      "The mRNA groove in the 50S subunit"
    ],
    "answer": 1,
    "why": "The polypeptide leaves through the channel in the large subunit. The A, P, and E sites hold tRNAs."
  },
  {
    "id": "BAC2-042",
    "m": "m4",
    "area": "Drug classes and ribosome targets",
    "level": "concept",
    "stem": "Which drug class binds the 30S subunit and causes misreading of mRNA?",
    "options": [
      "Aminoglycosides",
      "Tetracyclines",
      "Macrolides",
      "Lincosamides"
    ],
    "answer": 0,
    "why": "Aminoglycosides inhibit initiation complex formation and cause misreading. Tetracyclines also bind 30S but block A-site entry."
  },
  {
    "id": "BAC2-043",
    "m": "m4",
    "area": "Drug classes and ribosome targets",
    "level": "application",
    "stem": "Which drug binds the 50S subunit and blocks peptide bond formation?",
    "options": [
      "Tetracyclines",
      "Aminoglycosides",
      "Linezolid",
      "Clindamycin"
    ],
    "answer": 3,
    "why": "Clindamycin blocks peptide bond formation on the 50S subunit. Linezolid blocks 70S initiation."
  },
  {
    "id": "BAC2-044",
    "m": "m4",
    "area": "Drug classes and ribosome targets",
    "level": "concept",
    "stem": "Doxycycline, minocycline, and tigecycline share which mechanism?",
    "options": [
      "Blocking peptidyl-tRNA translocation on the 50S subunit",
      "Blocking 70S initiation complex formation on the 50S subunit",
      "Causing mRNA misreading at the 30S subunit",
      "Blocking aminoacyl-tRNA entry at the 30S A site"
    ],
    "answer": 3,
    "why": "All tetracyclines bind the 30S subunit and block aminoacyl-tRNA from entering the A site."
  },
  {
    "id": "BAC2-045",
    "m": "m4",
    "area": "Drug classes and ribosome targets",
    "level": "concept",
    "stem": "Azithromycin, erythromycin, and clarithromycin belong to which class?",
    "options": [
      "Aminoglycosides",
      "Tetracyclines",
      "Macrolides",
      "Oxazolidinones"
    ],
    "answer": 2,
    "why": "Macrolides have a large 14- to 16-membered lactone ring with attached sugars and bind the 50S subunit."
  },
  {
    "id": "BAC2-046",
    "m": "m4",
    "area": "Translation mechanics and inference",
    "level": "application",
    "stem": "A drug lets the ribosome assemble and start translation, but wrong amino acids are inserted. Which class fits?",
    "options": [
      "Tetracyclines",
      "Aminoglycosides",
      "Macrolides",
      "Clindamycin"
    ],
    "answer": 1,
    "why": "Misreading of mRNA is the signature of aminoglycosides."
  },
  {
    "id": "BAC2-047",
    "m": "m4",
    "area": "Translation mechanics and inference",
    "level": "application",
    "stem": "A drug blocks aminoacyl-tRNA from entering the A site. What is the immediate effect on translation?",
    "options": [
      "No new amino acids can be added to the chain",
      "The initiation complex fails to form",
      "The ribosome misreads mRNA codons",
      "Peptidyl-tRNA leaves the P site too early"
    ],
    "answer": 0,
    "why": "With the A site blocked, the ribosome has nowhere to receive the next amino acid, so elongation stops."
  },
  {
    "id": "BAC2-048",
    "m": "m4",
    "area": "Translation mechanics and inference",
    "level": "integration",
    "stem": "A new antibiotic binds the 50S subunit and leaves tRNA stuck after it transfers its amino acid. Which existing class does it most resemble?",
    "options": [
      "Macrolides",
      "Tetracyclines",
      "Aminoglycosides",
      "Oxazolidinones"
    ],
    "answer": 0,
    "why": "Macrolides prevent tRNA from leaving the ribosome after amino acid transfer, which impairs translocation."
  },
  {
    "id": "BAC2-049",
    "m": "m4",
    "area": "Translation mechanics and inference",
    "level": "integration",
    "stem": "An isolate becomes resistant to erythromycin. Tests show the drug enters the cell normally, builds up to its usual level inside, and is not chemically altered. Which change best explains the resistance?",
    "options": [
      "A methylated 23S rRNA binding site",
      "A drug-acetylating enzyme",
      "Loss of outer-membrane porins",
      "An efflux pump that exports the drug"
    ],
    "answer": 0,
    "why": "Normal entry rules out porin loss, a normal level inside rules out efflux, and an unaltered drug rules out an inactivating enzyme. That leaves target change: methylation of 23S rRNA stops erythromycin from binding the 50S subunit."
  },
  {
    "id": "BAC2-050",
    "m": "m5",
    "area": "Routes to resistance",
    "level": "concept",
    "stem": "Which resistance route does a β-lactamase represent?",
    "options": [
      "Target change",
      "Reduced entry",
      "Drug inactivation",
      "Efflux"
    ],
    "answer": 2,
    "why": "β-Lactamases destroy the drug by cleaving the β-lactam ring, which is drug inactivation."
  },
  {
    "id": "BAC2-051",
    "m": "m5",
    "area": "Routes to resistance",
    "level": "application",
    "stem": "Loss of porin channels lowers the amount of drug that reaches the cell interior. Which resistance route is this?",
    "options": [
      "Efflux",
      "Reduced entry",
      "Drug inactivation",
      "Target change"
    ],
    "answer": 1,
    "why": "Porin loss or altered permeability limits how much drug enters the cell."
  },
  {
    "id": "BAC2-052",
    "m": "m5",
    "area": "Routes to resistance",
    "level": "application",
    "stem": "A bacterium lacks a cell wall but can resynthesize it later. Which nongenetic factor is this?",
    "options": [
      "Physical separation from the antibiotic",
      "Survival as a protoplast",
      "A resting state",
      "Foreign body colonization"
    ],
    "answer": 1,
    "why": "Organisms that survive as protoplasts avoid wall-active drugs and can rebuild the wall later."
  },
  {
    "id": "BAC2-053",
    "m": "m5",
    "area": "Routes to resistance",
    "level": "integration",
    "stem": "A prosthetic joint infection persists even though the isolate tests susceptible to the drug in the laboratory. Which explanation is most likely?",
    "options": [
      "A foreign body that shields bacteria from the drug",
      "A plasmid-mediated enzyme that cleaves the drug",
      "A chromosomal mutation that alters the target",
      "A pump that exports the drug from the cell"
    ],
    "answer": 0,
    "why": "A susceptible laboratory result means the isolate itself lacks the resistance enzyme, target change, or pump, so those genetic mechanisms do not explain the failure. Bacteria on a foreign body sit apart from the antibiotic and are shielded from it."
  },
  {
    "id": "BAC2-054",
    "m": "m5",
    "area": "Escape mechanisms by drug",
    "level": "application",
    "stem": "Which mechanism gives Gram-negative bacteria high-level resistance to penicillins?",
    "options": [
      "Narrowed outer-membrane porins",
      "Plasmid-mediated β-lactamase",
      "Increased efflux pump activity",
      "Reduced autolysin activity"
    ],
    "answer": 1,
    "why": "Plasmid-mediated β-lactamase production destroys the drug and gives high-level resistance. Narrowed porins and efflux lower the amount of drug that arrives, which gives low-level resistance. Autolysins are not the drug target."
  },
  {
    "id": "BAC2-055",
    "m": "m5",
    "area": "Escape mechanisms by drug",
    "level": "concept",
    "stem": "Which set of enzyme reactions inactivates aminoglycosides?",
    "options": [
      "Methylation, hydroxylation, and sulfation",
      "Oxidation, reduction, and hydrolysis",
      "Adenylylation, acetylation, and phosphorylation",
      "Glycosylation, deamination, and transamination"
    ],
    "answer": 2,
    "why": "Aminoglycoside-modifying enzymes adenylylate, acetylate, or phosphorylate the drug."
  },
  {
    "id": "BAC2-056",
    "m": "m5",
    "area": "Escape mechanisms by drug",
    "level": "concept",
    "stem": "Which change reduces erythromycin binding to its target?",
    "options": [
      "Acetylation of the drug",
      "Loss of porins",
      "Methylation of 23S rRNA",
      "Altered DNA gyrase"
    ],
    "answer": 2,
    "why": "A plasmid-mediated enzyme methylates 23S rRNA so erythromycin no longer binds."
  },
  {
    "id": "BAC2-057",
    "m": "m5",
    "area": "Escape mechanisms by drug",
    "level": "integration",
    "stem": "A strain resists fluoroquinolones through chromosomal mutations. Which alteration is most likely?",
    "options": [
      "An altered RNA polymerase",
      "An altered DNA gyrase",
      "A drug acetyltransferase",
      "A modified peptidoglycan peptide"
    ],
    "answer": 1,
    "why": "Chromosomal mutations alter DNA gyrase, the target of the quinolones. Altered RNA polymerase is the rifampin pattern."
  },
  {
    "id": "BAC2-058",
    "m": "m5",
    "area": "MIC, MBC, and susceptibility reports",
    "level": "concept",
    "stem": "In a broth dilution series, which value is read from the lowest drug concentration that prevents visible growth?",
    "options": [
      "Minimum inhibitory concentration",
      "Minimum bactericidal concentration",
      "Susceptibility breakpoint",
      "Serum bactericidal titer"
    ],
    "answer": 0,
    "why": "The MIC is the lowest concentration with no visible growth. The MBC is found by subculturing clear tubes to see which concentration killed the organisms. A breakpoint is the cutoff used to interpret an MIC, and a serum bactericidal titer is measured on the patient's serum."
  },
  {
    "id": "BAC2-059",
    "m": "m5",
    "area": "MIC, MBC, and susceptibility reports",
    "level": "application",
    "stem": "A tube at 8 µg/mL is clear, but its subculture grows colonies. Which statement fits?",
    "options": [
      "8 µg/mL is at or above both the MIC and the MBC",
      "8 µg/mL equals the MBC",
      "8 µg/mL is below both the MIC and the MBC",
      "8 µg/mL is at or above the MIC and below the MBC"
    ],
    "answer": 3,
    "why": "A clear tube means growth was inhibited, so the concentration reaches the MIC. Colonies on subculture show the organisms were not killed, so it is below the MBC."
  },
  {
    "id": "BAC2-060",
    "m": "m5",
    "area": "MIC, MBC, and susceptibility reports",
    "level": "concept",
    "stem": "A disk diffusion test reports which measurement?",
    "options": [
      "The lowest clear tube concentration",
      "The percentage of susceptible isolates",
      "The serum killing titer",
      "The diameter of the zone of inhibition"
    ],
    "answer": 3,
    "why": "Disk diffusion yields a zone diameter. Tube dilution yields the MIC."
  },
  {
    "id": "BAC2-061",
    "m": "m5",
    "area": "MIC, MBC, and susceptibility reports",
    "level": "integration",
    "stem": "A clinician needs a quick guide for empiric therapy before culture results return. Which resource fits?",
    "options": [
      "The patient's own MIC report",
      "The facility antibiogram",
      "The drug's package-insert spectrum list",
      "A serum bactericidal titer"
    ],
    "answer": 1,
    "why": "The patient's own results are not back yet, and a package insert does not reflect local resistance. An antibiogram summarizes susceptibility across the facility, so it is used to guide empiric therapy."
  },
  {
    "id": "BAC2-062",
    "m": "m5",
    "area": "Stewardship and combinations",
    "level": "concept",
    "stem": "Which practice supports antibiotic stewardship?",
    "options": [
      "Starting the broadest drug for each patient",
      "Using the narrowest drug that covers the organism",
      "Prescribing antibiotics for self-limiting infections",
      "Continuing antibiotics after a viral cause is confirmed"
    ],
    "answer": 1,
    "why": "Stewardship favors targeted, narrow-spectrum therapy for the shortest duration that achieves the effect."
  },
  {
    "id": "BAC2-063",
    "m": "m5",
    "area": "Stewardship and combinations",
    "level": "application",
    "stem": "Which reason justifies starting two antibiotics together?",
    "options": [
      "A serious infection before the organism is identified",
      "A self-limiting upper respiratory infection",
      "Routine prophylaxis before and after surgery",
      "A mild infection with a known, susceptible organism"
    ],
    "answer": 0,
    "why": "Combinations are appropriate when a serious infection is treated before identification, when synergy is desired, or to prevent resistance."
  },
  {
    "id": "BAC2-064",
    "m": "m5",
    "area": "Stewardship and combinations",
    "level": "application",
    "stem": "A patient with reduced renal function needs an antibiotic. Which dosing approach fits stewardship?",
    "options": [
      "Dose adjustment based on estimated filtration rate",
      "Doubling the dose to offset lower clearance",
      "Switching to a broader-spectrum drug",
      "Using the standard dose without change"
    ],
    "answer": 0,
    "why": "Patients with reduced renal function may need dose adjustment based on GFR to limit adverse effects. A standard or doubled dose can accumulate and cause toxicity."
  },
  {
    "id": "BAC2-065",
    "m": "m6",
    "area": "Active and passive immunity",
    "level": "concept",
    "stem": "Which type of immunity results from a vaccine that makes the patient produce antibodies?",
    "options": [
      "Passive immunity",
      "Passive-active immunity",
      "Innate immunity",
      "Active immunity"
    ],
    "answer": 3,
    "why": "Vaccines supply antigens that elicit the patient's own antibodies, which is active immunity."
  },
  {
    "id": "BAC2-066",
    "m": "m6",
    "area": "Active and passive immunity",
    "level": "concept",
    "stem": "Which product provides passive immunity?",
    "options": [
      "Tetanus toxoid",
      "Diphtheria toxoid",
      "Botulinum antitoxin",
      "Acellular pertussis vaccine"
    ],
    "answer": 2,
    "why": "An antitoxin is pre-formed antibody. Toxoids and vaccines are active immunization."
  },
  {
    "id": "BAC2-067",
    "m": "m6",
    "area": "Active and passive immunity",
    "level": "application",
    "stem": "Which statement compares a vaccine with an immune globulin?",
    "options": [
      "A vaccine acts immediately, while an immune globulin builds long-term memory",
      "A vaccine builds long-term memory, while an immune globulin acts immediately",
      "Both build long-term memory within hours",
      "Both act immediately and last for years"
    ],
    "answer": 1,
    "why": "Immune globulins supply antibody at once but fade. Vaccines take time but produce immune memory."
  },
  {
    "id": "BAC2-068",
    "m": "m6",
    "area": "Active and passive immunity",
    "level": "application",
    "stem": "A patient receives a monoclonal antibody that binds Clostridioides difficile toxin B. Which type of immunity does this provide?",
    "options": [
      "Active immunity",
      "Passive immunity",
      "Passive-active immunity",
      "Innate immunity"
    ],
    "answer": 1,
    "why": "A pre-formed antibody gives passive immunity: protection starts at once but fades, and no memory forms. Passive-active immunity pairs an antibody with a vaccine. Bezlotoxumab, the antibody that worked this way, was discontinued in the US in 2025, but it still illustrates the category."
  },
  {
    "id": "BAC2-069",
    "m": "m6",
    "area": "Vaccine platforms",
    "level": "concept",
    "stem": "Which vaccine platform contains a weakened organism?",
    "options": [
      "Live attenuated",
      "Toxoid",
      "Conjugate",
      "Inactivated whole-cell"
    ],
    "answer": 0,
    "why": "Live attenuated vaccines such as BCG use a weakened organism."
  },
  {
    "id": "BAC2-070",
    "m": "m6",
    "area": "Vaccine platforms",
    "level": "concept",
    "stem": "Acellular pertussis and anthrax vaccines contain selected antigens. Which platform is this?",
    "options": [
      "Conjugate",
      "Live attenuated",
      "Inactivated whole-cell",
      "Protein / subunit"
    ],
    "answer": 3,
    "why": "Protein or subunit vaccines contain selected antigens rather than the whole organism. Acellular pertussis vaccines include pertussis toxoid among several purified proteins, so they are classed as subunit vaccines."
  },
  {
    "id": "BAC2-071",
    "m": "m6",
    "area": "Vaccine platforms",
    "level": "concept",
    "stem": "A pertussis vaccine contains killed organisms. Which platform is this?",
    "options": [
      "Live attenuated",
      "Toxoid",
      "Inactivated whole-cell",
      "Conjugate"
    ],
    "answer": 2,
    "why": "Inactivated whole-cell vaccines use killed organisms."
  },
  {
    "id": "BAC2-072",
    "m": "m6",
    "area": "Vaccine platforms",
    "level": "application",
    "stem": "An infant with severe combined immunodeficiency is due for routine vaccines. Which vaccine should be withheld?",
    "options": [
      "Hib conjugate",
      "Tetanus toxoid",
      "BCG",
      "Acellular pertussis"
    ],
    "answer": 2,
    "why": "BCG is a live attenuated vaccine and can cause disseminated infection in a severely immunocompromised host. Conjugate, toxoid, and subunit vaccines contain no living organism, so they are safe to give."
  },
  {
    "id": "BAC2-073",
    "m": "m6",
    "area": "Infection control",
    "level": "concept",
    "stem": "Which process is defined by destruction of bacterial spores along with other microorganisms?",
    "options": [
      "Disinfection",
      "Sterilization",
      "Antisepsis",
      "Cleaning"
    ],
    "answer": 1,
    "why": "Sterilization eliminates every microorganism, including spores. Disinfection does not necessarily eliminate spores."
  },
  {
    "id": "BAC2-074",
    "m": "m6",
    "area": "Infection control",
    "level": "application",
    "stem": "Which method suits heat-stable critical equipment?",
    "options": [
      "Steam sterilization",
      "Sterile filtration",
      "Antisepsis",
      "Surface disinfection"
    ],
    "answer": 0,
    "why": "Steam is reliable and preferred for compatible critical items that enter sterile tissue or the vascular system."
  },
  {
    "id": "BAC2-075",
    "m": "m6",
    "area": "Infection control",
    "level": "application",
    "stem": "A chemical is applied to skin before an injection. Which term describes this?",
    "options": [
      "Disinfection",
      "Sterilization",
      "Cleaning",
      "Antisepsis"
    ],
    "answer": 3,
    "why": "Antiseptics are used on living tissue. Disinfectants are used on inanimate surfaces."
  },
  {
    "id": "BAC2-076",
    "m": "m6",
    "area": "Infection control",
    "level": "application",
    "stem": "Which step removes soil and improves both disinfection and sterilization?",
    "options": [
      "Antisepsis",
      "Sterile filtration",
      "High-level disinfection",
      "Cleaning"
    ],
    "answer": 3,
    "why": "Cleaning removes soil first, which improves either process. Soil left on a surface shields organisms and inactivates chemical disinfectants."
  },
  {
    "id": "BAC2-077",
    "m": "m6",
    "area": "Infection control",
    "level": "application",
    "stem": "A patient is admitted with suspected meningococcal meningitis. Which precautions are added to standard precautions until 24 hours of effective therapy?",
    "options": [
      "Contact precautions",
      "Airborne precautions",
      "Droplet precautions",
      "Protective-environment precautions"
    ],
    "answer": 2,
    "why": "Neisseria meningitidis spreads by respiratory droplets, so droplet precautions are added until the patient has had 24 hours of effective therapy. Airborne precautions are for agents such as tuberculosis and measles that stay suspended in air, and a protective environment shields immunocompromised patients rather than containing an infection."
  },
  {
    "id": "BAC2-078",
    "m": "m2",
    "area": "β-Lactams, PBPs, and β-lactamases",
    "level": "concept",
    "stem": "Ceftazidime-avibactam covers many organisms that produce serine carbapenemases such as KPC. Which producers does it leave uncovered?",
    "options": [
      "Extended-spectrum β-lactamase producers",
      "Metallo-β-lactamase producers",
      "AmpC producers"
    ],
    "answer": 1,
    "why": "Metallo-β-lactamases use zinc ions, and the standard β-lactamase inhibitors do not work against them. Avibactam covers serine enzymes such as KPC."
  },
  {
    "id": "BAC2-079",
    "m": "m2",
    "area": "β-Lactams, PBPs, and β-lactamases",
    "level": "application",
    "stem": "A Gram-negative isolate produces a serine carbapenemase (KPC). Which combination is active against many isolates that produce this enzyme?",
    "options": [
      "Amoxicillin-clavulanate",
      "Ceftazidime-avibactam",
      "Piperacillin-tazobactam"
    ],
    "answer": 1,
    "why": "Avibactam inhibits serine carbapenemases such as KPC, so it protects ceftazidime. Clavulanate and tazobactam do not reliably inhibit KPC, so amoxicillin and piperacillin are still hydrolyzed."
  },
  {
    "id": "BAC2-080",
    "m": "m3",
    "area": "Prodrugs and TB drugs",
    "level": "concept",
    "stem": "Pyrazinamide is inactive until a mycobacterial enzyme converts it to pyrazinoic acid. Which enzyme performs this activation?",
    "options": [
      "Amidase",
      "Catalase-peroxidase (KatG)",
      "Nitroreductase",
      "Transpeptidase"
    ],
    "answer": 0,
    "why": "A mycobacterial amidase converts pyrazinamide to pyrazinoic acid. KatG activates isoniazid, and bacterial nitroreductases activate nitrofurantoin."
  },
  {
    "id": "BAC2-081",
    "m": "m3",
    "area": "Prodrugs and TB drugs",
    "level": "application",
    "stem": "A Mycobacterium tuberculosis isolate loses the catalase-peroxidase that activates isoniazid. Which outcome is expected?",
    "options": [
      "Greater susceptibility to isoniazid, because more drug remains",
      "Resistance to rifampin, because RNA polymerase changes",
      "Unchanged susceptibility, because isoniazid is active as given",
      "Resistance to isoniazid, because the prodrug stays inactive"
    ],
    "answer": 3,
    "why": "Isoniazid is a prodrug. Because activation happens inside the organism, resistance can arise simply by losing or mutating the activating enzyme."
  },
  {
    "id": "BAC2-082",
    "m": "m3",
    "area": "Prodrugs and TB drugs",
    "level": "concept",
    "stem": "Which pair of antituberculosis drugs are both prodrugs that must be activated inside the mycobacterium?",
    "options": [
      "Isoniazid and ethambutol",
      "Ethambutol and rifampin",
      "Isoniazid and pyrazinamide",
      "Rifampin and pyrazinamide"
    ],
    "answer": 2,
    "why": "Isoniazid (activated by KatG) and pyrazinamide (activated by an amidase) both depend on activation inside the mycobacterium. Ethambutol and rifampin act as given."
  },
  {
    "id": "BAC2-083",
    "m": "m5",
    "area": "Escape mechanisms by drug",
    "level": "concept",
    "stem": "Which gene encodes the altered penicillin-binding protein PBP2a in MRSA?",
    "options": [
      "sul1",
      "mecA",
      "dfrA",
      "tetA"
    ],
    "answer": 1,
    "why": "The mecA gene, or less commonly mecC, encodes PBP2a, which has markedly reduced affinity for nearly all β-lactams."
  },
  {
    "id": "BAC2-084",
    "m": "m5",
    "area": "Escape mechanisms by drug",
    "level": "application",
    "stem": "A β-lactamase inhibitor is combined with a β-lactam to treat MRSA. Which outcome fits the resistance mechanism?",
    "options": [
      "Full restoration, because the inhibitor blocks PBP2a",
      "Little restoration, because PBP2a is not a β-lactamase",
      "Partial restoration, because the inhibitor kills the organism",
      "Greater resistance, because the inhibitor induces PBP2a"
    ],
    "answer": 1,
    "why": "MRSA resists β-lactams through PBP2a, an altered PBP with low affinity for the drug, not through a β-lactamase. β-Lactamase inhibitors therefore do not restore β-lactam activity against MRSA."
  },
  {
    "id": "BAC2-085",
    "m": "m5",
    "area": "Escape mechanisms by drug",
    "level": "integration",
    "stem": "How does vancomycin resistance in enterococci (D-Ala-D-Lac in place of D-Ala-D-Ala) differ from resistance in MRSA?",
    "options": [
      "It alters the substrate the drug binds, whereas MRSA alters the enzyme the drug inhibits",
      "It destroys the drug with an enzyme, whereas MRSA pumps the drug out of the cell",
      "It blocks drug entry through the porins, whereas MRSA modifies the drug itself",
      "It alters the ribosomal target, whereas MRSA alters the cell wall substrate"
    ],
    "answer": 0,
    "why": "Vancomycin binds a substrate, and the resistant organism changes that substrate. PBP2a changes the enzyme that β-lactams inhibit."
  },
  {
    "id": "BAC2-086",
    "m": "m5",
    "area": "MIC, MBC, and susceptibility reports",
    "level": "concept",
    "stem": "Which category means an infection is unlikely to respond even at maximum safe dosing?",
    "options": [
      "Resistant",
      "Intermediate",
      "Susceptible"
    ],
    "answer": 0,
    "why": "Resistant (R) means unlikely to respond even at maximum safe dosing. Intermediate (I) may respond at higher dosing or when the drug concentrates at the infection site, and susceptible (S) is likely to respond to standard dosing."
  },
  {
    "id": "BAC2-087",
    "m": "m5",
    "area": "MIC, MBC, and susceptibility reports",
    "level": "application",
    "stem": "Drug X has an MIC of 2 µg/mL and Drug Y has an MIC of 8 µg/mL against the same isolate. How should a pharmacist interpret the two values?",
    "options": [
      "Select the drug with the lower MIC value",
      "Select the drug with the higher MIC value",
      "Compare each MIC with the breakpoint for that drug and organism",
      "Average the two MIC values to set a common breakpoint"
    ],
    "answer": 2,
    "why": "An MIC becomes clinically useful once it is compared with a breakpoint, and breakpoints are specific to each drug-organism pair. Raw MIC values from different drugs are not compared."
  },
  {
    "id": "BAC2-088",
    "m": "m5",
    "area": "MIC, MBC, and susceptibility reports",
    "level": "application",
    "stem": "An isolate is reported as Intermediate for a drug that reaches high levels in urine, and the bladder is the infected tissue. Which expectation fits?",
    "options": [
      "It is unlikely to respond, even at maximum safe dosing",
      "It is likely to respond to standard dosing, like a susceptible result",
      "It may respond, because the drug concentrates at the infection site",
      "Its response is independent of the reported category"
    ],
    "answer": 2,
    "why": "Intermediate means the infection may respond at higher dosing or when the drug concentrates at the site of infection, as urinary drugs do in the bladder."
  },
  {
    "id": "BAC2-089",
    "m": "m6",
    "area": "Vaccine platforms",
    "level": "concept",
    "stem": "Plain polysaccharide vaccines trigger which kind of B-cell response?",
    "options": [
      "A T-dependent response",
      "A T-independent response",
      "A cytotoxic T-cell response",
      "A complement-mediated response"
    ],
    "answer": 1,
    "why": "B cells respond directly to the polysaccharide without T-cell help, giving a weaker, shorter-lived response with little immune memory."
  },
  {
    "id": "BAC2-090",
    "m": "m6",
    "area": "Vaccine platforms",
    "level": "application",
    "stem": "An infant needs protection against Haemophilus influenzae type b. Why is a conjugate vaccine chosen over a plain polysaccharide vaccine?",
    "options": [
      "The carrier protein recruits T-cell help and immune memory",
      "The live organism replicates and boosts immunity",
      "The pre-formed antibody gives immediate protection",
      "The adjuvant bypasses B cells and limits side effects"
    ],
    "answer": 0,
    "why": "Infants respond poorly to plain polysaccharide antigens. Linking the polysaccharide to a carrier protein converts the response to T-dependent, with a stronger response, memory, and effective boosters."
  },
  {
    "id": "BAC2-091",
    "m": "m6",
    "area": "Vaccine platforms",
    "level": "integration",
    "stem": "PPSV23 is reserved for older children and adults, whereas Hib, PCV, and MenACWY are given as conjugates in infants. Which explanation links these choices?",
    "options": [
      "Infants make excessive antibody to plain polysaccharide antigens, and conjugation dampens it",
      "Conjugation lets the vaccine replicate, which extends exposure in infants",
      "Older children lack B cells that recognize polysaccharide antigens",
      "Infants respond poorly to plain polysaccharide antigens, and conjugation adds T-cell help"
    ],
    "answer": 3,
    "why": "Plain polysaccharide vaccines give a T-independent response that is poor in young children. Conjugate vaccines add T-cell help, which is why they are used in infants."
  }
];
