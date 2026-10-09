import LegalShell from "../legal/LegalShell";

export const metadata = {
  title: "Privacy Policy — Quiznaire",
  description: "How Quiznaire collects, uses, shares, protects and retains personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Your privacy"
      title="PRIVACY POLICY"
      intro="This policy explains how Quiznaire handles information when you visit the platform, create an account, enter a quiz contest or contribute a question."
      lastUpdated="1 August 2026"
    >
      <section id="overview">
        <span className="legalNumber">01</span>
        <h2>About this policy</h2>
        <p>Quiznaire is a flagship brand of <a href="https://powerpageedu.com">Powerpage Education Private Limited</a>. We provide online quiz contests and maintain a question bank to which users may submit original questions. Anyone using the platform or its features is covered by this Privacy Policy.</p>
        <p>We respect our users&apos; privacy and aim to protect personal information while providing a useful, secure and engaging experience. Some services may be available without payment, but registration is required for features such as participating in contests.</p>
        <p>Capitalised terms not defined in this policy have the meanings given to them in our <a href="/terms">Terms &amp; Conditions</a>.</p>
      </section>

      <section id="details">
        <span className="legalNumber">02</span>
        <h2>Information we collect</h2>
        <p>We collect information that you provide and limited information generated when you use the platform.</p>
        <h3>Information you provide</h3>
        <ul>
          <li>Mobile number, username and email address</li>
          <li>Date of birth and profile information</li>
          <li>Government identification, such as Aadhaar, driving licence or voter ID, where verification is required</li>
          <li>PAN and other information required for legal, tax or winner-verification purposes</li>
          <li>Bank, UPI, wallet and payment details needed to process deposits, withdrawals or prizes</li>
          <li>Questions, feedback and support messages you submit</li>
        </ul>
        <h3>Information collected through use</h3>
        <p>This may include device and operating-system information, IP address, network information, approximate location, platform activity and cookie or similar identifier data. Where a feature requests access to information such as the apps installed on your device, that access is optional and will be subject to your permission.</p>
      </section>

      <section>
        <span className="legalNumber">03</span>
        <h2>How we use information</h2>
        <ul>
          <li>Create, maintain and secure your account</li>
          <li>Operate quizzes, question submissions, wallets, quiz rewards and withdrawals</li>
          <li>Verify identity, eligibility and winners, including KYC where required</li>
          <li>Prevent duplicate questions, fraud, misuse and security incidents</li>
          <li>Respond to feedback, support requests and account-deletion requests</li>
          <li>Analyse and improve the platform, features and user experience</li>
          <li>Send service, account, contest and other communications permitted by law</li>
          <li>Comply with applicable laws and authorised government or legal requests</li>
        </ul>
        <div className="legalCallout">You may choose not to provide certain information, withdraw consent where applicable, request a temporary suspension of collection, or ask us to delete personal information. Some or all services may become unavailable when information needed to provide them is withheld or deleted.</div>
      </section>

      <section>
        <span className="legalNumber">04</span>
        <h2>Payments and sensitive information</h2>
        <p>Payment and financial information may include the payment method, cardholder name, encrypted card details and expiry date, banking details, UPI information and wallet details. This information is used to complete transactions and administer prizes or withdrawals.</p>
        <p>Where payment processing is provided by a third party, its separate terms and privacy practices may also apply. Sensitive personal information will be handled with your consent and subject to applicable law. We will not disclose sensitive personal information to a third-party service provider without the consent required by law.</p>
      </section>

      <section>
        <span className="legalNumber">05</span>
        <h2>Sharing and disclosure</h2>
        <p>We may share necessary information with affiliates, group entities and service providers that help with hosting, storage, analytics, verification, payments, fraud prevention, communications and platform improvement. We require or use best efforts to ensure that recipients apply appropriate confidentiality and security standards.</p>
        <p>Information may also be disclosed to comply with applicable law, respond to duly authorised legal or government requests, protect users, prevent fraud or imminent harm, or secure our network and services. If all or part of the business or its assets is reorganised, sold or transferred, user information may form part of that transaction, subject to applicable requirements.</p>
      </section>

      <section>
        <span className="legalNumber">06</span>
        <h2>Cookies, links and advertising</h2>
        <p>Cookies and similar technologies may assign a device a unique identifier, remember preferences, understand interests, measure traffic and improve usability. A Quiznaire cookie cannot read data from your device. Our servers may also record IP addresses and basic connection data.</p>
        <p>Advertisers may place their own cookies if you interact with their advertisements. We do not control those cookies, and the advertiser&apos;s privacy policy applies to them.</p>
        <p>Advertisements or other parts of the platform may link to external websites. Quiznaire does not control and is not responsible for the privacy practices or content of those websites.</p>
      </section>

      <section>
        <span className="legalNumber">07</span>
        <h2>Security and international processing</h2>
        <p>We store information in controlled systems protected by safeguards such as firewalls, password protection and need-to-know access restrictions. No internet transmission or storage system is completely secure, so absolute security cannot be guaranteed. Information you post in public or discussion areas may be visible to anyone with internet access.</p>
        <p>Information may be processed or transferred outside India where service providers operate, subject to applicable legal requirements and appropriate safeguards.</p>
      </section>

      <section id="rights">
        <span className="legalNumber">08</span>
        <h2>Retention and your choices</h2>
        <p>We retain personal information while it is needed for the purposes in this policy and for legal, regulatory, contractual, fraud-prevention or legitimate business requirements. Information may be retained longer when necessary to establish, exercise or defend legal claims.</p>
        <p>You may request correction or deletion of information, withdraw consent where applicable, request a temporary suspension of collection, or delete your account by selecting the account-deletion option in the platform. Certain information may be retained where required by law or necessary to resolve transactions, prevent fraud, and establish, exercise or defend legal claims.</p>
      </section>

      <section>
        <span className="legalNumber">09</span>
        <h2>Fraudulent communications</h2>
        <p>Be cautious of messages, sites or calls that misuse the Quiznaire name or logo, claim that you won a prize, or ask for passwords, sensitive financial information or unauthorised payments. Except during an authorised verification process, Quiznaire personnel will not ask you to disclose passwords or complete sensitive payment credentials.</p>
      </section>

      <section id="contact">
        <span className="legalNumber">10</span>
        <h2>Changes and questions</h2>
        <p>We may update this policy to reflect platform, legal or operational changes. The updated policy will be posted on this page and material changes may also be communicated through the platform.</p>
        <p>For privacy questions, consent choices or data requests, use Help &amp; Support. To delete your account and associated personal information, select the account-deletion option available in the Quiznaire platform.</p>
      </section>
    </LegalShell>
  );
}
