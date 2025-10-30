import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center space-y-6 animate-fade-in">
      <h1 className="text-4xl font-bold text-blue-600">👋 Xin chào!</h1>
      <div className="text-left bg-blue-50 p-4 rounded-lg space-y-2 text-gray-700">
        <p>Chào mừng bạn đến với <strong>Trắc nghiệm Anh văn 8 – Ôn GK</strong>.</p>
        <p>📖 Mỗi lần bạn sẽ làm 10 câu trắc nghiệm.</p>
        <p>Chọn đáp án bằng cách <strong>bấm nút A, B, C hoặc D</strong>.</p>
        <p>Khi hoàn thành, nhấn <strong>“Xem kết quả”</strong> để xem điểm nhé!</p>
      </div>
      <button
        onClick={onStart}
        className="w-full md:w-auto bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
      >
        👉 Bắt đầu
      </button>
    </div>
  );
};

export default WelcomeScreen;