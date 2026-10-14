/* ============================================================
   QUESTION BANK: Viruses IV · Childhood and Enteric Tract Viruses
   Source: PHA3109 lecture dated 10.13.2026. Written to the Question
   Writing Guidelines. Question IDs are permanent: never renumber.
   CHECKPOINTS  = the short "Can you predict it?" questions in each section
   POOL         = the quiz and mastery-exam questions
   CARDS        = the flashcards
   ============================================================ */
var TOPIC_ID='viruses4';
var TOPIC_TITLE='Viruses IV · Childhood and Enteric Tract Viruses';

var CHECKPOINTS={
 "k1a": {
  "options": [
   "Rubella virus",
   "HHV-6",
   "Parvovirus B19",
   "Mumps virus"
  ],
  "answer": 2,
  "why": "Parvovirus B19 is a nonenveloped, icosahedral, single-stranded DNA virus. HHV-6 has a double-stranded DNA genome and an envelope, rubella and mumps are enveloped RNA viruses."
 },
 "k1b": {
  "options": [
   "It is double-stranded DNA, which host polymerases cannot read",
   "It is negative-sense RNA, which cannot be translated until it is copied",
   "It is single-stranded DNA, which must be made double-stranded first",
   "It is positive-sense RNA, which is edited before translation"
  ],
  "answer": 1,
  "why": "A negative-sense RNA genome cannot act as mRNA. The virion must bring a polymerase that copies it into positive-sense mRNA, and the host cell has no enzyme that does this."
 },
 "k1c": {
  "options": [
   "Rule out viral causes, because viral rashes look distinct",
   "Label it measles, because measles is the best-known rash virus",
   "Treat the rash as nonspecific and gather exposure, vaccination, and other clinical clues",
   "Label it rubella, because rubella rashes are mild"
  ],
  "answer": 2,
  "why": "Several childhood viruses cause a maculopapular rash, so the rash is a weak clue by itself. Fever pattern, mouth findings, exposure, and vaccine status separate them."
 },
 "k2a": {
  "options": [
   "From the day the fever breaks to 10 days later",
   "From 4 days before the rash to 4 days after it",
   "From 7 days before the rash to the day it appears",
   "From the day the rash appears to 2 days later"
  ],
  "answer": 1,
  "why": "Measles is contagious from about 4 days before rash onset to about 4 days after. Much of the spread happens before anyone knows it is measles."
 },
 "k2b": {
  "options": [
   "About 12 hours",
   "Up to 2 hours",
   "About 5 minutes",
   "About 3 days"
  ],
  "answer": 1,
  "why": "Measles virus can stay infectious in the air for up to 2 hours after the patient has left, which is why Airborne Precautions apply."
 },
 "k2c": {
  "options": [
   "MMR within 7 days, immune globulin within 14 days",
   "MMR within 72 hours, immune globulin within 6 days",
   "MMR within 6 days, immune globulin within 72 hours",
   "MMR within 24 hours, immune globulin within 72 hours"
  ],
  "answer": 1,
  "why": "MMR can be given within 72 hours of exposure. Immune globulin has a longer window, up to 6 days. Whether either is appropriate depends on the person’s age, pregnancy, and immune status."
 },
 "k3a": {
  "options": [
   "Upper respiratory tract, then blood, then reticuloendothelial cells, then skin",
   "Blood, then skin, then upper respiratory tract",
   "Gut, then lymph nodes, then nerves",
   "Skin, then blood, then upper respiratory tract, then reticuloendothelial cells"
  ],
  "answer": 0,
  "why": "Measles starts in the upper respiratory tract, spreads in the blood, replicates a second time in reticuloendothelial cells, and then reaches the skin."
 },
 "k3b": {
  "options": [
   "A cytotoxic T-cell response against virus-infected skin cells",
   "A toxin released by the virus",
   "Direct virus-induced lysis of skin cells alone",
   "Antibody that blocks blood flow to the skin"
  ],
  "answer": 0,
  "why": "The rash appears when cytotoxic T cells attack virus-infected cells in the skin. It is an immune response, which is why it appears as immunity develops."
 },
 "k3c": {
  "options": [
   "On the lining of the cheek inside the mouth",
   "Behind the ears",
   "Under the nails",
   "On the palms and soles"
  ],
  "answer": 0,
  "why": "Koplik spots are small white spots on the buccal mucosa, and they can appear before the skin rash."
 },
 "k4a": {
  "options": [
   "Heart valves, bone marrow, and thyroid",
   "Lungs, liver, kidneys, and spleen",
   "Testes, ovaries, pancreas, and meninges",
   "Skin, eyes, and inner ear"
  ],
  "answer": 2,
  "why": "Mumps spreads from the respiratory tract to the parotid glands and can involve the testes, ovaries, pancreas, and meninges."
 },
 "k4b": {
  "options": [
   "It is possible but uncommon, and it is linked to bilateral orchitis",
   "It occurs after mumps meningitis",
   "It occurs after parotitis in children",
   "It is the expected result of orchitis in postpubertal males"
  ],
  "answer": 0,
  "why": "Orchitis occurs in postpubertal males, and sterility is a rare outcome that is linked to involvement of both testes."
 },
 "k4c": {
  "options": [
   "Usually benign",
   "Usually requires an antiviral drug",
   "Usually fatal within days",
   "Usually leaves permanent paralysis"
  ],
  "answer": 0,
  "why": "Mumps meningitis is typically benign. There is no antiviral for mumps, so care is supportive."
 },
 "k5a": {
  "options": [
   "Nasopharynx and local nodes, then viremia, then skin and organs",
   "Parotid glands, then testes, then meninges",
   "Skin, then viremia, then nasopharynx",
   "Gut, then lymph nodes, then brain"
  ],
  "answer": 0,
  "why": "Rubella replicates in the nasopharynx and local lymph nodes, enters the blood (viremia), and then reaches the skin and other organs, including the placenta in pregnancy."
 },
 "k5b": {
  "options": [
   "The third trimester",
   "The first trimester",
   "The week after delivery",
   "The second trimester"
  ],
  "answer": 1,
  "why": "Rubella in the first trimester is linked to the most profound congenital damage (congenital rubella syndrome)."
 },
 "k5c": {
  "options": [
   "They shed virus if they develop a rash",
   "They shed virus for months after birth",
   "They stop shedding virus at birth",
   "They shed virus for hours after birth"
  ],
  "answer": 1,
  "why": "Infants with congenital rubella can shed virus for months, so they can infect people around them even though they look well."
 },
 "k6a": {
  "options": [
   "Two doses, at 12–15 months and at 4–6 years",
   "Two doses, at birth and at 6 months",
   "Three doses, at 2, 4, and 6 months",
   "One dose at 12 months"
  ],
  "answer": 0,
  "why": "MMR is given as two doses, at 12–15 months and again at 4–6 years."
 },
 "k6b": {
  "options": [
   "During the second trimester",
   "During the first trimester",
   "Before pregnancy, or after delivery",
   "During the third trimester"
  ],
  "answer": 2,
  "why": "MMR is a live vaccine and is not given during pregnancy. A non-immune woman can be vaccinated before pregnancy or postpartum."
 },
 "k6c": {
  "options": [
   "Measles, mumps, and parvovirus B19",
   "Measles, rubella, and HHV-6",
   "Measles, mumps, and rubella",
   "Mumps, rubella, and parvovirus B19"
  ],
  "answer": 2,
  "why": "MMR covers measles, mumps, and rubella. There is no vaccine for parvovirus B19 or HHV-6 in this lecture."
 },
 "k7a": {
  "options": [
   "Erythroid precursors (erythroblasts) in the bone marrow",
   "Mature red blood cells in the blood",
   "Platelets",
   "Hepatocytes"
  ],
  "answer": 0,
  "why": "B19 infects erythroblasts and halts red cell production. The anemia follows from that."
 },
 "k7b": {
  "options": [
   "A patient with sickle cell disease",
   "A patient with asthma",
   "A patient with type 2 diabetes",
   "A patient with a healed fracture"
  ],
  "answer": 0,
  "why": "Aplastic crisis is a sudden drop in red cell production in people with a hemolytic anemia such as sickle cell disease, thalassemia, or hereditary spherocytosis."
 },
 "k7c": {
  "options": [
   "Immune complexes",
   "Direct infection of the joint by the virus",
   "A bacterial superinfection",
   "A toxin made by the virus"
  ],
  "answer": 0,
  "why": "The rash and arthritis of B19 are linked to immune complexes, which appear as antibody is made."
 },
 "k8a": {
  "options": [
   "HHV-6",
   "Rubella virus",
   "Mumps virus",
   "Measles virus"
  ],
  "answer": 0,
  "why": "Roseola, caused by HHV-6, is a high fever followed by a rash that appears after the fever resolves."
 },
 "k8b": {
  "options": [
   "It stays latent and can reactivate",
   "It causes no later problems",
   "It is cleared completely",
   "It integrates as a provirus"
  ],
  "answer": 0,
  "why": "HHV-6 is a herpesvirus. It becomes latent after infection and can reactivate, which is why immunity does not mean the virus is gone."
 },
 "k8c": {
  "options": [
   "Oseltamivir or zanamivir",
   "Ribavirin or interferon",
   "Amoxicillin or doxycycline",
   "Foscarnet or ganciclovir"
  ],
  "answer": 3,
  "why": "Foscarnet or ganciclovir are the antivirals listed for HHV-6 in transplant recipients. Routine roseola in a healthy child needs no antiviral."
 },
 "k9a": {
  "options": [
   "Cataracts and heart defects",
   "Fetal skin blisters",
   "Fetal parotitis",
   "Fetal anemia that can progress to hydrops"
  ],
  "answer": 3,
  "why": "B19 infects fetal erythroid precursors. The anemia can cause heart failure and edema (hydrops). Rubella, in contrast, causes malformations."
 },
 "k9b": {
  "options": [
   "MMR is not given during pregnancy",
   "MMR should be given now to protect her",
   "MMR should be given if a rash develops",
   "MMR should be given to the fetus after birth"
  ],
  "answer": 0,
  "why": "MMR contains live attenuated viruses and is not given in pregnancy. The question is about what her immunity and exposure are, not about vaccinating now."
 },
 "k9c": {
  "options": [
   "It is not routine",
   "It is routine for an exposed woman",
   "It replaces the need for immunity before pregnancy",
   "It treats congenital rubella syndrome after birth"
  ],
  "answer": 0,
  "why": "Immune globulin is not routine for rubella. Prevention relies on immunity before pregnancy."
 },
 "k10a": {
  "options": [
   "A DNA genome",
   "A double capsule of peptidoglycan",
   "A lipid envelope",
   "No envelope"
  ],
  "answer": 3,
  "why": "Enteric viruses lack an envelope. Without a lipid envelope to dissolve, they survive stomach acid and bile."
 },
 "k10b": {
  "options": [
   "Shedding begins after symptoms end and lasts a few days",
   "Shedding begins before symptoms and continues for weeks after",
   "Shedding stops once the first episode of vomiting ends",
   "Shedding lasts for a few hours during symptoms"
  ],
  "answer": 1,
  "why": "People shed norovirus before symptoms start and for weeks afterward, so someone who feels well can still spread it."
 },
 "k10c": {
  "options": [
   "Rinse with water alone for 20 seconds",
   "Wash with soap and water for at least 20 seconds",
   "Wash with soap and water for about 5 seconds",
   "Wash once a day, after the last episode of illness"
  ],
  "answer": 1,
  "why": "The lecture recommends washing with soap and water for at least 20 seconds."
 },
 "k11a": {
  "options": [
   "Its genome is DNA",
   "Its genome can act as mRNA as soon as it enters the cell",
   "The host makes the polymerase for it",
   "Its genome is double stranded"
  ],
  "answer": 1,
  "why": "Positive-sense RNA can be translated directly. The cell’s ribosomes make the viral polymerase from the incoming genome."
 },
 "k11b": {
  "options": [
   "Its genome is positive-sense RNA",
   "Its genome is single-stranded DNA",
   "It does not carry one",
   "Its genome is double-stranded RNA in 11 segments, and the cell cannot make mRNA from it"
  ],
  "answer": 3,
  "why": "Cells do not copy double-stranded RNA into mRNA. Rotavirus brings its own polymerase to make mRNA from each of its 11 segments."
 },
 "k11c": {
  "options": [
   "Norovirus and rotavirus",
   "Poliovirus, coxsackievirus, and echovirus",
   "HHV-6 and parvovirus B19",
   "Measles, mumps, and rubella"
  ],
  "answer": 1,
  "why": "The genus Enterovirus (family Picornaviridae) includes poliovirus, coxsackieviruses, and echoviruses. Norovirus and rotavirus are gastroenteritis viruses in other families."
 },
 "k12a": {
  "options": [
   "Within minutes, by skin test",
   "12 to 48 hours, by stool PCR",
   "1 to 2 weeks, by blood culture",
   "3 to 4 weeks, by chest x-ray"
  ],
  "answer": 1,
  "why": "Norovirus symptoms begin about 12 to 48 hours after exposure, and the virus can be detected by PCR on stool."
 },
 "k12b": {
  "options": [
   "7 days",
   "12 hours",
   "48 hours",
   "24 hours"
  ],
  "answer": 2,
  "why": "The lecture advises staying home for 48 hours after symptoms stop, because shedding continues."
 },
 "k12c": {
  "options": [
   "Zinc for 10–14 days",
   "A norovirus vaccine",
   "Antibiotics",
   "Supportive fluids"
  ],
  "answer": 3,
  "why": "Management is supportive with fluids. There is no norovirus vaccine, and antibiotics do not act on viruses."
 },
 "k13a": {
  "options": [
   "Adults over 65",
   "Children 6 to 24 months old",
   "Newborns in the first week",
   "Teenagers"
  ],
  "answer": 1,
  "why": "Rotavirus typically affects children 6 to 24 months old."
 },
 "k13b": {
  "options": [
   "It became less common than rotavirus in children under 5",
   "It disappeared from children under 5",
   "It became limited to adults",
   "It overtook rotavirus as a cause of gastroenteritis in children under 5"
  ],
  "answer": 3,
  "why": "As rotavirus fell with vaccination, norovirus overtook it in U.S. children under 5."
 },
 "k13c": {
  "options": [
   "2 to 3 weeks",
   "12 to 48 hours",
   "1 to 3 days",
   "3 to 6 months"
  ],
  "answer": 2,
  "why": "Rotavirus incubation is 1 to 3 days. Norovirus is faster, at 12 to 48 hours."
 },
 "k14a": {
  "options": [
   "The brain",
   "The epithelium of the small intestine",
   "The skin",
   "The liver"
  ],
  "answer": 1,
  "why": "They infect the epithelium of the small intestine, destroy cells, and disrupt absorption."
 },
 "k14b": {
  "options": [
   "Osmotic diarrhea",
   "Secretory diarrhea",
   "Inflammatory diarrhea",
   "Toxin-mediated diarrhea"
  ],
  "answer": 0,
  "why": "Damaged absorptive cells leave nutrients in the lumen, and water follows by osmosis. Secretion is a separate mechanism that can occur at the same time."
 },
 "k14c": {
  "options": [
   "Antibiotics",
   "An antiviral drug",
   "Oral rehydration solution",
   "Anti-diarrheal drugs"
  ],
  "answer": 2,
  "why": "Oral rehydration solution is first-line. IV fluids are for severe dehydration, and antibiotics do not help a viral infection."
 },
 "k15a": {
  "options": [
   "Both are injections",
   "Rotarix has 2 doses, and RotaTeq has 3 doses",
   "Rotarix has 3 doses, and RotaTeq has 2 doses",
   "Both have 4 doses"
  ],
  "answer": 1,
  "why": "Rotarix is a 2-dose series (2 and 4 months). RotaTeq is a 3-dose series (2, 4, and 6 months). Both are oral."
 },
 "k15b": {
  "options": [
   "6 months",
   "6 weeks",
   "16 weeks",
   "14 weeks 6 days"
  ],
  "answer": 3,
  "why": "The first dose must be given by 14 weeks 6 days. The last dose must be given by 8 months 0 days."
 },
 "k15c": {
  "options": [
   "Breastfeeding",
   "Mild cold",
   "Prematurity",
   "Prior intussusception"
  ],
  "answer": 3,
  "why": "Severe combined immunodeficiency (SCID) and a history of intussusception are contraindications."
 },
 "k16a": {
  "options": [
   "Alimentary, lymphatic, viremic, neurologic",
   "Neurologic, alimentary, lymphatic, viremic",
   "Viremic, alimentary, neurologic, lymphatic",
   "Lymphatic, neurologic, alimentary, viremic"
  ],
  "answer": 0,
  "why": "Poliovirus enters through the gut (alimentary), spreads to lymphatic tissue, enters the blood (viremic), and in a small fraction reaches the nervous system."
 },
 "k16b": {
  "options": [
   "At the skin",
   "At the viremic stage, before the nervous system",
   "At the neurologic stage",
   "At the alimentary stage"
  ],
  "answer": 1,
  "why": "Most infections stop at the viremic stage. About 1% of infections in non-immunized people reach the nervous system and cause flaccid paralysis."
 },
 "k16c": {
  "options": [
   "Inactivated poliovirus vaccine (IPV)",
   "Rotarix",
   "MMR",
   "Oral poliovirus vaccine (OPV)"
  ],
  "answer": 3,
  "why": "OPV is given by mouth and produces gut IgA as well as serum antibody. IPV is injected and has little effect in the gut."
 },
 "k17a": {
  "options": [
   "Poliovirus",
   "Coxsackievirus A",
   "Coxsackievirus B",
   "Echovirus"
  ],
  "answer": 1,
  "why": "Coxsackie A is linked to herpangina and hand-foot-and-mouth disease, which involve skin and mucous membranes."
 },
 "k17b": {
  "options": [
   "Norovirus",
   "Coxsackievirus A",
   "Coxsackievirus B",
   "Rotavirus"
  ],
  "answer": 2,
  "why": "Coxsackie B is linked to pleurodynia and myocarditis or pericarditis. It targets heart, pleura, pancreas, and liver."
 },
 "k17c": {
  "options": [
   "Parvovirus B19 and HHV-6",
   "Norovirus and rotavirus",
   "Rubella virus and measles virus",
   "Coxsackieviruses and echoviruses"
  ],
  "answer": 3,
  "why": "Coxsackieviruses and echoviruses are among the enteroviruses that can cause aseptic meningitis."
 },
 "k18a": {
  "options": [
   "Rotavirus",
   "Measles",
   "Poliovirus",
   "Parvovirus B19"
  ],
  "answer": 0,
  "why": "Rotavirus and norovirus infect the intestinal epithelium and cause local disease. The others spread through the blood."
 },
 "k18b": {
  "options": [
   "The virus must be shed in stool",
   "The virus must reach the blood or lymph",
   "The virus must be airborne",
   "The virus must be enveloped"
  ],
  "answer": 1,
  "why": "Systemic spread requires the virus to move through blood or lymph to reach other tissues."
 },
 "k18c": {
  "options": [
   "It is released from the gut as a toxin that reaches nerves",
   "It crosses directly from the stomach into the brain",
   "It needs a second, airborne route of entry",
   "It spreads through lymphatic tissue and blood to the nervous system"
  ],
  "answer": 3,
  "why": "Gut entry does not guarantee gut-only disease. Poliovirus spreads through lymphatic tissue and blood, and in a small fraction reaches motor neurons."
 }
};

