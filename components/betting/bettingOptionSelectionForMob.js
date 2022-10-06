import DateAndGameOptionMob from './dateAndGameOptionMob';
import BettingInputsForMob from './bettingInputsForMob';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../styles/Home.module.css'

const customStyles = {
  content: {
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    borderRadius: '12px',
  },
};
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

let bettingInputsData = [ {name:'01',dataInit:{...localStateInitData}}];
const BettingOptionSelection = ({_bettingDatesStore,_lotterySubmitRecords}) => {
    const { t } = useTranslation();
    let dateAndGameOptionData = [];
      if(_bettingDatesStore){
        _bettingDatesStore.map(item => {
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
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [bettingInitData, setBettingInitData] = useState(dateAndGameOptionData);
    const [loadpageCounter, setLoadpageCounter] = useState(1);
    const [bettingInputsDataParent, setLocalStateInitDataParent] = useState(bettingInputsData);
    const [activeGame, setActive] = useState(false);
    const [activeGameAll, setActiveAll] = useState(false);

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
            let bettingInputsData2 = [ {name:'01',dataInit:{...localStateInitData2}}];

                        setLocalStateInitDataParent(bettingInputsData2);
                        setLoadpageCounter(loadpageCounter + 1);
    }
    useEffect(() => {
        if (bettingInitData.length === 0){
            setBettingInitData(dateAndGameOptionData)
        }
      });
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


          
    function openModal() {
      setIsOpen(true);
    }
    function afterOpenModal() {
    }
    function closeModal() {
      setIsOpen(false);
    }
  
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }

    const selectAllDate = () => {
      if(activeGameAll){
        alert(activeGameAll);
      }
    }
    
    useEffect(() => {
        selectAllDate();
    }, [activeGameAll]);

    console.log(activeGameAll);
    return(
        <>
          <ToastContainer />
          <section>
            <div>
              <div id={styles.checkboxes} className='row text-center'>
                  <div className='col-5'>
                      <input type="radio" id="3D" name="flexRadioDefault" onChange={() => setActive(!activeGame)} checked={!activeGame} />
                      <label htmlFor="3D">
                          <img className="img-fluid" src={`${activeGame ? "img/red_3d.png":"img/Yellow_3d.png"}`}></img>
                      </label>
                  </div>
                  <div className="col-2 text-center" style={{ fontSize: '36px' }}>
                      <div className="vr"></div>
                  </div>
                  <div className='col-5'>
                      <input type="radio" id="4D" name="flexRadioDefault" onChange={() => setActive(!activeGame)}/>
                      <label htmlFor="4D">
                          <img className="img-fluid" src={`${!activeGame ? "img/red_4d.png":"img/Yellow_4d.png"}`}></img>
                      </label>
                  </div>
              </div>
              <div className="form-group">
                  <button onClick={openModal} className="form-control custom-i-dg" style={{ background: '-webkit-linear-gradient( 90deg, rgb(253,184,3) 0%, rgb(247,234,120) 100%)' }}> <b>SELECT DATE & GAME</b> 
                      <img className="img-fluid" src="images\betting\1111111.png" alt="" style={{ width: '20px',float: 'right', marginTop:'5px' }}  />
                  </button>             
              </div>
            </div>      
          {bettingInputsDataParent.map((item) => (<BettingInputsForMob key={'bettingInputs'+item.name} 
                                                    item={item} 
                                                    _updateBettingInputsData = {updateBettingInputsData}
                                                    _loadpageCounter = {loadpageCounter}
                                                    _setLoadpageCounter = {setLoadpageCounter}
                                                    _gameCount={gameCount}
            />) )}


                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >   
                  <div className="d-flex my-3">
                      <div className="round-h5">
                          <input checked={`${activeGameAll ? "checked":""}`} onChange={() => setActiveAll(!activeGameAll)} type="checkbox" id="acheckbox1" />
                          <label htmlFor="acheckbox1"></label>
                      </div>
                      <label className="small" htmlFor="acheckbox1"><b>Select All</b></label>
                  </div>
                  
              {bettingInitData.map((item) => (<DateAndGameOptionMob key={'dateAndGameOption'+item.id}
                                                    item={item} 
                                                    _bettingInitData={bettingInitData}
                                                    _setBettingInitData={setBettingInitData}
                                                    _loadpageCounter = {loadpageCounter}
                                                    _setLoadpageCounter = {setLoadpageCounter}
              />) )}
              </Modal>
          </section>
        </>
    )
} 
export default BettingOptionSelection;