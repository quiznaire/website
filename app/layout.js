import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://quiznaire.in"),
  title: "Quiznaire — Empowering Talent & Rewarding Knowledge",
  description: "Play live quizzes, test what you know, and contribute original questions to a growing knowledge community.",
  creator: "Powerpage Education Private Limited",
  publisher: "Powerpage Education Private Limited",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Quiznaire — Empowering Talent & Rewarding Knowledge",
    description: "Play live quizzes, test what you know, and contribute original questions to a growing knowledge community.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try { const theme = localStorage.getItem('quiznaire-theme'); if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme; } catch {}` }} />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
      </body>
    </html>
  );
}
