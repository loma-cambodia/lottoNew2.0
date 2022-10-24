
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
        console.log('clear')
        $(':input').val(null)
        setInitData(initState)
        setGameList(games)
        setClear(true)
        isEveryInputFill()
    }

    function isEveryInputEmpty() {
        var allEmpty = true;
    
        // $(':input').each(function() {
        //     if ($(this).val() !== '') {
        //         allEmpty = false
        //     }
        // });

        if(initState !== initData || gameList !== games){
            allEmpty = true
        }
        else
            allEmpty = false
    
        setClear(allEmpty);
    }

    function isEveryInputFill() {

      
        var isAllFill = true
        var isGamesFill = true
        console.log('isEveryInputFill bfore: ',isAllFill,isGamesFill)
        $(':input').each(function() {
            if ($(this).val() == '') {
                isAllFill = false
            }
            else
            isAllFill = true
        });

        
            if(!gameList.dmc && !gameList.magnum && !gameList.toto)
            {
                isGamesFill = false
            }
            else
                isGamesFill = true

          if(isAllFill && isGamesFill){
            setSubmit(true)
          }
          else
          setSubmit(false)

          console.log('isEveryInputFill after: ',isAllFill,isGamesFill)
    }

    useEffect(()=>{
        isEveryInputEmpty()
        isEveryInputFill()
        console.log("empty fields: ", clear)
    },[initData,gameList])
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
                        <div className='col-md-5'>
                            <div className='row'>
                                <div className='col-lg-10 col-md-12 offset-lg-1'> 
                                    <div className='form-group'>
                                        <div className='row'>
                                            <div className='col-md-4 col-lg-5'>
                                                <b className='mb-2 d-block'>Company</b>
                                            </div>
                                            <div className='col-lg-7 col-md-8'>
                                                <div class="d-flex">
                                                    <div class="select-gp" id="checkboxes">
                                                        <ul id="checkboxes" class="list-inline">
                                                            <li class=" list-inline-item" onClick={()=> setGameList({...gameList,"magnum":!gameList.magnum})}>
                                                                <span class=" outer-circle-gp" title="Select">
                                                                    <span class="inner-circle-gp">
                                                                        <img className={`${gameList.magnum ? "button-able":"" } img-fluid`} src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png" />
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li class=" list-inline-item" onClick={()=> setGameList({...gameList,"dmc":!gameList.dmc})}>
                                                                <span class=" outer-circle-gp" title="Select">
                                                                    <span class="inner-circle-gp">
                                                                        <img className={`${gameList.dmc ? "button-able":"" } img-fluid`} src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png" />
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li class=" list-inline-item" onClick={()=> setGameList({...gameList,"toto":!gameList.toto})}>
                                                                <span class=" outer-circle-gp" title="Select">
                                                                    <span class="inner-circle-gp">
                                                                        <img className={`${gameList.toto ? "button-able":"" } img-fluid`} src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png" />
                                                                    </span>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div className='row'>
                                            <div className='col-lg-5 col-md-4'>
                                                <b className='mb-2 d-block'>Number</b>
                                            </div>
                                            <div className='col-lg-7 col-md-8'>
                                                <input type="text" className='form-control' 
                                                maxLength={4}
                                                minLength={3}
                                                onChange={(e) => setInitData({...initData,"bet_no":e.target.value})}/>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className='form-group'>
                                        <div className='row'>
                                            <div className='col-lg-5 col-md-4'>
                                                <b className='mb-2 d-block'>Bet Type</b>
                                            </div>
                                            <div className='col-lg-7 col-md-8'>
                                        <button type="button" className={initData && initData.bet_type && initData.bet_type == "S" ? 'btn btn-bordered-theme me-1 active-bet-type' : 'btn-custom-small me-1'} title={"Box"} onClick={(e) => setInitData({...initData,"bet_type":"S"})}>S</button>

                                        <button type="button" className={initData && initData.bet_type && initData.bet_type == "B" ? 'btn btn-bordered-theme me-1 active-bet-type' : 'btn-custom-small me-1'} title={"Box"} onClick={(e) => setInitData({...initData,"bet_type":"B"})}>{t('B')}</button>

                                        <button type="button" className={initData && initData.bet_type && initData.bet_type == "I" ? 'btn btn-bordered-theme me-1 active-bet-type' : 'btn-custom-small me-1'}  title={"iBox"} onClick={(e) => setInitData({...initData,"bet_type":"I"})}>{t('I')}</button>

                                        <button type="button" className={initData && initData.bet_type && initData.bet_type == "R" ? 'btn btn-bordered-theme me-1 active-bet-type' : 'btn-custom-small me-1'} title={t("Reverse")} onClick={(e) => setInitData({...initData,"bet_type":"R"})}>{t('R')}</button>
                                            </div>
                                        </div>
                                    </div>
                                    {initData.bet_no.length == 4 ? 
                                    <div>
                                        <div className='form-group'>
                                            <div className='row'>
                                                <div className='col-lg-5 col-md-4'>
                                                    <b className='mb-2 d-block'>Big</b>
                                                </div>
                                                <div className='col-lg-7 col-md-8'>
                                                    <input type="text" className='form-control' onChange={(e)=>setInitData({...initData,"big_bet":e.target.value})}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <div className='row'>
                                                <div className='col-lg-5 col-md-4'>
                                                    <b className='mb-2 d-block'>Small</b>
                                                </div>
                                                <div className='col-lg-7 col-md-8'>
                                                    <input type="text" className='form-control' onChange={(e)=>setInitData({...initData,"small_bet":e.target.value})}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     : 
                                    <div>
                                    <div className='form-group'>
                                        <div className='row'>
                                            <div className='col-lg-5 col-md-4'>
                                                <b className='mb-2 d-block'>3A</b>
                                            </div>
                                            <div className='col-lg-7 col-md-8'>
                                                <input type="text" className='form-control' onChange={(e)=>setInitData({...initData,"3A":e.target.value})}/>
                                            </div>
                                        </div>
                                    </div>
                                        <div className='form-group'>
                                            <div className='row'>
                                                <div className='col-lg-5 col-md-4'>
                                                    <b className='mb-2 d-block'>3C</b>
                                                </div>
                                                <div className='col-lg-7 col-md-8'>
                                                    <input type="text" className='form-control' onChange={(e)=>setInitData({...initData,"3C":e.target.value})}/>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                     } 
                                   
                                    
                                    <div className='form-group'>
                                    <div className='row'>
                                    <div className='col-md-6'>
                                        <div class="clearfix text-center"><span disabled={clear} role="button" className={`${clear ? "":"button-disable" } d-block btn-yellow rounded-full`} onClick={()=> clear? clearInputs():''} >CLEAR</span></div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="clearfix text-center"><span role="button" className={`${submit ? "":"button-disable" } d-block btn-yellow rounded-full`} onClick={()=> submit? combine():''}
                                        >Calculate</span></div>
                                    </div>
                                </div>
                                    </div>
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
  