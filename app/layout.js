import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://quiznaire.in"),
  title: "Quiznaire — Empowering Talent & Rewarding Knowledge",
  description:
    "Try a free four-question practice round in physics, biology, history and general knowledge. Quiznaire’s subject-based quiz app is preparing for launch.",
  creator: "Powerpage Education Private Limited",
  publisher: "Powerpage Education Private Limited",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Quiznaire — Empowering Talent & Rewarding Knowledge",
    description:
      "Try a free four-question practice round in physics, biology, history and general knowledge. Quiznaire’s subject-based quiz app is preparing for launch.",
    url: "https://quiznaire.in",
    siteName: "Quiznaire",
    images: ["/logo.png"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Powerpage Education Private Limited",
    slogan: "Empowering Talent & Rewarding Knowledge",
    url: "https://powerpageedu.com",
    brand: {
      "@type": "Brand",
      name: "Quiznaire",
      url: "https://quiznaire.in",
    },
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/dm-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a className="skipLink" href="#main-content">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
      </body>
    </html>
  );
}
