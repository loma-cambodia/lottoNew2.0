/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import moment from "moment";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";

import { subDays, addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { changeLanguage } from "i18next";
//import DrawSummaryBoxes from './drawSummaryBoxes';
import TotalPermutationBox from './TotalPermutationBox';
import Table1 from './FirstTableData'
import Table2 from './SecondTableData'
export default function SearchNumber({
  _transactions,
  _auth,
  datauser,
  _GetSearchNumber,
  _bettingTip,
  _isLoading,
}) {
  const bettingTip = _bettingTip;
  let loading = _isLoading;
  const { t } = useTranslation();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let transactions = _transactions;
  let oddSet =
    transactions && transactions.market && transactions.market.odd_settings
      ? transactions.market.odd_settings
      : [];
  let prizeObject = [
    {
      id: "1",
      name: "Top_3",
      value: "top3",
      selected: true,
    },
    {
      id: "2",
      name: "S",
      value: "special",
      selected: true,
    },
    {
      id: "3",
      name: "C",
      value: "consolation",
      selected: true,
    },
  ];
  // const keyRef = useRef();
  const [bettingInitData, setBettingInitData] = useState([]);
  const [number, setNumber] = useState("");
  const [permutation, setPermutation] = useState(1);
  const [permutationData, setPermutationData] = useState(null);
  const [mainCard, setMainCard] = useState(null);
  const [firstTableData, setFirstTableData] = useState(null);
  const [search, setSearch] = useState(0);
  const [prizeInitData, setPrizeInitData] = useState(prizeObject);
  const [changeData, setChangeData] = useState(0);
  // const [searchResultData, setSearchResultData] = useState([]);
  const [reserAllData, setReserAllData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [numberM, setNumberM] = useState("");
  const [isActive, setIsActive] = useState(false);

  const getallcompanydata = ()=> {
    let dateAndGameOptionData = [];
    if (oddSet) {
      let tempObject = [];
      oddSet.map((game,id) => {
        if(id==0){
          tempObject = {
            game_play_id: game.game_play.id,
            selected: true,
          };
        }else{
          tempObject = {
            game_play_id: game.game_play.id,
            selected: false,
          };
        }
        dateAndGameOptionData.push(tempObject);
      });
    }
    setBettingInitData(dateAndGameOptionData);
  }

  const selectCompany = (id) => {
    if (id) {
      let data = bettingInitData;
      let objIndex = data.findIndex((obj) => obj.game_play_id == id);
      if (data[objIndex].selected) {
        data[objIndex].selected = false;
        setBettingInitData(data);
        if (changeData) setChangeData(0);
        else setChangeData(1);
      } else {
        data[objIndex].selected = true;
        setBettingInitData(data);
        if (changeData) setChangeData(0);
        else setChangeData(1);
      }
      checkSearchBtn()
    }    
  };

  const selectPrize = (id) => {
    if (id) {
      let data = prizeInitData;
      let objIndex = data.findIndex((obj) => obj.id == id);
      if (data[objIndex].selected) {
        data[objIndex].selected = false;
        if (changeData) setChangeData(0);
        else setChangeData(1);
      } else {
        data[objIndex].selected = true;
        if (changeData) setChangeData(0);
        else setChangeData(1);
      }
      setPrizeInitData(data);
    }
  };

  const checkSearchBtn =()=>{
    if (bettingInitData.every(element => element.selected == false) || number.length < 4){
      setIsActive(false)
    }
    else
      setIsActive(true)
  }

  useEffect(() => {
    getallcompanydata();
  }, [oddSet]);

  useEffect(() => {
    checkSearchBtn()
  }, [number,bettingInitData]);

  const searchClick = () => {
    let toastId = null;
    let toast_style = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: 1,
    }
    if (number.length == 0) {
      if (!toast.isActive(toastId)) {
        toast.error(t("Please_Enter_Bet_Number"), toast_style);
      }
      return false;
    }
    else if (number.length > 0 && number.length < 4){
      if (!toast.isActive(toastId)) {
        toast.error(t("Please_type_4_digits_in_number_field"), toast_style);
      }
      return false;
    }
    setNumberM(number);
    let company = [];
    if (bettingInitData) {
      bettingInitData.map((game) => {
        if (game.selected) {
          let tempObject = game.game_play_id;
          company.push(tempObject);
        }
      });
    }
    if (company.length == 0) {
      if (!toast.isActive(toastId)) {
        toast.error(t("Please_select_game_first"), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
      }
      return false;
    }
    // if (!permutation) {
    //   if (!toast.isActive(toastId)) {
    //     toast.error(t("Please_select_Permutation"), {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       toastId: 1,
    //     });
    //   }
    //   return false;
    // }
    setIsLoading(true);
    let mainDateee =
      moment(startDate).format("DD/MM/YYYY") +
      "-" +
      moment(endDate).format("DD/MM/YYYY");
    let prizes = [];
    if (prizeInitData) {
      prizeInitData.map((prize) => {
        if (prize.selected) {
          let tempObject = prize.value;
          prizes.push(tempObject);
        }
      });
    }

    if(prizeInitData.every(element => element.selected == false))
    {
      setPrizeInitData(prizeObject)
      $('#flexCheckDefault21').prop('checked',true);
      $('#flexCheckDefault22').prop('checked',true);
      $('#flexCheckDefault23').prop('checked',true);
    }
    // return false;
    const searchPostData = {
      number: number,
      date: mainDateee,
      company: company,
      permutation: permutation,
      prize: prizes,
    };
    _GetSearchNumber(
      searchPostData,
      datauser.user.data.token ? datauser.user.data.token : ""
    );

    setReserAllData(true);
  }

  useEffect(() => {
    if (reserAllData) {
      setPermutationData(bettingTip.permutation);
      setMainCard(bettingTip.main_card);
      setFirstTableData(bettingTip.data);
    }
    if (permutationData && mainCard && firstTableData && reserAllData) {
      setIsLoading(loading);
    }
  }, [bettingTip, permutationData, mainCard, firstTableData, reserAllData]);

  

  const resetClick = () => {

    setReserAllData(false);
    setNumber("");
    setNumberM("");
    setPermutation(1);
    $("#flexRadioDefault1").prop("checked", true);    
    $("#flexRadioDefault2").prop("checked", false);    
    $('#flexCheckDefault21').prop('checked',true);
    $('#flexCheckDefault22').prop('checked',true);
    $('#flexCheckDefault23').prop('checked',true);

    setBettingInitData([
     { game_play_id: 1,
      selected: true},
      { game_play_id: 2,
        selected: false},
        { game_play_id: 3,
          selected: false}
    ])
    setPrizeInitData(prizeObject);
    setPermutationData([]);
    setFirstTableData([]);
    setMainCard([]);
    setStartDate(new Date("01/01/2016"));
    setEndDate(new Date());
  };
  // const getNetDrawDate = () => {
  //   let numberCount =
  //     mainCard && mainCard.avg_draw_gap ? mainCard.avg_draw_gap : 0;
  //   if (numberCount != 0) {
  //     const countNumber = numberCount;
  //     let maxDate = moment().add("days", countNumber).format("DD/MM/YYYY");
  //     return maxDate;
  //   } else {
  //     return "--";
  //   }
  // };
 




  // DATEpICKER

  const [startDate, setStartDate] = useState(new Date("01/01/2016"));
  const [endDate, setEndDate] = useState(new Date());
  const getYear = (date) => {
    return moment(date).year();
  };
  const range = (startDate, toDate) => {
    let rangeArray = [];
    let dif = toDate - startDate;
    for (let index = 0; index < dif; index++) {
      rangeArray.push(startDate + index);
    }
    return rangeArray;
  };
  const getMonth = (date) => {
    return moment(date).month();
  };
  const sYears = range(2016, getYear(new Date()) + 1);
  const eYears = range(moment(startDate).year(), getYear(new Date()) + 1);
  const sMonths = [
    t("January"),
    t("February"),
    t("March"),
    t("April"),
    t("May"),
    t("June"),
    t("July"),
    t("August"),
    t("September"),
    t("October"),
    t("November"),
    t("December"),
  ];
  const eMonths = [
    t("January"),
    t("February"),
    t("March"),
    t("April"),
    t("May"),
    t("June"),
    t("July"),
    t("August"),
    t("September"),
    t("October"),
    t("November"),
    t("December"),
  ];
  let days =  [t('Su'), t('Mo'), t('Tu'), t('We'), t('Th'), t('Fr'), t('Sa')]
  const locale = {
    localize: {
      day: n => days[n]
    },
    formatLong: {
      date: () => 'mm/dd/yyyy'
    }
  }
  return (
    <>
      <ToastContainer />
      <section className="custom-breadcrumb">
        <div className="container">
          <div className="breadcrumb-heading">
            <h1 className="text-uppercase">{t("Betting_Tips")}</h1>
          </div>
          {/* <div className="breadcrumb-list">
            <ul>
              <li>
                <span>
                  {t("Homepage")} / {t("Betting_Tips")}
                </span>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
      <section className="search-number custom-padding">
        <Container>
          <div className="clearfix curved-card bg-light shadow-sm mb-3">
                <Row className="justify-content-center">
                  <Col sm="6" lg="2" md="3">
                    <FormGroup>
                      <label className="fw-bold mb-2">{t("Number")}</label>
                      <input
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        onChange={(e) => setNumber(e.target.value)}
                        type="text"
                        placeholder={t("4D_Bet_Number")}
                        className="form-control-custom"
                        minLength={3}
                        maxLength={4}
                        required
                        autoComplete="off"
                        value={number && !search ? number : ""}
                        title= {t("Number")}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6" lg="2" md="2">
                    <FormGroup>
                      <label className="fw-bold mb-2">{t("Start_Date")}</label>
                      <DatePicker
                        locale={locale}
                        className="search-number-daterangepickerstyle"
                        dayClassName={(date) => "react-datepicker__day_sushil"}
                        renderCustomHeader={({
                          date,
                          changeYear,
                          changeMonth,
                          decreaseMonth,
                          increaseMonth,
                          prevMonthButtonDisabled,
                          nextMonthButtonDisabled,
                        }) => (
                          <div
                            style={{
                              // margin: 10,
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              className="btn-custom-curve1-sm2"
                              onClick={decreaseMonth}
                              disabled={prevMonthButtonDisabled}
                            >
                              {"<"}
                            </button>
                            <select
                              className="form-control-custom"
                              value={getYear(date)}
                              onChange={({ target: { value } }) =>
                                changeYear(value)
                              }
                            >
                              {sYears.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>

                            <select
                              className="form-control-custom"
                              value={sMonths[getMonth(date)]}
                              onChange={({ target: { value } }) =>
                                changeMonth(sMonths.indexOf(value))
                              }
                            >
                              {sMonths.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>

                            <button
                              className="btn-custom-curve1-sm2"
                              onClick={increaseMonth}
                              disabled={nextMonthButtonDisabled}
                            >
                              {">"}
                            </button>
                          </div>
                        )}
                        value={moment(startDate).format("DD/MM/YYYY")}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6" lg="2" md="2">
                    <FormGroup>
                      <label className="fw-bold mb-2">{t("End_Date")}</label>

                      <DatePicker
                        locale={locale}
                        className="search-number-daterangepickerstyle"
                        dayClassName={(date) => "react-datepicker__day_sushil"}
                        renderCustomHeader={({
                          date,
                          changeYear,
                          changeMonth,
                          decreaseMonth,
                          increaseMonth,
                          prevMonthButtonDisabled,
                          nextMonthButtonDisabled,
                        }) => (
                          <div
                            style={{
                              margin: 10,
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              className="btn-custom-curve1-sm"
                              onClick={decreaseMonth}
                              disabled={prevMonthButtonDisabled}
                            >
                              {"<"}
                            </button>
                            <select
                              className="form-control-custom"
                              value={getYear(date)}
                              onChange={({ target: { value } }) =>
                                changeYear(value)
                              }
                            >
                              {eYears.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>

                            <select
                              className="form-control-custom"
                              value={eMonths[getMonth(date)]}
                              onChange={({ target: { value } }) =>
                                changeMonth(eMonths.indexOf(value))
                              }
                            >
                              {eMonths.map((option, id) => (
                                <>
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                  {/* {
                                      id <= moment(startDate).month() ? 
                                      <>
                                          <option key={option} value={option}>
                                              {option}
                                          </option>
                                      </> : <>
                                          <option key={option} value={option}>
                                              {option}
                                          </option>
                                      </>
                                  } */}
                                </>
                              ))}
                            </select>

                            <button
                              className="btn-custom-curve1-sm"
                              onClick={increaseMonth}
                              disabled={nextMonthButtonDisabled}
                            >
                              {">"}
                            </button>
                          </div>
                        )}
                        excludeDates={[addDays(new Date(), 1)]}
                        value={moment(endDate).format("DD/MM/YYYY")}
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6" lg="2" md="3">
                    <FormGroup>
                      <label className="fw-bold mb-2">{t("Company")}</label>
                      <ul className="list-inline mb-0 small-company">
                        {oddSet.map((game, id) => (
                          <li
                            key={id}
                            onClick={() => selectCompany(game.game_play.id)}
                            className=" list-inline-item"
                          >
                            <span
                              className={`${
                                bettingInitData &&
                                bettingInitData[id] &&
                                bettingInitData[id].selected
                                  ? "selected-gp-btn"
                                  : ""
                              } outer-circle-gp`}
                              title={t('Select')}
                            >
                              <span className="inner-circle-gp">
                                <img
                                  className="img-fluid"
                                  src={game.game_play.logo_url}
                                />
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </FormGroup>
                  </Col>
                  <Col sm="6" lg="2" md="3">
                    <FormGroup>
                      <label className="fw-bold mb-2">{t("Permutation")}</label>
                      <ul className="list-inline mb-0 small">
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              onChange={(e) => setPermutation(e.target.value)}
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              value={1}
                              defaultChecked={`${permutation == 1 ? "checked" : ""}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              {t('Yes')}
                            </label>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              onChange={(e) => setPermutation(e.target.value)}
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              value={0}
                              defaultChecked={`${permutation == 0 ? "checked" : ""}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              {t('Not')}
                            </label>
                          </div>
                        </li>
                      </ul>
                    </FormGroup>
                  </Col>
                  <Col sm="6" lg="2" md="6">
                    <FormGroup>
                      <label className="fw-bold mb-2">{t("Prize")}</label>
                      <ul className="list-inline mb-0 small">
                        {prizeInitData.map((prize, id) => (
                          <li key={id} className="list-inline-item">
                            <div className="form-check">
                              <input
                                onClick={() => selectPrize(prize.id)}
                                className="form-check-input"
                                type="checkbox"
                                value={prize.value}
                                id={"flexCheckDefault2" + prize.id}
                                defaultChecked={prize.selected ? "checked" : ""}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={"flexCheckDefault2" + prize.id}
                              >
                                 {t(prize.name)}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </FormGroup>
                  </Col>
                  <Col sm="12" lg="12" md="12">
                    <FormGroup style={{ float: "right" }}>
                      {/* <label className="d-block mb-2">&nbsp;</label> */}
                      <button
                        onClick={() => isActive? searchClick():''}
                        type="button"
                        id="search"
                        className={`${isActive ? "":"search-number-disabled" } btn-custom-curve2-sm w-auto me-2`}
                      >
                        {t("Search")}
                      </button>
                      <button
                        onClick={() => resetClick()}
                        type="button"
                        id="reset"
                        className="btn-custom-curve1-sm"
                      >
                        {t("Reset")}
                      </button>
                    </FormGroup>
                  </Col>
                </Row>
          </div>
        </Container>
        {isLoading ? (
          <div className="" style={{ height: '400px'  }}>
            <div className="loader-Mob-2">
              <img
                src="assets/images/loader.gif"
                alt=""
                className="img-icon-prize"
                width="50"
              />
            </div>
          </div>
        ) : (
          <>
            {bettingTip && mainCard && firstTableData && reserAllData  ?
              <>
               
               
                <TotalPermutationBox permutationData ={permutationData} numberM={numberM} reserAllData={reserAllData}/> 

                
                {/* <DrawSummaryBoxes mainCard ={mainCard}/>  */}
                
                <Table1 firstTableData ={firstTableData} permutationData={permutationData} numberM={numberM} oddSet={oddSet}/> 

                <Table2 firstTableData ={firstTableData} permutationData={permutationData} numberM={numberM} oddSet={oddSet}/> 

              </>
              : 
              <Container style={{ height: '400px'  }}>
                  <div className="alert alert-warning">
                    <h3 className="text-center">{t("no_data_found")}</h3>
                  </div>
              </Container>
            }
          </>
        )}
      </section>
    </>
  );
}