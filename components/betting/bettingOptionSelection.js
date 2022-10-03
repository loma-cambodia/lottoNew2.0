import DateAndGameOption from './dateAndGameOption';
import BettingInputs from './bettingInputs';
import React, { useState,useEffect } from "react";
let localStateInitData = {
    number: { value: "", disabled: 0 },number_field: { value: "", disabled: 0 }, big: { value: "", disabled: 0 }, small: { value: "", disabled: 0 }, _3a: { value: "", disabled: 0 }, _3c: { value: "", disabled: 0 },
    bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 }, amount: { value: "", disabled: 1 }
};




let bettingInputsData = [ {name:'01',dataInit:{...localStateInitData}},
                          {name:'02',dataInit:{...localStateInitData}},
                          {name:'03',dataInit:{...localStateInitData}},
                          {name:'04',dataInit:{...localStateInitData}},
                          {name:'05',dataInit:{...localStateInitData}},
                          {name:'06',dataInit:{...localStateInitData}},
                          {name:'07',dataInit:{...localStateInitData}},
                          {name:'08',dataInit:{...localStateInitData}},
                          {name:'09',dataInit:{...localStateInitData}},
                          {name:'10',dataInit:{...localStateInitData}}
                        ];

let dateAndGameOptionData = [1,2,3,4];

const BettingOptionSelection = ({_bettingDatesStore,_lotterySubmitRecords}) => {

    let dateAndGameOptionData = [];
    //  dateAndGameOptionData = [
    //     { 
    //       "id": 1,
    //       "date": '02/12/2015',
    //       "selected": true,
    //       "games": [
    //         {
    //         "name":"da ma chai",
    //         "image":"assets/images/icons/damacai.png", 
    //         "selected": false
    //         },
    //         {
    //         "name":"magnum",
    //         "image":"assets/images/icons/magnum.png", 
    //         "selected": false
    //         },
    //         {
    //         "name":"toto",
    //         "image":"assets/images/icons/toto.png", 
    //         "selected": false
    //         },
    //     ],
    //     },
    //     {
    //       "id":2,
    //       "date": '10-03-2022',
    //       "selected": false,
    //       "games": [
    //         {
    //         "name":"da ma chai",
    //         "image":"assets/images/icons/damacai.png", 
    //         "selected": false
    //         },
    //         {
    //         "name":"magnum",
    //         "image":"assets/images/icons/magnum.png", 
    //         "selected": false
    //         },
    //         {
    //         "name":"toto",
    //         "image":"assets/images/icons/toto.png", 
    //         "selected": false
    //         },
    //     ],        },
    //     {
    //       "id":3,
    //       "date": '2022-10-03',
    //       "selected": false,
    //       "games": [
    //         {
    //         "name":"da ma chai",
    //         "image":"assets/images/icons/damacai.png", 
    //         "selected": false
    //         },
    //         {
    //         "name":"magnum",
    //         "image":"assets/images/icons/magnum.png", 
    //         "selected": false
    //         },
    //         {
    //         "name":"toto",
    //         "image":"assets/images/icons/toto.png", 
    //         "selected": false
    //         },
    //     ],        },
    //     {
    //       "id":4,
    //       "date": '2017-04-23',
    //       "selected": false,
    //       "games": [
    //         {
    //         "name":"da ma chai",
    //         "image":"assets/images/icons/damacai.png", 
    //         "selected": false
    //         },
    //         {
    //         "name":"magnum",
    //         "image":"assets/images/icons/magnum.png", 
    //         "selected": false
    //         },
    //         {
    //         "name":"toto",
    //         "image":"assets/images/icons/toto.png", 
    //         "selected": false
    //         },
    //     ],        }
    //   ];


      if(_bettingDatesStore){

    
        _bettingDatesStore.map(item => {

           // console.log('item.games:',item.games);

            let tempObject = { 
                "id": item.id,
                "date": item.day,
                "selected": false,
                "games": item.games.map(itemGame => {
                    itemGame.selected = false;
                    return itemGame;
                })
              }
              dateAndGameOptionData.push(tempObject);
        });


      }



    const [bettingInitData, setBettingInitData] = useState(dateAndGameOptionData);
  

    const [bettingInputsDataParent, setLocalStateInitDataParent] = useState(bettingInputsData);

    const updateBettingInputsData = (itemName,getNewChild) => {

        let bettingInputsDataParentNew = bettingInputsDataParent;

        bettingInputsDataParentNew.map(item => {
           if(item.name == itemName)
              item.dataInit = getNewChild;

        })

        console.log('bettingInputsDataParentNew:',bettingInputsDataParentNew);

        console.log('getNewChild',getNewChild);
        console.log('itemName:',itemName);



    }









    const clearAllRecords = () => {
        setLocalStateInitDataParent([ {name:'01',dataInit:localStateInitData},{name:'02',dataInit:localStateInitData},
                                      {name:'03',dataInit:localStateInitData},{name:'04',dataInit:localStateInitData},
                                      {name:'05',dataInit:localStateInitData},{name:'06',dataInit:localStateInitData},
                                      {name:'07',dataInit:localStateInitData},{name:'08',dataInit:localStateInitData},
                                      {name:'09',dataInit:localStateInitData},{name:'10',dataInit:localStateInitData}]);
    }


    const lotterySubmitRecordsCallAction = () => {

     ///  let dataSubmit = {customer_id:"1", enterprise_id:"11", datesGamesData:bettingInitData, InputsData:bettingInputsDataParent}

      //  _lotterySubmitRecords(dataSubmit)
      
      console.log('111');

    } 


    //console.log('bettingInitData:',bettingInitData);
   // console.log('bettingInputsDataParent:',bettingInputsDataParent);



    return(
        <section className="page-content custom-padding">
         <div className="container">
          <div className="row justify-content-center">
            {/* {dateAndGameOptionData.map((item) => (<DateAndGameOption key={'dateAndGameOption'+item} item={item}/>) )} */}
          {dateAndGameOptionData.map((item) => (<DateAndGameOption key={'dateAndGameOption'+item.id} item={item} _dateAndGameOptionData={dateAndGameOptionData} _bettingInitData={bettingInitData} _setBettingInitData={setBettingInitData}/>) )}
              
         </div>
        <div className="table-scalable my-3">
            <table className="">
                <tbody>
                <tr>
                    <th className="border-0"></th>
                    <th className="border-0">Number</th>
                    <th className="border-0">Big</th>
                    <th className="border-0">Small</th>
                    <th className="border-0">3 A</th>
                    <th className="border-0">3 C</th>
                    <th className="border-0">Bet type</th>
                    <th className="border-0">Amount</th>
                    <th className="border-0"></th>
                </tr>
                
                {bettingInputsDataParent.map((item) => (<BettingInputs key={'bettingInputs'+item.name} item={item} _updateBettingInputsData = {updateBettingInputsData}/>) )}
                <tr>
                    <td colSpan="6">
                        Total Bet Amount 216.00
                    </td>
                    <td><button type="button" className="btn-custom-curve1 me-1" onClick={clearAllRecords}>CLEAR</button></td>
                    <td colSpan="2">
                            <button type="button" className="btn-custom-curve2" onClick ={lotterySubmitRecordsCallAction}>Submit</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
    )
} 
export default BettingOptionSelection;