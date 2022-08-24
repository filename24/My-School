import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Meta Data */}
          <meta name="google" content="notranslate" />

          {/* Manifest Data */}
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />

          <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#829fff" />
          <meta name="msapplication-TileColor" content="#829fff" />
          <meta name="theme-color" content="#829fff" />
          {/* Favicon */}
          <link rel="shortcut icon" href="/favicon.ico" />

          {/* Script file */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
                    window.location = 'microsoft-edge:' + window.location;
                    setTimeout(function() {
                    window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
                    }, 1);
                }
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
