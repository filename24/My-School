import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { Brand, GoogleSystem } from '@utils/Constants';

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="mn">
        <Head>
          <meta name="apple-mobile-web-app-title" content={Brand.name} />
          <meta name="application-name" content={Brand.name} />

          <meta name="theme-color" content="#0369a1" />

          <meta name="msapplication-TileColor" content="#0369a1" />
          <meta name="msapplication-config" content="/browserconfig.xml" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#0369a1" />

          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GoogleSystem.TrackingID}`}
          ></script>
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GoogleSystem.AdClientID}`}
            crossOrigin="anonymous"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){window.dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', ${GoogleSystem.TrackingID});

						if(/MSIE \\d|Trident.*rv:/.test(navigator.userAgent)) {
							window.location = 'microsoft-edge:' + window.location;
							setTimeout(function() {
								window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
							}, 1);
						}
						`,
            }}
          />
          <noscript>This website requires JavaScript to be enabled.</noscript>
        </Head>
        <body className="h-full overflow-x-hidden">
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}

export default CustomDocument;
