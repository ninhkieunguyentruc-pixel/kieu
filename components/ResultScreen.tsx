
import React from 'react';
import type { UserAnswer } from '../types';

interface ResultScreenProps {
  userAnswers: UserAnswer[];
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ userAnswers, onRestart }) => {
  const correctAnswersCount = userAnswers.filter(answer => answer.isCorrect).length;
  const totalAnswered = userAnswers.length;
  const scorePercentage = totalAnswered > 0 ? Math.round((correctAnswersCount / totalAnswered) * 100) : 0;

  return (
    <div className="text-center space-y-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-600">Kết quả bài làm</h2>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg text-lg w-full">
        <p>🎯 Bạn đã trả lời đúng <strong>{correctAnswersCount}/{totalAnswered}</strong> câu.</p>
        <p>Điểm số: <strong>{scorePercentage}%</strong>. Tuyệt vời! 👏</p>
      </div>
       {scorePercentage < 70 && <p className="text-gray-600">Không sao đâu, bạn đang tiến bộ rất tốt 💪</p>}
      <button
        onClick={onRestart}
        className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
      >
        🔁 Làm lại
      </button>
    </div>
  );
};

export default ResultScreen;
