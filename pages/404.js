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
                                <img src="img/LOGO MALAYSIA BACK-01.png" style={{width: '15%',height: 'auto',paddingBottom:'100px',paddingLeft:'15px'}} alt="" />
                                <br></br>
                                <img src="img/404-animated.gif"  alt="" />
                                    <hr></hr>
                                    <h3 class="display-1 fw-bold">PAGE NOT FOUND</h3>
                                    <hr></hr>
                                    <p class="fs-3"> <span class="text-danger">Opps!</span> Status 404</p>
                                    <p class="lead">
                                        The page you’re looking for might have been removed, had the name changed or it's temporary unavailable.
                                    </p>
                                    <Link href="/"><button className='btn btn-outline' style={{backgroundColor:'#c12362',color:'white'}}>Go Home</button></Link>
                            </div>
                        </div>
    </div>
  );
}