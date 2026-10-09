"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Brand from "./Brand";
import QuizDemo from "./QuizDemo";

const subjects = [
  ["Physics", "⚛", "Forces, motion & more", "blue"],
  ["Biology", "⌁", "Life, cells & systems", "blue"],
  ["History", "⌛", "People, places & time", "blue"],
  ["General Knowledge", "◎", "A little bit of everything", "blue"],
];

const steps = [
  ["01", "Pick your arena", "Choose a subject and see the rules, entry details and prize structure before you join."],
  ["02", "Play it live", "Answer fast-paced conceptual questions in a focused, fair quiz experience."],
  ["03", "See how you did", "Get your score instantly and keep every result and reward in one place."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 3600);
    return () => clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === "Escape") setMenu(false);
    };

    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll(".manifesto, .about, .sectionHead, .subject, .howTitle, .steps article, .trustGrid article, .cta .shell");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealIn");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const comingSoon = (label) => setNotice(`${label} is coming soon. Stay curious!`);

  return (
    <main id="main-content">
      <nav className="nav shell" aria-label="Primary navigation">
        <Brand href="#top" />
        <div className="navActions">
        <button
          className={`menuButton ${menu ? "active" : ""}`}
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          aria-controls="primary-links"
        >
          <span /><span /><span />
        </button>
        <div className={`links ${menu ? "open" : ""}`} id="primary-links">
          <a href="#how" onClick={() => setMenu(false)}>How it works</a>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#subjects" onClick={() => setMenu(false)}>Subjects</a>
          <button className="pill dark small" onClick={() => comingSoon("The Quiznaire app")}>Get the app <Arrow /></button>
        </div>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
        <div className="eyebrow"><i /> For curious minds. And competitive spirits.</div>
        <h1>Knowledge is<br /><em>worth showing.</em></h1>
        <div className="heroBottom">
          <p>Put your knowledge in play. Compete in subject quizzes, sharpen what you know and play for the rewards on offer.</p>
          <div className="actions">
            <a className="pill blue" href="#try-quiz">Try a free mini quiz <Arrow /></a>
            <a className="textLink" href="#how">See how it works <span>↓</span></a>
          </div>
          <div className="heroChips"><span>✦ Play to challenge yourself</span><span>↗ Great quizzes start with great questions.</span></div>
        </div>
        </div>
        <QuizDemo />
      </section>

      <section className="marquee" aria-label="Quiznaire highlights">
        <div className="marqueeRing" aria-hidden="true">
          <svg viewBox="0 0 300 300" role="presentation">
            <defs>
              <path id="quiznaire-ring-path" d="M150,150 m-112,0 a112,112 0 1,1 224,0 a112,112 0 1,1 -224,0" />
            </defs>
            <text>
              <textPath href="#quiznaire-ring-path">PLAY ✦ LEARN ✦ COMPETE ✦ GROW ✦ STAY CURIOUS ✦ </textPath>
            </text>
          </svg>
          <span>Q</span>
        </div>
      </section>

      <section className="manifesto shell">
        <div className="sectionTag">Why Quiznaire</div>
        <div>
          <h2>Let what you know<br /><em>take you further.</em></h2>
          <p>Quiznaire turns what you know into momentum. Compete in subject-based quizzes, build sharper recall and discover something new in every round.</p>
          <div className="statRow">
            <div><strong>8+</strong><span>subjects on the horizon</span></div>
            <div><strong>1</strong><span>question at a time</span></div>
            <div><strong>∞</strong><span>reasons to stay curious</span></div>
          </div>
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="aboutIntro">
          <div className="sectionTag">About Quiznaire</div>
          <h2>Made for people who<br /><em>love a good question.</em></h2>
        </div>
        <div className="aboutCopy">
          <p>Quiznaire is a home for curious minds and competitive spirits. We create thoughtful, subject-led quiz experiences that make learning feel lively, social and worth showing up for.</p>
          <p>Whether you are revising a favourite subject or testing your instincts under pressure, every round gives you a reason to learn something new.</p>
        </div>
        <div className="aboutValues">
          <article><span>01</span><h3>Curiosity first</h3><p>Questions that invite you to think, connect ideas and keep exploring.</p></article>
          <article><span>02</span><h3>Fair competition</h3><p>Clear rules, focused formats and a level playing field for every quiz.</p></article>
          <article><span>03</span><h3>Learning in motion</h3><p>Small moments of discovery that stay with you after the round ends.</p></article>
        </div>
      </section>

      <section className="subjects shell" id="subjects">
        <div className="sectionHead">
          <div>
            <div className="sectionTag">Choose your subject</div>
            <h2>What would you<br /><em>like to explore?</em></h2>
          </div>
          <p>From the laws of motion to the stories that shaped us—there’s always another arena waiting.</p>
        </div>
        <div className="subjectGrid">
          {subjects.map(([name, icon, copy, color]) => (
            <button className={`subject ${color}`} key={name} onClick={() => comingSoon(`${name} quizzes`)}>
              <span className="subjectIcon" aria-hidden="true">{icon}</span>
              <span><strong>{name}</strong><small>{copy}</small></span>
              <Arrow />
            </button>
          ))}
        </div>
        <button className="allSubjects" onClick={() => comingSoon("More subjects")}>See all subjects <span>→</span></button>
      </section>

      <section className="how" id="how">
        <div className="shell">
          <div className="sectionTag light">How it works</div>
          <div className="howTitle">
            <h2>Three steps.<br /><em>Start when ready.</em></h2>
            <p>Everything you need to go from “I know this” to “I proved it.”</p>
          </div>
          <div className="steps">
            {steps.map(([num, title, copy]) => (
              <article key={num}>
                <span>{num}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust shell">
        <div className="sectionTag">Made for fair play</div>
        <div className="trustGrid">
          <article><span>01</span><h3>Clear before you enter</h3><p>See the timing, format, entry details and prize structure for every quiz upfront.</p></article>
          <article><span>02</span><h3>Concepts over calculators</h3><p>Focused, time-bound questions reward understanding and quick recall.</p></article>
          <article><span>03</span><h3>Everything in one wallet</h3><p>Track your quiz rewards and winnings with a clear, transparent history.</p></article>
        </div>
      </section>

      <section className="cta">
        <div className="shell">
          <span className="miniBurst">READY?</span>
          <h2>Your next question<br /><em>is waiting.</em></h2>
          <p>Quiznaire is getting ready for launch. Until then, give your curiosity a workout with our free mini quiz.</p>
          <a className="pill lightPill" href="#try-quiz">Put me to the test <Arrow /></a>
        </div>
      </section>

      <footer className="footer shell">
        <div className="footerBrand">
          <Brand href="#top" />
          <p>A learning and quiz platform by <a href="https://powerpageedu.com">Powerpage Education Private Limited</a>.</p>
        </div>
        <div><strong>Explore</strong><a href="#how">How it works</a><a href="#subjects">Subjects</a><a href="#about">About</a></div>
        <div><strong>Company</strong><a href="#about">About</a><button onClick={() => comingSoon("Help centre")}>Help & support</button></div>
        <div><strong>Legal</strong><Link href="/terms">Terms &amp; Conditions</Link><Link href="/privacy">Privacy Policy</Link></div>
        <small>© 2026 <a href="https://powerpageedu.com">Powerpage Education Pvt. Ltd.</a> All rights reserved.</small>
      </footer>
      {notice && <div className="toast" role="status">{notice}<button aria-label="Dismiss notification" onClick={() => setNotice("")}>×</button></div>}
    </main>
  );
}
