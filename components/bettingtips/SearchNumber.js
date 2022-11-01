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
  // console.log('bettingTipbettingTip',bettingTip)
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
      selected: false,
    },
    {
      id: "3",
      name: "C",
      value: "consolation",
      selected: false,
    },
  ];
  // const keyRef = useRef();
  const [bettingInitData, setBettingInitData] = useState([]);
  const [number, setNumber] = useState("");
  const [permutation, setPermutation] = useState(0);
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

  function getallcompanydata() {
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

  useEffect(() => {
    getallcompanydata();
  }, [oddSet]);

  const searchClick = () => {
    let toastId = null;
    if (number.length < 3) {
      if (!toast.isActive(toastId)) {
        toast.error(t("Please_Enter_Valid_Number"), {
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
    // console.log('objectobject',prizes);
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
    setPermutation(0);
    getallcompanydata();
    setPrizeInitData(prizeObject);
    setPermutationData([]);
    setFirstTableData([]);
    setMainCard([]);
    setStartDate(new Date("01/01/2016"));
    setEndDate(new Date());
  };

  const getNetDrawDate = () => {
    let numberCount =
      mainCard && mainCard.avg_draw_gap ? mainCard.avg_draw_gap : 0;
    if (numberCount != 0) {
      const countNumber = numberCount * 3;
      let maxDate = moment().add("days", countNumber).format("DD/MM/YYYY");
      return maxDate;
    } else {
      return "--";
    }
  };
  function PrizeSetComm({ prizeType }) {
    let prizeTypeStyle = "";
    if (prizeType == "prize1") {
      prizeType = "First Prize";
      prizeTypeStyle = "badge bg-primary";
    } else if (prizeType == "prize2") {
      prizeType = "Second Prize";
      prizeTypeStyle = "badge bg-primary";
    } else if (prizeType == "prize3") {
      prizeType = "Third Prize";
      prizeTypeStyle = "badge bg-warning text-dark";
    } else if (
      prizeType == "special1" ||
      prizeType == "special2" ||
      prizeType == "special3" ||
      prizeType == "special4" ||
      prizeType == "special5" ||
      prizeType == "special6" ||
      prizeType == "special7" ||
      prizeType == "special8" ||
      prizeType == "special9" ||
      prizeType == "special10"
    ) {
      prizeType = "Special Prize";
      prizeTypeStyle = "badge bg-info text-white";
    } else if (
      prizeType == "consolation1" ||
      prizeType == "consolation2" ||
      prizeType == "consolation3" ||
      prizeType == "consolation4" ||
      prizeType == "consolation5" ||
      prizeType == "consolation6" ||
      prizeType == "consolation7" ||
      prizeType == "consolation8" ||
      prizeType == "consolation9" ||
      prizeType == "consolation10"
    ) {
      prizeType = "Consolation Prize";
      prizeTypeStyle = "badge bg-light text-dark border border-dark";
    } else {
      prizeTypeStyle = "badge bg-light text-dark border border-dark";
    }
    return <span className={prizeTypeStyle}>{prizeType}</span>;
  }

  function getCountsPrizeSetComm(prizeType) {
    let st1 = 0;
    let nd2 = 0;
    let rd3 = 0;
    let Spe = 0;
    let Con = 0;
    if (prizeType == "prize1") {
      st1++;
    } else if (prizeType == "prize2") {
      nd2++;
    } else if (prizeType == "prize3") {
      rd3++;
    } else if (
      prizeType == "special1" ||
      prizeType == "special2" ||
      prizeType == "special3" ||
      prizeType == "special4" ||
      prizeType == "special5" ||
      prizeType == "special6" ||
      prizeType == "special7" ||
      prizeType == "special8" ||
      prizeType == "special9" ||
      prizeType == "special10"
    ) {
      Spe++;
    } else if (
      prizeType == "consolation1" ||
      prizeType == "consolation2" ||
      prizeType == "consolation3" ||
      prizeType == "consolation4" ||
      prizeType == "consolation5" ||
      prizeType == "consolation6" ||
      prizeType == "consolation7" ||
      prizeType == "consolation8" ||
      prizeType == "consolation9" ||
      prizeType == "consolation10"
    ) {
      Con++;
    }
    let totalCounts = {
      st1: st1,
      nd2: nd2,
      rd3: rd3,
      Spe: Spe,
      Con: Con,
    };
    return totalCounts;
  }

  function ForData() {
    let st1m = 0;
    let nd2m = 0;
    let rd3m = 0;
    let Spem = 0;
    let Conm = 0;
    let totalm = 0;
    let LastDrawDate = "-";
    let LastDrawDay = "-";
    let lastPrize = "";
    let LastGameId = "";
    let mainNum = "";
    {
      firstTableData &&
        firstTableData.map((value) => {
          let findPrice = false;
          let keys = Object.keys(value);
          keys.map((game1) => {
            if (value[game1] == numberM && findPrice == false) {
              mainNum = value[game1];
              let totalCounts = getCountsPrizeSetComm(game1);
              console.log("totalCounts", totalCounts.st1);
              st1m = st1m + totalCounts.st1;
              nd2m = nd2m + totalCounts.nd2;
              rd3m = rd3m + totalCounts.rd3;
              Spem = Spem + totalCounts.Spe;
              Conm = Conm + totalCounts.Con;

              totalm = st1m + nd2m + rd3m + Spem + Conm;
              lastPrize = game1;
              LastDrawDate = moment(value.fetching_date).format("DD/MM/YYYY");
              LastDrawDay = moment(value.fetching_date).format("ddd");
              LastGameId = value.game_play_id;
              findPrice = true;
            }
          });
        });
    }
    return (
      <>
        {firstTableData && mainNum ? (
          <tr>
            <td>{firstTableData && mainNum}</td>
            <td>{st1m != 0 ? st1m : ""}</td>
            <td>{nd2m != 0 ? nd2m : ""}</td>
            <td>{rd3m != 0 ? rd3m : ""}</td>
            <td>{Spem != 0 ? Spem : ""}</td>
            <td>{Conm != 0 ? Conm : ""}</td>
            <td align="right">
              <b>{totalm != 0 ? totalm : ""}</b>
            </td>
            {/* <td align="right">--</td>
          <td align="right">--</td> */}
            <td>{LastDrawDate}</td>
            <td>{LastDrawDay}</td>
            <td>
              <PrizeSetComm prizeType={lastPrize} />
            </td>
            <td>
              {oddSet.map((game, id) => {
                if (LastGameId && game.game_play.id == LastGameId) {
                  return (
                    <span key={id}>
                      <img
                        src={game.game_play.logo_url}
                        alt=""
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                  );
                }
              })}
            </td>
          </tr>
        ) : (
          <tr>
            <td colSpan={11}>
              <div className="alert alert-warning">
                <h3 className="text-center">{t("no_data_found")}</h3>
              </div>
            </td>
          </tr>
        )}
        <tr>
          <td>
            <b>{t('Total')}</b>
          </td>
          <td>{st1m != 0 ? st1m : ""}</td>
          <td>{nd2m != 0 ? nd2m : ""}</td>
          <td>{rd3m != 0 ? rd3m : ""}</td>
          <td>{Spem != 0 ? Spem : ""}</td>
          <td>{Conm != 0 ? Conm : ""}</td>
          <td align="right">
            <b>{totalm != 0 ? totalm : ""}</b>
          </td>
          {/* <td align="right">--</td>
          <td align="right">--</td> */}
          <td align="right">
            <b>&nbsp;</b>
          </td>
          <td align="right">
            <b>&nbsp;</b>
          </td>
          <td align="right">
            <b>&nbsp;</b>
          </td>
          <td align="right">
            <b>&nbsp;</b>
          </td>
        </tr>
      </>
    );
  }

  let mainst1m = 0;
  let mainnd2m = 0;
  let mainrd3m = 0;
  let mainSpem = 0;
  let mainConm = 0;
  let maintotalm = 0;

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
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const eMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  if(bettingTip){
    return (
      <>
        <ToastContainer />
        <section className="custom-breadcrumb">
          <div className="container">
            <div className="breadcrumb-heading">
              <h1 className="text-uppercase">{t("Betting_Tips")}</h1>
            </div>
            <div className="breadcrumb-list">
              <ul>
                <li>
                  <span>
                    {t("Homepage")} / {t("Betting_Tips")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="search-number custom-padding">
          <Container>
            <div className="clearfix curved-card bg-light shadow-sm mb-3">
                  <Row className="justify-content-center">
                    <Col sm="6" lg="1" md="3">
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
                          placeholder="number"
                          className="form-control-custom"
                          minLength={3}
                          maxLength={4}
                          required
                          autoComplete="off"
                          value={number && !search ? number : ""}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="6" lg="2" md="2">
                      <FormGroup>
                        <label className="fw-bold mb-2">{t("Start_Date")}</label>
                        <DatePicker
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
                                className="btn-custom-curve1-sm"
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
                        {/* <DateRangePicker
                          onChange={(e) => searchClick(e.target.value)}
                          id="daterpicker"
                          ref={keyRef}
                          onCancel={keyRef}
                          locale={{
                            customRangeLabel: t("custom_range"),
                            toLabel: "To",
                            cancelLabel: t("Cancel"),
                            applyLabel: t("apply"),
                          }}
                        > 
                          <input
                            id="daterangepicker"
                            readOnly
                            type="text"
                            className="daterangepickerstyle-sm"
                            name="datefilter"
                          />
                        </DateRangePicker>*/}
                      </FormGroup>
                    </Col>
                    <Col sm="6" lg="2" md="2">
                      <FormGroup>
                        <label className="fw-bold mb-2">{t("End_Date")}</label>
  
                        <DatePicker
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
                                title="Select"
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
                                checked={`${permutation == 1 ? "checked" : ""}`}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                Yes
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
                                checked={`${permutation == 0 ? "checked" : ""}`}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault2"
                              >
                                No
                              </label>
                            </div>
                          </li>
                        </ul>
                      </FormGroup>
                    </Col>
                    <Col sm="6" lg="3" md="6">
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
                                  checked={prize.selected ? "checked" : ""}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={"flexCheckDefault2" + prize.id}
                                >
                                  {prize.id == 3 ? (
                                    <>
                                      <span className="badge bg-primary">
                                        {t(prize.name)}
                                      </span>
                                    </>
                                  ) : (
                                    t(prize.name)
                                  )}
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
                          onClick={() => searchClick()}
                          type="button"
                          id="search"
                          className="btn-custom-curve2-sm w-auto me-2"
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
            <div className="">
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
                  <Container>
                    <Card className="alert alert-warning text-dark p-0 rounded-0 border border-warning">
                      <CardHeader className="fw-bold">
                        {t('Total_Permutation')}:{" "}
                        {permutationData && permutationData.length ? permutationData.length : numberM ? 1 : ""}
                      </CardHeader>
                      <CardBody>
                        <ul className="list-inline mb-0">
                          {reserAllData && permutationData && permutationData.length
                            ? ""
                            : numberM}
                          {reserAllData &&
                            permutationData &&
                            permutationData.map((value, index) => {
                              return (
                                <>
                                  <li key={index} className="list-inline-item">
                                    <span className="badge bg-light text-dark">
                                      {value}
                                    </span>
                                  </li>
                                </>
                              );
                            })}
                        </ul>
                      </CardBody>
                    </Card>
                  </Container>
                  <Container>
                    <Row className="justify-content-center">
                      <Col md="3">
                        <Card className="border-info">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div className="icon-widget bg-info rounded">
                                <div className="icon-widget-out">
                                  <img src="assets/images/target.png" />
                                </div>
                              </div>
                              <div className="widget-text">
                                <p className="fw-bold mb-0 fs-5">
                                  <b>
                                    {mainCard && mainCard.total_hits
                                      ? mainCard.total_hits
                                      : 0}
                                  </b>
                                </p>
                                <p className="mb-0 fs-6">{t('Total_Hits')}</p>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="3">
                        <Card className="border-info">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div className="icon-widget bg-info rounded">
                                <div className="icon-widget-out">
                                  <img src="assets/images/gap.png" />
                                </div>
                              </div>
                              <div className="widget-text">
                                <p className="fw-bold mb-0 fs-5">
                                  <b>
                                    {mainCard && mainCard.max_draw_gap
                                      ? mainCard.max_draw_gap
                                      : 0}{" "}
                                    {t('Draws')}
                                  </b>
                                </p>
                                <p className="mb-0 fs-6">{t('Max_DrawGap')}</p>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="3">
                        <Card className="border-info">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div className="icon-widget bg-info rounded">
                                <div className="icon-widget-out">
                                  <img src="assets/images/min-gap.png" />
                                </div>
                              </div>
                              <div className="widget-text">
                                <p className="fw-bold mb-0 fs-5">
                                  <b>
                                    {mainCard && mainCard.min_draw_gap
                                      ? mainCard.min_draw_gap
                                      : 0}{" "}
                                    {t('Draws')}
                                  </b>
                                </p>
                                <p className="mb-0 fs-6">{t('Min_DrawGap')}</p>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="3">
                        <Card className="border-info">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div className="icon-widget bg-info rounded">
                                <div className="icon-widget-out">
                                  <img src="assets/images/avg-gap.png" />
                                </div>
                              </div>
                              <div className="widget-text">
                                <p className="fw-bold mb-0 fs-5">
                                  <b>
                                    {mainCard && mainCard.avg_draw_gap
                                      ? mainCard.avg_draw_gap
                                      : 0}{" "}
                                    {t('Draws')}
                                  </b>
                                </p>
                                <p className="mb-0 fs-6">{t('Avg_DrawGap')}</p>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="3">
                        <Card className="border-info">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div className="icon-widget bg-info rounded">
                                <div className="icon-widget-out">
                                  <img src="assets/images/last-hit.png" />
                                </div>
                              </div>
                              <div className="widget-text">
                                <p className="fw-bold mb-0 fs-5">
                                  <b>
                                    #
                                    {mainCard && mainCard.last_hit_draw_no
                                      ? mainCard.last_hit_draw_no
                                      : ""}
                                  </b>
                                </p>
                                <p className="mb-0 fs-6">{t('Last_Hit_DrawNo')}</p>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="3">
                        <Card className="border-info">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div className="icon-widget bg-info rounded">
                                <div className="icon-widget-out">
                                  <img src="assets/images/next-hit.png" />
                                </div>
                              </div>
                              <div className="widget-text">
                                <p className="fw-bold mb-0 fs-5">
                                  <b>
                                    #
                                    {mainCard && mainCard.last_hit_draw_id
                                      ? mainCard.last_hit_draw_id
                                      : ""}
                                  </b>
                                </p>
                                <p className="mb-0 fs-6">{t('Last_Hit_DrawID')}</p>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="3">
                        <Card className="border-info">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div className="icon-widget bg-info rounded">
                                <div className="icon-widget-out">
                                  <img src="assets/images/latest.png" />
                                </div>
                              </div>
                              <div className="widget-text">
                                <p className="fw-bold mb-0 fs-5">
                                  <b>
                                    #
                                    {mainCard &&
                                    mainCard.last_hit_draw_no &&
                                    mainCard.avg_draw_gap
                                      ? parseInt(mainCard.last_hit_draw_no) +
                                        parseInt(mainCard.avg_draw_gap)
                                      : ""}
                                  </b>
                                </p>
                                <p className="mb-0 fs-6">{t('Estimate_Next_Hit_DrawNo')}</p>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="3">
                        <Card className="border-info">
                          <CardBody>
                            <div className="d-flex align-items-center">
                              <div className="icon-widget bg-info rounded">
                                <div className="icon-widget-out">
                                  <img src="assets/images/icons/calendar-small.png" />
                                </div>
                              </div>
                              <div className="widget-text">
                                <p className="fw-bold mb-0 fs-5">
                                  <b>{getNetDrawDate()}</b>
                                </p>
                                <p className="mb-0 fs-6">{t('Estimate_Next_Draw_Date')}</p>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                  <Container>
                    <div className="table-responsive">
                      <table className="table table-striped table-sm small table-bordered">
                        <thead className="bg-dark text-white">
                          <tr>
                            <th>{t('No')}</th>
                            <th>{t('Number')}</th>
                            <th>{t('Prize')}</th>
                            <th>{t('DrawID')}</th>
                            <th>{t('DrawNo')}</th>
                            <th>{t('Date')}</th>
                            <th>{t('Day')}</th>
                            <th className="text-center">{t('Source')}</th>
                            <th>{t('DrawGap')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {firstTableData && firstTableData.length > 0 ? (
                            firstTableData.map((value, index) => {
                              let prizeType = "";
                              let betNum = "";
                              let keys = Object.keys(value);
                              let findValue = false;
                              keys.map((game1) => {
                                if (permutationData.length > 0) {
                                  permutationData.map((pdata) => {
                                    if (value[game1] == pdata && findValue == false) {
                                      prizeType = game1;
                                      betNum = value[game1];
                                      findValue = true
                                    }
                                  });
                                } else {
                                  if (value[game1] == numberM && findValue == false) {
                                      prizeType = game1;
                                      findValue = true
                                      betNum = value[game1];
                                  }
                                }
                              });
                              /* console.log('index no perm number ', numberM)
                              console.log('index no perm prizeType ', prizeType) */
                              return (
                                <>
                                  <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                      <b>{betNum}</b>
                                    </td>
                                    <td>
                                      <PrizeSetComm prizeType={prizeType} />
                                    </td>
                                    <td>{value.reference_number}</td>
                                    <td>#{value.reference_number.split("/")[0]}</td>
                                    <td>
                                      {moment(value.fetching_date).format("DD/MM/YYYY")}
                                    </td>
                                    <td>{moment(value.fetching_date).format("ddd")}</td>
                                    <td align="center">
                                      {oddSet.map((game, id) => {
                                        if (game.game_play.id == value.game_play_id) {
                                          return (
                                            <span key={id}>
                                              <img
                                                src={game.game_play.logo_url}
                                                alt=""
                                                style={{
                                                  width: "20px",
                                                  height: "20px",
                                                  borderRadius: "50%",
                                                }}
                                              />
                                            </span>
                                          );
                                        }
                                      })}
                                    </td>
                                    <td>
                                      {value.days_since_last
                                        ? value.days_since_last
                                        : "-"}
                                    </td>
                                  </tr>
                                </>
                              );
                            })
                          ) : (
                            <tr>
                              <td colSpan={9}>
                                <div className="alert alert-warning">
                                  <h3 className="text-center">{t("no_data_found")}</h3>
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </Container>
                  <Container>
                    <div className="table-responsive">
                      <table className="table table-striped table-sm small table-bordered">
                        <thead className="bg-dark text-white">
                          <tr>
                            <th>{t('Number')}</th>
                            <th>{t('1st')}</th>
                            <th>{t('2nd')}</th>
                            <th>{t('3rd')}</th>
                            <th>{t('S')}</th>
                            <th>{t('C')}</th>
                            <th className="text-end">{t('Total')}</th>
                            {/* <th className="text-end">Big</th>
                            <th className="text-end">Small</th> */}
                            <th>{t('LastDraw')}</th>
                            <th>{t('Day')}</th>
                            <th>{t('Prize')}</th>
                            <th>{t('Source')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {firstTableData &&
                          permutationData &&
                          permutationData.length > 0 ? (
                            <>
                              {firstTableData.length > 0 && permutationData ? (
                                permutationData.map((pdata, index) => {
                                  let st1m = 0;
                                  let nd2m = 0;
                                  let rd3m = 0;
                                  let Spem = 0;
                                  let Conm = 0;
                                  let totalm = 0;
                                  let LastDrawDate = "-";
                                  let LastDrawDay = "-";
                                  let lastPrize = "";
                                  let LastGameId = "";
                                  {
                                    firstTableData &&
                                      firstTableData.map((value) => {
                                        let keys = Object.keys(value);
                                        keys.map((game1) => {
                                          if (value[game1] == pdata) {
                                            let totalCounts =
                                              getCountsPrizeSetComm(game1);
                                            st1m = st1m + totalCounts.st1;
                                            nd2m = nd2m + totalCounts.nd2;
                                            rd3m = rd3m + totalCounts.rd3;
                                            Spem = Spem + totalCounts.Spe;
                                            Conm = Conm + totalCounts.Con;
                                            totalm = st1m + nd2m + rd3m + Spem + Conm;
                                            lastPrize = game1;
                                            LastDrawDate = moment(
                                              value.fetching_date
                                            ).format("DD/MM/YYYY");
                                            LastDrawDay = moment(
                                              value.fetching_date
                                            ).format("ddd");
                                            LastGameId = value.game_play_id;
                                          }
                                        });
                                      });
                                  }
                                  mainst1m = mainst1m + st1m;
                                  mainnd2m = mainnd2m + nd2m;
                                  mainrd3m = mainrd3m + rd3m;
                                  mainSpem = mainSpem + Spem;
                                  mainConm = mainConm + Conm;
                                  maintotalm = maintotalm + totalm;
                                  return (
                                    <tr key={index}>
                                      <td>{pdata}</td>
                                      <td>{st1m != 0 ? st1m : ""}</td>
                                      <td>{nd2m != 0 ? nd2m : ""}</td>
                                      <td>{rd3m != 0 ? rd3m : ""}</td>
                                      <td>{Spem != 0 ? Spem : ""}</td>
                                      <td>{Conm != 0 ? Conm : ""}</td>
                                      <td align="right">
                                        <b>{totalm != 0 ? totalm : ""}</b>
                                      </td>
                                      {/* <td align="right">--</td>
                                      <td align="right">--</td> */}
                                      <td>{LastDrawDate}</td>
                                      <td>{LastDrawDay}</td>
                                      <td>
                                        <PrizeSetComm prizeType={lastPrize} />
                                      </td>
                                      <td>
                                        {oddSet.map((game, id) => {
                                          if (
                                            LastGameId &&
                                            game.game_play.id == LastGameId
                                          ) {
                                            return (
                                              <span key={id}>
                                                <img
                                                  src={game.game_play.logo_url}
                                                  alt=""
                                                  style={{
                                                    width: "20px",
                                                    height: "20px",
                                                    borderRadius: "50%",
                                                  }}
                                                />
                                              </span>
                                            );
                                          }
                                        })}
                                      </td>
                                    </tr>
                                  );
                                })
                              ) : (
                                <tr>
                                  <td colSpan={11}>
                                    <div className="alert alert-warning">
                                      <h3 className="text-center">
                                        {t("no_data_found")}
                                      </h3>
                                    </div>
                                  </td>
                                </tr>
                              )}
                              <tr>
                                <td>
                                  <b>{t('Total')}</b>
                                </td>
                                <td>
                                  <b>{mainst1m}</b>
                                </td>
                                <td>
                                  <b>{mainnd2m}</b>
                                </td>
                                <td>
                                  <b>{mainrd3m}</b>
                                </td>
                                <td>
                                  <b>{mainSpem}</b>
                                </td>
                                <td>
                                  <b>{mainConm}</b>
                                </td>
                                <td align="right">
                                  <b>{maintotalm}</b>
                                </td>
                                {/* <td align="right">
                                  <b>--</b>
                                </td>
                                <td align="right">
                                  <b>--</b>
                                </td> */}
                                <td align="right">
                                  <b>&nbsp;</b>
                                </td>
                                <td align="right">
                                  <b>&nbsp;</b>
                                </td>
                                <td align="right">
                                  <b>&nbsp;</b>
                                </td>
                                <td align="right">
                                  <b>&nbsp;</b>
                                </td>
                              </tr>
                            </>
                          ) : (
                            <>
                              <ForData />
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </Container>
                </>
                : 
                <Container style={{ height: '385px'  }}>
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
  }else{

    return (
      <div className='alert alert-warning'>
                    <h3 className='text-center'>
                    {t('no_data_found')}
                    </h3>
               </div>
    );

  }




  
}
