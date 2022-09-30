import Head from 'next/head'
import Link from 'next/link'

export default function About403() {

  return (
    <div>
        <Head>
          <title>Loma Lotto - 403 Access Denied</title>
        </Head>

        <div className="error ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-10">
                        <div className="part-img">
                        {/* <p>To KK lotto <a className='btn btn-primary text-light'> <Link href="/api/login"> Login </Link> </a> ,
                         To KK-2 lotto <a className='btn btn-danger text-light'> <Link href="/api/login"> Login </Link></a></p> */}
                            <img src="img/error/error-access.jpg" alt="" />
                        </div>
                        <div className="part-text">      
                            <div className="section-title">
                                <h3 className="sub-title">Error 403 Access Denied</h3>
                                <h2 className="title">The page you’re looking for is now beyond our reach.</h2>
                            </div>
                            <p>Let’s get you back in home at <span className="back-time">00:00:05</span> or browse instead <i className="fa-solid fa-arrow-turn-down"></i></p>
                            <div className="error-page-menu">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}