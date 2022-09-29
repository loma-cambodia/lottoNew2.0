import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {speedUp,getUsers} from '../store/actions/index';
import { useDispatch, useSelector } from "react-redux";


const Betting = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const data = {"3d":true, "4d":false}
  const [initData, setInitData] = useState(data);

  useEffect(() => {
    // Update the document title using the browser API
  //  document.title = `You clicked ${count} times`;
  console.log('11111111');
  //dispatch(speedUp({}));
  dispatch(getUsers());

  },[dispatch]);



  let users = useSelector(state => state.users);
  let state = useSelector(state => state);

  console.log('users:', users);
  console.log('state:', state)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg justify-content-center"> 
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src="img/LOGO MALAYSIA BACK-01.png"  width="150" height="74" ></img>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav" style={{display:'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Bettting</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">History</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Results</a>
              </li>
            </ul>
          </div>
          <div className=" navbar-nav me-auto mb-2 mb-lg-0">
          <ul className="navbar-nav flex-row d-none d-md-flex " >
              <li className="nav-item">
                <a className="nav-link">
                  John_0786
                  <br/>
                  102,84665.00 <button className="btn btn-warning btn-sm rounded-pill">VND</button>
                  </a>
              </li>
            </ul>
          </div>
          <div className=" navbar-nav me-auto mb-2 mb-lg-0">
            <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-warning  form-control mr-sm-2 fw-normal">PLAY LOTTERY</button>
            </form>
            <ul className='navbar-nav  '>
                 <li className='nav-item'>
                <a className='nav-link'><img
            src="img/photo_2022-09-28 16.33.50.jpeg"
            className="rounded-circle"
            height="20"
            loading="lazy"
          /></a>
              </li>
              <li className='nav-item'>
                <a className='nav-link'>ENG!</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <main className={styles.main}>
      
      {/* Banner */}
      <div className={styles.banner}>
        <div className='container'>
        <h3>BETTING</h3>
        <p className='font-weight-lght'>Home / Betting</p>
        </div>
       
      </div>
      <div>

      </div>

      <div id={styles.checkboxes} className='row text-center'>
      <div className='col'>
          <input type="radio" id="3D" name="flexRadioDefault" onChange={() => setInitData(!initData['3d'])} checked={!initData['3d']}/>
          <label for="3D">
            <img className={styles.selectBet} src={`${!initData['3d'] ? "img/Yellow_3d.png":"img/red_3d.png"}`}></img>
          </label>
      </div>

        <div className='col'>
          <input type="radio" id="4D" name="flexRadioDefault" onChange={() => setActive(!active)}/>
          <label for="4D">
            <img className={styles.selectBet} src={`${!active ? "img/Yellow_4d.png":"img/red_4d.png"}`}></img>
          </label>
        </div>
      </div>

      <form className='row container' id={styles.checkboxes}>
            <input  className="form-check-input" name='bet_date' type="checkbox" id="option1"/>
            <label className={`${styles.datePick} form-check form-check-inline d-flex flex-column col`} for="option1">
                    <b>Tuesday</b>
                    <span>20 Sep 2022</span> 
            <div className={`${styles.gamesPicker} ${styles.checkboxes}`}>
                  <input type="checkbox" id="damacai" />
                  <label className={styles.gamesPicked} for="damacai">
                    <img style={{maxWidth:'30px'}} src="img/logo da MACAI.png"></img>
                  </label>
                  <input type="checkbox" id="magnum" />
                  <label className={styles.gamesPicked} for="magnum">
                      <img style={{maxWidth:'30px'}} src="img/LOGO Magnum.png"></img>
                    </label>
                  <input type="checkbox" id="toto" />
                  <label className={styles.gamesPicked} for="toto">
                      <img style={{maxWidth:'30px'}} src="img/LOGO TOTO.png"></img>
                  </label>
            </div>
            </label>
            <input  className="form-check-input" name='bet_date' type="checkbox" id="option2"/>
            <label className={`${styles.datePick} form-check form-check-inline col d-flex flex-column`} for="option2">
                    <b>Tuesday</b>
                    <span>20 Sep 2022</span> 
                    <div className={`${styles.gamesPicker} ${styles.checkboxes}`}>
              <input type="checkbox" id="damacai1" />
              <label className={styles.gamesPicked} for="damacai1">
                <img style={{maxWidth:'30px'}} src="img/logo da MACAI.png"></img>
              </label>
              <input type="checkbox" id="magnum1" />
              <label className={styles.gamesPicked} for="magnum1">
                  <img style={{maxWidth:'30px'}} src="img/LOGO Magnum.png"></img>
                </label>
              <input type="checkbox" id="toto1" />
              <label className={styles.gamesPicked} for="toto1">
                  <img style={{maxWidth:'30px'}} src="img/LOGO TOTO.png"></img>
                </label>
          </div>
            </label>
            <input  className="form-check-input" name='bet_date' type="checkbox" id="option3"/>
            <label className={`${styles.datePick} form-check form-check-inline col d-flex flex-column`} for="option3">
                    <b>Tuesday</b>
                    <span>20 Sep 2022</span> 
                    <div className={`${styles.gamesPicker} ${styles.checkboxes}`}>
              <input type="checkbox" id="damacai2" />
              <label className={styles.gamesPicked} for="damacai2">
                <img style={{maxWidth:'30px'}} src="img/logo da MACAI.png"></img>
              </label>
              <input type="checkbox" id="magnum2" />
              <label className={styles.gamesPicked} for="magnum2">
                  <img style={{maxWidth:'30px'}} src="img/LOGO Magnum.png"></img>
                </label>
              <input type="checkbox" id="toto2" />
              <label className={styles.gamesPicked} for="toto2">
                  <img style={{maxWidth:'30px'}} src="img/LOGO TOTO.png"></img>
                </label>
          </div>
            </label>
            
            <input  className="form-check-input" name='bet_date' type="checkbox" id="option4"/>
            <label className={`${styles.datePick} form-check form-check-inline col d-flex flex-column`} for="option4">
                    <b>Tuesday</b>
                    <span>20 Sep 2022</span> 
                    <div className={`${styles.gamesPicker} ${styles.checkboxes}`}>
              <input type="checkbox" id="damacai3" />
              <label className={styles.gamesPicked} for="damacai3">
                <img style={{maxWidth:'30px'}} src="img/logo da MACAI.png"></img>
              </label>
              <input type="checkbox" id="magnum3" />
              <label className={styles.gamesPicked} for="magnum3">
                  <img style={{maxWidth:'30px'}} src="img/LOGO Magnum.png"></img>
                </label>
              <input type="checkbox" id="toto3" />
              <label className={styles.gamesPicked} for="toto3">
                  <img style={{maxWidth:'30px'}} src="img/LOGO TOTO.png"></img>
                </label>
          </div>
            </label>
            
      </form>
              <div style={{overflowX: 'scroll!important'}}>
                
                        <table className='table container align-middle' style={{border: '5px', borderColor:'darkgray'}}>
                          <thead className='border-white'>
                            <tr className='text-center'>
                              <th></th>
                            <th>Number</th>
                            <th>Big/3A</th>
                            <th>Small/3C</th>
                            <th>Bet Type</th>
                            <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody >
                          <tr>
                            <th>
                              <div className={styles.betTableNumber}>
                                  1
                                </div>
                            </th>
                            <td>
                              <input className={`${styles.betTextBox} form-control`} type="text"/>
                            </td>
                            <td>
                              <input className={`${styles.betTextBox} form-control`} type="text" />
                            </td>
                            <td>
                              <input className={`${styles.betTextBox} form-control`} type="text"/>
                            </td>
                            <td className='d-flex' id={styles.checkboxes}>              
                                  <input type="checkbox" name="rGroup" value="1" id="r1"/>
                                  <label className={`${styles.betTypePick} col`} for="r1">
                                      <span style={{position: 'relative',bottom:'10px'}}>B</span>
                                  </label>
                                  <input type="checkbox" name="rGroup" value="2" id="r2"/>
                                  <label className={`${styles.betTypePick}  col`} for="r2">
                                    <span style={{position: 'relative',bottom:'10px'}}>I</span>
                                  </label>
                                
                                    <input type="checkbox" name="rGroup" value="3" id="r3"/>
                                    <label className={`${styles.betTypePick} col`} for="r3">
                                      <span style={{position: 'relative',bottom:'10px'}}>R</span>
                                    </label>
                                    
                            </td>
                            <td>
                                <input className={`${styles.betTextBox} form-control`} type="text"/>
                            </td>
                            <td>
                              <img style={{maxWidth:'30px'}} src="img/delete.png"></img>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <div className={styles.betTableNumber}>
                                  2
                                </div>
                            </th>
                            <td>
                              <input className={`${styles.betTextBox} form-control`} type="text"/>
                            </td>
                            <td>
                              <input className={`${styles.betTextBox} form-control`} type="text" />
                            </td>
                            <td>
                              <input className={`${styles.betTextBox} form-control`} type="text"/>
                            </td>
                            <td className='d-flex' id={styles.checkboxes}>              
                                  <input type="checkbox" name="rGroup" value="1" id="s1"/>
                                  <label className={`${styles.betTypePick} col`} for="s1">
                                      <span style={{position: 'relative',bottom:'10px'}}>B</span>
                                  </label>
                                  <input type="checkbox" name="rGroup" value="2" id="s2"/>
                                  <label className={`${styles.betTypePick}  col`} for="s2">
                                    <span style={{position: 'relative',bottom:'10px'}}>I</span>
                                  </label>
                                
                                    <input type="checkbox" name="rGroup" value="3" id="s3"/>
                                    <label className={`${styles.betTypePick} col`} for="s3">
                                      <span style={{position: 'relative',bottom:'10px'}}>R</span>
                                    </label>
                                    
                            </td>
                            <td>
                                <input className={`${styles.betTextBox} form-control`} type="text"/>
                            </td>
                            <td>
                              <img style={{maxWidth:'30px'}} src="img/delete.png"></img>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        
                        <div className={`${styles.betTotal} container`} >
                              <div>
                                <b>
                                  Total Stake
                                </b>
                                <label className='px-3'>
                                  216.00
                                </label>
                              </div>
                            <div>
                              <button type="button" className={`${styles.boxStyle} mx-5`} style={{background:'white',fontWeight:'bold',padding: '10px 30px'}}>
                                Clear
                              </button>
                              <button type="button" className={`${styles.boxStyle}`} style={{background:'#bf2262' ,fontWeight:'bold' ,color:'white',padding: '10px 30px'}}>
                                Submit
                              </button>
                            </div>
                          </div>
              </div>

      </main>

      <footer className={styles.footer}>
      <div className="container-fluid">
      <div className="row">
      <div className="col-4" style={{display:'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <img src="img/ML.png" className='' width="150" height="74"/>
        </div>
        <div className="col-8 d-flex flex-column align-items-end" style={{display:'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}> 
          <ul className="nav col-md-8 justify-content-end">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Betting</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">History</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Results</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Play Lottery</a></li>
            <br></br>
            <p className="">
          Copyright© 2022. AllRight Reserved By PokLotto
          </p>
          </ul>
        </div>
      </div>
      
      </div>
      </footer>
      
    </div>
  )
}
export default Betting;