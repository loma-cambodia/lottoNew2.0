import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from 'react';
import { combineReducers } from "redux";
import $ from 'jquery'; 
import { twoDecimalPlaceWithAmount } from "../Utils";
const initState = {
    "bet_no": '',
    "bet_type": '',
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

const InvestmentCalculator = ({_calculatorOdds,_auth}) => {
    const { t } = useTranslation();
    const Odds =_calculatorOdds;
    const [amounts, setAmounts] = useState(initState);
    const [gameCalculate, setGameCalculate] = useState(games);

    const [initData, setInitData] = useState(initState);
    const [gameList, setGameList] = useState(games);
    const [clear, setClear] = useState(true);
    const [submit, setSubmit] = useState(false);
    const [combination, setCombination] = useState(0);
    let auth = _auth;
    const merchantCurrency =
    auth &&
    auth.auth &&
    auth.auth.merchant &&
    auth.auth.merchant.currency &&
    auth.auth.merchant.currency.code
      ? auth.auth.merchant.currency.code
      : "USD";
    const combine =()=>{
        const  big = initData.big_bet
        const small = initData.small_bet
        const A = initData.three_A
        const C = initData.three_C
        const total = Number(big) + Number(small) + Number(A) + Number(C) 
        Object.assign(amounts,{"company":gameList})
        setInitData(amounts)
        setGameCalculate(gameList)
        if(amounts.bet_no.length == 4){
            amounts.three_A = ''
            amounts.three_C = ''
        }
        if(amounts.bet_no.length == 3){
            amounts.big_bet = ''
            amounts.small_bet = ''
        }
    }
    console.log("GGGGG",gameList)
    const clearInputs = () => {
        console.log('clear')
        $(':input').val(null)
        setAmounts(initState)
        setInitData(initState)
        setGameList(games)
        setClear(true)
        setCombination(0)
    }

    const handleBetNumber = (numberInput) =>{

        console.log('handle:',numberInput);
        let newAmounts = {...amounts};

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

          if (numberInput.includes('R') || numberInput.includes('r')){
               newAmounts = {...newAmounts,"bet_type":'S'};
            }


           newAmounts = {...newAmounts,"bet_no":numberInput};


          console.log('newAmounts:',newAmounts);
          setAmounts(newAmounts);

        
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
        if(amounts.bet_no && amounts.bet_no.length > 2){
            switch (amounts.bet_no.length){
                case 3:
                    if(amounts.three_A && amounts.three_C)
                    {
                        isAllFill = true
                    }
                break;

                case 4:
                    if(amounts.big_bet && amounts.small_bet)
                    {
                        isAllFill = true
                    }
                break;
            }
        }
        else
            isAllFill = false

            if(amounts.bet_type == ''){
                isAllFill = false
            }

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

            
        let    companyCount = 0;
       

        if(gameCalculate['dmc'])
        companyCount ++;

        if(gameCalculate['magnum'])
        companyCount ++;

        if(gameCalculate['toto'])
        companyCount ++;

            let total = ''
            const bigInv = ''
            const smallInv = ''
            const threeAInv = ''
            const threeCInv = ''
            if(initData.bet_type == "S"){
                if(initData.bet_no.length == 4){
                    total = Number(initData.big_bet) + Number(initData.small_bet)
                    setCombination(1)
                    console.log("123",total)
                    bigInv = Number(total/2)
                    smallInv = Number(total/2)
                }else if(initData.bet_no.length == 3){
                    total = Number(initData.three_A) + Number(initData.three_C)
                    console.log("123",total)
                    setCombination(1)
                    threeAInv = Number(total/2)
                    threeCInv = Number(total/2)
                }
            }else if(initData.bet_type == "B"){
                if(initData.bet_no.length == 4){
                    setCombination(24)
                    let result = Number(initData.big_bet) + Number(initData.small_bet) 
                    total =Number(result*combination)
                    console.log("123",total)
                    bigInv = Number(total/2)
                    smallInv = Number(total/2)
                }else{
                    setCombination(6)
                    let result = Number(initData.three_A) + Number(initData.three_C) 
                    total =Number(result*combination)
                    console.log("123",total)
                    threeAInv = Number(total/2)
                    threeCInv = Number(total/2)
                }
            }else if(initData.bet_type == "I"){
                setCombination(24)
                    let result = Number(initData.big_bet) + Number(initData.small_bet) 
                    total =Number(result/combination)
                    console.log("123",total)
                    bigInv = Number(total/2)
                    smallInv = Number(total/2)
            }else if(initData.bet_type == "R"){
                if(initData.bet_no.length == 4){
                    setCombination(2)
                    let result = Number(initData.big_bet) + Number(initData.small_bet)
                    total =Number(result*combination)
                    console.log("123",total)
                    bigInv = Number(total/2)
                    smallInv = Number(total/2)
                }else{
                    setCombination(2)
                    let result = Number(initData.three_A) + Number(initData.three_C)
                    total =Number(result*combination)
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
            function multiplier(data){
                
                return(
                    decimal(data =  companyCount * data)
                )
            }

            if(oddsData){
            return (
                <>
                            
                                    <div className='first-2-lines my-3'>
                                        <table>
                                            <tr>
                                                <td>{t('Total_No_of_Combination')}</td>
                                                <td className='text-end fw-bold'>{combination}</td>
                                            </tr>
                                            <tr>
                                                <td>{t('Total_Cost')} </td>
                                                <td className='text-end fw-bold'>{merchantCurrency} {decimal(total)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className='bottom-3-col'>
                                            <div className='row hide-600'>
                                                <div className='col'>
                                                    <div className='prize-div'>
                                                        <div className='heading-part'>{t('prize_type')}</div>
                                                        <div className='prize-content-part'>
                                                            <table className='table'>
                                                                <tr>
                                                                    <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>{t('1st_Prize')}</div></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>{t('2nd_Prize')}</div></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>{t('3rd_Prize')}</div></td>
                                                                </tr>   
                                                                {initData.bet_no.length == 4 ? 
                                                                <>                                                     
                                                                <tr>
                                                                    <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>{t('Special_Prize')}</div></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>{t('Consolation_Prize')}</div></td>
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
                                                        <div className='w-amt-heading'>{t('Winning_Amount')}</div>
                                                        <div className='blank-div'></div>
                                                            <div className='prize-content-part'>
                                                                <table className='table'>
                                                                    <tr>
                                                                    {initData.bet_no.length == 4 ? 
                                                                        <td><div style={{whiteSpace: 'nowrap',overflow: 'hidden'}} className='w-amt text-end'>{merchantCurrency} {decimal(Number(oddsData.small_first  * smallInv)+Number(oddsData.big_first * bigInv))}</div></td> 
                                                                        :
                                                                        <td><div style={{whiteSpace: 'nowrap',overflow: 'hidden'}} className='w-amt text-end'>{merchantCurrency} {decimal(Number(oddsData.three_a_first * threeAInv)+Number(oddsData.three_c_first * threeCInv))}</div></td>
                                                                    }
                                                                    </tr>
                                                                    <tr>
                                                                    {initData.bet_no.length == 4 ? 
                                                                        <td><div className='w-amt text-end'>{merchantCurrency} {decimal(Number(oddsData.small_second  * smallInv)+Number(oddsData.big_second * bigInv))}</div></td> 
                                                                        :
                                                                        <td><div className='w-amt text-end'>{merchantCurrency} {decimal(Number(threeCInv)*Number(oddsData.three_c_second))}</div></td>
                                                                    }
                                                                    </tr>
                                                                    <tr>
                                                                    {initData.bet_no.length == 4 ? 
                                                                        <td><div className='w-amt text-end'>{merchantCurrency} {decimal(Number(oddsData.small_third  * smallInv)+Number(oddsData.big_third * bigInv))}</div></td>
                                                                        :
                                                                        <td><div className='w-amt text-end'>{merchantCurrency} {decimal(Number(threeCInv)*Number(oddsData.three_c_third))}</div></td>
                                                                    }
                                                                    </tr>
                                                                    {initData.bet_no.length == 4 ? 
                                                                    <>
                                                                        <tr>
                                                                            <td><div className='w-amt text-end'>{merchantCurrency} {decimal(Number(bigInv)*Number(oddsData.big_special))}</div></td>
                                                                            {/* <td><div className='w-amt text-end'>{ oddsData.big_special * bigValue}</div></td> */}
                                                                        </tr>
                                                                        <tr>
                                                                            <td><div className='w-amt text-end'>{merchantCurrency} {decimal(Number(bigInv)*Number(oddsData.big_consolation))}</div></td>
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
                                                        <div className='w-amt-heading'>{t('Odds')}</div>
                                                        <div className='prize-content-part'>
                                                        <table className='table text-white'>
                                                                <tr>
                                                                    <th className='text-end py-2'>{t('Big_Bet')}</th>
                                                                    <th className='text-end py-2'>{t('Small_Bet')}</th>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.big_first) : "0.00"}</td>
                                                                    <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.small_first): "0.00"}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.big_second) : "0.00"}</td>
                                                                    <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.small_second): "0.00"}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.big_third): "0.00"}</td>
                                                                    <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.small_third): "0.00"}</td>
                                                                </tr>
                                                                {initData.bet_no.length == 4 ? 
                                                                <>
                                                                    <tr>
                                                                        <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.big_special): "0.00"}</td>
                                                                        <td className='text-end py-2'>-</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.big_consolation): "0.00"}</td>
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
                                            <div className='row show-600'>
