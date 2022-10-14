import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="assets/js/jquery.min.js"
          strategy="beforeInteractive"
        ></Script>

            <Script src="assets/bootstrap/js/bootstrap.bundle.js" strategy="lazyOnload" />
            <Script src="assets/js/owl.carousel.js" strategy="lazyOnload" />
            {/* <Script src="js/main.js" strategy="lazyOnload" /> */}
            <Script src="assets/js/main.js" strategy="lazyOnload" />
      </body>
    </Html>
  )
}