import DateAndGameOption from './dateAndGameOption';
import BettingInputs from './bettingInputs';
import React, { useState, useEffect } from 'react';
import ModalA from '../modal/modalA';
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBettingDates, lotterySubmit } from '../../store/actions/bettingActions';
import { getLogin } from '../../store/actions/authActions';
import { useDispatch, useSelector } from "react-redux";
import RejectedBedContainer from './rejectedBedContainer';
import Modal from 'react-modal';
import { twoDecimalPlaceWithAmount } from '../Utils';

// let ticketSubmissionData = [
//   {
//     "type": "A",
//     "total": 200.00,
//     "accepted": 200.00,
//     "rebate": 20.50,
//     "net": 180.50,
//     "status": "successful"
//   },
//   {
//     "type": "B",
//     "total": 200.00,
//     "accepted": 165.00,
//     "rejected": 35.00,
//     "rebate": 16.50,
//     "net": 148.50,
//     "status": "successful",
//     "rejectedBet": [{
//       "date": "27/09",
//       "code": "M",
//       "number": 1234,
//       "size": "Big",
//       "deduction": -20,
//       "comments": "Over Limit"
//     },
//     {
//       "date": "27/09",
//       "code": "P",
//       "number": 1234,
//       "size": "Big",
//       "deduction": -15,
//       "comments": "Over Limit"
//     }],

//   },
//   {
//     "type": "C",
//     "status": "failed",
//     "remarks": "The market already closed"
//   },

// ];

const customStyles = {
  content: {
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    borderRadius: '12px',
    padding: 0
  },
};

let localStateInitData = {
  number: { value: "", disabled: 1 },
  big: { value: "", disabled: 1, error:0 },
  small: { value: "", disabled: 1, error:0 },
  _3a: { value: "", disabled: 1 , error:0},
  _3c: { value: "", disabled: 1, error:0 },
  bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 },
  amount: { value: "", disabled: 1 }
};


let bettingInputsData = [{ name: '01', dataInit: { ...localStateInitData } },
{ name: '02', dataInit: { ...localStateInitData } },
{ name: '03', dataInit: { ...localStateInitData } },
{ name: '04', dataInit: { ...localStateInitData } },
{ name: '05', dataInit: { ...localStateInitData } },
{ name: '06', dataInit: { ...localStateInitData } },
{ name: '07', dataInit: { ...localStateInitData } },
{ name: '08', dataInit: { ...localStateInitData } },
{ name: '09', dataInit: { ...localStateInitData } },
{ name: '10', dataInit: { ...localStateInitData } }
];

let dateAndGameOptionData = [1, 2, 3, 4];

