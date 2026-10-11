"use client";

import Link from "next/link";
import { useState } from "react";
import Brand from "./Brand";
import QuizDemo from "./QuizDemo";
import SubjectSketch from "./SubjectSketch";
import SiteHeader from "./SiteHeader";
import { practiceQuestions } from "./quiz-data";

const faqs = [
  [
    "Do I need an account?",
    "Not for this practice round. It runs in your browser, with four questions and an explanation after each answer.",
  ],
  [
    "Can I download the app?",
    "The Quiznaire app is preparing for launch. We’ll share its availability here. The practice round on this page is available now.",
  ],
  [
    "Does the practice quiz have prizes?",
    "No. This round has no entry fee or prizes. For competitive quizzes, review the specific rules, eligibility, entry details and prize structure before joining.",
  ],
  [
    "Who runs Quiznaire?",
    "Quiznaire is a brand of Powerpage Education Private Limited. Our Terms & Conditions and Privacy Policy explain the platform and your rights.",
  ],
];

export default function Home() {
  const [subject, setSubject] = useState("Physics");
  const [round, setRound] = useState(0);
  function practice(name) {
    setSubject(name);
    setRound((value) => value + 1);
    requestAnimationFrame(() => {
      document.getElementById("try-quiz")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "center",
      });
    });
  }
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="hero shell" id="top">
          <div className="heroCopy">
            <div className="eyebrow">
              <span className="editionDot" /> QUIZNAIRE / THE PRACTICE EDITION
            </div>
            <h1>
              A little thinking.
              <br />
              <em>A good challenge.</em>
            </h1>
            <p>
              That fact you remember. That subject you loved.
              <br className="desktopBreak" /> Put them to work in a short quiz.
              Four questions, with something to learn after each one.
            </p>
            <div className="actions">
              <a className="pill" href="#try-quiz">
                Start the practice round <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className="practiceNote">
              4 questions · No account · No entry fee
            </p>
            <div className="heroEdition">
              <span>PHYSICS / BIOLOGY / HISTORY / GENERAL KNOWLEDGE</span>
            </div>
          </div>
          <div className="heroExperience">
            <span className="notebookSpine" aria-hidden="true">
              {Array.from({ length: 7 }, (_, i) => (
                <i key={i} />
              ))}
            </span>
            <span className="handNote heroHandNote">
              Go with your first guess.
            </span>
            <div className="paperHeading">
              <span>THE PRACTICE NOTEBOOK</span>
              <span>01 — 04</span>
            </div>
            <QuizDemo
              key={`${subject}-${round}`}
              initialSubject={subject}
              focusOnMount={round > 0}
            />
            <p className="paperCaption">No timer here. Take your time.</p>
          </div>
          <div className="heroSketches" aria-hidden="true">
            <SubjectSketch subject="Physics" />
            <span className="sketchCaption">a change of direction</span>
            <SubjectSketch subject="Biology" />
          </div>
        </section>

        <section className="subjects shell" id="subjects">
          <div className="subjectIntro">
            <div>
              <div className="sectionTag">01 / Pick your starting point</div>
              <h2>
                What’s <em>your subject?</em>
              </h2>
            </div>
            <p>
              Start with one you know, or one you wish you knew better. Every
              practice round covers all four.
            </p>
          </div>
          <div className="subjectList">
            {practiceQuestions.map((item) => (
              <button
                className={`subject subject${item.number}`}
                key={item.subject}
                onClick={() => practice(item.subject)}
                aria-label={`Start a practice round with ${item.subject}`}
              >
                <span className="subjectNumber">{item.number} /</span>
                <SubjectSketch subject={item.subject} />
                <span className="subjectBody">
                  <span className="subjectTopic">{item.topic}</span>
                  <span className="subjectTitle">{item.subject}</span>
                  <span className="subjectSample">{item.teaser}</span>
                  <span className="subjectTry">
                    Try this subject <span aria-hidden="true">→</span>
                  </span>
                </span>
              </button>
            ))}
          </div>
          <div className="subjectPostscript">
            <span className="handNote">You don’t have to know it all.</span>
            <span>That’s what the explanations are for.</span>
          </div>
        </section>

        <section className="how shell" id="how">
          <div className="howHeading">
            <span className="sectionTag">Playing here is simple</span>
            <span className="howNote">
              Practice only. No prizes in this round.
            </span>
          </div>
          <div className="steps">
            <article>
              <span>1.</span>
              <div>
                <h3>Make your choice</h3>
                <p>Select one answer from the three options.</p>
              </div>
            </article>
            <article>
              <span>2.</span>
              <div>
                <h3>Read the explanation</h3>
                <p>Find out why the right answer is right.</p>
              </div>
            </article>
            <article>
              <span>3.</span>
              <div>
                <h3>Check your score</h3>
                <p>Finish all four questions. Replay if you like.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="about" id="about">
          <div className="shell aboutLayout">
            <div className="aboutHeading">
              <div className="sectionTag">02 / About Quiznaire</div>
              <h2>
                For the love of
                <br />a <em>good question.</em>
              </h2>
              <div className="aboutDrawing" aria-hidden="true">
                <SubjectSketch subject="General Knowledge" />
                <span className="handNote">There’s always more to know.</span>
              </div>
              <span className="aboutByline">
                BY POWERPAGE EDUCATION PRIVATE LIMITED
              </span>
            </div>
            <div className="aboutCopy">
              <p>
                Some questions make you pause. Others make you think, “I knew
                that!” We’re building Quiznaire around both: subject-based
                quizzes that test your understanding and give you a reason to
                learn more.
              </p>
              <p>
                The app is preparing for launch. For now, this website gives you
                a short practice round with explanations, without needing an
                account.
              </p>
              <div className="launchNote">
                <span>APP STATUS</span>
                <strong>Preparing for launch</strong>
              </div>
              <a className="aboutCompany" href="https://powerpageedu.com">
                More about Powerpage Education <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="faq shell" id="questions">
          <div className="faqIntro">
            <div className="sectionTag">03 / Before you play</div>
            <h2>
              Before you
              <br />
              <em>jump in.</em>
            </h2>
          </div>
          <div className="faqList">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
            <div className="faqLegal">
              <Link href="/terms">Terms &amp; Conditions ↗</Link>
              <Link href="/privacy">Privacy Policy ↗</Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer shell">
        <div className="footerTop">
          <Brand href="#top" />
          <p>Empowering talent. Rewarding knowledge.</p>
          <a className="textLink" href="#try-quiz">
            Back to the quiz ↑
          </a>
        </div>
        <div className="footerBottom">
          <small>© 2026 Powerpage Education Private Limited</small>
          <div>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
