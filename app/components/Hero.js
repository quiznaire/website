import QuizDemo from "../QuizDemo";

export default function Hero({ subject, round }) {
  return (
    <section className="hero shell" id="top">
      <div className="heroCopy">
        <div className="eyebrow">
          <span className="signalDot" aria-hidden="true" /> QUIZNAIRE / PRACTICE
          OPEN
        </div>
        <h1>
          Knowledge.
          <br />
          <span>In play.</span>
        </h1>
        <p>
          Test your understanding across physics, biology, history and general
          knowledge. Four questions. Every answer explained.
        </p>
        <div className="actions">
          <a className="pill" href="#try-quiz">
            Start a free round <span aria-hidden="true">↗</span>
          </a>
          <a className="textLink" href="#subjects">
            Explore subjects <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="heroDetails">
          <div>
            <strong>04</strong>
            <span>Questions</span>
          </div>
          <div>
            <strong>04</strong>
            <span>Subjects</span>
          </div>
          <div>
            <strong>Free</strong>
            <span>No account needed</span>
          </div>
        </div>
        <p className="heroAvailability">
          The Quiznaire app is preparing for launch.
          <br />
          The practice round is ready when you are.
        </p>
      </div>
      <div className="heroExperience">
        <div className="consoleHeading">
          <span>THE QUESTION CONSOLE</span>
          <span className="consoleMode">UNTIMED</span>
        </div>
        <QuizDemo
          key={`${subject}-${round}`}
          initialSubject={subject}
          focusOnMount={round > 0}
        />
        <div className="consoleCaption">
          <span>Practice only · No entry fee or prizes</span>
          <span aria-hidden="true">↗</span>
        </div>
      </div>
      <div className="heroBottom">
        <span>UNDERSTANDING OVER GUESSWORK</span>
        <span>CHOOSE → ANSWER → UNDERSTAND</span>
        <a href="#subjects" aria-label="Scroll to subjects">
          ↓
        </a>
      </div>
    </section>
  );
}
