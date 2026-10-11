"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { practiceQuestions } from "./quiz-data";

export default function QuizDemo({
  initialSubject = "Physics",
  focusOnMount = false,
}) {
  const start = Math.max(
    0,
    practiceQuestions.findIndex((item) => item.subject === initialSubject),
  );
  const questions = [
    ...practiceQuestions.slice(start),
    ...practiceQuestions.slice(0, start),
  ];
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const heading = useRef(null);
  const pendingFocus = useRef(false);
  useLayoutEffect(() => {
    if (pendingFocus.current || focusOnMount) {
      heading.current?.focus({ preventScroll: true });
      pendingFocus.current = false;
    }
  }, [index, finished, focusOnMount]);
  const question = questions[index];
  const selected = answers[index] ?? null;
  const answered = selected !== null;
  const correct = selected === question.correct;
  const score = answers.reduce(
    (total, answer, questionIndex) =>
      total + Number(answer === questions[questionIndex].correct),
    0,
  );
  const count = questions.length;

  function answer(value) {
    if (answered) return;
    setAnswers((previous) => [...previous, value]);
  }
  function next() {
    if (!answered) return;
    pendingFocus.current = true;
    if (index === count - 1) setFinished(true);
    else setIndex((value) => value + 1);
  }
  function restart() {
    pendingFocus.current = true;
    setIndex(0);
    setAnswers([]);
    setFinished(false);
  }

  return (
    <section
      className="heroVisual"
      id="try-quiz"
      aria-label="Free practice quiz"
    >
      <div className="quizPreview">
        <div className="quizPreviewTop">
          <span>
            <i className="liveDot" aria-hidden="true" /> Free mini quiz
          </span>
        </div>
        <div
          className="quizProgress"
          role="progressbar"
          aria-label="Questions answered"
          aria-valuemin={0}
          aria-valuemax={count}
          aria-valuenow={answers.length}
        >
          <i style={{ width: `${(answers.length / count) * 100}%` }} />
        </div>
        <div className="quizStages" aria-hidden="true">
          {questions.map((item, stage) => (
            <span
              key={item.subject}
              className={
                stage < answers.length
                  ? "complete"
                  : stage === index && !finished
                    ? "current"
                    : ""
              }
            >
              <i>
                {stage < answers.length
                  ? "✓"
                  : String(stage + 1).padStart(2, "0")}
              </i>
            </span>
          ))}
        </div>
        {finished ? (
          <div className="demoResult">
            <span className="resultEyebrow">ROUND COMPLETE</span>
            <h2 ref={heading} tabIndex={-1}>
              Your practice result.
            </h2>
            <p className="resultScore">
              <strong>{score}</strong>
              <span>out of {count}</span>
            </p>
            <p>
              {score === count
                ? "All four correct. Nicely done."
                : "Here’s what to take into your next round."}
            </p>
            <details className="resultReview">
              <summary>
                Review your answers <span aria-hidden="true">+</span>
              </summary>
              <ol>
                {questions.map((item, i) => (
                  <li key={item.subject}>
                    <div>
                      <strong>{item.subject}</strong>
                      <span>
                        {answers[i] === item.correct ? "Correct" : "Incorrect"}
                      </span>
                    </div>
                    <p>{item.question}</p>
                    <p className="reviewAnswer">
                      Your answer: {item.answers[answers[i]]}
                    </p>
                    <p className="reviewCorrect">
                      Correct answer: {item.answers[item.correct]}
                    </p>
                    <p>{item.explanation}</p>
                  </li>
                ))}
              </ol>
            </details>
            <button className="pill" onClick={restart}>
              Play again <span aria-hidden="true">↻</span>
            </button>
            <small>Practice only · No entry fee or prizes</small>
          </div>
        ) : (
          <>
            <div className="quizMeta">
              <span>{question.subject}</span>
              <span>
                Question {index + 1} / {count}
              </span>
            </div>
            <h2
              className="demoQuestion"
              ref={heading}
              tabIndex={-1}
              key={index}
            >
              {question.question}
            </h2>
            <div
              className="demoAnswers"
              role="group"
              aria-labelledby="answer-instruction"
            >
              <span id="answer-instruction" className="srOnly">
                Choose one answer
              </span>
              {question.answers.map((label, value) => (
                <button
                  key={`${index}-${value}`}
                  className={`quizAnswer ${answered && value === question.correct ? "correct" : ""} ${selected === value && !correct ? "incorrect" : ""}`}
                  aria-pressed={selected === value}
                  disabled={answered}
                  onClick={() => answer(value)}
                >
                  <i aria-hidden="true">{String.fromCharCode(65 + value)}</i>
                  <span>{label}</span>
                  {answered && value === question.correct && (
                    <b aria-label="Correct answer">✓</b>
                  )}
                  {selected === value && !correct && (
                    <b aria-label="Incorrect answer">×</b>
                  )}
                </button>
              ))}
            </div>
            <div
              className={`answerFeedback ${answered ? "shown" : ""}`}
              role="status"
              aria-atomic="true"
            >
              {answered ? (
                <>
                  <strong>{correct ? "Correct." : "Not quite."}</strong>
                  <span>{question.explanation}</span>
                </>
              ) : (
                <span>Choose one answer to continue.</span>
              )}
            </div>
            <footer>
              <span>
                <strong>{score} correct</strong>
                <small>Practice only</small>
              </span>
              <button disabled={!answered} onClick={next}>
                {index === count - 1 ? "See my score" : "Next question"}{" "}
                <span aria-hidden="true">→</span>
              </button>
            </footer>
          </>
        )}
      </div>
    </section>
  );
}
