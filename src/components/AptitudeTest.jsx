import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AptitudeTest.css';

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "2 + 2 * 2 = ?",
    options: ["6", "8", "4", "10"],
    answer: "6",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Which language is primarily used for Android development?",
    options: ["Java", "Python", "C++", "Swift"],
    answer: "Java",
  },
  {
    question: "Water boils at what temperature (°C)?",
    options: ["90", "80", "100", "120"],
    answer: "100",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "8", "7", "9"],
    answer: "8",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Dickens", "Tolstoy", "Hemingway"],
    answer: "Shakespeare",
  },
  {
    question: "Which organ purifies blood in the human body?",
    options: ["Heart", "Liver", "Kidneys", "Lungs"],
    answer: "Kidneys",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Pacific",
  },
  {
    question: "The chemical symbol for gold is?",
    options: ["Au", "Ag", "Pb", "Fe"],
    answer: "Au",
  },
];

function AptitudeTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [secondsLeft, setSecondsLeft] = useState(30);

  useEffect(() => {
    if (secondsLeft === 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const handleOptionChange = (option) => {
    const newSelected = [...selectedOptions];
    newSelected[currentQuestion] = option;
    setSelectedOptions(newSelected);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSecondsLeft(30);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSecondsLeft(30);
    }
  };

  // Calculate score based on selected options
  const score = selectedOptions.reduce((acc, option, index) => {
    if (option === questions[index].answer) {
      return acc + 1;
    }
    return acc;
  }, 0);

  // Check if all questions answered for enabling submit
  const allAnswered = selectedOptions.every(opt => opt !== null);

  return (
    <div className="aptitude-test-container">
      <h2>Aptitude Test</h2>
      <div className="question-section">
        <div className="question-count">
          Question {currentQuestion + 1} / {questions.length}
        </div>
        <div className="question-text">{questions[currentQuestion].question}</div>
      </div>

      <div className="options-section">
        {questions[currentQuestion].options.map((option) => (
          <label key={option} className="option-label">
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              value={option}
              checked={selectedOptions[currentQuestion] === option}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="timer">Time Left: {secondsLeft} seconds</div>

      <div className="navigation-buttons">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="btn-nav"
        >
          Previous
        </button>

        {currentQuestion < questions.length - 1 && (
          <button
            onClick={handleNext}
            className="btn-nav"
          >
            Next
          </button>
        )}

        {currentQuestion === questions.length - 1 && (
          allAnswered ? (
            <Link
              to="/test-completion"
              state={{ score }}
              className="btn-submit"
            >
              Submit
            </Link>
          ) : (
            <Link
  to="/test-completion"
  state={{ score: score }}
  className="btn-submit"
>
  Submit
</Link>
          )
        )}
      </div>
    </div>
  );
}

export default AptitudeTest;
