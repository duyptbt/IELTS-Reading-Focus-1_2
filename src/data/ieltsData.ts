import { ParagraphData, QuestionItem, TipStrip } from '../types';

export const PASSAGE_TITLE = 'Reducing electricity consumption on the Isle of Eigg';
export const PASSAGE_SUBTITLE = 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.';

export const PARAGRAPHS: ParagraphData[] = [
  {
    id: 1,
    sectionTitle: 'Background',
    text: 'The Isle of Eigg is situated off the West Coast of Scotland, and is reached by ferry from the mainland. For the island community of about a hundred residents, it has always been expensive to import products, materials and skilled labour from the mainland, and this has encouraged a culture of self-sufficiency and careful use of resources. Today, although the island now has most modern conveniences, CO2 emissions per household are 20 percent lower than the UK average, and electricity use is 50 percent lower.',
  },
  {
    id: 2,
    text: 'When Eigg designed its electricity grid, which was switched on in February 2008, it quickly became apparent that in order to keep the capital building costs down, it would be necessary to manage demand. This would also allow the island to generate most of its electricity from renewable sources, mainly water, wind and solar power. This goal was overseen by the Eigg Heritage Trust (EHT).',
  },
  {
    id: 3,
    sectionTitle: 'The technology',
    text: 'Eigg manages electricity demand mainly by capping the instantaneous power that can be used to five kilowatts (kW) for a household and ten kW for a business. If usage goes over the limit, the electricity supply is cut off and the maintenance team must be called to come and switch it back on again. All households and businesses have energy monitors, which display current and cumulative electricity usage, and sound an alarm when consumption reaches a user-defined level, usually set a few hundred watts below the actual limit. The result is that Eigg residents have a keen sense of how much power different electrical appliances use, and are careful to minimise energy consumption.',
  },
  {
    id: 4,
    text: 'Demand is also managed by warning the entire island when renewable energy generation is lower than demand, and diesel generators are operating to back it up - a so-called \'red light day\', as opposed to \'green light days\' when there is sufficient renewable energy. Residents then take steps to temporarily reduce electricity demand further still, or postpone demand until renewable energy generation has increased.',
  },
  {
    id: 5,
    text: 'Energy use on the island has also been reduced through improved wall and loft insulation in homes, new boilers, solar water heating, car-sharing and various small, energy-saving measures in households. New energy supplies are being developed, including sustainably harvested forests to supply wood for heating.',
  },
  {
    id: 6,
    text: 'Eigg Heritage Trust has installed insulation in all of its own properties at no cost to the tenants, while private properties have paid for their own insulation to be installed. The same applies for installations of solar water heating, although not all Trust properties have received this as yet. The Trust also operates a Green Grants scheme, where residents can claim 50 percent of the cost of equipment to reduce carbon emissions, up to a limit of £300. Purchases included bikes, solar water heating, secondary glazing, thicker curtains, and greenhouses to grow food locally, rather than importing it.',
  },
  {
    id: 7,
    sectionTitle: 'Environmental benefits',
    text: 'Prior to the installation of the new electricity grid and renewable energy generation, most households on Eigg used diesel generators to supply electricity, resulting in significant carbon emissions. Homes were also poorly insulated and had old, inefficient oil-burning boilers, or used coal for heating.',
  },
  {
    id: 8,
    text: 'The work by the Eigg Heritage Trust to reduce energy use has resulted in significant reductions in carbon emissions from the island\'s households and businesses. The average annual electricity use per household is just 2,160 kilowatt hours (kWh), compared to a UK average in 2008 of 4,198 kWh. Domestic carbon emissions have fallen by 47 percent, from 8.4 to 4.45 tonnes per year. This compares to average UK household emissions of 5.5 to 6 tonnes per year. The emissions should fall even further over the next few years as the supply of wood for heating increases.',
  },
  {
    id: 9,
    sectionTitle: 'Social benefits',
    text: 'The completion of Eigg\'s electricity grid has made a significant difference to the island\'s residents, freeing them from dependence on diesel generators and providing them with a stable and affordable power supply. A reliable electricity supply has brought improvements in other areas, for example, better treatment of drinking water in some houses, and the elimination of the constant noise of diesel generators. Improved home insulation and heating has also yielded benefits, making it more affordable to keep homes at a comfortable temperature. One of the incentives for capping electricity use, rather than charging different amounts according to usage, was to make access to energy equitable. Every household has the same five kW cap, irrespective of income, so distributing the available resources equally across the island\'s population.',
  },
  {
    id: 10,
    sectionTitle: 'Economic and employment benefits',
    text: 'Eigg\'s electricity grid supports four part-time maintenance jobs on the island, and residents have also been employed for building work to improve Trust-owned houses and other buildings. Likewise, the start of organised harvesting of wood for heating has created several forestry jobs for residents. A part-time \'green project manager\' post has also been created. A wider economic impact has come from having a reliable and affordable electricity supply, which has enabled several new businesses to start up, including restaurants, shops, guest houses and self-catering accommodation. As Eigg has become known for cutting carbon emissions and protecting the environment, an increasing number of visitors have come to the island to learn about its work, bringing a further economic benefit to the residents.',
  },
];

