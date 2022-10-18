import "bootstrap/dist/css/bootstrap.min.css";; // Import bootstrap CSS
import Head from 'next/head'

// import '../styles/globals.css';
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import React,{ useState,useEffect } from "react";
import Notfound from './403';
import { withIronSessionSsr } from "iron-session/next";
import NextNProgress from "nextjs-progressbar";
import { t } from "i18next";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;
  

    return {
      props: {
        user
      },
    };
  },
  {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
);


function MyApp({ Component, pageProps,user }) {



  const [data, setData] = useState([{}])
  //const [isLoading, setLoading] = useState(false)
  const [isLoading, setLoading] = useState(false);
  const [updateSessionData, setUpdateSessionData]  =  useState(1);

  useEffect(() => {
  //  setLoading(true)
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
     //   setLoading(false)
     console.log('datadata',data)
        if(Object.keys(data).length != 0){
          localStorage.setItem("name", JSON.stringify(data.user));
        }
      })
  }, [updateSessionData])


  if (isLoading) return <p>{t('Loading')}...</p>
  if (!data) return <p>{t('no_profile_data')}</p>
  if(Object.keys(data).length === 0){
    return (
      <Notfound />
    )
  }else{
    return (
      <>
        
        <NextNProgress
          options={{ showSpinner: false }}
          color="#bc2263"
          startPosition={0.3}
          stopDelayMs={20000000000}
          height={3}
          showOnShallow={true}
        />
        <Provider store={store}>
        <Component {...pageProps} datauser={data}  updateSessionData={updateSessionData} setUpdateSessionData={setUpdateSessionData}/>
        </Provider>
      </> 
    );
    }
}
export default wrapper.withRedux(MyApp);