var CARDS=[
 {
  "id": "V4-CARD-01",
  "t": "Measles virus: genome and envelope",
  "d": "Paramyxovirus. Negative-sense single-stranded RNA, helical capsid, enveloped. Carries an RNA-dependent RNA polymerase in the virion."
 },
 {
  "id": "V4-CARD-02",
  "t": "Mumps virus: genome and envelope",
  "d": "Paramyxovirus like measles. Negative-sense single-stranded RNA, helical capsid, enveloped, with a virion polymerase."
 },
 {
  "id": "V4-CARD-03",
  "t": "Rubella virus: genome and envelope",
  "d": "Togavirus. Positive-sense single-stranded RNA, icosahedral capsid, enveloped."
 },
 {
  "id": "V4-CARD-04",
  "t": "Parvovirus B19: genome and envelope",
  "d": "Parvovirus. Single-stranded DNA, icosahedral capsid, no envelope."
 },
 {
  "id": "V4-CARD-05",
  "t": "HHV-6: genome and envelope",
  "d": "Herpesvirus. Double-stranded DNA, icosahedral capsid, enveloped. Two serotypes. Latent after infection."
 },
 {
  "id": "V4-CARD-06",
  "t": "Why measles and mumps carry a polymerase",
  "d": "Their negative-sense RNA cannot be translated directly, and host cells have no enzyme that copies it into mRNA."
 },
 {
  "id": "V4-CARD-07",
  "t": "Measles: signature signs",
  "d": "High fever and a maculopapular rash. Koplik spots (white spots on the cheek lining) can appear before the rash."
 },
 {
  "id": "V4-CARD-08",
  "t": "Measles: how it spreads",
  "d": "Droplets and airborne. Virus can stay infectious in the air for up to 2 hours after the patient leaves."
 },
 {
  "id": "V4-CARD-09",
  "t": "Measles: contagious period",
  "d": "From about 4 days before the rash to about 4 days after. Airborne Precautions apply."
 },
 {
  "id": "V4-CARD-10",
  "t": "Measles pathogenesis in order",
  "d": "Upper respiratory tract, then blood, then reticuloendothelial cells (second round of replication), then skin."
 },
 {
  "id": "V4-CARD-11",
  "t": "Measles rash: cause",
  "d": "Cytotoxic T cells attacking virus-infected skin cells. The rash is an immune response."
 },
 {
  "id": "V4-CARD-12",
  "t": "Measles fusion protein",
  "d": "Viral fusion protein joins infected cells together, producing multinucleated giant cells."
 },
 {
  "id": "V4-CARD-13",
  "t": "Immune amnesia",
  "d": "Measles can erase part of the immune memory from earlier infections and vaccines, leaving the child open to other infections."
 },
 {
  "id": "V4-CARD-14",
  "t": "Measles complications",
  "d": "Diarrhea, otitis media, pneumonia, and encephalitis, in about 30% of U.S. cases. SSPE can appear years later."
 },
 {
  "id": "V4-CARD-15",
  "t": "Vitamin A in measles",
  "d": "Lowered deaths in children under 2 years in a Cochrane subgroup. Not an antiviral."
 },
 {
  "id": "V4-CARD-16",
  "t": "Measles post-exposure options",
  "d": "MMR within 72 hours, or immune globulin within 6 days, when appropriate for the person."
 },
 {
  "id": "V4-CARD-17",
  "t": "MMR vaccine",
  "d": "Live vaccine for measles, mumps, and rubella. Two doses, at 12–15 months and 4–6 years. Not given in pregnancy or severe immunocompromise."
 },
 {
  "id": "V4-CARD-18",
  "t": "Mumps: spread within the body",
  "d": "Respiratory droplets, then the parotid glands, with possible involvement of testes, ovaries, pancreas, and meninges."
 },
 {
  "id": "V4-CARD-19",
  "t": "Mumps orchitis",
  "d": "Occurs in postpubertal males. Sterility is rare and linked to bilateral involvement."
 },
 {
  "id": "V4-CARD-20",
  "t": "Mumps meningitis",
  "d": "Typically benign. Care is supportive."
 },
 {
  "id": "V4-CARD-21",
  "t": "Rubella: spread within the body",
  "d": "Nasopharynx and local lymph nodes, then viremia, then skin and organs. The placenta can be reached in pregnancy."
 },
 {
  "id": "V4-CARD-22",
  "t": "Congenital rubella syndrome",
  "d": "Profound fetal damage, greatest with first-trimester infection. Infants can shed virus for months."
 },
 {
  "id": "V4-CARD-23",
  "t": "Rubella and pregnancy",
  "d": "MMR is not given in pregnancy. A non-immune woman is vaccinated before pregnancy or after delivery. Immune globulin is not routine."
 },
 {
  "id": "V4-CARD-24",
  "t": "Parvovirus B19: target cell",
  "d": "Erythroid precursors (erythroblasts). Infection halts red cell production."
 },
 {
  "id": "V4-CARD-25",
  "t": "Parvovirus B19: classic signs",
  "d": "Slapped-cheek rash. Rash and arthritis are linked to immune complexes."
 },
 {
  "id": "V4-CARD-26",
  "t": "Aplastic crisis",
  "d": "A sudden drop in red cell production caused by B19 in people with hemolytic anemias such as sickle cell disease, thalassemia, or hereditary spherocytosis."
 },
 {
  "id": "V4-CARD-27",
  "t": "Fetal hydrops from B19",
  "d": "Fetal erythroid infection, then anemia, then heart failure, then edema (hydrops). Risk highest at weeks 9–20, and most fetal infections resolve."
 },
 {
  "id": "V4-CARD-28",
  "t": "B19 treatment",
  "d": "Supportive care. Transfusion for severe anemia. IVIG for people who cannot clear the virus, such as immunocompromised patients."
 },
 {
  "id": "V4-CARD-29",
  "t": "Roseola (HHV-6)",
  "d": "High fever for days, then a rash that appears after the fever resolves."
 },
 {
  "id": "V4-CARD-30",
  "t": "HHV-6 latency and reactivation",
  "d": "After infection the virus is latent. Reactivation in transplant recipients can cause encephalitis, pneumonia, and hepatitis. Foscarnet or ganciclovir are listed."
 },
 {
  "id": "V4-CARD-31",
  "t": "Enteric virus shared features",
  "d": "Spread by the fecal-oral route, no envelope (so they survive stomach acid), RNA genomes."
 },
 {
  "id": "V4-CARD-32",
  "t": "Two enteric virus groups",
  "d": "Gastroenteritis viruses (norovirus, rotavirus) and the genus Enterovirus (poliovirus, coxsackievirus, echovirus)."
 },
 {
  "id": "V4-CARD-33",
  "t": "Norovirus: genome",
  "d": "Caliciviridae. Positive-sense single-stranded RNA, no polymerase in the virion."
 },
 {
  "id": "V4-CARD-34",
  "t": "Rotavirus: genome",
  "d": "Reoviridae. Double-stranded RNA in 11 segments, with a polymerase in the virion."
 },
 {
  "id": "V4-CARD-35",
  "t": "Norovirus: why it spreads easily",
  "d": "Low infectious dose, shedding before symptoms and for weeks after, and persistence on surfaces for days."
 },
 {
  "id": "V4-CARD-36",
  "t": "Norovirus: course and diagnosis",
  "d": "Onset 12–48 hours after exposure. Stool PCR. Supportive fluids."
 },
 {
  "id": "V4-CARD-37",
  "t": "Norovirus: prevention",
  "d": "Wash with soap and water for at least 20 seconds. Stay home for 48 hours after symptoms stop. No vaccine."
 },
 {
  "id": "V4-CARD-38",
  "t": "Rotavirus: who and when",
  "d": "Children 6–24 months old. Incubation 1–3 days. Fever and vomiting ease on day 2, with diarrhea for 5–7 days."
 },
 {
  "id": "V4-CARD-39",
  "t": "Gastroenteritis pathogenesis",
  "d": "Virus infects small-intestine epithelium, destroys cells, and disrupts absorption. The main complication is dehydration."
 },
 {
  "id": "V4-CARD-40",
  "t": "Osmotic vs. secretory diarrhea",
  "d": "Osmotic: unabsorbed nutrients hold water in the lumen. Secretory: active fluid secretion into the lumen. They are distinct and can occur together."
 },
 {
  "id": "V4-CARD-41",
  "t": "Rotavirus treatment",
  "d": "Oral rehydration solution. IV fluids for severe dehydration. Zinc for 10–14 days (WHO). Antibiotics do not help."
 },
 {
  "id": "V4-CARD-42",
  "t": "Rotavirus vaccines",
  "d": "Oral and live. Rotarix is 2 doses (2 and 4 months). RotaTeq is 3 doses (2, 4, and 6 months)."
 },
 {
  "id": "V4-CARD-43",
  "t": "Rotavirus vaccine age limits",
  "d": "First dose by 14 weeks 6 days. Last dose by 8 months 0 days."
 },
 {
  "id": "V4-CARD-44",
  "t": "Rotavirus vaccine contraindications",
  "d": "SCID and a history of intussusception. The Rotarix applicator contains latex."
 },
 {
  "id": "V4-CARD-45",
  "t": "Poliovirus: four stages",
  "d": "Alimentary, lymphatic, viremic, neurologic. Most infections stop at the viremic stage."
 },
 {
  "id": "V4-CARD-46",
  "t": "Poliovirus paralysis",
  "d": "About 1% of infections in non-immunized people reach the nervous system, causing flaccid paralysis."
 },
 {
  "id": "V4-CARD-47",
  "t": "IPV vs. OPV",
  "d": "IPV: injected, builds serum antibody, little gut effect. OPV: oral, builds serum antibody and gut IgA, with vaccine-associated paralysis in about 1 per 2–4 million doses."
 },
 {
  "id": "V4-CARD-48",
  "t": "Coxsackievirus A",
  "d": "Herpangina, hand-foot-and-mouth disease, and aseptic meningitis. Skin and mucous membranes."
 },
 {
  "id": "V4-CARD-49",
  "t": "Coxsackievirus B",
  "d": "Pleurodynia, myocarditis and pericarditis, and severe neonatal myocarditis. Heart, pleura, pancreas, and liver."
 },
 {
  "id": "V4-CARD-50",
  "t": "Echovirus",
  "d": "Aseptic meningitis, febrile illness, and respiratory illness."
 },
 {
  "id": "V4-CARD-51",
  "t": "Local vs. systemic infection",
  "d": "Local: infection stays at the entry site (rotavirus, norovirus in the gut). Systemic: virus spreads through blood or lymph to distant organs (measles, rubella, B19, mumps, poliovirus)."
 }
];

