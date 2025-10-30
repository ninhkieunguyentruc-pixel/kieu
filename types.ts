export interface Question {
  id: number;
  question: string;
  options: { [key: string]: string }; // { A: 'text', B: 'text', ... }
  correctAnswer: string; // 'A', 'B', 'C', or 'D'
  translation?: string;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: string;
  isCorrect: boolean;
}
