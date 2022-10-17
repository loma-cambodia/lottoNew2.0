import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
          <link rel="icon" type="image/x-icon" href="assets/images/icons/150 x150-01.png" />
          <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet"/>
          <link href="assets/css/style.css" rel="stylesheet"/>
          <link href="assets/css/owl.carousel.css" rel="stylesheet"/>
          <link href="assets/css/owl.theme.default.css" rel="stylesheet"/>
          <link href="assets/text-fonts/poppins/poppins-font.css" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" rel="stylesheet"/>
          <link href="assets/fontawesome/css/all.css" rel="stylesheet"/>
        </Head>
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