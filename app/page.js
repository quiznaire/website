import Link from "next/link";
import Brand from "./Brand";
import SiteHeader from "./SiteHeader";
import PracticeExperience from "./components/PracticeExperience";
import ProductStory from "./components/ProductStory";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="homePage" id="main-content" tabIndex={-1}>
        <PracticeExperience />
        <ProductStory />
      </main>
      <footer className="footer shell">
        <div className="footerTop">
          <Brand href="#top" />
          <p>Empowering talent. Rewarding knowledge.</p>
          <a className="textLink" href="#top">
            Back to top ↑
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
