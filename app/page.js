"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Brand from "./Brand";

const subjects = [
  ["Physics", "⚛", "Forces, motion & more", "lime"],
  ["Biology", "⌁", "Life, cells & systems", "coral"],
  ["History", "⌛", "People, places & time", "blue"],
  ["General Knowledge", "◎", "A little bit of everything", "yellow"],
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

  const comingSoon = (label) => setNotice(`${label} is coming soon. Stay curious!`);

  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <Brand href="#top" />
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
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><i /> Built for curious minds</div>
        <h1>KNOW IT.<br /><em>SHOW IT.</em><br />GROW WITH IT.</h1>
        <div className="heroBottom">
          <p>Quick-fire quizzes. Original questions. One growing community where knowledge gets the spotlight.</p>
          <div className="actions">
            <button className="pill lime" onClick={() => comingSoon("Quiz play")}>Explore quizzes <Arrow /></button>
            <a className="textLink" href="#contribute">Contribute a question <span>↓</span></a>
          </div>
        </div>
        <div className="heroVisual" aria-label="Quiz preview">
          <div className="scoreCard tiltOne">
            <span>LIVE SCORE</span><strong>12<small>/15</small></strong><b>Great run!</b>
          </div>
          <div className="questionCard tiltTwo">
            <span>PHYSICS · 08</span>
            <p>Which quantity stays constant in uniform circular motion?</p>
            <div><i>A</i> Speed <b>✓</b></div>
          </div>
          <div className="scribble">Think fast!</div>
        </div>
      </section>

      <section className="marquee" aria-label="Quiznaire highlights">
        <div>PLAY • LEARN • CONTRIBUTE • GROW • PLAY • LEARN • CONTRIBUTE • GROW •</div>
      </section>

      <section className="manifesto shell">
        <div className="sectionTag">Why Quiznaire</div>
        <div>
          <h2>YOUR KNOWLEDGE<br />SHOULD <em>MOVE.</em></h2>
          <p>Quiznaire turns what you know into momentum. Compete in subject-based quizzes, build sharper recall and help create a fresh question bank for learners across India.</p>
          <div className="statRow">
            <div><strong>8+</strong><span>subjects to explore</span></div>
            <div><strong>1</strong><span>question at a time</span></div>
            <div><strong>∞</strong><span>reasons to stay curious</span></div>
          </div>
        </div>
      </section>

      <section className="subjects shell" id="subjects">
        <div className="sectionHead">
          <div>
            <div className="sectionTag">Choose your subject</div>
            <h2>WHAT DO YOU<br /><em>KNOW BEST?</em></h2>
          </div>
          <p>From the laws of motion to the stories that shaped us—there’s always another arena waiting.</p>
        </div>
        <div className="subjectGrid">
          {subjects.map(([name, icon, copy, color]) => (
            <button className={`subject ${color}`} key={name} onClick={() => comingSoon(`${name} quizzes`)}>
              <span className="subjectIcon">{icon}</span>
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
            <h2>THREE STEPS.<br /><em>ZERO FUSS.</em></h2>
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
          <h2>DON&apos;T KEEP IT<br /><em>TO YOURSELF.</em></h2>
          <p>Submit original, conceptual questions to the Quiznaire question bank. Every contribution is checked for clarity, accuracy and uniqueness before it joins the pool.</p>
          <ul>
            <li><span>01</span> Write an original objective question</li>
            <li><span>02</span> Add the answer, subject and difficulty</li>
            <li><span>03</span> Track its review in your account</li>
          </ul>
          <button className="pill coral" onClick={() => comingSoon("Question submissions")}>Start contributing <Arrow /></button>
        </div>
      </section>

      <section className="trust shell">
        <div className="sectionTag">Made for fair play</div>
        <div className="trustGrid">
          <article><span>⌁</span><h3>Clear before you enter</h3><p>See the timing, format, entry details and prize structure for every quiz upfront.</p></article>
          <article><span>◉</span><h3>Concepts over calculators</h3><p>Focused, time-bound questions reward understanding and quick recall.</p></article>
          <article><span>▣</span><h3>Everything in one wallet</h3><p>Track quiz rewards and approved-question earnings with a transparent history.</p></article>
        </div>
      </section>

      <section className="cta">
        <div className="shell">
          <span className="miniBurst">READY?</span>
          <h2>YOUR NEXT<br /><em>QUESTION</em><br />IS WAITING.</h2>
          <p>Quiznaire is getting ready for launch. Be among the first to put your knowledge in play.</p>
          <button className="pill lightPill" onClick={() => comingSoon("Early access")}>Join early access <Arrow /></button>
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
      {notice && <div className="toast" role="status">{notice}<button onClick={() => setNotice("")}>×</button></div>}
    </main>
  );
}
