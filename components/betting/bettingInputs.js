import React, { useState,useEffect } from "react";

import { useTranslation } from "react-i18next";

const BettingInputs = ({ item,ids, _updateBettingInputsData, _loadpageCounter,_setLoadpageCounter,_gameCount,_limit}) => {
    let betLimit = _limit;
    let limit = betLimit;
    
    
    const { t } = useTranslation();
    const [active, setActive] = useState(false);
    let localStateInitData = item.dataInit;

    const calculate3DAmountEnable = (getValue,operationField,) =>{
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
   const hideError = (ids) => {	
    $("#ErrorBig"+ids).html('');	
    $("#ErrorBig"+ids).css('visibility', 'hidden')	
    $("#ErrorSmall"+ids).html('');	
    $("#ErrorSmall"+ids).css('visibility', 'hidden')	
    $("#ErrorC"+ids).html('');	
    $("#ErrorC"+ids).css('visibility', 'hidden')	
    $("#ErrorA"+ids).html('');	
    $("#ErrorA"+ids).css('visibility', 'hidden')	
   }
    const numberInputHandler = (getValue, operationField,idas) => {
        let localStateDataForChange ={ ...item.dataInit};

        let threeDAmout = calculate3DAmountEnable(getValue,operationField);
        


        if (operationField == 'number') {


            if (!getValue.match("^[R-Rr-r0-9]*$")) {
                return false;
            }

            if (getValue && getValue.match(/r/i) && (getValue.toLowerCase().match(/r/g).length == 2 || getValue.toLowerCase().match(/r/g).length == 3 || getValue.toLowerCase().match(/r/g).length == 4)) {
                return false;
            }

             localStateDataForChange = { ...localStateDataForChange, number: { value: getValue, disabled: 0 } };
            if (getValue.length == 1 || getValue.length == 2) {

                localStateDataForChange = { ...localStateDataForChange, big: { value: "", disabled: 1 } };
                localStateDataForChange = { ...localStateDataForChange, small: { value: "", disabled: 1 } };
                localStateDataForChange = { ...localStateDataForChange, _3a: { value: "", disabled: 1 } };
                localStateDataForChange = { ...localStateDataForChange, _3c: { value: "", disabled: 1 } };
                localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };
            } else if (getValue.length == 3) {

                localStateDataForChange = { ...localStateDataForChange, big: { value: "", disabled: 0, error:0 } };
                localStateDataForChange = { ...localStateDataForChange, small: { value: "", disabled: 0, error:0 } };
                localStateDataForChange = { ...localStateDataForChange, _3a: { value: "", disabled: 0, error:0 } };
                localStateDataForChange = { ...localStateDataForChange, _3c: { value: "", disabled: 0, error:0 } };
                localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 } };
              
                
                localStateDataForChange = { ...localStateDataForChange, big: { value: "", disabled: 1 } };
                localStateDataForChange = { ...localStateDataForChange, small: { value: "", disabled: 1 } };

                
                let uniqueAges = getStringUniqueCharactors(getValue);
                let isPalindrom =  checkPalindrome(getValue);
                if (getValue.includes("R") || getValue.includes("r")) 
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };
                else if (uniqueAges.length == 1) 
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };
                else if (isPalindrom) 
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };
                else 
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 0 } };
                


            } else if (getValue.length == 4) {
                localStateDataForChange = { ...localStateDataForChange, big: { value: "", disabled: 0,error:0 } };
                localStateDataForChange = { ...localStateDataForChange, small: { value: "", disabled: 0,error:0 } };
                localStateDataForChange = { ...localStateDataForChange, _3a: { value: "", disabled: 0,error:0 } };
                localStateDataForChange = { ...localStateDataForChange, _3c: { value: "", disabled: 0,error:0 } };
                localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 } };

                

                let uniqueAges = getStringUniqueCharactors(getValue);
                let isPalindrom =  checkPalindrome(getValue);
                if (getValue.includes("R") || getValue.includes("r")) {
                    localStateDataForChange = { ...localStateDataForChange, _3a: { value: "", disabled: 1 } };
                    localStateDataForChange = { ...localStateDataForChange, _3c: { value: "", disabled: 1 } };
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };


                } else  if (uniqueAges.length == 1) {
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };
                } else  if (isPalindrom) {
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 1 } };
                } else {
                    localStateDataForChange = { ...localStateDataForChange, _3a: { value: "", disabled: 0 } };
                    localStateDataForChange = { ...localStateDataForChange, _3c: { value: "", disabled: 0 } };
                    if (threeDAmout) {
                        localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };
                    } else {
                        localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 } };
                    }
                }


            } else {
             //   localStateDataForChange = { ...item.dataInit}

                localStateDataForChange = { ...localStateDataForChange, big: { value: "", disabled: 1,error:0 } };
                localStateDataForChange = { ...localStateDataForChange, small: { value: "", disabled: 1, error:0 } };
                localStateDataForChange = { ...localStateDataForChange, _3a: { value: "", disabled: 1, error:0 } };
                localStateDataForChange = { ...localStateDataForChange, _3c: { value: "", disabled: 1, error:0 } };
                localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };
            }
        } else if (operationField == 'box') {

          let changeValue = localStateDataForChange['bet_type']['box_value'] ? 0 : 1;
          let number_value = localStateDataForChange['number']['value'];
        //  if(number_value.length == 3 || number_value.length == 4)
          localStateDataForChange  = changeBoxValues(localStateDataForChange, operationField, changeValue,threeDAmout);
        //   else {
        //       if (localStateDataForChange['number']['value'])
        //         localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: changeValue, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 } };
        //   }
        


        } else if (operationField == 'ibox') {
            let changeValue = localStateDataForChange['bet_type']['i_box_value'] ? 0 : 1;
            let number_value = localStateDataForChange['number']['value'];
          //  if(number_value.length == 3 || number_value.length == 4)
            localStateDataForChange  = changeBoxValues(localStateDataForChange, operationField, changeValue,threeDAmout);
          //  else {
          //  if (localStateDataForChange['number']['value'])
          //  localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 0, i_box_value: changeValue, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 } };
          //  }


        } else if (operationField == 'reverse') {

                let changeValue = localStateDataForChange['bet_type']['reverse_value'] ? 0 : 1;
                let number_value = localStateDataForChange['number']['value'];
            //if(number_value.length == 3)
                localStateDataForChange  = changeBoxValues(localStateDataForChange, operationField, changeValue,threeDAmout);
              //  else {
             //   if (localStateDataForChange['number']['value'])
             //   localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: changeValue, reverse_disabled: 0 } };
         //   }
        } else if (operationField == 'big') {

            
            if (!getValue.match("^[0-9-.]*$")) {
                return false;
            }

            if(getValue.includes('-') || getValue.includes('.')){
                return false;
            }

           let big_max_bet  = limit && limit.length > 0 && limit[0].big_max_bet ?  limit[0].big_max_bet : 0;
           let big_min_bet  = limit && limit.length > 0 && limit[0].big_min_bet ?  limit[0].big_min_bet : 0;
           let fieldError = 0;
           
            if(getValue > big_max_bet && getValue != ''){
                $("#ErrorBig"+idas).html(t('bet_should_not_be_greater_than')+big_max_bet);
                $("#ErrorBig"+idas).css('visibility', 'visible')	

                getValue = big_max_bet;
               // fieldError = 1
               
            }else if(getValue < limit[0].big_min_bet && getValue != ''){

                $("#ErrorBig"+idas).html(t('bet_should_not_be_less_than')+limit[0].big_min_bet);
                $("#ErrorBig"+idas).css('visibility', 'visible')	

               // getValue = ''
               fieldError = 1;
            }
            else if(getValue == 0 && getValue != ''){
                $("#ErrorBig"+idas).html(t('bet_should_not_be_less_than')+big_min_bet);
                $("#ErrorBig"+idas).css('visibility', 'visible')	

               // getValue = ''
               fieldError = 1;
            }
            else{
                $("#ErrorBig"+idas).html('');
                $("#ErrorBig"+idas).css('visibility', 'hidden')	
               // bigError = false
               fieldError = 0;
            }
           
            localStateDataForChange = { ...localStateDataForChange, big: { value: getValue, disabled: 0,error:fieldError } };  
            
        } else if (operationField == 'small') {

            let fieldError = 0;
            if (!getValue.match("^[0-9-.]*$")) {
                return false;
            }
            if(getValue.includes('-') || getValue.includes('.')){
                return false;
            }



            let small_max_bet  = limit && limit.length > 0 && limit[0].small_max_bet ?  limit[0].small_max_bet : 0;
            let small_min_bet  = limit && limit.length > 0 && limit[0].small_min_bet ?  limit[0].small_min_bet : 0;
           //let small_min_bet  =  9;

            if(getValue > small_max_bet && getValue != ''){
                $("#ErrorSmall"+idas).html(t('bet_should_not_be_greater_than')+small_max_bet);
                $("#ErrorSmall"+idas).css('visibility', 'visible');
                getValue = small_max_bet;
               // fieldError = 1;
            }else if(getValue < small_min_bet && getValue != ''){

                $("#ErrorSmall"+idas).html(t('bet_should_not_be_less_than')+small_min_bet);
                $("#ErrorSmall"+idas).css('visibility', 'visible');

               // getValue = ''
                fieldError = 1;
            }
            else{
                $("#ErrorSmall"+idas).html('');
                $("#ErrorSmall"+idas).css('visibility', 'hidden');
                fieldError = 0;

            }

            localStateDataForChange = { ...localStateDataForChange, small: { value: getValue, disabled: 0, error:fieldError } };
        } else if (operationField == '_3a') {

            let fieldError = 0;

            
            if (!getValue.match("^[0-9-.]*$")) {
                return false;
            }
            if(getValue.includes('-') || getValue.includes('.')){
                return false;
            }

            let three_a_max_bet  = limit && limit.length > 0 && limit[0].three_a_max_bet ?  limit[0].three_a_max_bet : 0;
            let three_a_min_bet  = limit && limit.length > 0 && limit[0].three_a_min_bet ?  limit[0].three_a_min_bet : 0;
         //  let three_a_min_bet  = 8;

           //console.log('getValue:',getValue);

            if(getValue > three_a_max_bet  && getValue != ''){
                $("#ErrorA"+idas).html(t('bet_should_not_be_greater_than')+three_a_max_bet);
                $("#ErrorA"+idas).css('visibility', 'visible');

                getValue = three_a_max_bet
               // fieldError = 1;
            }else if(getValue < three_a_min_bet && getValue != ''){
                $("#ErrorA"+idas).html(t('bet_should_not_be_less_than')+three_a_min_bet);
                $("#ErrorA"+idas).css('visibility', 'visible');

               // getValue = ''
               fieldError = 1;
            }
            else{
                $("#ErrorA"+idas).html('');
                $("#ErrorA"+idas).css('visibility', 'hidden');
                fieldError = 0;

            }
           
            localStateDataForChange = { ...localStateDataForChange, _3a: { value: getValue, disabled: 0, error:fieldError } };

            let number_value = localStateDataForChange['number']['value'];
            let isPalindrom =  checkPalindrome(number_value);
            let uniqueAges = getStringUniqueCharactors(number_value);
            //let _3a_value = localStateDataForChange['_3a']['value'];

            if (number_value.length == 4) {

                if (number_value.includes("R") || number_value.includes("r")) {
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };

                } else  if (uniqueAges.length == 1) {
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };
                } else  if (isPalindrom) {
                    if(threeDAmout)
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };
                   else
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 1 } };
                } else {

                    if (threeDAmout) {
                        localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };

                    } else {
                        localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 } };

                    }


                }

            }

        } else if (operationField == '_3c') {
            let fieldError = 0;
            if (!getValue.match("^[0-9-.]*$")) {
                return false;
            }
            if(getValue.includes('-') || getValue.includes('.')){
                return false;
            }

            let three_c_max_bet  = limit && limit.length > 0 && limit[0].three_c_max_bet ?  limit[0].three_c_max_bet : 0;
            let three_c_min_bet  = limit && limit.length > 0 && limit[0].three_c_min_bet ?  limit[0].three_c_min_bet : 0;

            if(getValue > three_c_max_bet && getValue != ''){   
                $("#ErrorC"+idas).html(t('bet_should_not_be_greater_than')+three_c_max_bet);
                $("#ErrorC"+idas).css('visibility','visible');
                getValue = three_c_max_bet;
            }else if(getValue < three_c_min_bet && getValue != ''){
                $("#ErrorC"+idas).html(t('bet_should_not_be_less_than')+three_c_min_bet);
                $("#ErrorC"+idas).css('visibility', 'visible');

               // getValue = ''
                fieldError = 1;
            }
            else{
                $("#ErrorC"+idas).html('');
                $("#ErrorC"+idas).css('visibility','hidden');
                fieldError = 0;
            }
            
            localStateDataForChange = { ...localStateDataForChange, _3c: { value: getValue, disabled: 0, error:fieldError } };


            let number_value = localStateDataForChange['number']['value'];
            let isPalindrom =  checkPalindrome(number_value);
            let uniqueAges = getStringUniqueCharactors(number_value);

            if (number_value.length == 4) {

                if (number_value.includes("R") || number_value.includes("r")) {
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };

                }else  if (uniqueAges.length == 1) {
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };
                } else  if (isPalindrom) {
                    if(threeDAmout)
                     localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };
                    else
                    localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 1 } };
                } else {

                   if (threeDAmout) {
                        localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };

                    } else {
                        localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 } };

                    }


                }



            }

        } else if (operationField == 'delete') {
            $("#ErrorBig"+idas).html('');
            $("#ErrorSmall"+idas).html('');
            $("#ErrorC"+idas).html('');
            $("#ErrorA"+idas).html('');
            localStateDataForChange = { ...localStateDataForChange, number: { value: "", disabled: 0 } };
            localStateDataForChange = { ...localStateDataForChange, big: { value: "", disabled: 1, error:0 } };
            localStateDataForChange = { ...localStateDataForChange, small: { value: "", disabled: 1,error:0 } };
            localStateDataForChange = { ...localStateDataForChange, _3a: { value: "", disabled: 1,error:0 } };
            localStateDataForChange = { ...localStateDataForChange, _3c: { value: "", disabled: 1,error:0 } };
            localStateDataForChange = { ...localStateDataForChange, amount: { value: "", disabled: 1 } };
            localStateDataForChange = { ...localStateDataForChange, bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 } };
        }


        let totalAmount = calculationOfTotalAmount(localStateDataForChange);
        if(!totalAmount)
        totalAmount = 0;

          localStateDataForChange = { ...localStateDataForChange, amount: { value: totalAmount, disabled: 1 } };


        _updateBettingInputsData(item.name,localStateDataForChange);
        _setLoadpageCounter(_loadpageCounter + 1);
    }




      const changeBoxValues = (localStateDataForChange, betTypeName, betTypeValue, threeDAmout) => {

        let _localStateDataForChange = localStateDataForChange; 
        let getValue = _localStateDataForChange['number']['value'];
        let numberValue = getValue;
        let box_value = 0;
        let i_box_value = 0;
        let reverse_value = 0;

        

        if(betTypeName  == 'box'){
            box_value = betTypeValue;
        }else if(betTypeName  == 'ibox'){
            i_box_value = betTypeValue;
        }else if(betTypeName  == 'reverse'){
            reverse_value = betTypeValue;
        }

        let uniqueAges = getStringUniqueCharactors(numberValue);
        let isPalindrom =  checkPalindrome(numberValue);
        if(numberValue.length == 3){
        if (numberValue.includes("R") || numberValue.includes("r")) 
        _localStateDataForChange = { ..._localStateDataForChange, bet_type: { box_value: box_value, box_disabled: 1, i_box_value: i_box_value, i_box_disabled: 1, reverse_value: reverse_value, reverse_disabled: 1 } };
        else if (uniqueAges.length == 1) 
        _localStateDataForChange = { ..._localStateDataForChange, bet_type: { box_value: box_value, box_disabled: 1, i_box_value: i_box_value, i_box_disabled: 1, reverse_value: reverse_value, reverse_disabled: 1 } };
        else if (isPalindrom) 
        _localStateDataForChange = { ..._localStateDataForChange, bet_type: { box_value: box_value, box_disabled: 0, i_box_value: i_box_value, i_box_disabled: 1, reverse_value: reverse_value, reverse_disabled: 1 } };
        else 
        _localStateDataForChange = { ..._localStateDataForChange, bet_type: { box_value: box_value, box_disabled: 0, i_box_value: i_box_value, i_box_disabled: 1, reverse_value: reverse_value, reverse_disabled: 0 } };
      
        }else if(numberValue.length == 4){


            
                if (numberValue.includes("R") || numberValue.includes("r")) {
                    _localStateDataForChange = { ..._localStateDataForChange, _3a: { value: "", disabled: 1 } };
                    _localStateDataForChange = { ..._localStateDataForChange, _3c: { value: "", disabled: 1 } };
                    _localStateDataForChange = { ..._localStateDataForChange, bet_type: { box_value: box_value, box_disabled: 1, i_box_value: i_box_value, i_box_disabled: 1, reverse_value: reverse_value, reverse_disabled: 1 } };


                } else  if (uniqueAges.length == 1) {
                    _localStateDataForChange = { ..._localStateDataForChange, bet_type: { box_value: box_value, box_disabled: 1, i_box_value: i_box_value, i_box_disabled: 1, reverse_value: reverse_value, reverse_disabled: 1 } };
                } else  if (isPalindrom) {
                    if(threeDAmout)
                    _localStateDataForChange = { ..._localStateDataForChange, bet_type: { box_value: box_value, box_disabled: 1, i_box_value: i_box_value, i_box_disabled: 1, reverse_value: reverse_value, reverse_disabled: 1 } };
                    else
                    _localStateDataForChange = { ..._localStateDataForChange, bet_type: { box_value: box_value, box_disabled: 0, i_box_value: i_box_value, i_box_disabled: 0, reverse_value: reverse_value, reverse_disabled: 1 } };
                } else {
                    _localStateDataForChange = { ..._localStateDataForChange, _3a: { value: "", disabled: 0 } };
                    _localStateDataForChange = { ..._localStateDataForChange, _3c: { value: "", disabled: 0 } };
                    if (threeDAmout) {
                        _localStateDataForChange = { ..._localStateDataForChange, bet_type: { box_value: box_value, box_disabled: 1, i_box_value: i_box_value, i_box_disabled: 1, reverse_value: reverse_value, reverse_disabled: 1 } };
                    } else {
                        _localStateDataForChange = { ..._localStateDataForChange, bet_type: { box_value: box_value, box_disabled: 0, i_box_value: i_box_value, i_box_disabled: 0, reverse_value: reverse_value, reverse_disabled: 0 } };
                    }
                }
        }



        return _localStateDataForChange;
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
       total_sum = total_sum + parseFloat(getRow.big.value);


       
      if(getRow && getRow.small && getRow.small.value) 
      total_sum = total_sum + parseFloat(getRow.small.value);


      
      if(getRow && getRow._3a && getRow._3a.value) 
      total_sum = total_sum + parseFloat(getRow._3a.value);


      
      if(getRow && getRow._3c && getRow._3c.value) 
      total_sum = total_sum + parseFloat(getRow._3c.value);


      

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

    const totalBoxingCalculation = (getNumber) => {
        let _getNumber = getNumber;
        let boxing = 0;
        if(_getNumber)
        boxing = getPermutation(_getNumber);
        return boxing ;
    }

    const getPermutation = (_getNumber) => {
        let returnPermutation = 0;
       // let uniqueAges = getStringUniqueCharactors(_getNumber);
        let repeatedRecords = getNumberRepeatedCounterArray(_getNumber);
     //   let uniqueAges = repeatedRecords;


            if(_getNumber.length == 3){
                if(repeatedRecords.length == 3)
                returnPermutation = 6;
                else  if(repeatedRecords.length == 2)
                returnPermutation = 3;
                else  if(repeatedRecords.length == 1)
                returnPermutation = 1;
            } else if(_getNumber.length == 4){
                if(repeatedRecords.length == 4)
                returnPermutation = 24;
                else  if(repeatedRecords.length == 3)
                returnPermutation = 12 ;
                else  if(repeatedRecords.length == 2){
                    if(repeatedRecords[0] == 3 || repeatedRecords[1] == 3)
                    returnPermutation = 4;
                    else 
                     returnPermutation = 6;
                }else  if(repeatedRecords.length == 1)
                returnPermutation = 1;
            }
            return returnPermutation;
    }

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

    const getNumberRepeatedCounterArray = (_getNumber) => {

        let strSplited = _getNumber.split('');
        let object_New = {};

        strSplited.map(item => {

        if(object_New[item])
        object_New[item] = 1 + object_New[item];
        else 
        object_New[item] = 1
        });
        return Object.values(object_New);
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

useEffect(() => {
    numberInputHandler('', '');
  },[_gameCount]);


  const MoneyFormatDisplay = (theInput, getCase) => {
    //Do something with the input
    let getInput = theInput;
    if(getCase == 1){
     if(getInput)
       return theInput.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
     else 
       return '';
    }else{
       return parseFloat(lottery.slave_net_amount).toFixed(2)
    }
 };

 //bigError



 let bigClass = 'form-control-custom text-end';
 let smallClass = 'form-control-custom text-end';
 let _3aClass = 'form-control-custom text-end';
 let _3cClass = 'form-control-custom text-end';
 
 

 if(localStateInitData && localStateInitData.big && localStateInitData.big.error)
 bigClass = 'form-control-custom text-end input-error';

 if(localStateInitData && localStateInitData.small && localStateInitData.small.error)
 smallClass = 'form-control-custom text-end input-error';

 if(localStateInitData && localStateInitData._3a && localStateInitData._3a.error)
 _3aClass = 'form-control-custom text-end input-error';

 if(localStateInitData && localStateInitData._3c && localStateInitData._3c.error)
 _3cClass = 'form-control-custom text-end input-error';







    return (
        
        <tr>
            <td>
                <span className="sno">{item.name}</span>
                
            </td>
            <td>
                {/* <input type="text" className="form-control-custom"
                    value={localStateData && localStateData.number && localStateData.number.value ? localStateData.number.value : ""}
                    maxLength={4}
                    minLength={3}
                    onChange={(e) => numberInputHandler(e.target.value, 'number')}
                /> */}
                <input type="text" className="form-control-custom"
                    value={localStateInitData.number.value ? localStateInitData.number.value : ""}
                    maxLength={4}
                    minLength={1}
                    onChange={(e) => numberInputHandler(e.target.value, 'number')}
                    autoComplete="off"
                /> 
            </td>
            {/* big*/}
            <td style={{position:'relative'}}>
                <input type="text" className={bigClass}
                    onChange={(e) => numberInputHandler(e.target.value, 'big', ids)}
                    id={"BigText"+ids}
                    onBlur={(i) => hideError(ids)}
                    maxLength={10}
                    minLength={1}
                    value={localStateInitData && localStateInitData.big && localStateInitData.big.value ? localStateInitData.big.value : ""}
                    disabled={localStateInitData && localStateInitData.big && localStateInitData.big.disabled ? true : false}
                    />  
                 <span className="betTip" id={"ErrorBig"+ids}></span>


            </td>
            {/* small*/}
            <td style={{position:'relative'}}><input type="text" className={smallClass}
                onChange={(e) => numberInputHandler(e.target.value, 'small', ids)}
                id={"SmallText"+ids}
                onBlur={(i) => hideError(ids)}
                maxLength={10}
                minLength={1}
                value={localStateInitData && localStateInitData.small && localStateInitData.small.value ? localStateInitData.small.value : ""}
                disabled={localStateInitData && localStateInitData.small && localStateInitData.small.disabled ? true : false}
                />
                <span className="betTip" id={"ErrorSmall"+ids}></span>
            </td>
            {/* 3A*/}
            <td style={{position:'relative'}}><input type="text" className={_3aClass}
                onChange={(e) => numberInputHandler(e.target.value, '_3a', ids)}
                id={"AText"+ids}
                onBlur={(i) => hideError(ids)}
                maxLength={10}
                minLength={1}
                value={localStateInitData && localStateInitData._3a && localStateInitData._3a.value ? localStateInitData._3a.value : ""}
                disabled={localStateInitData && localStateInitData._3a && localStateInitData._3a.disabled ? true : false}
                />
                <span className="betTip" id={"ErrorA"+ids}></span>
            </td>
            {/* 3C*/}
            <td style={{position:'relative'}}><input type="text" className={_3cClass}
                onChange={(e) => numberInputHandler(e.target.value, '_3c', ids)}
                id={"CText"+ids}
                onBlur={(i) => hideError(ids)}
                maxLength={10}
                minLength={1}
                value={localStateInitData && localStateInitData._3c && localStateInitData._3c.value ? localStateInitData._3c.value : ""}
                disabled={localStateInitData && localStateInitData._3c && localStateInitData._3c.disabled ? true : false}
                />
               <span className="betTip" id={"ErrorC"+ids}></span>
            </td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className={localStateInitData && localStateInitData.bet_type && localStateInitData.bet_type.box_disabled ? 'btn-custom-small-disabled me-1' : localStateInitData && localStateInitData.bet_type && localStateInitData.bet_type.box_value ? 'btn-custom-small me-1 active-bet-type' : 'btn-custom-small me-1'} disabled={localStateInitData && localStateInitData.bet_type && localStateInitData.bet_type.box_disabled ? true : false} title={"Box"} onClick={(e) => numberInputHandler(1, 'box')}>{t('B')}</button>

                    <button type="button" className={localStateInitData && localStateInitData.bet_type && localStateInitData.bet_type.i_box_disabled? 'btn-custom-small-disabled me-1' : localStateInitData && localStateInitData.bet_type && localStateInitData.bet_type.i_box_value ? 'btn-custom-small me-1 active-bet-type' : 'btn-custom-small me-1'} disabled={localStateInitData && localStateInitData.bet_type && localStateInitData.bet_type.i_box_disabled ? true : false} title={"iBox"} onClick={(e) => numberInputHandler(1, 'ibox')}>{t('I')}</button>

                    <button type="button" className={localStateInitData && localStateInitData.bet_type && localStateInitData.bet_type.reverse_disabled ? 'btn-custom-small-disabled' : localStateInitData && localStateInitData.bet_type && localStateInitData.bet_type.reverse_value ? 'btn-custom-small active-bet-type' : 'btn-custom-small'} disabled={localStateInitData && localStateInitData.bet_type && localStateInitData.bet_type.reverse_disabled ? true : false} title={t("Reverse")} onClick={(e) => numberInputHandler(1, 'reverse')}>{t('R')}</button>
                </div>
            </td>
            <td>
                <input type="text" className="form-control-custom text-end"  value={localStateInitData && localStateInitData.amount && localStateInitData.amount.value ? MoneyFormatDisplay(localStateInitData.amount.value,1) : ""} disabled={localStateInitData && localStateInitData.amount && localStateInitData.amount.disabled ? true : false} />
            </td>
            <td>
                <button type="button" className="btn-delete-small" onClick={(e) => numberInputHandler('', 'delete')} title={t('Delete')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                </button>
            </td>
        </tr>
    );

}

export default BettingInputs;