import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="OverTime Tech" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:400,500,600,700,800,900|Space+Grotesk:400,500,600,700,800,900&amp;subset=latin"
        />
        <link
          href="https://fonts.cdnfonts.com/css/inter?styles=135009,135005,135007,135002,135000"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased bg-body text-body font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
