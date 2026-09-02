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
  bulletsVi: [
    'Chỉ chọn từ hoặc số xuất hiện trực tiếp trong bài đọc. Tuyệt đối không tự ý dùng từ của mình.',
    'Không thay đổi dạng từ (ví dụ: không đổi danh từ số ít thành số nhiều).',
    'Có thể dùng ít hơn số từ tối đa được yêu cầu trong đề bài.',
    'Không viết quá giới hạn từ cho phép (NO MORE THAN TWO WORDS AND/OR A NUMBER - không quá 2 từ và/hoặc 1 số).',
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
  bulletsVi: [
    'Các nhận định (statements) xuất hiện theo đúng thứ tự thông tin trong bài đọc (chronological order).',
    'Một số từ trong câu nhận định có thể trùng khớp hoặc tương tự bài đọc dù câu đó là TRUE, FALSE hay NOT GIVEN (cần đọc hiểu cả ngữ cảnh).',
    'Đọc kỹ toàn bộ nhận định trước khi so sánh với thông tin trong bài đọc.',
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
    tipVi: 'Khi tìm câu trả lời, hãy tìm từ mang nghĩa tương đương với \'approximately\' (khoảng chừng).',
    officialAnswer: '100 / a hundred / one hundred',
    acceptedAnswers: ['100', 'a hundred', 'one hundred', 'about a hundred', '100 residents'],
    paragraphRef: 1,
    paragraphQuote: 'For the island community of about a hundred residents...',
    explanation: 'Paragraph 1 mentions "about a hundred residents". The word "about" means "approximately". The accepted answers are 100, a hundred, or one hundred.',
    explanationVi: 'Đoạn 1 đề cập "about a hundred residents". Từ "about" đồng nghĩa với "approximately" (khoảng chừng). Đáp án chính xác là 100, a hundred hoặc one hundred.',
  },
  {
    id: 2,
    questionNumber: 2,
    type: 'short_answer',
    prompt: 'What proportion of a UK household\'s electricity consumption does an Eigg household consume?',
    instruction: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 2,
    tip: 'Look for percentages or fractions comparing Eigg electricity use with the UK average.',
    tipVi: 'Tìm tỷ lệ phần trăm (%) so sánh mức tiêu thụ điện của hộ gia đình trên đảo Eigg với mức trung bình của Vương quốc Anh (UK average).',
    officialAnswer: '50 percent / fifty percent',
    acceptedAnswers: ['50 percent', 'fifty percent', '50%', '50 per cent', 'half'],
    paragraphRef: 1,
    paragraphQuote: '... electricity use is 50 percent lower.',
    explanation: 'Paragraph 1 states that "electricity use is 50 percent lower", meaning an Eigg household consumes 50 percent (or fifty percent) compared to standard baseline.',
    explanationVi: 'Đoạn 1 nêu rõ "...electricity use is 50 percent lower", nghĩa là mức tiêu thụ điện trên đảo Eigg thấp hơn 50% so với mức trung bình tại UK. Đáp án là 50 percent (hoặc fifty percent).',
  },
  {
    id: 3,
    questionNumber: 3,
    type: 'short_answer',
    prompt: 'Apart from wind and sun, where does most of Eigg\'s electricity come from?',
    instruction: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 2,
    tip: 'When you\'re trying to find the answer, look for a word that has a similar meaning to \'most of\'.',
    tipVi: 'Tìm từ đồng nghĩa với \'most of\' (chủ yếu / phần lớn) trong câu liệt kê các nguồn năng lượng tái tạo.',
    officialAnswer: 'water',
    acceptedAnswers: ['water'],
    paragraphRef: 2,
    paragraphQuote: '...generate most of its electricity from renewable sources, mainly water, wind and solar power.',
    explanation: 'Paragraph 2 states that renewable electricity is generated "mainly water, wind and solar power." "Mainly" corresponds to "most of", wind is wind, solar power is sun, which leaves "water" as the third source.',
    explanationVi: 'Đoạn 2 nêu rằng điện năng được tạo ra "...mainly water, wind and solar power". Từ "mainly" tương đương với "most of", "wind" là gió, "solar power" là ánh mặt trời (sun), do đó nguồn thứ ba còn lại chính là "water" (nước/thủy điện).',
  },
  {
    id: 4,
    questionNumber: 4,
    type: 'short_answer',
    prompt: 'What device measures the amount of electricity Eigg\'s households are using?',
    instruction: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 2,
    tip: 'Scan Paragraph 3 for an instrument or hardware device installed in every home and business.',
    tipVi: 'Quét Đoạn 3 để tìm tên thiết bị đo lường (device / instrument) được trang bị cho tất cả hộ gia đình và cơ sở kinh doanh.',
    officialAnswer: 'energy monitors',
    acceptedAnswers: ['energy monitors', 'energy monitor'],
    paragraphRef: 3,
    paragraphQuote: 'All households and businesses have energy monitors, which display current and cumulative electricity usage...',
    explanation: 'Paragraph 3 explicitly identifies "energy monitors" as the devices that measure and display electricity usage and sound alarms when approaching limits.',
    explanationVi: 'Đoạn 3 chỉ rõ "energy monitors" là thiết bị hiển thị lượng điện tiêu thụ hiện tại và tích lũy ("current and cumulative electricity usage"). Đáp án là energy monitors.',
  },
  {
    id: 5,
    questionNumber: 5,
    type: 'short_answer',
    prompt: 'When renewable energy supplies are insufficient, what backs them up?',
    instruction: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 2,
    tip: 'Look in Paragraph 4 for what operates on \'red light days\' when renewable generation is lower than demand.',
    tipVi: 'Tìm trong Đoạn 4 phương tiện dự phòng (backup) hoạt động vào \'red light days\' khi năng lượng tái tạo không đủ đáp ứng nhu cầu.',
    officialAnswer: 'diesel generators',
    acceptedAnswers: ['diesel generators', 'diesel generator'],
    paragraphRef: 4,
    paragraphQuote: '...when renewable energy generation is lower than demand, and diesel generators are operating to back it up...',
    explanation: 'Paragraph 4 states that when renewable energy is lower than demand, "diesel generators" operate to back it up (red light days).',
    explanationVi: 'Đoạn 4 nêu rõ khi nguồn năng lượng tái tạo thấp hơn nhu cầu, "...diesel generators are operating to back it up". Vì vậy đáp án chính xác là diesel generators.',
  },
  {
    id: 6,
    questionNumber: 6,
    type: 'short_answer',
    prompt: 'What has EHT provided free of charge in all the houses it owns?',
    instruction: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 2,
    tip: 'Look for phrases in Paragraph 6 meaning \'free of charge\' (e.g., \'at no cost\') and \'houses it owns\' (\'its own properties\').',
    tipVi: 'Tìm các cụm từ ở Đoạn 6 đồng nghĩa với \'free of charge\' (miễn phí, tức \'at no cost\') và \'houses it owns\' (nhà do tổ chức sở hữu, tức \'its own properties\').',
    officialAnswer: 'insulation',
    acceptedAnswers: ['insulation'],
    paragraphRef: 6,
    paragraphQuote: 'Eigg Heritage Trust has installed insulation in all of its own properties at no cost to the tenants...',
    explanation: 'Paragraph 6 states that EHT has installed "insulation" in all of its own properties "at no cost to the tenants" (= free of charge).',
    explanationVi: 'Đoạn 6 khẳng định EHT đã lắp đặt "insulation" (vật liệu cách nhiệt) cho toàn bộ nhà thuộc sở hữu của tổ chức mà "at no cost to the tenants" (người thuê không phải trả phí = free of charge). Đáp án là insulation.',
  },
  {
    id: 7,
    questionNumber: 7,
    type: 'short_answer',
    prompt: 'Which gardening aid did some Eigg inhabitants claim grants for?',
    instruction: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
    maxWords: 2,
    tip: 'The answer is a plural noun. Don\'t leave the plural \'s\' off the end of the word.',
    tipVi: 'Đáp án là một danh từ số nhiều (plural noun). Chú ý giữ nguyên đuôi \'s\' của từ.',
    officialAnswer: 'greenhouses',
    acceptedAnswers: ['greenhouses', 'greenhouse'],
    paragraphRef: 6,
    paragraphQuote: 'Purchases included bikes, solar water heating, secondary glazing, thicker curtains, and greenhouses to grow food locally...',
    explanation: 'Paragraph 6 lists items purchased under the Green Grants scheme, including "greenhouses" to grow food locally, which is a gardening aid.',
    explanationVi: 'Đoạn 6 liệt kê các vật dụng được trợ cấp thuộc chương trình Green Grants, trong đó có "greenhouses" (nhà kính trồng trọt để sản xuất thực phẩm tại chỗ = gardening aid). Đáp án là greenhouses.',
  },
  {
    id: 8,
    questionNumber: 8,
    type: 'true_false_not_given',
    prompt: 'Electricity was available for the first time on Eigg when a new grid was switched on.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'There are several references to \'electricity grid\' in the reading passage. Look at each one in turn to find where the historical supply is mentioned.',
    tipVi: 'Kiểm tra Đoạn 7 để xem trước khi có lưới điện mới (new grid), người dân đảo Eigg đã có điện sử dụng hay chưa.',
    officialAnswer: 'FALSE',
    acceptedAnswers: ['FALSE', 'F'],
    paragraphRef: 7,
    paragraphQuote: 'Prior to the installation of the new electricity grid and renewable energy generation, most households on Eigg used diesel generators to supply electricity...',
    explanation: 'Paragraph 7 tells us that electricity was already available prior to the installation of the grid, mostly via diesel generators. Thus, electricity was NOT available for the first time only when the new grid was switched on.',
    explanationVi: 'Đoạn 7 cho biết trước khi có lưới điện mới ("Prior to the installation of the new electricity grid..."), phần lớn các hộ dân đã sử dụng máy phát điện chạy dầu ("diesel generators to supply electricity"). Do đó, điện không phải lần đầu tiên xuất hiện khi lưới điện mới hòa mạng. Nhận định trái ngược với bài đọc -> FALSE.',
  },
  {
    id: 9,
    questionNumber: 9,
    type: 'true_false_not_given',
    prompt: 'Eigg\'s carbon emissions are now much lower than before.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Check Paragraph 8 for statistics on reductions in domestic carbon emissions.',
    tipVi: 'Kiểm tra Đoạn 8 về số liệu thống kê mức giảm phát thải carbon (carbon emissions) của các hộ gia đình.',
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 8,
    paragraphQuote: 'The work by the Eigg Heritage Trust to reduce energy use has resulted in significant reductions in carbon emissions... Domestic carbon emissions have fallen by 47 percent...',
    explanation: 'Paragraph 8 confirms that domestic emissions have fallen by 47 percent (from 8.4 to 4.45 tonnes per year), which agrees with the statement that emissions are now much lower.',
    explanationVi: 'Đoạn 8 xác nhận lượng khí thải sinh hoạt đã giảm 47% ("fallen by 47 percent, from 8.4 to 4.45 tonnes per year"). Điều này hoàn toàn trùng khớp với nhận định "much lower than before" -> TRUE.',
  },
  {
    id: 10,
    questionNumber: 10,
    type: 'true_false_not_given',
    prompt: 'Wood will soon be the main source of heating on Eigg.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Look carefully at the words in the reading passage to see whether there is a word or phrase with a similar meaning to \'main\'.',
    tipVi: 'Đọc kỹ Đoạn 5 và 8 xem bài đọc có khẳng định gỗ sẽ là nguồn sưởi ấm chính (\'main source\') hay chỉ là nguồn cung cấp đang tăng.',
    officialAnswer: 'NOT GIVEN',
    acceptedAnswers: ['NOT GIVEN', 'NG'],
    paragraphRef: 5,
    paragraphQuote: 'New energy supplies are being developed, including sustainably harvested forests to supply wood for heating... The emissions should fall even further over the next few years as the supply of wood for heating increases.',
    explanation: 'The passage does say in Paragraph 5 and Paragraph 8 that wood supply for heating will increase, but this does not go as far as saying that wood will be the MAIN source of heating.',
    explanationVi: 'Đoạn 5 và Đoạn 8 chỉ nêu rằng nguồn cung cấp gỗ để sưởi ấm đang được phát triển và sẽ tăng lên trong vài năm tới ("supply of wood for heating increases"). Bài đọc hoàn toàn không khẳng định gỗ sẽ trở thành nguồn sưởi ấm CHÍNH (main source) -> NOT GIVEN.',
  },
  {
    id: 11,
    questionNumber: 11,
    type: 'true_false_not_given',
    prompt: 'Eigg is quieter as a result of having a new electricity supply.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Scan Paragraph 9 for social benefits related to sound or noise levels.',
    tipVi: 'Quét Đoạn 9 để tìm các lợi ích xã hội liên quan đến tiếng ồn (noise) sau khi có nguồn điện mới.',
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 9,
    paragraphQuote: 'A reliable electricity supply has brought improvements in other areas, for example... and the elimination of the constant noise of diesel generators.',
    explanation: 'Paragraph 9 tells us that the new electricity grid eliminated the constant noise of diesel generators, making the island quieter.',
    explanationVi: 'Đoạn 9 chỉ ra rằng nguồn điện ổn định mới đã giúp loại bỏ hoàn toàn tiếng ồn liên tục của máy phát điện diesel ("elimination of the constant noise of diesel generators"), giúp hòn đảo trở nên yên tĩnh hơn -> TRUE.',
  },
  {
    id: 12,
    questionNumber: 12,
    type: 'true_false_not_given',
    prompt: 'Well-off households pay higher prices for the use of extra electricity.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'When the reading passage mentions electricity prices, it uses the word \'equitable\'. Even if you don\'t know this word, you can probably guess its meaning.',
    tipVi: 'Đoạn 9 giải thích chính sách áp mức giới hạn 5 kW bất kể thu nhập (irrespective of income). Hãy xem các hộ khá giả (well-off) có phải trả giá cao hơn để dùng thêm điện hay không.',
    officialAnswer: 'FALSE',
    acceptedAnswers: ['FALSE', 'F'],
    paragraphRef: 9,
    paragraphQuote: 'One of the incentives for capping electricity use, rather than charging different amounts according to usage, was to make access to energy equitable. Every household has the same five kW cap, irrespective of income...',
    explanation: 'Paragraph 9 states that instead of charging different amounts according to usage or income, every household has the exact same 5 kW cap irrespective of income. If they exceed it, power is cut off. They do NOT charge higher prices for extra electricity.',
    explanationVi: 'Đoạn 9 nêu rõ thay vì tính phí khác nhau theo mức dùng, mọi hộ gia đình đều có chung mức giới hạn 5 kW bất kể thu nhập ("irrespective of income"). Nếu vượt quá giới hạn, điện sẽ bị cắt. Không có chính sách cho phép hộ giàu trả thêm tiền để dùng thêm điện. Nhận định này mâu thuẫn trực tiếp với bài -> FALSE.',
  },
  {
    id: 13,
    questionNumber: 13,
    type: 'true_false_not_given',
    prompt: 'The new electricity grid has created additional employment opportunities on Eigg.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Look under the heading \'Economic and employment benefits\' in Paragraph 10.',
    tipVi: 'Đọc Đoạn 10 (mục \'Economic and employment benefits\') để kiểm tra các công việc và việc làm mới được tạo ra.',
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 10,
    paragraphQuote: 'Eigg\'s electricity grid supports four part-time maintenance jobs on the island, and residents have also been employed for building work... several forestry jobs... part-time \'green project manager\' post has also been created.',
    explanation: 'Paragraph 10 details the variety of jobs created by the new electricity grid (maintenance, building, forestry, green project manager, and support for new local businesses).',
    explanationVi: 'Đoạn 10 liệt kê chi tiết các cơ hội việc làm mới được tạo ra từ lưới điện (4 việc làm bảo trì, công việc xây dựng, việc làm lâm nghiệp khai thác gỗ, vị trí quản lý dự án xanh). Nhận định hoàn toàn chính xác -> TRUE.',
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
