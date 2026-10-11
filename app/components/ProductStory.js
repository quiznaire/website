import Link from "next/link";

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

export default function ProductStory() {
  return (
    <>
      <section className="how" id="how">
        <div className="shell learningLayout">
          <div className="learningCopy">
            <div className="sectionTag">02 / Make each question count</div>
            <h2>
              The answer is
              <br />
              <span>just the start.</span>
            </h2>
            <ol className="steps">
              <li>
                <span>01</span>
                <div>
                  <h3>Make your choice</h3>
                  <p>Three options. One answer. Take the time you need.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Understand the why</h3>
                  <p>
                    Read the explanation before moving to the next question.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Review your round</h3>
                  <p>
                    Check your score and revisit every answer. Then play again.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <article className="explanationSample">
            <div className="sampleMeta">
              <span>EXAMPLE / PHYSICS</span>
              <span>EXPLAINED</span>
            </div>
            <span className="explanationMark" aria-hidden="true">
              ↳
            </span>
            <h3>
              Constant speed.
              <br />
              <span>Changing direction.</span>
            </h3>
            <p>
              In uniform circular motion, speed stays constant. Velocity changes
              because it includes direction.
            </p>
            <div className="sampleTakeaway">
              <span>THE TAKEAWAY</span>
              <strong>Speed and velocity are different.</strong>
            </div>
            <a className="textLink" href="#try-quiz">
              Try it in the practice round <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </section>
      <section className="about shell" id="about">
        <div className="aboutHeading">
          <div className="sectionTag">
            03 / The platform behind the practice
          </div>
          <h2>
            A place for
            <br />
            <span>what you know.</span>
          </h2>
        </div>
        <div className="aboutCopy">
          <p>
            Quiznaire is a subject-based quiz platform by Powerpage Education
            Private Limited. We’re building a place to test your understanding
            and compete in the subjects you care about.
          </p>
          <div className="launchStatus">
            <div>
              <span className="statusIndicator" aria-hidden="true" />
              <div>
                <strong>Website practice</strong>
                <span>Available now · Free to play</span>
              </div>
            </div>
            <div>
              <span className="statusIndicator pending" aria-hidden="true" />
              <div>
                <strong>Quiznaire app</strong>
                <span>Preparing for launch</span>
              </div>
            </div>
          </div>
          <a className="textLink" href="https://powerpageedu.com">
            About Powerpage Education <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <section className="faq shell" id="questions">
        <div className="faqIntro">
          <div className="sectionTag">04 / Before you play</div>
          <h2>
            Useful
            <br />
            <span>answers.</span>
          </h2>
          <p>No surprises. Here’s what to expect.</p>
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
      <section className="closing">
        <div className="shell closingLayout">
          <div>
            <span className="sectionTag">Four questions. Start with one.</span>
            <h2>Your turn.</h2>
          </div>
          <a className="pill" href="#try-quiz">
            Play the free practice round <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
