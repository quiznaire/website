import Link from "next/link";

export default function LegalShell({ eyebrow, title, intro, children }) {
  return (
    <main className="legalPage">
      <nav className="nav shell legalNav" aria-label="Legal page navigation">
        <Link className="brand" href="/" aria-label="Quizito home">
          <span>Q</span>QUIZITO
        </Link>
        <Link className="legalBack" href="/">← Back to home</Link>
      </nav>

      <header className="legalHero">
        <div className="shell">
          <div className="sectionTag">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="legalMeta">
            <span>Last updated</span>
            <strong>23 July 2026</strong>
          </div>
        </div>
      </header>

      <div className="legalLayout shell">
        <aside>
          <span>On this page</span>
          <a href="#overview">Overview</a>
          <a href="#details">Key provisions</a>
          <a href="#rights">Your rights & responsibilities</a>
          <a href="#contact">Questions</a>
        </aside>
        <article className="legalArticle">{children}</article>
      </div>

      <footer className="legalFooter">
        <div className="shell">
          <div>
            <Link className="brand" href="/"><span>Q</span>QUIZITO</Link>
            <p>A platform by Powerpage Education Private Limited.</p>
          </div>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
