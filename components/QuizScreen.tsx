
import React, { useState } from 'react';
import { QUIZ_DATA, QUESTIONS_PER_BATCH } from '../constants';
import type { UserAnswer } from '../types';
import QuestionItem from './QuestionItem';

interface QuizScreenProps {
  onFinish: (finalAnswers: UserAnswer[]) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ onFinish }) => {
  const [currentBatchIndex, setCurrentBatchIndex] = useState(0);
  const [allUserAnswers, setAllUserAnswers] = useState<UserAnswer[]>([]);
  const [currentBatchAnswers, setCurrentBatchAnswers] = useState<Map<number, string>>(new Map());

  const startIndex = currentBatchIndex * QUESTIONS_PER_BATCH;
  const questionsForBatch = QUIZ_DATA.slice(startIndex, startIndex + QUESTIONS_PER_BATCH);

  const handleAnswerSelect = (questionId: number, selectedOption: string) => {
    if (currentBatchAnswers.has(questionId)) return;
    setCurrentBatchAnswers(prev => new Map(prev).set(questionId, selectedOption));
  };

  const isBatchComplete = currentBatchAnswers.size > 0 && currentBatchAnswers.size === questionsForBatch.length;
  const isQuizComplete = startIndex + QUESTIONS_PER_BATCH >= QUIZ_DATA.length;

  const processBatchAnswers = (): UserAnswer[] => {
    return questionsForBatch.map(q => {
      const selected = currentBatchAnswers.get(q.id)!;
      return {
        questionId: q.id,
        selectedOption: selected,
        isCorrect: selected === q.correctAnswer,
      };
    });
  };

  const handleContinue = () => {
    const processedAnswers = processBatchAnswers();
    setAllUserAnswers(prev => [...prev, ...processedAnswers]);
    setCurrentBatchIndex(prev => prev + 1);
    setCurrentBatchAnswers(new Map());
  };

  const handleShowResults = () => {
    const processedAnswers = processBatchAnswers();
    onFinish([...allUserAnswers, ...processedAnswers]);
  };

  if (questionsForBatch.length === 0 && allUserAnswers.length > 0) {
      onFinish(allUserAnswers);
      return null;
  }

  return (
    <div>
      {questionsForBatch.map((question, index) => (
        <QuestionItem
          key={question.id}
          question={question}
          questionNumber={startIndex + index + 1}
          selectedOption={currentBatchAnswers.get(question.id)}
          onAnswer={handleAnswerSelect}
        />
      ))}

      {isBatchComplete && (
        <div className="mt-6 flex flex-col md:flex-row justify-end items-center gap-4">
            <button
                onClick={handleShowResults}
                className="w-full md:w-auto bg-yellow-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
                🧮 Xem kết quả
            </button>
            {!isQuizComplete && (
                 <button
                    onClick={handleContinue}
                    className="w-full md:w-auto bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                    ▶️ Tiếp tục
                </button>
            )}
        </div>
      )}
    </div>
  );
};

export default QuizScreen;
