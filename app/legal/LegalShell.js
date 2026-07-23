import Link from "next/link";
import Brand from "../Brand";

export default function LegalShell({ eyebrow, title, intro, children }) {
  return (
    <main className="legalPage">
      <nav className="nav shell legalNav" aria-label="Legal page navigation">
        <Brand />
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
            <Brand />
            <p>A platform by <a href="https://powerpageedu.com">Powerpage Education Private Limited</a>.</p>
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
