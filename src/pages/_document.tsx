import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../utils/gtag';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */ }
          <script
            async
            src={ `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}` }
          />
          <script
            dangerouslySetInnerHTML={ {
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `
            } }
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "image": "https://rnkp.org/images/logo-color-big.png",
              "url": "https://rnkp.org",
              "sameAs": ["https://www.rnkp.org"],
              "logo": "https://rnkp.org/images/logo-color-min.png",
              "name": "РНКП",
              "description": "Сайт партии Российская народная концептуальная программа (РНКП). Партия создана для ликвидации пропасти между народом и властью и для разработки программы развития страны, обеспечивающей поступательное улучшение качества жизни и решение проблем высокого порядка общественной значимости",
              "email": "info@rnkp.org"
            }) }}
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
