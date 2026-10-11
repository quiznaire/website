"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Brand from "./Brand";
import QuizDemo from "./QuizDemo";

const subjects = [
  {
    name: "Physics",
    icon: "⚛",
    description: "Think in forces, motion and energy.",
  },
  {
    name: "Biology",
    icon: "⌁",
    description: "Discover the science of living things.",
  },
  {
    name: "History",
    icon: "⌛",
    description: "Connect the moments that shaped us.",
  },
  {
    name: "General Knowledge",
    icon: "◎",
    description: "A little of everything. A lot to discover.",
  },
];
const faqs = [
  [
    "Can I try Quiznaire without signing up?",
    "Yes. The free mini quiz on this page works right in your browser. There is no account, entry fee or prize involved. Pick an answer, read the explanation and move to the next question.",
  ],
  [
    "Is the Quiznaire app available yet?",
    "Quiznaire is preparing for launch. For now, explore the subjects and play the free practice round here. App availability will be shared on this website.",
  ],
  [
    "Are there prizes in the mini quiz?",
    "The website mini quiz is for practice only and does not offer prizes. For future competitive quizzes, check the individual rules, eligibility, entry details and prize structure before participating.",
  ],
  [
    "Who is behind Quiznaire?",
    "Quiznaire is a learning and quiz platform by Powerpage Education Private Limited. You can find more information in our Terms & Conditions and Privacy Policy.",
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
              Subjects
            </a>
            <a href="#how" onClick={() => setMenu(false)}>
              How it works
            </a>
            <a href="#about" onClick={() => setMenu(false)}>
              Our story
            </a>
            <a
              className="pill small"
              href="#try-quiz"
              onClick={() => setMenu(false)}
            >
              Try a free quiz <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <div className="eyebrow">
            <span className="statusDot" /> A little curiosity goes a long way
          </div>
          <h1>
            You know more
            <br />
            than you <em>think.</em>
          </h1>
          <p>
            Put it to the test. Explore your favourite subjects, challenge your
            instincts and learn something new with every question.
          </p>
          <div className="actions">
            <a className="pill" href="#try-quiz">
              Let’s play a little <span aria-hidden="true">↗</span>
            </a>
            <a className="textLink" href="#subjects">
              Find your subject <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="heroReassurance">
            <span>✓ No sign-up</span>
            <span>✓ Free practice</span>
            <span>✓ Instant explanations</span>
          </div>
          <div className="heroFootnote">
            <span className="miniMark" aria-hidden="true">
              Q.
            </span>
            <p>
              For curious minds.
              <br />
              <strong>And competitive spirits.</strong>
            </p>
          </div>
        </div>
        <div className="heroExperience">
          <div className="experienceLabel">
            <span>YOUR DAILY DOSE OF DISCOVERY</span>
            <span aria-hidden="true">✦</span>
          </div>
          <QuizDemo key={`${subject}-${round}`} initialSubject={subject} />
          <div className="experienceCaption">
            <span>Four questions. Something new to learn.</span>
            <span aria-hidden="true">↙</span>
          </div>
        </div>
      </section>

      <div className="principles">
        <div className="shell">
          <span>FOLLOW YOUR CURIOSITY</span>
          <strong>Think a little deeper.</strong>
          <i aria-hidden="true">✦</i>
          <strong>Play a little smarter.</strong>
          <i aria-hidden="true">✦</i>
          <strong>Keep discovering.</strong>
        </div>
      </div>

      <section className="subjects shell sectionSpace" id="subjects">
        <div className="sectionHead">
          <div>
            <div className="sectionTag">01 / Find your spark</div>
            <h2>
              Where will your
              <br />
              <em>curiosity take you?</em>
            </h2>
          </div>
          <p>
            Start with what you love. Or surprise yourself with something
            different.
          </p>
        </div>
        <div className="subjectGrid">
          {subjects.map((item, index) => (
            <button
              className="subject"
              key={item.name}
              onClick={() => practice(item.name)}
              aria-label={`Start a practice round with ${item.name}`}
            >
              <div className="subjectTop">
                <span className="subjectIcon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="subjectNumber">0{index + 1}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="subjectBottom">
                <span>Try a question</span>
                <span aria-hidden="true">↗</span>
              </div>
            </button>
          ))}
        </div>
        <p className="sectionNote">
          A taste of the subjects we’re building. These practice rounds include
          a mix of all four.
        </p>
      </section>

      <section className="how" id="how">
        <div className="shell sectionSpace">
          <div className="sectionHead">
            <div>
              <div className="sectionTag">02 / Less setup. More discovery.</div>
              <h2>
                A good question.
                <br />
                <em>A great place to start.</em>
              </h2>
            </div>
            <a className="textLink" href="#try-quiz">
              Try it for yourself <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="steps">
            <article>
              <span className="stepNumber">01</span>
              <div className="stepIllustration pick" aria-hidden="true">
                <span>⚛</span>
                <span>⌁</span>
                <span>◎</span>
              </div>
              <h3>Follow your interest</h3>
              <p>
                Choose a subject below or jump straight into the free mini quiz.
                No account needed.
              </p>
            </article>
            <article>
              <span className="stepNumber">02</span>
              <div className="stepIllustration answer" aria-hidden="true">
                <span>A</span>
                <strong>Make your choice</strong>
                <b>✓</b>
              </div>
              <h3>Trust your thinking</h3>
              <p>
                Read the question and pick your answer. Take your time; this
                round is about discovery.
              </p>
            </article>
            <article>
              <span className="stepNumber">03</span>
              <div className="stepIllustration learn" aria-hidden="true">
                <span>✦</span>
                <strong>A little wiser.</strong>
              </div>
              <h3>Take something away</h3>
              <p>
                Get an explanation after every answer, then see your score at
                the end. Play again whenever you like.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about shell sectionSpace" id="about">
        <div className="aboutArt" aria-hidden="true">
          <div className="artOrbit orbitOne" />
          <div className="artOrbit orbitTwo" />
          <span className="artLabel labelOne">A GOOD QUESTION</span>
          <span className="artLabel labelTwo">A NEW PERSPECTIVE</span>
          <span className="artQ">
            Q<span>.</span>
          </span>
          <span className="artSpark">✦</span>
          <span className="artBottom">THINK. PLAY. GROW.</span>
        </div>
        <div className="aboutCopy">
          <div className="sectionTag">03 / The idea behind Quiznaire</div>
          <h2>
            Learning should
            <br />
            leave you <em>curious.</em>
          </h2>
          <p>
            We believe a good question can do more than test your memory. It can
            change how you see something, connect a new idea or make you want to
            know more.
          </p>
          <p>
            Quiznaire brings that feeling to subject-led quizzes, with
            thoughtful questions and a competitive spirit. We’re preparing for
            launch. Until then, come explore with us.
          </p>
          <div className="aboutSignature">
            <span aria-hidden="true">↗</span>
            <p>
              Empowering talent.
              <br />
              <strong>Rewarding knowledge.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="faq shell sectionSpace" id="questions">
        <div className="faqIntro">
          <div className="sectionTag">A few things to know</div>
          <h2>
            Good questions.
            <br />
            <em>Clear answers.</em>
          </h2>
          <p>Before you dive in, here are the essentials.</p>
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
        </div>
      </section>

      <section className="cta shell">
        <div>
          <div className="sectionTag">
            Your next discovery is one question away
          </div>
          <h2>
            Go on. <em>Surprise yourself.</em>
          </h2>
          <p>A quick round, a fresh perspective, a little more knowledge.</p>
          <a className="pill whitePill" href="#try-quiz">
            Try the free mini quiz <span aria-hidden="true">↗</span>
          </a>
        </div>
        <span className="ctaSymbol" aria-hidden="true">
          ?
        </span>
      </section>

      <footer className="footer shell">
        <div className="footerTop">
          <div className="footerBrand">
            <Brand href="#top" />
            <p>
              For the joy of knowing.
              <br />
              And the thrill of finding out.
            </p>
            <span className="launchBadge">
              <span className="statusDot" /> App preparing for launch
            </span>
          </div>
          <div>
            <strong>Discover</strong>
            <a href="#subjects">Explore subjects</a>
            <a href="#try-quiz">Free mini quiz</a>
            <a href="#how">How it works</a>
          </div>
          <div>
            <strong>Quiznaire</strong>
            <a href="#about">Our story</a>
            <a href="#questions">Common questions</a>
            <a href="https://powerpageedu.com">Our company ↗</a>
          </div>
          <div>
            <strong>The essentials</strong>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
        <div className="footerBottom">
          <small>© 2026 Powerpage Education Private Limited</small>
          <span>Made for minds that never stop exploring.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
