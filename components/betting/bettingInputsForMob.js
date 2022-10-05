import React, { useState,useEffect } from "react";

const BettingInputsForMob = ({ item,activeGame }) => {
    
    const [activeTypeGame, setActiveTypeGame] = useState(false);

    useEffect(() => {
        findWitchTypeOfGame();
    }, [activeGame]);

    function findWitchTypeOfGame(){
        setActiveTypeGame(activeGame);
        if(activeGame == false){
            // alert('3d');
        }
        if(activeGame == true){
            // alert('4d');
        }
        allClearData();
    }

    const [curserPointer, setCurserPointer] = React.useState('');
    const [numberValue4D, setNumberValue4D] = React.useState('');
    const [numberValue3D, setNumberValue3D] = React.useState('');
    const [bigValue, setBigValue] = React.useState('');
    const [smallValue, setSmallValue] = React.useState('');
    const [a3Value, setA3Value] = React.useState('');
    const [c3Value, setC3Value] = React.useState('');
  
    let localStateInitData = item.dataInit;
    const [localStateData, setLocalStateData] = useState(localStateInitData);

    const [pageLoadCount, setPageLoadCount] = useState(1);

    const setAllData = (getValue) => {
        if(activeGame == false){
            // alert('3d');
            if(getValue.length == 4){
                return false;
            }
        }
        if(activeGame == true){
            // alert('4d');
            if(getValue.length == 5){
                return false;
            }
        }

        if(curserPointer == 'number4d'){
            let numberVal = numberValue4D.toString();
            let mainDataVal = numberVal+getValue;
            if(mainDataVal.length == 5){
                return false;
            }
            setNumberValue4D(mainDataVal)
            numberInputHandler(mainDataVal, 'number')
        }
        if(curserPointer == 'number3d'){
            let numberVal = numberValue3D.toString();
            let mainDataVal = numberVal+getValue;
            if(mainDataVal.length == 4){
                return false;
            }
            setNumberValue3D(mainDataVal)
            numberInputHandler(mainDataVal, 'number')
        }  
      if(curserPointer == 'big'){
          let bigVal = bigValue.toString();
          setBigValue(bigVal+getValue)
      }   
      if(curserPointer == 'small'){
          let smallVal = smallValue.toString();
          setSmallValue(smallVal+getValue)
      }   
      if(curserPointer == '3a'){
          let a3Val = a3Value.toString();
          setA3Value(a3Val+getValue)
      }   
      if(curserPointer == '3c'){
          let c3Val = c3Value.toString();
          setC3Value(c3Val+getValue)
      }    
    }
    const allClearData = () => {
        setCurserPointer('');
        setNumberValue4D('');
        setNumberValue3D('');
        setBigValue('');
        setSmallValue('');
        setA3Value('');
        setC3Value('');
    }
    const resetAllData = () => {
        allClearData();
    }

    const singleClearData = () => {
        if(curserPointer == 'number4d'){
            var mainDataVal = numberValue4D.toString().split('').slice(0, -1).join('')
            if(mainDataVal.length == 5){
                return false;
            }
            setNumberValue4D(mainDataVal)
            numberInputHandler(mainDataVal, 'number')
        }
        if(curserPointer == 'number3d'){
            var mainDataVal = numberValue3D.toString().split('').slice(0, -1).join('')
            if(mainDataVal.length == 4){
                return false;
            }
            setNumberValue3D(mainDataVal)
            numberInputHandler(mainDataVal, 'number')
        } 
        
        if(curserPointer == 'big'){
            let bigVal = bigValue.toString().split('').slice(0, -1).join('')
            setBigValue(bigVal)
        }   
        if(curserPointer == 'small'){
            let smallVal = smallValue.toString().split('').slice(0, -1).join('')
            setSmallValue(smallVal)
        }   
        if(curserPointer == '3a'){
            let a3Val = a3Value.toString().split('').slice(0, -1).join('')
            setA3Value(a3Val)
        }   
        if(curserPointer == '3c'){
            let c3Val = c3Value.toString().split('').slice(0, -1).join('')
            setC3Value(c3Val)
        }
    }

    const calculate3DAmountEnable = (getValue,operationField) =>{
        let threeDAmount = false;
        let localStateDataForChange = item.dataInit;
        if (operationField == '_3a') {
            if(getValue)
             threeDAmount = true;
            else{
                if(localStateDataForChange._3c.value)
                threeDAmount = true;
            }
              
        } else  if (operationField == '_3c') {
            if(getValue)
              threeDAmount = true;
             else{
                if(localStateDataForChange._3a.value)
                threeDAmount = true; 
             } 
            
        }else  if (operationField == 'number') {
          
            
        }else {
            if ( (localStateDataForChange['_3a']['value'] || localStateDataForChange['_3c']['value']))
               threeDAmount = true;
        }
        return threeDAmount;
   } 

    const numberInputHandler = (getValue, operationField) => {
        let localStateDataForChange = item.dataInit;
    
        let threeDAmout = calculate3DAmountEnable(getValue,operationField);

        if (operationField == 'number') {


            if (!getValue.match("^[R-Rr-r0-9]*$")) {
                return false;
            }

            if (getValue && getValue.match(/r/i) && (getValue.toLowerCase().match(/r/g).length == 2 || getValue.toLowerCase().match(/r/g).length == 3 || getValue.toLowerCase().match(/r/g).length == 4)) {
                return false;
            }


            localStateDataForChange['number'] = { value: getValue, disabled: 0 }
            if (getValue.length == 1 || getValue.length == 2) {
                localStateDataForChange['big'] = { value: "", disabled: 1 }
                localStateDataForChange['small'] = { value: "", disabled: 1 }
                localStateDataForChange['_3a'] = { value: "", disabled: 1 }
                localStateDataForChange['_3c'] = { value: "", disabled: 1 }
                localStateDataForChange['bet_type']['box_disabled'] = 1;
                localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                localStateDataForChange['bet_type']['reverse_disabled'] = 1;
            } else if (getValue.length == 3) {

                localStateDataForChange['big'] = { value: "", disabled: 0 }
                localStateDataForChange['small'] = { value: "", disabled: 0 }
                localStateDataForChange['_3a'] = { value: "", disabled: 0 }
                localStateDataForChange['_3c'] = { value: "", disabled: 0 }
                localStateDataForChange['bet_type']['box_disabled'] = 0;
                localStateDataForChange['bet_type']['i_box_disabled'] = 0;
                localStateDataForChange['bet_type']['reverse_disabled'] = 0;


                if (getValue.includes("R") || getValue.includes("r")) {
                    localStateDataForChange['big'] = { value: "", disabled: 1 }
                    localStateDataForChange['small'] = { value: "", disabled: 1 }
                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                } else {
                    localStateDataForChange['big'] = { value: "", disabled: 1 }
                    localStateDataForChange['small'] = { value: "", disabled: 1 }
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                }


            } else if (getValue.length == 4) {
                localStateDataForChange['big'] = { value: "", disabled: 0 }
                localStateDataForChange['small'] = { value: "", disabled: 0 }
                localStateDataForChange['_3a'] = { value: "", disabled: 0 }
                localStateDataForChange['_3c'] = { value: "", disabled: 0 }
                localStateDataForChange['bet_type'] =  { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 }


                if (getValue.includes("R") || getValue.includes("r")) {
                    localStateDataForChange['_3a'] = { value: "", disabled: 1 }
                    localStateDataForChange['_3c'] = { value: "", disabled: 1 }
                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                } else {

                    if (threeDAmout) {
                        localStateDataForChange['_3a'] = { value: "", disabled: 0 }
                        localStateDataForChange['_3c'] = { value: "", disabled: 0 }
                        localStateDataForChange['bet_type']['box_disabled'] = 1;
                        localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                        localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                    } else {

                        localStateDataForChange['_3a'] = { value: "", disabled: 0 }
                        localStateDataForChange['_3c'] = { value: "", disabled: 0 }
                        localStateDataForChange['bet_type']['box_disabled'] = 0;
                        localStateDataForChange['bet_type']['i_box_disabled'] = 0;
                        localStateDataForChange['bet_type']['reverse_disabled'] = 0;

                    }


                }


            } else {
                localStateDataForChange['big'] = { value: "", disabled: 0 }
                localStateDataForChange['small'] = { value: "", disabled: 0 }
                localStateDataForChange['_3a'] = { value: "", disabled: 0 }
                localStateDataForChange['_3c'] = { value: "", disabled: 0 }
                localStateDataForChange['bet_type'] = { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 }
            }
        } else if (operationField == 'box') {
            if (localStateDataForChange['number']['value'])
            // alert('box');
                localStateDataForChange['bet_type']['box_value'] = localStateDataForChange['bet_type']['box_value'] ? 0 : 1;
                localStateDataForChange['bet_type']['i_box_value'] = 0;
                localStateDataForChange['bet_type']['reverse_value'] = 0;
        } else if (operationField == 'ibox') {
            localStateDataForChange['bet_type']['box_value'] = 0;
            if (localStateDataForChange['number']['value'])
            // alert('ibox');
                localStateDataForChange['bet_type']['i_box_value'] = localStateDataForChange['bet_type']['i_box_value'] ? 0 : 1;
            localStateDataForChange['bet_type']['reverse_value'] = 0;
        } else if (operationField == 'reverse') {
            localStateDataForChange['bet_type']['box_value'] = 0;
            localStateDataForChange['bet_type']['i_box_value'] = 0;
            if (localStateDataForChange['number']['value'])
            // alert('reverse');
                localStateDataForChange['bet_type']['reverse_value'] = localStateDataForChange['bet_type']['reverse_value'] ? 0 : 1;
        } else if (operationField == 'big') {
            localStateDataForChange['big']['value'] = getValue;
        } else if (operationField == 'small') {
            localStateDataForChange['small']['value'] = getValue;
        } else if (operationField == '_3a') {


            localStateDataForChange['_3a']['value'] = getValue;

            let number_value = localStateDataForChange['number']['value'];

            if (number_value.length == 4) {

                if (number_value.includes("R") || number_value.includes("r")) {
                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                } else {

                    if (threeDAmout) {
                        localStateDataForChange['bet_type']['box_disabled'] = 1;
                        localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                        localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                    } else {

                        localStateDataForChange['bet_type']['box_disabled'] = 0;
                        localStateDataForChange['bet_type']['i_box_disabled'] = 0;
                        localStateDataForChange['bet_type']['reverse_disabled'] = 0;

                    }


                }

            }

        } else if (operationField == '_3c') {
            localStateDataForChange['_3c']['value'] = getValue;


            let number_value = localStateDataForChange['number']['value'];

            if (number_value.length == 4) {

                if (number_value.includes("R") || number_value.includes("r")) {
                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                } else {

                   if (threeDAmout) {
                        localStateDataForChange['bet_type']['box_disabled'] = 1;
                        localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                        localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                    } else {

                        localStateDataForChange['bet_type']['box_disabled'] = 0;
                        localStateDataForChange['bet_type']['i_box_disabled'] = 0;
                        localStateDataForChange['bet_type']['reverse_disabled'] = 0;

                    }
                }
            }
        } else if (operationField == 'delete') {
            localStateDataForChange['number'] = { value: "", disabled: 0 }
            localStateDataForChange['big'] = { value: "", disabled: 0 }
            localStateDataForChange['small'] = { value: "", disabled: 0 }
            localStateDataForChange['_3a'] = { value: "", disabled: 0 }
            localStateDataForChange['_3c'] = { value: "", disabled: 0 }
            localStateDataForChange['bet_type'] = { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 }
        }
        setLocalStateData(localStateDataForChange);
        setPageLoadCount(pageLoadCount + 1);
    }
    return (
        
        <>
            {activeTypeGame ? 
                <>  
                    <div className="row">
                        <div className="col-6" style={{ padding: '-1px' }}>
                            <input type="text" 
                                inputMode='none'
                                className="form-control" 
                                placeholder="4D Bet Number" 
                                value={numberValue4D}  
                                onClick={() => setCurserPointer('number4d')} 
                                // value={localStateData && localStateData.number && localStateData.number.value ? localStateData.number.value : ""}
                                maxLength={4}
                                minLength={3}
                                onChange={(e) => numberInputHandler(e.target.value, 'number')}
                            />
                        </div>
                        <div className="col-3" style={{ padding: '0px' }}>
                            <input 
                                inputMode='none'
                                type="text" 
                                className="form-control" 
                                placeholder="Big" 
                                value={bigValue}
                                onClick={() => setCurserPointer('big')} 
                            />
                        </div>
                        <div className="col-3" style={{ padding: '-0.9px' }}>
                            <input 
                                inputMode='none'
                                type="text" 
                                className="form-control" 
                                placeholder="Small" 
                                value={smallValue}
                                onClick={() => setCurserPointer('small')} 
                            />
                        </div>
                    </div>
                </> : 
                
                <>
                    <div className="row">
                        <div className="col-6" style={{ padding: '-1px' }}>
                            <input type="text" 
                                inputMode='none'
                                className="form-control" 
                                placeholder="3D Bet Number" 
                                value={numberValue3D}  
                                onClick={() => setCurserPointer('number3d')} 
                                // value={localStateData && localStateData.number && localStateData.number.value ? localStateData.number.value : ""}
                                maxLength={3}
                                minLength={3}
                                onChange={(e) => numberInputHandler(e.target.value, 'number')}
                            />
                        </div>
                        <div className="col-3" style={{ padding: '0px' }}>
                            <input 
                                inputMode='none'
                                type="text" 
                                className="form-control"
                                value={a3Value} 
                                onChange={(e) => numberInputHandler(e.target.value, '_3a')}
                                // value={localStateData && localStateData._3a && localStateData._3a.value ? localStateData._3a.value : ""}
                                placeholder="3A"
                                onClick={() => setCurserPointer('3a')}
                            />
                        </div>
                        <div className="col-3" style={{ padding: '-0.9px' }}>  
                            <input 
                                inputMode='none'
                                type="text" 
                                className="form-control"
                                value={c3Value} 
                                onChange={(e) => numberInputHandler(e.target.value, '_3c')}
                                // value={localStateData && localStateData._3c && localStateData._3c.value ? localStateData._3c.value : ""}
                                placeholder="3C" 
                                onClick={() => setCurserPointer('3c')}
                            />
                        </div>
                    </div>
                </>  
            }

            <div className="row mt-2">
                <div className="col-4">
                    <label htmlFor="forBoxValue"

                      className={localStateData && localStateData.bet_type && localStateData.bet_type.box_disabled ? ' form-control ' : localStateData && localStateData.bet_type && localStateData.bet_type.box_value ? ' form-control show-Selected-bet' : ' form-control hide-Selected-bet'} 
                      
                      disabled={localStateData && localStateData.bet_type && localStateData.bet_type.box_disabled ? true : false} 
                      
                      title={localStateData && localStateData.bet_type && localStateData.bet_type.box_disabled ? "Disabled" : "Enabled"} 

                      onClick={(e) => numberInputHandler(1, 'box')}
                     >
                        <img className="img-fluid" src="images\betting\0000.png" alt="" style={{ width: '20px' }} /> Box
                    </label>
                </div>
                <div className="col-4">
                    <label 
                        htmlFor="forIboxValue" 
                        style={{ marginLeft: '-11px' }} 

                        className={localStateData && localStateData.bet_type && localStateData.bet_type.i_box_disabled? ' form-control disable' : localStateData && localStateData.bet_type && localStateData.bet_type.i_box_value ? ' form-control show-Selected-bet' : ' form-control hide-Selected-bet'} 
                        
                        disabled={localStateData && localStateData.bet_type && localStateData.bet_type.i_box_disabled ? true : false} title={localStateData && localStateData.bet_type && localStateData.bet_type.i_box_disabled ? "Disabled" : "Enabled"} 
                        
                        onClick={(e) => numberInputHandler(1, 'ibox')}
                    >
                        <img className="img-fluid" src="images\betting\000000.png" alt="" style={{ width: '20px' }} /> iBox
                    </label>            
                </div>
                <div className="col-4" style={{ padding: '0' }}>
                    <label 
                        htmlFor="forReverseValue" 
                        style={{ marginLeft: '-11px' }} 

                        className={localStateData && localStateData.bet_type && localStateData.bet_type.reverse_disabled ? ' form-control disabled' : localStateData && localStateData.bet_type && localStateData.bet_type.reverse_value ? ' form-control show-Selected-bet' : ' form-control hide-Selected-bet'} 
                        
                        disabled={localStateData && localStateData.bet_type && localStateData.bet_type.reverse_disabled ? true : false} 
                        
                        title={localStateData && localStateData.bet_type && localStateData.bet_type.reverse_disabled ? "Disabled" : "Enabled"} 
                        
                        onClick={(e) => numberInputHandler(1, 'reverse')}
                    >
                        <img className="img-fluid" src="images\betting\00000000.png" alt="" style={{ width: '20px' }} /> Reverse
                    </label>                       
                </div>
            </div>
            
            <div className="border mt-2">
                <div className="" style={{ height: '180px' }}>
                    <table className="table-borderless" style={{ width: '100%' }}>
                        <thead className="text-light" style={{ background: '#e91d25', fontSize: '12px' }}>
                            <tr>
                                <td className="text-center">#</td>
                                <td className="text-center">Date</td>
                                <td className="text-center">CO</td>
                                <td className="text-center">Number</td>
                                <td className="text-center">B/3A</td>
                                <td className="text-center">S/3C</td>
                                <td className="text-center">Bet Type</td>
                                <td className="text-center"></td>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: '12px' }}>
                            <tr>
                                <td className="text-center">01</td>
                                <td className="text-center">21/09</td>
                                <td className="text-center">MPT</td>
                                <td className="text-center">123R</td>
                                <td className="text-center">15465</td>
                                <td className="text-center">99999</td>
                                <td className="text-center">B</td>
                                <td>
                                    <img className="img-fluid" src="images\betting\12121121.png" alt="" style={{ width: '18px' }}  />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">02</td>
                                <td className="text-center">21/09</td>
                                <td className="text-center">MPT</td>
                                <td className="text-center">123R</td>
                                <td className="text-center">15465</td>
                                <td className="text-center">99999</td>
                                <td className="text-center">I</td>
                                <td>
                                    <img className="img-fluid" src="images\betting\12121121.png" alt="" style={{ width: '18px' }}  />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">03</td>
                                <td className="text-center">21/09</td>
                                <td className="text-center">MPT</td>
                                <td className="text-center">123R</td>
                                <td className="text-center">15465</td>
                                <td className="text-center">99999</td>
                                <td className="text-center">R</td>
                                <td>
                                    <img className="img-fluid" src="images\betting\12121121.png" alt="" style={{ width: '18px' }}  />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">04</td>
                                <td className="text-center">21/09</td>
                                <td className="text-center">MPT</td>
                                <td className="text-center">123R</td>
                                <td className="text-center">15465</td>
                                <td className="text-center">99999</td>
                                <td className="text-center">S</td>
                                <td>
                                    <img className="img-fluid" src="images\betting\12121121.png" alt="" style={{ width: '18px' }}  />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row text-light container-fluid m-auto" style={{  background: '#e91d25' }}>
                    <div className="col-6">Total Amount</div>
                    <div className="col-6" style={{ textAlign: 'end' }}>1500</div>
                </div>
            </div>
                    
            <div className="mt-2">
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }} onClick={() => setAllData(1)}>
                            <b>1</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }} onClick={() => setAllData(2)}>
                            <b>2</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }} onClick={() => setAllData(3)}>
                            <b>3</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }} onClick={() => setAllData('R')}>
                            <b>R</b>
                        </button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }} onClick={() => setAllData(4)}>
                            <b>4</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }} onClick={() => setAllData(5)}>
                            <b>5</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }} onClick={() => setAllData(6)}>
                            <b>6</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }} onClick={() => allClearData()}>
                            <b>Clear</b>
                        </button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }} onClick={() => setAllData(7)}>
                            <b>7</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }} onClick={() => setAllData(8)}>
                            <b>8</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }} onClick={() => setAllData(9)}>
                            <b>9</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }} onClick={() => singleClearData()}>
                            <img className="img-fluid" src="images\betting\ASA.png" alt="" style={{ width: '22px' }} />
                        </button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <img className="img-fluid" src="images\betting\12569.png" alt="" style={{ width: '22px' }} />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }} onClick={() => setAllData(0)}>
                            <b>0</b>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <img className="img-fluid" src="images\betting\1256.png" alt="" style={{ width: '22px' }} />
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-dark" style={{ width:'100%' }}>
                            <b>+</b>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-2 mb-2 row">
                <div className='col-6'>
                    <button className="form-control" onClick={() => resetAllData()} style={{ background: '-webkit-linear-gradient(90deg, rgb(253, 184, 3) 0%, rgb(247, 234, 120) 100%)' }}> 
                        <b>Reset</b> 
                    </button> 
                </div>
                <div className='col-6'>
                    <button className="form-control text-light" style={{ background: '#e91d25' }}> 
                        <b>BET</b> 
                    </button> 
                </div>            
            </div> 
        </>
    );

}

export default BettingInputsForMob;