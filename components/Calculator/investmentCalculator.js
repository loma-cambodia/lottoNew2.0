
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from 'react';
import { combineReducers } from "redux";

import $ from 'jquery'; 
import { twoDecimalPlaceWithAmount } from "../Utils";

const initState = {
    "bet_no": '',
    "bet_type":'S',
    "big_bet":'',
    "small_bet":'',
    "three_A":'',
    "three_C":'',
    "company":''
}
const games = {
    "magnum":false,
    "toto":false,
    "dmc":false
}

const InvestmentCalculator = ({_calculatorOdds}) => {
  const { t } = useTranslation();

    const Odds =_calculatorOdds;
    const [amounts, setAmounts] = useState(initState);
    const [initData, setInitData] = useState(initState);
    const [gameList, setGameList] = useState(games);
    const [clear, setClear] = useState(true);
    const [submit, setSubmit] = useState(false);
    const [totalBet, setTotalbet] = useState();
    const [isFourDigits, set] = useState(false)
    const [active, setActive] = useState(false);
    console.log("GAMES==>",gameList)
    const gamesID = 1
    const combine =()=>{
        console.log("initData:",initData)
        console.log("gameslist:",gameList)
        const  big = initData.big_bet
        const small = initData.small_bet
        const A = initData.three_A
        const C = initData.three_C
        const total = Number(big) + Number(small) + Number(A) + Number(C) 
        setTotalbet(total)
        // setInitData({...initData,"company":gameList})
        Object.assign(amounts,{"company":gameList})
        setInitData(amounts)
        console.log("calculateData:",initData)
        console.log("setTotalbetsetTotalbet",totalBet)
    }

    const clearInputs = () => {
        console.log('clear')
        $(':input').val(null)
        setAmounts(initState)
        setInitData(initState)
        setGameList(games)
        setClear(true)
    }

    const handleBetNumber = (numberInput) =>{
        if (!numberInput.match("^[R-Rr-r0-9]*$")) {
            return false;
          }

          if (
            numberInput &&
            numberInput.match(/r/i) &&
            (numberInput.toLowerCase().match(/r/g).length == 2 ||
              numberInput.toLowerCase().match(/r/g).length == 3 ||
              numberInput.toLowerCase().match(/r/g).length == 4)
          ) {
            return false;
          }
      
          if (numberInput.includes("-") || numberInput.includes(".")) {
            return false;
          }

          setAmounts({...amounts,"bet_no":numberInput})
    } 

    const handleBetAmount = (numberInput) =>{

        if (!numberInput.match("^[0-9-.]*$")) {
            return false;
        }

        if(numberInput.includes('-') || numberInput.includes('.')){
            return false;
        }

          if(numberInput.length > 6)
          {
            return false;
          }

          return true
    }

    

    function isEveryInputEmpty() {
        var allEmpty = true;
    
        // $(':input').each(function() {
        //     if ($(this).val() !== '') {
        //         allEmpty = false
        //     }
        // });

        if(initState !== amounts || gameList !== games){
            allEmpty = true
        }
        else
            allEmpty = false
    
        setClear(allEmpty);
    }

    function isEveryInputFill() {
  
        var isAllFill = false
        var isGamesFill = false
        console.log('isEveryInputFill bfore: ',isAllFill,isGamesFill)
        if(amounts.bet_no){
            if((amounts.big_bet && amounts.small_bet) || (amounts.three_A && amounts.three_C) )
            {
                isAllFill = true
            }
        }
        else
            isAllFill = false


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
    function decimal(data){
        return(
            twoDecimalPlaceWithAmount(data,1)
        )
    }
    function WinningData({oddsData}){

     //  console.log('oddsData:',oddsData);
    //   console.log('gameList:',gameList);

    let companyCount = 0;

    if(gameList['dmc'])
    companyCount ++;

    if(gameList['magnum'])
    companyCount ++;

    if(gameList['toto'])
    companyCount ++;

    //console.log('companyCount:',companyCount);


        

        //gameList
        let total = ''
        const bigInv = ''
        const smallInv = ''
        const threeAInv = ''
        const threeCInv = ''
        if(initData.bet_type == "S"){
            if(initData.bet_no.length == 4){
                total = Number(initData.big_bet) + Number(initData.small_bet)
                console.log("123",total)
                bigInv = Number(total/2)
                smallInv = Number(total/2)
            }else{
                total = Number(initData.three_A) + Number(initData.three_C)
                console.log("123",total)
                threeAInv = Number(total/2)
                threeCInv = Number(total/2)
            }
        }else if(initData.bet_type == "B"){
            if(initData.bet_no.length == 4){
                let combination = 24
                let result = Number(initData.big_bet) + Number(initData.small_bet) 
                total =Number(result*combination)
                console.log("123",total)
                bigInv = Number(total/2)
                smallInv = Number(total/2)
            }else{
                let combination = 6
                let result = Number(initData.three_A) + Number(initData.three_C) 
                total =Number(result*combination)
                console.log("123",total)
                threeAInv = Number(total/2)
                threeCInv = Number(total/2)
            }
        }else if(initData.bet_type == "I"){
            
                let combination = 24
                let result = Number(initData.big_bet) + Number(initData.small_bet) 
                total =Number(result/combination)
                console.log("123",total)
                bigInv = Number(total/2)
                smallInv = Number(total/2)
        }else if(initData.bet_type == "R"){
            if(initData.bet_no.length == 4){
                let result = Number(initData.big_bet) + Number(initData.small_bet)
                let combination = Number(result*2)
                total =Number(combination/2)
                console.log("123",total)
                bigInv = Number(total/2)
                smallInv = Number(total/2)
            }else{
                let result = Number(initData.three_A) + Number(initData.three_C)
                let combination = Number(result*2)
                total =Number(combination/2)
                console.log("123",total)
                threeAInv = Number(total/2)
                threeCInv = Number(total/2)
            }

         


            



        }


        if(companyCount){
        total = total * companyCount;
         bigInv = bigInv * companyCount;
         smallInv = smallInv * companyCount;
         threeAInv = threeAInv * companyCount;
         threeCInv = threeCInv * companyCount;
        }
        console.log('total:',total);
            console.log('companyCount:',companyCount);
        function multiplier(data){
            return(
                decimal(data = data * companyCount)
            )
        }
        if(oddsData){
        return (
            <>
                         
                                    <div className='first-2-lines my-3'>
                                        <table>
                                            <tr>
                                                <td>Total No’s Beted</td>
                                                <td className='text-end fw-bold'>1</td>
                                            </tr>
                                            <tr>
                                                <td>Total Bet Amount : </td>
                                                <td className='text-end fw-bold'>{decimal(total)}</td>
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
                                                            {initData.bet_no.length == 4 ? 
                                                            <>                                                     
                                                            <tr>
                                                                <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>Special</div></td>
                                                            </tr>
                                                            <tr>
                                                            <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>Consolation</div></td>
                                                            </tr></>
                                                            :
                                                            <tr></tr>
                                                            }
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
                                                            {initData.bet_no.length == 4 ? 
                                                                <td><div className='w-amt text-end'>{decimal(Number(oddsData.small_first  * smallInv)+Number(oddsData.big_first * bigInv))}</div></td> :
                                                                <td><div className='w-amt text-end'>{decimal(Number(oddsData.three_a_first * threeAInv)+Number(oddsData.three_c_first * threeCInv))}</div></td>}
                                                                {/* <td><div className='w-amt text-end'>{big * oddsData.big_first}</div></td>
                                                                <td><div className='w-amt text-end'>{small * oddsData.small_first}</div></td> */}
                                                            </tr>
                                                            <tr>
                                                            {initData.bet_no.length == 4 ? 
                                                             <td><div className='w-amt text-end'>{decimal(Number(oddsData.small_second  * smallInv)+Number(oddsData.big_second * bigInv))}</div></td> :
                                                                // <td><div className='w-amt text-end'>{decimal(Number(initData.big_bet)*Number(oddsData.big_second + oddsData.small_second))}</div></td>:
                                                                <td><div className='w-amt text-end'>{decimal(Number(threeCInv)*Number(oddsData.three_c_second))}</div></td>}

                                                                {/* <td><div className='w-amt text-end'>{big * oddsData.big_second}</div></td>
                                                                <td><div className='w-amt text-end'>{small * oddsData.small_second}</div></td> */}
                                                            </tr>
                                                            <tr>
                                                            {initData.bet_no.length == 4 ? 
                                                             <td><div className='w-amt text-end'>{decimal(Number(oddsData.small_third  * smallInv)+Number(oddsData.big_third * bigInv))}</div></td>:
                                                                <td><div className='w-amt text-end'>{decimal(Number(threeCInv)*Number(oddsData.three_c_third))}</div></td>}

                                                            </tr>
                                                            {initData.bet_no.length == 4 ? 
                                                            <>
                                                                <tr>
                                                                    <td><div className='w-amt text-end'>{decimal(Number(bigInv)*Number(oddsData.big_special))}</div></td>
                                                                    {/* <td><div className='w-amt text-end'>{ oddsData.big_special * bigValue}</div></td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td><div className='w-amt text-end'>{decimal(Number(bigInv)*Number(oddsData.big_consolation))}</div></td>
                                                                </tr>
                                                            </>
                                                            :
                                                            <tr></tr>
                                                            }
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
                                                                <td className='text-end py-2'>{multiplier(oddsData.big_first)}</td>
                                                                <td className='text-end py-2'>{multiplier(oddsData.small_first)}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-end py-2'>{multiplier(oddsData.big_second)}</td>
                                                                <td className='text-end py-2'>{multiplier(oddsData.small_second)}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-end py-2'>{multiplier(oddsData.big_third)}</td>
                                                                <td className='text-end py-2'>{multiplier(oddsData.small_third)}</td>
                                                            </tr>
                                                            {initData.bet_no.length == 4 ? 
                                                            <>
                                                                <tr>
                                                                    <td className='text-end py-2'>{multiplier(oddsData.big_special)}</td>
                                                                    <td className='text-end py-2'>-</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-end py-2'>{multiplier(oddsData.big_consolation)}</td>
                                                                    <td className='text-end py-2'>-</td>
                                                                </tr>
                                                            </>
                                                            :
                                                                <tr></tr>
                                                            }
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
            </>
        )
    }
        
    }
    useEffect(()=>{
        isEveryInputEmpty()
        isEveryInputFill()
        console.log("amounts: :",amounts)
    },[amounts,gameList])
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
                                                <div className="d-flex justify-content-center">
                                                    <div className="select-gp" id="checkboxes">
                                                        <ul id="checkboxes" className="list-inline">
                                                            <li className=" list-inline-item" onClick={()=> setGameList({...gameList,"magnum":!gameList.magnum})}>
                                                                <span className={`${gameList.magnum ? "cal-border":"" } outer-circle-gp`} title="Select">
                                                                    <span className="inner-circle-gp">
                                                                        <img className={`${gameList.magnum ? "button-able":"" } img-fluid`} src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png" />
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li className=" list-inline-item" onClick={()=> setGameList({...gameList,"dmc":!gameList.dmc})}>
                                                                <span className={`${gameList.dmc ? "cal-border":"" } outer-circle-gp`} title="Select">
                                                                    <span className="inner-circle-gp">
                                                                        <img className={`${gameList.dmc ? "button-able":"" } img-fluid`} src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png" />
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li className=" list-inline-item" onClick={()=> setGameList({...gameList,"toto":!gameList.toto})}>
                                                                <span className={`${gameList.toto ? "cal-border":"" } outer-circle-gp`} title="Select">
                                                                    <span className={`inner-circle-gp`}>
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
                                                value={amounts.bet_no}
                                                maxLength={4}
                                                minLength={3}
                                                onChange={(e) => handleBetNumber(e.target.value)}/>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className='form-group'>
                                        <div className='row'>
                                            <div className='col-lg-5 col-md-4'>
                                                <b className='mb-2 d-block'>Bet Type</b>
                                            </div>
                                            <div className='col-lg-7 col-md-8 text-center'>
                                        <button type="button" className={amounts && amounts.bet_type && amounts.bet_type == "S" ? 'btn btn-bordered-theme me-1 active-bet-type' : 'btn-custom-small me-1'} title={"Box"} onClick={(e) => setAmounts({...amounts,"bet_type":"S"})}>S</button>

                                        <button type="button" className={amounts && amounts.bet_type && amounts.bet_type == "B" ? 'btn btn-bordered-theme me-1 active-bet-type' : 'btn-custom-small me-1'} title={"Box"} onClick={(e) => setAmounts({...amounts,"bet_type":"B"})}>{t('B')}</button>

                                        {amounts.bet_no.length == 4 ?                                         
                                        <button type="button" className={amounts && amounts.bet_type && amounts.bet_type == "I" ? 'btn btn-bordered-theme me-1 active-bet-type' : 'btn-custom-small me-1'}  title={"iBox"} onClick={(e) => setAmounts({...amounts,"bet_type":"I"})}>{t('I')}</button>
                                        : '' }

                                        <button type="button" className={amounts && amounts.bet_type && amounts.bet_type == "R" ? 'btn btn-bordered-theme me-1 active-bet-type' : 'btn-custom-small me-1'} title={t("Reverse")} onClick={(e) => setAmounts({...amounts,"bet_type":"R"})}>{t('R')}</button>
                                            </div>
                                        </div>
                                    </div>
                                    {amounts.bet_no.length == 4 ? 
                                    <div>
                                        <div className='form-group'>
                                            <div className='row'>
                                                <div className='col-lg-5 col-md-4'>
                                                    <b className='mb-2 d-block'>Big</b>
                                                </div>
                                                <div className='col-lg-7 col-md-8'>
                                                    <input value={amounts.big_bet} type="text" className='form-control' onChange={(e)=>(handleBetAmount(e.target.value) ? setAmounts({...amounts,"big_bet":e.target.value}):'')}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <div className='row'>
                                                <div className='col-lg-5 col-md-4'>
                                                    <b className='mb-2 d-block'>Small</b>
                                                </div>
                                                <div className='col-lg-7 col-md-8'>
                                                    <input value={amounts.small_bet} type="text" className='form-control' onChange={(e)=>(handleBetAmount(e.target.value) ? setAmounts({...amounts,"small_bet":e.target.value}):'')}/>
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
                                                <input value={amounts.three_A} type="text" className='form-control' onChange={(e)=>(handleBetAmount(e.target.value) ? setAmounts({...amounts,"three_A":e.target.value}):'')}/>
                                            </div>
                                        </div>
                                    </div>
                                        <div className='form-group'>
                                            <div className='row'>
                                                <div className='col-lg-5 col-md-4'>
                                                    <b className='mb-2 d-block'>3C</b>
                                                </div>
                                                <div className='col-lg-7 col-md-8'>
                                                    <input value={amounts.three_C} type="text" className='form-control' onChange={(e)=>(handleBetAmount(e.target.value) ? setAmounts({...amounts,"three_C":e.target.value}):'')}/>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                     } 
                                   
                                    
                                    <div className='form-group'>
                                    <div className='row'>
                                    <div className='col-md-6'>
                                        <div className="clearfix text-center"><span disabled={clear} role="button" className={`${clear ? "":"button-disable" } d-block btn-yellow rounded-full`} onClick={()=> clear? clearInputs():''} >CLEAR</span></div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="clearfix text-center"><span role="button" className={`${submit ? "":"button-disable" } d-block btn-yellow rounded-full`} onClick={()=> submit? combine():''}
                                        >Calculate</span></div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <div className='absolute-div'>
                                <div className='inner-abs-div'>
                                    <h5 className='text-uppercase text-center text-white'>Results</h5>
                                    <div className='company-type-heading d-flex align-items-center' style={{justifyContent:'center',minHeight:'50px'}}>

                                    {Odds.map((e,i)=>{
                                       
                                             let companyName =  e.game_play.name;
                                            if(companyName == "Toto")
                                            companyName = 'toto';
                                            else if(companyName == "Da Ma Cai")
                                            companyName = 'dmc';
                                            else if(companyName == "Magnum")
                                            companyName = 'magnum';

                                        if(gameList[companyName]){
                                        return(
                                            <>
                                               
                                                    <div className='comapny-type-logo mx-2'>
                                                        <img src={e.game_play.logo_url}/>
                                                    </div>
                                                    <div className='company-type-name text-white'>{e.game_play.name}</div>
                                                   
                                            </>
                                        )
                                        }
                                })}
                                                    </div>
                                       
                                      <WinningData oddsData={Odds[1]}/>
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
  