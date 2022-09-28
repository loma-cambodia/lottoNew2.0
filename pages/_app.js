import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

import '../styles/globals.css';
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Provider store={store}>
     <Component {...pageProps} />);
     </Provider>
    </> 
  );
}

export default wrapper.withRedux(MyApp);