export const TIP_STRIP_PART1: TipStrip = {
  title: 'Tip Strip: Questions 1–7',
  questionRange: 'Questions 1–7',
  bullets: [
    'Only choose words or numbers which appear in the reading passage. Don\'t use your own words.',
    'Don\'t make any changes to the words from the reading passage. For example, don\'t change a singular noun to a plural noun.',
    'You can use fewer words than the maximum number in the instructions.',
    'Don\'t write more words than the instructions tell you (NO MORE THAN TWO WORDS AND/OR A NUMBER).',
  ],
};

export const TIP_STRIP_PART2: TipStrip = {
  title: 'Tip Strip: Questions 8–13',
  questionRange: 'Questions 8–13',
  bullets: [
    'The statements follow the order of the information in the reading passage.',
    'Some of the words in the statements might be the same or similar to words in the reading passage, whether the statement is true, false or not given.',
    'Read the whole statement carefully before you decide whether it matches information in the reading passage or not.',
  ],
};

export const QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    questionNumber: 1,
    type: 'short_answer',
    prompt: 'Approximately how many people live on Eigg?',
    instruction: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 2,
    tip: 'When you\'re trying to find the answer, look for a word that has a similar meaning to \'approximately\'.',
    officialAnswer: '100 / a hundred / one hundred',
    acceptedAnswers: ['100', 'a hundred', 'one hundred', 'about a hundred', '100 residents'],
    paragraphRef: 1,
    paragraphQuote: 'For the island community of about a hundred residents...',
    explanation: 'Paragraph 1 mentions "about a hundred residents". The word "about" means "approximately". The accepted answers are 100, a hundred, or one hundred.',
  },
  {
    id: 2,
    questionNumber: 2,
    type: 'short_answer',
    prompt: 'What proportion of a UK household\'s electricity consumption does an Eigg household consume?',
    instruction: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 2,
    tip: 'Look for percentages or fractions comparing Eigg electricity use with the UK average.',
    officialAnswer: '50 percent / fifty percent',
    acceptedAnswers: ['50 percent', 'fifty percent', '50%', '50 per cent', 'half'],
    paragraphRef: 1,
    paragraphQuote: '... electricity use is 50 percent lower.',
    explanation: 'Paragraph 1 states that "electricity use is 50 percent lower", meaning an Eigg household consumes 50 percent (or fifty percent) compared to standard baseline.',
  },
  {
    id: 3,
    questionNumber: 3,
    type: 'short_answer',
    prompt: 'Apart from wind and sun, where does most of Eigg\'s electricity come from?',
    instruction: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 2,
    tip: 'When you\'re trying to find the answer, look for a word that has a similar meaning to \'most of\'.',
    officialAnswer: 'water',
    acceptedAnswers: ['water'],
    paragraphRef: 2,
    paragraphQuote: '...generate most of its electricity from renewable sources, mainly water, wind and solar power.',
    explanation: 'Paragraph 2 states that renewable electricity is generated "mainly water, wind and solar power." "Mainly" corresponds to "most of", wind is wind, solar power is sun, which leaves "water" as the third source.',
  },
  {
    id: 4,
    questionNumber: 4,
    type: 'short_answer',
    prompt: 'What device measures the amount of electricity Eigg\'s households are using?',
    instruction: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 2,
    tip: 'Scan Paragraph 3 for an instrument or hardware device installed in every home and business.',
    officialAnswer: 'energy monitors',
    acceptedAnswers: ['energy monitors', 'energy monitor'],
    paragraphRef: 3,
    paragraphQuote: 'All households and businesses have energy monitors, which display current and cumulative electricity usage...',
    explanation: 'Paragraph 3 explicitly identifies "energy monitors" as the devices that measure and display electricity usage and sound alarms when approaching limits.',
  },
  {
    id: 5,
    questionNumber: 5,
    type: 'short_answer',
    prompt: 'When renewable energy supplies are insufficient, what backs them up?',
    instruction: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 2,
    tip: 'Look in Paragraph 4 for what operates on \'red light days\' when renewable generation is lower than demand.',
    officialAnswer: 'diesel generators',
    acceptedAnswers: ['diesel generators', 'diesel generator'],
    paragraphRef: 4,
    paragraphQuote: '...when renewable energy generation is lower than demand, and diesel generators are operating to back it up...',
    explanation: 'Paragraph 4 states that when renewable energy is lower than demand, "diesel generators" operate to back it up (red light days).',
  },
  {
    id: 6,
    questionNumber: 6,
    type: 'short_answer',
    prompt: 'What has EHT provided free of charge in all the houses it owns?',
    instruction: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 2,
    tip: 'Look for phrases in Paragraph 6 meaning \'free of charge\' (e.g., \'at no cost\') and \'houses it owns\' (\'its own properties\').',
    officialAnswer: 'insulation',
    acceptedAnswers: ['insulation'],
    paragraphRef: 6,
    paragraphQuote: 'Eigg Heritage Trust has installed insulation in all of its own properties at no cost to the tenants...',
    explanation: 'Paragraph 6 states that EHT has installed "insulation" in all of its own properties "at no cost to the tenants" (= free of charge).',
  },
  {
    id: 7,
    questionNumber: 7,
    type: 'short_answer',
    prompt: 'Which gardening aid did some Eigg inhabitants claim grants for?',
    instruction: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 2,
    tip: 'The answer is a plural noun. Don\'t leave the plural \'s\' off the end of the word.',
    officialAnswer: 'greenhouses',
    acceptedAnswers: ['greenhouses', 'greenhouse'],
    paragraphRef: 6,
    paragraphQuote: 'Purchases included bikes, solar water heating, secondary glazing, thicker curtains, and greenhouses to grow food locally...',
    explanation: 'Paragraph 6 lists items purchased under the Green Grants scheme, including "greenhouses" to grow food locally, which is a gardening aid.',
  },
  {
    id: 8,
    questionNumber: 8,
    type: 'true_false_not_given',
    prompt: 'Electricity was available for the first time on Eigg when a new grid was switched on.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'There are several references to \'electricity grid\' in the reading passage. Look at each one in turn to find where the historical supply is mentioned.',
    officialAnswer: 'FALSE',
    acceptedAnswers: ['FALSE', 'F'],
    paragraphRef: 7,
    paragraphQuote: 'Prior to the installation of the new electricity grid and renewable energy generation, most households on Eigg used diesel generators to supply electricity...',
    explanation: 'Paragraph 7 tells us that electricity was already available prior to the installation of the grid, mostly via diesel generators. Thus, electricity was NOT available for the first time only when the new grid was switched on.',
  },
  {
    id: 9,
    questionNumber: 9,
    type: 'true_false_not_given',
    prompt: 'Eigg\'s carbon emissions are now much lower than before.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Check Paragraph 8 for statistics on reductions in domestic carbon emissions.',
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 8,
    paragraphQuote: 'The work by the Eigg Heritage Trust to reduce energy use has resulted in significant reductions in carbon emissions... Domestic carbon emissions have fallen by 47 percent...',
    explanation: 'Paragraph 8 confirms that domestic emissions have fallen by 47 percent (from 8.4 to 4.45 tonnes per year), which agrees with the statement that emissions are now much lower.',
  },
  {
    id: 10,
    questionNumber: 10,
    type: 'true_false_not_given',
    prompt: 'Wood will soon be the main source of heating on Eigg.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Look carefully at the words in the reading passage to see whether there is a word or phrase with a similar meaning to \'main\'.',
    officialAnswer: 'NOT GIVEN',
    acceptedAnswers: ['NOT GIVEN', 'NG'],
    paragraphRef: 5,
    paragraphQuote: 'New energy supplies are being developed, including sustainably harvested forests to supply wood for heating... The emissions should fall even further over the next few years as the supply of wood for heating increases.',
    explanation: 'The passage does say in Paragraph 5 and Paragraph 8 that wood supply for heating will increase, but this does not go as far as saying that wood will be the MAIN source of heating.',
  },
  {
    id: 11,
    questionNumber: 11,
    type: 'true_false_not_given',
    prompt: 'Eigg is quieter as a result of having a new electricity supply.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Scan Paragraph 9 for social benefits related to sound or noise levels.',
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 9,
    paragraphQuote: 'A reliable electricity supply has brought improvements in other areas, for example... and the elimination of the constant noise of diesel generators.',
    explanation: 'Paragraph 9 tells us that the new electricity grid eliminated the constant noise of diesel generators, making the island quieter.',
  },
  {
    id: 12,
    questionNumber: 12,
    type: 'true_false_not_given',
    prompt: 'Well-off households pay higher prices for the use of extra electricity.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'When the reading passage mentions electricity prices, it uses the word \'equitable\'. Even if you don\'t know this word, you can probably guess its meaning.',
    officialAnswer: 'FALSE',
    acceptedAnswers: ['FALSE', 'F'],
    paragraphRef: 9,
    paragraphQuote: 'One of the incentives for capping electricity use, rather than charging different amounts according to usage, was to make access to energy equitable. Every household has the same five kW cap, irrespective of income...',
    explanation: 'Paragraph 9 states that instead of charging different amounts according to usage or income, every household has the exact same 5 kW cap irrespective of income. If they exceed it, power is cut off. They do NOT charge higher prices for extra electricity.',
  },
  {
    id: 13,
    questionNumber: 13,
    type: 'true_false_not_given',
    prompt: 'The new electricity grid has created additional employment opportunities on Eigg.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Look under the heading \'Economic and employment benefits\' in Paragraph 10.',
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 10,
    paragraphQuote: 'Eigg\'s electricity grid supports four part-time maintenance jobs on the island, and residents have also been employed for building work... several forestry jobs... part-time \'green project manager\' post has also been created.',
    explanation: 'Paragraph 10 details the variety of jobs created by the new electricity grid (maintenance, building, forestry, green project manager, and support for new local businesses).',
  },
];

