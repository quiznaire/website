"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Brand from "./Brand";
import QuizDemo from "./QuizDemo";

const subjects = [
  {
    name: "Physics",
    topic: "Motion & energy",
    sample: "Does constant speed always mean constant velocity?",
    number: "01",
  },
  {
    name: "Biology",
    topic: "Cells & living systems",
    sample: "What makes photosynthesis possible inside a plant cell?",
    number: "02",
  },
  {
    name: "History",
    topic: "India & the world",
    sample: "How well do you remember the dates that shaped India?",
    number: "03",
  },
  {
    name: "General Knowledge",
    topic: "Geography & more",
    sample: "Which ocean covers the largest area of our planet?",
    number: "04",
  },
];
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
  const [menu, setMenu] = useState(false);
  const [subject, setSubject] = useState("Physics");
  const [round, setRound] = useState(0);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  function practice(name) {
    setSubject(name);
    setRound((value) => value + 1);
    requestAnimationFrame(() => {
      document
        .getElementById("try-quiz")
        ?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
          block: "center",
        });
      document
        .querySelector("#try-quiz .demoQuestion")
        ?.focus({ preventScroll: true });
    });
  }
  return (
    <main id="main-content">
      <header className="siteHeader">
        <nav className="nav shell" aria-label="Primary navigation">
          <Brand href="#top" />
          <button
            className={`menuButton ${menu ? "active" : ""}`}
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            aria-controls="primary-links"
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`links ${menu ? "open" : ""}`} id="primary-links">
            <a href="#subjects" onClick={() => setMenu(false)}>
              The subjects
            </a>
            <a href="#about" onClick={() => setMenu(false)}>
              About Quiznaire
            </a>
            <a href="#questions" onClick={() => setMenu(false)}>
              Questions
            </a>
            <a
              className="navPlay"
              href="#try-quiz"
              onClick={() => setMenu(false)}
            >
              Play a practice round <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <div className="eyebrow">SUBJECT QUIZZES. A LITTLE COMPETITION.</div>
          <h1>
            Think you know
            <br />
            <em>the answer?</em>
          </h1>
          <p>
            Physics, biology, history, or a bit of everything.
            <br className="desktopBreak" /> Pick a subject and put what you know
            to the test.
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
            <span>THE QUIZNAIRE PRACTICE ROUND</span>
            <span>VOL. 01</span>
          </div>
        </div>
        <div className="heroExperience">
          <div className="paperHeading">
            <span>THE QUESTION DESK</span>
            <span>01 — 04</span>
          </div>
          <QuizDemo key={`${subject}-${round}`} initialSubject={subject} />
          <p className="paperCaption">
            Choose an answer. We’ll explain it before you move on.
          </p>
        </div>
      </section>

      <section className="subjects shell" id="subjects">
        <div className="subjectIntro">
          <div className="sectionTag">The subjects</div>
          <h2>
            Start with
            <br />
            what you <em>know.</em>
          </h2>
          <p>
            Each subject opens with a different question. You’ll then play a
            mixed round covering all four.
          </p>
          <a className="textLink" href="#try-quiz">
            Or jump straight in <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="subjectList">
          {subjects.map((item) => (
            <button
              className="subject"
              key={item.name}
              onClick={() => practice(item.name)}
              aria-label={`Start a practice round with ${item.name}`}
            >
              <span className="subjectNumber">{item.number}</span>
              <span className="subjectBody">
                <span className="subjectTitle">{item.name}</span>
                <span className="subjectTopic">{item.topic}</span>
                <span className="subjectSample">{item.sample}</span>
              </span>
              <span className="subjectAction" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
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
            <div className="sectionTag">About Quiznaire</div>
            <h2>
              Knowledge deserves
              <br />a <em>playing field.</em>
            </h2>
            <span className="aboutByline">
              BY POWERPAGE EDUCATION PRIVATE LIMITED
            </span>
          </div>
          <div className="aboutCopy">
            <p>
              Quiznaire is a subject-based quiz platform. We’re building a place
              to test your understanding and compete in the subjects you care
              about.
            </p>
            <p>
              The app is preparing for launch. For now, this website gives you a
              short practice round with explanations, without needing an
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
          <div className="sectionTag">Before you play</div>
          <h2>
            A few
            <br />
            <em>practical details.</em>
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
    </main>
  );
}
