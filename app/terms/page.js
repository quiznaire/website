import LegalShell from "../legal/LegalShell";

export const metadata = {
  title: "Terms & Conditions — Quiznaire",
  description: "The rules governing Quiznaire accounts, quiz contests, prizes and question contributions.",
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Platform rules"
      title="TERMS & CONDITIONS"
      intro="These terms govern your access to Quiznaire, including accounts, paid quiz contests, prizes, wallets and question-bank contributions."
    >
      <section id="overview">
        <span className="legalNumber">01</span>
        <h2>Who we are</h2>
        <p>Quiznaire is a flagship brand of <a href="https://powerpageedu.com">Powerpage Education Private Limited</a>. The platform offers subject-based online quiz contests and allows users to submit original questions for review and possible inclusion in the Quiznaire question bank.</p>
        <p>Available subjects may include Physics, Chemistry, Biology, Hindi, History, General Knowledge, Social Science and Political Science. Subjects and services may change over time.</p>
      </section>

      <section id="details">
        <span className="legalNumber">02</span>
        <h2>Acceptance of these terms</h2>
        <p>By creating an account, accessing the platform or using a Quiznaire service, you agree to these Terms and any contest-specific rules presented before entry. If contest-specific rules differ from these general Terms, the contest-specific rules apply to that contest.</p>
        <p>You agree that Quiznaire may send operational messages, account notifications, contest updates and legally permitted promotional communications through the platform, SMS, email or other available channels.</p>
      </section>

      <section>
        <span className="legalNumber">03</span>
        <h2>Your account</h2>
        <p>You must register and provide accurate, current and complete information. Depending on the service, this may include your name, Indian mobile number, address and state, gender, date of birth, government identification, PAN, bank-account information or UPI ID.</p>
        <p>You are responsible for safeguarding access to your account and for activity conducted through it. Quiznaire may require identity verification or KYC in accordance with applicable law and may restrict an account until verification is completed.</p>
      </section>

      <section>
        <span className="legalNumber">04</span>
        <h2>Paid-contest eligibility</h2>
        <p>To participate in a paid contest, you must:</p>
        <ul>
          <li>Be at least 18 years old</li>
          <li>Reside in India</li>
          <li>Have a valid Indian mobile number</li>
          <li>Meet any additional legal, geographic or verification requirements shown for that contest</li>
        </ul>
        <div className="legalCallout">Do not enter a paid contest if paid online contests are prohibited or restricted in your location.</div>
      </section>

      <section>
        <span className="legalNumber">05</span>
        <h2>Quiz entry and rules</h2>
        <p>A contest page will display relevant information such as its subject, schedule, entry amount, question count, duration, marking system, winner criteria and prize structure. You must pay the stated entry amount before the scheduled start to join a paid contest.</p>
        <p>Quiznaire may deduct the disclosed platform fee. The remaining applicable amount contributes to the prize pool. You must follow the timing, fair-play and other rules displayed for the contest. Attempts to cheat, manipulate results, use unauthorised assistance or interfere with the platform may lead to disqualification or account restrictions.</p>
      </section>

      <section>
        <span className="legalNumber">06</span>
        <h2>Scores, winners and prizes</h2>
        <p>Scores are calculated using the marking system shown before the contest. The contest page will explain the qualifying scores or ranks and how the available prize pool is allocated among winners.</p>
        <p>Higher-scoring eligible winners may receive a higher percentage where the displayed prize structure provides for it. If no participant qualifies for a particular score band, its allocated amount may be redistributed among other eligible winner bands according to the contest rules.</p>
        <p>Results remain subject to verification. Quiznaire may withhold or reverse a prize, restrict withdrawal or disqualify a participant whose submitted information is false, misleading, fabricated, incomplete or illegible, or who violates these Terms or the contest rules.</p>
      </section>

      <section>
        <span className="legalNumber">07</span>
        <h2>Winner verification and support</h2>
        <p>Quiznaire or an authorised service provider may contact a winner using registered contact details and request documents required for identity, eligibility, tax or payment verification.</p>
        <p>If the platform declares you a winner but your winnings do not appear, contact Help &amp; Support within 48 hours of the winner declaration. Decisions regarding scores, eligibility and prizes will be made under these Terms and the applicable contest rules.</p>
      </section>

      <section>
        <span className="legalNumber">08</span>
        <h2>Question-bank contributions</h2>
        <p>Submitted questions are checked for duplication and reviewed before acceptance. To qualify, a question should be original, conceptual, objective, accurate, clearly written and assigned to the correct subject and difficulty level. Questions requiring lengthy or complicated numerical calculations may be rejected.</p>
        <ul>
          <li>A question must be unique to the Quiznaire question bank</li>
          <li>The same question will not be paid more than once</li>
          <li>Only accepted questions qualify for the displayed contribution rate</li>
          <li>Quiznaire may change the contribution rate and review criteria prospectively</li>
          <li>Submitting a question does not guarantee acceptance or payment</li>
        </ul>
      </section>

      <section>
        <span className="legalNumber">09</span>
        <h2>Wallets and withdrawals</h2>
        <p>Your Quiznaire wallet may separately reflect deposits, quiz prizes and approved-question earnings. Deposits, withdrawals and transfers may be subject to payment-provider rules, verification, processing times, minimum thresholds, taxes and applicable law.</p>
        <p>You must provide correct bank or UPI details. Quiznaire is not responsible for delays or losses caused by incorrect payment details supplied by you, payment-network failures or legally required reviews.</p>
      </section>

      <section id="rights">
        <span className="legalNumber">10</span>
        <h2>Your responsibilities</h2>
        <p>You agree not to misuse the platform, impersonate another person, submit unlawful or infringing content, manipulate contests, exploit technical errors, access restricted systems or use the platform in violation of law. You must promptly update inaccurate account or payment information.</p>
        <p>Quiznaire may suspend or close accounts, reject submissions, cancel entries or take other reasonable action where required for safety, integrity, compliance or enforcement of these Terms.</p>
      </section>

      <section>
        <span className="legalNumber">11</span>
        <h2>Availability and changes</h2>
        <p>Features, subjects, contest formats, schedules, contribution rates and platform fees may change. Quiznaire may modify, suspend or discontinue a service and may update these Terms. Material changes will be posted or communicated through the platform as appropriate.</p>
      </section>

      <section id="contact">
        <span className="legalNumber">12</span>
        <h2>Questions and assistance</h2>
        <p>For account, contest, prize, payment or question-review issues, use the Help &amp; Support feature available through Quiznaire. Privacy-related requests are governed by the <a href="/privacy">Privacy Policy</a>.</p>
      </section>
    </LegalShell>
  );
}
