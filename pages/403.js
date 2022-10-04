import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function About403() {

  return (
    // <div className={`${styles.error} row`}>
    <div className='row' style={{margin: '0',padding: '0',height:'100vh'}}>
        <Head>
            <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet"/>
          <link href="assets/css/style.css" rel="stylesheet"/>
          <link href="assets/css/owl.carousel.css" rel="stylesheet"/>
          <link href="assets/css/owl.theme.default.css" rel="stylesheet"/>
        <title>Loma Lotto - 403 Access Denied</title>
        </Head>
                        
                            <div id='bigScreen'>
                                <div className="col-12 errorBg text-center" style={{}}>
                                    <img src="img/error/403-animated.gif" style={{width:'90%'}} alt="" />
                                </div>
                                <div className="col-12" style={{display: 'flex',justifyContent: 'center',alignItems: 'flex-start',paddingTop:'100px'}}>      
                                    <div className="section-title text-center">
                                        <h1 className="sub-title">Access Denied / Forbidden</h1>
                                        <h4 className="" style={{fontWeight: 'normal'}}>The page or resource you’re trying to reach is absolutely forbbiden for some reason.</h4>
                                    </div>
                                </div>
                            </div>

                          <div id='smallScreen'>
                              <div className="col-12 text-center" style={{marginBottom:'20%'}}>
                                  <img src="img/error/403-animated-mobile.gif" style={{width:'75%'}} alt="" />
                              </div>
                              <div className="col-12" style={{display: 'flex',justifyContent: 'center',alignItems: 'flex-start'}}>      
                                    <div className="section-title text-center">
                                        <h2 className="sub-title">Access Denied / Forbidden</h2>
                                        <span className="" style={{fontSize:'1.25rem'}}>The page or resource you’re trying to reach is absolutely forbbiden for some reason.</span>
                                    </div>
                                </div>
                          </div>
                        
                       
                        {/* <div className="error-page-menu">
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a className="single-menu">Homepage</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/lotteries">
                                            <a className="single-menu">Betting</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/history">
                                            <a className="single-menu">History</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/result">
                                            <a className="single-menu">Result</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
    </div>
  );
}