var POOL=[
 {
  "id": "V4-001",
  "m": "m1",
  "area": "Childhood virus features",
  "level": "concept",
  "stem": "Which childhood virus packages an RNA-dependent RNA polymerase in its virion because its genome is negative-sense RNA?",
  "options": [
   "HHV-6",
   "Parvovirus B19",
   "Rubella virus",
   "Measles virus"
  ],
  "answer": 3,
  "why": "Measles virus has a negative-sense RNA genome that cannot be translated directly, so the virion carries a polymerase. Rubella is positive-sense RNA, and B19 and HHV-6 are DNA viruses."
 },
 {
  "id": "V4-002",
  "m": "m1",
  "area": "Childhood virus features",
  "level": "concept",
  "stem": "Which virus in the childhood group has a DNA genome and no envelope?",
  "options": [
   "Parvovirus B19",
   "Mumps virus",
   "Rubella virus",
   "Measles virus"
  ],
  "answer": 0,
  "why": "Parvovirus B19 is a nonenveloped, icosahedral, single-stranded DNA virus. Measles, mumps, and rubella are enveloped RNA viruses."
 },
 {
  "id": "V4-003",
  "m": "m1",
  "area": "Childhood virus features",
  "level": "application",
  "stem": "A 15-month-old has 3 days of high fever. The fever ends, and a rash appears on the trunk. Which virus fits this pattern best?",
  "options": [
   "Parvovirus B19",
   "Rubella virus",
   "HHV-6",
   "Measles virus"
  ],
  "answer": 2,
  "why": "A rash that appears as the fever resolves is the pattern of roseola, which is caused by HHV-6. In measles, the rash appears while the fever is still high."
 },
 {
  "id": "V4-004",
  "m": "m1",
  "area": "Measles transmission and prevention",
  "level": "concept",
  "stem": "Relative to rash onset, which window describes when a person with measles is contagious?",
  "options": [
   "From 4 days before to 4 days after the rash begins",
   "From the day the rash begins to 2 days after",
   "From the day the fever begins to the day it breaks",
   "From 2 days before to the day the rash begins"
  ],
  "answer": 0,
  "why": "A person with measles is contagious from about 4 days before the rash to about 4 days after it. Spread often happens before measles is suspected."
 },
 {
  "id": "V4-005",
  "m": "m1",
  "area": "Measles transmission and prevention",
  "level": "application",
  "stem": "A child in the emergency department has fever, cough, and a maculopapular rash, and measles is suspected. Which type of precautions applies?",
  "options": [
   "Contact Precautions",
   "Droplet Precautions",
   "Airborne Precautions",
   "Standard Precautions"
  ],
  "answer": 2,
  "why": "Measles virus can remain infectious in the air for up to 2 hours, so Airborne Precautions apply."
 },
 {
  "id": "V4-006",
  "m": "m1",
  "area": "Measles transmission and prevention",
  "level": "application",
  "stem": "A pregnant woman with no evidence of measles immunity was exposed 4 days ago. Which post-exposure option is still within its time window and worth discussing with her clinician?",
  "options": [
   "MMR vaccine, which is given within 72 hours",
   "Immune globulin, which is given within 6 days",
   "An antiviral drug, which is given within 6 days",
   "MMR vaccine, which is given within 6 days"
  ],
  "answer": 1,
  "why": "Immune globulin is given within 6 days of exposure. MMR is a live vaccine that is not given in pregnancy, and its window (72 hours) has also passed. There is no antiviral for measles."
 },
 {
  "id": "V4-007",
  "m": "m1",
  "area": "Measles pathogenesis and complications",
  "level": "concept",
  "stem": "What produces the maculopapular rash of measles?",
  "options": [
   "Antibody that blocks blood flow to the skin",
   "A cytotoxic T-cell response against infected skin cells",
   "A toxin released by the virus",
   "Direct destruction of skin cells by the virus alone"
  ],
  "answer": 1,
  "why": "The measles rash appears when cytotoxic T cells attack virus-infected cells in the skin, so it reflects the immune response."
 },
 {
  "id": "V4-008",
  "m": "m1",
  "area": "Measles pathogenesis and complications",
  "level": "application",
  "stem": "Months after measles, a child gets several infections that were not expected for that child. Which concept explains this?",
  "options": [
   "Latent reactivation of measles virus in lymph nodes",
   "Antigenic variation of the measles virus surface protein",
   "Immune amnesia, in which measles damages existing immune memory",
   "Loss of maternal antibody at 12 months"
  ],
  "answer": 2,
  "why": "Measles can erase part of the immune memory built up from earlier infections and vaccines, which leaves the child more open to other infections."
 },
 {
  "id": "V4-009",
  "m": "m1",
  "area": "Measles pathogenesis and complications",
  "level": "concept",
  "stem": "Which measles complication can appear years after the acute illness?",
  "options": [
   "Otitis media",
   "Pneumonia",
   "Subacute sclerosing panencephalitis (SSPE)",
   "Diarrhea"
  ],
  "answer": 2,
  "why": "SSPE is a late, progressive brain disease that appears years after measles. Otitis media, diarrhea, and pneumonia occur during or soon after the illness."
 },
 {
  "id": "V4-010",
  "m": "m1",
  "area": "Measles pathogenesis and complications",
  "level": "application",
  "stem": "Which statement about vitamin A in measles matches the evidence in the lecture?",
  "options": [
   "Vitamin A replaced the need for MMR",
   "Vitamin A prevented the rash",
   "Vitamin A lowered deaths in children under 2 years",
   "Vitamin A cured measles in adults"
  ],
  "answer": 2,
  "why": "A Cochrane subgroup analysis found fewer deaths with vitamin A in children under 2. It is not an antiviral and does not replace vaccination."
 },
 {
  "id": "V4-011",
  "m": "m1",
  "area": "Measles transmission and prevention",
  "level": "integration",
  "stem": "A 14-month-old with fever, cough, a rash, and white spots inside the cheeks sits in a waiting room beside a pregnant woman. Which combination of actions best fits?",
  "options": [
   "Give the child MMR and send the family home",
   "Move the child to airborne isolation and review immunity and timing for nearby people",
   "Give the pregnant woman MMR within 72 hours",
   "Treat with an antiviral and keep the child in the waiting room"
  ],
  "answer": 1,
  "why": "White spots inside the cheeks are Koplik spots, which point to measles. Airborne isolation limits spread, and exposed people are reviewed for immunity and the timing of post-exposure options. MMR is not given in pregnancy."
 },
 {
  "id": "V4-012",
  "m": "m2",
  "area": "Mumps tissue tropism",
  "level": "concept",
  "stem": "Which set of sites can mumps involve in addition to the parotid glands?",
  "options": [
   "Heart valves and thyroid",
   "Skin, eyes, and inner ear",
   "Testes, ovaries, pancreas, and meninges",
   "Liver, kidneys, and spleen"
  ],
  "answer": 2,
  "why": "After respiratory entry, mumps can reach the parotid glands, testes, ovaries, pancreas, and meninges."
 },
 {
  "id": "V4-013",
  "m": "m2",
  "area": "Mumps tissue tropism",
  "level": "application",
  "stem": "A 19-year-old man has painful swelling of one testis after parotid swelling. Which statement about the long-term outlook is best supported?",
  "options": [
   "Sterility is a rare outcome and is linked to bilateral orchitis",
   "Sterility is expected in postpubertal males with orchitis",
   "Sterility results from mumps meningitis",
   "Sterility follows parotitis in children"
  ],
  "answer": 0,
  "why": "Mumps orchitis occurs in postpubertal males. Sterility is rare and is tied to involvement of both testes."
 },
 {
  "id": "V4-014",
  "m": "m2",
  "area": "Mumps tissue tropism",
  "level": "concept",
  "stem": "How does mumps spread from person to person?",
  "options": [
   "By contaminated water",
   "By the fecal-oral route",
   "By mosquito bite",
   "By respiratory droplets"
  ],
  "answer": 3,
  "why": "Mumps spreads by respiratory droplets, which is why it begins in the respiratory tract."
 },
 {
  "id": "V4-015",
  "m": "m2",
  "area": "Mumps tissue tropism",
  "level": "application",
  "stem": "A teenager with parotitis develops headache and neck stiffness. Which statement about the meningitis fits mumps?",
  "options": [
   "It typically requires foscarnet",
   "It is typically benign",
   "It typically causes paralysis",
   "It typically causes permanent hearing loss"
  ],
  "answer": 1,
  "why": "Mumps meningitis is typically benign. There is no antiviral for mumps, so care is supportive."
 },
 {
  "id": "V4-016",
  "m": "m2",
  "area": "Rubella and congenital infection",
  "level": "concept",
  "stem": "Which sequence describes the spread of rubella virus?",
  "options": [
   "Gut, then lymph nodes, then brain",
   "Nasopharynx and local nodes, then viremia, then skin and organs",
   "Parotid glands, then testes, then meninges",
   "Skin, then viremia, then nasopharynx"
  ],
  "answer": 1,
  "why": "Rubella replicates in the nasopharynx and local lymph nodes, spreads in the blood, and then reaches the skin and other organs."
 },
 {
  "id": "V4-017",
  "m": "m2",
  "area": "Rubella and congenital infection",
  "level": "application",
  "stem": "A woman is infected with rubella in the first trimester. Which statement about the fetus is best supported?",
  "options": [
   "The risk of harm is greatest, with profound damage",
   "The risk of harm is the same at each stage",
   "Harm is limited to a temporary rash",
   "The placenta blocks the virus"
  ],
  "answer": 0,
  "why": "First-trimester rubella is linked to the most profound damage, called congenital rubella syndrome."
 },
 {
  "id": "V4-018",
  "m": "m2",
  "area": "Rubella and congenital infection",
  "level": "application",
  "stem": "Which statement about a newborn with congenital rubella is supported?",
  "options": [
   "The infant sheds virus while a rash is visible",
   "The infant is not infectious after birth",
   "The infant clears the virus within a day",
   "The infant can shed virus for months"
  ],
  "answer": 3,
  "why": "Infants with congenital rubella can shed virus for months, so they can be a source of infection for contacts."
 },
 {
  "id": "V4-019",
  "m": "m2",
  "area": "MMR vaccination",
  "level": "concept",
  "stem": "What is the standard MMR schedule in the lecture?",
  "options": [
   "Two doses, at birth and 1 month",
   "One dose, at 12 months",
   "Three doses, at 2, 4, and 6 months",
   "Two doses, at 12–15 months and 4–6 years"
  ],
  "answer": 3,
  "why": "MMR is given as two doses, at 12–15 months and again at 4–6 years."
 },
 {
  "id": "V4-020",
  "m": "m2",
  "area": "MMR vaccination",
  "level": "application",
  "stem": "Which person is a reasonable candidate for MMR now?",
  "options": [
   "A woman who is 30 weeks pregnant",
   "A patient with severe immunocompromise",
   "A woman who is 12 weeks pregnant",
   "A healthy 13-month-old"
  ],
  "answer": 3,
  "why": "MMR is a live vaccine. It is not given in pregnancy or in severe immunocompromise. A healthy toddler is within the routine schedule."
 },
 {
  "id": "V4-021",
  "m": "m2",
  "area": "MMR vaccination",
  "level": "application",
  "stem": "A woman who is not immune to rubella is planning a pregnancy. Which plan fits the lecture?",
  "options": [
   "Wait until a rash develops, and then vaccinate",
   "Vaccinate with MMR in the first trimester",
   "Give routine immune globulin during pregnancy",
   "Vaccinate with MMR before pregnancy, or after delivery"
  ],
  "answer": 3,
  "why": "Because MMR is not given in pregnancy, a non-immune woman is vaccinated before pregnancy or postpartum. Immune globulin is not routine for rubella."
 },
 {
  "id": "V4-022",
  "m": "m2",
  "area": "MMR vaccination",
  "level": "integration",
  "stem": "A woman is 8 weeks pregnant. Her child was exposed to rubella at school. She does not know her immune status. Which statement is best?",
  "options": [
   "Give MMR today to protect her fetus",
   "Establish her immune status with her obstetric clinician, since MMR is not given in pregnancy",
   "Give routine immune globulin, which prevents rubella",
   "No step is needed, since rubella does not affect a fetus"
  ],
  "answer": 1,
  "why": "MMR is not given during pregnancy, and immune globulin is not routine for rubella. The practical step is to establish immunity and exposure with her obstetric clinician."
 },
 {
  "id": "V4-023",
  "m": "m3",
  "area": "Parvovirus B19",
  "level": "concept",
  "stem": "Which cell does parvovirus B19 infect to cause anemia?",
  "options": [
   "Mature neutrophils",
   "Platelets",
   "Erythroid precursors in the bone marrow",
   "Hepatocytes"
  ],
  "answer": 2,
  "why": "B19 infects erythroblasts, which stops red cell production."
 },
 {
  "id": "V4-024",
  "m": "m3",
  "area": "Parvovirus B19",
  "level": "application",
  "stem": "A child with sickle cell disease develops fatigue and pallor with a sudden fall in hemoglobin after a mild illness with a rash on the cheeks. Which process explains this?",
  "options": [
   "A temporary halt in red cell production caused by B19",
   "Immune destruction of platelets",
   "Direct invasion of the brain by B19",
   "A bacterial infection of the bone marrow"
  ],
  "answer": 0,
  "why": "B19 can cause an aplastic crisis in people with hemolytic anemias, because red cells already turn over quickly and a pause in production causes a steep fall."
 },
 {
  "id": "V4-025",
  "m": "m3",
  "area": "Parvovirus B19",
  "level": "concept",
  "stem": "Which fetal sequence follows B19 infection of fetal erythroid precursors?",
  "options": [
   "Heart failure, then anemia, then edema",
   "Fetal anemia, then heart failure, then edema (hydrops)",
   "Cataracts, then deafness, then heart defects",
   "Fetal edema, then anemia, then heart failure"
  ],
  "answer": 1,
  "why": "B19 infects fetal erythroid precursors, causing anemia. The heart works harder, fails, and edema develops (hydrops)."
 },
 {
  "id": "V4-026",
  "m": "m3",
  "area": "Parvovirus B19",
  "level": "concept",
  "stem": "During which weeks of pregnancy is fetal risk from B19 highest?",
  "options": [
   "Weeks 1–4",
   "Weeks 38–40",
   "Weeks 9–20",
   "Weeks 30–36"
  ],
  "answer": 2,
  "why": "Fetal risk from B19 is highest between weeks 9 and 20. Most fetal infections resolve."
 },
 {
  "id": "V4-027",
  "m": "m3",
  "area": "Parvovirus B19",
  "level": "application",
  "stem": "A transplant recipient has chronic anemia that traces to B19 infection. Which treatment is listed in the lecture?",
  "options": [
   "Amoxicillin",
   "Oseltamivir",
   "Zinc",
   "IVIG"
  ],
  "answer": 3,
  "why": "Treatment for B19 is supportive, with transfusion as needed and IVIG for people who cannot clear the virus."
 },
 {
  "id": "V4-028",
  "m": "m3",
  "area": "HHV-6 and roseola",
  "level": "concept",
  "stem": "Which description matches roseola?",
  "options": [
   "High fever for days, then a rash after the fever ends",
   "Slapped-cheek rash with joint pain",
   "Rash first, then fever days later",
   "Parotid swelling with fever"
  ],
  "answer": 0,
  "why": "Roseola, caused by HHV-6, is high fever followed by a rash once the fever resolves."
 },
 {
  "id": "V4-029",
  "m": "m3",
  "area": "HHV-6 and roseola",
  "level": "concept",
  "stem": "Which statement about immunity to HHV-6 is best supported?",
  "options": [
   "Infection gives complete lifelong clearance",
   "The virus is removed from the body within weeks",
   "The virus is cleared by MMR",
   "Infection leaves the virus latent, so it can reactivate"
  ],
  "answer": 3,
  "why": "HHV-6 is a herpesvirus. After the first infection it is latent, and reactivation can occur."
 },
 {
  "id": "V4-030",
  "m": "m3",
  "area": "HHV-6 and roseola",
  "level": "application",
  "stem": "A stem-cell transplant recipient develops confusion and seizures, and HHV-6 reactivation is suspected. Which drugs are listed for treatment?",
  "options": [
   "Oseltamivir or zanamivir",
   "Foscarnet or ganciclovir",
   "Ribavirin or interferon",
   "Amoxicillin or doxycycline"
  ],
  "answer": 1,
  "why": "HHV-6 reactivation in transplant recipients can cause encephalitis, pneumonia, and hepatitis, and foscarnet or ganciclovir are the listed antivirals."
 },
 {
  "id": "V4-031",
  "m": "m3",
  "area": "Pregnancy rash case",
  "level": "application",
  "stem": "A woman who is 20 weeks pregnant is in contact with a child who has a maculopapular rash and no vaccine record. Which outcome is typical of B19 rather than rubella?",
  "options": [
   "Congenital heart defects",
   "Congenital cataracts",
   "Deafness at birth",
   "Fetal anemia that can progress to hydrops"
  ],
  "answer": 3,
  "why": "B19 harms the fetus by destroying erythroid precursors, causing anemia and hydrops. Rubella causes malformations."
 },
 {
  "id": "V4-032",
  "m": "m3",
  "area": "Pregnancy rash case",
  "level": "application",
  "stem": "In the same case, which statement about MMR is correct?",
  "options": [
   "MMR is given if the rash worsens",
   "MMR is not given during pregnancy",
   "MMR is given now to prevent rubella",
   "MMR is given to the child alone"
  ],
  "answer": 1,
  "why": "MMR is a live vaccine and is not given in pregnancy."
 },
 {
  "id": "V4-033",
  "m": "m3",
  "area": "Pregnancy rash case",
  "level": "integration",
  "stem": "A woman at 20 weeks of pregnancy has been near a child with a rash, and the child’s vaccine record is unavailable. Which approach best reflects the lecture?",
  "options": [
   "Name the cause from the rash and begin treatment",
   "Gather exposure, immunity, and timing information and involve her obstetric clinician",
   "Give MMR together with immune globulin",
   "Reassure her that a virus cannot harm a fetus"
  ],
  "answer": 1,
  "why": "A rash alone cannot name the virus, and the possible causes (rubella, B19, measles) have different fetal and maternal risks. Gathering exposure and immunity information is the safe first step."
 },
 {
  "id": "V4-034",
  "m": "m3",
  "area": "Pregnancy rash case",
  "level": "integration",
  "stem": "Which pair matches the virus with its typical harm to a fetus?",
  "options": [
   "Rubella: malformations; B19: anemia and hydrops",
   "Rubella: anemia and hydrops; B19: malformations",
   "Rubella: parotitis; B19: cataracts",
   "Rubella: encephalitis; B19: deafness"
  ],
  "answer": 0,
  "why": "Rubella is linked to congenital malformations, particularly after first-trimester infection. B19 targets erythroid precursors and causes anemia and hydrops."
 },
 {
  "id": "V4-035",
  "m": "m4",
  "area": "Fecal–oral transmission",
  "level": "concept",
  "stem": "Which feature of enteric viruses helps them survive stomach acid?",
  "options": [
   "A lipid envelope",
   "Lack of an envelope",
   "A peptidoglycan wall",
   "A DNA genome"
  ],
  "answer": 1,
  "why": "Enteric viruses lack an envelope. Without a lipid envelope to dissolve, they survive stomach acid."
 },
 {
  "id": "V4-036",
  "m": "m4",
  "area": "Fecal–oral transmission",
  "level": "concept",
  "stem": "Which statement about norovirus shedding and survival is supported?",
  "options": [
   "Shedding occurs in vomit and the virus persists on surfaces for minutes",
   "Shedding stops as soon as vomiting stops",
   "Shedding begins before symptoms and lasts weeks, and the virus persists on surfaces for days",
   "Shedding begins after symptoms end and lasts hours"
  ],
  "answer": 2,
  "why": "Norovirus is shed before symptoms and for weeks after, and it persists on fomites for days."
 },
 {
  "id": "V4-037",
  "m": "m4",
  "area": "Fecal–oral transmission",
  "level": "application",
  "stem": "A food handler has recovered from vomiting and diarrhea 1 day ago and feels well. Which statement fits?",
  "options": [
   "The person is infectious during vomiting and not afterward",
   "The person is not infectious once symptoms stop",
   "The person can return if hand sanitizer is used instead of washing",
   "The person may still shed virus, so 48 hours at home after symptoms stop is advised"
  ],
  "answer": 3,
  "why": "The lecture advises staying home for 48 hours after symptoms stop, because shedding continues."
 },
 {
  "id": "V4-038",
  "m": "m4",
  "area": "Fecal–oral transmission",
  "level": "application",
  "stem": "Which action interrupts the fecal-oral chain at the hands?",
  "options": [
   "Washing with soap and water for at least 20 seconds",
   "Taking an antibiotic",
   "Rinsing with water for 5 seconds",
   "Wearing gloves for the whole shift without changing them"
  ],
  "answer": 0,
  "why": "Soap and water for at least 20 seconds physically removes virus from the hands. Antibiotics do not act on viruses."
 },
 {
  "id": "V4-039",
  "m": "m4",
  "area": "Enteric virus genomes",
  "level": "concept",
  "stem": "Why does norovirus not need to carry a polymerase in its virion?",
  "options": [
   "Its positive-sense RNA genome can act as mRNA",
   "It uses the host cell’s RNA polymerase",
   "Its genome is DNA",
   "Its genome is double stranded"
  ],
  "answer": 0,
  "why": "A positive-sense RNA genome can be translated by host ribosomes as soon as it enters the cell, so the viral polymerase can be made afterward."
 },
 {
  "id": "V4-040",
  "m": "m4",
  "area": "Enteric virus genomes",
  "level": "concept",
  "stem": "Why does rotavirus carry a polymerase in its virion?",
  "options": [
   "Its positive-sense RNA needs to be edited",
   "Its single-stranded DNA genome needs to be converted",
   "Its envelope blocks host enzymes",
   "Its double-stranded RNA genome in 11 segments cannot be read by host enzymes"
  ],
  "answer": 3,
  "why": "Host cells have no enzyme that makes mRNA from double-stranded RNA, so rotavirus brings its own polymerase."
 },
 {
  "id": "V4-041",
  "m": "m4",
  "area": "Enteric virus genomes",
  "level": "application",
  "stem": "Which statement about the genus Enterovirus is correct?",
  "options": [
   "It includes HHV-6",
   "It includes norovirus and rotavirus",
   "It includes poliovirus, coxsackieviruses, and echoviruses",
   "It includes measles and mumps viruses"
  ],
  "answer": 2,
  "why": "The genus Enterovirus is in family Picornaviridae and includes poliovirus, coxsackieviruses, and echoviruses. Norovirus and rotavirus are gastroenteritis viruses in other families."
 },
 {
  "id": "V4-042",
  "m": "m4",
  "area": "Norovirus outbreaks",
  "level": "concept",
  "stem": "How soon after exposure does norovirus illness usually begin, and how can it be identified?",
  "options": [
   "2 to 4 weeks, by throat swab",
   "Less than 1 hour, by stool culture",
   "1 to 2 weeks, by blood culture",
   "12 to 48 hours, by stool PCR"
  ],
  "answer": 3,
  "why": "Norovirus illness begins about 12 to 48 hours after exposure, and stool PCR can identify the virus."
 },
 {
  "id": "V4-043",
  "m": "m4",
  "area": "Norovirus outbreaks",
  "level": "application",
  "stem": "Several residents of a care home develop vomiting and diarrhea over 2 days. Which management step is supported by the lecture?",
  "options": [
   "Give supportive fluids and wash hands with soap and water",
   "Give zinc for 10–14 days to the residents",
   "Give antibiotics to the residents",
   "Give a norovirus vaccine to the residents"
  ],
  "answer": 0,
  "why": "Management is supportive fluids and hygiene. There is no norovirus vaccine, and antibiotics do not act on viruses."
 },
 {
  "id": "V4-044",
  "m": "m4",
  "area": "Norovirus outbreaks",
  "level": "integration",
  "stem": "A kitchen worker with norovirus feels well 24 hours after symptoms stop and asks to return to work. Which reasoning is best?",
  "options": [
   "Shedding stops when symptoms stop, so the worker can return",
   "Shedding continues after symptoms stop, so 48 hours should pass first",
   "The worker can return if gloves are worn",
   "The worker can return after a dose of an antibiotic"
  ],
  "answer": 1,
  "why": "People shed norovirus before symptoms and for weeks afterward. The 48-hour period is a minimum, and it is supported by hand hygiene that uses soap and water."
 },
 {
  "id": "V4-045",
  "m": "m5",
  "area": "Norovirus vs. rotavirus",
  "level": "concept",
  "stem": "Which statement distinguishes rotavirus from norovirus?",
  "options": [
   "Rotavirus has a positive-sense RNA genome",
   "Rotavirus has a DNA genome",
   "Rotavirus has an envelope",
   "Rotavirus has a double-stranded RNA genome in 11 segments"
  ],
  "answer": 3,
  "why": "Rotavirus is a double-stranded RNA virus with 11 segments. Norovirus is positive-sense single-stranded RNA."
 },
 {
  "id": "V4-046",
  "m": "m5",
  "area": "Norovirus vs. rotavirus",
  "level": "concept",
  "stem": "Which statement about vaccines is correct?",
  "options": [
   "Rotavirus has oral vaccines, and norovirus has none",
   "Norovirus has an oral vaccine, and rotavirus has none",
   "Neither virus has a vaccine",
   "Both viruses have vaccines"
  ],
  "answer": 0,
  "why": "Rotarix and RotaTeq are oral rotavirus vaccines. There is no norovirus vaccine."
 },
 {
  "id": "V4-047",
  "m": "m5",
  "area": "Norovirus vs. rotavirus",
  "level": "application",
  "stem": "A 9-month-old has fever and vomiting that ease on day 2, followed by watery diarrhea for 5 days. Which virus fits better?",
  "options": [
   "Poliovirus",
   "Norovirus",
   "Measles virus",
   "Rotavirus"
  ],
  "answer": 3,
  "why": "Rotavirus typically affects children 6 to 24 months old, with an incubation of 1 to 3 days, early fever and vomiting that ease on day 2, and diarrhea for 5 to 7 days."
 },
 {
  "id": "V4-048",
  "m": "m5",
  "area": "Norovirus vs. rotavirus",
  "level": "integration",
  "stem": "Rotavirus vaccination became routine in the United States. Which result is described in the lecture?",
  "options": [
   "Norovirus disappeared",
   "Norovirus overtook rotavirus in children under 5",
   "Rotavirus became more common",
   "Poliovirus replaced rotavirus"
  ],
  "answer": 1,
  "why": "As rotavirus fell with vaccination, norovirus overtook it as a cause of gastroenteritis in U.S. children under 5."
 },
 {
  "id": "V4-049",
  "m": "m5",
  "area": "Rotavirus pathogenesis and fluids",
  "level": "concept",
  "stem": "Where do gastroenteritis viruses cause their damage?",
  "options": [
   "The liver",
   "The epithelium of the small intestine",
   "The lining of the large intestine",
   "The stomach lining"
  ],
  "answer": 1,
  "why": "They infect small-intestine epithelium, destroy cells, and disrupt absorption."
 },
 {
  "id": "V4-050",
  "m": "m5",
  "area": "Rotavirus pathogenesis and fluids",
  "level": "concept",
  "stem": "Which mechanism is described by water moving into the lumen because nutrients are not absorbed?",
  "options": [
   "Toxin-mediated diarrhea",
   "Secretory diarrhea",
   "Inflammatory diarrhea",
   "Osmotic diarrhea"
  ],
  "answer": 3,
  "why": "Damaged absorptive cells leave nutrients in the lumen, and water follows by osmosis. This is separate from secretion."
 },
 {
  "id": "V4-051",
  "m": "m5",
  "area": "Rotavirus pathogenesis and fluids",
  "level": "application",
  "stem": "A child with rotavirus has mild dehydration and is drinking. Which treatment fits first?",
  "options": [
   "Antibiotics",
   "Oral rehydration solution",
   "IV fluids",
   "Zinc alone"
  ],
  "answer": 1,
  "why": "Oral rehydration solution is first-line. IV fluids are for severe dehydration, and antibiotics do not help a viral infection."
 },
 {
  "id": "V4-052",
  "m": "m5",
  "area": "Rotavirus pathogenesis and fluids",
  "level": "application",
  "stem": "Which supplement is advised for 10–14 days in childhood diarrhea in the lecture?",
  "options": [
   "Vitamin A",
   "Calcium",
   "Iron",
   "Zinc"
  ],
  "answer": 3,
  "why": "WHO advises zinc for 10 to 14 days for childhood diarrhea."
 },
 {
  "id": "V4-053",
  "m": "m5",
  "area": "Rotavirus vaccines",
  "level": "concept",
  "stem": "Which pair correctly describes the two rotavirus vaccine series?",
  "options": [
   "Both are given by injection",
   "Rotarix has 3 doses, and RotaTeq has 2 doses",
   "Both have 4 doses",
   "Rotarix has 2 doses, and RotaTeq has 3 doses"
  ],
  "answer": 3,
  "why": "Rotarix is 2 doses (2 and 4 months). RotaTeq is 3 doses (2, 4, and 6 months). Both are oral."
 },
 {
  "id": "V4-054",
  "m": "m5",
  "area": "Rotavirus vaccines",
  "level": "application",
  "stem": "A 16-week-old infant has not received a rotavirus vaccine dose. Which statement fits the lecture’s age limits?",
  "options": [
   "The first dose was due by 14 weeks 6 days, so starting now is outside the limit",
   "The first dose can start at any age up to 8 months",
   "The first dose can start at this age",
   "The first dose must be given at 2 months"
  ],
  "answer": 0,
  "why": "The first dose must be given by 14 weeks 6 days. A 16-week-old is past that limit. The limit for the last dose is 8 months 0 days."
 },
 {
  "id": "V4-055",
  "m": "m5",
  "area": "Rotavirus vaccines",
  "level": "application",
  "stem": "Which infant should not receive rotavirus vaccine?",
  "options": [
   "An infant with a mild cold",
   "An infant born at term",
   "An infant with a history of intussusception",
   "A breastfed infant"
  ],
  "answer": 2,
  "why": "A history of intussusception and severe combined immunodeficiency (SCID) are contraindications."
 },
 {
  "id": "V4-056",
  "m": "m5",
  "area": "Rotavirus vaccines",
  "level": "integration",
  "stem": "A 10-week-old with SCID is brought for routine vaccines. Which statement about rotavirus vaccine is best?",
  "options": [
   "It should be replaced by an injection",
   "It should be given, because the infant is within the age limit",
   "It should be given as a single dose",
   "It should not be given, because SCID is a contraindication"
  ],
  "answer": 3,
  "why": "Age is within the limit, but SCID is a contraindication to rotavirus vaccine."
 },
 {
  "id": "V4-057",
  "m": "m6",
  "area": "Poliovirus pathogenesis and vaccines",
  "level": "concept",
  "stem": "Which sequence describes poliovirus invasion?",
  "options": [
   "Alimentary, lymphatic, viremic, neurologic",
   "Viremic, alimentary, neurologic, lymphatic",
   "Neurologic, viremic, lymphatic, alimentary",
   "Lymphatic, neurologic, alimentary, viremic"
  ],
  "answer": 0,
  "why": "Poliovirus enters through the gut, spreads to lymphatic tissue, enters the blood, and in a small fraction reaches the nervous system."
 },
 {
  "id": "V4-058",
  "m": "m6",
  "area": "Poliovirus pathogenesis and vaccines",
  "level": "application",
  "stem": "Which statement about poliovirus infection in non-immunized people is supported?",
  "options": [
   "Most stay in the gut",
   "Most stop at the viremic stage, and about 1% reach the nervous system",
   "Most cause meningitis",
   "Most cause paralysis"
  ],
  "answer": 1,
  "why": "Most infections stop at the viremic stage. About 1% of infections in non-immunized people reach the nervous system and cause flaccid paralysis."
 },
 {
  "id": "V4-059",
  "m": "m6",
  "area": "Poliovirus pathogenesis and vaccines",
  "level": "concept",
  "stem": "Which vaccine produces gut IgA as well as serum antibody?",
  "options": [
   "Oral poliovirus vaccine (OPV)",
   "Rotavirus vaccine",
   "MMR",
   "Inactivated poliovirus vaccine (IPV)"
  ],
  "answer": 0,
  "why": "OPV is given by mouth and produces gut IgA and serum antibody. IPV is injected and has little effect in the gut."
 },
 {
  "id": "V4-060",
  "m": "m6",
  "area": "Poliovirus pathogenesis and vaccines",
  "level": "integration",
  "stem": "Which statement compares IPV and OPV?",
  "options": [
   "Both vaccines carry the same risk of paralysis",
   "IPV is given by mouth, and OPV is injected",
   "OPV adds gut IgA and has a rare risk of vaccine-associated paralysis, and IPV is injected",
   "IPV adds gut IgA, and OPV is injected"
  ],
  "answer": 2,
  "why": "OPV adds gut IgA, with vaccine-associated paralysis in about 1 per 2 to 4 million doses. IPV is injected and builds serum antibody with little effect in the gut."
 },
 {
  "id": "V4-061",
  "m": "m6",
  "area": "Coxsackievirus and echovirus",
  "level": "concept",
  "stem": "Herpangina and hand-foot-and-mouth disease are linked to which virus group?",
  "options": [
   "Coxsackievirus A",
   "Norovirus",
   "Coxsackievirus B",
   "Rotavirus"
  ],
  "answer": 0,
  "why": "Coxsackie A is linked to herpangina and hand-foot-and-mouth disease, which involve skin and mucous membranes."
 },
 {
  "id": "V4-062",
  "m": "m6",
  "area": "Coxsackievirus and echovirus",
  "level": "application",
  "stem": "An adult has sharp chest pain with breathing and fever. Which group is most likely?",
  "options": [
   "Coxsackievirus A",
   "Norovirus",
   "Rotavirus",
   "Coxsackievirus B"
  ],
  "answer": 3,
  "why": "Coxsackie B is linked to pleurodynia and myocarditis or pericarditis, targeting the heart, pleura, pancreas, and liver."
 },
 {
  "id": "V4-063",
  "m": "m6",
  "area": "Coxsackievirus and echovirus",
  "level": "application",
  "stem": "A newborn develops severe myocarditis. Which group is linked to this?",
  "options": [
   "Norovirus",
   "Rotavirus",
   "Coxsackievirus B",
   "Coxsackievirus A"
  ],
  "answer": 2,
  "why": "Coxsackie B is linked to severe neonatal myocarditis."
 },
 {
  "id": "V4-064",
  "m": "m6",
  "area": "Coxsackievirus and echovirus",
  "level": "integration",
  "stem": "A child has fever and aseptic meningitis. Which statement best reflects the lecture?",
  "options": [
   "Poliovirus is the sole enterovirus that can cause this",
   "Norovirus can cause this",
   "Rotavirus can cause this",
   "Several enteroviruses, including coxsackieviruses and echoviruses, can cause this"
  ],
  "answer": 3,
  "why": "Aseptic meningitis can be caused by several enteroviruses, so the symptom alone does not name the virus."
 },
 {
  "id": "V4-065",
  "m": "m6",
  "area": "Local vs. systemic infection",
  "level": "concept",
  "stem": "Which virus infects mostly the intestine and causes local disease?",
  "options": [
   "Parvovirus B19",
   "Measles virus",
   "Rotavirus",
   "Poliovirus"
  ],
  "answer": 2,
  "why": "Rotavirus infects the intestinal epithelium. Poliovirus, measles virus, and B19 spread through the blood."
 },
 {
  "id": "V4-066",
  "m": "m6",
  "area": "Local vs. systemic infection",
  "level": "application",
  "stem": "What must happen for a virus that enters through the gut to injure the nervous system?",
  "options": [
   "It must be airborne",
   "It must be shed in stool",
   "It must spread through lymphatic tissue and blood",
   "It must be enveloped"
  ],
  "answer": 2,
  "why": "Systemic spread requires movement through lymphatic tissue and blood."
 },
 {
  "id": "V4-067",
  "m": "m6",
  "area": "Local vs. systemic infection",
  "level": "integration",
  "stem": "Which pairing matches a virus with its route to a distant organ?",
  "options": [
   "Rotavirus: gut, blood, brain",
   "Measles: respiratory tract, blood, skin",
   "Mumps: gut, blood, skin",
   "Norovirus: gut, blood, heart"
  ],
  "answer": 1,
  "why": "Measles spreads from the respiratory tract through the blood to the skin. Rotavirus and norovirus stay local to the gut."
 }
];