export function checkAnswerCorrectness(question: QuestionItem, rawInput: string): boolean {
  if (!rawInput) return false;
  const cleaned = rawInput.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
  
  if (question.type === 'true_false_not_given') {
    const norm = cleaned.toUpperCase();
    if (question.officialAnswer === 'TRUE') {
      return norm === 'TRUE' || norm === 'T';
    } else if (question.officialAnswer === 'FALSE') {
      return norm === 'FALSE' || norm === 'F';
    } else if (question.officialAnswer === 'NOT GIVEN') {
      return norm === 'NOT GIVEN' || norm === 'NOTGIVEN' || norm === 'NG';
    }
  }

  // Short answer
  const userTokens = cleaned.split(/\s+/).filter(Boolean).join(' ');
  for (const accepted of question.acceptedAnswers) {
    const accTokens = accepted.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').split(/\s+/).filter(Boolean).join(' ');
    if (userTokens === accTokens) return true;
  }

  // Special checks for question 1 (100, hundred)
  if (question.id === 1) {
    if (['100', 'a hundred', 'one hundred', 'about 100', 'about a hundred', '100 people', 'hundred'].includes(userTokens)) {
      return true;
    }
  }

  // Special checks for question 2 (50%, 50 percent, 50 per cent, fifty percent)
  if (question.id === 2) {
    if (['50', '50%', '50 percent', 'fifty percent', '50 per cent', 'half', '50 percent lower'].includes(userTokens)) {
      return true;
    }
  }

  // Special checks for question 4 (energy monitors / energy monitor)
  if (question.id === 4) {
    if (['energy monitor', 'energy monitors', 'an energy monitor'].includes(userTokens)) {
      return true;
    }
  }

  // Special checks for question 5 (diesel generators / diesel generator)
  if (question.id === 5) {
    if (['diesel generator', 'diesel generators'].includes(userTokens)) {
      return true;
    }
  }

  // Special checks for question 7 (greenhouses / greenhouse)
  if (question.id === 7) {
    if (['greenhouses', 'green house', 'green houses', 'greenhouse'].includes(userTokens)) {
      return true;
    }
  }

  return false;
}

