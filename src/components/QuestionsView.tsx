import React, { useState, useEffect } from 'react';
import { 
  QuestionItem, 
  Mode, 
  UserAnswerState 
} from '../types';
import { 
  QUESTIONS, 
  TIP_STRIP_PART1, 
  TIP_STRIP_PART2, 
  checkAnswerCorrectness 
} from '../data/ieltsData';
import { 
  Lightbulb, 
  CheckCircle, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  ExternalLink, 
  Flag,
  Info,
  BookOpen,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface QuestionsViewProps {
  mode: Mode;
  userAnswers: UserAnswerState;
  onAnswerChange: (questionId: number, answer: string) => void;
  onJumpToParagraph: (paragraphId: number) => void;
  flaggedQuestions: Set<number>;
  onToggleFlag: (questionId: number) => void;
  isSubmitted: boolean;
  onGoToConsolidation?: () => void;
}

export const QuestionsView: React.FC<QuestionsViewProps> = ({
  mode,
  userAnswers,
  onAnswerChange,
  onJumpToParagraph,
  flaggedQuestions,
  onToggleFlag,
  isSubmitted,
  onGoToConsolidation,
}) => {
  // Practice mode state: which questions have their explanation open or checked
  const [checkedQuestions, setCheckedQuestions] = useState<{ [key: number]: boolean }>({});
  const [openExplanations, setOpenExplanations] = useState<{ [key: number]: boolean }>({});
  const [openTips, setOpenTips] = useState<{ [key: number]: boolean }>({});
  
  // When test is not submitted and answers are empty (retake / reset), clear checked states
  useEffect(() => {
    if (!isSubmitted && Object.keys(userAnswers).length === 0) {
      setCheckedQuestions({});
      setOpenExplanations({});
    }
  }, [isSubmitted, userAnswers]);

  // Tip strip collapse state
  const [isTipStrip1Open, setIsTipStrip1Open] = useState(true);
  const [isTipStrip2Open, setIsTipStrip2Open] = useState(true);

  // Active question filter tab (All, 1-7 Short Answer, 8-13 T/F/NG)
  const [activeFilter, setActiveFilter] = useState<'all' | 'part1' | 'part2'>('all');

  const handleCheckQuestion = (qId: number) => {
    setCheckedQuestions((prev) => ({ ...prev, [qId]: true }));
    setOpenExplanations((prev) => ({ ...prev, [qId]: true }));
  };

  const toggleExplanation = (qId: number) => {
    setOpenExplanations((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const toggleTip = (qId: number) => {
    setOpenTips((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const getWordCount = (str: string) => {
    return str.trim().split(/\s+/).filter(Boolean).length;
  };

  const part1Questions = QUESTIONS.filter((q) => q.questionNumber <= 7);
  const part2Questions = QUESTIONS.filter((q) => q.questionNumber >= 8);

  const displayedQuestions =
    activeFilter === 'part1'
      ? part1Questions
      : activeFilter === 'part2'
      ? part2Questions
      : QUESTIONS;

  return (
    <div
      className="flex-1 bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden select-text flex flex-col"
      style={{ minHeight: '580px', maxHeight: 'calc(100vh - 170px)' }}
    >
      {/* Sleek Top Header */}
      <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center shrink-0">
        <h2 className="font-bold text-slate-600 uppercase text-xs tracking-wider">
          Questions 1–13
        </h2>
        <div className="text-xs font-medium text-slate-500">
          Answered:{' '}
          <span className="font-bold text-slate-900">
            {Object.values(userAnswers).filter((ans): ans is string => typeof ans === 'string' && ans.trim().length > 0).length}
          </span>
          {' '}/ 13
        </div>
      </div>

      {/* Navigator, Filters and Quick Jump */}
      <div className="px-4 sm:px-6 pt-3 pb-2 border-b border-slate-200 bg-white shrink-0">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-1.5">
            <button
              id="filter-all-btn"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All (1–13)
            </button>
            <button
              id="filter-part1-btn"
              onClick={() => setActiveFilter('part1')}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                activeFilter === 'part1'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              Q 1–7 (Short Answer)
            </button>
            <button
              id="filter-part2-btn"
              onClick={() => setActiveFilter('part2')}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                activeFilter === 'part2'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              Q 8–13 (T/F/NG)
            </button>
          </div>
        </div>

        {/* Quick Jump Bar */}
        <div className="flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          {QUESTIONS.map((q) => {
            const hasAnswer = Boolean(userAnswers[q.id]?.trim());
            const isFlagged = flaggedQuestions.has(q.id);
            const isChecked = checkedQuestions[q.id] || (isSubmitted && mode === 'test');
            const isCorrect = isChecked ? checkAnswerCorrectness(q, userAnswers[q.id] || '') : false;

            let badgeColor = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';
            if (isChecked) {
              badgeColor = isCorrect
                ? 'bg-emerald-600 text-white border-emerald-700'
                : 'bg-rose-600 text-white border-rose-700';
            } else if (hasAnswer) {
              badgeColor = 'bg-blue-600 text-white border-blue-700 shadow-xs';
            }

            return (
              <a
                key={q.id}
                href={`#question-card-${q.id}`}
                id={`quick-jump-q-${q.id}`}
                className={`relative shrink-0 w-7 h-7 sm:w-7.5 sm:h-7.5 rounded text-xs font-bold flex items-center justify-center border transition-all ${badgeColor}`}
                title={`Jump to Question ${q.questionNumber}`}
              >
                {q.questionNumber}
                {isFlagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full ring-2 ring-white" />
                )}
              </a>
            );
          })}
        </div>
      </div>

      {/* Scrollable Questions Content */}
      <div className="p-4 sm:p-6 overflow-y-auto space-y-8 flex-1">
        {/* SECTION 1: Questions 1-7 */}
        {(activeFilter === 'all' || activeFilter === 'part1') && (
          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-slate-800 text-blue-400 border border-slate-700">
                  Part 1: Questions 1–7
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  Short-answer Questions
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mt-2">Answer the questions below.</h3>
              <p className="text-xs text-slate-300 mt-1 font-medium">
                Choose <span className="underline font-bold text-amber-300">NO MORE THAN TWO WORDS AND/OR A NUMBER</span> from the passage for each answer.
              </p>
            </div>

            {/* TIP STRIP: Questions 1-7 (IELTS Tip: Scanning callout box) */}
            {mode === 'practice' && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                    <Lightbulb className="w-4 h-4 text-blue-600" />
                    <span>IELTS Tip: Scanning & Guidance</span>
                  </div>
                  <button
                    id="toggle-tipstrip-1"
                    onClick={() => setIsTipStrip1Open(!isTipStrip1Open)}
                    className="text-blue-700 hover:text-blue-900 text-xs font-semibold"
                  >
                    {isTipStrip1Open ? 'Hide' : 'Show'}
                  </button>
                </div>

                {isTipStrip1Open && (
                  <div className="text-xs text-blue-800 leading-relaxed space-y-1.5">
                    <ul className="space-y-1 list-disc list-inside">
                      {TIP_STRIP_PART1.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-snug">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Questions 1-7 Items */}
            <div className="space-y-4">
              {part1Questions.map((q) => {
                const answer = userAnswers[q.id] || '';
                const wordCount = getWordCount(answer);
                const isOverLimit = wordCount > 2;
                const isChecked = checkedQuestions[q.id] || (isSubmitted && mode === 'test');
                const isCorrect = isChecked ? checkAnswerCorrectness(q, answer) : false;
                const isFlagged = flaggedQuestions.has(q.id);
                const showExplanation = openExplanations[q.id] || (isSubmitted && mode === 'test');
                const showTip = openTips[q.id];

                return (
                  <div
                    key={q.id}
                    id={`question-card-${q.id}`}
                    className={`p-4 sm:p-5 rounded-xl border transition-all ${
                      isChecked
                        ? isCorrect
                          ? 'bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-200'
                          : 'bg-rose-50/50 border-rose-300 ring-1 ring-rose-200'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    {/* Card Header: Number, Prompt, and Flag */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start space-x-3 flex-1">
                        <span className="shrink-0 w-6 h-6 rounded bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                          {q.questionNumber}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-900 leading-snug">
                            {q.prompt}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1.5">
                        <button
                          id={`flag-q-${q.id}`}
                          onClick={() => onToggleFlag(q.id)}
                          title={isFlagged ? 'Remove flag' : 'Flag question for review'}
                          className={`p-1.5 rounded transition-colors ${
                            isFlagged
                              ? 'text-amber-600 bg-amber-100 hover:bg-amber-200'
                              : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Flag className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>
                    </div>

                    {/* Question Specific Tip (Practice Mode) */}
                    {mode === 'practice' && q.tip && (
                      <div className="mt-2.5">
                        <button
                          id={`tip-btn-q-${q.id}`}
                          onClick={() => toggleTip(q.id)}
                          className="flex items-center space-x-1.5 text-xs text-blue-700 hover:text-blue-900 font-medium py-0.5 px-2 rounded-md hover:bg-blue-50 transition-colors"
                        >
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                          <span>{showTip ? 'Hide Question Tip' : 'Show Question Tip'}</span>
                        </button>
                        {showTip && (
                          <div className="mt-1.5 p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-xs text-blue-900 leading-relaxed animate-in fade-in">
                            <span className="font-bold">Tip: </span>
                            {q.tip}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Input Field */}
                    <div className="mt-3">
                      <div className="relative">
                        <input
                          id={`input-q-${q.id}`}
                          type="text"
                          disabled={isSubmitted && mode === 'test'}
                          value={answer}
                          onChange={(e) => onAnswerChange(q.id, e.target.value)}
                          placeholder="Type your answer here..."
                          className={`w-full px-3.5 py-2 text-sm rounded-lg border outline-none transition-all ${
                            isChecked
                              ? isCorrect
                                ? 'border-emerald-500 bg-emerald-50/30 text-emerald-950 font-medium'
                                : 'border-rose-500 bg-rose-50/30 text-rose-950 font-medium'
                              : 'border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-slate-50/50 hover:bg-white text-slate-900'
                          }`}
                        />
                      </div>

                      {/* Word count feedback */}
                      <div className="flex items-center justify-between text-[11px] mt-1.5 text-slate-500">
                        <span>
                          Word count: <strong className={isOverLimit ? 'text-rose-600 font-bold' : 'text-slate-800'}>{wordCount}</strong> / 2 max
                        </span>
                        {isOverLimit && (
                          <span className="text-rose-600 font-semibold flex items-center space-x-1">
                            <Info className="w-3 h-3" />
                            <span>Warning: Exceeds 2-word limit!</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Practice Mode Controls & Feedback */}
                    {mode === 'practice' && (
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
                        <button
                          id={`check-btn-q-${q.id}`}
                          onClick={() => handleCheckQuestion(q.id)}
                          className="flex items-center space-x-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs font-semibold shadow-xs transition-colors"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Check Answer</span>
                        </button>

                        <button
                          id={`explain-btn-q-${q.id}`}
                          onClick={() => toggleExplanation(q.id)}
                          className="flex items-center space-x-1 text-xs text-blue-700 hover:text-blue-900 font-semibold py-1 px-2 rounded hover:bg-blue-50 transition-colors"
                        >
                          <span>{showExplanation ? 'Hide Explanation' : 'Show Explanation'}</span>
                          {showExplanation ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    )}

                    {/* Detailed Explanation & Paragraph Evidence Box */}
                    {showExplanation && (
                      <div className="mt-3 p-3.5 rounded-lg bg-blue-50/60 border border-blue-200 text-xs text-slate-800 space-y-2 animate-in fade-in">
                        <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/70">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-slate-900">Official Answer:</span>
                            <span className="px-2 py-0.5 rounded font-mono font-bold bg-blue-100 text-blue-900 border border-blue-300">
                              {q.officialAnswer}
                            </span>
                          </div>

                          <button
                            id={`locate-passage-q-${q.id}`}
                            onClick={() => onJumpToParagraph(q.paragraphRef)}
                            className="flex items-center space-x-1 text-blue-700 hover:text-blue-900 font-semibold px-2 py-0.5 rounded bg-white hover:bg-blue-100/50 border border-blue-200 transition-colors"
                          >
                            <BookOpen className="w-3 h-3 text-blue-600" />
                            <span>Paragraph {q.paragraphRef}</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>

                        <div>
                          <span className="font-semibold text-slate-700">Passage Evidence: </span>
                          <span className="italic bg-yellow-100 px-1 py-0.5 rounded text-slate-900 font-serif">
                            "{q.paragraphQuote}"
                          </span>
                        </div>

                        <p className="text-slate-700 leading-relaxed font-sans pt-1">
                          <strong className="text-slate-900">Explanation: </strong>
                          {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 2: Questions 8-13 */}
        {(activeFilter === 'all' || activeFilter === 'part2') && (
          <div className="space-y-6 pt-2">
            <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-slate-800 text-blue-400 border border-slate-700">
                  Part 2: Questions 8–13
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  TRUE / FALSE / NOT GIVEN
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mt-2">
                Do the following statements agree with the information given in Reading Passage 1?
              </h3>
              <div className="text-xs text-slate-300 mt-2.5 space-y-1 font-medium bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <p><strong className="text-emerald-400 font-bold">TRUE</strong> — if the statement agrees with the information</p>
                <p><strong className="text-rose-400 font-bold">FALSE</strong> — if the statement contradicts the information</p>
                <p><strong className="text-amber-400 font-bold">NOT GIVEN</strong> — if there is no information on this</p>
              </div>
            </div>

            {/* TIP STRIP: Questions 8-13 */}
            {mode === 'practice' && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                    <Lightbulb className="w-4 h-4 text-blue-600" />
                    <span>IELTS Tip: TRUE / FALSE / NOT GIVEN Strategy</span>
                  </div>
                  <button
                    id="toggle-tipstrip-2"
                    onClick={() => setIsTipStrip2Open(!isTipStrip2Open)}
                    className="text-blue-700 hover:text-blue-900 text-xs font-semibold"
                  >
                    {isTipStrip2Open ? 'Hide' : 'Show'}
                  </button>
                </div>

                {isTipStrip2Open && (
                  <div className="text-xs text-blue-800 leading-relaxed space-y-1.5">
                    <ul className="space-y-1 list-disc list-inside">
                      {TIP_STRIP_PART2.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-snug">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Questions 8-13 Items */}
            <div className="space-y-4">
              {part2Questions.map((q) => {
                const answer = userAnswers[q.id] || '';
                const isChecked = checkedQuestions[q.id] || (isSubmitted && mode === 'test');
                const isCorrect = isChecked ? checkAnswerCorrectness(q, answer) : false;
                const isFlagged = flaggedQuestions.has(q.id);
                const showExplanation = openExplanations[q.id] || (isSubmitted && mode === 'test');
                const showTip = openTips[q.id];

                return (
                  <div
                    key={q.id}
                    id={`question-card-${q.id}`}
                    className={`p-4 sm:p-5 rounded-xl border transition-all ${
                      isChecked
                        ? isCorrect
                          ? 'bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-200'
                          : 'bg-rose-50/50 border-rose-300 ring-1 ring-rose-200'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    {/* Card Header: Number, Prompt, and Flag */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start space-x-3 flex-1">
                        <span className="shrink-0 w-6 h-6 rounded bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                          {q.questionNumber}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-900 leading-snug">
                            {q.prompt}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1.5">
                        <button
                          id={`flag-q-${q.id}`}
                          onClick={() => onToggleFlag(q.id)}
                          title={isFlagged ? 'Remove flag' : 'Flag question for review'}
                          className={`p-1.5 rounded transition-colors ${
                            isFlagged
                              ? 'text-amber-600 bg-amber-100 hover:bg-amber-200'
                              : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Flag className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>
                    </div>

                    {/* Question Specific Tip (Practice Mode) */}
                    {mode === 'practice' && q.tip && (
                      <div className="mt-2.5">
                        <button
                          id={`tip-btn-q-${q.id}`}
                          onClick={() => toggleTip(q.id)}
                          className="flex items-center space-x-1.5 text-xs text-blue-700 hover:text-blue-900 font-medium py-0.5 px-2 rounded-md hover:bg-blue-50 transition-colors"
                        >
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                          <span>{showTip ? 'Hide Question Tip' : 'Show Question Tip'}</span>
                        </button>
                        {showTip && (
                          <div className="mt-1.5 p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-xs text-blue-900 leading-relaxed animate-in fade-in">
                            <span className="font-bold">Tip: </span>
                            {q.tip}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Segmented Radio Options */}
                    <div className="mt-3.5 flex gap-2">
                      {(['TRUE', 'FALSE', 'NOT GIVEN'] as const).map((option) => {
                        const isSelected = answer.toUpperCase() === option;
                        return (
                          <button
                            key={option}
                            id={`option-q-${q.id}-${option.replace(/\s+/g, '')}`}
                            disabled={isSubmitted && mode === 'test'}
                            onClick={() => onAnswerChange(q.id, option)}
                            className={`flex-1 py-2 px-3 rounded border text-xs font-bold transition-all ${
                              isSelected
                                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <span>{option}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Practice Mode Controls & Feedback */}
                    {mode === 'practice' && (
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
                        <button
                          id={`check-btn-q-${q.id}`}
                          onClick={() => handleCheckQuestion(q.id)}
                          className="flex items-center space-x-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs font-semibold shadow-xs transition-colors"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Check Answer</span>
                        </button>

                        <button
                          id={`explain-btn-q-${q.id}`}
                          onClick={() => toggleExplanation(q.id)}
                          className="flex items-center space-x-1 text-xs text-blue-700 hover:text-blue-900 font-semibold py-1 px-2 rounded hover:bg-blue-50 transition-colors"
                        >
                          <span>{showExplanation ? 'Hide Explanation' : 'Show Explanation'}</span>
                          {showExplanation ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    )}

                    {/* Detailed Explanation & Paragraph Evidence Box */}
                    {showExplanation && (
                      <div className="mt-3 p-3.5 rounded-lg bg-blue-50/60 border border-blue-200 text-xs text-slate-800 space-y-2 animate-in fade-in">
                        <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/70">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-slate-900">Official Answer:</span>
                            <span
                              className={`px-2 py-0.5 rounded font-bold ${
                                q.officialAnswer === 'TRUE'
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                  : q.officialAnswer === 'FALSE'
                                  ? 'bg-rose-100 text-rose-800 border border-rose-300'
                                  : 'bg-amber-100 text-amber-800 border border-amber-300'
                              }`}
                            >
                              {q.officialAnswer}
                            </span>
                          </div>

                          <button
                            id={`locate-passage-q-${q.id}`}
                            onClick={() => onJumpToParagraph(q.paragraphRef)}
                            className="flex items-center space-x-1 text-blue-700 hover:text-blue-900 font-semibold px-2 py-0.5 rounded bg-white hover:bg-blue-100/50 border border-blue-200 transition-colors"
                          >
                            <BookOpen className="w-3 h-3 text-blue-600" />
                            <span>Paragraph {q.paragraphRef}</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>

                        <div>
                          <span className="font-semibold text-slate-700">Passage Evidence: </span>
                          <span className="italic bg-yellow-100 px-1 py-0.5 rounded text-slate-900 font-serif">
                            "{q.paragraphQuote}"
                          </span>
                        </div>

                        <p className="text-slate-700 leading-relaxed font-sans pt-1">
                          <strong className="text-slate-900">Explanation: </strong>
                          {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Post-Questions Consolidation Callout */}
        {onGoToConsolidation && (
          <div className="p-5 rounded-2xl bg-linear-to-br from-[#0F172A] to-slate-900 text-white shadow-lg border border-slate-800 space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Language & Reading Consolidation</span>
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">
              Ready to Master Key Vocabulary & Grammar?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Consolidate your learning with academic word lists, IELTS sentence structures, paraphrase analyses, and 4 interactive tasks based on this passage.
            </p>
            <button
              id="questions-go-to-consolidation-btn"
              onClick={onGoToConsolidation}
              className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>Explore Consolidation Tab</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
