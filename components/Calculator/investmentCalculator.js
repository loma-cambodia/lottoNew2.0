
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from 'react';
import { combineReducers } from "redux";

import $ from 'jquery'; 

const initState = {
    "bet_no": '',
    "bet_type":'S',
    "big_bet":'',
    "small_bet":'',
    "3A":'',
    "3C":'',
    "company":''
}
const games = {
    "magnum":false,
    "toto":false,
    "dmc":false
}
const InvestmentCalculator = () => {
  const { t } = useTranslation();

    const [initData, setInitData] = useState(initState);
    const [gameList, setGameList] = useState(games);
    const [clear, setClear] = useState(true);
    const [submit, setSubmit] = useState(false);

    const [active, setActive] = useState(false);

    const combine =()=>{
        console.log("initData:",initData)
        console.log("gameslist:",gameList)

        // setInitData({...initData,"company":gameList})
        Object.assign(initData,{"company":gameList})
        console.log("calculateData:",initData)
    }

    const clearInputs = () => {
        $(':input').value = ''
    }

    function isEveryInputEmpty() {
        var allEmpty = true;
    
        $(':input').each(function() {
            if ($(this).val() !== '') {
                setClear(false)
            }
        });
    
        return allEmpty;
    }

    function isEveryInputFill() {
        const object = { a: 1, b: 2, c: 3 };

        for (const property in initData) {
        //   console.log(`${property}: ${initData[property]}`);
          if(initData[property] == '')
          {
            setSubmit(false)
          }
        }

        for (const property in gameList) {
            // console.log(`${property}: ${gameList[property]}`);
            if(gameList[property] == '')
            {
              setSubmit(false)
            }
          }
    }

    useEffect(()=>{
        isEveryInputEmpty()
        console.log("empty fields: ", clear)
    },[initData,games])
    return (
      <>
       <section className="bg-light custom-padding">
            <div className="container">
                <div className="heading-part text-center mb-4">
                    {/* <h5 className="text-uppercase fw-bold">{t('how_to')}</h5> */}
                    <h2 className="text-uppercase text-color-main fw-bold">{t('Investment Calculator')}</h2>
                </div>
                <div className='back-section'>
                    <div className='row align-items-center'>
                        <div className='col-md-5 col-sm-5'>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>Number</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <input type="text" className='form-control'
                                        maxLength={4}
                                        minLength={3}
                                        onChange={(e) => setInitData({...initData,"bet_no":e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>  
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>Company</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <div class="d-flex">
                                            <div class="select-gp" id="checkboxes">
                                                

                                                    <div>
                                            <div className="d-flex">
                                                <div className='round'/>
                                                <div className="select-gp" id="checkboxes">
                                                <ul id="checkboxes" class="list-inline">
                                                    <li class=" list-inline-item" onClick={()=> setGameList({...gameList,"magnum":!gameList.magnum})}>
                                                        <span class=" outer-circle-gp" title="Select">
                                                            <span class="inner-circle-gp">
                                                                <img class="img-fluid" src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png" />
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li class=" list-inline-item" onClick={()=> setGameList({...gameList,"dmc":!gameList.dmc})}>
                                                        <span class=" outer-circle-gp" title="Select">
                                                            <span class="inner-circle-gp">
                                                                <img class="img-fluid" src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png" />
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li class=" list-inline-item" onClick={()=> setGameList({...gameList,"toto":!gameList.toto})}>
                                                        <span class=" outer-circle-gp" title="Select">
                                                            <span class="inner-circle-gp">
                                                                <img class="img-fluid" src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png" />
                                                            </span>
                                                        </span>
                                                    </li>
                                                    </ul>                       
                        
                                                        </div>
                                                    </div>
                                                </div>

                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>Bet Type</b>
                                    </div>
                                    <div className='col-md-8'>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className={initData && initData.bet_type && initData.bet_type == "S" ? 'btn-custom-small-disabled me-1' : initData && initData.bet_type && initData.bet_type == "S" ? 'btn-custom-small me-1 active-bet-type' : 'btn-custom-small me-1'} title={"Box"} onClick={(e) => setInitData({...initData,"bet_type":"S"})}>S</button>

                                        <button type="button" className={initData && initData.bet_type && initData.bet_type == "B" ? 'btn-custom-small-disabled me-1' : initData && initData.bet_type && initData.bet_type == "B" ? 'btn-custom-small me-1 active-bet-type' : 'btn-custom-small me-1'} title={"Box"} onClick={(e) => setInitData({...initData,"bet_type":"B"})}>{t('B')}</button>

                                        <button type="button" className={initData && initData.bet_type && initData.bet_type == "I" ? 'btn-custom-small-disabled me-1' : initData && initData.bet_type && initData.bet_type == "I" ? 'btn-custom-small me-1 active-bet-type' : 'btn-custom-small me-1'}  title={"iBox"} onClick={(e) => setInitData({...initData,"bet_type":"I"})}>{t('I')}</button>

                                        <button type="button" className={initData && initData.bet_type && initData.bet_type == "R" ? 'btn-custom-small-disabled' : initData && initData.bet_type && initData.bet_type == "R" ? 'btn-custom-small active-bet-type' : 'btn-custom-small'} title={t("Reverse")} onClick={(e) => setInitData({...initData,"bet_type":"R"})}>{t('R')}</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>Big</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <input type="text" className='form-control' 
                                        onChange={(e)=>setInitData({...initData,"big_bet":e.target.value})}/>
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>Small</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <input type="text" className='form-control' 
                                        onChange={(e)=>setInitData({...initData,"small_bet":e.target.value})}/>
                                        </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>3A</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <input type="text" className='form-control' 
                                        onChange={(e)=>setInitData({...initData,"3A":e.target.value})}/>
                                        </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>3C</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <input type="text" className='form-control' 
                                        onChange={(e)=>setInitData({...initData,"3C":e.target.value})}/>
                                        </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div class="clearfix text-center"><span disabled={clear} role="button" className={`${clear ? "button-disable":"" } d-block btn-yellow rounded-full`} onClick={()=> clearInputs()} >CLEAR</span></div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="clearfix text-center"><span role="button" className={`${submit ? "button-disable":"" } d-block btn-yellow rounded-full`} onClick={()=>combine()}
                                        >Calculate</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7  col-sm-7'>
                            <div className='absolute-div'>
                                <div className='inner-abs-div'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
  export default InvestmentCalculator;
  