export function calculateEstimatedBandScore(score: number): { band: string; description: string } {
  // Cambridge IELTS Academic / General Reading Section 1 (out of 13)
  // Scale estimation:
  // 12-13: 8.0 - 9.0 (Expert / Very Good)
  // 10-11: 7.0 - 7.5 (Good user)
  // 8-9: 6.0 - 6.5 (Competent)
  // 6-7: 5.0 - 5.5 (Modest)
  // 4-5: 4.0 - 4.5 (Limited)
  // 0-3: < 4.0 (Extremely limited)
  if (score >= 12) return { band: '8.5 - 9.0', description: 'Expert User — Excellent reading comprehension & accuracy' };
  if (score >= 10) return { band: '7.5 - 8.0', description: 'Very Good User — High accuracy with strong scanning skills' };
  if (score >= 8) return { band: '6.5 - 7.0', description: 'Competent / Good User — Solid understanding of details' };
  if (score >= 6) return { band: '5.5 - 6.0', description: 'Modest User — Good grasp, review FALSE vs NOT GIVEN strategies' };
  if (score >= 4) return { band: '4.5 - 5.0', description: 'Developing User — Focus on locating keywords & paraphrasing' };
  return { band: '< 4.5', description: 'Beginner — Practice scanning for specific synonyms and keywords' };
}
