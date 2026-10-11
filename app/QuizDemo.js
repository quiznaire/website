"use client";

import { useRef, useState } from "react";

const questions = [
  {
    subject: "Physics",
    question: "Which quantity stays constant in uniform circular motion?",
    answers: ["Speed", "Velocity", "Direction"],
    correct: 0,
    explanation:
      "Speed stays constant. Velocity changes because the direction of motion keeps changing.",
  },
  {
    subject: "Biology",
    question: "Which part of a plant cell carries out photosynthesis?",
    answers: ["Nucleus", "Chloroplast", "Cell wall"],
    correct: 1,
    explanation:
      "Chloroplasts contain chlorophyll, which absorbs light energy for photosynthesis.",
  },
  {
    subject: "History",
    question: "In which year did India gain independence?",
    answers: ["1950", "1942", "1947"],
    correct: 2,
    explanation:
      "India gained independence on 15 August 1947. The Constitution came into effect in 1950.",
  },
  {
    subject: "General Knowledge",
    question: "Which is the largest ocean on Earth?",
    answers: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"],
    correct: 1,
    explanation: "The Pacific is the largest ocean on Earth by surface area.",
  },
];

export default function QuizDemo({ initialSubject = "Physics" }) {
  const start = Math.max(
    0,
    questions.findIndex((question) => question.subject === initialSubject),
  );
  const roundQuestions = [
    ...questions.slice(start),
    ...questions.slice(0, start),
  ];
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const heading = useRef(null);
  const question = roundQuestions[index];
  const correct = selected === question.correct;

  function answer(value) {
    if (selected !== null) return;
    setSelected(value);
    if (value === question.correct) setScore((value) => value + 1);
  }

  function next() {
    if (index === questions.length - 1) setFinished(true);
    else {
      setIndex((value) => value + 1);
      setSelected(null);
    }
    requestAnimationFrame(() => heading.current?.focus());
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    requestAnimationFrame(() => heading.current?.focus());
  }

  return (
    <div className="heroVisual" id="try-quiz">
      <div className="quizPreview">
        <div className="quizPreviewTop">
          <span>
            <i className="liveDot" /> Free mini quiz
          </span>
          <b>No sign-up needed</b>
        </div>
        <div className="quizProgress" aria-hidden="true">
          <i style={{ width: `${((finished ? 4 : index + 1) / 4) * 100}%` }} />
        </div>
        {finished ? (
          <div className="demoResult">
            <span className="resultMedal" aria-hidden="true">
              ✦
            </span>
            <h2 ref={heading} tabIndex={-1}>
              Your practice result.
            </h2>
            <p>
              You scored <strong>{score} out of 4</strong>.{" "}
              {score === 4
                ? "A perfect round!"
                : "Review the explanations and try another round."}
            </p>
            <button className="pill" onClick={restart}>
              Play again <span aria-hidden="true">↻</span>
            </button>
            <small>Practice only · No entry fee or prizes</small>
          </div>
        ) : (
          <>
            <span className="quizMeta">
              <span>{question.subject}</span>
              <b>Question {index + 1} / 4</b>
            </span>
            <h3
              className="demoQuestion"
              ref={heading}
              tabIndex={-1}
              key={index}
            >
              {question.question}
            </h3>
            <div
              className="demoAnswers"
              role="group"
              aria-label="Choose your answer"
            >
              {question.answers.map((label, value) => (
                <button
                  key={`${index}-${value}`}
                  className={`quizAnswer ${selected !== null && value === question.correct ? "correct" : ""} ${selected === value && !correct ? "incorrect" : ""}`}
                  disabled={selected !== null}
                  onClick={() => answer(value)}
                >
                  <i aria-hidden="true">{String.fromCharCode(65 + value)}</i>
                  <span>{label}</span>
                  {selected !== null && value === question.correct && (
                    <b aria-label="Correct answer">✓</b>
                  )}
                  {selected === value && !correct && (
                    <b aria-label="Incorrect answer">×</b>
                  )}
                </button>
              ))}
            </div>
            <div
              className={`answerFeedback ${selected !== null ? "shown" : ""}`}
              role="status"
              aria-atomic="true"
            >
              {selected !== null ? (
                <>
                  <strong>{correct ? "Correct." : "Not quite."}</strong>
                  <span>{question.explanation}</span>
                </>
              ) : (
                <span>Choose one answer to continue.</span>
              )}
            </div>
            <footer>
              <span>{score} correct · Just for practice</span>
              <button disabled={selected === null} onClick={next}>
                {index === 3 ? "See my score" : "Next question"} →
              </button>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}