const BettingOptionSelection = ({ _bettingDatesStore, _lotterySubmitRecords, _betLimit, _auth }) => {
  let betLimit = _betLimit;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  let dateAndGameOptionData = [];

  const auth = _auth;
  let random = Math.floor(1000 + Math.random() * 9000);
  console.log("_bettingDatesStore",_bettingDatesStore)

  const [resultData, setResultData] = React.useState({});

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [apiResponce, setApiResponce] = React.useState('success');
  const [isLoading, setIsLoading] = React.useState(false);


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
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   // subtitle.style.color = '#f00';
  // }
  // function closeModal() {
  //   setIsOpen(false);
  // }

  const modelCloseCustom = () => {
    setIsOpen(false);
    if (apiResponce == 'success')
      clearAllRecords();

  }

  const modelOpenCustom = (isStatus) => {
    setApiResponce(isStatus);
    setIsOpen(true);
  }

  if (_bettingDatesStore) {
    _bettingDatesStore.map(item => {
      let tempObject = {
        "id": item.id,
        "day": item.day,
        "date": item.date,
        "selected": false,
        "games": item.games.map(itemGame => {
          itemGame.selected = false;
          return itemGame;
        }),
        "status":item.status
      }
      dateAndGameOptionData.push(tempObject);
    });
  }

  const [bettingInitData, setBettingInitData] = useState(dateAndGameOptionData);
  const [loadpageCounter, setLoadpageCounter] = useState(1);
  const [bettingInputsDataParent, setLocalStateInitDataParent] = useState(bettingInputsData);
  const updateBettingInputsData = (itemName, getNewChild) => {
    let bettingInputsDataParentNew = bettingInputsDataParent;
    bettingInputsDataParentNew.map(item => {
      if (item.name == itemName)
        item.dataInit = getNewChild;
    })
    setLocalStateInitDataParent(bettingInputsDataParentNew);
  }

  const clearAllRecords = () => {
    let localStateInitData2 = {
      number: { value: "", disabled: 1 },
      big: { value: "", disabled: 1, error:0 },
      small: { value: "", disabled: 1, error:0 },
      _3a: { value: "", disabled: 1, error:0 },
      _3c: { value: "", disabled: 1, error:0 },
      bet_type: { box_value: 0, box_disabled: 1, i_box_value: 0, i_box_disabled: 1, reverse_value: 0, reverse_disabled: 1 },
      amount: { value: "", disabled: 1 }
    };
    let bettingInputsData2 = [{ name: '01', dataInit: { ...localStateInitData2 } },
    { name: '02', dataInit: { ...localStateInitData2 } },
    { name: '03', dataInit: { ...localStateInitData2 } },
    { name: '04', dataInit: { ...localStateInitData2 } },
    { name: '05', dataInit: { ...localStateInitData2 } },
    { name: '06', dataInit: { ...localStateInitData2 } },
    { name: '07', dataInit: { ...localStateInitData2 } },
    { name: '08', dataInit: { ...localStateInitData2 } },
    { name: '09', dataInit: { ...localStateInitData2 } },
    { name: '10', dataInit: { ...localStateInitData2 } }  
    ];

    setLocalStateInitDataParent(bettingInputsData2);
    setLoadpageCounter(loadpageCounter + 1);
    setBettingInitData([]);
  }

  const dataNotCorrectMessage  = () => {

      if(!toast.isActive(toast.toastId)){
      toast.error(t('Please_Enter_Valid_Number'), {
        position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true,
        pauseOnHover: true, draggable: true, progress: undefined, toastId: 1
      });
    }
      


  }

  const lotterySubmitRecordsCallAction = () => {
    let _bettingInitData = bettingInitData;
    let _bettingInputsDataParent = bettingInputsDataParent;

    let game_dates = [];
    let options = [];
    let minLengthValidation = false;
    let isDataNotCorrect = false;


    _bettingInputsDataParent && _bettingInputsDataParent.map(item => {
      let tempObj = {};
      tempObj['number'] = item.dataInit && item.dataInit.number && item.dataInit.number.value ? item.dataInit.number.value : '';
      tempObj['big_bet'] = item.dataInit && item.dataInit.big && item.dataInit.big.value ? parseFloat(item.dataInit.big.value).toFixed(2) : 0.00;
      tempObj['small_bet'] = item.dataInit && item.dataInit.small && item.dataInit.small.value ? parseFloat(item.dataInit.small.value).toFixed(2) : 0;
      tempObj['3a_bet'] = item.dataInit && item.dataInit._3a && item.dataInit._3a.value ? parseFloat(item.dataInit._3a.value).toFixed(2) : 0;
      tempObj['3c_bet'] = item.dataInit && item.dataInit._3c && item.dataInit._3c.value ? parseFloat(item.dataInit._3c.value).toFixed(2) : 0;
      tempObj['box'] = item.dataInit && item.dataInit.bet_type && item.dataInit.bet_type.box_value ? 'on' : 'off';
      tempObj['ibox'] = item.dataInit && item.dataInit.bet_type && item.dataInit.bet_type.i_box_value ? 'on' : 'off';
      tempObj['reverse'] = item.dataInit && item.dataInit.bet_type && item.dataInit.bet_type.reverse_value ? 'on' : 'off';
      tempObj['amount'] = item.dataInit.amount.value ? parseFloat(item.dataInit.amount.value).toFixed(2) : 0;

      if (item.dataInit && item.dataInit.number && item.dataInit.number.value && (item.dataInit.big.value || item.dataInit.small.value || item.dataInit._3a.value || item.dataInit._3c.value))
        options.push(tempObj);

      if (item.dataInit && item.dataInit.number && item.dataInit.number.value && item.dataInit.number.value.length < 3)
        minLengthValidation = true;

      if (item.dataInit && item.dataInit.number && item.dataInit.number.value && (item.dataInit.number.value.length == 3 || item.dataInit.number.value.length == 4) && !(item.dataInit.big.value || item.dataInit.small.value || item.dataInit._3a.value || item.dataInit._3c.value)) {
        isDataNotCorrect = true
      }

    })


    _bettingInitData.map(item => {
      let tempObj = {};
      let games = [];
      item && item.games && item.games.map(itemGame => {
        if (itemGame.selected)
          games.push(itemGame.id);
      });

      tempObj['date'] = item.date;
      tempObj['games'] = games;
      tempObj['options'] = options;

      if (item.selected)
        game_dates.push(tempObj);
    })

    let toastId = null;
    let tostDesigningBox = {
      position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true,
      pauseOnHover: true, draggable: true, progress: undefined, toastId: 1
    };
    if (game_dates.length == 0) {
      if(!toast.isActive(toast.toastId)){
        toast.error(t('Please_choose_at_least_one_date_selection'), tostDesigningBox);
    }
      return false;
    }

    if (game_dates && game_dates[0].games && game_dates[0].games.length == 0) {
      if(!toast.isActive(toast.toastId)){
      toast.error(t('Please_select_game_first'), tostDesigningBox);
    }
      return false;
    }


    if (minLengthValidation) {
      if(!toast.isActive(toast.toastId)){
      toast.error(t('Please_type_3_or_4_digits_in_number_field'), tostDesigningBox);
    }
      return false;
    }

    if (isDataNotCorrect) {
      if(!toast.isActive(toast.toastId)){
      toast.error(t('please_enter_valid_amount_against_selected_number'), tostDesigningBox);
    }
      return false;
    }

    if (options && options.length == 0) {
      if(!toast.isActive(toast.toastId)){
      toast.error(t('Please_select_at_least_one_number'), tostDesigningBox);
    }
      return false;
    }

    let dataSubmit = {game_dates};
    dataSubmit['member_id'] = auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id) : 0;
    //dataSubmit['member_id'] = 0;
    dataSubmit['merchant_id'] = auth && auth.auth && auth.auth.merchant_id ? auth.auth.merchant_id : 0;

    dataSubmit['token'] = auth && auth.auth && auth.auth.token ? auth.auth.token : "";


    if (dataSubmit && dataSubmit.merchant_id == 0) {
      if(!toast.isActive(toast.toastId)){
      toast.error(t('merchant_id_connt_be_0'), tostDesigningBox);
    }
      return false;
    }

    if (dataSubmit && dataSubmit.member_id == 0) {
      if(!toast.isActive(toast.toastId)){
      toast.error(t('member_id_connt_be_0'), tostDesigningBox);
    }
      return false;
    }




    setIsLoading(true);

    dispatch(lotterySubmit(dataSubmit, response => {
      if (response.message_id == 201 || response.message_id == 200) {
        setResultData(response.data)
        modelOpenCustom('success');
        loginAPICall();
      } else {

        modelOpenCustom(t(response.messages[0]));
      }
      setIsLoading(false);
    }));

  }


  const loginAPICall = () => {

    let objectWithData = {
      "customer_name": auth && auth.auth && auth.auth.customer_name ? auth.auth.customer_name : '',
      "customer_id": auth && auth.auth && auth.auth.customer_id ? auth.auth.customer_id : 0,
      "merchant_id": auth && auth.auth && auth.auth.merchant_id ? auth.auth.merchant_id : 0,
      "language": auth && auth.lang ? auth.lang : 'en'
    }
    dispatch(getLogin(objectWithData));
  }



  useEffect(() => {
    if (bettingInitData.length === 0) {
      setBettingInitData(dateAndGameOptionData)
    }
  });

  useEffect(() => {
    clearAllRecords();
  }, []);

  let gameCount = 0;
  bettingInitData && bettingInitData.map(item => {

    if (item.selected == true) {
      item.games.map(itemGame => {
        if (itemGame.selected)
          gameCount++;
      })

    }

  });

  let totalAmount = 0;
  bettingInputsDataParent && bettingInputsDataParent.map(item => {
    if (item.dataInit.amount.value) {
      totalAmount = totalAmount + parseFloat(item.dataInit.amount.value);
    }
  });


  const showTostyFy = () => {

    toast.error('Please Fill number,bet amount first !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,

    });


  }

  const MoneyFormatDisplay = (theInput, getCase) => {
    let getInput = theInput;
    if (getCase == 1) {
      if (getInput)
        return theInput.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
      else
        return '';
    } else {
      return parseFloat(lottery.slave_net_amount).toFixed(2)
    }
  };

  let inpurError = 0;

  //console.log('bettingInputsDataParent:',bettingInputsDataParent);



  return (
    <>
      <ToastContainer />
      <section className="page-content custom-padding">
        <div className="container">
          <div className="row justify-content-center">
            {bettingInitData.map((item) => (<DateAndGameOption key={'dateAndGameOption' + item.id}
              item={item}
              _bettingInitData={bettingInitData}
              _setBettingInitData={setBettingInitData}
              _loadpageCounter={loadpageCounter}
              _setLoadpageCounter={setLoadpageCounter}
            />))}

          </div>
          <div className="table-scalable my-3">
            <table className="">
              <tbody>
                <tr>
                  <th className="border-0"></th>
                  <th className="border-0">{t('Number')}</th>
                  <th className="border-0 text-end">{t('Big_Bet')}</th>
                  <th className="border-0 text-end">{t('Small_Bet')}</th>
                  <th className="border-0 text-end">{t('3')}{t('A')}</th>
                  <th className="border-0 text-end">3C</th>
                  <th className="border-0 text-center">{t('Bet_Type')}</th>
                  <th className="border-0 text-end">{t('Amount')}</th>
                  <th className="border-0"></th>
                </tr>

                {bettingInputsDataParent.map((item, ids) => {

                  
                  if(item.dataInit.big.error || item.dataInit.small.error || item.dataInit._3a.error || item.dataInit._3c.error)
                    inpurError = 1;

                return(<BettingInputs key={'bettingInputs1' + ids}
                  ids={ids}
                  item={item}
                  _updateBettingInputsData={updateBettingInputsData}
                  _loadpageCounter={loadpageCounter}
                  _setLoadpageCounter={setLoadpageCounter}
                  _gameCount={gameCount}
                  _limit={betLimit}
                />);

                })}

                {(isLoading) ? (<tr>
                  <td colSpan="5">
                    {t('Total_Stake')}: {totalAmount ? MoneyFormatDisplay(totalAmount, 1) : 0.00}
                  </td>
                  <td><button type="button" className="btn-custom-curve1 me-1" onClick={clearAllRecords} title="Clear All">{t('clear')}</button>
                  </td>
                  <td>
                    <img src="assets/images/loader.gif" alt="" className="img-icon-prize" width="50" />
                  </td>
                  <td colSpan="2">
                    <button type="button" className="btn-custom-curve2" title={t('submit')}>{t('submit')}:{inpurError}</button>
                  </td>
                </tr>) : (<tr>
                  <td colSpan="6">
                    {t('Total_Stake')}: {totalAmount ? MoneyFormatDisplay(totalAmount, 1) : 0.00}
                  </td>
                  <td><button type="button" className="btn-custom-curve1 me-1" onClick={clearAllRecords} title={t('clear')}>{t('clear')}</button>
                  </td>
                  <td colSpan="2">
                  {inpurError ? (<button type="button" className="btn-custom-curve-disabled" onClick={dataNotCorrectMessage} title={t('submit')}>{t('submit')}</button>) : ( <button type="button" className="btn-custom-curve2" onClick={lotterySubmitRecordsCallAction} title={t('submit')}>{t('submit')}</button>) }
                   {/* <button type="button" className="btn-custom-curve2" onClick={lotterySubmitRecordsCallAction} title={t('submit')}>{t('submit')}:{inpurError}</button> */}
                  </td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className='modal-dialog'>
            <div className="modal-content">
              <div className="modal-header text-white px-2 py-3" style={{ backgroundColor: '#bc2263' }}>
                <h5 className="modal-title" id="bettingModal" style={{ paddingLeft: '10px' }}>
                  {apiResponce == 'success' ? t('bet_successful') : t('bet_failed')}
                </h5>
              </div>
              <div className="modal-body p-3" >
                <div className="container-fluid table-wrapper-scroll-y my-custom-scrollbar">
                  {apiResponce == 'success' ?
                    (<div className="row">
                      <div className="col-8 col-sm-8"><p>{t('Total')}</p></div>
                      <div className="col-8 col-sm-4" style={{ textAlign: 'right' }}><p>{resultData && resultData.total ? twoDecimalPlaceWithAmount(resultData.total, 1) : '0.00'}</p></div>
                      <div className="col-8 col-sm-8"><p>{t('Accepted_bet_amount')}</p></div>
                      <div className="col-8 col-sm-4" style={{ textAlign: 'right' }}><p>{resultData && resultData.acp_bet ? twoDecimalPlaceWithAmount(resultData.acp_bet, 1) : '0.00'}</p></div>
                      <div className="col-8 col-sm-8"><p>{t('Rebate')}</p></div>
                      <div className="col-8 col-sm-4" style={{ textAlign: 'right' }}><p>{resultData && resultData.rebat ? twoDecimalPlaceWithAmount(resultData.rebat, 1) : '0.00'}</p></div>
                      <div className="col-8 col-sm-8"><p style={{ fontWeight: 'bold' }}>{t('Net_Amount')}</p></div>
                      <div className="col-8 col-sm-4" style={{ textAlign: 'right' }}><p style={{ fontWeight: 'bold' }}>{resultData && resultData.netAmount ? twoDecimalPlaceWithAmount(resultData.netAmount, 1) : '0.00'}</p></div>

                    </div>) : (<div className="row"><div className="text-center top-50"></div><div className="text-center top-50">{apiResponce}</div></div>)}

                  <RejectedBedContainer dataRecords={resultData && resultData.rejected ? resultData.rejected : []} />
                </div>
              </div>
              <div className="modal-footer px-2 py-3 border-top" style={{ justifyContent: 'center' }}>
                <button type="button" style={{ backgroundColor: '#bc2263', fontWeight: 'bold' }} className="btn  btn-sm text-white" onClick={modelCloseCustom}>{t('Ok')}</button>
              </div>
            </div>
          </div>
        </Modal>
      </section>
    </>
  )
}
export default BettingOptionSelection;