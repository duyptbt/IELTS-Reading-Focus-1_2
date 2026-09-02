import {
  VocabularyItem,
  GrammarStructureItem,
  ParaphrasePair,
  MatchingTaskItem,
  GapFillTaskItem,
  ReferenceTaskItem,
  TransformationTaskItem,
} from '../types';

export const CONSOLIDATION_VOCABULARY: VocabularyItem[] = [
  {
    id: 'vocab-1',
    word: 'Self-sufficiency',
    phonetic: '/ˌself.səˈfɪʃ.ən.si/',
    partOfSpeech: 'noun (uncountable)',
    definition: 'The state or quality of being able to supply one\'s own needs without external assistance.',
    passageContext: '...and this has encouraged a culture of self-sufficiency and careful use of resources.',
    paragraphRef: 1,
    collocations: ['culture of self-sufficiency', 'economic self-sufficiency', 'strive for self-sufficiency'],
    synonyms: ['autonomy', 'independence', 'self-reliance'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-2',
    word: 'Capping',
    phonetic: '/ˈkæp.ɪŋ/',
    partOfSpeech: 'verb (present participle) / noun',
    definition: 'Setting an official upper limit on an amount, rate, or level of consumption.',
    passageContext: 'Eigg manages electricity demand mainly by capping the instantaneous power that can be used...',
    paragraphRef: 3,
    collocations: ['cap emissions', 'capping consumption', 'impose a cap on'],
    synonyms: ['limiting', 'restricting', 'curbing', 'constraining'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-3',
    word: 'Instantaneous',
    phonetic: '/ˌɪn.stənˈteɪ.ni.əs/',
    partOfSpeech: 'adjective',
    definition: 'Happening, existing, or measured immediately at a single specific moment in time.',
    passageContext: '...by capping the instantaneous power that can be used to five kilowatts (kW) for a household...',
    paragraphRef: 3,
    collocations: ['instantaneous power', 'instantaneous response', 'instantaneous feedback'],
    synonyms: ['immediate', 'real-time', 'instant', 'prompt'],
    ieltsBand: 'Band 8.0+',
  },
  {
    id: 'vocab-4',
    word: 'Cumulative',
    phonetic: '/ˈkjuː.mjə.lə.tɪv/',
    partOfSpeech: 'adjective',
    definition: 'Increasing in quantity or degree by continuous successive additions over a period of time.',
    passageContext: '...display current and cumulative electricity usage, and sound an alarm when consumption reaches...',
    paragraphRef: 3,
    collocations: ['cumulative effect', 'cumulative total', 'cumulative data', 'cumulative impact'],
    synonyms: ['aggregate', 'accumulated', 'collective', 'progressive'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-5',
    word: 'Postpone',
    phonetic: '/pəʊstˈpəʊn/',
    partOfSpeech: 'verb (transitive)',
    definition: 'To arrange for something to take place at a later time or date than originally planned.',
    passageContext: 'Residents then take steps to temporarily reduce electricity demand further still, or postpone demand...',
    paragraphRef: 4,
    collocations: ['postpone demand', 'postpone an event', 'postpone action until'],
    synonyms: ['defer', 'delay', 'reschedule', 'put off'],
    ieltsBand: 'Band 6.5+',
  },
  {
    id: 'vocab-6',
    word: 'Equitable',
    phonetic: '/ˈek.wɪ.tə.bəl/',
    partOfSpeech: 'adjective',
    definition: 'Characterized by fairness, impartiality, and equal distribution of rights or resources.',
    passageContext: 'One of the incentives for capping electricity use, rather than charging different amounts... was to make access to energy equitable.',
    paragraphRef: 9,
    collocations: ['equitable distribution', 'equitable access', 'equitable treatment', 'equitable society'],
    synonyms: ['fair', 'just', 'impartial', 'egalitarian'],
    ieltsBand: 'Band 8.0+',
  },
  {
    id: 'vocab-7',
    word: 'Irrespective of',
    phonetic: '/ˌɪr.ɪˈspek.tɪv əv/',
    partOfSpeech: 'prepositional phrase',
    definition: 'Without taking into account; regardless of external conditions or factors.',
    passageContext: 'Every household has the same five kW cap, irrespective of income...',
    paragraphRef: 9,
    collocations: ['irrespective of cost', 'irrespective of background', 'irrespective of age'],
    synonyms: ['regardless of', 'notwithstanding', 'without regard to'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-8',
    word: 'Yield',
    phonetic: '/jiːld/',
    partOfSpeech: 'verb (transitive/intransitive)',
    definition: 'To produce, generate, or supply a desirable result, benefit, or product.',
    passageContext: 'Improved home insulation and heating has also yielded benefits, making it more affordable...',
    paragraphRef: 9,
    collocations: ['yield benefits', 'yield positive results', 'yield high returns'],
    synonyms: ['generate', 'produce', 'deliver', 'bring about'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-9',
    word: 'Elimination',
    phonetic: '/ɪˌlɪm.ɪˈneɪ.ʃən/',
    partOfSpeech: 'noun (uncountable)',
    definition: 'The complete removal, eradication, or exclusion of something unwanted.',
    passageContext: '...better treatment of drinking water in some houses, and the elimination of the constant noise of diesel generators.',
    paragraphRef: 9,
    collocations: ['complete elimination', 'elimination of emissions', 'elimination of poverty'],
    synonyms: ['eradication', 'removal', 'abolition', 'extermination'],
    ieltsBand: 'Band 7.5+',
  },
];

export const CONSOLIDATION_GRAMMAR: GrammarStructureItem[] = [
  {
    id: 'grammar-1',
    name: 'Participle Clauses for Consequence & Result',
    category: 'Sentence Synthesis & Cohesion',
    formula: '[Main Clause] + , + [Present Participle (-ing Phrase)]',
    passageExample: '...most households on Eigg used diesel generators to supply electricity, resulting in significant carbon emissions.',
    paragraphRef: 7,
    explanation:
      'Present participle clauses with comma + "-ing" (e.g., "resulting in", "freeing them from", "so distributing") allow academic writers to express logical consequences or secondary actions concisely without starting new repetitive sentences.',
    ieltsApplication:
      'Essential for IELTS Academic Writing Task 1 & 2 to achieve Band 8 in Grammatical Range and Accuracy (GRA). In Reading, recognize that "-ing" phrases often state consequences or direct impacts.',
    practiceExample:
      'The government invested heavily in public transit, resulting in a dramatic decline in urban traffic congestion.',
  },
  {
    id: 'grammar-2',
    name: 'Impersonal Passive in Technical Reporting',
    category: 'Academic Register & Objectivity',
    formula: 'It + was/is + Past Participle (apparent/decided/noted) + that-clause OR Subject + is/was + being + Past Participle',
    passageExample: '...it quickly became apparent that in order to keep the capital building costs down, it would be necessary to manage demand.',
    paragraphRef: 2,
    explanation:
      'Academic texts utilize impersonal structures ("it became apparent that...", "new energy supplies are being developed") to present factual conclusions objectively rather than attributing personal opinions to individual researchers.',
    ieltsApplication:
      'Helps you identify key claims, scientific findings, and institutional consensus in IELTS Reading passages.',
    practiceExample:
      'It has been widely demonstrated that reducing carbon emissions yields immediate environmental dividends.',
  },
  {
    id: 'grammar-3',
    name: 'Contrast & Concession with Subordinating Conjunctions',
    category: 'Complex Sentence Structure',
    formula: 'Although / While / As opposed to + [Subordinate Clause], [Main Clause]',
    passageExample: 'Today, although the island now has most modern conveniences, CO2 emissions per household are 20 percent lower than the UK average...',
    paragraphRef: 1,
    explanation:
      'Concessive linkers introduce a counter-premise or surprising contrast that highlights the significance of the main clause data.',
    ieltsApplication:
      'True/False/Not Given questions frequently hinge on understanding concession versus direct opposition (e.g. "although X, Y is true").',
    practiceExample:
      'Although renewable infrastructure requires substantial upfront investment, long-term operational costs remain remarkably low.',
  },
  {
    id: 'grammar-4',
    name: 'Prepositional Phrases of Independence & Equivalence',
    category: 'Lexico-Grammar',
    formula: '[Independent Action] + irrespective of / regardless of + [Noun Phrase / Variable]',
    passageExample: 'Every household has the same five kW cap, irrespective of income, so distributing the available resources equally...',
    paragraphRef: 9,
    explanation:
      '"Irrespective of + noun" is a high-level formal connective signifying that the primary condition applies universally regardless of variations in the secondary factor.',
    ieltsApplication:
      'Frequently tested in Short Answer and Summary Completion where examiners test understanding of unconditional policies.',
    practiceExample:
      'All citizens receive equal healthcare subsidies, irrespective of socioeconomic status.',
  },
];

export const CONSOLIDATION_PARAPHRASES: ParaphrasePair[] = [
  {
    id: 'para-1',
    originalText: 'For the island community of about a hundred residents...',
    paraphrasedText: 'Approximately 100 people inhabit the Scottish island.',
    technique: 'Synonym replacement (about → approximately; residents → people inhabit)',
    explanation: 'IELTS Question 1 tested "approximately" against the passage word "about".',
    paragraphRef: 1,
  },
  {
    id: 'para-2',
    originalText: '...freeing them from dependence on diesel generators...',
    paraphrasedText: '...eliminating their reliance on fossil-fuel generators...',
    technique: 'Nominalization & synonym variation (dependence on → reliance on; freeing from → eliminating)',
    explanation: 'Shows how IELTS transforms verbal clauses into formal nominal phrases in Reading options.',
    paragraphRef: 9,
  },
  {
    id: 'para-3',
    originalText: '...making access to energy equitable. Every household has the same five kW cap, irrespective of income...',
    paraphrasedText: '...ensuring fair and equal distribution of power resources across all social strata.',
    technique: 'Conceptual paraphrasing (equitable access / irrespective of income → fair and equal distribution across all social strata)',
    explanation: 'Key comprehension point tested in True/False/Not Given questions.',
    paragraphRef: 9,
  },
  {
    id: 'para-4',
    originalText: 'Prior to the installation of the new electricity grid...',
    paraphrasedText: 'Before the modern power network was commissioned...',
    technique: 'Prepositional & vocabulary swap (Prior to → Before; installation of grid → power network commissioned)',
    explanation: 'Tests temporal sequencing markers commonly used in IELTS timeline questions.',
    paragraphRef: 7,
  },
];

// ACTIVITY 1: MATCHING (Synonym & Collocation pairing)
export const MATCHING_TASKS: MatchingTaskItem[] = [
  {
    id: 'm-1',
    term: 'Self-sufficiency',
    definition: 'Ability to satisfy one\'s own energy & resource needs without external dependency',
    context: 'Culture of independence fostered by remote island geography',
  },
  {
    id: 'm-2',
    term: 'Equitable',
    definition: 'Fair and impartial distribution ensuring equal rights or quota for all',
    context: 'Every household received the identical 5 kW cap regardless of income',
  },
  {
    id: 'm-3',
    term: 'Postpone',
    definition: 'To delay or defer power-intensive tasks until generation levels recover',
    context: 'Red light days when residents defer demand until wind/hydro output increases',
  },
  {
    id: 'm-4',
    term: 'Cumulative',
    definition: 'Increasing progressively by successive additions over time',
    context: 'Energy monitors showing current draw and total accumulated electricity consumption',
  },
  {
    id: 'm-5',
    term: 'Yield',
    definition: 'To generate, bring about, or supply beneficial outcomes',
    context: 'Insulation improvements delivered measurable heating and comfort benefits',
  },
  {
    id: 'm-6',
    term: 'Elimination',
    definition: 'Total eradication or complete removal of an undesirable nuisance',
    context: 'Ridding the community of perpetual generator rumble and pollutant fumes',
  },
];

// ACTIVITY 2: GAP-FILL CHALLENGE
export const GAP_FILL_TASKS: GapFillTaskItem[] = [
  {
    id: 'gap-1',
    sentence: 'Remote communities often foster a strong sense of _________ due to the high logistical costs of importing essential supplies from the mainland.',
    targetWord: 'self-sufficiency',
    options: ['self-sufficiency', 'cumulative', 'elimination', 'equitable'],
    hint: 'Noun meaning complete independence in providing for one\'s own needs.',
    explanation: 'In Paragraph 1, the passage states that high mainland import costs "encouraged a culture of self-sufficiency".',
  },
  {
    id: 'gap-2',
    sentence: 'The microgrid controls peak consumption by _________ the instantaneous electrical draw allowed for domestic properties at 5 kW.',
    targetWord: 'capping',
    options: ['capping', 'yielding', 'postponing', 'eliminating'],
    hint: 'Participle/verb meaning imposing an upper boundary or ceiling limit.',
    explanation: 'Paragraph 3 explains that Eigg manages demand by "capping the instantaneous power that can be used".',
  },
  {
    id: 'gap-3',
    sentence: 'Smart meters display both current electrical draw and _________ kilowatt-hour consumption across the entire billing cycle.',
    targetWord: 'cumulative',
    options: ['cumulative', 'instantaneous', 'equitable', 'intermittent'],
    hint: 'Adjective meaning representing an accumulated, running total over time.',
    explanation: 'Paragraph 3 specifies monitors display "current and cumulative electricity usage".',
  },
  {
    id: 'gap-4',
    sentence: 'To ensure _________ access to natural resources, the governing council instituted universal quotas applied to every resident irrespective of wealth.',
    targetWord: 'equitable',
    options: ['equitable', 'instantaneous', 'postponed', 'cumulative'],
    hint: 'Adjective meaning fair, unbiased, and just to all members of a society.',
    explanation: 'Paragraph 9 highlights the incentive "to make access to energy equitable" across all islanders.',
  },
  {
    id: 'gap-5',
    sentence: 'When renewable supplies drop on red light days, residents willingly _________ non-essential domestic washing until windy conditions return.',
    targetWord: 'postpone',
    options: ['postpone', 'cap', 'yield', 'eliminate'],
    hint: 'Verb meaning to delay or reschedule an action for a later time.',
    explanation: 'Paragraph 4 states that residents "postpone demand until renewable energy generation has increased".',
  },
  {
    id: 'gap-6',
    sentence: 'Strategic retrofitting of residential thermal insulation has _________ substantial savings on annual heating expenditures.',
    targetWord: 'yielded',
    options: ['yielded', 'eliminated', 'postponed', 'capped'],
    hint: 'Past participle of yield, meaning produced or generated tangible rewards.',
    explanation: 'Paragraph 9 reports that "improved home insulation and heating has also yielded benefits".',
  },
];

// ACTIVITY 3: IELTS COHESION & PRONOUN REFERENCE HUNT
export const REFERENCE_TASKS: ReferenceTaskItem[] = [
  {
    id: 'ref-1',
    question: 'In Paragraph 2, what does the phrase "This goal" refer to?',
    quote: '"...allow the island to generate most of its electricity from renewable sources, mainly water, wind and solar power. This goal was overseen by the Eigg Heritage Trust (EHT)."',
    paragraphRef: 2,
    options: [
      'Generating the majority of the island\'s power from renewable energy sources',
      'Constructing private diesel backup facilities for all businesses',
      'Expanding mainland ferry transportation schedules to the Scottish coast',
      'Selling surplus electricity back to the national UK grid'
    ],
    correctIndex: 0,
    explanation: 'The sentence directly preceding "This goal" describes allowing the island to generate most of its electricity from renewable sources (water, wind, solar).',
  },
  {
    id: 'ref-2',
    question: 'In Paragraph 6, what does the phrase "The same applies" refer back to?',
    quote: '"...while private properties have paid for their own insulation to be installed. The same applies for installations of solar water heating..."',
    paragraphRef: 6,
    options: [
      'Trust properties receive installations for free, whereas private properties pay for their own',
      'All island houses were supplied with free electric vehicles and bicycle grants',
      'The council banned all secondary glazing installations across the Scottish highlands',
      'All commercial businesses must operate at double the kilowatt rate of residential homes'
    ],
    correctIndex: 0,
    explanation: '"The same applies" refers to the dichotomy explained right before: Trust-owned properties received free installation, while private owners had to self-fund.',
  },
  {
    id: 'ref-3',
    question: 'In Paragraph 7, what is the grammatical function of "resulting in significant carbon emissions"?',
    quote: '"...most households on Eigg used diesel generators to supply electricity, resulting in significant carbon emissions."',
    paragraphRef: 7,
    options: [
      'A present participle clause expressing the direct consequence of using diesel generators',
      'A conditional clause setting out a future hypothetical scenario',
      'A concession clause introducing an unexpected exception to island policy',
      'A relative pronoun defining the geographic boundaries of the Isle of Eigg'
    ],
    correctIndex: 0,
    explanation: 'The "-ing" participle clause directly expresses the environmental outcome/consequence produced by running diesel generators.',
  },
  {
    id: 'ref-4',
    question: 'In Paragraph 9, what does "so distributing the available resources equally" summarize?',
    quote: '"Every household has the same five kW cap, irrespective of income, so distributing the available resources equally across the island\'s population."',
    paragraphRef: 9,
    options: [
      'The outcome of applying a universal, non-tiered 5 kW power ceiling to all households',
      'The process of taxing wealthier residents at significantly higher tariffs',
      'The distribution of emergency firewood rations during winter months',
      'The allocation of four maintenance technician positions among the islanders'
    ],
    correctIndex: 0,
    explanation: 'The concluding participle clause synthesizes the outcome of the universal 5 kW cap regardless of household wealth.',
  },
];

// ACTIVITY 4: ACADEMIC SENTENCE TRANSFORMATION (IELTS Band 8 Writing & Reading)
export const TRANSFORMATION_TASKS: TransformationTaskItem[] = [
  {
    id: 'trans-1',
    original: 'The island switched to renewable energy and as a consequence they eliminated their dependence on diesel generators.',
    targetGrammar: 'Participle Clause of Result (freeing them from...)',
    prompt: 'Select the most effective academic restructuring using a participle clause:',
    options: [
      'The island switched to renewable energy, freeing residents from dependence on diesel generators.',
      'Because the island switched to renewable energy, so therefore diesel generators were freed.',
      'To switch to renewable energy was free from diesel generator dependency for the island.',
      'The island was free from renewable energy, resulting into diesel generator switching.'
    ],
    correctIndex: 0,
    explanation: 'Option A smoothly links the primary action to its consequence using a comma + participle clause ("freeing residents from..."), matching high-level IELTS academic style.',
  },
  {
    id: 'trans-2',
    original: 'It does not matter how much money each family makes; they all receive the same power quota.',
    targetGrammar: 'Prepositional Construction (irrespective of income)',
    prompt: 'Select the most natural formal academic sentence:',
    options: [
      'Every household is allotted an identical power quota, irrespective of income.',
      'Regardless how money families have, power quotas are given equal.',
      'Irrespective to family moneys, identical power is getting distributed.',
      'Every family receives same electricity whether they make cash or not.'
    ],
    correctIndex: 0,
    explanation: '"Irrespective of income" accurately and formally replaces informal phrases like "it does not matter how much money each family makes".',
  },
  {
    id: 'trans-3',
    original: 'People retrofitted their homes with insulation and this produced noticeable thermal comfort benefits.',
    targetGrammar: 'Collocation with "yield" (yielded benefits)',
    prompt: 'Select the best sentence demonstrating high-band collocation:',
    options: [
      'Retrofitting residential properties with insulation has yielded noticeable benefits in thermal comfort.',
      'Homes retrofitted with insulation yielded to give noticeable comforts of temperature.',
      'Insulation retrofitting was yielding into produced thermal benefits noticeably.',
      'To retrofit insulation has yielded comfortable things for the houses.'
    ],
    correctIndex: 0,
    explanation: 'The academic collocation is "has yielded noticeable benefits in [noun/area]".',
  },
  {
    id: 'trans-4',
    original: 'Before they built the modern electrical network, most islanders had to rely on dirty diesel fuel.',
    targetGrammar: 'Temporal Academic Preposition ("Prior to the installation of...")',
    prompt: 'Select the optimal academic transformation:',
    options: [
      'Prior to the installation of the modern electricity grid, most households relied on diesel generation.',
      'Before when they installed modern electricity, diesel was relying on households.',
      'Prior for modern grid installing, islanders were with diesel fuels.',
      'At prior times of electricity grid, diesel relied on the people.'
    ],
    correctIndex: 0,
    explanation: '"Prior to the installation of [noun phrase]" is the standard formal academic equivalent of "Before they built...".',
  },
];
