/* ============================================================
   BANK — Bacteria III · Cocci and Rods
   Pure content: checkpoints, flashcards, and the module-quiz /
   mastery-exam question pool. No DOM, no dependency on shared/.
   Sourced only from the lecture's VISIBLE slides (1-85); slides
   86-100 are hidden in the source deck and are not used anywhere
   in this file.

   STATUS: Module 1 only. Modules 2-6 and the cumulative Mastery
   Challenge pool will be appended here in later work sessions —
   see the note at the top of bacteria3.manifest.js.
   ============================================================ */
var TOPIC_ID    = 'bacteria3';
var TOPIC_TITLE = 'Bacteria III \u00b7 Cocci and Rods';

/* ---------- CHECKPOINTS (in-section "can you predict it?" questions) ---------- */
var CHECKPOINTS = {

  /* m1s1 — staph vs strep at a glance (slides 6-7) */
  c1a: {
    options: ['Staphylococcus', 'Streptococcus', 'Enterococcus', 'Neisseria'],
    answer: 0,
    why: 'Catalase is the first branch point among the gram-positive cocci: Staphylococcus is catalase-positive, while Streptococcus and Enterococcus are both catalase-negative. Neisseria is a gram-negative diplococcus, so it would already be excluded by the Gram stain itself.'
  },
  c1b: {
    options: ['Streptococcus', 'Staphylococcus', 'Corynebacterium', 'Bacillus'],
    answer: 0,
    why: 'Streptococcus characteristically grows in chains, while Staphylococcus grows in grape-like clusters. Corynebacterium and Bacillus are both gram-positive rods, not cocci, so the chain arrangement already rules them out.'
  },

  /* m1s2 — sorting the staphylococci (slides 8-11) */
  c2a: {
    options: ['A positive coagulase test', 'A positive catalase test', 'Growth in grape-like clusters', 'A gram-positive cell wall'],
    answer: 0,
    why: 'Coagulase is the defining split: S. aureus is coagulase-positive, while S. epidermidis and S. saprophyticus are both coagulase-negative. Catalase activity, clustered growth, and the gram-positive cell wall are shared by all three species, so none of those separates S. aureus from the others.'
  },
  c2b: {
    options: ['Staphylococcus epidermidis', 'Staphylococcus saprophyticus', 'Staphylococcus aureus', 'Streptococcus agalactiae'],
    answer: 0,
    why: 'S. epidermidis is novobiocin-susceptible and is the classic cause of catheter- and device-associated infections through biofilm formation. S. saprophyticus is novobiocin-resistant and instead causes urinary tract infections; S. aureus would be coagulase-positive, and S. agalactiae is a Streptococcus, not a Staphylococcus.'
  },
  c2c: {
    options: ['Staphylococcus saprophyticus', 'Staphylococcus epidermidis', 'Staphylococcus aureus', 'Enterococcus faecalis'],
    answer: 0,
    why: 'S. saprophyticus is novobiocin-resistant and community-acquired, and is a classic cause of UTI in young women. S. epidermidis is novobiocin-susceptible and associated with devices instead; S. aureus is coagulase-positive, and Enterococcus is a different genus altogether.'
  },

  /* m1s3 — sorting the streptococci and enterococcus (slides 20-21, 26, 29) */
  c3a: {
    options: ['Streptococcus pyogenes (group A)', 'Streptococcus agalactiae (group B)', 'Streptococcus pneumoniae', 'Enterococcus faecalis'],
    answer: 0,
    why: 'Beta-hemolysis with bacitracin sensitivity identifies group A Streptococcus (S. pyogenes). Group B Streptococcus (S. agalactiae) is also beta-hemolytic but is bacitracin-resistant and CAMP-positive instead. S. pneumoniae is alpha-hemolytic, and Enterococcus is typically nonhemolytic.'
  },
  c3b: {
    options: ['Streptococcus pneumoniae', 'Viridans streptococci', 'Streptococcus agalactiae', 'Enterococcus faecalis'],
    answer: 0,
    why: 'Optochin sensitivity distinguishes S. pneumoniae from the viridans streptococci, which share the same alpha-hemolytic pattern but resist optochin. S. agalactiae and Enterococcus produce different hemolysis patterns altogether (beta, and typically none).'
  },
  c3c: {
    options: ['Enterococcus', 'Streptococcus pyogenes', 'Staphylococcus epidermidis', 'Streptococcus pneumoniae'],
    answer: 0,
    why: 'Enterococcus is catalase-negative, typically nonhemolytic, part of normal colon flora, and a well-known cause of urinary tract infection and endocarditis. S. pyogenes and S. pneumoniae are both hemolytic and live in the throat rather than the colon, and S. epidermidis is a catalase-positive Staphylococcus.'
  },

  /* m2s1 — S. aureus: from factor to disease (slides 12-15) */
  c4a: {
    options: ['Toxic shock syndrome toxin (TSST-1)', 'Enterotoxin', 'Exfoliatin', 'Alpha toxin'],
    answer: 0,
    why: 'TSST-1 is the superantigen responsible for toxic shock syndrome, triggering massive cytokine release. Enterotoxin instead causes staphylococcal food poisoning by acting directly on the gut; exfoliatin is a protease that separates skin layers, and alpha toxin pokes holes in cell membranes.'
  },
  c4b: {
    options: ['Exfoliatin', 'Alpha toxin', 'Enterotoxin', 'Panton-Valentine (P-V) leukocidin'],
    answer: 0,
    why: 'Exfoliatin is a protease that cleaves desmoglein, a protein that holds skin cells together, causing the separation seen in scalded skin syndrome. Alpha toxin instead pokes holes in cell membranes; enterotoxin acts on the gut, and P-V leukocidin damages and kills leukocytes.'
  },
  c4c: {
    options: ['Coagulase', 'Hyaluronidase', 'Fibrinolysin (staphylokinase)', 'Protein A'],
    answer: 0,
    why: 'Coagulase clots plasma, helping wall off the infected site. Hyaluronidase instead breaks down hyaluronic acid to help the organism spread; fibrinolysin (staphylokinase) does the opposite of coagulase by lysing thrombi, and Protein A blocks complement-mediated opsonization rather than clotting anything.'
  },

  /* m2s2 — Group A strep: a case that unfolds (slides 22-25) */
  c5a: {
    options: ['M protein', 'Streptolysin O', 'DNase', 'Hyaluronidase'],
    answer: 0,
    why: 'M protein is the most important virulence factor of S. pyogenes; it inactivates C3b, preventing complement-mediated phagocytosis. Streptolysin O causes hemolysis, DNase thins pus to aid spread, and hyaluronidase degrades connective tissue.'
  },
  c5b: {
    options: ['Erythrogenic toxin', 'Streptolysin S', 'DNase', 'IgG-degrading enzyme'],
    answer: 0,
    why: 'Erythrogenic toxin is a superantigen that produces the scarlet fever rash. Streptolysin S causes hemolysis but is not antigenic; DNase thins pus, and the IgG-degrading enzyme blocks opsonization rather than producing a rash.'
  },
  c5c: {
    options: ['An immune-mediated complication (glomerulonephritis)', 'Direct bacterial invasion of the kidney', 'A recurrence of the original throat infection', 'A toxin-mediated effect identical to the original infection'],
    answer: 0,
    why: 'Acute glomerulonephritis is an immune-mediated complication that appears weeks after the triggering infection, caused by the immune response rather than ongoing bacterial invasion. This is why antibiotics given for the original throat infection prevent rheumatic fever but not glomerulonephritis.'
  },

  /* m2s3 — the rest of the gram-positive cocci in disease (slides 27-31) */
  c6a: {
    options: ['Capsular polysaccharide', 'Pneumolysin', 'IgA protease', 'Lipoteichoic acid'],
    answer: 0,
    why: 'The capsular polysaccharide is the major antiphagocytic virulence factor of S. pneumoniae. Pneumolysin instead causes hemolysis, IgA protease facilitates mucosal colonization by breaking down IgA, and lipoteichoic acid activates complement.'
  },
  c6b: {
    options: ['Streptococcus pneumoniae', 'Viridans streptococci', 'Enterococcus faecalis', 'Staphylococcus epidermidis'],
    answer: 0,
    why: 'The spleen normally clears encapsulated organisms from the blood; without it, encapsulated pathogens like S. pneumoniae cause more severe, harder-to-clear infections. Viridans streptococci, enterococcus, and S. epidermidis are not the classic asplenia risk in this lecture.'
  },
  c6c: {
    options: ['Antibiotics during labor', 'Antibiotics immediately upon a positive screen', 'No treatment unless the newborn becomes symptomatic', 'Antifungal prophylaxis'],
    answer: 0,
    why: 'Mothers who screen positive for group B strep receive antibiotics during labor to prevent transmission and neonatal sepsis, rather than being treated immediately at the time of the positive screen or withholding treatment until the newborn is symptomatic.'
  },

  /* m3s1 — meningococcus or gonococcus? (slides 33, 35, 37, 79) */
  c7a: {
    options: ['Maltose fermentation', 'Catalase', 'Coagulase', 'Optochin sensitivity'],
    answer: 0,
    why: 'Both organisms are gram-negative diplococci, so a sugar fermentation test is used: N. meningitidis ferments maltose, while N. gonorrhoeae does not. Catalase, coagulase, and optochin are tests used to sort the gram-positive cocci, not Neisseria.'
  },
  c7b: {
    options: ['Neisseria gonorrhoeae', 'Neisseria meningitidis', 'Streptococcus pneumoniae', 'Enterococcus'],
    answer: 0,
    why: 'Seeing gram-negative diplococci inside neutrophils on a urethral or cervical Gram stain is a classic finding for N. gonorrhoeae. N. meningitidis is instead typically recovered from blood or CSF, not a genital specimen.'
  },
  c7c: {
    options: ['Factor H binding protein (FHBP)', 'Pili', 'Endotoxin', 'IgA protease'],
    answer: 0,
    why: 'Factor H binding protein lets N. meningitidis avoid phagocytosis by binding Factor H, and it is the immunogen used in the MenB vaccine. Pili are the defining attachment factor of N. gonorrhoeae instead; endotoxin and IgA protease are shared by both organisms.'
  },

  /* m3s2 — meningococcus: treatment, prophylaxis, and vaccines (slide 36) */
  c8a: {
    options: ['Ceftriaxone or penicillin G', 'Doxycycline or azithromycin', 'Vancomycin or linezolid', 'Rifampin or ciprofloxacin'],
    answer: 0,
    why: 'Ceftriaxone or penicillin G are first-line treatment for meningococcal disease. Rifampin, ceftriaxone, and ciprofloxacin are used for prophylaxis of close contacts rather than treatment of the infected patient.'
  },
  c8b: {
    options: ['Chemoprophylaxis with rifampin, ceftriaxone, or ciprofloxacin', 'No action unless symptoms develop', 'Immediate vaccination only, with no antibiotics', 'Treatment with the same ceftriaxone course as the patient'],
    answer: 0,
    why: 'Close contacts of a meningococcal case receive chemoprophylaxis (rifampin, ceftriaxone, or ciprofloxacin) to eliminate nasopharyngeal carriage and prevent secondary cases, regardless of symptoms.'
  },
  c8c: {
    options: ['MenB', 'MenACWY', 'Pneumococcal conjugate vaccine', 'MMR'],
    answer: 0,
    why: 'MenB vaccines use Factor H binding protein as their immunogen. MenACWY instead targets the polysaccharide capsule of serogroups A, C, W, and Y.'
  },

  /* m3s3 — gonococcus: treatment and prevention (slides 38-39) */
  c9a: {
    options: ['Ceftriaxone 500 mg IM, single dose', 'Doxycycline 100 mg twice daily for 7 days', 'Penicillin G single dose', 'Azithromycin single dose'],
    answer: 0,
    why: 'Ceftriaxone 500 mg IM as a single dose is the standard treatment for uncomplicated gonococcal infection. Doxycycline is added only when chlamydia has not been excluded, and routine azithromycin dual therapy has been dropped.'
  },
  c9b: {
    options: ['Doxycycline 100 mg twice daily for 7 days', 'Azithromycin as routine dual therapy', 'A second dose of ceftriaxone', 'Erythromycin ointment'],
    answer: 0,
    why: 'When chlamydia has not been excluded, doxycycline 100 mg twice daily for 7 days is added to ceftriaxone. Routine azithromycin dual therapy for this purpose has been dropped from current guidance.'
  },
  c9c: {
    options: ['Erythromycin ointment applied at birth', 'A maternal vaccine given during pregnancy', 'Oral doxycycline given to the newborn', 'There is no effective prevention'],
    answer: 0,
    why: "Erythromycin ointment applied to the newborn's eyes at birth prevents gonococcal conjunctivitis. There is no vaccine against N. gonorrhoeae."
  },

  /* m4s1 — anthrax: which door did it come through? (slides 41-43) */
  c10a: {
    options: ['Cutaneous', 'Pulmonary (inhalation)', 'Gastrointestinal', 'Bloodstream via a contaminated needle'],
    answer: 0,
    why: 'Cutaneous anthrax, where spores enter through a break in the skin, accounts for nearly all cases and produces the classic black eschar. Inhalation anthrax is rarer but far more dangerous.'
  },
  c10b: {
    options: ['Edema factor', 'Protective antigen', 'Lethal factor', 'Capsule'],
    answer: 0,
    why: 'Edema factor is an adenylate cyclase that raises cAMP, contributing to the tissue edema seen in anthrax. Protective antigen binds host cells to deliver the other two components, and lethal factor is a protease that causes cell death.'
  },

  /* m4s2 — the toxin mechanism challenge (slides 44-47) */
  c11a: {
    options: ['Botulinum toxin', 'Tetanus toxin', 'Lecithinase (C. perfringens alpha toxin)', 'Diphtheria toxin'],
    answer: 0,
    why: 'Botulinum toxin blocks acetylcholine release, so muscles cannot contract, producing a limp, descending paralysis. Tetanus toxin instead blocks inhibitory neurotransmitters, and lecithinase destroys cell membranes directly.'
  },
  c11b: {
    options: ['Tetanus toxin', 'Botulinum toxin', 'Lecithinase', 'Diphtheria toxin'],
    answer: 0,
    why: 'Tetanus toxin blocks glycine and GABA release in the spinal cord, so motor neurons fire without their normal brakes, producing muscle spasms and the arched-back posture called opisthotonos.'
  },
  c11c: {
    options: ['Penicillin may antagonize GABA', 'Penicillin does not treat gram-positive organisms', 'Metronidazole also serves as the antitoxin', 'Penicillin cannot be given with antitoxin'],
    answer: 0,
    why: 'Some sources avoid penicillin in tetanus because it may antagonize GABA, working against the goal of restoring inhibitory neurotransmission; metronidazole is preferred instead.'
  },

  /* m4s3 — C. difficile: the antibiotic-associated cycle (slides 49-52) */
  c12a: {
    options: ['They suppress the normal colon flora that would otherwise resist C. difficile', 'They directly stimulate toxin production by C. difficile', 'They kill C. difficile spores, triggering a compensatory overgrowth', 'They are ineffective against all gram-positive organisms'],
    answer: 0,
    why: 'Antibiotics that suppress the normal, protective colon flora create an opening for C. difficile spores to germinate and cause disease. The antibiotics do not directly stimulate toxin production or kill the spores, which resist many agents, including alcohol.'
  },
  c12b: {
    options: ['Fidaxomicin', 'Metronidazole', 'Ciprofloxacin', 'Amoxicillin'],
    answer: 0,
    why: 'Fidaxomicin is preferred for both an initial episode and for recurrences, with fewer recurrences than vancomycin. Oral vancomycin is an acceptable alternative; metronidazole is reserved for when the other agents are hard to obtain.'
  },
  c12c: {
    options: ['C. difficile spores are not killed by alcohol', 'Alcohol hand rub causes antibiotic resistance', 'Soap and water is faster to use in a hospital setting', 'Alcohol hand rub can trigger a C. difficile flare in colonized patients'],
    answer: 0,
    why: 'C. difficile spores are resistant to alcohol-based hand rubs; only mechanical removal with soap and water reliably removes them from the hands.'
  },

  /* m4s4 — Listeria and diphtheria: two more invaders (slides 53-54) */
  c13a: {
    options: ['Listeriolysin', 'Internalin', 'Diphtheria toxin', 'Endotoxin'],
    answer: 0,
    why: 'Listeriolysin facilitates escape from the phagosome once the organism has entered the cell. Internalin instead facilitates the initial attachment to human cell surfaces.'
  },
  c13b: {
    options: ['Immunosuppressed adults, newborns, and pregnant women', 'Healthy young adults', 'Patients with a recent splenectomy only', 'Patients with a penicillin allergy'],
    answer: 0,
    why: 'Listeria causes meningitis and sepsis primarily in immunosuppressed adults, newborns, and pregnant women, consistent with its ability to survive intracellularly and evade normal immune defenses.'
  },
  c13c: {
    options: ['It ADP-ribosylates EF-2, shutting down protein synthesis', 'It forms pores in the host cell membrane', 'It blocks acetylcholine release at the neuromuscular junction', 'It clots plasma to wall off the infection'],
    answer: 0,
    why: 'Diphtheria toxin ADP-ribosylates elongation factor 2 (EF-2), halting protein synthesis in the host cell \u2014 the same target used by Pseudomonas exotoxin A.'
  },

  /* m5s1 — E. coli: same organism, opposite diarrheas (slides 56-60) */
  c14a: {
    options: ['Enterotoxigenic E. coli (ETEC)', 'Enterohemorrhagic E. coli (EHEC)', 'Uropathogenic E. coli', 'Neonatal meningitis-associated E. coli'],
    answer: 0,
    why: 'ETEC produces LT (raises cAMP) and ST (raises cGMP) toxins that act on the small intestine, causing watery diarrhea without invading tissue. EHEC instead produces Shiga toxin and causes bloody diarrhea.'
  },
  c14b: {
    options: ['They may increase the risk of hemolytic uremic syndrome (HUS)', 'They interact dangerously with oral rehydration solution', 'They are contraindicated only in pregnancy', 'They have no specific risk in this setting'],
    answer: 0,
    why: 'Antimotility drugs can increase the risk of hemolytic uremic syndrome (HUS) in EHEC infection, possibly by prolonging exposure to Shiga toxin, so they are avoided.'
  },

  /* m5s2 — Salmonella, Shigella, and Klebsiella (slide 61) */
  c15a: {
    options: ['Salmonella', 'Shigella', 'Klebsiella', 'Vibrio cholerae'],
    answer: 0,
    why: 'Salmonella is a non-lactose fermenter, is H2S positive, and can survive inside macrophages, allowing non-typhoidal disease or typhoid fever depending on the species.'
  },
  c15b: {
    options: ['Shigella', 'Salmonella', 'Klebsiella', 'Campylobacter jejuni'],
    answer: 0,
    why: "Shigella's very small infectious dose (10-200 organisms) helps explain its efficient person-to-person spread and the classic dysentery presentation."
  },
  c15c: {
    options: ['Klebsiella', 'Salmonella', 'Shigella', 'Vibrio cholerae'],
    answer: 0,
    why: "Klebsiella's large polysaccharide capsule produces mucoid colonies and is classically associated with currant-jelly sputum in pneumonia, particularly in patients with alcohol use disorder."
  },

  /* m5s3 — Vibrio, Campylobacter, and H. pylori (slide 62) */
  c16a: {
    options: ['ADP-ribosylation locks a G protein on, raising cAMP', 'Direct invasion and destruction of colon epithelial cells', 'A superantigen triggering systemic shock', 'Blockade of acetylcholine release'],
    answer: 0,
    why: "Cholera toxin ADP-ribosylates and locks the Gs protein 'on,' raising cAMP and driving massive fluid secretion into the small intestine."
  },
  c16b: {
    options: ['Campylobacter jejuni', 'Vibrio cholerae', 'Helicobacter pylori', 'Shigella'],
    answer: 0,
    why: 'Campylobacter jejuni infection is a well-known trigger for Guillain-Barr\u00e9 syndrome, an immune-mediated complication that appears weeks later, as well as reactive arthritis.'
  },
  c16c: {
    options: ['Urease converts urea to ammonia, neutralizing nearby acid', 'It forms acid-resistant spores', 'It lives exclusively above the mucus layer, avoiding acid', 'It secretes a toxin that raises stomach pH globally'],
    answer: 0,
    why: "H. pylori's urease enzyme converts urea to ammonia, neutralizing the acid in its immediate surroundings and allowing it to colonize the gastric mucosa."
  },

  /* m5s4 — where the enteric bacteria strike (slide 63) */
  c17a: {
    options: ['The small intestine', 'The colon', 'The stomach', 'The gallbladder'],
    answer: 0,
    why: "Watery diarrhea usually reflects a toxin (such as ETEC's LT/ST toxins or cholera toxin) acting on the small intestine, driving fluid secretion without invading or destroying tissue."
  },
  c17b: {
    options: ['The colon', 'The small intestine', 'The stomach', 'The esophagus'],
    answer: 0,
    why: 'Bloody diarrhea reflects invasion or Shiga toxin damage in the colon, as seen with Shigella, Salmonella, Campylobacter, and EHEC.'
  },
  c17c: {
    options: ['Helicobacter pylori', 'Vibrio cholerae', 'Shigella', 'Klebsiella'],
    answer: 0,
    why: 'H. pylori is the outlier: it colonizes the stomach itself, surviving the acid with urease, and causes gastritis, peptic ulcer disease, and is linked to gastric cancer and MALT lymphoma.'
  },

  /* m6s1 — Pseudomonas: the opportunist (slides 64-67) */
  c18a: {
    options: ['Exotoxin A', 'Endotoxin', 'Pyocyanin', 'Elastase'],
    answer: 0,
    why: 'Exotoxin A ADP-ribosylates EF-2, blocking protein synthesis, exactly like diphtheria toxin \u2014 though the two organisms are otherwise unrelated.'
  },
  c18b: {
    options: ['Patients with cystic fibrosis', 'Healthy young adults', 'Patients with a recent splenectomy', 'Pregnant patients'],
    answer: 0,
    why: 'Pseudomonas chronically infects most adults with cystic fibrosis, though prevalence has declined with CFTR modulator therapy.'
  },

  /* m6s2 — H. influenzae and B. pertussis (slides 68-70) */
  c19a: {
    options: ['Streptococcus pneumoniae and Neisseria meningitidis', 'Staphylococcus aureus and Streptococcus pyogenes', 'Listeria monocytogenes and Enterococcus', 'Pseudomonas aeruginosa and Klebsiella'],
    answer: 0,
    why: 'H. influenzae, S. pneumoniae, and N. meningitidis are the three classic encapsulated pyogens, all covered by conjugate vaccines that have dramatically reduced childhood meningitis.'
  },
  c19b: {
    options: ['Catarrhal (cold-like symptoms, before the characteristic cough)', 'Paroxysmal (severe coughing fits with a whoop)', 'Convalescent (cough gradually resolving)', 'Patients are equally contagious throughout'],
    answer: 0,
    why: 'The catarrhal stage, though it looks like an ordinary cold, is when the patient is most contagious \u2014 before the classic paroxysmal cough even appears.'
  },
  c19c: {
    options: ['To transfer protective antibodies to the newborn, who cannot yet be vaccinated', 'Because pregnancy reduces vaccine efficacy from a single dose', 'To treat subclinical maternal pertussis infection', 'Because DTaP is not effective in adults'],
    answer: 0,
    why: 'Tdap in every pregnancy transfers protective antibodies to the newborn, who is too young to be vaccinated directly but is at high risk for severe pertussis.'
  },

  /* m6s3 — tularemia and plague: zoonotic hazards (slides 71-72) */
  c20a: {
    options: ['Francisella tularensis', 'Yersinia pestis', 'Bordetella pertussis', 'Pseudomonas aeruginosa'],
    answer: 0,
    why: 'F. tularensis (tularemia) has rabbits, deer, and ticks as its reservoir. Y. pestis (plague) is instead associated with rodents.'
  },
  c20b: {
    options: ['Notify the laboratory in advance, since both are laboratory hazards', 'No special precautions are needed beyond standard practice', 'Only Y. pestis requires laboratory notification', 'Only F. tularensis requires laboratory notification'],
    answer: 0,
    why: 'Both organisms are laboratory hazards; notifying the laboratory in advance when either is suspected (as with anthrax) protects laboratory staff.'
  },
  c20c: {
    options: ['Aminoglycosides (gentamicin) or fluoroquinolones', 'Macrolides', 'Penicillins', 'Vancomycin'],
    answer: 0,
    why: 'Gentamicin or a fluoroquinolone is first-line for plague; doxycycline is an alternative, and streptomycin is not widely available in the U.S.'
  },

  /* m6s4 — anaerobes and the big picture (slides 73-78) */
  c21a: {
    options: ['A polysaccharide capsule', 'A pore-forming toxin', 'An ADP-ribosylating exotoxin', 'A siderophore'],
    answer: 0,
    why: 'All three organisms share a polysaccharide capsule that resists phagocytosis, which is why the spleen (the organ that clears encapsulated bacteria from the blood) is so important for controlling these infections.'
  },
  c21b: {
    options: ['It is not encapsulated, and instead escapes the phagosome using listeriolysin', 'It is the only cause of meningitis that is a virus, not a bacterium', 'It never causes meningitis in any patient population', 'It is fully covered by the standard cephalosporin regimen'],
    answer: 0,
    why: 'Unlike the encapsulated pyogens, Listeria is not encapsulated; it survives inside phagocytes by escaping the phagosome with listeriolysin, which is why its coverage requires ampicillin rather than relying on anticapsular defenses.'
  },
  c21c: {
    options: ['Newborns, and adults over 50 or immunocompromised', 'Healthy school-age children and healthy young adults', 'Only patients with a known penicillin allergy', 'Only pregnant patients'],
    answer: 0,
    why: 'Newborns and adults over 50 (or immunocompromised patients) are the two groups at increased risk for Listeria meningitis, and since cephalosporins do not cover Listeria, ampicillin is added for these patients specifically.'
  }
};

