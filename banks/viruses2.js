/* ============================================================
   BANK: Viruses II · Antivirals and Vaccines
   Content only: checkpoints, flashcards, and the quiz pool.
   Question rules (companion-architecture §10 and the course writing checklist):
   single best answer, 4 parallel choices, positive stem, plausible distractors,
   no absolute or vague terms, no "all/none of the above", a rationale on every item.

   MODULE 1 is written. Modules 2 to 6 and the Integration Challenge are added
   as they are built (IDs below are permanent: VIR2-001 onward, never reused).
   ============================================================ */
var TOPIC_ID    = 'viruses2';
var TOPIC_TITLE = 'Viruses II · Antivirals and Vaccines';

/* ---------- CHECKPOINTS ("Can you predict it?") ---------- */
var CHECKPOINTS = {

  /* --- 1.1 Why antivirals are difficult --- */
  c1a: {
    options: [
      'Viruses replicate with host cell machinery, so a drug aimed at replication can also harm the patient',
      'Viruses are acellular, so antiviral drugs cannot enter human cells',
      'Viruses carry no nucleic acid, so no replication step exists to target',
      'Viruses replicate too slowly for a drug to interrupt the process'
    ],
    answer: 0,
    why: 'Selective toxicity is harder for viruses because they use the host cell\u2019s machinery to replicate. Viruses do carry DNA or RNA, and drugs do reach infected cells.'
  },
  c1b: {
    options: [
      'A drug started after symptoms appear meets a virus that has already multiplied extensively',
      'Symptoms appear before replication begins, so early treatment adds little',
      'The immune response must finish before an antiviral can work',
      'Replication stops when symptoms begin, so the drug has no process to block'
    ],
    answer: 0,
    why: 'Replication occurs while the patient still feels well. By the time symptoms prompt treatment, the virus has already multiplied, which is one reason antivirals work best when started early.'
  },
  c1c: {
    options: [
      'The drugs have no active replication process to block, so the latent virus escapes them',
      'The drugs convert latent virus into active virus',
      'The drugs bind latent virus more tightly than active virus',
      'The drugs are cleared faster from latently infected cells'
    ],
    answer: 0,
    why: 'A latent virus is not actively replicating, so drugs that block replication steps have nothing to act on. Some latent viruses cannot be targeted with current therapies.'
  },

  /* --- 1.2 The replication roadmap --- */
  c2a: {
    options: [
      'Insertion of viral DNA into host DNA',
      'Cutting of long viral polypeptides',
      'Release of new virions from the cell',
      'Disassembly of the virion after entry'
    ],
    answer: 0,
    why: 'Integrase inserts viral DNA into the host genome. Cutting polypeptides is protease action, release is the last stage, and disassembly is uncoating.'
  },
  c2b: {
    options: [
      'The integration stage is absent',
      'The attachment stage is absent',
      'The release stage is absent',
      'The genome copying stage is absent'
    ],
    answer: 0,
    why: 'Integrase is made by retroviruses such as HIV. A virus that is not a retrovirus skips the integration stage, so an integrase inhibitor has no role against it.'
  },
  c2c: {
    options: [
      'Protein making and cutting (stage 6)',
      'Genome copying (stage 3)',
      'mRNA synthesis (stage 5)',
      'Assembly and packaging (stage 7)'
    ],
    answer: 0,
    why: 'Viral proteases process long polypeptides into working proteins. That processing belongs to the protein stage, stage 6 on the roadmap.'
  },

  /* --- 1.3 Target and consequence --- */
  c3a: {
    options: [
      'Uncoating of the entering virion',
      'Synthesis of viral mRNA',
      'Assembly of new virions',
      'Release of new virions'
    ],
    answer: 0,
    why: 'Stages before a block still run. Uncoating (stage 2) comes before genome copying (stage 3), so it proceeds. The later stages are starved of new genome copies.'
  },
  c3b: {
    options: [
      'New virions assemble but stay attached to the cell',
      'Viral protein production halts',
      'Viral genome copying stalls',
      'Uncoating of the entering virion fails'
    ],
    answer: 0,
    why: 'Release is the last stage. Blocking it leaves every earlier stage running, so virions are built but cannot leave to infect other cells.'
  },
  c3c: {
    options: [
      'Long viral polypeptides that stay uncut',
      'Virions that cannot attach to cells',
      'Viral genomes that cannot be copied',
      'Viral DNA that cannot enter the nucleus'
    ],
    answer: 0,
    why: 'With the viral protease blocked, translation still produces the long polypeptide, but it is never cut into working proteins.'
  },
  /* --- 2.1 Stop the virus at the door --- */
  c4a: {
    options: [
      'Maraviroc',
      'Enfuvirtide',
      'Amantadine',
      'Nirsevimab'
    ],
    answer: 0,
    why: 'Maraviroc is a CCR5 antagonist. It blocks HIV binding to the CCR5 coreceptor after CD4 attachment, so the virion cannot enter.'
  },
  c4b: {
    options: [
      'Fusion of the viral envelope with the host cell membrane',
      'Binding of gp120 to CD4',
      'Binding of the virion to the CCR5 coreceptor',
      'Uncoating of the virion in the cytoplasm'
    ],
    answer: 0,
    why: 'Enfuvirtide is a synthetic peptide that binds gp41, the protein that drives fusion. With gp41 bound, the envelope cannot merge with the cell membrane.'
  },
  c4c: {
    options: [
      'Uncoating of the virion',
      'Attachment to the host cell',
      'Copying of the viral genome',
      'Release of new virions'
    ],
    answer: 0,
    why: 'The M2 proton channel of influenza A is needed for uncoating. Amantadine blocks it, although it is no longer used to treat influenza.'
  },

  /* --- 2.2 Build a chain terminator --- */
  c5a: {
    options: [
      'The sugar of the nucleoside',
      'The base of the nucleoside',
      'The template strand',
      'The active site of the polymerase'
    ],
    answer: 0,
    why: 'A nucleoside is a base plus a sugar. In zidovudine, an azido group (N3) replaces the hydroxyl at the 3\u2032 position of the sugar.'
  },
  c5b: {
    options: [
      'No further nucleotide can be added, so the chain ends',
      'The chain continues with a different base',
      'The polymerase adds two nucleotides at once',
      'The chain folds back to restore the hydroxyl'
    ],
    answer: 0,
    why: 'The 3\u2032 hydroxyl is the attachment point for the next nucleotide. Without it, extension stops. This is chain termination.'
  },
  c5c: {
    options: [
      'Viral thymidine kinase activates it more effectively than the cellular enzyme does',
      'Uninfected cells destroy the drug before it acts',
      'The drug cannot cross the membrane of uninfected cells',
      'The cellular DNA polymerase cannot bind nucleoside analogs'
    ],
    answer: 0,
    why: 'Acyclovir needs phosphorylation to act. The viral thymidine kinase does this more effectively than the cellular enzyme, and the viral DNA polymerase is also inhibited more potently, so infected cells are hit hardest.'
  },

  /* --- 2.3 Polymerase challenge --- */
  c6a: {
    options: [
      'Foscarnet',
      'Acyclovir',
      'Zidovudine',
      'Efavirenz'
    ],
    answer: 0,
    why: 'Foscarnet blocks the pyrophosphate binding site of viral DNA polymerases. It is not a nucleoside and needs no activation.'
  },
  c6b: {
    options: [
      'Hepatitis C virus, NS5B RNA polymerase',
      'Hepatitis B virus, reverse transcriptase',
      'HIV, reverse transcriptase',
      'Herpesvirus, DNA polymerase'
    ],
    answer: 0,
    why: 'Sofosbuvir is a nucleoside analog that inhibits the NS5B RNA polymerase of hepatitis C virus.'
  },
  c6c: {
    options: [
      'A nonnucleoside inhibitor',
      'A nucleoside analog',
      'A pyrophosphate analog',
      'A chain terminator'
    ],
    answer: 0,
    why: 'Efavirenz binds reverse transcriptase directly and has no base-plus-sugar structure, which makes it a nonnucleoside inhibitor.'
  },

  /* --- 3.1 Integration and combination therapy --- */
  c7a: {
    options: [
      'Viral DNA made by reverse transcription',
      'Integrated provirus in the host genome',
      'Viral mRNA made from the provirus',
      'New virions assembled from viral proteins'
    ],
    answer: 0,
    why: 'Reverse transcription comes before integration, so it still runs. Without integrase, the viral DNA is never inserted into host DNA, so no provirus, mRNA, or virions follow.'
  },
  c7b: {
    options: [
      'A resistant mutant must overcome several drugs at once, so resistance emerges more slowly',
      'Each drug in the combination removes the side effects of the other',
      'A single drug cannot enter infected cells',
      'A combination removes latent virus from the body'
    ],
    answer: 0,
    why: 'A mutant that resists one drug is still blocked by the others. It needs several changes at once to escape, so resistance emerges more slowly.'
  },
  c7c: {
    options: [
      'An integrase inhibitor and a nucleoside analog',
      'A protease inhibitor and a nonnucleoside inhibitor',
      'An entry inhibitor and an integrase inhibitor',
      'Two nucleoside analogs'
    ],
    answer: 0,
    why: 'Dolutegravir is an integrase inhibitor and lamivudine is a nucleoside analog. Most recommended starting regimens pair an integrase inhibitor with one or two nucleoside reverse transcriptase inhibitors.'
  },

  /* --- 3.2 Capsids and packaging --- */
  c8a: {
    options: [
      'The capsid protein',
      'The gp41 protein',
      'Reverse transcriptase',
      'The viral protease'
    ],
    answer: 0,
    why: 'Lenacapavir is a capsid inhibitor. It binds the capsid protein, the protein shell around the viral genome.'
  },
  c8b: {
    options: [
      'Nuclear entry of viral DNA, assembly and release, and capsid core formation',
      'Attachment, fusion, and uncoating of the virion',
      'Reverse transcription, integration, and cutting of polypeptides',
      'Genome copying, mRNA synthesis, and cap-snatching by the virus'
    ],
    answer: 0,
    why: 'Binding the capsid protein disrupts nuclear entry of viral DNA, virus assembly and release, and capsid core formation. The capsids that form are malformed.'
  },
  c8c: {
    options: [
      'Letermovir',
      'Ganciclovir',
      'Acyclovir',
      'Foscarnet'
    ],
    answer: 0,
    why: 'Letermovir inhibits terminase, the enzyme that cleaves concatenated viral DNA before virion assembly. The other three act on the viral DNA polymerase.'
  },

  /* --- 3.3 Cut to function --- */
  c9a: {
    options: [
      'It is made but remains uncut, so no functional proteins form',
      'It is cut at the wrong sites into harmful proteins',
      'It fails to be translated from the mRNA',
      'It is cut, but the pieces cannot be assembled'
    ],
    answer: 0,
    why: 'Translation still produces the long polypeptide. The inhibitor blocks the viral protease, so the cuts that make working proteins never occur.'
  },
  c9b: {
    options: [
      'It fits the active site of the viral protease and blocks cleavage',
      'It is built into viral DNA and ends the chain',
      'It binds gp41 and prevents fusion',
      'It inhibits the host enzyme CYP3A'
    ],
    answer: 0,
    why: 'A peptidomimetic copies a stretch of peptide, which is what the viral protease cuts. The drug fits the active site and blocks cleavage.'
  },
  c9c: {
    options: [
      'It slows the metabolism of nirmatrelvir, so its levels stay high',
      'It speeds the metabolism of nirmatrelvir',
      'It converts nirmatrelvir into its active form',
      'It prevents nirmatrelvir from entering infected cells'
    ],
    answer: 0,
    why: 'Ritonavir inhibits CYP3A, the liver enzyme that breaks down many drugs. In Paxlovid, that slows the breakdown of nirmatrelvir and keeps its levels high.'
  },

  /* --- 4.1 Stop release --- */
  c10a: {
    options: [
      'It cleaves sialic acid on the host cell so new virions can be released',
      'It binds the virion to sialic acid on the host cell',
      'It cuts the long polypeptide into working proteins',
      'It inserts viral DNA into the host genome'
    ],
    answer: 0,
    why: 'Hemagglutinin binds sialic acid, and neuraminidase cleaves it so that new virions can leave the cell. Oseltamivir blocks that release step.'
  },
  c10b: {
    options: [
      'Influenza A and B, including amantadine-resistant strains',
      'Influenza A strains that are susceptible to amantadine',
      'Influenza B strains and respiratory syncytial virus',
      'Influenza A strains and respiratory syncytial virus'
    ],
    answer: 0,
    why: 'Oseltamivir inhibits neuraminidase. It is effective against influenza A and B, and against strains that are amantadine resistant, because it acts on a different target.'
  },
  c10c: {
    options: [
      'Within 2 days of symptom onset',
      'After a week of symptoms',
      'Once, before the influenza season starts',
      'When the patient is admitted to hospital'
    ],
    answer: 0,
    why: 'For an outpatient, oseltamivir is started within 2 days of symptoms. For a hospitalized patient, it is started as soon as possible.'
  },

  /* --- 4.2 Steal the cap --- */
  c11a: {
    options: [
      'Viral mRNA takes the 5′ cap from host mRNA to induce its own translation',
      'The virus removes the cap from its own mRNA',
      'The host cell adds a cap to viral DNA',
      'The virus degrades host mRNA to stop host translation'
    ],
    answer: 0,
    why: 'In cap-snatching, viral mRNA takes the host 5′ cap, which helps induce translation of the viral mRNA.'
  },
  c11b: {
    options: [
      'The endonuclease that cleaves host mRNA',
      'The neuraminidase that frees new virions',
      'The reverse transcriptase that copies RNA into DNA',
      'The M2 proton channel that allows uncoating'
    ],
    answer: 0,
    why: 'Baloxavir is the first-in-class cap-snatching inhibitor. It inhibits the endonuclease that cleaves host mRNA to obtain the cap.'
  },
  c11c: {
    options: [
      'A single dose within 48 hours of contact',
      'A single dose within 2 weeks of contact',
      'Daily doses for the whole influenza season',
      'A single injection before the influenza season'
    ],
    answer: 0,
    why: 'Baloxavir post-exposure prophylaxis is a single dose within 48 hours of contact, for ages 5 and older.'
  },

  /* --- 4.3 Treat or prevent? --- */
  c12a: {
    options: [
      'Ensitrelvir',
      'Nirmatrelvir with ritonavir',
      'Oseltamivir',
      'Letermovir'
    ],
    answer: 0,
    why: 'Ensitrelvir is for post-exposure prevention of COVID-19 in people 12 and older. Nirmatrelvir with ritonavir is the treatment option.'
  },
  c12b: {
    options: [
      'Baloxavir',
      'Amantadine',
      'Letermovir',
      'Nirsevimab'
    ],
    answer: 0,
    why: 'Baloxavir treats influenza A and B and is also used for post-exposure prophylaxis. Amantadine is no longer used to treat influenza, and letermovir and nirsevimab are for prevention of other infections.'
  },
  c12c: {
    options: [
      'The patient’s full medicine list, for interactions with ritonavir',
      'The patient’s CMV serostatus',
      'The patient’s vaccination schedule',
      'The patient’s dose of nirsevimab'
    ],
    answer: 0,
    why: 'Ritonavir inhibits CYP3A, which can raise levels of other medicines. Paxlovid carries a boxed warning for significant drug interactions, so review the patient’s full medicine list before dispensing.'
  },

  /* --- 5.1 Live, killed, and subunit --- */
  c13a: {
    options: [
      'Live-attenuated',
      'Killed (inactivated)',
      'Subunit'
    ],
    answer: 0,
    why: 'A live-attenuated vaccine contains a weakened virus that still replicates, so it can cause disease when the immune system is suppressed. Killed and subunit vaccines contain no live virus.'
  },
  c13b: {
    options: [
      'A live vaccine',
      'A killed vaccine',
      'A subunit vaccine'
    ],
    answer: 0,
    why: 'Secretory IgA prevents viral attachment to mucous membranes. Live vaccines given by the natural route, such as the nasal influenza vaccine, produce it. Killed and subunit vaccines produce IgG.'
  },
  c13c: {
    options: [
      'Longer duration of immunity and greater effectiveness',
      'Shorter duration of immunity and fewer risks',
      'No possibility of reversion to virulence',
      'Higher stability at room temperature'
    ],
    answer: 0,
    why: 'Live vaccines give longer, stronger protection than killed vaccines. They also carry risks: reversion to virulence, and disease in immunocompromised patients. Killed vaccines are more stable at room temperature.'
  },

  /* --- 5.2 Build a vaccine platform --- */
  c14a: {
    options: [
      'The patient’s own cells, using the delivered instructions',
      'Cells in the manufacturer’s bioreactor, before the vaccine is given',
      'A carrier virus that infects the patient',
      'Bacteria that normally live in the patient’s gut'
    ],
    answer: 0,
    why: 'An mRNA vaccine delivers instructions to cells. The patient’s own cells then make the viral protein, which is the antigen.'
  },
  c14b: {
    options: [
      'A purified or recombinant viral protein, with an adjuvant added in some products',
      'The gene for a viral protein, carried by a harmless virus',
      'mRNA instructions for a viral protein',
      'A weakened live virus that replicates'
    ],
    answer: 0,
    why: 'A recombinant subunit vaccine delivers a finished viral protein. Some products add an adjuvant to boost the response. Examples include Shingrix and Heplisav-B.'
  },
  c14c: {
    options: [
      'Viral vector',
      'mRNA',
      'Recombinant subunit',
      'Killed virus'
    ],
    answer: 0,
    why: 'Ervebo is a live, attenuated recombinant vesicular stomatitis virus that carries the gene for an Ebola surface protein. A harmless virus carrying a gene is the viral vector platform.'
  },

  /* --- 5.3 Vaccine safety challenge --- */
  c15a: {
    options: [
      'Killed (inactivated)',
      'Live-attenuated',
      'Live-attenuated, because live vaccines give stronger protection'
    ],
    answer: 0,
    why: 'Live-attenuated vaccines can cause disease in immunocompromised patients, so a killed (inactivated) influenza vaccine is chosen rather than a live one.'
  },
  c15b: {
    options: [
      'Shingrix, a subunit (non-live) vaccine',
      'A live-attenuated zoster vaccine',
      'A replication-competent vaccinia vaccine',
      'The measles vaccine'
    ],
    answer: 0,
    why: 'Shingrix is a recombinant subunit vaccine with no live virus. Whether a specific patient is eligible for a given product depends on current CDC schedules.'
  },
  c15c: {
    options: [
      'The vaccine virus can spread to nonimmune contacts',
      'The vaccine produces no cell-mediated immunity',
      'The vaccine is too stable at room temperature',
      'The vaccine produces IgG antibodies'
    ],
    answer: 0,
    why: 'Live vaccines can spread to nonimmune contacts. Killed and subunit vaccines do not spread.'
  },

  /* --- 6.1 Active vs. passive immunity --- */
  c16a: {
    options: [
      'Passive immunity, from pre-formed antibodies',
      'Active immunity, from the patient’s own response',
      'Herd immunity, from the community'
    ],
    answer: 0,
    why: 'Passive immunity supplies pre-formed antibodies, so protection begins immediately. Active immunity takes days to weeks to build.'
  },
  c16b: {
    options: [
      'The patient’s own immune system makes antibodies and memory cells',
      'Pre-formed antibodies are given to the patient',
      'Enough people in the community are immune',
      'A drug blocks a viral enzyme and stops replication'
    ],
    answer: 0,
    why: 'In active immunity, the patient’s own immune system makes antibodies and memory cells, after infection or vaccination.'
  },
  c16c: {
    options: [
      'Pre-formed antibodies fade, and no immune memory is created',
      'The patient’s memory cells expire within weeks',
      'The vaccine virus is cleared by the host immune system',
      'Passive immunity is destroyed by active immunity'
    ],
    answer: 0,
    why: 'Passive protection comes from antibodies that were made elsewhere. They fade over weeks to months, and the patient’s own immune system builds no memory.'
  },

  /* --- 6.2 Immediate and durable protection --- */
  c17a: {
    options: [
      'Immediate protection, which is passive immunity',
      'Long-lasting protection through immune memory',
      'Active immunity that begins in days to weeks',
      'A block of a viral enzyme'
    ],
    answer: 0,
    why: 'Rabies immune globulin gives pre-formed antibodies, which protect immediately. It does not create immune memory.'
  },
  c17b: {
    options: [
      'The globulin protects immediately while the vaccine starts the patient’s own active immunity',
      'The vaccine protects immediately while the globulin builds the patient\u2019s own memory',
      'The globulin makes the vaccine unnecessary because it is long-lasting',
      'The vaccine neutralizes the globulin before it can act'
    ],
    answer: 0,
    why: 'Immune globulin covers the early period, because active immunity takes days to weeks to start. The first vaccine dose starts that active response at the same time.'
  },
  c17c: {
    options: [
      'Passive-active immunity',
      'Herd immunity',
      'Active immunity from natural infection',
      'Passive immunity from a monoclonal antibody'
    ],
    answer: 0,
    why: 'Immune globulin supplies the passive part, and the vaccine starts the active part. Together they are called passive-active immunity.'
  },

  /* --- 6.3 Herd immunity simulator --- */
  c18a: {
    options: [
      'About 95%',
      'About 80%',
      'About 65%',
      'About 50%'
    ],
    answer: 0,
    why: 'About 95% of people must be immune to stop sustained measles spread. Polio is lower, at about 80%.'
  },
  c18b: {
    options: [
      'Outbreaks can return, because each case infects more than one other person',
      'The outbreak fades faster, because fewer people are exposed',
      'Nothing changes, because immune people protect everyone',
      'The immune people become ill, but the others stay well'
    ],
    answer: 0,
    why: 'Below the threshold, each case infects more than one other person on average, so sustained spread and outbreaks return.'
  },
  c18c: {
    options: [
      'People who lack immunity, such as infants and immunocompromised patients',
      'The vaccinated people, who are protected directly',
      'People who recently received immune globulin',
      'People with a latent infection of the same virus'
    ],
    answer: 0,
    why: 'When enough people are immune, outbreaks cannot spread. People who are not immune, such as infants and immunocompromised patients, are protected indirectly.'
  }
};

