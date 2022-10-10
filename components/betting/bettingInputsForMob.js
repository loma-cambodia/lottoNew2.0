import React, { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import FinalDataContainer from './finalDataContainer';
import {getBettingDates,lotterySubmit} from '../../store/actions/bettingActions';
import RejectedBedContainer from './rejectedBedContainer';

import { ToastContainer, toast } from 'react-toastify';

import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux";

const customStyles = {
    content: {
      top: '45%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '98%',
      borderRadius: '12px',
      padding:0
    },
  }; 

const BettingInputsForMob = ({ item,activeGame,activeGameType, _finalSubmitData, _setFinalSubmitData,
    _bettingInitData,_limit,_gameCount}) => {
    let limit = _limit;
    console.log('aaaaaa',limit);
    const auth = useSelector(state => state.auth);
    const { t } = useTranslation();

    const dispatch = useDispatch();

        console.log('_gameCount:',_gameCount);
    let bettingInitData = _bettingInitData;
    let localStateInitData = item.dataInit;
    const [localStateData, setLocalStateData] = useState(localStateInitData);
    const [mainSubmitData, setMainSubmitData] = useState([]);
    const [pageLoadCount, setPageLoadCount] = useState(1);
    
    const [totalAmount, setTotalAmount] = useState('');

    const [resultData, setResultData] = React.useState({});

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [apiResponce,  setApiResponce] = React.useState('success');
    console.log("localStateData:lotto",localStateData)


    /////////////////////////////////////

    const [curserPointer, setCurserPointer] = React.useState('');
    const [numberValue4D, setNumberValue4D] = React.useState('');
    const [numberValue3D, setNumberValue3D] = React.useState('');
    const [bigValue, setBigValue] = React.useState('');
    const [smallValue, setSmallValue] = React.useState('');
    const [a3Value, setA3Value] = React.useState('');
    const [c3Value, setC3Value] = React.useState('');

    useEffect(() => {
        findWitchTypeOfGame();
    }, [activeGameType]);

    function findWitchTypeOfGame(){
        allClearData();
    }

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
          numberInputHandler(bigVal+getValue, 'big')
      }   
      if(curserPointer == 'small'){
          let smallVal = smallValue.toString();
          setSmallValue(smallVal+getValue)
          numberInputHandler(smallVal+getValue, 'small')
      }   
      if(curserPointer == '3a'){
          let a3Val = a3Value.toString();
          setA3Value(a3Val+getValue)
          numberInputHandler(a3Val+getValue, '_3a')
      }   
      if(curserPointer == '3c'){
          let c3Val = c3Value.toString();
          setC3Value(c3Val+getValue)
          numberInputHandler(c3Val+getValue, '_3c')
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
        // alert('pppp');
        allClearData();
        setLocalStateData([])
        setMainSubmitData([]);
        _setFinalSubmitData([]);
        setTotalAmount('');
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
    // console.log("localStateData",bettingInitData);
    
    ////////////////////////////////////////


    
    const getStringUniqueCharactors  = (_getNumber) => {
        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }
            const number = _getNumber;
            let myFunc = num => Number(num);
            var intArr = Array.from(String(number), myFunc);
            const uniqueAges = intArr.filter(unique);
            return uniqueAges;
    }

    const  checkPalindrome = (string) =>{
        const len = string.length;
        for (let i = 0; i < len / 2; i++) {
            if (string[i] !== string[len - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    
    const totalBoxingCalculation = (getNumber) => {
        let _getNumber = getNumber;
        let boxing = 0;
        if(_getNumber)
        boxing = getPermutation(_getNumber);
        return boxing ;
    }
    
    const getPermutation = (_getNumber) => {
        let returnPermutation = 0;
        let uniqueAges = getStringUniqueCharactors(_getNumber);

            if(_getNumber.length == 3){
                if(uniqueAges.length == 3)
                returnPermutation = 6;
                else  if(uniqueAges.length == 2)
                returnPermutation = 3;
                else  if(uniqueAges.length == 1)
                returnPermutation = 1;
            } else if(_getNumber.length == 4){
                if(uniqueAges.length == 4)
                returnPermutation = 24;
                else  if(uniqueAges.length == 3)
                returnPermutation = 12 ;
                else  if(uniqueAges.length == 2)
                returnPermutation = 6;
                else  if(uniqueAges.length == 1)
                returnPermutation = 1;
            }
            return returnPermutation;
    }

    const calculationOfTotalAmount = (getRow) => {
        let bet_type = '';
        let total_sum = 0;
        if(getRow && getRow.bet_type && getRow.bet_type.box_value) 
           bet_type = 'box';
        else if(getRow && getRow.bet_type && getRow.bet_type.i_box_value) 
           bet_type = 'ibox';
        else if(getRow && getRow.bet_type && getRow.bet_type.reverse_value) 
           bet_type = 'reverse';
        else if(getRow && getRow.number && getRow.number.value){
            if (getRow.number.value.includes("R") || getRow.number.value.includes("r")) 
                bet_type = 'rolling';  
        } 
           
  
           // rollingNumber
  
       if(getRow && getRow.big && getRow.big.value) 
        total_sum += parseInt(getRow.big.value);
  
        if(getRow && getRow.small && getRow.small.value) 
        total_sum += parseInt(getRow.small.value);
  
        if(getRow && getRow._3a && getRow._3a.value) 
        total_sum += parseInt(getRow._3a.value);
  
        if(getRow && getRow._3c && getRow._3c.value) 
        total_sum += parseInt(getRow._3c.value);
  
  
  
        let totalAmount =  0;
        if(_gameCount && total_sum)
        totalAmount = _gameCount * total_sum  
  
        if(bet_type == 'box'){
          let totalBoxing = totalBoxingCalculation(getRow && getRow.number && getRow.number.value ? getRow.number.value : 0);
        if(totalBoxing)
          totalAmount = totalAmount * totalBoxing;  
  
        }else if(bet_type == 'reverse'){
  
          totalAmount = totalAmount * 2;  
  
      }else if(bet_type == 'rolling'){
  
          totalAmount = totalAmount * 10;  
  
      }
            
        return totalAmount;
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

                let uniqueAges = getStringUniqueCharactors(getValue);
                let isPalindrom =  checkPalindrome(getValue);

                if (getValue.includes("R") || getValue.includes("r")) {
                    localStateDataForChange['big'] = { value: "", disabled: 1 }
                    localStateDataForChange['small'] = { value: "", disabled: 1 }
                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                }
                else if (uniqueAges.length == 1) {
                    
                    localStateDataForChange['big'] = { value: "", disabled: 1 }
                    localStateDataForChange['small'] = { value: "", disabled: 1 }
                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;
                    
                }
                else if (isPalindrom) {
                    
                    localStateDataForChange['big'] = { value: "", disabled: 1 }
                    localStateDataForChange['small'] = { value: "", disabled: 1 }
                    localStateDataForChange['bet_type']['box_disabled'] = 0;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                }
                else {
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

                let uniqueAges = getStringUniqueCharactors(getValue);
                let isPalindrom =  checkPalindrome(getValue);

                if (getValue.includes("R") || getValue.includes("r")) {
                    localStateDataForChange['_3a'] = { value: "", disabled: 1 }
                    localStateDataForChange['_3c'] = { value: "", disabled: 1 }
                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                } 
                else  if (uniqueAges.length == 1) {

                    localStateDataForChange['_3a'] = { value: "", disabled: 1 }
                    localStateDataForChange['_3c'] = { value: "", disabled: 1 }
                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                } else  if (isPalindrom) {

                    localStateDataForChange['_3a'] = { value: "", disabled: 1 }
                    localStateDataForChange['_3c'] = { value: "", disabled: 1 }
                    localStateDataForChange['bet_type']['box_disabled'] = 0;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 0;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                }
                else {

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
        } 
        
        
        
        
        else if (operationField == 'box') {
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

            let big_max_bet  = limit && limit.length > 0 && limit[0].big_max_bet ?  limit[0].big_max_bet : 0;
            let big_min_bet  = limit && limit.length > 0 && limit[0].big_min_bet ?  limit[0].big_min_bet : 0;
            if(getValue > big_max_bet ){

                toast.error('Bet should not be greater than '+big_max_bet, 
                {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,
                pauseOnHover: true,draggable: true,progress: undefined});

                getValue = big_max_bet;
               
            }else if(getValue < big_min_bet ){

                toast.error('Bet should not be less than '+big_min_bet, 
                {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,
                pauseOnHover: true,draggable: true,progress: undefined});
                
                getValue = big_min_bet;
                
            }
            // else{
            //     $("#ErrorBig"+idas).html('');
            // }
            setBigValue(getValue);
            localStateDataForChange['big']['value'] = getValue;
        } else if (operationField == 'small') {

            let small_max_bet  = limit && limit.length > 0 && limit[0].small_max_bet ?  limit[0].small_max_bet : 0;
            let small_min_bet  = limit && limit.length > 0 && limit[0].small_min_bet ?  limit[0].small_min_bet : 0;
            if(getValue > small_max_bet ){

                toast.error('Bet should not be greater than '+small_max_bet, 
                {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,
                pauseOnHover: true,draggable: true,progress: undefined});

                getValue = small_max_bet;
               
            }else if(getValue < small_min_bet ){

                toast.error('Bet should not be less than '+small_min_bet, 
                {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,
                pauseOnHover: true,draggable: true,progress: undefined});

                getValue = small_min_bet;
                
            }
            // else{
            //     $("#ErrorBig"+idas).html('');
            // }
            setSmallValue(getValue);
            localStateDataForChange['small']['value'] = getValue;
        } else if (operationField == '_3a') {


            let three_a_max_bet  = limit && limit.length > 0 && limit[0].three_a_max_bet ?  limit[0].three_a_max_bet : 0;
            let three_a_min_bet  = limit && limit.length > 0 && limit[0].three_a_min_bet ?  limit[0].three_a_min_bet : 0;
            if(getValue > three_a_max_bet ){
                
                toast.error('Bet should not be greater than '+three_a_max_bet, 
                {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,
                pauseOnHover: true,draggable: true,progress: undefined});

                getValue = three_a_max_bet;
               
            }else if(getValue < three_a_min_bet ){

                toast.error('Bet should not be less than '+three_a_min_bet, 
                {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,
                pauseOnHover: true,draggable: true,progress: undefined});

                getValue = three_a_min_bet;
                
            }
            // else{
            //     $("#ErrorBig"+idas).html('');
            // }
            setA3Value(getValue);

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


            let three_c_max_bet  = limit && limit.length > 0 && limit[0].three_c_max_bet ?  limit[0].three_c_max_bet : 0;
            let three_c_min_bet  = limit && limit.length > 0 && limit[0].three_c_min_bet ?  limit[0].three_c_min_bet : 0;
            if(getValue > three_c_max_bet ){

                toast.error('Bet should not be greater than '+three_c_max_bet, 
                {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,
                pauseOnHover: true,draggable: true,progress: undefined});

                getValue = three_c_max_bet;
               
            }else if(getValue < three_c_min_bet ){

                toast.error('Bet should not be less than '+three_c_min_bet, 
                {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,
                pauseOnHover: true,draggable: true,progress: undefined});

                getValue = three_c_min_bet;
                
            }
            // else{
            //     $("#ErrorBig"+idas).html('');
            // }
            setC3Value(getValue);
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

        let totalAmount = calculationOfTotalAmount(localStateDataForChange);
            if(totalAmount)
                localStateDataForChange = { ...localStateDataForChange, amount: { value: totalAmount, disabled: 1 } };

        setLocalStateData(localStateDataForChange);
        setPageLoadCount(pageLoadCount + 1);
    }
    const previewSubmitData = (getAction, getIndex = 0) => {
        // alert(getAction)
        let finalSubmitData = _finalSubmitData;
        if(getAction == 'remove'){
            finalSubmitData = finalSubmitData.filter((item,id) => id != getIndex);
        }
        if(finalSubmitData.length < 10 && getAction == 'add'){
            var x = 0;
            bettingInitData.map(item => {
                if(item.selected){
                    let day = item.date;
                    let game = '';
                    let gameArr = [];
                    item.games.map(itemGame => {
                        if(itemGame.selected){
                            game += itemGame.abbreviation;
                            gameArr.push(itemGame.id);
                        }
                    })

                    let  localStateDataForChange = {};

                    let amount1 = '';
                    let amount2 = '';

                    if(localStateData && localStateData.big && localStateData.big.value){
                        amount1 = localStateData.big.value;
                    }else if(localStateData && localStateData._3a && localStateData._3a.value){
                        amount1 = localStateData._3a.value;
                    }
                    if(localStateData && localStateData.small && localStateData.small.value){
                        amount2 = localStateData.small.value;
                    }else if(localStateData && localStateData._3c && localStateData._3c.value){
                        amount2 = localStateData._3c.value;
                    }
                    
                    let bet_type = '';

                    if(localStateData && localStateData.bet_type && localStateData.bet_type.box_disabled == 0 && localStateData.bet_type.box_value == 1){
                        bet_type = 'B';
                    }
                    else if(localStateData && localStateData.bet_type && localStateData.bet_type.i_box_disabled == 0 && localStateData.bet_type.i_box_value == 1){
                        bet_type = 'I';
                    }
                    else if(localStateData && localStateData.bet_type && localStateData.bet_type.reverse_disabled == 0 && localStateData.bet_type.reverse_value == 1){
                        bet_type = 'R';
                    }else{
                        bet_type = 'S';
                    }

                    localStateDataForChange['number'] = localStateData && localStateData.number && localStateData.number.value ? localStateData.number.value : "";
                    localStateDataForChange['amount1'] = amount1;
                    localStateDataForChange['amount2'] = amount2;
                    localStateDataForChange['date'] = day;
                    localStateDataForChange['company'] = game;
                    localStateDataForChange['bet_type'] = bet_type;

                    let amountTotal = localStateData && localStateData.amount && localStateData.amount.value ? localStateData.amount.value : "0";
              
                    // console.log('amount1',localStateDataForChange['amount1']);
                    
                    localStateDataForChange['amountTotal'] = amountTotal;
                    
                    let _mainSubmitData = {
                                            "date":day,
                                            "games":gameArr,
                                            "options":
                                                    [
                                                        {
                                                            "number": localStateData && localStateData.number && localStateData.number.value ? localStateData.number.value : "",
                                                            "big_bet":localStateData && localStateData.big && localStateData.big.value ? localStateData.big.value : "0",
                                                            "small_bet":localStateData && localStateData.small && localStateData.small.value ? localStateData.small.value : "0",
                                                            "3a_bet":localStateData && localStateData._3a && localStateData._3a.value ? localStateData._3a.value : "0",
                                                            "3c_bet":localStateData && localStateData._3c && localStateData._3c.value ? localStateData._3c.value : "0",
                                                            "box":localStateData && localStateData.bet_type && localStateData.bet_type.box_disabled == 0 && localStateData.bet_type.box_value == 1 ? "on" : "off",
                                                            "ibox":localStateData && localStateData.bet_type && localStateData.bet_type.i_box_disabled == 0 && localStateData.bet_type.i_box_value == 1 ? "on" : "off",
                                                            "reverse":localStateData && localStateData.bet_type && localStateData.bet_type.reverse_disabled == 0 && localStateData.bet_type.reverse_value == 1 ? "on" : "off",
                                                            "amount": amountTotal
                                                        }
                                                    ]  
                                          }


                    if(localStateDataForChange['number'] == ""){

                        toast.error('Please Enter Number', 
                        {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,
                        pauseOnHover: true,draggable: true,progress: undefined});

                        return false;
                    }else if(amountTotal == 0){

                        toast.error('Please Enter Amount', 
                        {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,
                        pauseOnHover: true,draggable: true,progress: undefined});
                        
                        return false;
                    }
                    // else if(localStateDataForChange['date'] == ''){

                    //     toast.error('Please Enter Number', 
                    //     {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,
                    //     pauseOnHover: true,draggable: true,progress: undefined});
                    //     alert('amount2')
                    //     return false;
                    // }else if(localStateDataForChange['company'] == ''){

                    //     toast.error('Please Enter Number', 
                    //     {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,
                    //     pauseOnHover: true,draggable: true,progress: undefined});
                    //     alert('company')
                    //     return false;
                    // }
                    else{
                        finalSubmitData.push(localStateDataForChange);

                        mainSubmitData.push(_mainSubmitData);
                        x = 1;
                        // setMainSubmitData(_mainSubmitData);
                    }           
                }
            });

            let  localStateDataForChangeTotalAmount = '';
            localStateDataForChangeTotalAmount ='10000';
            if(x==1){
                setLocalStateData('');
                allClearData();
            }
        }
        _setFinalSubmitData(finalSubmitData);

        var slackTotalAmount = 0;
        finalSubmitData.map(itemAmount => {
            // console.log('itemAmount',itemAmount);
            slackTotalAmount = slackTotalAmount+itemAmount.amountTotal; 
        })

        setTotalAmount(slackTotalAmount);

        setPageLoadCount(pageLoadCount + 1);
    }



    

    function openModal() {
        setIsOpen(true);
      }
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
      function closeModal() {
        setIsOpen(false);
      }
    

    const modelCloseCustom = () => {
        setIsOpen(false);
        if(apiResponce == 'success')
        resetAllData();
    }
    const modelOpenCustom = (isStatus) => {
        setApiResponce(isStatus);
        setIsOpen(true);
   }

    const lotterySubmitRecordsCallActionMob = () => {
        console.log('ooooooooo',mainSubmitData)
        let game_dates = mainSubmitData;
        let saveLOttoData = {
            "member_id":auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0,
            "merchant_id":auth && auth.auth && auth.auth.merchant_id ? auth.auth.merchant_id: 0,
            game_dates
        }
        
        console.log('saveLOttoData',saveLOttoData)
        dispatch(lotterySubmit(saveLOttoData, response =>{
            if(response.statusCode  == 201  || response.statusCode  == 200 ){
                setResultData(response.data)
                modelOpenCustom('success');

            }else {
                modelOpenCustom('failure');
            }
          }));
    } 


    return (
        
        <>
        <ToastContainer />
            {activeGameType ? 
                <>  
                    <div className="row">
                        <div className="col-6" style={{ padding: '-1px' }}>
                            <input type="text" 
                                inputMode='none'
                                className="form-control" 
                                placeholder={t('4D_Bet_Number')}
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
                                className="form-control text-right-for-amount" 
                                placeholder={t('Big_Bet')}
                                value={bigValue}
                                onClick={() => setCurserPointer('big')} 
                            />
                        </div>
                        <div className="col-3" style={{ padding: '-0.9px' }}>
                            <input 
                                inputMode='none'
                                type="text" 
                                className="form-control text-right-for-amount"
                                placeholder={t('Small_Bet')}
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
                                placeholder={t('3D_Bet_Number')}
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
                                className="form-control text-right-for-amount"
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
                                className="form-control text-right-for-amount"
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
                        <img className="img-fluid" src="images\betting\0000.png" alt="" style={{ width: '20px' }} /> {t('Box')}
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
                        <img className="img-fluid" src="images\betting\000000.png" alt="" style={{ width: '20px' }} /> {t('iBox')}
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
                        <img className="img-fluid" src="images\betting\00000000.png" alt="" style={{ width: '20px' }} /> {t('Reverse')}
                    </label>                       
                </div>
            </div>
            
            <FinalDataContainer _previewSubmitData={previewSubmitData} finalSubmitData={_finalSubmitData} _bettingInitData={bettingInitData} totalAmount={totalAmount}/>

            
                    
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
                        <button className="btn btn-outline-dark"  onClick={() => previewSubmitData('add','')} style={{ width:'100%' }}>
                            <b>+</b>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-2 mb-2 row">
                <div className='col-6'>
                    <button className="form-control" onClick={() => resetAllData()} style={{ background: '-webkit-linear-gradient(90deg, rgb(253, 184, 3) 0%, rgb(247, 234, 120) 100%)' }}> 
                        <b>{t('Reset')}</b> 
                    </button> 
                </div>
                <div onClick={() => lotterySubmitRecordsCallActionMob()} className='col-6'>
                    <button className="form-control text-light" style={{ background: '#e91d25' }}> 
                        <b>{t('BET')}</b> 
                    </button> 
                </div>            
            </div> 



            

            <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
              >   
                
                <div className="modal-content card">
                            <div className="modal-header text-white" style={{backgroundColor:'#bc2263'}}>
                                <h5 className="modal-title" id="bettingModal" style={{height: '40px',paddingLeft:'10px'}}>
                                {/*t('Bet_Successful')*/}
                                { apiResponce == 'success' ? t('Bet_Successful') : 'Bet Failed '}
                                </h5>
                            </div>
                            <div className="modal-body" >
                                <div class="container-fluid table-wrapper-scroll-y my-custom-scrollbar">
                                    {apiResponce == 'success' ? 
                                    (<div class="row">
                                        <div class="col-6 col-sm-8">
                                            <p>{t('Total')}</p>
                                            <p>{t('Accepted_bet_amount')}</p>
                                            <p>{t('Rebate')}</p>
                                            <p style={{fontWeight:'bold'}}>{t('Net_Amount')}</p>
                                        </div>
                                        <div class="col-6 col-sm-4" style={{textAlign:'right'}}>
                                            <p>{resultData && resultData.total ? parseFloat(resultData.total).toFixed(2) : 0 }</p>
                                            <p>{resultData && resultData.acp_bet ? parseFloat(resultData.acp_bet).toFixed(2) : 0 }</p>
                                            <p>{resultData && resultData.rebat ? parseFloat(resultData.rebat).toFixed(2) : 0 }</p>
                                            <p style={{fontWeight:'bold'}}>{resultData && resultData.netAmount ? parseFloat(resultData.netAmount).toFixed(2) : 0 }</p>
                                        </div>
                                    </div>) : (<div class="row"><div class="text-center top-50"></div><div class="text-center top-50">{apiResponce}</div></div>)}
                                    <hr></hr>
                                    
                                    
                                    <RejectedBedContainer dataRecords ={resultData && resultData.rejected ? resultData.rejected : []}/>
                                   
                                    
                                </div>
                            </div>
                            <div class="modal-footer" style={{justifyContent:'center'}}>
                                <button type="button" style={{backgroundColor:'#bc2263',fontWeight:'bold'}} className="btn  btn-sm text-white" onClick={modelCloseCustom}>OK</button>
                            </div>
                        </div>
            </Modal>
        </>
    );

}

export default BettingInputsForMob;