/* ---------- FLASHCARDS ---------- */
var CARDS = [
  { id:'BAC3-CARD-01', t:'Catalase test', d:'Splits the gram-positive cocci by genus: Staphylococcus is catalase-positive; Streptococcus and Enterococcus are catalase-negative.' },
  { id:'BAC3-CARD-02', t:'Coagulase test', d:'Splits the staphylococci by species: S. aureus is coagulase-positive; S. epidermidis and S. saprophyticus are both coagulase-negative.' },
  { id:'BAC3-CARD-03', t:'Novobiocin test', d:'Splits the coagulase-negative staphylococci: S. epidermidis is susceptible (device infections); S. saprophyticus is resistant (UTI in young women).' },
  { id:'BAC3-CARD-04', t:'Beta-hemolysis', d:'Complete clearing of red blood cells around a colony on blood agar.' },
  { id:'BAC3-CARD-05', t:'Alpha-hemolysis', d:'Partial clearing that turns blood agar green, from oxidation of hemoglobin to methemoglobin.' },
  { id:'BAC3-CARD-06', t:'Gamma-hemolysis', d:'No clearing of red blood cells at all; also called nonhemolytic. Typical of Enterococcus.' },
  { id:'BAC3-CARD-07', t:'Bacitracin test', d:'Splits the beta-hemolytic streptococci: group A (S. pyogenes) is sensitive; group B (S. agalactiae) is resistant.' },
  { id:'BAC3-CARD-08', t:'CAMP test', d:'Positive in group B Streptococcus (S. agalactiae), used alongside bacitracin resistance to confirm the identification.' },
  { id:'BAC3-CARD-09', t:'Optochin test', d:'Splits the alpha-hemolytic streptococci: S. pneumoniae is sensitive; viridans streptococci are resistant.' },
  { id:'BAC3-CARD-10', t:'Enterococcus, at a glance', d:'Catalase-negative, typically nonhemolytic, normal colon flora; a frequent cause of UTI and endocarditis.', flip:true },
  { id:'BAC3-CARD-11', t:'Protein A', d:'Binds the Fc region of IgG, blocking complement activation and reducing opsonization and phagocytosis of S. aureus.' },
  { id:'BAC3-CARD-12', t:'TSST-1', d:'A superantigen produced by S. aureus that triggers massive cytokine release, causing toxic shock syndrome.' },
  { id:'BAC3-CARD-13', t:'Staphylococcal enterotoxin', d:'Pre-formed, heat-stable toxin in contaminated food; causes vomiting within hours, and antibiotics do not help.' },
  { id:'BAC3-CARD-14', t:'Exfoliatin', d:'A protease that cleaves desmoglein, separating skin layers in scalded skin syndrome.' },
  { id:'BAC3-CARD-15', t:'M protein', d:'The single most important S. pyogenes virulence factor; inactivates C3b to block phagocytosis.' },
  { id:'BAC3-CARD-16', t:'Erythrogenic toxin', d:'A superantigen from S. pyogenes that produces the scarlet fever rash.' },
  { id:'BAC3-CARD-17', t:'Rheumatic fever vs. glomerulonephritis', d:'Both are immune-mediated complications of group A strep appearing weeks later; antibiotics for the original infection prevent rheumatic fever but not reliably glomerulonephritis.', flip:true },
  { id:'BAC3-CARD-18', t:'Pneumococcal capsule', d:'The major antiphagocytic virulence factor of S. pneumoniae; over 100 serotypes exist.' },
  { id:'BAC3-CARD-19', t:'Asplenia risk', d:'Without a spleen, encapsulated organisms like S. pneumoniae cause more severe infection, since the spleen normally clears them from the blood.' },
  { id:'BAC3-CARD-20', t:'Group B strep in pregnancy', d:'Mothers who screen positive receive antibiotics during labor to prevent neonatal sepsis and meningitis.' },
  { id:'BAC3-CARD-21', t:'Maltose fermentation', d:'Separates the two Neisseria species: N. meningitidis ferments maltose; N. gonorrhoeae does not.' },
  { id:'BAC3-CARD-22', t:'Piliated vs. nonpiliated gonococci', d:'Pili let N. gonorrhoeae attach to mucosal cells and resist phagocytosis; only piliated organisms are pathogenic.' },
  { id:'BAC3-CARD-23', t:'Factor H binding protein (FHBP)', d:'Lets N. meningitidis avoid phagocytosis by binding Factor H; the immunogen in MenB vaccines.' },
  { id:'BAC3-CARD-24', t:'MenACWY vs. MenB', d:'MenACWY (age 11-12, booster at 16) covers serogroups A, C, W, Y; MenB (shared decision, about 16-18) covers serogroup B via FHBP.', flip:true },
  { id:'BAC3-CARD-25', t:'Meningococcal chemoprophylaxis', d:'Close contacts receive rifampin, ceftriaxone, or ciprofloxacin; where cipro-resistant strains exist, use rifampin, ceftriaxone, or azithromycin instead.' },
  { id:'BAC3-CARD-26', t:'Gonorrhea first-line treatment', d:'Ceftriaxone 500 mg IM, single dose; add doxycycline only if chlamydia has not been excluded.' },
  { id:'BAC3-CARD-27', t:'Gonococcal Gram stain', d:'Gram-negative diplococci seen inside neutrophils on a urethral or cervical smear is classic for N. gonorrhoeae.' },
  { id:'BAC3-CARD-28', t:'Gonorrhea prevention', d:'No vaccine exists; condoms and treating symptomatic patients and partners are the mainstay. Erythromycin ointment prevents newborn conjunctivitis.' },
  { id:'BAC3-CARD-29', t:'Neisseria portals of entry', d:'N. meningitidis enters via the respiratory tract; N. gonorrhoeae enters via the genital tract (or vertically, at birth).', flip:true },
  { id:'BAC3-CARD-30', t:'Shared Neisseria virulence factor', d:'Both species produce IgA protease and endotoxin; the capsule (meningococcus) and pili (gonococcus) are what set them apart.' },
  { id:'BAC3-CARD-31', t:"Anthrax toxin's three parts", d:'Protective antigen binds host cells; edema factor (adenylate cyclase) raises cAMP; lethal factor (a protease) causes cell death.' },
  { id:'BAC3-CARD-32', t:'Cutaneous vs. pulmonary anthrax', d:'Cutaneous: spores enter a wound, nearly all cases, black eschar. Pulmonary: spores inhaled, rare but often fatal.', flip:true },
  { id:'BAC3-CARD-33', t:'Botulinum toxin', d:'Blocks acetylcholine release at the neuromuscular junction; produces descending flaccid paralysis.' },
  { id:'BAC3-CARD-34', t:'Tetanus toxin', d:'Blocks release of glycine and GABA in the spinal cord; produces spastic paralysis, lockjaw, and opisthotonos.' },
  { id:'BAC3-CARD-35', t:'C. perfringens alpha toxin (lecithinase)', d:'Destroys cell membranes directly, causing gas gangrene; treated with penicillin G plus debridement.' },
  { id:'BAC3-CARD-36', t:'C. difficile treatment ladder', d:'Fidaxomicin preferred (initial and recurrent episodes); oral vancomycin acceptable; metronidazole reserved for when the others are hard to obtain.' },
  { id:'BAC3-CARD-37', t:'C. difficile hand hygiene', d:'Alcohol hand rub does not kill C. difficile spores; wash hands with soap and water instead.' },
  { id:'BAC3-CARD-38', t:'Listeria virulence factors', d:'Internalin enables attachment; listeriolysin enables escape from the phagosome after the cell engulfs the organism.' },
  { id:'BAC3-CARD-39', t:'Diphtheria toxin', d:'ADP-ribosylates EF-2, shutting down host protein synthesis \u2014 the same target as Pseudomonas exotoxin A.' },
  { id:'BAC3-CARD-40', t:'Diphtheria diagnosis', d:'Tellurite agar culture plus the Elek test (or PCR) to confirm the isolate actually produces toxin.' },
  { id:'BAC3-CARD-41', t:'ETEC toxins (LT/ST)', d:'LT raises cAMP; ST raises cGMP. Both act on the small intestine, causing watery, non-bloody diarrhea.' },
  { id:'BAC3-CARD-42', t:'EHEC and Shiga toxin', d:'E. coli O157:H7 produces Shiga toxin, which inhibits protein synthesis and causes bloody diarrhea; can progress to HUS.' },
  { id:'BAC3-CARD-43', t:'EHEC treatment warning', d:'Avoid antimotility drugs and use antibiotics cautiously in EHEC \u2014 both may precipitate hemolytic uremic syndrome (HUS).', flip:true },
  { id:'BAC3-CARD-44', t:'Salmonella, at a glance', d:'Non-lactose fermenter, H2S-positive, survives inside macrophages; non-typhoidal disease from poultry/eggs, or typhoid fever.' },
  { id:'BAC3-CARD-45', t:'Shigella, at a glance', d:'Nonmotile, tiny infectious dose (10-200 organisms); S. dysenteriae makes Shiga toxin, causing bloody dysentery.' },
  { id:'BAC3-CARD-46', t:'Klebsiella, at a glance', d:'Large capsule, mucoid colonies; pneumonia with currant-jelly sputum, especially with alcohol use disorder.' },
  { id:'BAC3-CARD-47', t:'Cholera toxin mechanism', d:'ADP-ribosylates and locks Gs \u2018on,\u2019 raising cAMP and driving profuse, rice-water watery diarrhea.' },
  { id:'BAC3-CARD-48', t:'Campylobacter complications', d:'Guillain-Barr\u00e9 syndrome and reactive arthritis can follow weeks after the initial gastroenteritis.' },
  { id:'BAC3-CARD-49', t:'H. pylori urease', d:'Converts urea to ammonia, neutralizing stomach acid locally so the organism can colonize the gastric mucosa.' },
  { id:'BAC3-CARD-50', t:'Watery vs. bloody diarrhea', d:'Watery = toxin acting on the small intestine (ETEC, cholera). Bloody = invasion or Shiga toxin in the colon (Shigella, Salmonella, Campylobacter, EHEC). H. pylori is the stomach outlier.', flip:true },
  { id:'BAC3-CARD-51', t:'Pseudomonas exotoxin A', d:'ADP-ribosylates EF-2, blocking protein synthesis \u2014 the same mechanism as diphtheria toxin.' },
  { id:'BAC3-CARD-52', t:'Pseudomonas identification', d:'Oxidase-positive; blue-green pigment (pyocyanin) with a fruity smell; metallic sheen on TSI agar.' },
  { id:'BAC3-CARD-53', t:'Three encapsulated pyogens', d:'S. pneumoniae, N. meningitidis, and H. influenzae \u2014 all share an antiphagocytic capsule and are covered by conjugate vaccines.' },
  { id:'BAC3-CARD-54', t:'Pertussis toxin', d:'ADP-ribosylates Gi, raising cAMP and causing lymphocytosis; distinct from tracheal cytotoxin, which kills ciliated cells.' },
  { id:'BAC3-CARD-55', t:'Pertussis stages', d:'Catarrhal (most contagious, cold-like) \u2192 paroxysmal (whooping cough fits) \u2192 convalescent.', flip:true },
  { id:'BAC3-CARD-56', t:'Tularemia vs. plague reservoirs', d:'F. tularensis: rabbits, deer, ticks. Y. pestis: rodents. Both are laboratory hazards \u2014 notify the lab.' },
  { id:'BAC3-CARD-57', t:'Anaerobe rule of thumb', d:'Mouth anaerobes (Prevotella, Fusobacterium) point to aspiration/lung/brain abscess; colon anaerobes (B. fragilis) point to intra-abdominal abscess.' },
  { id:'BAC3-CARD-58', t:'Why aminoglycosides fail against anaerobes', d:'Their uptake into bacterial cells is oxygen-dependent \u2014 useless where there is no oxygen.' },
  { id:'BAC3-CARD-59', t:'Listeria, the meningitis exception', d:'Not encapsulated; escapes the phagosome via listeriolysin instead. Needs ampicillin, which cephalosporins can\u2019t substitute for.' },
  { id:'BAC3-CARD-60', t:'Ampicillin for meningitis, by age', d:'Added specifically to cover Listeria in newborns and in adults over 50 or immunocompromised.', flip:true }
];

