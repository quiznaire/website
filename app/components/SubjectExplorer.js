"use client";

import { useState } from "react";
import { practiceQuestions } from "../quiz-data";
import SubjectDiagram from "./SubjectDiagram";

export default function SubjectExplorer({ onStart }) {
  const [preview, setPreview] = useState(practiceQuestions[0]);
  return (
    <section className="subjects shell" id="subjects">
      <div className="sectionIntro">
        <div>
          <div className="sectionTag">01 / Choose your opening question</div>
          <h2>
            Find your
            <br />
            <span>field of play.</span>
          </h2>
        </div>
        <p>
          Start with something familiar, or try a subject you haven’t thought
          about in a while. Every round covers all four.
        </p>
      </div>
      <div className="subjectExplorer">
        <div
          className="subjectList"
          role="group"
          aria-label="Start a practice round by subject"
        >
          {practiceQuestions.map((item) => (
            <button
              className={`subject ${preview.subject === item.subject ? "isPreviewed" : ""}`}
              key={item.subject}
              onPointerEnter={() => setPreview(item)}
              onFocus={() => setPreview(item)}
              onClick={() => onStart(item.subject)}
              aria-label={`Start a practice round with ${item.subject}`}
            >
              <span className="subjectNumber">{item.number}</span>
              <span className="subjectBody">
                <span className="subjectTitle">{item.subject}</span>
                <span className="subjectTopic">{item.topic}</span>
              </span>
              <span className="subjectAction" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </div>
        <article
          className="subjectPreview"
          aria-label="Subject concept preview"
        >
          <div className="diagramHeader">
            <span>CONCEPT STUDY / {preview.number}</span>
            <span>{preview.subject}</span>
          </div>
          <SubjectDiagram key={preview.subject} subject={preview.subject} />
          <div className="diagramCaption">
            <span className="previewLabel">A QUESTION TO THINK ABOUT</span>
            <h3>{preview.teaser}</h3>
            <p>Choose a subject to start its practice question.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
