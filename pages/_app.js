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
import {setUserDataFormat} from '../components/Utils';

import { useIdleTimer } from 'react-idle-timer'
import { useDispatch, useSelector } from "react-redux";

import axios from 'axios';
import LogoutModal from "../components/modal/logoutModal";

let logoutTimeInIdealCondition = process.env.logoutTimeInIdealCondition;

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
  const dispatch = useDispatch();
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false);
  const [updateSessionData, setUpdateSessionData] = useState(1);
  const [isIdleData,setIdleData] = useState(false)
  let timeoutSetting = logoutTimeInIdealCondition * 60 * 1000;

  axios.interceptors.request.use(
    
    config => {
      const token = user && user._auth && user._auth.auth && user._auth.auth.token ? user._auth.auth.token : "";
      //if (token) {
       // config.headers['Authorization'] = 'Bearer ' + token
        //config.headers['send'] = 'Bearer ' + token
      //}
      // config.headers['Content-Type'] = 'application/json';
      
      return config
    },
    error => {
      Promise.reject(error)
    }
  )
  
  
  axios.interceptors.response.use(
    response => {
      console.log('interceptor ivoked - response', response)
      return response
    },
    async function (error) {
      const originalRequest = error.config
      console.log('interceptor ivoked - response error.response.status', error.response.status)
  
      if (error.response.status === 401) {
        console.log('auAuthrized code');
        userLogout()
      }
      return Promise.reject(error)
    }
  )

  //console.log('data.user.data:',data.user.data);
  const onIdle = () => {
    setIdleData(true)
    userLogoutPopUp()
  }
  const {
    isIdle,
  } = useIdleTimer({
    onIdle,
    timeout: timeoutSetting,
    promptTimeout: 0,
    events: [
      'mousemove',
      'keydown',
      'wheel',
      'DOMMouseScroll',
      'mousewheel',
      'mousedown',
      'touchstart',
      'touchmove',
      'MSPointerDown',
      'MSPointerMove',
      'visibilitychange'
    ],
    immediateEvents: [],
    debounce: 0,
    throttle: 0,
    eventsThrottle: 200,
    startOnMount: true,
    startManually: false,
    stopOnIdle: false,
    crossTab: false,
    name: 'idle-timer',
    syncTimers: 200,
    leaderElection: false
  })
  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => {
        let newData = {};
      if(data && data.user && data.user.data){



        newData = setUserDataFormat(data);
      }
        setData({user:{data:newData}});
        localStorage.setItem("kk_lotto_token", newData.token)
      })
  }, [updateSessionData])

  const userLogout = () => {

    let member_id = data && data.user && data.user.data && data.user.data.id ? data.user.data.id : 0;
   // console.log('member_id":',member_id);
    fetch(`/api/logout?member_id=${member_id}`)
      .then((res) => {
        let response = res.json();
       // console.log('userLogout:res:',res);
        setData({user:{data:{}}})
        dispatch({
          type: "AUTH_LOGOUT"
        });
      })
  }

  const userLogoutPopUp = () => {

    let member_id = data && data.user && data.user.data && data.user.data.id ? data.user.data.id : 0;
    fetch(`/api/logout?member_id=${member_id}`)
      .then((res) => {
        let response = res.json();

      })
  }

  if (isLoading) return <p>{t('Loading')}...</p>
 // if (!data) return <p>{t('no_profile_data')}</p>
 if (!data) return <p>{t('Loading')}</p>
  if(Object.keys(data.user.data).length === 0){
    return (
      <Notfound action={'0'} />
    )
  }else{
    if(data.user.data.merchantActive === 0 || data.user.data.merchantActive == 'Disabled'){
      return (
        <Notfound _action={'1'} datauser={data} />
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
          <LogoutModal _logoutStatus={isIdleData} _memberId={data && data.user && data.user.data && data.user.data.id ? data.user.data.id : 0}/>
          </Provider>
        </> 
      );
    }
  }
}
export default wrapper.withRedux(MyApp);

