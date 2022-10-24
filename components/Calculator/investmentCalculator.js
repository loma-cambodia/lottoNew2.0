
import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
const InvestmentCalculator = ({_calculatorOdds}) => {
  const { t } = useTranslation();
const Odds = _calculatorOdds
  const [totalBetAmount, setTotalBetAmount]=useState(0);
  const numberValue = ''
  const bigValue = 0
  const smallValue = ''
  const threeAValue = ''
  const threeCValue = ''
  const isFourDigit = false
  const game = ''
  const totalBet = ''
  const gameID = 1
 function Calculate() {
    if(game == 'Box'){
        bigValue = bigValue
        let total_Sum = Number(bigValue) + Number(smallValue)
        let total = total_Sum * 24
        let distribute = Math.floor(total_Sum / 2)
        console.log("Box Win_BIG : "+ distribute);
        console.log("Box Win_Small : "+ distribute);
        setTotalBetAmount(total_Sum)
    }else if(game == 'iBox'){
        let total_Sum = Number(bigValue) + Number(smallValue)
        let total = Math.trunc(total_Sum / 24).toFixed(2)
        let distribute = Math.floor(total / 2).toFixed(2) 
        setTotalBetAmount(total_Sum)
        console.log("IBOX TOTAL : ",total)
        console.log("IBOX Win_BIG : "+ distribute);
        console.log("IBOX Win_Small : "+ distribute);
    }else if(game == 'Reverse'){
        let total_Sum = Number(bigValue) + Number(smallValue)
        let total = Math.trunc(total_Sum / 24).toFixed(2)
        let distribute = Math.floor(total / 2).toFixed(2) 
        setTotalBetAmount(total_Sum)
        console.log("Reverse TOTAL : ",total)
        console.log("Reverse Win_BIG : "+ distribute);
        console.log("Reverse Win_Small : "+ distribute);
    }
    else{
        alert("NO SELECTED GAME")
    }
  }
    function gameSelect(e){
        game = e
        console.log("Game Select: ",e)
    }
    const numberInputHandler = (getValue) => {
        numberValue = getValue
        console.log( numberValue)

        if(getValue.length == 3){
            console.log("3A/3C")
        }else if(getValue.length == 4){
            isFourDigit = true
            console.log("BIG/SMALL",isFourDigit)
        }
    }
    const bigInputHandler = (getValue) => {
        bigValue = getValue
        console.log( bigValue)

        if(getValue.length == 3){
            console.log("3A/3C")
        }else if(getValue.length == 4){
            console.log("BIG/SMALL")
        }
    }
    const smallInputHandler = (getValue) => {
        smallValue = getValue
        console.log( smallValue)
        if(getValue.length == 3){
            console.log("3A/3C")
        }else if(getValue.length == 4){
            console.log("BIG/SMALL")
        }
    }
    function WinningData({oddsData}){
       
        
        
        if(oddsData){
            console.log(oddsData)
            // const get = Number(bigValue) * oddsData.big_first
            const big = Number(bigValue + oddsData.big_first)
            console.log("bigbig",bigValue)
        return (
            <>
                         <div className='col-md-7'>
                            <div className='absolute-div'>
                                <div className='inner-abs-div'>
                                    <h5 className='text-uppercase text-center text-white'>Results</h5>
                                    <div className='company-type-heading d-flex align-items-center'>
                                        <div className='comapny-type-logo me-3'>
                                            <img src={oddsData.game_play.logo_url}/>
                                        </div>
                                        <div className='company-type-name text-white'>{oddsData.game_play.name}</div>
                                    </div>
                                    <div className='first-2-lines my-3'>
                                        <table>
                                            <tr>
                                                <td>Total No’s Beted</td>
                                                <td className='text-end fw-bold'>1</td>
                                            </tr>
                                            <tr>
                                                <td>Total Bet Amount</td>
                                                <td className='text-end fw-bold'>{totalBetAmount}</td>
                                            </tr>
                                        </table>
                                    </div>
                                 <div className='bottom-3-col'>
                                        <div className='row'>
                                            <div className='col'>
                                                <div className='prize-div'>
                                                    <div className='heading-part'>Prize</div>
                                                    <div className='prize-content-part'>
                                                        <table className='table'>
                                                            <tr>
                                                                <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>1st</div></td>
                                                            </tr>
                                                            <tr>
                                                                <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>2nd</div></td>
                                                            </tr>
                                                            <tr>
                                                                <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>3rd</div></td>
                                                            </tr>                                                            
                                                            <tr>
                                                                <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>Special</div></td>
                                                            </tr>
                                                            <tr>
                                                                <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>Consolation</div></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='w-amt-div'>
                                                    <div className='w-amt-heading'>Winning Amount</div>
                                                    <div className='blank-div'></div>
                                                    <div className='prize-content-part'>
                                                        <table className='table'>
                                                            <tr>
                                                                <td><div className='w-amt text-end'>{oddsData.big_first + oddsData.small_first}</div></td>
                                                                {/* <td><div className='w-amt text-end'>{big * oddsData.big_first}</div></td>
                                                                <td><div className='w-amt text-end'>{small * oddsData.small_first}</div></td> */}
                                                            </tr>
                                                            <tr>
                                                                <td><div className='w-amt text-end'>{oddsData.big_second + oddsData.small_second}</div></td>
                                                                {/* <td><div className='w-amt text-end'>{big * oddsData.big_second}</div></td>
                                                                <td><div className='w-amt text-end'>{small * oddsData.small_second}</div></td> */}
                                                            </tr>
                                                            <tr>
                                                                <td><div className='w-amt text-end'>{oddsData.big_third + oddsData.small_third}</div></td>
                                                            </tr>
                                                            <tr>
                                                                <td><div className='w-amt text-end'>{oddsData.big_special}</div></td>
                                                                {/* <td><div className='w-amt text-end'>{ oddsData.big_special * bigValue}</div></td> */}

                                                            </tr>
                                                            <tr>
                                                                <td><div className='w-amt text-end'>{oddsData.big_consolation}</div></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='w-amt-div'>
                                                    <div className='w-amt-heading'>Odds</div>
                                                    <div className='prize-content-part'>
                                                    <table className='table text-white'>
                                                            <tr>
                                                                <th className='text-end py-2'>Big</th>
                                                                <th className='text-end py-2'>Small</th>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-end py-2'>{oddsData.big_first}</td>
                                                                <td className='text-end py-2'>{oddsData.small_first}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-end py-2'>{oddsData.big_second}</td>
                                                                <td className='text-end py-2'>{oddsData.small_second}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-end py-2'>{oddsData.big_third}</td>
                                                                <td className='text-end py-2'>{oddsData.small_third}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-end py-2'>{oddsData.big_special}</td>
                                                                <td className='text-end py-2'>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-end py-2'>{oddsData.big_consolation}</td>
                                                                <td className='text-end py-2'>-</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
            </>
        )
    }
        
    }
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
                                        <input minlength={3} maxLength={4} type="text"  onChange={(e) => numberInputHandler(e.target.value)}  className='form-control' />
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
                                                <ul id="checkboxes" class="list-inline">
                                                    <li class=" list-inline-item">
                                                        <span class=" outer-circle-gp" title="Select">
                                                            <span class="inner-circle-gp">
                                                                <img class="img-fluid" src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png" />
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li class=" list-inline-item">
                                                        <span class=" outer-circle-gp" title="Select">
                                                            <span class="inner-circle-gp">
                                                                <img class="img-fluid" src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png" />
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li class=" list-inline-item">
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
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>Bet Type</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" onClick={() => gameSelect('Box')} class="btn-custom-small me-3" title="Box">B</button>
                                            <button type="button"  onClick={() => gameSelect('iBox')} class="btn-custom-small me-3" title="iBox">I</button>
                                            <button type="button"  onClick={() => gameSelect('Reverse')} class="btn-custom-small" title="Reverse">R</button>
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
                                        <input onChange={(e) => bigInputHandler(e.target.value)} type="number" className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>Small</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <input onChange={(e) => smallInputHandler(e.target.value)} type="number" className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>3A</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <b>3C</b>
                                    </div>
                                    <div className='col-md-8'>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div class="clearfix text-center"><span role="button" class="d-block btn-yellow rounded-full">CLEAR</span></div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="clearfix text-center"><span role="button" onClick={Calculate} class="d-block btn-yellow rounded-full">Calculate</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                                    <WinningData oddsData={Odds[gameID]}/>
                                
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
  export default InvestmentCalculator;
  