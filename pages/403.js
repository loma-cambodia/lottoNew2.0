import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About403() {

  return (
    // <div className={`${styles.error} row`}>
    <div className='row errorBg'>
        <Head>
          <title>Loma Lotto - 403 Access Denied</title>
        </Head>

                        <div className={`errorBg col-md-7 col-12 px-0`}>
                            {/* <img src="img/error/403.jpg" style={{width: '100%',height: '100vh'}} alt="" /> */}
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
                            
                        <div className="col-md-5 col-12" style={{display: 'flex',justifyContent: 'center',alignItems: 'center', color:'#bf2262'}}>      
                            <div className="section-title text-center">
                                <h3 className="sub-title">Error 403 Access Denied</h3>
                                <span className="title">The page you’re looking for is now beyond our reach.</span>
                            </div>
                        </div>
    </div>
  );
}