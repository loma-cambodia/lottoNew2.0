import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

import '../styles/globals.css'

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default MyApp
