import React from 'react';
import type { Question } from '../types';

interface QuestionItemProps {
  question: Question;
  questionNumber: number;
  selectedOption: string | undefined;
  onAnswer: (questionId: number, selectedOption: string) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, questionNumber, selectedOption, onAnswer }) => {
  const isAnswered = selectedOption !== undefined;
  const { id, question: questionText, options, correctAnswer, translation } = question;

  const getButtonClass = (optionKey: string) => {
    if (!isAnswered) {
      return 'border-blue-400 text-blue-600 hover:bg-blue-100';
    }
    if (optionKey === correctAnswer) {
      return 'bg-green-500 border-green-500 text-white scale-105 shadow-md';
    }
    if (optionKey === selectedOption && optionKey !== correctAnswer) {
      return 'bg-red-500 border-red-500 text-white';
    }
    return 'border-gray-300 text-gray-500 cursor-not-allowed opacity-70';
  };

  return (
    <div className="mb-8 p-4 border rounded-lg bg-gray-50/50">
      <p className="text-lg font-semibold mb-4 whitespace-pre-line">
        <span className="font-bold text-blue-600">📘 Câu {questionNumber}:</span> {questionText}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Object.entries(options).map(([key, value]) => (
          <button
            key={key}
            onClick={() => onAnswer(id, key)}
            disabled={isAnswered}
            className={`w-full text-left p-3 rounded-lg border-2 font-medium transition-all duration-300 ${getButtonClass(key)}`}
          >
            <span className="font-bold mr-2">{key}.</span>{value}
          </button>
        ))}
      </div>
      {isAnswered && (
        <div className="mt-4 text-lg font-semibold p-3 bg-gray-100 rounded-lg">
          {selectedOption === correctAnswer ? (
            <div>
              <p className="text-green-600">✅ Chính xác! Đáp án đúng là {correctAnswer}. {options[correctAnswer]}</p>
              {translation && <p className="text-sm text-gray-600 font-normal mt-1">({translation})</p>}
            </div>
          ) : (
             <div>
                <p className="text-red-600">
                    ❌ Sai rồi. Đáp án đúng là <span className="text-green-600 font-bold">{correctAnswer}. {options[correctAnswer]}</span>
                </p>
                {translation && <p className="text-sm text-gray-600 font-normal mt-1">({translation})</p>}
             </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionItem;