/* ---------- FLASHCARDS ---------- */
var CARDS = [
  { id:'VIR2-CARD-01', t:'Selective toxicity', d:'A drug harms the microbe far more than it harms the patient. Harder for viruses because they replicate with host cell machinery.' },
  { id:'VIR2-CARD-02', t:'Viral-specific target', d:'A viral enzyme or process the patient\u2019s cells lack, such as reverse transcriptase, integrase, protease, or neuraminidase. Good targets for antivirals.' },
  { id:'VIR2-CARD-03', t:'Host machinery', d:'Cell components that a virus borrows, such as ribosomes. A drug aimed here risks harming the patient.' },
  { id:'VIR2-CARD-04', t:'Latent virus', d:'A virus that is dormant and not replicating. Current antivirals that block replication steps cannot target it.' },
  { id:'VIR2-CARD-05', t:'Drug-resistant mutant', d:'A virus with a change that blocks drug action. Treatment removes susceptible viruses and lets the resistant ones multiply.' },
  { id:'VIR2-CARD-06', t:'Replication roadmap', d:'Eight stages: attachment and entry, uncoating, genome copying, integration, mRNA synthesis, protein making and cutting, assembly and packaging, release.' },
  { id:'VIR2-CARD-07', t:'Stage 1: attachment and entry', d:'The virion binds a receptor and gets in, often by membrane fusion. Entry inhibitors act here.' },
  { id:'VIR2-CARD-08', t:'Stage 2: uncoating', d:'The virion comes apart and releases its genome into the cell.' },
  { id:'VIR2-CARD-09', t:'Stage 3: genome copying', d:'A viral polymerase, or reverse transcriptase for an RNA genome that becomes DNA, copies the genome.' },
  { id:'VIR2-CARD-10', t:'Stage 4: integration', d:'Retroviruses such as HIV insert viral DNA into host DNA using integrase. Other viruses skip this stage.' },
  { id:'VIR2-CARD-11', t:'Stage 5: mRNA synthesis', d:'Viral mRNA is made from the viral genome. Influenza starts its mRNA with a cap stolen from host mRNA.' },
  { id:'VIR2-CARD-12', t:'Stage 6: protein making and cutting', d:'Host ribosomes translate viral mRNA. Viral proteases cut long polypeptides into working proteins.' },
  { id:'VIR2-CARD-13', t:'Stage 7: assembly and packaging', d:'Genomes and structural proteins come together into new capsids, with genomes packaged inside.' },
  { id:'VIR2-CARD-14', t:'Stage 8: release', d:'New virions leave the cell by budding or bursting out, then infect other cells.' },
  { id:'VIR2-CARD-15', t:'Cascade effect', d:'Blocking one stage stalls the stages after it, while the stages before it still run.' },
  { id:'VIR2-CARD-16', t:'Maraviroc', d:'CCR5 antagonist. Blocks HIV binding to the CCR5 coreceptor after CD4 attachment, preventing entry.' },
  { id:'VIR2-CARD-17', t:'Enfuvirtide', d:'Synthetic peptide that binds gp41 and prevents fusion of the HIV envelope with the host cell membrane.' },
  { id:'VIR2-CARD-18', t:'Amantadine', d:'Blocks the M2 proton channel of influenza A and prevents uncoating. No longer used to treat influenza.' },
  { id:'VIR2-CARD-19', t:'Nirsevimab', d:'Long-acting monoclonal antibody given to infants to prevent severe RSV disease. Passive immunization, not treatment.' },
  { id:'VIR2-CARD-20', t:'gp41', d:'HIV envelope glycoprotein that drives fusion with the host membrane. Enfuvirtide binds it.' },
  { id:'VIR2-CARD-21', t:'CCR5', d:'Host coreceptor that HIV binds after CD4. Maraviroc blocks it.' },
  { id:'VIR2-CARD-22', t:'Nucleoside', d:'A nitrogenous base plus a sugar.' },
  { id:'VIR2-CARD-23', t:'Nucleoside analog', d:'A molecule that mimics a natural nucleoside, so the viral polymerase builds it into the growing chain.' },
  { id:'VIR2-CARD-24', t:'Chain termination', d:'Many nucleoside analogs lack the 3\u2032 hydroxyl needed to attach the next nucleotide, so extension stops.' },
  { id:'VIR2-CARD-25', t:'Zidovudine', d:'Nucleoside analog that inhibits HIV reverse transcriptase. An azido group (N3) replaces the 3\u2032 hydroxyl.' },
  { id:'VIR2-CARD-26', t:'Acyclovir', d:'Nucleoside analog for herpesviruses. Viral thymidine kinase activates it more effectively than the cellular enzyme, and viral DNA polymerase is inhibited more potently.' },
  { id:'VIR2-CARD-27', t:'Nonnucleoside inhibitor', d:'Binds reverse transcriptase directly and has no nucleoside structure. Example: efavirenz.' },
  { id:'VIR2-CARD-28', t:'Foscarnet', d:'Blocks the pyrophosphate site of viral DNA polymerases. Needs no activation and is not a nucleoside.' },
  { id:'VIR2-CARD-29', t:'Sofosbuvir', d:'Nucleoside analog that inhibits the NS5B RNA polymerase of hepatitis C virus.' },
  { id:'VIR2-CARD-30', t:'Entecavir', d:'Inhibits the reverse transcriptase of hepatitis B virus.' },
  { id:'VIR2-CARD-31', t:'Reverse transcriptase', d:'Viral enzyme that copies RNA into DNA. A target for HIV and hepatitis B drugs.' },
  { id:'VIR2-CARD-32', t:'Ibalizumab', d:'Monoclonal antibody against the host CD4 protein. It does not block gp120 attachment, but it blocks HIV from engaging the CCR5 and CXCR4 coreceptors after attachment.' },
  { id:'VIR2-CARD-33', t:'Integrase', d:'Enzyme produced by retroviruses that inserts the viral genome into the DNA of the host cell. Blocked by raltegravir and dolutegravir.' },
  { id:'VIR2-CARD-34', t:'Integrase inhibitor', d:'Blocks insertion of viral DNA into host DNA. Examples: raltegravir, dolutegravir. Used primarily as treatment against HIV.' },
  { id:'VIR2-CARD-35', t:'Combination therapy (HIV)', d:'HIV is treated with several drugs together. A resistant mutant must overcome several drugs at once, so resistance emerges more slowly.' },
  { id:'VIR2-CARD-36', t:'Dolutegravir plus lamivudine', d:'Example HIV regimen: an integrase inhibitor plus a nucleoside analog. Resistance testing guides the choice, and dolutegravir has a high barrier to resistance.' },
  { id:'VIR2-CARD-37', t:'Capsid', d:'The protein shell around the viral genome.' },
  { id:'VIR2-CARD-38', t:'Lenacapavir', d:'Capsid inhibitor. Binds the capsid protein and disrupts nuclear entry of viral DNA, assembly and release, and capsid core formation. Given twice yearly as HIV pre-exposure prophylaxis (PrEP): prevention, not treatment.' },
  { id:'VIR2-CARD-39', t:'Terminase', d:'Viral enzyme that cleaves concatenated viral DNA in preparation for virion assembly.' },
  { id:'VIR2-CARD-40', t:'Letermovir', d:'Terminase inhibitor. Prevents CMV infection and disease in high-risk transplant recipients: prophylaxis, not treatment.' },
  { id:'VIR2-CARD-41', t:'Ganciclovir', d:'A CMV treatment drug. Letermovir, by contrast, is used for prevention in high-risk transplant recipients.' },
  { id:'VIR2-CARD-42', t:'Viral protease', d:'Virus-specific enzyme that cuts a long polypeptide into functional proteins. Seen in HIV, hepatitis C virus, and SARS-CoV-2.' },
  { id:'VIR2-CARD-43', t:'Peptidomimetic', d:'A drug that mimics a stretch of peptide, fits the active site of the viral protease, and blocks cleavage. Example: nirmatrelvir.' },
  { id:'VIR2-CARD-44', t:'Atazanavir', d:'HIV protease inhibitor. Used as treatment, always in combination with other drugs.' },
  { id:'VIR2-CARD-45', t:'Nirmatrelvir', d:'Peptidomimetic inhibitor of the SARS-CoV-2 main protease. Given with ritonavir to treat mild-to-moderate COVID-19 in high-risk adults.' },
  { id:'VIR2-CARD-46', t:'Ritonavir (booster)', d:'Inhibits CYP3A, so it slows the metabolism of other drugs such as nirmatrelvir and keeps their levels high. The same effect causes drug interactions.' },
  { id:'VIR2-CARD-47', t:'CYP3A', d:'Liver enzyme that breaks down many drugs. Ritonavir inhibits it, which boosts some drugs and causes drug interactions.' },
  { id:'VIR2-CARD-48', t:'Neuraminidase', d:'Influenza enzyme that cleaves sialic acid on the host cell so new virions can be released. Blocked by oseltamivir and zanamivir.' },
  { id:'VIR2-CARD-49', t:'Hemagglutinin', d:'Influenza protein on the virion that binds sialic acid on the host cell.' },
  { id:'VIR2-CARD-50', t:'Sialic acid', d:'Receptor-bound sugar on the host cell. Hemagglutinin binds it, and neuraminidase cleaves it to free new virions.' },
  { id:'VIR2-CARD-51', t:'Oseltamivir', d:'Inhibits influenza neuraminidase and prevents viral release. Treats influenza A and B, including amantadine-resistant strains. Start as soon as possible if hospitalized, and within 2 days of symptoms if outpatient.' },
  { id:'VIR2-CARD-52', t:'Zanamivir and peramivir', d:'Other neuraminidase inhibitors. Like oseltamivir, they block release of influenza virions.' },
  { id:'VIR2-CARD-53', t:'Cap-snatching', d:'Viral mRNA takes the host 5′ cap, which helps induce translation of the viral mRNA. Used by influenza.' },
  { id:'VIR2-CARD-54', t:'Baloxavir', d:'First-in-class cap-snatching inhibitor. Inhibits the endonuclease that cleaves host mRNA. Treats influenza A and B, and is used for post-exposure prophylaxis as a single dose within 48 hours of contact (ages 5 and older).' },
  { id:'VIR2-CARD-55', t:'Endonuclease (cap-snatching)', d:'Enzyme that cleaves host mRNA to obtain the cap. Baloxavir inhibits it.' },
  { id:'VIR2-CARD-56', t:'Interferon', d:'Recombinant interferon alpha inhibits viral protein synthesis. Used for chronic hepatitis B, and historically for hepatitis C (now replaced by direct-acting antivirals).' },
  { id:'VIR2-CARD-57', t:'Prophylaxis', d:'Giving a drug before disease develops, to prevent infection or illness. Contrast with treatment of established infection.' },
  { id:'VIR2-CARD-58', t:'Post-exposure prophylaxis (PEP)', d:'Prevention after contact with an infected person, before symptoms. Example: a single dose of baloxavir within 48 hours of contact with influenza.' },
  { id:'VIR2-CARD-59', t:'Ensitrelvir', d:'Post-exposure prevention of COVID-19, for ages 12 and older. Not a treatment.' },
  { id:'VIR2-CARD-60', t:'Nirmatrelvir with ritonavir (use)', d:'Treatment of mild-to-moderate COVID-19 in adults at high risk. Check the patient’s medicines for interactions before dispensing.' },
  { id:'VIR2-CARD-61', t:'Treat or prevent?', d:'Ask first whether the patient has established infection (treatment) or is at risk but well (prevention). Then choose the drug and check for interactions.' },
  { id:'VIR2-CARD-62', t:'Active immunity (vaccines)', d:'Vaccines are used to induce active immunity: the patient’s own immune system makes antibodies and memory cells.' },
  { id:'VIR2-CARD-63', t:'Killed (inactivated) vaccine', d:'Contains killed virus. Produces IgG, with weak or no cell-mediated immunity. Shorter, lower protection than live vaccines. Cannot revert to virulence or cause disease. High stability at room temperature.' },
  { id:'VIR2-CARD-64', t:'Live-attenuated vaccine', d:'A weakened virus that rarely causes disease in healthy people. Longer, stronger protection and better interruption of transmission, but it can revert, spread to nonimmune contacts, and cause disease in immunocompromised patients.' },
  { id:'VIR2-CARD-65', t:'Subunit vaccine', d:'Purified viral proteins. Produces IgG, with weak cell-mediated immunity that an adjuvant helps. No live virus, so it cannot revert or cause disease.' },
  { id:'VIR2-CARD-66', t:'Secretory IgA', d:'Antibody that prevents viral attachment to mucous membranes. Live vaccines given by the natural route, such as the nasal influenza vaccine, produce it.' },
  { id:'VIR2-CARD-67', t:'Reversion to virulence', d:'A live-attenuated vaccine virus regains the ability to cause disease. Possible with live vaccines. Not possible with killed or subunit vaccines.' },
  { id:'VIR2-CARD-68', t:'Immunocompromised patient and live vaccines', d:'Live-attenuated vaccines can cause disease in immunocompromised patients. Choose a killed or subunit (non-live) vaccine instead.' },
  { id:'VIR2-CARD-69', t:'Adjuvant', d:'A substance added to some vaccines to boost the immune response, for example in some recombinant subunit vaccines.' },
  { id:'VIR2-CARD-70', t:'mRNA vaccine', d:'Delivers mRNA instructions to cells, and the patient’s cells make the viral protein (antigen). Examples: Comirnaty and Spikevax (COVID-19), mRESVIA (RSV).' },
  { id:'VIR2-CARD-71', t:'Recombinant subunit vaccine', d:'A purified or recombinant viral protein, delivered ready-made, sometimes with an adjuvant. Examples: Shingrix, Heplisav-B, Arexvy, Abrysvo.' },
  { id:'VIR2-CARD-72', t:'Viral vector vaccine', d:'A harmless virus carries the gene for a viral protein into cells, and the cells make the antigen. Example: Ervebo (Ebola).' },
  { id:'VIR2-CARD-73', t:'Ervebo', d:'Ebola vaccine. A live, attenuated recombinant vesicular stomatitis virus that carries the gene for the Ebola surface glycoprotein.' },
  { id:'VIR2-CARD-74', t:'Shingrix', d:'Zoster vaccine. A recombinant subunit (non-live) vaccine with an adjuvant. Live Zostavax was discontinued in the US in 2020.' },
  { id:'VIR2-CARD-75', t:'Who makes the antigen?', d:'mRNA and viral vector vaccines: the patient’s own cells. Recombinant subunit vaccines: the protein is made in advance and delivered ready-made.' },
  { id:'VIR2-CARD-76', t:'Common live vaccines', d:'Measles, mumps, rubella, varicella, and rotavirus are live vaccines.' },
  { id:'VIR2-CARD-77', t:'Common killed and subunit vaccines', d:'Killed: hepatitis A and rabies. Subunit: hepatitis B (recombinant) and HPV.' },
  { id:'VIR2-CARD-78', t:'Passive immunity', d:'Pre-formed antibodies (immunoglobulins) are given to the patient. Onset is immediate. Protection is temporary, lasting weeks to months. Examples: rabies immune globulin, nirsevimab.' },
  { id:'VIR2-CARD-79', t:'Active vs. passive: source', d:'Active: the patient’s own immune system makes antibodies and memory cells. Passive: pre-formed antibodies are given.' },
  { id:'VIR2-CARD-80', t:'Active vs. passive: onset', d:'Active immunity starts in days to weeks. Passive immunity is immediate.' },
  { id:'VIR2-CARD-81', t:'Active vs. passive: duration', d:'Active immunity is long-lasting because of immune memory. Passive immunity is temporary, weeks to months.' },
  { id:'VIR2-CARD-82', t:'Passive-active immunity', d:'Immune globulin gives immediate protection while the first vaccine dose starts the patient’s own active immunity. Example: rabies after an exposure.' },
  { id:'VIR2-CARD-83', t:'Rabies after an exposure', d:'Rabies immune globulin gives immediate passive protection. The first vaccine dose starts active immunity. Passive antibodies fade, and active immunity takes over.' },
  { id:'VIR2-CARD-84', t:'Herd immunity', d:'When enough people in a community are immune, sustained spread stops, and people who are not immune are protected indirectly.' },
  { id:'VIR2-CARD-85', t:'Measles threshold', d:'About 95% of people must be immune to stop sustained spread (WHO).' },
  { id:'VIR2-CARD-86', t:'Polio threshold', d:'About 80% (WHO). The threshold depends on the disease.' },
  { id:'VIR2-CARD-87', t:'Below the threshold', d:'If coverage falls below the threshold, each case infects more than one other person, and outbreaks return.' },
  { id:'VIR2-CARD-88', t:'Protected indirectly', d:'People who are not immune, such as infants and immunocompromised patients, are protected when community immunity is high enough.' },
  { id:'VIR2-CARD-89', t:'Above the threshold', d:'Each case infects fewer than one other person, so the outbreak fades.' }
];

