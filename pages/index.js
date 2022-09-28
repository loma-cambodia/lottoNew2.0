import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<nav class="navbar navbar-expand-lg bg-light fixed-top">
        <div class="container-fluid">
          <a class="navba`r-brand" href="#">
          <img src="img/ML.png"  width="150" height="74" ></img>
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Bettting</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">History</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Results</a>
              </li>
            </ul>
            <span class="navbar-text">
        Navbar text with an inline element
      </span>

          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          <Link href="/betting">Betting Page</Link>
          
        </h1>

      <div className='card container'>
          <div className="card-header" style={{display:'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
           <img src="img/delete.png" style={{width:'20px'}}></img>
           <div className='d-flex flex-column' >
             <b>Sushil</b>
             <span>Credit: <b>2600 VND</b></span> 


             
           </div>
          <div>
            <p href="#" className="card-link">Transaction History</p>
          </div>
          </div>
         
      </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
