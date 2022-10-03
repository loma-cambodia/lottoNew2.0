import DateAndGameOption from './dateAndGameOption';
import BettingInputs from './bettingInputs';
import React, { useState,useEffect } from "react";
let localStateInitData = {
    number: { value: "", disabled: 0 },number_field: { value: "", disabled: 0 }, big: { value: "", disabled: 0 }, small: { value: "", disabled: 0 }, _3a: { value: "", disabled: 0 }, _3c: { value: "", disabled: 0 },
    bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 }, amount: { value: "", disabled: 1 }
};





let bettingInputsData = [ {name:'01',dataInit:localStateInitData},{name:'02',dataInit:localStateInitData},
{name:'03',dataInit:localStateInitData},{name:'04',dataInit:localStateInitData},
{name:'05',dataInit:localStateInitData},{name:'06',dataInit:localStateInitData},
{name:'07',dataInit:localStateInitData},{name:'08',dataInit:localStateInitData},
{name:'09',dataInit:localStateInitData},{name:'10',dataInit:localStateInitData}];

let dateAndGameOptionData = [1,2,3,4];

const BettingOptionSelection = ({_bettingDatesStore}) => {

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






      //_bettingDatesStore

     // dateAndGameOptionData;

    //   console.log('_bettingDatesStore:',_bettingDatesStore);
     // console.log('dateAndGameOptionData:',dateAndGameOptionData);


    const [bettingInitData, setBettingInitData] = useState(dateAndGameOptionData);
    // console.log("BettingOptionSelection:bettingInitData " ,bettingInitData)

    const [bettingInputsDataParent, setLocalStateInitDataParent] = useState(bettingInputsData);
    const clearAllRecords = () => {
        setLocalStateInitDataParent([ {name:'01',dataInit:localStateInitData},{name:'02',dataInit:localStateInitData},
        {name:'03',dataInit:localStateInitData},{name:'04',dataInit:localStateInitData},
        {name:'05',dataInit:localStateInitData},{name:'06',dataInit:localStateInitData},
        {name:'07',dataInit:localStateInitData},{name:'08',dataInit:localStateInitData},
        {name:'09',dataInit:localStateInitData},{name:'10',dataInit:localStateInitData}]);
    }

    return(
        
        <section className="page-content custom-padding">
            {/* Modal*/}
                {/* MODAL A */}
                {/* <div className="modal fade" id="bettingModal" tabIndex="-1" aria-labelledby="bettingModal" aria-hidden="true" >
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="modal-header text-white" style={{backgroundColor:'#0d6efd'}}>
                                <h5 className="modal-title" id="bettingModal">
                                    Bet Successful
                                </h5>
                            </div>
                            <div className="modal-body" >
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-8 col-sm-8">
                                            <p>Total bet amount</p>
                                            <p>Accepted bet amount</p>
                                            <p>Rebate</p>
                                            <p style={{fontWeight:'bold'}}>Net Amount</p>
                                        </div>
                                        <div class="col-8 col-sm-4" style={{textAlign:'right'}}>
                                            <p>200.00</p>
                                            <p>200.00</p>
                                            <p>20.00</p>
                                            <p style={{fontWeight:'bold'}}>180.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer" style={{justifyContent:'center'}}>
                                <button type="button" className="btn  btn-sm btn-outline-primary" data-bs-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* MODAL B */}
                <div className="modal fade" id="bettingModal" tabIndex="-1" aria-labelledby="bettingModal" aria-hidden="true" >
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="modal-header text-white" style={{backgroundColor:'#0d6efd'}}>
                                <h5 className="modal-title" id="bettingModal">
                                    Bet Successful
                                </h5>
                            </div>
                            <div className="modal-body" >
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-8 col-sm-8">
                                            <p>Total bet amount</p>
                                            <p>Accepted bet amount</p>
                                            <p>Rebate</p>
                                            <p style={{fontWeight:'bold'}}>Net Amount</p>
                                        </div>
                                        <div class="col-8 col-sm-4" style={{textAlign:'right'}}>
                                            <p>200.00</p>
                                            <p>165.00</p>
                                            <p>35.00</p>
                                            <p style={{fontWeight:'bold'}}>148.50</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div><h5>Rejected Bet</h5></div>
                                    <div class="row text-center">
                                    <table class="table table-borderless">
                                        <tbody style={{fontWeight:'bold'}}>
                                            <tr>
                                            <th scope="row">27/09</th>
                                            <td>M</td>
                                            <td>1234</td>
                                            <td>Big</td>
                                            <td className="text-danger">-20</td>
                                            <td className="text-danger">Over Limit</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">27/09</th>
                                            <td>P</td>
                                            <td>1234</td>
                                            <td>Big</td>
                                            <td className="text-danger">-15</td>
                                            <td className="text-danger">Over Limit</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer" style={{justifyContent:'center'}}>
                                <button type="button" className="btn  btn-sm btn-outline-primary" data-bs-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
            </div>
            {/* MODAL B */}
            {/* MODAL C */}
            {/* <div className="modal fade" id="bettingModal" tabIndex="-1" aria-labelledby="bettingModal" aria-hidden="true" >
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="modal-header text-white" style={{backgroundColor:'#0d6efd'}}>
                                <h5 className="modal-title" id="bettingModal">
                                    Bet Failed
                                </h5>
                            </div>
                            <div className="modal-body" >
                                <div class="container-fluid text-center">
                                    <h5>The market already closed</h5>
                                </div>
                            </div>
                            <div class="modal-footer" style={{justifyContent:'center'}}>
                                <button type="button" className="btn  btn-sm btn-outline-primary" data-bs-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
            </div> */}
            {/* MODAL C */}
            {/* MODAL D */}
            {/* <div className="modal fade" id="bettingModal" tabIndex="-1" aria-labelledby="bettingModal" aria-hidden="true" >
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header text-white" style={{backgroundColor:'#0d6efd'}}>
                            <h5 className="modal-title" id="bettingModal">
                                Bet Failed
                            </h5>
                        </div>
                        <div className="modal-body" >
                            <div class="container-fluid text-center">
                            <h5>The market already closed</h5>
                            </div>
                        </div>
                        <div class="modal-footer" style={{justifyContent:'center'}}>
                            <button type="button" className="btn  btn-sm btn-outline-primary" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
        </div> */}
        {/* MODAL D */}
        {/* MODAL E */}
        {/* <div className="modal fade" id="bettingModal" tabIndex="-1" aria-labelledby="bettingModal" aria-hidden="true" >
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-header text-white" style={{backgroundColor:'#0d6efd'}}>
                        <h5 className="modal-title" id="bettingModal">
                            Bet Failed
                        </h5>
                    </div>
                    <div className="modal-body" >
                        <div class="container-fluid text-center">
                        <h5>The selected company already closed</h5>
                        </div>
                    </div>
                    <div class="modal-footer" style={{justifyContent:'center'}}>
                        <button type="button" className="btn  btn-sm btn-outline-primary" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
         </div> */}
        {/* MODAL E */}
          {/* MODAL F */}
          {/* <div className="modal fade" id="bettingModal" tabIndex="-1" aria-labelledby="bettingModal" aria-hidden="true" >
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-header text-white" style={{backgroundColor:'#0d6efd'}}>
                        <h5 className="modal-title" id="bettingModal">
                            Bet Failed
                        </h5>
                    </div>
                    <div className="modal-body" >
                        <div class="container-fluid text-center">
                        <h5>Bet is not allowed.</h5>
                        <h5>Please contact your merchant.</h5>
                        </div>
                    </div>
                    <div class="modal-footer" style={{justifyContent:'center'}}>
                        <button type="button" className="btn  btn-sm btn-outline-primary" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
         </div> */}
        {/* MODAL F */}
        {/* End Modal */}
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
                
                {bettingInputsDataParent.map((item) => (<BettingInputs key={'bettingInputs'+item.name} item={item}/>) )}
                <tr>
                    <td colSpan="6">
                        Total Bet Amount 216.00
                    </td>
                    <td><button type="button" className="btn-custom-curve1 me-1" onClick={clearAllRecords}>CLEAR</button></td>
                    <td colSpan="2">
                            <button  data-bs-toggle="modal" data-bs-target="#bettingModal" type="button" className="btn-custom-curve2">Submit</button>
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