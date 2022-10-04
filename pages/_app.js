import "bootstrap/dist/css/bootstrap.min.css";; // Import bootstrap CSS

// import '../styles/globals.css';
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import React,{ useState,useEffect } from "react";
import Notfound from './403';
import { withIronSessionSsr } from "iron-session/next";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;
   console.log(user);
  

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


  console.log('user1222:',user);


  const [data, setData] = useState([{abc:'1'}])
  //const [isLoading, setLoading] = useState(false)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
  //  setLoading(true)
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
     //   setLoading(false)
        console.log('data:', data);
        if(Object.keys(data).length != 0){
          localStorage.setItem("name", JSON.stringify(data.user));
        }
      })
  }, [])


  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
   console.log('data111:', data);
  if(Object.keys(data).length === 0){
    return (
      <Notfound />
    )
  }else{
    return (
      <>
      <Provider store={store}>
      <Component {...pageProps} datauser={data}/>
      </Provider>
      </> 
    );
    }
}
export default wrapper.withRedux(MyApp);

