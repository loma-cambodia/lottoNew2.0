import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About404() {

  return (
    <div className='row errorBg'>
        <Head>
          <title>Loma Lotto - 404 Access Denied</title>
        </Head>

                        <div class="d-flex align-items-center justify-content-center vh-100 ">
                            <div class="text-center">
                                <img src="img/LOGO MALAYSIA BACK-01.png" style={{width: '30%',height: '15vh'}} alt="" />
                                <br></br>
                                <img src="img/404-animated.gif"  alt="" />
                                    <hr></hr>
                                    <h3 class="display-1 fw-bold">PAGE NOT FOUND</h3>
                                    <hr></hr>
                                    <p class="fs-3"> <span class="text-danger">Opps!</span> Status 404</p>
                                    <p class="lead">
                                        The page you’re looking for might have been removed, had the name changed or it's temporary unavailable.
                                    </p>
                                    <a href="index.html" class="btn btn-primary">Go Home</a>
                            </div>
                        </div>
    </div>
  );
}