/* ---------- QUIZ POOL ----------
   m     = which module quiz the question belongs to
   area  = concept area (matches MANIFEST.areaSection) used by the targeted review round
   level = concept | application | integration */
var POOL = [

  /* ===== Module 1 · Selective toxicity ===== */
  { id:'VIR2-001', m:'m1', area:'Selective toxicity', level:'concept',
    stem:'Which description fits selective toxicity?',
    options:[
      'A drug harms the microbe far more than it harms the patient',
      'A drug harms the microbe and the patient to the same degree',
      'A drug harms the patient more than it harms the microbe',
      'A drug harms the microbe when the immune system is suppressed'
    ],
    answer:0,
    why:'Selective toxicity means the drug damages the microbe while sparing the patient. It is the first filter for any antimicrobial.' },

  { id:'VIR2-002', m:'m1', area:'Selective toxicity', level:'concept',
    stem:'Which target is expected to give the best selective toxicity?',
    options:[
      'A viral enzyme that human cells lack',
      'A host ribosome that translates viral mRNA',
      'A host DNA polymerase used in cell division',
      'A host membrane lipid built into the virion'
    ],
    answer:0,
    why:'A viral enzyme with no human counterpart can be blocked without disturbing the patient\u2019s cells. The other targets are host components.' },

  { id:'VIR2-003', m:'m1', area:'Selective toxicity', level:'application',
    stem:'A researcher proposes a drug aimed at the ribosome that translates viral mRNA. What is the main concern?',
    options:[
      'The ribosome belongs to the host, so the patient\u2019s own protein synthesis could be affected',
      'The ribosome is too small for a drug to bind',
      'Viral mRNA is translated by viral ribosomes instead',
      'The ribosome is destroyed during uncoating'
    ],
    answer:0,
    why:'Viruses use host ribosomes. A drug aimed at them risks harming the patient as well, which is the core problem of selective toxicity for viruses.' },

  { id:'VIR2-004', m:'m1', area:'Selective toxicity', level:'application',
    stem:'A virus has already multiplied extensively by the time the patient first feels ill. Which obstacle to antiviral therapy does this describe?',
    options:[
      'Replication before symptoms appear',
      'Latency with no active replication',
      'Resistant mutants arising in treatment',
      'Host machinery shared with the patient'
    ],
    answer:0,
    why:'Replication occurs while the patient feels well, so treatment often starts after substantial viral multiplication.' },

  { id:'VIR2-005', m:'m1', area:'Selective toxicity', level:'integration',
    stem:'A drug works well against a viral enzyme, then fails in a patient whose virus carries a changed version of that enzyme. What best explains why the changed virus now dominates?',
    options:[
      'The drug removes susceptible viruses, leaving the resistant ones to replicate',
      'The drug reshapes the enzyme into a form it cannot block',
      'The patient\u2019s cells convert the drug into an inactive form',
      'The drug loses activity once the patient feels well'
    ],
    answer:0,
    why:'Drug-resistant mutants can emerge. Treatment clears the susceptible viruses and gives the mutants room to multiply.' },

  /* ===== Module 1 · Replication roadmap ===== */
  { id:'VIR2-006', m:'m1', area:'Replication roadmap', level:'concept',
    stem:'Which list places the stages of viral replication in the correct order?',
    options:[
      'Attachment and entry, uncoating, genome copying, assembly, release',
      'Uncoating, attachment and entry, genome copying, release, assembly',
      'Attachment and entry, genome copying, uncoating, assembly, release',
      'Genome copying, attachment and entry, uncoating, release, assembly'
    ],
    answer:0,
    why:'The virion first gets in (stage 1), then comes apart (stage 2), then its genome is copied (stage 3). New virions assemble (stage 7) and then leave (stage 8).' },

  { id:'VIR2-007', m:'m1', area:'Replication roadmap', level:'concept',
    stem:'Which stage of the roadmap involves neuraminidase in influenza?',
    options:[
      'Release of new virions',
      'Attachment to the host cell',
      'Uncoating of the virion',
      'Copying of the genome'
    ],
    answer:0,
    why:'Neuraminidase helps new virions leave the infected cell. That makes release (stage 8) the point where neuraminidase inhibitors act.' },

  { id:'VIR2-008', m:'m1', area:'Replication roadmap', level:'application',
    stem:'A drug blocks the surface protein that drives fusion of the virion with the cell membrane. Where does it act on the roadmap?',
    options:[
      'Attachment and entry (stage 1)',
      'Uncoating (stage 2)',
      'Genome copying (stage 3)',
      'Assembly and packaging (stage 7)'
    ],
    answer:0,
    why:'Membrane fusion lets the virion into the cell, so a fusion blocker belongs to the first stage, attachment and entry.' },

  { id:'VIR2-009', m:'m1', area:'Replication roadmap', level:'application',
    stem:'A drug interferes with filling new capsids with viral genomes. Which stage does it act on?',
    options:[
      'Assembly and packaging (stage 7)',
      'Uncoating (stage 2)',
      'mRNA synthesis (stage 5)',
      'Release (stage 8)'
    ],
    answer:0,
    why:'Genome packaging happens as new capsids are assembled, which is stage 7. Release follows after virions are complete.' },

  { id:'VIR2-010', m:'m1', area:'Replication roadmap', level:'integration',
    stem:'Which stage is part of the HIV cycle but absent from the influenza cycle?',
    options:[
      'Integration into host DNA',
      'Uncoating of the virion',
      'Release of progeny virions',
      'Attachment to the host cell'
    ],
    answer:0,
    why:'HIV is a retrovirus and uses integrase to insert its DNA into the host genome. Influenza has no integration stage, so an integrase inhibitor has no role against it.' },

  /* ===== Module 1 · Blocked steps and consequences ===== */
  { id:'VIR2-011', m:'m1', area:'Blocked steps and consequences', level:'concept',
    stem:'A drug blocks one stage of the replication cycle. What is expected for the stages before the block?',
    options:[
      'They continue to run',
      'They reverse and undo their products',
      'They stop immediately',
      'They speed up to compensate'
    ],
    answer:0,
    why:'A block starves the stages that depend on it. Stages before the block do not depend on it, so they still run.' },

  { id:'VIR2-012', m:'m1', area:'Blocked steps and consequences', level:'concept',
    stem:'What is the expected effect of blocking the release stage?',
    options:[
      'Virions assemble but cannot leave the cell to spread',
      'Virions fail to assemble',
      'Genome copying stalls',
      'Entry of the virion into the cell is blocked'
    ],
    answer:0,
    why:'Release is the last stage. Everything before it still happens, so virions are built but stay trapped on the cell.' },

  { id:'VIR2-013', m:'m1', area:'Blocked steps and consequences', level:'application',
    stem:'A drug blocks attachment and entry. What is expected when a new cell is exposed to the virus?',
    options:[
      'Later stages stay dormant because the viral genome remains outside the cell',
      'Uncoating occurs, but genome copying fails',
      'Genome copying occurs, but assembly fails',
      'Assembly occurs, but release fails'
    ],
    answer:0,
    why:'Entry is the first stage. If the virion cannot get in, none of the later stages can begin in that cell.' },

  { id:'VIR2-014', m:'m1', area:'Blocked steps and consequences', level:'application',
    stem:'A protease inhibitor blocks stage 6. Which products are expected in an infected cell?',
    options:[
      'Viral mRNA and uncut polypeptides, with no working proteins',
      'Working viral proteins, with no viral mRNA',
      'Complete virions, with no working proteins',
      'Viral genome copies, with no viral mRNA'
    ],
    answer:0,
    why:'Stages 3 and 5 come before the block, so the genome is copied and mRNA is made. Translation still occurs, but the polypeptide is never cut into working proteins.' },

  { id:'VIR2-015', m:'m1', area:'Blocked steps and consequences', level:'integration',
    stem:'One drug blocks genome copying (stage 3). Another blocks assembly and packaging (stage 7). What do both prevent?',
    options:[
      'Release of complete new virions to infect other cells',
      'Attachment of the original virion',
      'Uncoating of the original virion',
      'Synthesis of viral mRNA'
    ],
    answer:0,
    why:'Both blocks stop complete virions from forming and spreading. Entry and uncoating come before either block, and the stage 7 block leaves mRNA synthesis running.' },

  /* ===== Module 2 · Entry and uncoating ===== */

  { id:'VIR2-016', m:'m2', area:'Entry and uncoating', level:'concept',
    stem:'What does maraviroc target?',
    options:[
      'The CCR5 coreceptor on the host cell',
      'The gp41 protein on the virion',
      'The M2 channel of the virion',
      'The CD4 protein on the host cell'
    ],
    answer:0,
    why:'Maraviroc blocks HIV binding to the CCR5 coreceptor after CD4 attachment. Enfuvirtide, not maraviroc, targets gp41.' },

  { id:'VIR2-017', m:'m2', area:'Entry and uncoating', level:'concept',
    stem:'Which step separates attachment to CD4 from membrane fusion in HIV entry?',
    options:[
      'Coreceptor binding',
      'Uncoating',
      'Genome copying',
      'Integration'
    ],
    answer:0,
    why:'After gp120 binds CD4, it binds a coreceptor such as CCR5. Fusion driven by gp41 follows.' },

  { id:'VIR2-018', m:'m2', area:'Entry and uncoating', level:'application',
    stem:'A drug sits on CCR5 so that gp120 cannot bind it. What happens to the virion?',
    options:[
      'It remains outside the cell, because fusion cannot proceed',
      'It fuses with the membrane, because CD4 binding is sufficient',
      'It enters the cell, then fails at genome copying',
      'It enters the cell, then fails at integration'
    ],
    answer:0,
    why:'Without coreceptor binding, gp41 does not insert into the host membrane and the envelope cannot fuse. The virion never enters the cell.' },

  { id:'VIR2-019', m:'m2', area:'Entry and uncoating', level:'application',
    stem:'Which drug action is expected to stop fusion after gp120 has already bound CD4 and CCR5?',
    options:[
      'Binding of gp41 by enfuvirtide',
      'Blocking of CCR5 by maraviroc',
      'Blocking of the M2 channel by amantadine',
      'Neutralization of RSV by nirsevimab'
    ],
    answer:0,
    why:'Coreceptor binding has already occurred, so a CCR5 blocker is too late. Enfuvirtide binds gp41 and acts at the fusion step that follows.' },

  { id:'VIR2-020', m:'m2', area:'Entry and uncoating', level:'application',
    stem:'An infant receives nirsevimab before RSV season. What is the purpose of this antibody?',
    options:[
      'To prevent severe RSV disease through passive immunization',
      'To treat established RSV infection by blocking uncoating',
      'To trigger the infant’s own memory cells through active immunization',
      'To clear RSV from infected cells after infection'
    ],
    answer:0,
    why:'Nirsevimab is a long-acting monoclonal antibody. It gives ready-made protection to prevent severe RSV disease, which is passive immunization and not treatment.' },

  { id:'VIR2-021', m:'m2', area:'Entry and uncoating', level:'integration',
    stem:'Which pairing of drug, virus, and step is correct?',
    options:[
      'Amantadine: influenza A, uncoating. Enfuvirtide: HIV, fusion',
      'Amantadine: HIV, fusion. Enfuvirtide: influenza A, uncoating',
      'Amantadine: influenza A, release. Enfuvirtide: HIV, coreceptor binding',
      'Amantadine: HIV, uncoating. Enfuvirtide: influenza A, fusion'
    ],
    answer:0,
    why:'Amantadine blocks the M2 channel of influenza A and prevents uncoating. Enfuvirtide binds gp41 of HIV and prevents fusion.' },

  /* ===== Module 2 · Nucleoside analogs and chain termination ===== */

  { id:'VIR2-022', m:'m2', area:'Nucleoside analogs and chain termination', level:'concept',
    stem:'What makes up a nucleoside?',
    options:[
      'A nitrogenous base and a sugar',
      'A nitrogenous base, a sugar, and three phosphates',
      'A sugar and a phosphate',
      'A nitrogenous base and a phosphate'
    ],
    answer:0,
    why:'A nucleoside is a base plus a sugar. Adding phosphate groups makes a nucleotide.' },

  { id:'VIR2-023', m:'m2', area:'Nucleoside analogs and chain termination', level:'concept',
    stem:'Why do nucleoside analogs such as zidovudine stop DNA synthesis?',
    options:[
      'They lack the 3′ hydroxyl needed to attach the next nucleotide',
      'They bind the template strand and block the polymerase from moving',
      'They add an extra phosphate to the growing chain',
      'They remove the template strand from the polymerase'
    ],
    answer:0,
    why:'The 3′ hydroxyl is where the next nucleotide attaches. An analog without it ends the chain, which is chain termination.' },

  { id:'VIR2-024', m:'m2', area:'Nucleoside analogs and chain termination', level:'application',
    stem:'Zidovudine carries an azido group where the natural sugar has a 3′ hydroxyl. What follows once it is built into a growing DNA chain?',
    options:[
      'The next nucleotide cannot be attached, so the chain ends',
      'The chain continues, but base pairing fails',
      'The chain continues at a slower rate',
      'The azido group is removed and the chain continues'
    ],
    answer:0,
    why:'With the 3′ hydroxyl replaced, nothing remains to join the next nucleotide. Extension stops at that point.' },

  { id:'VIR2-025', m:'m2', area:'Nucleoside analogs and chain termination', level:'application',
    stem:'Why is acyclovir selective for cells infected with a herpesvirus?',
    options:[
      'Viral thymidine kinase activates it more effectively, and viral DNA polymerase is inhibited more potently',
      'Uninfected cells take up the drug much more slowly than infected cells',
      'The cellular thymidine kinase destroys the drug before it can act',
      'The cellular DNA polymerase cannot reach the nucleus where it works'
    ],
    answer:0,
    why:'Acyclovir is selective for two reasons: the viral thymidine kinase phosphorylates it more effectively than the cellular enzyme, and the viral DNA polymerase is inhibited more potently than the cellular one.' },

  { id:'VIR2-026', m:'m2', area:'Nucleoside analogs and chain termination', level:'application',
    stem:'Which feature must a nucleoside analog share with natural nucleosides for the polymerase to accept it?',
    options:[
      'A base-plus-sugar shape that the enzyme recognizes',
      'A pyrophosphate group in place of the sugar',
      'A hydroxyl group at the 3′ position',
      'A protein backbone in place of the base'
    ],
    answer:0,
    why:'Analogs work because the polymerase mistakes them for natural nucleosides and builds them into the chain. Many then fail to support the next step because the 3′ hydroxyl is missing or replaced.' },

  { id:'VIR2-027', m:'m2', area:'Nucleoside analogs and chain termination', level:'integration',
    stem:'The share of chain-terminating drug molecules among the nucleotides available to a viral polymerase is raised. What is expected for the viral DNA copies?',
    options:[
      'They are shorter on average, because termination occurs sooner',
      'They are longer, because the polymerase compensates',
      'They are unchanged, because drug molecules are excluded from the chain',
      'They are identical in length, because termination occurs at a fixed position'
    ],
    answer:0,
    why:'Each time the polymerase picks up a drug molecule, the chain ends. A higher share means chains end sooner on average, so fewer complete copies are made.' },

  /* ===== Module 2 · Polymerase targets by virus ===== */

  { id:'VIR2-028', m:'m2', area:'Polymerase targets by virus', level:'concept',
    stem:'Which enzyme does zidovudine inhibit?',
    options:[
      'HIV reverse transcriptase',
      'HIV integrase',
      'HIV protease',
      'Herpesvirus DNA polymerase'
    ],
    answer:0,
    why:'Zidovudine is a nucleoside analog that inhibits HIV reverse transcriptase.' },

  { id:'VIR2-029', m:'m2', area:'Polymerase targets by virus', level:'concept',
    stem:'Which class does efavirenz belong to?',
    options:[
      'Nonnucleoside inhibitor',
      'Nucleoside analog',
      'Pyrophosphate analog',
      'Entry inhibitor'
    ],
    answer:0,
    why:'Efavirenz binds reverse transcriptase directly and has no nucleoside structure, so it is a nonnucleoside inhibitor.' },

  { id:'VIR2-030', m:'m2', area:'Polymerase targets by virus', level:'application',
    stem:'Foscarnet blocks the pyrophosphate site of viral DNA polymerase. How does it differ from acyclovir?',
    options:[
      'It needs no phosphorylation, while acyclovir must be activated',
      'It is a nucleoside analog, while acyclovir is a pyrophosphate analog',
      'It targets reverse transcriptase, while acyclovir targets a DNA polymerase',
      'It is activated by viral thymidine kinase, while acyclovir acts directly'
    ],
    answer:0,
    why:'Foscarnet acts directly and is not a nucleoside. Acyclovir is a nucleoside analog that must be phosphorylated, first by the viral thymidine kinase.' },

  { id:'VIR2-031', m:'m2', area:'Polymerase targets by virus', level:'application',
    stem:'A patient has hepatitis C. Which drug inhibits the NS5B RNA polymerase of the virus?',
    options:[
      'Sofosbuvir',
      'Entecavir',
      'Acyclovir',
      'Efavirenz'
    ],
    answer:0,
    why:'Sofosbuvir is a nucleoside analog that inhibits NS5B. Entecavir acts on hepatitis B reverse transcriptase.' },

  { id:'VIR2-032', m:'m2', area:'Polymerase targets by virus', level:'application',
    stem:'A drug inhibits the reverse transcriptase of hepatitis B virus. Which drug fits?',
    options:[
      'Entecavir',
      'Sofosbuvir',
      'Ganciclovir',
      'Foscarnet'
    ],
    answer:0,
    why:'Entecavir inhibits hepatitis B reverse transcriptase. Sofosbuvir acts on hepatitis C, and ganciclovir and foscarnet act on herpesvirus DNA polymerase.' },

  { id:'VIR2-033', m:'m2', area:'Polymerase targets by virus', level:'integration',
    stem:'A drug is a nucleoside analog that inhibits a herpesvirus DNA polymerase and requires phosphorylation to act. Which drug fits?',
    options:[
      'Acyclovir',
      'Foscarnet',
      'Efavirenz',
      'Zidovudine'
    ],
    answer:0,
    why:'Acyclovir is a nucleoside analog that is phosphorylated. Foscarnet needs no activation and is not a nucleoside, efavirenz is a nonnucleoside inhibitor, and zidovudine acts on HIV.' },

  /* ===== Module 3 · Integrase and combination therapy ===== */
  { id:'VIR2-034', m:'m3', area:'Integrase and combination therapy', level:'concept',
    stem:'What is the job of integrase?',
    options:[
      'It inserts viral DNA into the host cell’s DNA',
      'It cuts long viral polypeptides into working proteins',
      'It copies the viral genome',
      'It frees new virions from the cell surface'
    ],
    answer:0,
    why:'Integrase is produced by retroviruses and inserts the viral genome into the DNA of the host cell. Cutting polypeptides is protease action, and release involves neuraminidase in influenza.' },

  { id:'VIR2-035', m:'m3', area:'Integrase and combination therapy', level:'concept',
    stem:'Which two drugs are integrase inhibitors?',
    options:[
      'Raltegravir and dolutegravir',
      'Atazanavir and ritonavir',
      'Zidovudine and lamivudine',
      'Oseltamivir and zanamivir'
    ],
    answer:0,
    why:'Raltegravir and dolutegravir are the integrase inhibitors in this lecture. Atazanavir and ritonavir are protease inhibitors, zidovudine and lamivudine are nucleoside analogs, and oseltamivir and zanamivir block release.' },

  { id:'VIR2-036', m:'m3', area:'Integrase and combination therapy', level:'application',
    stem:'A patient with HIV takes raltegravir. Reverse transcription still occurs, yet little viral mRNA is produced. What best explains this?',
    options:[
      'The viral DNA stays outside the host genome, where it is unavailable for making mRNA',
      'Reverse transcription produces no DNA',
      'Raltegravir destroys viral mRNA after it is made',
      'The host DNA polymerase removes the viral DNA'
    ],
    answer:0,
    why:'Integration comes after reverse transcription. Blocking integrase leaves the viral DNA outside the host genome, where it is not transcribed into new viral mRNA.' },

  { id:'VIR2-037', m:'m3', area:'Integrase and combination therapy', level:'application',
    stem:'Which regimen from the lecture combines two drug classes?',
    options:[
      'Dolutegravir plus lamivudine',
      'Dolutegravir plus raltegravir',
      'Zidovudine plus lamivudine',
      'Atazanavir plus ritonavir'
    ],
    answer:0,
    why:'Dolutegravir is an integrase inhibitor and lamivudine is a nucleoside analog. The other pairs come from a single class, or from a protease inhibitor with its booster.' },

  { id:'VIR2-038', m:'m3', area:'Integrase and combination therapy', level:'application',
    stem:'Why does a two-drug regimen slow the emergence of resistance compared with one drug alone?',
    options:[
      'A mutant must resist both drugs at once',
      'Each drug causes the virus to mutate less',
      'Two drugs together remove latent virus',
      'The second drug blocks mutation of the first target'
    ],
    answer:0,
    why:'A mutant that escapes one drug is still blocked by the other. Escaping both needs separate changes at the same time, which takes longer to arise.' },

  { id:'VIR2-039', m:'m3', area:'Integrase and combination therapy', level:'integration',
    stem:'A virus carries a mutation that makes it resistant to the integrase inhibitor in a regimen of dolutegravir plus lamivudine. Which statement fits best?',
    options:[
      'Lamivudine can still act, because the mutation leaves reverse transcriptase unchanged',
      'The mutant is untouched by the regimen',
      'The regimen now acts on latent virus',
      'The integrase mutation also blocks reverse transcriptase'
    ],
    answer:0,
    why:'The two drugs act on different enzymes. A change in integrase does not alter reverse transcriptase, so lamivudine still acts on the mutant, which is the logic behind combination therapy.' },

  /* ===== Module 3 · Capsid and packaging ===== */
  { id:'VIR2-040', m:'m3', area:'Capsid and packaging', level:'concept',
    stem:'What is the capsid?',
    options:[
      'The protein shell around the viral genome',
      'The lipid membrane around the virion',
      'The enzyme that copies the genome',
      'The receptor on the host cell'
    ],
    answer:0,
    why:'The capsid is the protein shell around the viral genome. Lenacapavir binds the capsid protein.' },

  { id:'VIR2-041', m:'m3', area:'Capsid and packaging', level:'concept',
    stem:'What is terminase?',
    options:[
      'A viral enzyme that cleaves concatenated viral DNA before virion assembly',
      'A host enzyme that repairs viral DNA',
      'A viral enzyme that inserts DNA into the host genome',
      'A viral enzyme that cuts polypeptides into proteins'
    ],
    answer:0,
    why:'Terminase is a viral enzyme that cleaves concatenated viral DNA in preparation for virion assembly. Insertion into host DNA is integrase, and cutting polypeptides is protease.' },

  { id:'VIR2-042', m:'m3', area:'Capsid and packaging', level:'application',
    stem:'Which step is disrupted by lenacapavir?',
    options:[
      'Nuclear entry of viral DNA',
      'Binding of gp120 to CD4',
      'Reverse transcription',
      'Integration into host DNA'
    ],
    answer:0,
    why:'Lenacapavir binds the capsid protein and disrupts nuclear entry of viral DNA, assembly and release, and capsid core formation.' },

  { id:'VIR2-043', m:'m3', area:'Capsid and packaging', level:'application',
    stem:'Capsids come out malformed after exposure to a drug that binds the capsid protein. Which drug and effect fit?',
    options:[
      'Lenacapavir, disrupted capsid core formation',
      'Letermovir, blocked terminase',
      'Maraviroc, blocked CCR5',
      'Raltegravir, blocked integration'
    ],
    answer:0,
    why:'Lenacapavir binds the capsid protein, and one result is capsid core formation going wrong, so capsids come out malformed.' },

  { id:'VIR2-044', m:'m3', area:'Capsid and packaging', level:'application',
    stem:'A kidney transplant recipient is CMV-negative and received a kidney from a CMV-positive donor. Which drug is used to prevent CMV disease?',
    options:[
      'Letermovir',
      'Ganciclovir',
      'Acyclovir',
      'Nirsevimab'
    ],
    answer:0,
    why:'Letermovir is prophylaxis for high-risk transplant recipients, including this donor-positive, recipient-negative kidney transplant. Ganciclovir is a CMV treatment drug.' },

  { id:'VIR2-045', m:'m3', area:'Capsid and packaging', level:'integration',
    stem:'Lenacapavir and letermovir are both used for prevention. Which pairing of drug and target is correct?',
    options:[
      'Lenacapavir: capsid protein. Letermovir: terminase',
      'Lenacapavir: terminase. Letermovir: capsid protein',
      'Lenacapavir: integrase. Letermovir: protease',
      'Lenacapavir: gp41. Letermovir: M2 channel'
    ],
    answer:0,
    why:'Lenacapavir binds the capsid protein of HIV and letermovir inhibits the terminase of CMV. Both are used for prevention in the lecture.' },

  /* ===== Module 3 · Protease inhibitors and boosting ===== */
  { id:'VIR2-046', m:'m3', area:'Protease inhibitors and boosting', level:'concept',
    stem:'What do viral proteases do?',
    options:[
      'They cut long polypeptides into functional proteins',
      'They insert viral DNA into host DNA',
      'They cleave host mRNA to steal a cap',
      'They release virions from the cell surface'
    ],
    answer:0,
    why:'In some viruses, mRNA is translated into one long polypeptide. Virus-specific proteases cut it into working proteins.' },

  { id:'VIR2-047', m:'m3', area:'Protease inhibitors and boosting', level:'concept',
    stem:'Which drug is an HIV protease inhibitor?',
    options:[
      'Atazanavir',
      'Raltegravir',
      'Zidovudine',
      'Efavirenz'
    ],
    answer:0,
    why:'Atazanavir is an HIV protease inhibitor. Raltegravir inhibits integrase, zidovudine is a nucleoside analog, and efavirenz is a nonnucleoside inhibitor.' },

  { id:'VIR2-048', m:'m3', area:'Protease inhibitors and boosting', level:'application',
    stem:'Nirmatrelvir is a peptidomimetic. What does that mean?',
    options:[
      'It mimics a stretch of peptide and fits the active site of the viral protease',
      'It mimics a nucleoside and is built into viral DNA',
      'It mimics a host receptor and blocks viral entry',
      'It mimics ritonavir and boosts drug levels'
    ],
    answer:0,
    why:'A peptidomimetic copies a piece of peptide. The viral protease cuts peptide chains, so the drug fits its active site and blocks cleavage.' },

  { id:'VIR2-049', m:'m3', area:'Protease inhibitors and boosting', level:'application',
    stem:'Ritonavir is given with nirmatrelvir. What is its purpose?',
    options:[
      'It inhibits CYP3A, so nirmatrelvir is broken down more slowly and its levels stay high',
      'It blocks the viral protease more potently than nirmatrelvir does',
      'It converts nirmatrelvir into its active form',
      'It prevents nirmatrelvir from entering infected cells'
    ],
    answer:0,
    why:'Ritonavir inhibits CYP3A, the liver enzyme that breaks down many drugs. That slows the metabolism of nirmatrelvir and keeps its levels high.' },

  { id:'VIR2-050', m:'m3', area:'Protease inhibitors and boosting', level:'application',
    stem:'A patient takes a medicine that CYP3A breaks down and is started on nirmatrelvir with ritonavir. What is the concern?',
    options:[
      'Ritonavir inhibits CYP3A, so levels of the other medicine can rise',
      'Nirmatrelvir speeds the breakdown of the other medicine',
      'The other medicine blocks the viral protease',
      'The two medicines cannot be swallowed together'
    ],
    answer:0,
    why:'The same CYP3A inhibition that boosts nirmatrelvir can raise levels of other medicines, which is a drug interaction. Review every medicine the patient takes before dispensing.' },

  { id:'VIR2-051', m:'m3', area:'Protease inhibitors and boosting', level:'integration',
    stem:'A nucleoside analog and a protease inhibitor each mimic a natural molecule. Which pairing is correct?',
    options:[
      'Nucleoside analog: a nucleoside. Protease inhibitor: a peptide',
      'Nucleoside analog: a peptide. Protease inhibitor: a nucleoside',
      'Nucleoside analog: a nucleoside. Protease inhibitor: a nucleoside',
      'Nucleoside analog: a peptide. Protease inhibitor: a peptide'
    ],
    answer:0,
    why:'Nucleoside analogs mimic a nucleoside, which is a base plus a sugar. Peptidomimetic protease inhibitors mimic a stretch of peptide. Shape decides action.' },

  /* ===== Module 4 · Release inhibition ===== */
  { id:'VIR2-052', m:'m4', area:'Release inhibition', level:'concept',
    stem:'What does influenza neuraminidase do for new virions?',
    options:[
      'It cleaves sialic acid on the host cell so virions can be released',
      'It binds the virion to sialic acid on the host cell',
      'It cuts the long polypeptide into working proteins',
      'It inserts viral DNA into host DNA'
    ],
    answer:0,
    why:'Hemagglutinin binds sialic acid, and neuraminidase cleaves it so virions can leave the cell. Cutting polypeptides is protease action, and insertion into host DNA is integrase.' },

  { id:'VIR2-053', m:'m4', area:'Release inhibition', level:'concept',
    stem:'Which drugs are neuraminidase inhibitors?',
    options:[
      'Oseltamivir and zanamivir',
      'Baloxavir and amantadine',
      'Letermovir and nirsevimab',
      'Acyclovir and foscarnet'
    ],
    answer:0,
    why:'Oseltamivir and zanamivir inhibit neuraminidase, and peramivir is a third. Baloxavir blocks cap-snatching, amantadine blocks uncoating, and the others act elsewhere.' },

  { id:'VIR2-054', m:'m4', area:'Release inhibition', level:'application',
    stem:'A patient with influenza takes oseltamivir. What is expected inside the infected cells?',
    options:[
      'Virions assemble but stay attached to the cell',
      'Viral mRNA is made without a cap',
      'Viral genome copying stalls',
      'The entering virion fails to uncoat'
    ],
    answer:0,
    why:'Release is the last stage, so everything before it still runs. Virions are built but stay attached to the cell surface, which limits spread.' },

  { id:'VIR2-055', m:'m4', area:'Release inhibition', level:'application',
    stem:'An influenza strain is resistant to amantadine. Is oseltamivir expected to work?',
    options:[
      'Yes, because it acts on neuraminidase, a different target',
      'No, because both drugs block uncoating',
      'No, because oseltamivir is active against influenza B alone',
      'Yes, because oseltamivir acts on the M2 channel'
    ],
    answer:0,
    why:'Amantadine blocks the M2 channel. Oseltamivir acts on neuraminidase, so it remains effective against amantadine-resistant strains and against influenza A and B.' },

  { id:'VIR2-056', m:'m4', area:'Release inhibition', level:'application',
    stem:'A hospitalized adult has influenza. When should oseltamivir be started?',
    options:[
      'As soon as possible',
      'After two days of symptoms',
      'After the fever resolves',
      'After culture results are reported'
    ],
    answer:0,
    why:'For hospitalized patients, oseltamivir is started as soon as possible. Outpatients start within 2 days of symptoms.' },

  { id:'VIR2-057', m:'m4', area:'Release inhibition', level:'integration',
    stem:'Hemagglutinin binds sialic acid on the host cell, and neuraminidase cleaves it. Which prediction fits a neuraminidase inhibitor?',
    options:[
      'Virions stay bound to the cell and cannot be freed, so spread is limited',
      'Virions cannot bind sialic acid, so entry is blocked',
      'Virions are freed but cannot bind new cells',
      'Hemagglutinin is destroyed, so uncoating fails'
    ],
    answer:0,
    why:'The inhibitor leaves hemagglutinin binding intact but stops neuraminidase from cleaving sialic acid. Virions are built but trapped on the cell, so spread is limited.' },

  /* ===== Module 4 · Cap-snatching and other mechanisms ===== */
  { id:'VIR2-058', m:'m4', area:'Cap-snatching and other mechanisms', level:'concept',
    stem:'What is cap-snatching?',
    options:[
      'Viral mRNA takes the 5′ cap from host mRNA to induce its own translation',
      'The virus removes the cap from its own mRNA',
      'The host cell adds a cap to viral DNA',
      'The virus degrades host mRNA to stop host translation'
    ],
    answer:0,
    why:'In cap-snatching, viral mRNA takes the host 5′ cap, which helps induce translation of the viral mRNA.' },

  { id:'VIR2-059', m:'m4', area:'Cap-snatching and other mechanisms', level:'concept',
    stem:'Which enzyme does baloxavir inhibit?',
    options:[
      'The endonuclease that cleaves host mRNA',
      'The neuraminidase that frees new virions',
      'The reverse transcriptase that copies RNA into DNA',
      'The M2 proton channel that allows uncoating'
    ],
    answer:0,
    why:'Baloxavir inhibits the endonuclease responsible for cleaving host mRNA, the step that releases the cap.' },

  { id:'VIR2-060', m:'m4', area:'Cap-snatching and other mechanisms', level:'concept',
    stem:'Which statement fits recombinant interferon alpha?',
    options:[
      'It inhibits viral protein synthesis and is used for chronic hepatitis B',
      'It blocks fusion of HIV with the host cell',
      'It inhibits neuraminidase and treats influenza',
      'It inhibits terminase and prevents CMV disease'
    ],
    answer:0,
    why:'Interferon alpha inhibits viral protein synthesis. It is used for chronic hepatitis B, and historically for hepatitis C, which direct-acting antivirals have replaced.' },

  { id:'VIR2-061', m:'m4', area:'Cap-snatching and other mechanisms', level:'application',
    stem:'Baloxavir is present in an influenza-infected cell. What problem does the viral mRNA face?',
    options:[
      'It lacks the host 5′ cap that induces its translation',
      'It is cut into fragments by the host',
      'It cannot be copied from the genome',
      'It is translated into a long uncut polypeptide'
    ],
    answer:0,
    why:'Baloxavir blocks the endonuclease, so no host cap is released for the viral mRNA to take. Without the cap, translation is not induced.' },

  { id:'VIR2-062', m:'m4', area:'Cap-snatching and other mechanisms', level:'application',
    stem:'An adult was exposed to a household member with confirmed influenza 24 hours ago and has no symptoms. Which single-dose option fits?',
    options:[
      'Baloxavir, as post-exposure prophylaxis within 48 hours of contact',
      'Nirsevimab, as passive immunization',
      'Amantadine, to block uncoating',
      'Letermovir, as prophylaxis'
    ],
    answer:0,
    why:'Baloxavir is used for post-exposure prophylaxis as a single dose within 48 hours of contact (ages 5 and older). The exposure was 24 hours ago, so the patient is within that window.' },

  { id:'VIR2-063', m:'m4', area:'Cap-snatching and other mechanisms', level:'application',
    stem:'Baloxavir and oseltamivir both treat influenza. How do their targets differ?',
    options:[
      'Baloxavir inhibits the cap-snatching endonuclease, and oseltamivir inhibits neuraminidase',
      'Baloxavir inhibits neuraminidase, and oseltamivir inhibits the endonuclease',
      'Baloxavir blocks uncoating, and oseltamivir blocks fusion',
      'Baloxavir blocks the M2 channel, and oseltamivir blocks the polymerase'
    ],
    answer:0,
    why:'Baloxavir acts at mRNA synthesis (cap-snatching), while oseltamivir acts at release. They hit different stages of the same virus.' },

  { id:'VIR2-064', m:'m4', area:'Cap-snatching and other mechanisms', level:'integration',
    stem:'Which order places amantadine, baloxavir, and oseltamivir from earliest to latest stage of influenza replication?',
    options:[
      'Amantadine (uncoating), baloxavir (mRNA synthesis), oseltamivir (release)',
      'Baloxavir (mRNA synthesis), amantadine (uncoating), oseltamivir (release)',
      'Oseltamivir (release), baloxavir (mRNA synthesis), amantadine (uncoating)',
      'Amantadine (uncoating), oseltamivir (release), baloxavir (mRNA synthesis)'
    ],
    answer:0,
    why:'Uncoating is stage 2, mRNA synthesis is stage 5, and release is stage 8 on the roadmap.' },

  /* ===== Module 4 · Treatment versus prevention ===== */
  { id:'VIR2-065', m:'m4', area:'Treatment versus prevention', level:'concept',
    stem:'What does prophylaxis mean?',
    options:[
      'Giving a drug before disease develops, to prevent infection or illness',
      'Giving a drug to treat an established infection',
      'Giving a drug that clears latent virus',
      'Giving pre-formed antibodies after symptoms begin'
    ],
    answer:0,
    why:'Prophylaxis is given before disease develops. Treatment is for established infection.' },

  { id:'VIR2-066', m:'m4', area:'Treatment versus prevention', level:'concept',
    stem:'Which drug treats mild-to-moderate COVID-19 in adults at high risk?',
    options:[
      'Nirmatrelvir with ritonavir',
      'Ensitrelvir',
      'Letermovir',
      'Nirsevimab'
    ],
    answer:0,
    why:'Nirmatrelvir with ritonavir is the treatment. Ensitrelvir is post-exposure prevention, letermovir prevents CMV disease, and nirsevimab prevents severe RSV disease in infants.' },

  { id:'VIR2-067', m:'m4', area:'Treatment versus prevention', level:'application',
    stem:'Which statement fits letermovir?',
    options:[
      'It prevents CMV infection and disease in high-risk transplant recipients',
      'It treats established CMV disease in transplant recipients',
      'It gives infants ready-made antibodies against CMV',
      'It treats influenza A and B in outpatients'
    ],
    answer:0,
    why:'Letermovir inhibits terminase and prevents CMV infection and disease in high-risk transplant recipients. It is prophylaxis, and ganciclovir is the CMV treatment drug.' },

  { id:'VIR2-068', m:'m4', area:'Treatment versus prevention', level:'application',
    stem:'An infant is to be protected against severe RSV disease before the season. Which strategy fits?',
    options:[
      'Nirsevimab, a long-acting monoclonal antibody given as passive immunization',
      'Baloxavir as a single dose within 48 hours of contact',
      'Nirmatrelvir with ritonavir, a treatment for COVID-19',
      'Letermovir, prophylaxis for transplant recipients'
    ],
    answer:0,
    why:'Nirsevimab gives infants ready-made antibodies to prevent severe RSV disease. It is prevention, not treatment.' },

  { id:'VIR2-069', m:'m4', area:'Treatment versus prevention', level:'application',
    stem:'A pharmacist is asked to dispense nirmatrelvir with ritonavir. What must be reviewed first?',
    options:[
      'The patient’s full medicine list, for interactions',
      'The patient’s CMV serostatus',
      'The patient’s vaccination schedule',
      'The patient’s dose of nirsevimab'
    ],
    answer:0,
    why:'Ritonavir inhibits CYP3A, so it can raise levels of other medicines. Paxlovid carries a boxed warning for significant drug interactions.' },

  { id:'VIR2-070', m:'m4', area:'Treatment versus prevention', level:'integration',
    stem:'Which pairing of drug and role is correct?',
    options:[
      'Ensitrelvir: post-exposure prevention of COVID-19. Baloxavir: treatment and post-exposure prophylaxis of influenza',
      'Ensitrelvir: treatment of COVID-19. Baloxavir: prevention of RSV',
      'Ensitrelvir: prevention of RSV. Baloxavir: treatment of COVID-19',
      'Ensitrelvir: treatment of influenza. Baloxavir: prevention of CMV'
    ],
    answer:0,
    why:'Ensitrelvir is for post-exposure prevention of COVID-19 in ages 12 and older. Baloxavir treats influenza A and B and is also used for post-exposure prophylaxis.' },

  /* ===== Module 5 · Vaccine types compared ===== */
  { id:'VIR2-071', m:'m5', area:'Vaccine types compared', level:'concept',
    stem:'Which vaccine type gives the longest duration of immunity?',
    options:[
      'Live-attenuated',
      'Killed (inactivated)',
      'Subunit'
    ],
    answer:0,
    why:'Live vaccines give a longer duration of immunity and greater effectiveness than killed or subunit vaccines.' },

  { id:'VIR2-072', m:'m5', area:'Vaccine types compared', level:'concept',
    stem:'What does attenuated mean for the virus in a live vaccine?',
    options:[
      'It is weakened so it rarely causes disease in healthy people',
      'It is killed so it cannot replicate',
      'It is purified down to a single protein',
      'It is engineered to carry a foreign gene'
    ],
    answer:0,
    why:'An attenuated virus is weakened. It still replicates, which is why it can revert or cause disease in immunocompromised patients.' },

  { id:'VIR2-073', m:'m5', area:'Vaccine types compared', level:'application',
    stem:'A live vaccine is given by its natural route, such as the nasal influenza vaccine. Which immunoglobulins are produced?',
    options:[
      'IgA and IgG',
      'IgG',
      'IgE and IgM',
      'IgD'
    ],
    answer:0,
    why:'Live vaccines given by the natural route produce IgA and IgG. Killed and subunit vaccines produce IgG.' },

  { id:'VIR2-074', m:'m5', area:'Vaccine types compared', level:'application',
    stem:'Which statement is true of killed vaccines compared with live vaccines?',
    options:[
      'They cannot revert to virulence',
      'They produce longer immunity',
      'They interrupt transmission more effectively',
      'They stimulate stronger cell-mediated immunity'
    ],
    answer:0,
    why:'Killed vaccines contain no live virus, so they cannot revert. Live vaccines give longer immunity, better interruption of transmission, and stronger cell-mediated immunity.' },

  { id:'VIR2-075', m:'m5', area:'Vaccine types compared', level:'application',
    stem:'A subunit vaccine contains purified viral proteins. Which statement follows?',
    options:[
      'It contains no live virus, so it cannot revert or cause disease',
      'It can spread to nonimmune contacts',
      'It stimulates strong cell-mediated immunity without an adjuvant',
      'It is the least stable at room temperature'
    ],
    answer:0,
    why:'Without live virus there is nothing to revert or replicate. Cell-mediated immunity is weak, and an adjuvant helps.' },

  { id:'VIR2-076', m:'m5', area:'Vaccine types compared', level:'integration',
    stem:'Live vaccines give strong protection, yet they carry risks. Which pairing of advantage and risk is correct?',
    options:[
      'Advantage: longer, stronger protection. Risk: reversion to virulence and disease in immunocompromised patients',
      'Advantage: stability at room temperature. Risk: weak cell-mediated immunity',
      'Advantage: no spread to contacts. Risk: shorter immunity',
      'Advantage: purified antigen. Risk: spread to nonimmune contacts'
    ],
    answer:0,
    why:'Live vaccines give longer, stronger protection. The same replication that gives that benefit creates the risks of reversion and disease in immunocompromised patients.' },

  /* ===== Module 5 · Platform mechanisms ===== */
  { id:'VIR2-077', m:'m5', area:'Platform mechanisms', level:'concept',
    stem:'What does an mRNA vaccine deliver to cells?',
    options:[
      'Instructions for making a viral protein',
      'A purified viral protein',
      'A weakened live virus',
      'A killed whole virus'
    ],
    answer:0,
    why:'mRNA instructions are delivered to cells, and the cells make the viral protein, which is the antigen.' },

  { id:'VIR2-078', m:'m5', area:'Platform mechanisms', level:'concept',
    stem:'What is an adjuvant?',
    options:[
      'A substance added to some vaccines to boost the immune response',
      'The viral protein used as the antigen',
      'The carrier virus in a viral vector vaccine',
      'The lipid that carries mRNA'
    ],
    answer:0,
    why:'Some recombinant subunit products add an adjuvant to boost the response. The antigen is a separate component.' },

  { id:'VIR2-079', m:'m5', area:'Platform mechanisms', level:'application',
    stem:'Which vaccine delivers a finished protein, leaving the patient’s cells no antigen to make?',
    options:[
      'Recombinant subunit',
      'mRNA',
      'Viral vector',
      'Live-attenuated'
    ],
    answer:0,
    why:'A recombinant subunit vaccine delivers a purified or recombinant protein. In mRNA and viral vector vaccines, the patient’s cells make the antigen.' },

  { id:'VIR2-080', m:'m5', area:'Platform mechanisms', level:'application',
    stem:'A harmless virus carries the gene for a viral protein into cells. Which platform is this?',
    options:[
      'Viral vector',
      'mRNA',
      'Recombinant subunit',
      'Killed'
    ],
    answer:0,
    why:'A harmless virus that carries a gene into cells is the viral vector platform.' },

  { id:'VIR2-081', m:'m5', area:'Platform mechanisms', level:'application',
    stem:'Which vaccine is a live, attenuated recombinant vesicular stomatitis virus carrying an Ebola gene?',
    options:[
      'Ervebo',
      'Shingrix',
      'Comirnaty',
      'Heplisav-B'
    ],
    answer:0,
    why:'Ervebo is the Ebola vaccine built on a live, attenuated recombinant vesicular stomatitis virus. Shingrix and Heplisav-B are recombinant subunit vaccines, and Comirnaty is an mRNA vaccine.' },

  { id:'VIR2-082', m:'m5', area:'Platform mechanisms', level:'integration',
    stem:'Shingrix, Comirnaty, and Ervebo use different platforms. Which pairing is correct?',
    options:[
      'Shingrix: recombinant subunit. Comirnaty: mRNA. Ervebo: viral vector',
      'Shingrix: mRNA. Comirnaty: viral vector. Ervebo: recombinant subunit',
      'Shingrix: viral vector. Comirnaty: recombinant subunit. Ervebo: mRNA',
      'Shingrix: killed. Comirnaty: live. Ervebo: mRNA'
    ],
    answer:0,
    why:'Shingrix delivers a recombinant protein, Comirnaty delivers mRNA, and Ervebo uses a harmless virus as a vector.' },

  /* ===== Module 5 · Matching vaccines to patients ===== */
  { id:'VIR2-083', m:'m5', area:'Matching vaccines to patients', level:'concept',
    stem:'Why are live-attenuated vaccines a concern for immunocompromised patients?',
    options:[
      'The weakened virus can revert or cause disease',
      'They produce too little IgG',
      'They contain adjuvants',
      'They spread through the air'
    ],
    answer:0,
    why:'The weakened virus still replicates, so it can revert or cause disease when the immune system is suppressed.' },

  { id:'VIR2-084', m:'m5', area:'Matching vaccines to patients', level:'concept',
    stem:'Which vaccine is a live vaccine?',
    options:[
      'Measles',
      'Hepatitis A',
      'Rabies',
      'HPV'
    ],
    answer:0,
    why:'Measles is live. Hepatitis A and rabies are killed, and HPV is a subunit vaccine.' },

  { id:'VIR2-085', m:'m5', area:'Matching vaccines to patients', level:'application',
    stem:'A patient receiving chemotherapy is due for influenza vaccination. Which type fits?',
    options:[
      'Killed (inactivated)',
      'Live-attenuated',
      'Live-attenuated, because live vaccines give stronger protection'
    ],
    answer:0,
    why:'Live-attenuated vaccines can cause disease in immunocompromised patients, so a killed (inactivated) influenza vaccine fits.' },

  { id:'VIR2-086', m:'m5', area:'Matching vaccines to patients', level:'application',
    stem:'The same chemotherapy patient is due for zoster vaccination. Which vaccine fits?',
    options:[
      'Shingrix, a subunit (non-live) vaccine',
      'A live-attenuated zoster vaccine',
      'The rabies vaccine',
      'The measles vaccine'
    ],
    answer:0,
    why:'Shingrix is a recombinant subunit vaccine and contains no live virus. Rabies and measles vaccines do not protect against zoster.' },

  { id:'VIR2-087', m:'m5', area:'Matching vaccines to patients', level:'application',
    stem:'A person who receives a live vaccine lives with a nonimmune contact. Which property is the concern?',
    options:[
      'The vaccine virus can spread to nonimmune contacts',
      'A killed vaccine can revert to virulence',
      'The IgG response is weak',
      'The vaccine loses potency at room temperature'
    ],
    answer:0,
    why:'Live vaccines can spread to nonimmune contacts. Killed and subunit vaccines do not spread.' },

  { id:'VIR2-088', m:'m5', area:'Matching vaccines to patients', level:'integration',
    stem:'Which vaccine type is highly stable at room temperature and cannot cause disease in immunocompromised patients?',
    options:[
      'Killed (inactivated)',
      'Live-attenuated',
      'Subunit',
      'Live-attenuated, given by the natural route'
    ],
    answer:0,
    why:'Killed vaccines have high stability and contain no live virus. Live vaccines have low stability and can cause disease in immunocompromised patients, and the stability of subunit vaccines varies by product.' },

  /* ===== Module 6 · Active and passive immunity ===== */
  { id:'VIR2-089', m:'m6', area:'Active and passive immunity', level:'concept',
    stem:'Which type of immunity is produced by the patient’s own immune system?',
    options:[
      'Active immunity',
      'Passive immunity',
      'Herd immunity'
    ],
    answer:0,
    why:'In active immunity, the patient’s own immune system makes antibodies and memory cells.' },

  { id:'VIR2-090', m:'m6', area:'Active and passive immunity', level:'concept',
    stem:'What is the onset of passive immunity?',
    options:[
      'Immediate',
      'Days to weeks',
      'Several months',
      'After memory cells form'
    ],
    answer:0,
    why:'Pre-formed antibodies protect immediately. Active immunity is the one that takes days to weeks.' },

  { id:'VIR2-091', m:'m6', area:'Active and passive immunity', level:'application',
    stem:'Rabies immune globulin and nirsevimab share which feature?',
    options:[
      'They supply pre-formed antibodies, so protection is immediate but temporary',
      'They stimulate memory cells to give long-lasting protection',
      'They produce long-lasting immunity through the patient\u2019s own response',
      'They induce active immunity within days to weeks'
    ],
    answer:0,
    why:'Both supply pre-formed antibodies. Protection is immediate, and it lasts weeks to months without immune memory.' },

  { id:'VIR2-092', m:'m6', area:'Active and passive immunity', level:'application',
    stem:'Which statement fits the measles vaccine and Shingrix?',
    options:[
      'Both induce active immunity, with a slower onset and long-lasting protection',
      'Both supply pre-formed antibodies',
      'Both give immediate but temporary protection',
      'Both are forms of passive immunization'
    ],
    answer:0,
    why:'Vaccines induce active immunity. Onset takes days to weeks, and immune memory makes protection long-lasting.' },

  { id:'VIR2-093', m:'m6', area:'Active and passive immunity', level:'application',
    stem:'Why does protection from nirsevimab last weeks to months?',
    options:[
      'It supplies pre-formed antibodies and creates no immune memory',
      'It stimulates memory cells that expire quickly',
      'It is a live vaccine that clears from the body',
      'It works through herd immunity'
    ],
    answer:0,
    why:'Nirsevimab is passive immunization. The antibodies are given, so they fade, and the infant’s own immune system builds no memory.' },

  { id:'VIR2-094', m:'m6', area:'Active and passive immunity', level:'integration',
    stem:'A patient needs protection within hours and also for years afterward. Which pattern fits?',
    options:[
      'Passive antibodies now, plus active immunity for the long term',
      'A vaccine alone, because it acts immediately',
      'Immune globulin alone, because it lasts for years',
      'Herd immunity alone, because it protects individuals directly'
    ],
    answer:0,
    why:'Passive immunity is immediate but temporary, and active immunity is slow to start but long-lasting. Combining them covers both needs.' },

  /* ===== Module 6 · Passive-active protection ===== */
  { id:'VIR2-095', m:'m6', area:'Passive-active protection', level:'concept',
    stem:'What does passive-active immunity combine?',
    options:[
      'Pre-formed antibodies and a vaccine that starts the patient’s own response',
      'Two different vaccines that each start the patient\u2019s own response',
      'A vaccine and an antiviral drug that blocks a viral enzyme',
      'Herd immunity and a vaccine given to the whole community'
    ],
    answer:0,
    why:'Immune globulin supplies the passive part, and the vaccine starts the active part.' },

  { id:'VIR2-096', m:'m6', area:'Passive-active protection', level:'concept',
    stem:'Which product provides immediate passive protection after a rabies exposure?',
    options:[
      'Rabies immune globulin',
      'Rabies vaccine (first dose)',
      'Nirsevimab (a monoclonal antibody)',
      'Shingrix (a recombinant subunit vaccine)'
    ],
    answer:0,
    why:'Rabies immune globulin supplies pre-formed antibodies. The vaccine starts active immunity, and nirsevimab is for RSV.' },

  { id:'VIR2-097', m:'m6', area:'Passive-active protection', level:'application',
    stem:'After a rabies exposure, why is immune globulin given with the first vaccine dose?',
    options:[
      'The globulin protects immediately while the vaccine builds active immunity',
      'The vaccine protects immediately while the globulin builds the patient\u2019s own memory',
      'The globulin makes the vaccine unnecessary because it is long-lasting',
      'The vaccine neutralizes the globulin before it can act'
    ],
    answer:0,
    why:'Active immunity takes days to weeks, so the globulin covers the early period while the vaccine builds lasting protection.' },

  { id:'VIR2-098', m:'m6', area:'Passive-active protection', level:'application',
    stem:'Which sequence is correct after a rabies exposure?',
    options:[
      'Immune globulin and the first vaccine dose, then immediate passive protection while active immunity builds',
      'Active immunity first, then immune globulin days later when protection is needed',
      'The vaccine given after the passive antibodies fade, to restart protection',
      'Immune globulin alone, repeated until the patient is protected'
    ],
    answer:0,
    why:'Both products are given early. The globulin protects immediately, and the vaccine-induced active immunity builds and then takes over.' },

  { id:'VIR2-099', m:'m6', area:'Passive-active protection', level:'application',
    stem:'A patient receives rabies vaccine alone after an exposure. What gap is expected early on?',
    options:[
      'Protection is absent while active immunity builds over days to weeks',
      'Passive antibodies fade immediately',
      'The vaccine cannot create immune memory',
      'Herd immunity protects the patient during that time'
    ],
    answer:0,
    why:'Active immunity takes days to weeks to develop. Immune globulin is added to cover that early gap.' },

  { id:'VIR2-100', m:'m6', area:'Passive-active protection', level:'integration',
    stem:'Which statement correctly compares the two parts of passive-active protection?',
    options:[
      'Passive: immediate and temporary. Active: slower to start and long-lasting',
      'Passive: slower to start and long-lasting. Active: immediate and temporary',
      'Both: immediate and long-lasting',
      'Both: slower to start and temporary'
    ],
    answer:0,
    why:'Passive antibodies act at once and fade over weeks to months. Active immunity takes days to weeks to start and lasts because of immune memory.' },

  /* ===== Module 6 · Herd immunity ===== */
  { id:'VIR2-101', m:'m6', area:'Herd immunity', level:'concept',
    stem:'What is herd immunity?',
    options:[
      'Protection of a community when enough people are immune to stop sustained spread',
      'Protection from antibodies given to an individual patient',
      'A vaccine that stimulates memory cells in each patient',
      'The immune response that follows infection in one patient'
    ],
    answer:0,
    why:'Herd immunity is community-level protection. It also protects people who are not immune.' },

  { id:'VIR2-102', m:'m6', area:'Herd immunity', level:'concept',
    stem:'About what percentage must be immune to stop sustained measles spread?',
    options:[
      'About 95%',
      'About 80%',
      'About 65%',
      'About 50%'
    ],
    answer:0,
    why:'The measles threshold is about 95% (WHO). Polio is lower, at about 80%.' },

  { id:'VIR2-103', m:'m6', area:'Herd immunity', level:'application',
    stem:'Coverage is 85%. Which statement is correct?',
    options:[
      'It is above the polio threshold (about 80%) but below the measles threshold (about 95%)',
      'It is above the measles threshold (about 95%) but below the polio threshold (about 80%)',
      'It is above both the measles and polio thresholds',
      'It is below both the measles and polio thresholds'
    ],
    answer:0,
    why:'The threshold depends on the disease. Measles needs about 95% and polio about 80%, so 85% is enough for polio but not for measles.' },

  { id:'VIR2-104', m:'m6', area:'Herd immunity', level:'application',
    stem:'Coverage falls below the herd immunity threshold for a disease. What is expected?',
    options:[
      'Each case can infect more than one other person, so outbreaks can return',
      'Each case infects fewer than one other person, so outbreaks fade',
      'Nothing changes, because immune people protect everyone',
      'The immune people become ill, but the others stay well'
    ],
    answer:0,
    why:'Below the threshold, each case infects more than one other person on average, so sustained spread returns.' },

  { id:'VIR2-105', m:'m6', area:'Herd immunity', level:'application',
    stem:'Who is protected indirectly when coverage is above the threshold?',
    options:[
      'People who lack immunity, such as infants and immunocompromised patients',
      'The vaccinated people, who are protected directly',
      'People who recently received immune globulin',
      'People with a latent infection of the same virus'
    ],
    answer:0,
    why:'Outbreaks cannot spread when enough people are immune, which protects those who are not immune.' },

  { id:'VIR2-106', m:'m6', area:'Herd immunity', level:'integration',
    stem:'Which statement links herd immunity to the number of people each case infects?',
    options:[
      'Above the threshold, each case infects fewer than one other person, so the outbreak fades',
      'Above the threshold, each case infects more than one other person',
      'Below the threshold, each case infects fewer than one other person',
      'The number infected by each case is the same at any coverage'
    ],
    answer:0,
    why:'Herd immunity works because high coverage pushes the number of people each case infects below one.' }
];
