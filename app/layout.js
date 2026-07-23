import "./globals.css";

export const metadata = {
  title: "Quizito — Knowledge has its rewards",
  description: "Play live quizzes, test what you know, and contribute original questions to a growing knowledge community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