<div className='col-12'>
    <table className='table text-white table-sm table-bordered border small table-header-theme'>
        <thead>
        <tr>
            <th rowSpan={2} className="align-middle">Prize</th>
            <th rowSpan={2} className='text-end align-middle'>Winning Amount</th>
            <th colSpan={2} className="text-center align-middle">Odds</th>
        </tr>
        <tr>
            <th className='text-end w-25'>Big</th>
            <th className='text-end w-25'>Small</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1st</td>
            {/* <td className='text-end text-warning fw-bold'>{merchantCurrency} {decimal(Number(oddsData.small_first  * smallInv)+Number(oddsData.big_first * bigInv))}</td>
             */}
             {initData.bet_no.length == 4 ? 
                <td className='text-end text-warning fw-bold'>{merchantCurrency} {decimal(Number(oddsData.small_first  * smallInv)+Number(oddsData.big_first * bigInv))}</td> 
                :
                <td className='text-end text-warning fw-bold'>{merchantCurrency} {decimal(Number(oddsData.three_a_first * threeAInv)+Number(oddsData.three_c_first * threeCInv))}</td>
            }
            <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.big_first) : "0.00"}</td>
            <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.small_first): "0.00"}</td>
        </tr>
        <tr>
            <td>2nd</td>
            {/* <td className='text-end text-warning fw-bold'>{merchantCurrency} {decimal(Number(oddsData.small_second  * smallInv)+Number(oddsData.big_second * bigInv))}</td> */}
            {initData.bet_no.length == 4 ? 
                    <td className='text-end text-warning fw-bold'>{merchantCurrency} {decimal(Number(oddsData.small_second  * smallInv)+Number(oddsData.big_second * bigInv))}</td> 
                    :
                    <td className='text-end text-warning fw-bold'>{merchantCurrency} {decimal(Number(threeCInv)*Number(oddsData.three_c_second))}</td>
            }
            <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.big_second) : "0.00"}</td>
            <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.small_second): "0.00"}</td>
        </tr>
        <tr>
            <td>3rd</td>
            {/* <td className='text-end text-warning fw-bold'>{merchantCurrency} {decimal(Number(oddsData.small_third  * smallInv)+Number(oddsData.big_third * bigInv))}</td> */}
            {initData.bet_no.length == 4 ? 
                <td className='text-end text-warning fw-bold'>{merchantCurrency} {decimal(Number(oddsData.small_third  * smallInv)+Number(oddsData.big_third * bigInv))}</td>
                :
                <td className='text-end text-warning fw-bold'>{merchantCurrency} {decimal(Number(threeCInv)*Number(oddsData.three_c_third))}</td>
            }
            <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.big_third): "0.00"}</td>
            <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.small_third): "0.00"}</td>
        </tr>
        {initData.bet_no.length == 4 ? 
        <>
        <tr>
            <td>Special</td>
            <td className='text-end text-warning fw-bold'>{merchantCurrency} {decimal(Number(bigInv)*Number(oddsData.big_special))}</td>
            <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.big_special): "0.00"}</td>
            <td className='text-end'>-</td>
        </tr>
        <tr>
            <td>Consolation</td>
            <td className='text-end text-warning fw-bold'>{merchantCurrency} {decimal(Number(bigInv)*Number(oddsData.big_consolation))}</td>
            <td className='text-end py-2'>{gameList['toto'] || gameList['dmc'] || gameList['magnum']  ?multiplier(oddsData.big_consolation): "0.00"}</td>
            <td className='text-end'>-</td>
        </tr>
        </>
        :
        
        <tr></tr>
        }
        </tbody>
        
    </table>    
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
        console.log("amounts: :",amounts);

        
    },[amounts,gameList]);
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
                                                <b className='mb-2 d-block'>{t('Company')}</b>
                                            </div>
                                            <div className='col-lg-7 col-md-8'>
                                                <div className="d-flex justify-content-center">
                                                    <div className="select-gp" id="checkboxes">
                                                        <ul id="checkboxes" className="list-inline">
                                                            <li className=" list-inline-item" onClick={()=> setGameList({...gameList,"magnum":!gameList.magnum})}>
                                                                <span className={`${gameList.magnum ? "cal-border":"" } outer-circle-gp games-calculate`} title="Select">
                                                                    <span className="inner-circle-gp">
                                                                        <img className={`${gameList.magnum ? "button-able":"" } img-fluid`} src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png" />
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li className=" list-inline-item" onClick={()=> setGameList({...gameList,"dmc":!gameList.dmc})}>
                                                                <span className={`${gameList.dmc ? "cal-border":"" } outer-circle-gp games-calculate`} title="Select">
                                                                    <span className="inner-circle-gp">
                                                                        <img className={`${gameList.dmc ? "button-able":"" } img-fluid`} src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png" />
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li className=" list-inline-item" onClick={()=> setGameList({...gameList,"toto":!gameList.toto})}>
                                                                <span className={`${gameList.toto ? "cal-border":"" } outer-circle-gp games-calculate`} title="Select">
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
                                                <b className='mb-2 d-block'>{t('Bet_Number')}</b>
                                            </div>
                                            <div className='col-lg-7 col-md-8'>
                                                <input type="text" className='form-control' 
                                                value={amounts.bet_no}
                                                maxLength={4}
                                                minLength={3}
                                                onChange={(e) => (handleBetNumber(e.target.value))}/>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className='form-group'>
                                        <div className='row'>
                                            <div className='col-lg-5 col-md-4'>
                                                <b className='mb-2 d-block'>{t('Bet_Type')}</b>
                                            </div>
                                            <div className='col-lg-7 col-md-8 text-center'>
                                        <button type="button" className={amounts && amounts.bet_type && amounts.bet_type == "S" ? 'btn btn-bordered-theme me-1 active-bet-type' : 'btn-custom-small me-1'} title={"Box"} onClick={(e) =>(amounts.bet_type == 'S'? setAmounts({...amounts,"bet_type":""}) : setAmounts({...amounts,"bet_type":"S"}))}>S</button>
                                        {amounts.bet_no.includes('r') || amounts.bet_no.includes('R') ? '' : 
                                        <>
                                        <button type="button" className={amounts && amounts.bet_type && amounts.bet_type == "B" ? 'btn btn-bordered-theme me-1 active-bet-type' : 'btn-custom-small me-1'} title={"Box"} onClick={(e) => (amounts.bet_type == 'B'? setAmounts({...amounts,"bet_type":""}) : setAmounts({...amounts,"bet_type":"B"}))}>{t('B')}</button>

                                        {amounts.bet_no.length == 4 ?                                         
                                        <button type="button" className={amounts && amounts.bet_type && amounts.bet_type == "I" ? 'btn btn-bordered-theme me-1 active-bet-type' : 'btn-custom-small me-1'}  title={"iBox"} onClick={(e) => (amounts.bet_type == 'I'? setAmounts({...amounts,"bet_type":""}) : setAmounts({...amounts,"bet_type":"I"}))}>{t('I')}</button>
                                        : 
                                        '' 
                                        }

                                        <button type="button" className={amounts && amounts.bet_type && amounts.bet_type == "R" ? 'btn btn-bordered-theme me-1 active-bet-type' : 'btn-custom-small me-1'} title={t("Reverse")} onClick={(e) => (amounts.bet_type == 'R'? setAmounts({...amounts,"bet_type":""}) : setAmounts({...amounts,"bet_type":"R"}))}>{t('R')}</button>
                                                                                    
                                        </>
                                        }
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
                                        <div className="clearfix text-center"><span disabled={clear} role="button" className={`${clear ? "":"button-disable" } d-block btn-yellow rounded-full`} onClick={()=> clear? clearInputs():''} >{t('clear')}</span></div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="clearfix text-center"><span role="button" className={`${submit ? "":"button-disable" } d-block btn-yellow rounded-full`} onClick={()=> submit? combine():''}
                                        >{t('Calculate')}</span></div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <div className='absolute-div'>
                                {!Odds.length == 1 ? 
                                <div className='text-center'>
                                    <img src="assets/images/loader.gif" alt="" className="img-icon-prize" width="60" />
                                </div>
                                :
                                <div className='inner-abs-div'>
                                    <h5 className='text-uppercase text-center text-white'>{t('Result')}</h5>
                                     <div className='company-type-heading d-flex align-items-center' style={{justifyContent:'center',minHeight:"50px"}}>

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
                                                        
                                                            <div className='comapny-type-logo mx-2'><img src={e.game_play.logo_url}/></div>
                                                            <div className='company-type-name text-white p-2' >{e.game_play.name}</div>
                                                            
                                                    </>
                                                        )
                                                    }
                                                })}
                                     </div>
                                      <WinningData oddsData={Odds[1]}/>
                                </div>
                                }
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
  