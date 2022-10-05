import DateAndGameOptionMob from './dateAndGameOptionMob';
import BettingInputsForMob from './bettingInputsForMob';
import React, { useState,useEffect } from "react";
import styles from '../../styles/Home.module.css'
import Modal from 'react-modal';
let localStateInitData = {
    number: { value: "", disabled: 0 },number_field: { value: "", disabled: 0 }, big: { value: "", disabled: 0 }, small: { value: "", disabled: 0 }, _3a: { value: "", disabled: 0 }, _3c: { value: "", disabled: 0 },
    bet_type: { box_value: 0, box_disabled: 0, i_box_value: 0, i_box_disabled: 0, reverse_value: 0, reverse_disabled: 0 }, amount: { value: "", disabled: 1 }
};

let bettingInputsData = [ {name:'01',dataInit:localStateInitData} ];

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
const BettingOptionSelectionForMob = ({_bettingDatesStore}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
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

    let dateAndGameOptionData = [
        { 
          "id": 1,
          "date": '02/12/2015',
          "selected": true,
          "games": [
            {
            "name":"da ma chai",
            "image":"assets/images/icons/damacai.png", 
            "selected": false
            },
            {
            "name":"magnum",
            "image":"assets/images/icons/magnum.png", 
            "selected": false
            },
            {
            "name":"toto",
            "image":"assets/images/icons/toto.png", 
            "selected": false
            },
        ],
        },
        {
          "id":2,
          "date": '10-03-2022',
          "selected": false,
          "games": [
            {
            "name":"da ma chai",
            "image":"assets/images/icons/damacai.png", 
            "selected": false
            },
            {
            "name":"magnum",
            "image":"assets/images/icons/magnum.png", 
            "selected": false
            },
            {
            "name":"toto",
            "image":"assets/images/icons/toto.png", 
            "selected": false
            },
        ],        },
        {
          "id":3,
          "date": '2022-10-03',
          "selected": false,
          "games": [
            {
            "name":"da ma chai",
            "image":"assets/images/icons/damacai.png", 
            "selected": false
            },
            {
            "name":"magnum",
            "image":"assets/images/icons/magnum.png", 
            "selected": false
            },
            {
            "name":"toto",
            "image":"assets/images/icons/toto.png", 
            "selected": false
            },
        ],        },
        {
          "id":4,
          "date": '2017-04-23',
          "selected": false,
          "games": [
            {
            "name":"da ma chai",
            "image":"assets/images/icons/damacai.png", 
            "selected": false
            },
            {
            "name":"magnum",
            "image":"assets/images/icons/magnum.png", 
            "selected": false
            },
            {
            "name":"toto",
            "image":"assets/images/icons/toto.png", 
            "selected": false
            },
        ],        }
    ];

      _bettingDatesStore

      dateAndGameOptionData;

      console.log('_bettingDatesStore:',_bettingDatesStore);
      console.log('dateAndGameOptionData:',dateAndGameOptionData);


    const [bettingInitData, setBettingInitData] = useState(dateAndGameOptionData);
    //console.log("bettingInitData " ,bettingInitData)

    const [bettingInputsDataParent, setLocalStateInitDataParent] = useState(bettingInputsData);
    const clearAllRecords = () => {
        setLocalStateInitDataParent([ {name:'01',dataInit:localStateInitData} ]);
    }
    const [activeGame, setActive] = useState(false);
    return(
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
            {/* <div className="form-group">
                <button onClick={openModal} className="form-control custom-i-dg py-1 d-flex align-items-center down-arrow" style={{ background: '-webkit-linear-gradient( 90deg, rgb(253,184,3) 0%, rgb(247,234,120) 100%)', fontSize: '12px', flexDirection:'row',flexWrap:'nowrap', overflowX:'auto' }}> 
                
                  <span className='border-doted rounded p-1 mr-1 small' style={{minWidth:'75px'}}>21-09 MPT</span> <span className='border-doted rounded p-1 mr-1 small' style={{minWidth:'75px'}}>21-09 MPT</span> <span className='border-doted rounded p-1 mr-1 small' style={{minWidth:'75px'}}>21-09 MPT</span> 
                  <span className='border-doted rounded p-1 mr-1 small' style={{minWidth:'75px'}}>21-09 MPT</span> 
                  <span className='border-doted rounded p-1 mr-1 small' style={{minWidth:'75px'}}>21-09 MPT</span> 
                  <span className='border-doted rounded p-1 mr-1 small' style={{minWidth:'75px'}}>21-09 MPT</span> 
                
                    <img className="img-fluid" src="images\betting\1111111.png" alt="" style={{ width: '20px',float: 'right', marginTop:'5px' }}  />

                </button>             
            </div> */}
            {bettingInputsDataParent.map((item) => (<BettingInputsForMob key={'bettingInputs'+item.name} item={item} activeGame={activeGame}/>) )}      
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >   
                <div className="d-flex my-3">
                    <div className="round-h5">
                        <input type="checkbox" id="acheckbox1" />
                        <label htmlFor="acheckbox1"></label>
                    </div>
                    <label onClick={() => selectAllDate() } className="small" htmlFor="acheckbox1"><b>Select All</b></label>
                </div>
                {dateAndGameOptionData.map((item) => (<DateAndGameOptionMob key={'dateAndGameOption'+item.id} item={item} _dateAndGameOptionData={dateAndGameOptionData} _bettingInitData={bettingInitData} _setBettingInitData={setBettingInitData}/>) )}
            </Modal>
        </div>
    )
} 
export default BettingOptionSelectionForMob;