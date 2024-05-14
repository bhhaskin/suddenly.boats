import "./globals.scss";

export const metadata = {
  title: "Suddenly... | 1968 | Ericson 41 | Hull #2",
  description: "She still floats!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta property="og:site_name" content="Suddenly... | 1968 | Ericson 41 | Hull #2" />
      <meta property="og:title" content="Suddenly... | 1968 | Ericson 41 | Hull #2" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="She still floats!" />
      <meta property="og:image" content="/assets/images/card.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="800" />
      <meta property="og:url" content="https://suddenly.boats" />
      <meta property="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://suddenly.boats" />
      <meta name="color-scheme" content="light only" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/assets/favicon/site.webmanifest"/>
      <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
      <link rel="shortcut icon" href="/assets/favicon/favicon.ico"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml"/>
      <meta name="theme-color" content="#ffffff"/>
      <body>{children}</body>
    </html>
  );
}
