import React, { useState } from "react";

const BettingInputs = ({item}) => {
    const [active, setActive] = useState(false);
    let localStateInitData = {number:{value:"", disabled: 0},big:{value:"", disabled: 0},small:{value:"", disabled: 0},_3a:{value:"", disabled: 0},_3c:{value:"", disabled: 0},
                              bet_type:{box_value:0, box_disabled: 0,i_box_value:0, i_box_disabled: 0,reverse_value:0,reverse_disabled: 0}, amount:{value:"", disabled: 1}};

    const [localStateData, setLocalStateData] = useState(localStateInitData);  
    

    const [_3aDisabed, set_3aDisabed] = useState(false);
    const [_3cDisabed, set_3cDisabed] = useState(false);
    const [pageLoadCount, setPageLoadCount] = useState(1);

    const numberInputHandler = (getValue,operationField) => {
        let localStateDataForChange = localStateData;
        console.log('localStateDataForChange:',localStateDataForChange);
        console.log('operationField:',operationField);

        let threeDAmout = false;

        if(localStateDataForChange['_3a']['value'] || localStateDataForChange['_3c']['value']) 
          threeDAmout = true;
        
        if(operationField == 'number'){

    
            if(!getValue.match("^[R-Rr-r0-9]*$")){
                return false;
              }
              console.log('getValue.match(/r/i).length:',getValue.match(/r/i).length);

             if(getValue && getValue.match(/r/i) && (getValue.match(/r/i).length == 2 || getValue.match(/r/i).length == 3 || getValue.match(/r/i).length == 4)){
                return false;
             }


              localStateDataForChange['number'] = {value:getValue, disabled: 0}
             if(getValue.length == 1 || getValue.length == 2){
                localStateDataForChange['big'] = {value:"", disabled: 1}
                localStateDataForChange['small'] = {value:"", disabled: 1}
                localStateDataForChange['_3a'] = {value:"", disabled: 1}
                localStateDataForChange['_3c'] = {value:"", disabled: 1}
                localStateDataForChange['bet_type']['box_disabled'] = 1;
                localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                localStateDataForChange['bet_type']['reverse_disabled'] = 1;
             }else if(getValue.length == 3){

                localStateDataForChange['big'] = {value:"", disabled: 0}
                localStateDataForChange['small'] = {value:"", disabled: 0}
                localStateDataForChange['_3a'] = {value:"", disabled: 0}
                localStateDataForChange['_3c'] = {value:"", disabled: 0}
                localStateDataForChange['bet_type']['box_disabled'] = 0;
                localStateDataForChange['bet_type']['i_box_disabled'] = 0;
                localStateDataForChange['bet_type']['reverse_disabled'] = 0;


                if(getValue.includes("R") || getValue.includes("r")){
                    localStateDataForChange['big'] = {value:"", disabled: 1}
                    localStateDataForChange['small'] = {value:"", disabled: 1}
                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;
                   
                }else{
                    localStateDataForChange['big'] = {value:"", disabled: 1}
                    localStateDataForChange['small'] = {value:"", disabled: 1}
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                }
               

             }else if(getValue.length == 4){
                    localStateDataForChange['big'] = {value:"", disabled: 0}
                    localStateDataForChange['small'] = {value:"", disabled: 0}
                    localStateDataForChange['_3a'] = {value:"", disabled: 0}
                    localStateDataForChange['_3c'] = {value:"", disabled: 0}
                    localStateDataForChange['bet_type']['box_disabled'] = 0;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 0;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 0;


                if(getValue.includes("R") || getValue.includes("r")){
                    localStateDataForChange['_3a'] = {value:"", disabled: 1}
                    localStateDataForChange['_3c'] = {value:"", disabled: 1}
                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;
                   
                }else{

                    if(threeDAmout){
                       localStateDataForChange['_3a'] = {value:"", disabled: 0}
                       localStateDataForChange['_3c'] = {value:"", disabled: 0}
                       localStateDataForChange['bet_type']['box_disabled'] = 1;
                       localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                       localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                    }else {

                      localStateDataForChange['_3a'] = {value:"", disabled: 0}
                      localStateDataForChange['_3c'] = {value:"", disabled: 0}
                      localStateDataForChange['bet_type']['box_disabled'] = 0;
                      localStateDataForChange['bet_type']['i_box_disabled'] = 0;
                      localStateDataForChange['bet_type']['reverse_disabled'] = 0;

                    }

                    
                }
               

             }else{
                localStateDataForChange['big'] = {value:"", disabled: 0}
                localStateDataForChange['small'] = {value:"", disabled: 0}
                localStateDataForChange['_3a'] = {value:"", disabled: 0}
                localStateDataForChange['_3c'] = {value:"", disabled: 0}
                localStateDataForChange['bet_type'] = {box_value:0, box_disabled: 0,i_box_value:0, i_box_disabled: 0,reverse_value:0,reverse_disabled: 0}
             }
        }else if(operationField == 'box'){
            if(localStateDataForChange['number']['value'])
               localStateDataForChange['bet_type']['box_value'] = localStateDataForChange['bet_type']['box_value'] ? 0 : 1;
             localStateDataForChange['bet_type']['i_box_value'] = 0;
             localStateDataForChange['bet_type']['reverse_value'] = 0;
        }else if(operationField == 'ibox'){
            localStateDataForChange['bet_type']['box_value'] = 0;
            if(localStateDataForChange['number']['value'])
            localStateDataForChange['bet_type']['i_box_value'] = localStateDataForChange['bet_type']['i_box_value'] ? 0 : 1;
            localStateDataForChange['bet_type']['reverse_value'] = 0;
       }else if(operationField == 'reverse'){
            localStateDataForChange['bet_type']['box_value'] = 0;
            localStateDataForChange['bet_type']['i_box_value'] = 0;
            if(localStateDataForChange['number']['value'])
             localStateDataForChange['bet_type']['reverse_value'] = localStateDataForChange['bet_type']['reverse_value'] ? 0 : 1;
      }else if(operationField == 'big'){
        localStateDataForChange['big']['value'] = getValue;
       }else if(operationField == 'small'){
        localStateDataForChange['small']['value'] = getValue;
       } else if(operationField == '_3a'){

        console.log('_3a');
        console.log('_3a:threeDAmout:',threeDAmout);

                       localStateDataForChange['_3a']['value'] = getValue;
                      
                       let number_value =  localStateDataForChange['number']['value'];

                        if(number_value.length == 4){

                                if(number_value.includes("R") || number_value.includes("r")){
                                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;
                                
                                }else{

                                    if(threeDAmout){
                                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                                    }else {

    
                                    localStateDataForChange['bet_type']['box_disabled'] = 0;
                                    localStateDataForChange['bet_type']['i_box_disabled'] = 0;
                                    localStateDataForChange['bet_type']['reverse_disabled'] = 0;

                                    }

                                    
                                }
                    
                    }


       }else if(operationField == '_3c'){
        localStateDataForChange['_3c']['value'] = getValue;


        let number_value =  localStateDataForChange['number']['value'];

        if(number_value.length == 4){

                if(number_value.includes("R") || number_value.includes("r")){
                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;
                
                }else{

                    if(threeDAmout){
                    localStateDataForChange['bet_type']['box_disabled'] = 1;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 1;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 1;

                    }else {

                    localStateDataForChange['bet_type']['box_disabled'] = 0;
                    localStateDataForChange['bet_type']['i_box_disabled'] = 0;
                    localStateDataForChange['bet_type']['reverse_disabled'] = 0;

                    }

                    
                }
    
    }



       }else if(operationField == 'delete'){
        localStateDataForChange['number'] = {value:"", disabled: 0}
        localStateDataForChange['big'] = {value:"", disabled: 0}
        localStateDataForChange['small'] = {value:"", disabled: 0}
        localStateDataForChange['_3a'] = {value:"", disabled: 0}
        localStateDataForChange['_3c'] = {value:"", disabled: 0}
        localStateDataForChange['bet_type'] = {box_value:0, box_disabled: 0,i_box_value:0, i_box_disabled: 0,reverse_value:0,reverse_disabled: 0}
       }


        console.log('localStateDataForChange2:',localStateDataForChange);
        setLocalStateData(localStateDataForChange);
        setPageLoadCount(pageLoadCount + 1);
    }

              return (
                <tr>
                    <td>
                        <span className="sno">{item}</span>
                    </td>
                    <td>
                        <input type="text" className="form-control-custom"
                         value={localStateData.number.value} 
                         maxLength={4}
                         minLength={3}
                         onChange={(e) => numberInputHandler(e.target.value, 'number')}
                         />
                    </td>
                    <td>
                        <input type="text" className="form-control-custom" 
                        onChange={(e) => numberInputHandler(e.target.value, 'big')}
                        value={localStateData.big.value}
                        disabled={localStateData.big.disabled ? true : false}
                        /></td>{/* big*/}
                    <td><input type="text" className="form-control-custom"
                         onChange={(e) => numberInputHandler(e.target.value, 'small')}
                         value={localStateData.small.value}
                         disabled={localStateData.small.disabled ? true : false}
                     /></td>{/* small*/}
                    <td><input type="text" className="form-control-custom"
                            onChange={(e) => numberInputHandler(e.target.value, '_3a')}
                            value={localStateData._3a.value}
                            disabled={localStateData._3a.disabled ? true : false}
                            /></td>{/* 3A*/}
                    <td><input type="text" className="form-control-custom" 
                          onChange={(e) => numberInputHandler(e.target.value, '_3c')}
                          value={localStateData._3c.value} 
                          disabled={localStateData._3c.disabled ? true : false}
                          /></td>{/* 3C*/}
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button"  className={localStateData.bet_type.box_value ? 'btn-custom-small me-1 active-bet-type' : 'btn-custom-small me-1'}  disabled={localStateData.bet_type.box_disabled ? true : false} title={localStateData.bet_type.box_disabled ? "Disabled" : "Enabled"} onClick={(e) => numberInputHandler(1, 'box')}>B</button>
                    
                            <button type="button" className={localStateData.bet_type.i_box_value ? 'btn-custom-small me-1 active-bet-type' : 'btn-custom-small me-1' } disabled={localStateData.bet_type.i_box_disabled ? true : false} title={localStateData.bet_type.i_box_disabled ? "Disabled" : "Enabled"} onClick={(e) => numberInputHandler(1, 'ibox')}>I</button>
                        
                            <button type="button" className={localStateData.bet_type.reverse_value ? 'btn-custom-small active-bet-type' : 'btn-custom-small'} disabled={localStateData.bet_type.reverse_disabled ? true : false} title={localStateData.bet_type.reverse_disabled ? "Disabled" : "Enabled"} onClick={(e) => numberInputHandler(1, 'reverse')}>R</button>
                        </div>                        
                    </td>
                    <td>
                        <input type="text" className="form-control-custom" disabled={localStateData.amount.disabled ? true : false}/>
                    </td>
                    <td>
                        <button type="button" className="btn-delete-small" onClick={(e) => numberInputHandler('', 'delete')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
);

}

export default BettingInputs;