/* ---------- POOL (module quiz + future mastery-exam questions) ---------- */
var POOL = [
  {
    id:'BAC3-001', m:'m1', area:'Staph vs strep basics', level:'concept',
    stem:'Which laboratory test is used to separate Staphylococcus from Streptococcus among the gram-positive cocci?',
    options:['Catalase', 'Coagulase', 'Optochin', 'Bacitracin'],
    answer:0,
    why:'Catalase is the first branch point: Staphylococcus is catalase-positive, while Streptococcus and Enterococcus are catalase-negative. Coagulase, optochin, and bacitracin are used later, to separate species within each catalase group.'
  },
  {
    id:'BAC3-002', m:'m1', area:'Staph vs strep basics', level:'concept',
    stem:'On Gram stain, which growth arrangement is characteristic of Staphylococcus?',
    options:['Grape-like clusters', 'Long chains', 'Comma-shaped curves', 'Club-shaped palisades'],
    answer:0,
    why:'Staphylococcus characteristically grows in irregular clusters resembling a bunch of grapes. Chains describe Streptococcus, curved shapes describe organisms such as Vibrio or Campylobacter, and club-shaped palisades describe Corynebacterium.'
  },
  {
    id:'BAC3-003', m:'m1', area:'Staph vs strep basics', level:'application',
    stem:'A blood culture grows gram-positive cocci in clusters that are catalase-positive and facultatively anaerobic. Which genus best fits these findings?',
    options:['Staphylococcus', 'Streptococcus', 'Enterococcus', 'Neisseria'],
    answer:0,
    why:'Clustered arrangement plus a positive catalase result together point to Staphylococcus. Streptococcus and Enterococcus are catalase-negative, and Neisseria is a gram-negative diplococcus rather than a clustered gram-positive coccus.'
  },
  {
    id:'BAC3-004', m:'m1', area:'Staphylococcal identification', level:'concept',
    stem:'Which single test result distinguishes Staphylococcus aureus from the coagulase-negative staphylococci (S. epidermidis and S. saprophyticus)?',
    options:['A positive coagulase test', 'A positive catalase test', 'Growth in grape-like clusters', 'A gram-positive cell wall'],
    answer:0,
    why:'Coagulase is the defining split: S. aureus is coagulase-positive, while S. epidermidis and S. saprophyticus are both coagulase-negative. Catalase activity, clustered growth, and the gram-positive cell wall are shared by all three species.'
  },
  {
    id:'BAC3-005', m:'m1', area:'Staphylococcal identification', level:'application',
    stem:'A hospitalized patient develops an infection at the site of a central venous catheter. Culture grows a coagulase-negative, novobiocin-susceptible Staphylococcus. Which organism is the most likely cause?',
    options:['Staphylococcus epidermidis', 'Staphylococcus saprophyticus', 'Staphylococcus aureus', 'Streptococcus agalactiae'],
    answer:0,
    why:'S. epidermidis is novobiocin-susceptible and is the classic cause of catheter- and device-associated infections through biofilm formation. S. saprophyticus is novobiocin-resistant and causes UTIs instead; S. aureus would be coagulase-positive, and S. agalactiae is a Streptococcus.'
  },
  {
    id:'BAC3-006', m:'m1', area:'Staphylococcal identification', level:'integration',
    stem:'Which finding correctly separates Staphylococcus saprophyticus from Staphylococcus epidermidis?',
    options:['Novobiocin resistance versus susceptibility', 'Coagulase-positive versus coagulase-negative', 'Catalase-positive versus catalase-negative', 'Beta-hemolytic versus alpha-hemolytic'],
    answer:0,
    why:'Both organisms are coagulase-negative and catalase-positive staphylococci, so those tests cannot separate them. Novobiocin does: S. saprophyticus is resistant, while S. epidermidis is susceptible. Hemolysis pattern is not used to distinguish these two species.'
  },
  {
    id:'BAC3-007', m:'m1', area:'Streptococcal & enterococcal identification', level:'concept',
    stem:'Which type of hemolysis produces complete clearing of red blood cells around a colony on blood agar?',
    options:['Beta-hemolysis', 'Alpha-hemolysis', 'Gamma-hemolysis', 'Delta-hemolysis'],
    answer:0,
    why:'Beta-hemolysis is complete clearing of the red blood cells. Alpha-hemolysis is partial clearing that turns the agar green, and gamma-hemolysis (nonhemolytic) produces no clearing at all. "Delta-hemolysis" is not one of the patterns used to classify these organisms.'
  },
  {
    id:'BAC3-008', m:'m1', area:'Streptococcal & enterococcal identification', level:'application',
    stem:'A throat culture grows a beta-hemolytic, gram-positive coccus that is resistant to bacitracin and gives a positive CAMP test. Which organism does this identify?',
    options:['Streptococcus agalactiae (group B)', 'Streptococcus pyogenes (group A)', 'Streptococcus pneumoniae', 'Viridans streptococci'],
    answer:0,
    why:'Bacitracin resistance combined with a positive CAMP test identifies group B Streptococcus (S. agalactiae). Group A Streptococcus (S. pyogenes) is also beta-hemolytic but is bacitracin-sensitive instead. S. pneumoniae and the viridans streptococci are both alpha-hemolytic.'
  },
  {
    id:'BAC3-009', m:'m1', area:'Streptococcal & enterococcal identification', level:'application',
    stem:'Which test result separates Streptococcus pneumoniae from the viridans streptococci?',
    options:['Optochin sensitivity versus resistance', 'Bacitracin sensitivity versus resistance', 'Beta-hemolysis versus alpha-hemolysis', 'A positive versus negative CAMP test'],
    answer:0,
    why:'Both organisms are alpha-hemolytic, so hemolysis pattern cannot separate them. Optochin does: S. pneumoniae is sensitive, while the viridans streptococci are resistant. Bacitracin and the CAMP test are used to sort the beta-hemolytic streptococci, not this pair.'
  },
  {
    id:'BAC3-010', m:'m1', area:'Streptococcal & enterococcal identification', level:'integration',
    stem:'A catalase-negative, gram-positive coccus recovered from a patient with endocarditis is nonhemolytic and identified as normal colon flora. Which genus best fits this description?',
    options:['Enterococcus', 'Streptococcus pyogenes', 'Staphylococcus epidermidis', 'Streptococcus pneumoniae'],
    answer:0,
    why:'Enterococcus is catalase-negative, typically nonhemolytic, lives as normal colon flora, and is a recognized cause of endocarditis. S. pyogenes and S. pneumoniae are hemolytic organisms of the throat, and S. epidermidis is a catalase-positive Staphylococcus.'
  },
  {
    id:'BAC3-011', m:'m2', area:'S. aureus virulence and disease', level:'concept',
    stem:'Which Staphylococcus aureus virulence factor prevents complement activation by blocking IgG binding?',
    options:['Protein A', 'Coagulase', 'Alpha toxin', 'Hyaluronidase'],
    answer:0,
    why:'Protein A binds the Fc portion of IgG, preventing complement activation and reducing opsonization and phagocytosis. Coagulase clots plasma, alpha toxin damages cell membranes, and hyaluronidase breaks down connective tissue.'
  },
  {
    id:'BAC3-012', m:'m2', area:'S. aureus virulence and disease', level:'application',
    stem:'A person develops vomiting and watery diarrhea within three hours of eating potato salad left out at a picnic. Which mechanism best explains the rapid onset?',
    options:['A pre-formed, heat-stable toxin already present in the food', 'Active bacterial invasion of the gut lining', 'A superantigen-driven immune response that takes days to develop', 'A toxin that requires bacterial growth in the gut before symptoms occur'],
    answer:0,
    why:'Staphylococcal enterotoxin is pre-formed and heat-stable in contaminated food, so illness begins within hours because no bacterial growth or invasion needs to occur first, and antibiotics do not help.'
  },
  {
    id:'BAC3-013', m:'m2', area:'S. aureus virulence and disease', level:'application',
    stem:'An infant develops widespread skin peeling with a positive Nikolsky sign. Which toxin is responsible?',
    options:['Exfoliatin', 'Alpha toxin', 'TSST-1', 'Panton-Valentine leukocidin'],
    answer:0,
    why:'Exfoliatin causes scalded skin syndrome by cleaving desmoglein in the skin\u2019s desmosomes. TSST-1 causes toxic shock rather than skin peeling, alpha toxin causes cell death and necrosis, and P-V leukocidin targets leukocytes.'
  },
  {
    id:'BAC3-014', m:'m2', area:'Group A strep virulence and disease', level:'concept',
    stem:'Which Group A Streptococcus virulence factor thins pus and helps the organism spread through tissue?',
    options:['DNase', 'M protein', 'Streptolysin O', 'Erythrogenic toxin'],
    answer:0,
    why:'DNase digests DNA in necrotic tissue and exudates, thinning pus so the organism can spread. M protein resists phagocytosis, streptolysin O causes hemolysis, and erythrogenic toxin produces the scarlet fever rash.'
  },
  {
    id:'BAC3-015', m:'m2', area:'Group A strep virulence and disease', level:'integration',
    stem:'Antibiotic treatment of the initial group A streptococcal pharyngitis is well established to prevent which immune-mediated complication?',
    options:['Rheumatic fever', 'Glomerulonephritis', 'Both rheumatic fever and glomerulonephritis equally', 'Neither complication'],
    answer:0,
    why:'Antibiotics given for the initial strep throat infection are established to prevent rheumatic fever. Glomerulonephritis is also an immune-mediated complication, but antibiotic treatment of the pharyngitis has not been shown to prevent it in the same way.'
  },
  {
    id:'BAC3-016', m:'m2', area:'Group A strep virulence and disease', level:'application',
    stem:'A patient with a group A streptococcal skin infection develops a diffuse rash, fever, and hypotension. Which toxin\u2019s mechanism best explains this presentation?',
    options:['A superantigen triggering massive cytokine release', 'A protease digesting fibrin clots', 'An enzyme thinning pus in the wound', 'A capsule preventing phagocytosis'],
    answer:0,
    why:'Pyrogenic exotoxin A is a superantigen that triggers massive, nonspecific T-cell activation and cytokine release, producing streptococcal toxic shock syndrome. Streptokinase digests fibrin and DNase thins pus, and group A strep is not defined by a prominent antiphagocytic capsule in this lecture.'
  },
  {
    id:'BAC3-017', m:'m2', area:'Pneumococcus, viridans, enterococcus & GBS disease', level:'concept',
    stem:'Which Streptococcus pneumoniae virulence factor breaks down IgA to facilitate colonization of the mucosa?',
    options:['IgA protease', 'Pneumolysin', 'Capsular polysaccharide', 'Lipoteichoic acid'],
    answer:0,
    why:'IgA protease breaks down IgA, facilitating mucosal colonization. Pneumolysin instead causes hemolysis, the capsule resists phagocytosis, and lipoteichoic acid activates complement.'
  },
  {
    id:'BAC3-018', m:'m2', area:'Pneumococcus, viridans, enterococcus & GBS disease', level:'application',
    stem:'A patient with a history of heavy alcohol use is hospitalized with pneumonia and thick, blood-tinged sputum. Which factor most increases this patient\u2019s risk for pneumococcal infection?',
    options:['Depressed cough reflex and increased aspiration of secretions', 'A congenitally absent spleen', 'A recent splenectomy for trauma', 'An underlying immunodeficiency in IgA production'],
    answer:0,
    why:'Alcohol and drug intoxication depress the cough reflex and increase aspiration of secretions, lowering resistance to pneumococcal infection. Splenectomy and asplenia are separate, well-known risk factors, but they are not described in this vignette.'
  },
  {
    id:'BAC3-019', m:'m2', area:'Pneumococcus, viridans, enterococcus & GBS disease', level:'application',
    stem:'Which organism is most associated with subacute endocarditis following a dental procedure?',
    options:['Viridans streptococci', 'Streptococcus pneumoniae', 'Streptococcus agalactiae', 'Enterococcus faecalis'],
    answer:0,
    why:'Viridans streptococci are normal oropharyngeal flora classically associated with subacute endocarditis, often following dental procedures. S. pneumoniae causes pneumonia and meningitis rather than classic subacute endocarditis here, S. agalactiae is associated with neonatal disease, and Enterococcus is more closely tied to the colon and urinary tract.'
  },
  {
    id:'BAC3-020', m:'m2', area:'Pneumococcus, viridans, enterococcus & GBS disease', level:'integration',
    stem:'A newborn develops sepsis shortly after birth. The mother\u2019s prenatal culture had been positive for a pyogenic, catalase-negative, beta-hemolytic organism that colonizes the vagina. Which organism is the most likely cause?',
    options:['Streptococcus agalactiae (group B)', 'Streptococcus pyogenes (group A)', 'Enterococcus faecalis', 'Streptococcus pneumoniae'],
    answer:0,
    why:'S. agalactiae (group B Streptococcus) colonizes the vagina and is a leading cause of neonatal sepsis and meningitis when the mother is not treated with intrapartum antibiotics. S. pyogenes and S. pneumoniae are not primarily vaginal colonizers, and Enterococcus is primarily colon flora.'
  },
  {
    id:'BAC3-021', m:'m3', area:'Neisseria: virulence and diagnosis', level:'concept',
    stem:'Both Neisseria meningitidis and Neisseria gonorrhoeae share which virulence factor that breaks down IgA?',
    options:['IgA protease', 'Pili', 'Factor H binding protein', 'Polysaccharide capsule'],
    answer:0,
    why:'IgA protease is produced by both Neisseria species (and by S. pneumoniae), helping the organism attach to mucosal surfaces by breaking down IgA. Pili and Factor H binding protein are specific to one organism or the other, and the polysaccharide capsule is specific to N. meningitidis.'
  },
  {
    id:'BAC3-022', m:'m3', area:'Neisseria: virulence and diagnosis', level:'concept',
    stem:'Nonpiliated Neisseria gonorrhoeae organisms are characteristically:',
    options:['Nonpathogenic', 'More virulent than piliated organisms', 'Resistant to ceftriaxone', 'Unable to produce endotoxin'],
    answer:0,
    why:'Pili are required for attachment to mucosal cells and for resisting phagocytosis; piliated gonococci are pathogenic, while nonpiliated gonococci are nonpathogenic.'
  },
  {
    id:'BAC3-023', m:'m3', area:'Neisseria: virulence and diagnosis', level:'application',
    stem:'A patient with suspected disseminated gonococcal or meningococcal infection needs rapid identification. Which single test distinguishes the two species?',
    options:['Maltose fermentation', 'Gram stain morphology alone', 'Catalase', 'Growth on blood agar alone'],
    answer:0,
    why:'Both organisms are gram-negative diplococci with similar morphology and growth requirements, so maltose fermentation is the test that separates N. meningitidis (positive) from N. gonorrhoeae (negative).'
  },
  {
    id:'BAC3-024', m:'m3', area:'Meningococcus: treatment and prevention', level:'concept',
    stem:'Which meningococcal vaccine is recommended for adolescents at age 11-12 with a booster at 16?',
    options:['MenACWY', 'MenB', 'Combined MenABCWY only', 'PCV20'],
    answer:0,
    why:'MenACWY is routinely recommended at age 11-12 with a booster at 16. MenB is a shared clinical decision, ideally given around age 16-18, and PCV20 is a pneumococcal vaccine, not a meningococcal one.'
  },
  {
    id:'BAC3-025', m:'m3', area:'Meningococcus: treatment and prevention', level:'application',
    stem:'Meningococcal prophylaxis is being planned in an area with documented ciprofloxacin-resistant strains. Which agents remain appropriate choices?',
    options:['Rifampin, ceftriaxone, or azithromycin', 'Ciprofloxacin at a higher dose', 'Doxycycline alone', 'No prophylaxis is effective against resistant strains'],
    answer:0,
    why:'Where ciprofloxacin-resistant meningococcal strains have appeared, current guidance recommends using rifampin, ceftriaxone, or azithromycin for prophylaxis instead.'
  },
  {
    id:'BAC3-026', m:'m3', area:'Meningococcus: treatment and prevention', level:'application',
    stem:'Serogroup B Neisseria meningitidis is identified as the cause of a case of meningitis. Which vaccine, if given earlier, targets this serogroup\u2019s key virulence factor?',
    options:['MenB', 'MenACWY', 'PCV15', 'Hib vaccine'],
    answer:0,
    why:'MenB vaccines target Factor H binding protein and protect against serogroup B disease, which is not covered by MenACWY.'
  },
  {
    id:'BAC3-027', m:'m3', area:'Gonococcus: treatment and prevention', level:'concept',
    stem:'Which statement about prevention of gonorrhea is accurate?',
    options:['No vaccine exists; prevention relies on condoms and treating symptomatic patients and partners', 'A vaccine given in adolescence prevents most cases', 'Erythromycin ointment is given to sexually active adults to prevent transmission', 'Annual antibiotic prophylaxis is recommended for high-risk patients'],
    answer:0,
    why:'There is no vaccine against N. gonorrhoeae. Prevention relies on condoms and treatment of symptomatic patients and their sexual partners; erythromycin ointment is specifically used in newborns, not adults.'
  },
  {
    id:'BAC3-028', m:'m3', area:'Gonococcus: treatment and prevention', level:'application',
    stem:'A patient with a documented cephalosporin allergy is diagnosed with uncomplicated gonococcal infection. Which regimen is appropriate?',
    options:['Gentamicin plus azithromycin', 'Ceftriaxone at a reduced dose', 'Doxycycline alone', 'Penicillin G'],
    answer:0,
    why:'Gentamicin plus azithromycin is the recommended alternative regimen for patients who cannot receive a cephalosporin.'
  },
  {
    id:'BAC3-029', m:'m3', area:'Gonococcus: treatment and prevention', level:'application',
    stem:'After treatment for gonococcal infection, when should a patient be retested for reinfection?',
    options:['About 3 months after treatment', 'Immediately after finishing the antibiotic', 'Only if symptoms return', 'At 24 hours post-treatment'],
    answer:0,
    why:'Retesting for reinfection about 3 months after treatment is recommended; a test of cure at 7-14 days is reserved specifically for pharyngeal infection.'
  },
  {
    id:'BAC3-030', m:'m3', area:'Gonococcus: treatment and prevention', level:'integration',
    stem:'A pregnant patient has an untreated gonococcal infection at delivery. Which intervention prevents the most common complication in the newborn?',
    options:['Erythromycin ointment applied to the newborn\u2019s eyes', 'Oral doxycycline for the newborn', 'A single dose of the MenB vaccine for the newborn', 'Isolating the newborn from the mother'],
    answer:0,
    why:'Erythromycin ointment applied at birth prevents gonococcal conjunctivitis, the classic newborn complication of untreated maternal gonococcal infection.'
  },
  {
    id:'BAC3-031', m:'m4', area:'Anthrax: portals and toxin', level:'concept',
    stem:'Which component of the Bacillus anthracis exotoxin binds host cells and delivers the other two toxin components?',
    options:['Protective antigen', 'Edema factor', 'Lethal factor', 'Capsule'],
    answer:0,
    why:'Protective antigen binds host cells and forms the channel that delivers edema factor and lethal factor into the cell. It is also the immunogen used in the anthrax vaccine.'
  },
  {
    id:'BAC3-032', m:'m4', area:'Anthrax: portals and toxin', level:'application',
    stem:'A patient who works at a wool-processing facility develops a painless black eschar on the forearm. Which organism and portal of entry are most consistent with this presentation?',
    options:['Bacillus anthracis, cutaneous', 'Bacillus anthracis, pulmonary', 'Clostridium perfringens, wound', 'Corynebacterium diphtheriae, respiratory'],
    answer:0,
    why:'A painless black eschar from an occupational exposure is classic for cutaneous anthrax, which accounts for nearly all anthrax cases.'
  },
  {
    id:'BAC3-033', m:'m4', area:'Anthrax: portals and toxin', level:'concept',
    stem:'What distinguishes the two enterotoxins of Bacillus cereus food poisoning?',
    options:['One raises cAMP like cholera toxin, and one acts as a superantigen like staphylococcal enterotoxin', 'Both are identical to the anthrax lethal factor', 'Both require living bacterial invasion of the gut wall', 'Neither toxin is heat-stable'],
    answer:0,
    why:'B. cereus produces two different enterotoxins, one that raises cAMP similarly to cholera toxin and one that acts as a superantigen similarly to staphylococcal enterotoxin, after spores germinate in improperly reheated food such as rice.'
  },
  {
    id:'BAC3-034', m:'m4', area:'Toxin mechanism: flaccid, spastic, and destructive', level:'concept',
    stem:'Which organism\u2019s toxin destroys cell membranes directly, through lecithinase activity, rather than acting on the nervous system?',
    options:['Clostridium perfringens', 'Clostridium botulinum', 'Clostridium tetani', 'Bacillus anthracis'],
    answer:0,
    why:'C. perfringens alpha toxin (lecithinase) destroys cell membranes, producing gas gangrene\u2019s tissue destruction \u2014 a different mechanism from the neurotoxins of botulinum and tetanus.'
  },
  {
    id:'BAC3-035', m:'m4', area:'Toxin mechanism: flaccid, spastic, and destructive', level:'application',
    stem:'A patient develops descending muscle weakness beginning with the cranial nerves, days after eating improperly canned food. Which toxin mechanism explains this presentation?',
    options:['Blockade of acetylcholine release at the neuromuscular junction', 'Blockade of inhibitory neurotransmitter release in the spinal cord', 'Direct destruction of cell membranes', 'ADP-ribosylation of EF-2'],
    answer:0,
    why:'Botulinum toxin blocks acetylcholine release, producing descending flaccid paralysis that classically begins with the cranial nerves, consistent with improperly canned food as the source.'
  },
  {
    id:'BAC3-036', m:'m4', area:'Toxin mechanism: flaccid, spastic, and destructive', level:'integration',
    stem:'A wound contaminated with soil becomes infected, and the patient develops gas gangrene. Which treatment approach is most appropriate?',
    options:['Penicillin G plus surgical debridement of the wound', 'Antitoxin and respiratory support alone', 'Metronidazole plus benzodiazepines', 'Erythromycin ointment applied to the wound'],
    answer:0,
    why:'Gas gangrene from C. perfringens is treated with penicillin G plus surgical debridement of necrotic tissue; antitoxin and respiratory support are the treatment for botulism instead.'
  },
  {
    id:'BAC3-037', m:'m4', area:'C. difficile: the antibiotic-associated cycle', level:'application',
    stem:'A hospitalized patient develops watery diarrhea 6 days after starting clindamycin. Testing confirms C. difficile infection. What is an important first step in management?',
    options:['Discontinue the causative antibiotic if possible', 'Start an antimotility agent to control the diarrhea', 'Give prophylactic ciprofloxacin', 'Wait for symptoms to resolve on their own before treating'],
    answer:0,
    why:'Discontinuing the causative antibiotic, if clinically possible, is a key step in managing C. difficile infection, alongside starting fidaxomicin (or oral vancomycin as an alternative).'
  },
  {
    id:'BAC3-038', m:'m4', area:'C. difficile: the antibiotic-associated cycle', level:'concept',
    stem:'Why should C. difficile testing be reserved for patients with new, unexplained diarrhea rather than performed routinely?',
    options:['Colonization without symptoms is common, and a positive test in a well patient does not indicate infection', 'The test is too expensive to use routinely', 'PCR testing cannot detect the organism at all', 'C. difficile cannot be transmitted between asymptomatic patients'],
    answer:0,
    why:'Colonization without symptoms is common, so testing a patient whose diarrhea has another explanation can lead to a false impression of infection; testing is reserved for new, unexplained diarrhea.'
  },
  {
    id:'BAC3-039', m:'m4', area:'Listeria and diphtheria', level:'application',
    stem:'A pregnant patient develops a febrile illness after eating soft cheese made from unpasteurized milk, and blood cultures grow a gram-positive rod. Which empiric treatment is most appropriate?',
    options:['Ampicillin, with or without gentamicin', 'Ceftriaxone alone', 'Vancomycin alone', 'Erythromycin alone'],
    answer:0,
    why:'Listeria monocytogenes, associated with unpasteurized dairy products, is treated with ampicillin, often combined with gentamicin, or given as trimethoprim-sulfamethoxazole; cephalosporins alone do not reliably cover Listeria.'
  },
  {
    id:'BAC3-040', m:'m4', area:'Listeria and diphtheria', level:'integration',
    stem:'A child with a gray pseudomembrane in the throat and swollen neck nodes (\u201cbull neck\u201d) is found to have toxin-producing Corynebacterium diphtheriae. Beyond antibiotics, which treatment is essential?',
    options:['Diphtheria antitoxin, to neutralize circulating toxin', 'Surgical debridement of the pseudomembrane', 'Fidaxomicin', 'Erythromycin ointment applied to the throat'],
    answer:0,
    why:'Diphtheria antitoxin neutralizes circulating toxin and is essential for respiratory diphtheria, in addition to antibiotics (penicillin or erythromycin) to eliminate the organism.'
  },
  {
    id:'BAC3-041', m:'m5', area:'E. coli: ETEC vs EHEC', level:'concept',
    stem:'Which E. coli toxin raises intracellular cGMP, leading to electrolyte efflux into the intestinal lumen?',
    options:['Heat-stable toxin (ST)', 'Heat-labile toxin (LT)', 'Shiga toxin', 'Cholera toxin'],
    answer:0,
    why:'Heat-stable toxin (ST) stimulates guanylate cyclase, raising cGMP; heat-labile toxin (LT) instead stimulates adenylate cyclase, raising cAMP. Both are ETEC toxins that cause watery diarrhea.'
  },
  {
    id:'BAC3-042', m:'m5', area:'E. coli: ETEC vs EHEC', level:'application',
    stem:'A patient develops bloody diarrhea after eating undercooked ground beef. Laboratory testing later shows a rising creatinine, anemia, and low platelets. What has this patient developed?',
    options:['Hemolytic uremic syndrome (HUS)', 'Guillain-Barr\u00e9 syndrome', 'Toxic shock syndrome', 'Rheumatic fever'],
    answer:0,
    why:'Hemolytic uremic syndrome (HUS) \u2014 kidney failure, hemolytic anemia, and thrombocytopenia \u2014 is a life-threatening complication of Shiga toxin from EHEC (E. coli O157:H7).'
  },
  {
    id:'BAC3-043', m:'m5', area:'E. coli: ETEC vs EHEC', level:'integration',
    stem:'Why is antibiotic use controversial in suspected EHEC infection?',
    options:['Antibiotics may increase the risk of precipitating HUS', 'Antibiotics are completely ineffective against all E. coli', 'EHEC has no known antibiotic susceptibilities', 'Antibiotics interfere with oral rehydration'],
    answer:0,
    why:'Antibiotic use in EHEC infection is controversial because certain agents may increase Shiga toxin release and precipitate HUS, similar to the concern with antimotility drugs.'
  },
  {
    id:'BAC3-044', m:'m5', area:'Salmonella, Shigella & Klebsiella', level:'concept',
    stem:'Which organism is nonmotile and has an extremely small infectious dose, with one species producing Shiga toxin?',
    options:['Shigella', 'Salmonella', 'Klebsiella', 'Vibrio cholerae'],
    answer:0,
    why:'Shigella is nonmotile, has a very small infectious dose (10-200 organisms), and S. dysenteriae produces Shiga toxin, causing bloody, mucoid dysentery.'
  },
  {
    id:'BAC3-045', m:'m5', area:'Salmonella, Shigella & Klebsiella', level:'application',
    stem:'A patient hospitalized for pneumonia with thick, blood-tinged (\u201ccurrant-jelly\u201d) sputum and a history of alcohol use disorder is found to have an ESBL-producing gram-negative rod. Which class of antibiotic is appropriate?',
    options:['A carbapenem', 'A first-generation cephalosporin', 'Oral nitrofurantoin', 'A macrolide alone'],
    answer:0,
    why:'Klebsiella causing pneumonia in a patient with alcohol use disorder, with ESBL production, is treated with a carbapenem; carbapenem-resistant strains require newer beta-lactam/inhibitor combinations.'
  },
  {
    id:'BAC3-046', m:'m5', area:'Salmonella, Shigella & Klebsiella', level:'application',
    stem:'A patient with gastroenteritis after eating undercooked poultry has a non-lactose-fermenting, H2S-positive organism recovered from stool. Most cases require which management?',
    options:['Supportive fluids, with antibiotics reserved for severe or high-risk cases', 'Immediate ceftriaxone regardless of severity', 'Antimotility drugs as first-line therapy', 'No treatment is ever appropriate'],
    answer:0,
    why:'Non-typhoidal Salmonella gastroenteritis is usually managed with fluids alone; antibiotics are reserved for severe illness or high-risk patients.'
  },
  {
    id:'BAC3-047', m:'m5', area:'Vibrio, Campylobacter & H. pylori', level:'concept',
    stem:'Which organism is a curved, \u201cgull-wing\u201d rod that grows at 42\u00b0C and is linked to poultry and unpasteurized milk?',
    options:['Campylobacter jejuni', 'Vibrio cholerae', 'Helicobacter pylori', 'Shigella'],
    answer:0,
    why:'Campylobacter jejuni is a curved, gull-wing-shaped rod that grows at 42\u00b0C and is classically linked to poultry and unpasteurized milk.'
  },
  {
    id:'BAC3-048', m:'m5', area:'Vibrio, Campylobacter & H. pylori', level:'application',
    stem:'Which regimen is first-line for confirmed Helicobacter pylori infection?',
    options:['Bismuth quadruple therapy for 10-14 days', 'A single dose of azithromycin', 'Doxycycline monotherapy', 'Rehydration alone'],
    answer:0,
    why:'Bismuth quadruple therapy (a proton pump inhibitor, bismuth, tetracycline, and a nitroimidazole) for 10-14 days is first-line for H. pylori, with cure confirmed 4 or more weeks later.'
  },
  {
    id:'BAC3-049', m:'m5', area:'Vibrio, Campylobacter & H. pylori', level:'integration',
    stem:'A patient with profuse, rice-water diarrhea after drinking contaminated water is severely dehydrated. What is the single most important intervention?',
    options:['Rehydration, oral or IV', 'Doxycycline alone', 'Loperamide', 'Broad-spectrum antibiotics without fluids'],
    answer:0,
    why:'Rehydration is the life-saving intervention in cholera; doxycycline or azithromycin can shorten the illness but does not replace the need for aggressive fluid replacement.'
  },
  {
    id:'BAC3-050', m:'m5', area:'Where the enteric bacteria strike', level:'integration',
    stem:'A patient has watery, non-bloody diarrhea with no fever. Which mechanism and site are most consistent with this presentation?',
    options:['A toxin acting on the small intestine, without tissue invasion', 'Bacterial invasion and destruction of the colon wall', 'Shiga toxin damage to the colon', 'Direct colonization of the stomach'],
    answer:0,
    why:'Watery, non-bloody, afebrile diarrhea is most consistent with a toxin-mediated mechanism acting on the small intestine (such as ETEC or cholera), without invading or destroying tissue.'
  },
  {
    id:'BAC3-051', m:'m5', area:'Where the enteric bacteria strike', level:'concept',
    stem:'Which single enteric organism in this module is best described as living in the stomach rather than the small intestine or colon?',
    options:['Helicobacter pylori', 'Campylobacter jejuni', 'Vibrio cholerae', 'Shigella'],
    answer:0,
    why:'H. pylori is the outlier of the group: it colonizes the stomach itself rather than causing disease via toxin action in the small intestine or invasion of the colon.'
  },
  {
    id:'BAC3-052', m:'m6', area:'Pseudomonas: the opportunist', level:'concept',
    stem:'Which Pseudomonas aeruginosa feature enhances adherence to mucous membranes and prevents antibody binding?',
    options:['The glycocalyx (slime layer)', 'Exotoxin A', 'Pyocyanin', 'Elastase'],
    answer:0,
    why:'The glycocalyx (slime layer) enhances mucous membrane adherence and helps the organism evade antibody binding, contributing to chronic infections such as those in cystic fibrosis.'
  },
  {
    id:'BAC3-053', m:'m6', area:'Pseudomonas: the opportunist', level:'application',
    stem:'A blood culture grows an oxidase-positive, gram-negative rod producing a blue-green pigment with a fruity smell. Which organism is this?',
    options:['Pseudomonas aeruginosa', 'Klebsiella pneumoniae', 'Vibrio cholerae', 'Francisella tularensis'],
    answer:0,
    why:'Blue-green pigment (pyocyanin) with a fruity odor and a positive oxidase test are classic identifying features of Pseudomonas aeruginosa.'
  },
  {
    id:'BAC3-054', m:'m6', area:'Pseudomonas: the opportunist', level:'integration',
    stem:'A patient with a difficult-to-treat, resistant Pseudomonas aeruginosa infection needs an agent from the newer beta-lactam/beta-lactamase-inhibitor class. Which of the following fits?',
    options:['Ceftazidime-avibactam', 'Amoxicillin-clavulanate', 'Nitrofurantoin', 'Trimethoprim-sulfamethoxazole'],
    answer:0,
    why:'Ceftazidime-avibactam is one of the newer agents (along with ceftolozane-tazobactam, imipenem-relebactam, and cefiderocol) reserved for difficult-to-treat, resistant P. aeruginosa.'
  },
  {
    id:'BAC3-055', m:'m6', area:'H. influenzae & B. pertussis: vaccine-preventable', level:'concept',
    stem:'Which toxin does Bordetella pertussis produce that ADP-ribosylates a G protein and causes lymphocytosis?',
    options:['Pertussis toxin', 'Tracheal cytotoxin', 'Adenylate cyclase toxin', 'Diphtheria toxin'],
    answer:0,
    why:'Pertussis toxin ADP-ribosylates the Gi protein, raising cAMP and causing the characteristic lymphocytosis of pertussis. Tracheal cytotoxin instead kills ciliated respiratory cells.'
  },
  {
    id:'BAC3-056', m:'m6', area:'H. influenzae & B. pertussis: vaccine-preventable', level:'application',
    stem:'A 2-week-old infant\u2019s cough sounds like an ordinary cold. Three weeks later, the infant develops severe coughing fits ending in vomiting. What is the most likely diagnosis and current stage?',
    options:['Pertussis, paroxysmal stage', 'Pertussis, catarrhal stage', 'Diphtheria, respiratory stage', 'Tularemia, pulmonary stage'],
    answer:0,
    why:'The initial cold-like illness is the catarrhal stage of pertussis; the subsequent severe coughing fits with vomiting mark the paroxysmal stage.'
  },
  {
    id:'BAC3-057', m:'m6', area:'H. influenzae & B. pertussis: vaccine-preventable', level:'application',
    stem:'Which diagnostic test is now preferred for Bordetella pertussis, over the older fluorescent antibody method?',
    options:['PCR of a nasopharyngeal swab', 'Blood culture', 'Urine antigen testing', 'Skin biopsy'],
    answer:0,
    why:'PCR of a nasopharyngeal swab is now the preferred diagnostic method for pertussis; culture on Bordet-Gengou or Regan-Lowe medium is slower and less sensitive.'
  },
  {
    id:'BAC3-058', m:'m6', area:'Tularemia and plague: zoonotic hazards', level:'concept',
    stem:'Which organism produces only endotoxin, with no exotoxin, among the zoonotic organisms in this module?',
    options:['Francisella tularensis', 'Yersinia pestis', 'Bordetella pertussis', 'Pseudomonas aeruginosa'],
    answer:0,
    why:'F. tularensis produces endotoxin but no exotoxin. Y. pestis, in contrast, produces an antiphagocytic capsule, endotoxin, exotoxin, and Yops.'
  },
  {
    id:'BAC3-059', m:'m6', area:'Tularemia and plague: zoonotic hazards', level:'application',
    stem:'A hunter develops fever and a skin ulcer with swollen lymph nodes after skinning a wild rabbit. Which organism and treatment are most appropriate?',
    options:['Francisella tularensis; a fluoroquinolone or doxycycline', 'Yersinia pestis; gentamicin', 'Bacillus anthracis; ciprofloxacin', 'Corynebacterium diphtheriae; penicillin'],
    answer:0,
    why:'Exposure to a wild rabbit is classic for tularemia (F. tularensis), treated with a fluoroquinolone or doxycycline, with an aminoglycoside reserved for severe disease.'
  },
  {
    id:'BAC3-060', m:'m6', area:'Anaerobes & the encapsulated-organism synthesis', level:'concept',
    stem:'Which finding is a classic clinical clue for an anaerobic infection?',
    options:['Foul-smelling discharge and gas in the tissue', 'A bright red, well-demarcated rash', 'A rapidly rising white blood cell count alone', 'Photophobia and neck stiffness'],
    answer:0,
    why:'Foul-smelling discharge, gas in the tissue, and necrotic tissue are classic clinical clues that point toward an anaerobic infection.'
  },
  {
    id:'BAC3-061', m:'m6', area:'Anaerobes & the encapsulated-organism synthesis', level:'application',
    stem:'A patient develops a lung abscess after an episode of aspiration. Which anaerobes, based on their mouth origin, are most likely involved?',
    options:['Prevotella and Fusobacterium', 'Bacteroides fragilis', 'Clostridium tetani', 'Listeria monocytogenes'],
    answer:0,
    why:'Prevotella and Fusobacterium are mouth anaerobes associated with aspiration pneumonia and lung or brain abscess, while Bacteroides fragilis (a colon anaerobe) points instead toward intra-abdominal abscess.'
  },
  {
    id:'BAC3-062', m:'m6', area:'Anaerobes & the encapsulated-organism synthesis', level:'integration',
    stem:'Why does dexamethasone matter in suspected pneumococcal meningitis?',
    options:['It is given with or just before the first antibiotic dose', 'It replaces the need for antibiotics entirely', 'It is given only after a full course of antibiotics is completed', 'It treats Listeria specifically'],
    answer:0,
    why:'Dexamethasone is given with or just before the first antibiotic dose for suspected pneumococcal meningitis, as part of standard management alongside antibiotics chosen to cover resistant pneumococci (such as vancomycin) and, in appropriate age groups, Listeria (ampicillin).'
  }
];
