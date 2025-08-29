import React, { useEffect, useState, useRef } from 'react'
import './App.css';

const API = 'https://the-trivia-api.com/v2/questions';

function App() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(60);
  const timerRef = useRef();

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(err => alert(err.message));
  }, []);

  useEffect(() => {
    if (questions.length === 0 || showScore) return;
    setTimer(60);
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          handleNext();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line
  }, [current, questions, showScore]);

  function handleOption(option) {
    setSelected(option);
    if (option === questions[current].correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(handleNext, 700);
  }

  function handleNext() {
    clearInterval(timerRef.current);
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  }

  if (questions.length === 0) {
    return (
      <div>
        <h1>Quiz Application using React</h1>
        <div className="card">Loading questions...</div>
      </div>
    );
  }

  if (showScore) {
    return (
      <div>
        <h1>Quiz Application using React</h1>
        <div className="card">
          <h2>Quiz Finished!</h2>
          <p>Your Score: <b>{score}</b> / {questions.length}</p>
          <button onClick={() => {
            setCurrent(0);
            setScore(0);
            setShowScore(false);
            setSelected(null);
          }}>Restart Quiz</button>
        </div>
      </div>
    );
  }

  const q = questions[current];
  const options = [...q.incorrectAnswers, q.correctAnswer].sort();

  return (
    <div>
      <h1>Quiz Application using React</h1>
      <div className="card">
        <div style={{ marginBottom: 10, fontWeight: 500 }}>
          Question {current + 1} of {questions.length}
        </div>
        <div style={{ marginBottom: 20 }}>
          <span style={{ fontWeight: 600 }}>{q.question.text}</span>
        </div>
        <div style={{ marginBottom: 20 }}>
          {options.map(option => (
            <button
              key={option}
              onClick={() => !selected && handleOption(option)}
              style={{
                margin: '8px 0',
                width: '100%',
                background:
                  selected
                    ? option === q.correctAnswer
                      ? '#4caf50'
                      : option === selected
                        ? '#f44336'
                        : ''
                    : '',
                color: selected ? '#fff' : '',
                pointerEvents: selected ? 'none' : 'auto',
                border: selected && option === q.correctAnswer ? '2px solid #388e3c' : '',
                transition: 'background 0.2s'
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <div style={{ marginBottom: 10 }}>
          <span style={{
            fontWeight: 600,
            color: timer <= 10 ? '#f44336' : '#646cff'
          }}>
            Time Left: {timer}s
          </span>
        </div>
        <div>
          <span>Score: {score}</span>
        </div>
      </div>
    </div>
  );
}

export default App