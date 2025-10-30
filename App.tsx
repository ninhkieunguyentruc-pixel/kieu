
import React, { useState, useCallback } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import type { UserAnswer } from './types';

type GameState = 'welcome' | 'quiz' | 'results';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const handleStart = useCallback(() => {
    setUserAnswers([]);
    setGameState('quiz');
  }, []);

  const handleQuizFinish = useCallback((finalAnswers: UserAnswer[]) => {
    setUserAnswers(finalAnswers);
    setGameState('results');
  }, []);

  const handleRestart = useCallback(() => {
    setUserAnswers([]);
    setGameState('welcome');
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case 'quiz':
        return <QuizScreen onFinish={handleQuizFinish} />;
      case 'results':
        return (
          <ResultScreen
            userAnswers={userAnswers}
            onRestart={handleRestart}
          />
        );
      case 'welcome':
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="bg-[#dff3f7] min-h-screen flex items-center justify-center font-sans p-4">
      <main className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-6 md:p-8 text-gray-800">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
