import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About404() {

  return (
    <div className='row errorBg'>
        <Head>
          <title>Loma Lotto - 404 Access Denied</title>
        </Head>

                        <div className="d-flex align-items-center justify-content-center vh-100 ">
                            <div className="text-center">
                                <img src="img/LOGO MALAYSIA BACK-01.png" style={{width: '15%',height: 'auto',paddingBottom:'100px',paddingLeft:'15px'}} alt="" />
                                <br></br>
                                <img src="img/404-animated.gif" style={{width: '50%'}}  alt="" />
                                    <hr></hr>
                                    <h3 className="display-1 fw-bold">PAGE NOT FOUND</h3>
                                    <hr></hr>
                                    <p className="fs-3"> <span className="text-danger">Opps!</span> Status 404</p>
                                    <p className="lead">
                                        The page you are looking for might have been <span className="text-danger">removed</span>, had the name <span className="text-danger">changed</span> or it is temporary <span className="text-danger">unavailable</span>.
                                    </p>
                                    <Link href="/"><button type="button" className='btn btn-secondary' style={{color:'white'}}>Go Home</button></Link>
                            </div>
                        </div>
    </div>
  );
}