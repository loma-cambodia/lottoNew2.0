import { useTranslation } from "react-i18next";
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About404() {

  const { t } = useTranslation();
  return (
    <div className="container">
    <div className='row align-items-center justify-content-center '>
        <Head>
          <title>Malaysia Lottery</title>
        </Head>

                        <div className="col-md-6">
                            <div className="text-center pt-3">
                                <img src="img/LOGO MALAYSIA BACK-01.png" style={{width: '150px',height: 'auto',paddingBottom:'',paddingLeft:'0', margin:'0 auto'}} alt="" />
                                <br></br>
                                <img src="img/404-animated.gif" style={{width: '100%'}}  alt="" />
                                    <hr></hr>
                                    <h3 className="fw-bold">PAGE NOT FOUND</h3>
                                    <h3 className="fw-bold">您所要访问的页面不存在</h3>
                                    <h3 className="fw-bold">រកមិនឃើញទំព័រ</h3>
                                    <hr></hr>
                                    <p className="fs-3"> <span className="text-danger">Opps!</span> Status 404</p>
                                    <p className="lead">
                                        The page you are looking for might have been removed, had the name changed or it is temporary unavailable.<br/>
                                        <a href="/" style={{color: '#be2263'}}>Return to the Home Page </a>
                                    </p>
                                    
                                    <p className="lead">
                                    您要查找的页面可能已被删除、名称已更改或暂时无法使用 <br/>
                                    <a href="/" style={{color: '#be2263'}}>返回主页</a>
                                    </p>
                                    
                                    <p className="lead">
                                       ទំព័រដែលអ្នកកំពុងស្វែងរកអាចត្រូវបានយកចេញ ប្តូរឈ្មោះរបស់វា ឬមិនមានជាបណ្តោះអាសន្ន<br/><a href="/" style={{color: '#be2263'}}>ត្រឡប់ទៅទំព័រដើមវិញ</a>
                                    </p>
                                    
                            </div>
                        </div>
    </div>
    </div>
  )
};