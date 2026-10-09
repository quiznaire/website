"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Brand from "./Brand";
import QuizDemo from "./QuizDemo";
import ThemeToggle from "./ThemeToggle";

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
    const elements = document.querySelectorAll(".manifesto, .sectionHead, .subject, .howTitle, .steps article, .contributeArt, .contributeCopy, .trustGrid article, .cta .shell");
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
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <Brand href="#top" />
        <div className="navActions">
        <ThemeToggle />
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
          <a href="#subjects" onClick={() => setMenu(false)}>Subjects</a>
          <a href="#contribute" onClick={() => setMenu(false)}>Contribute</a>
          <button className="pill dark small" onClick={() => comingSoon("The Quiznaire app")}>Get the app <Arrow /></button>
        </div>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
        <div className="eyebrow"><i /> For curious minds. And competitive spirits.</div>
        <h1>Knowledge is<br /><em>worth showing.</em></h1>
        <div className="heroBottom">
          <p>Put your knowledge in play. Compete in subject quizzes for rewards, or contribute original questions and earn when they’re accepted.</p>
          <div className="actions">
            <a className="pill blue" href="#try-quiz">Try a free mini quiz <Arrow /></a>
            <a className="textLink" href="#contribute">Contribute a question <span>↓</span></a>
          </div>
          <div className="heroChips"><span>✦ Play to challenge yourself</span><span>↗ Create questions. Earn rewards.</span></div>
        </div>
        </div>
        <QuizDemo />
      </section>

      <section className="marquee" aria-label="Quiznaire highlights">
        <div className="marqueeTrack" aria-hidden="true">{[0, 1].map((n) => <span key={n}>PLAY <i>✦</i> LEARN <i>✦</i> CONTRIBUTE <i>✦</i> GROW <i>✦</i> STAY CURIOUS <i>✦</i> </span>)}</div>
      </section>

      <section className="manifesto shell">
        <div className="sectionTag">Why Quiznaire</div>
        <div>
          <h2>Let what you know<br /><em>take you further.</em></h2>
          <p>Quiznaire turns what you know into momentum. Compete in subject-based quizzes, build sharper recall and help create a fresh question bank for learners across India.</p>
          <div className="statRow">
            <div><strong>8+</strong><span>subjects on the horizon</span></div>
            <div><strong>1</strong><span>question at a time</span></div>
            <div><strong>∞</strong><span>reasons to stay curious</span></div>
          </div>
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

      <section className="contribute shell" id="contribute">
        <div className="contributeArt">
          <div className="note one"><span>YOUR IDEA</span><p>What happens to pressure when volume decreases?</p></div>
          <div className="note two"><b>UNIQUE?</b><strong>✓</strong><small>Ready for review</small></div>
          <div className="orbit">?</div>
        </div>
        <div className="contributeCopy">
          <div className="sectionTag">Know a great question?</div>
          <h2>A good question<br /><em>deserves a life.</em></h2>
          <p>Submit original, conceptual questions to the Quiznaire question bank. Every contribution is checked for clarity, accuracy and uniqueness. Accepted questions earn the contribution amount displayed in the app.</p>
          <ul>
            <li><span>01</span> Write an original objective question</li>
            <li><span>02</span> Add the answer, subject and difficulty</li>
            <li><span>03</span> Earn the displayed amount when accepted</li>
          </ul>
          <button className="pill blue" onClick={() => comingSoon("Question submissions")}>Start contributing <Arrow /></button>
        </div>
      </section>

      <section className="trust shell">
        <div className="sectionTag">Made for fair play</div>
        <div className="trustGrid">
          <article><span>01</span><h3>Clear before you enter</h3><p>See the timing, format, entry details and prize structure for every quiz upfront.</p></article>
          <article><span>02</span><h3>Concepts over calculators</h3><p>Focused, time-bound questions reward understanding and quick recall.</p></article>
          <article><span>03</span><h3>Everything in one wallet</h3><p>Track quiz rewards and approved-question earnings with a transparent history.</p></article>
        </div>
      </section>

      <section className="cta">
        <div className="shell">
          <span className="miniBurst">READY?</span>
          <h2>Your next<br /><em>question</em><br />is waiting.</h2>
          <p>Quiznaire is getting ready for launch. Until then, give your curiosity a workout with our free mini quiz.</p>
          <a className="pill lightPill" href="#try-quiz">Put me to the test <Arrow /></a>
        </div>
      </section>

      <footer className="footer shell">
        <div className="footerBrand">
          <Brand href="#top" />
          <p>A learning and quiz platform by <a href="https://powerpageedu.com">Powerpage Education Private Limited</a>.</p>
        </div>
        <div><strong>Explore</strong><a href="#how">How it works</a><a href="#subjects">Subjects</a><a href="#contribute">Contribute</a></div>
        <div><strong>Company</strong><button onClick={() => comingSoon("About Quiznaire")}>About</button><button onClick={() => comingSoon("Help centre")}>Help & support</button></div>
        <div><strong>Legal</strong><Link href="/terms">Terms &amp; Conditions</Link><Link href="/privacy">Privacy Policy</Link></div>
        <small>© 2026 <a href="https://powerpageedu.com">Powerpage Education Pvt. Ltd.</a> All rights reserved.</small>
      </footer>
      {notice && <div className="toast" role="status">{notice}<button aria-label="Dismiss notification" onClick={() => setNotice("")}>×</button></div>}
    </main>
  );
}
