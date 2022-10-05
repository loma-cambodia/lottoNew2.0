import DateAndGameOption from './dateAndGameOption';
import BettingInputs from './bettingInputs';
import React, { useState, useEffect } from 'react';
import ModalA from '../modal/modalA';
import { useTranslation } from "react-i18next";


    //   Dummy Ticket Data for Modal Use.
      let ticketSubmissionData = [
        {
            "type":"A",
            "total":200.00,
            "accepted":200.00,
            "rebate":20.50,
            "net":180.50,
            "status":"successful"
        },
        {
            "type":"B",
            "total":200.00,
            "accepted":165.00,
            "rejected":35.00,
            "rebate":16.50,
            "net":148.50,
            "status":"successful",
            "rejectedBet":[{
                "date":"27/09",
                "code":"M",
                "number":1234,
                "size":"Big",
                "deduction":-20,
                "comments":"Over Limit"
            },
            {
                "date":"27/09",
                "code":"P",
                "number":1234,
                "size":"Big",
                "deduction":-15,
                "comments":"Over Limit"
            }],
            
        },
        {
            "type":"C",
            "status":"failed",
            "remarks":"The market already closed"
        },

      ];
let localStateInitData = {
    number: { value: "", disabled: 0 },
    big: { value: "", disabled: 0 }, 
    small: { value: "", disabled: 0 },
    _3a: { value: "", disabled: 0 },
    _3c: { value: "", disabled: 0 },
    bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 },
    amount: { value: "", disabled: 1 }
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
    const { t } = useTranslation();
    let dateAndGameOptionData = [];
    
      if(_bettingDatesStore){

    
        _bettingDatesStore.map(item => {

           // console.log('item.games:',item.games);

            let tempObject = { 
                "id": item.id,
                "day": item.day,
                "date" : item.date,
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


    const [loadpageCounter, setLoadpageCounter] = useState(1);
    const [bettingInputsDataParent, setLocalStateInitDataParent] = useState(bettingInputsData);
    const updateBettingInputsData = (itemName,getNewChild) => {
        let bettingInputsDataParentNew = bettingInputsDataParent;
        bettingInputsDataParentNew.map(item => {
           if(item.name == itemName)
              item.dataInit = getNewChild;
        })
        setLocalStateInitDataParent(bettingInputsDataParentNew);
    }
    
    const clearAllRecords = () => {
        let localStateInitData2 = {
            number: { value: "", disabled: 0 }, big: { value: "", disabled: 0 }, small: { value: "", disabled: 0 }, _3a: { value: "", disabled: 0 }, _3c: { value: "", disabled: 0 },
            bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 }, amount: { value: "", disabled: 1 }
        };
            let bettingInputsData2 = [ {name:'01',dataInit:{...localStateInitData2}},
                          {name:'02',dataInit:{...localStateInitData2}},
                          {name:'03',dataInit:{...localStateInitData2}},
                          {name:'04',dataInit:{...localStateInitData2}},
                          {name:'05',dataInit:{...localStateInitData2}},
                          {name:'06',dataInit:{...localStateInitData2}},
                          {name:'07',dataInit:{...localStateInitData2}},
                          {name:'08',dataInit:{...localStateInitData2}},
                          {name:'09',dataInit:{...localStateInitData2}},
                          {name:'10',dataInit:{...localStateInitData2}}
                        ];

                        setLocalStateInitDataParent(bettingInputsData2);
                        setLoadpageCounter(loadpageCounter + 1);
    }


    const lotterySubmitRecordsCallAction = () => {
     ///  let dataSubmit = {customer_id:"1", enterprise_id:"11", datesGamesData:bettingInitData, InputsData:bettingInputsDataParent}
      //  _lotterySubmitRecords(dataSubmit)
      
     // console.log('111');

    } 
    

    useEffect(() => {
        if (bettingInitData.length === 0){
            setBettingInitData(dateAndGameOptionData)
        }
        console.log('useeffect was ran');
      });

      console.log('bettingInputsDataParent:',bettingInputsDataParent);
      
      console.log('bettingInitData:',bettingInitData);


      let gameCount = 0;

      bettingInitData && bettingInitData.map(item => {
        
            if(item.selected == true){
            item.games.map(itemGame => {
                if(itemGame.selected)
                   gameCount++; 
            })

        }
        
      });

      let totalAmount = 0;
      bettingInputsDataParent && bettingInputsDataParent.map(item => {
        if(item.dataInit.amount.value){
            totalAmount += parseInt(item.dataInit.amount.value)
        }
      });


    return(
        
        <section className="page-content custom-padding">
         <div className="container">
          <div className="row justify-content-center">
            {/* {dateAndGameOptionData.map((item) => (<DateAndGameOption key={'dateAndGameOption'+item} item={item}/>) )} */}
          {bettingInitData.map((item) => (<DateAndGameOption key={'dateAndGameOption'+item.id}
                                                  item={item} 
                                                  _bettingInitData={bettingInitData}
                                                  _setBettingInitData={setBettingInitData}
                                                  _loadpageCounter = {loadpageCounter}
                                                   _setLoadpageCounter = {setLoadpageCounter}
                                                  />) )}
              
         </div>
        <div className="table-scalable my-3">
        {/* loadpageCounter:{loadpageCounter} */}
            <table className="">
                <tbody>
                <tr>
                    <th className="border-0"></th>
                    <th className="border-0">{t('Number')}</th>
                    <th className="border-0">{t('Big_Bet')}</th>
                    <th className="border-0">{t('Small_Bet')}</th>
                    <th className="border-0">{t('3')} {t('A')}</th>
                    <th className="border-0">{t('3')} {t('C')}</th>
                    <th className="border-0">{t('Bet_Type')}</th>
                    <th className="border-0">{t('Amount')}</th>
                    <th className="border-0"></th>
                </tr>
                
                {bettingInputsDataParent.map((item) => (<BettingInputs key={'bettingInputs'+item.name} 
                                                         item={item} 
                                                         _updateBettingInputsData = {updateBettingInputsData}
                                                         _loadpageCounter = {loadpageCounter}
                                                         _setLoadpageCounter = {setLoadpageCounter}
                                                         _gameCount={gameCount}
                 />) )}
                <tr>
                    <td colSpan="6">
                        {t('Total_Stake')} {totalAmount}
                    </td>
                    <td><button type="button" className="btn-custom-curve1 me-1" onClick={clearAllRecords}>{t('clear')}</button></td>
                    <td colSpan="2">
                            {/* <button type="button" className="btn-custom-curve2" onClick ={lotterySubmitRecordsCallAction}>Submit</button> */}
                            <button onClick={lotterySubmitRecordsCallAction}  data-bs-toggle="modal" data-bs-target="#bettingModal" type="button" className="btn-custom-curve2">{t('submit')}</button>
                            {/* <button  onClick={e => { showModal();  }}> show Modal </button> */}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    {/* <ModalA show={state.show}/> */}
     {/* Modal*/}
     
                {/* MODAL A */}
                {/* <div className="modal fade" id="bettingModal" tabIndex="-1" aria-labelledby="bettingModal" aria-hidden="true" >
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="modal-header text-white" style={{backgroundColor:'#bc2263'}}>
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
                            <button type="button" style={{backgroundColor:'#bc2263',fontWeight:'bold'}} className="btn  btn-sm text-white" data-bs-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* MODAL B */}


                <div className="modal fade" id="bettingModal" tabIndex="-1" aria-labelledby="bettingModal" aria-hidden="true" >
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="modal-header text-white" style={{backgroundColor:'#bc2263'}}>
                                <h5 className="modal-title" id="bettingModal">
                                {t('Bet_Successful')}
                                </h5>
                            </div>
                            <div className="modal-body" >
                                <div class="container-fluid table-wrapper-scroll-y my-custom-scrollbar">
                                    <div class="row">
                                        <div class="col-8 col-sm-8">
                                            <p>{t('Total')}</p>
                                            <p>{t('Accepted_bet_amount')}</p>
                                            <p>{t('Rebate')}</p>
                                            <p style={{fontWeight:'bold'}}>{t('Net_Amount')}</p>
                                        </div>
                                        <div class="col-8 col-sm-4" style={{textAlign:'right'}}>
                                            <p>{totalAmount}.00</p>
                                            <p>165.00</p>
                                            <p>35.00</p>
                                            <p style={{fontWeight:'bold'}}>148.50</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div><h5>Rejected Bet</h5></div>
                                    <div className="row text-center table-responsive " style={{height:"250px"}}>
                                    <table className="table table-bordered table-striped mb-0">
                                        <tbody style={{fontWeight:'bold'}}>
                                            <tr>
                                            <th scope="row">27/09</th>
                                            <td>{t('M')}</td>
                                            <td>1234</td>
                                            <td>{t('Big')}</td>
                                            <td className="text-danger">-20</td>
                                            <td className="text-danger">{t('Over_Limit')}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">27/09</th>
                                            <td>{t('P')}</td>
                                            <td>1234</td>
                                            <td>{t('Big')}</td>
                                            <td className="text-danger">-15</td>
                                            <td className="text-danger">{t('Over_Limit')}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">27/09</th>
                                            <td>{t('P')}</td>
                                            <td>1234</td>
                                            <td>{t('Big')}</td>
                                            <td className="text-danger">-15</td>
                                            <td className="text-danger">{t('Over_Limit')}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">27/09</th>
                                            <td>{t('M')}</td>
                                            <td>1234</td>
                                            <td>{t('Big')}</td>
                                            <td className="text-danger">-20</td>
                                            <td className="text-danger">{t('Over_Limit')}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">27/09</th>
                                            <td>{t('P')}</td>
                                            <td>1234</td>
                                            <td>{t('Big')}</td>
                                            <td className="text-danger">-15</td>
                                            <td className="text-danger">{t('Over_Limit')}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">27/09</th>
                                            <td>{t('M')}</td>
                                            <td>1234</td>
                                            <td>{t('Big')}</td>
                                            <td className="text-danger">-20</td>
                                            <td className="text-danger">{t('Over_Limit')}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">27/09</th>
                                            <td>{t('M')}</td>
                                            <td>1234</td>
                                            <td>{t('Big')}</td>
                                            <td className="text-danger">-20</td>
                                            <td className="text-danger">{t('Over_Limit')}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">27/09</th>
                                            <td>{t('M')}</td>
                                            <td>1234</td>
                                            <td>{t('Big')}</td>
                                            <td className="text-danger">-20</td>
                                            <td className="text-danger">{t('Over_Limit')}</td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer" style={{justifyContent:'center'}}>
                                <button type="button" style={{backgroundColor:'#bc2263',fontWeight:'bold'}} className="btn  btn-sm text-white" data-bs-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
            </div>
            {/* MODAL B */}
            {/* MODAL C */}
            {/* <div className="modal fade" id="bettingModal" tabIndex="-1" aria-labelledby="bettingModal" aria-hidden="true" >
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="modal-header text-white" style={{backgroundColor:'#bc2263'}}>
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
                                <button type="button" style={{backgroundColor:'#bc2263',fontWeight:'bold'}} className="btn  btn-sm text-white" data-bs-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
            </div> */}
            {/* MODAL C */}
            {/* MODAL D */}
            {/* <div className="modal fade" id="bettingModal" tabIndex="-1" aria-labelledby="bettingModal" aria-hidden="true" >
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                       <div className="modal-header text-white" style={{backgroundColor:'#bc2263'}}>
                            <h5 className="modal-title" id="bettingModal">
                                Bet Failed
                            </h5>
                        </div>
                        <div className="modal-body" >
                            <div class="container-fluid text-center">
                            <h5>Your credit is insufficient.</h5>
                            </div>
                        </div>
                        <div class="modal-footer" style={{justifyContent:'center'}}>
                            <button type="button" style={{backgroundColor:'#bc2263',fontWeight:'bold'}} className="btn  btn-sm text-white" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
             </div> */}
        {/* MODAL D */}
        {/* MODAL E */}
        {/* <div className="modal fade" id="bettingModal" tabIndex="-1" aria-labelledby="bettingModal" aria-hidden="true" >
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                   <div className="modal-header text-white" style={{backgroundColor:'#bc2263'}}>
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
                        <button type="button" style={{backgroundColor:'#bc2263',fontWeight:'bold'}} className="btn  btn-sm text-white" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
         </div> */}
        {/* MODAL E */}
          {/* MODAL F */}
          {/* <div className="modal fade" id="bettingModal" tabIndex="-1" aria-labelledby="bettingModal" aria-hidden="true" >
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-header text-white" style={{backgroundColor:'#bc2263'}}>
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
                        <button type="button" style={{backgroundColor:'#bc2263',fontWeight:'bold'}} className="btn  btn-sm text-white" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
         </div> */}
        {/* MODAL F */}
        {/* End Modal */}
</section>
    )
} 
export default BettingOptionSelection;