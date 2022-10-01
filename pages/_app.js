import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

// import '../styles/globals.css';
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import React,{ useState,useEffect } from "react";
import Notfound from './403';

function MyApp({ Component, pageProps }) {


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
  // console.log(data);
  if(Object.keys(data).length === 0){
    return (
      <Notfound />
    )
  }else{
    return (
      <>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
      </> 
    );
    }
}
export default wrapper.withRedux(MyApp);

