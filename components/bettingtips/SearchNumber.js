/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import {serachBettingTips} from '../../store/actions/bettingTips';

import $ from "jquery";
import moment from "moment";
import {
  DateRangePicker,
  daterangepicker,
} from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
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
export default function SearchNumber({ _transactions, _auth,datauser }) {
  const { t } = useTranslation();
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  // const bettingTipsData = {
  //                           "data": [
  //                             {
  //                               "id": 7934,
  //                               "game_play_id": 3,
  //                               "fetching_date": "2022-10-05",
  //                               "result_date": "Wed 05-10-2022",
  //                               "reference_number": "5530/22",
  //                               "prize1": "1046",
  //                               "prize2": "5595",
  //                               "prize3": "6441",
  //                               "special1": "0484",
  //                               "special2": "2796",
  //                               "special3": "2843",
  //                               "special4": "9613",
  //                               "special5": "5391",
  //                               "special6": "0472",
  //                               "special7": "3945",
  //                               "special8": "9353",
  //                               "special9": "6813",
  //                               "special10": "8679",
  //                               "consolation1": "8344",
  //                               "consolation2": "0822",
  //                               "consolation3": "9629",
  //                               "consolation4": "3921",
  //                               "consolation5": "8404",
  //                               "consolation6": "8966",
  //                               "consolation7": "5845",
  //                               "consolation8": "7320",
  //                               "consolation9": "5814",
  //                               "consolation10": "3173",
  //                               "confirm": "Yes",
  //                               "created_at": "2022-10-20 16:04:46",
  //                               "updated_at": "2022-10-20 16:04:46",
  //                               "deleted_at": null
  //                             },
  //                             {
  //                               "id": 7935,
  //                               "game_play_id": 1,
  //                               "fetching_date": "2022-10-05",
  //                               "result_date": "Wed 05-10-2022",
  //                               "reference_number": "766/22",
  //                               "prize1": "6638",
  //                               "prize2": "2049",
  //                               "prize3": "5366",
  //                               "special1": "5064",
  //                               "special2": "2850",
  //                               "special3": "6666",
  //                               "special4": "6386",
  //                               "special5": "2349",
  //                               "special6": "7854",
  //                               "special7": "7894",
  //                               "special8": "7599",
  //                               "special9": "6082",
  //                               "special10": "0799",
  //                               "consolation1": "0033",
  //                               "consolation2": "0484",
  //                               "consolation3": "0785",
  //                               "consolation4": "9172",
  //                               "consolation5": "4579",
  //                               "consolation6": "5925",
  //                               "consolation7": "8687",
  //                               "consolation8": "5776",
  //                               "consolation9": "9394",
  //                               "consolation10": "5203",
  //                               "confirm": "Yes",
  //                               "created_at": "2022-10-20 16:04:46",
  //                               "updated_at": "2022-10-20 16:04:46",
  //                               "deleted_at": null
  //                             }
  //                           ],
  //                           "for_card": [
                              
  //                           ],
  //                           "permutation": [
  //                             "0484",
  //                             "0448",
  //                             "0844",
  //                             "4084",
  //                             "4048",
  //                             "4804",
  //                             "4840",
  //                             "4480",
  //                             "4408",
  //                             "8404",
  //                             "8440",
  //                             "8044"
  //                           ]
  //                         };
  // let foo = bettingTipsData.data;
  // foo.map(game => {
  //   let keys = Object.keys(game);
  //   keys.map(game1 => {
  //     if(game[game1] == '0484')
  //     console.log('bettingTipsDatabettingTipsData',game1) 
  //   });
  // });


  let transactions = _transactions;
  let oddSet = transactions && transactions.market && transactions.market.odd_settings ? transactions.market.odd_settings : [];
  let prizeObject = [
      { 
          "id": "1",
          "name": "Top 3",
          "value": "top3",
          "selected": false
      },
      { 
          "id": "2",
          "name": "Special",
          "value": "special",
          "selected": false
      },
      { 
          "id": "3",
          "name": "Second",
          "value": "second",
          "selected": false
      }
  ];

  const keyRef = useRef();
  const [bettingInitData, setBettingInitData] = useState([]);
  const [number, setNumber] = useState('');
  const [permutation, setPermutation] = useState(null);
  const [permutationData, setPermutationData] = useState(null);
  const [mainCard, setMainCard] = useState(null);
  const [firstTableData, setFirstTableData] = useState(null);
  const [search, setSearch] = useState(0)
  
  const [prizeInitData, setPrizeInitData] = useState(prizeObject);
  const [changeData, setChangeData] = useState(0);
  
  const [searchResultData, setSearchResultData] = useState([]);
  const [reserAllData, setReserAllData] = useState(false);

  function getallcompanydata(){
      let dateAndGameOptionData = [];
      if(oddSet){
          oddSet.map(game => {
              let tempObject = { 
                  "game_play_id": game.game_play.id,
                  "selected": false
              }
              dateAndGameOptionData.push(tempObject);
          });
      }
      setBettingInitData(dateAndGameOptionData);
  }

  const selectCompany = (id) =>{
      if(id){
          let data = bettingInitData
          let objIndex = data.findIndex((obj => obj.game_play_id == id));
          if(data[objIndex].selected){
              data[objIndex].selected = false;
              setBettingInitData(data)
              if(changeData)
                setChangeData(0)
              else
                setChangeData(1)
          }else{
              data[objIndex].selected = true;
              setBettingInitData(data)
              if(changeData)
                setChangeData(0)
              else
                setChangeData(1)
          }
      }
  }

  const selectPrize = (id) =>{
      if(id){
          let data = prizeInitData
          let objIndex = data.findIndex((obj => obj.id == id));
          if(data[objIndex].selected){
              data[objIndex].selected = false;
              if(changeData)
              setChangeData(0)
              else
              setChangeData(1)
          }else{
              data[objIndex].selected = true;
              if(changeData)
                setChangeData(0)
              else
                setChangeData(1)
          }
          setPrizeInitData(data);
      }
  }

  const change = () => {
    const date = document.getElementById("daterangepicker");
    $('input[name="datefilter"]').daterangepicker({
      locale: {
        applyLabel: t("submit"),
        cancelLabel: t("clear"),
        format: "DD/MM/YYYY",
        customRangeLabel: t("custom_range"),
        daysOfWeek: [
          t("Su"),
          t("Mo"),
          t("Tu"),
          t("We"),
          t("Th"),
          t("Fr"),
          t("Sa"),
        ],
        monthNames: [
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
        ],
      },
      startDate: moment(new Date()),
      endDate: moment(new Date()),
    });
  };

  useEffect(() => {
    change();
  }, [t]);  

  useEffect(()=>{
    getallcompanydata();
  },[oddSet])

  const bettingTip = state && state.bettingTips && state.bettingTips.bettingsTips ? state.bettingTips.bettingsTips : [];

  const searchClick = () => {
    // resetClick();
    let dateFull = $("#daterangepicker").val();
    let sdate = '';
    let edate = ''; 
    let mainDateee = '';
    if(dateFull){
        sdate = dateFull.split("-")[0].trim();
        edate = dateFull.split("-")[1].trim();
        mainDateee = sdate+'-'+edate;
    }

    let company = [];
    if(bettingInitData){
      bettingInitData.map(game => {
        if(game.selected){
          let tempObject = game.game_play_id 
          company.push(tempObject);
        }
      });
    }
    let prizes = [];
    if(prizeInitData){
      prizeInitData.map(prize => {
        if(prize.selected){
          let tempObject = prize.value 
          prizes.push(tempObject);
        }
      });
    }

    const searchPostData = {
                      "number":number,
                      // "sdate":sdate,
                      // "edate":edate,
                      "date":mainDateee,
                      "company":company,
                      "permutation":permutation,
                      "prize":prizes
                    };

    const searchResult = dispatch(serachBettingTips(searchPostData,datauser.user.data.token ? datauser.user.data.token : ""));
    
    if(searchResult){
      setReserAllData(true); 
    }
   
    // if(searchResult && searchResult.messages){
    //   alert('yyss')
    // }else{
    //   alert('nnoo')
    // }
  }

  useEffect(()=>{
    if(reserAllData){
      setPermutationData(bettingTip.permutation);
      setMainCard(bettingTip.main_card);
      setFirstTableData(bettingTip.data);
    }
  },[bettingTip,permutationData,mainCard,firstTableData,reserAllData])

  console.log('searchPostData',bettingTip);

  const resetClick = () => {
    setReserAllData(false);
    setNumber('');
    $("#daterangepicker").val('');
    setPermutation(null); 
    getallcompanydata();  
    setPrizeInitData(prizeObject);  
    setPermutationData([]);
    setFirstTableData([]);
  }

  const getNetDrawDate = () =>{
    let numberCount = mainCard && mainCard.avg_draw_gap ? mainCard.avg_draw_gap : 0;
    if(numberCount != 0){
      const countNumber = numberCount * 3;
      let maxDate = moment().add('days', countNumber).format('DD/MM/YYYY');
      return maxDate;
    }else{
      return '--';
    }
  }

  function PrizeSetComm({prizeType}){
    let prizeTypeStyle = '';
    if(prizeType == 'prize1'){
      prizeType = "First Prize";
      prizeTypeStyle = "badge bg-primary";

    }else if(prizeType == 'prize2'){
      prizeType = "Second Prize";
      prizeTypeStyle = "badge bg-primary";
    }else if(prizeType == 'prize3'){
      prizeType = "Third Prize";
      prizeTypeStyle = "badge bg-warning text-dark";
    }
    
    else if(prizeType == 'special1' || prizeType == 'special2' || prizeType == 'special3' || prizeType == 'special4' || prizeType == 'special5' || prizeType == 'special6' || prizeType == 'special7' || prizeType == 'special8' || prizeType == 'special9' || prizeType == 'special10'){
      prizeType = "Special Prize";
      prizeTypeStyle = "badge bg-info text-white";
    }
    else if(prizeType == 'consolation1' || prizeType == 'consolation2' || prizeType == 'consolation3' || prizeType == 'consolation4' || prizeType == 'consolation5' || prizeType == 'consolation6' || prizeType == 'consolation7' || prizeType == 'consolation8' || prizeType == 'consolation9' || prizeType == 'consolation10'){
      prizeType = "Consolation Prize";
      prizeTypeStyle = "badge bg-light text-dark border border-dark";
    }

    else{
      prizeTypeStyle = "badge bg-light text-dark border border-dark";
    }
    return(
          <span className={prizeTypeStyle}>
            {prizeType}
          </span>
    )
  }

  function getCountsPrizeSetComm(prizeType){
    // console.log('totalCounts',prizeType);
    let st1	= 0;
    let nd2	= 0;
    let rd3	= 0;
    let Spe	= 0;
    let Con = 0;
    if(prizeType == 'prize1'){
      st1++;
    }else if(prizeType == 'prize2'){
      nd2++;
    }else if(prizeType == 'prize3'){
      rd3++;
    }else if(prizeType == 'special1' || prizeType == 'special2' || prizeType == 'special3' || prizeType == 'special4' || prizeType == 'special5' || prizeType == 'special6' || prizeType == 'special7' || prizeType == 'special8' || prizeType == 'special9' || prizeType == 'special10'){
      Spe++;
    }
    else if(prizeType == 'consolation1' || prizeType == 'consolation2' || prizeType == 'consolation3' || prizeType == 'consolation4' || prizeType == 'consolation5' || prizeType == 'consolation6' || prizeType == 'consolation7' || prizeType == 'consolation8' || prizeType == 'consolation9' || prizeType == 'consolation10'){
      Con++;
    }
    let totalCounts = {
                        "st1": st1,
                        "nd2": nd2,
                        "rd3": rd3,
                        "Spe": Spe,
                        "Con": Con
                      } ;
    return totalCounts;
  }

  function ForData(){
        let st1m	= 0;
        let nd2m	= 0;
        let rd3m	= 0;
        let Spem	= 0;
        let Conm = 0;
        let totalm = 0;
        let LastDrawDate = '-';
        let LastDrawDay = '-';
        let lastPrize = '';
        let LastGameId = '';
        {firstTableData && firstTableData.map(value => {
          let keys = Object.keys(value);
          keys.map(game1 => {
            if(value[game1] == number){
              let totalCounts = getCountsPrizeSetComm(game1);
              console.log('totalCounts',totalCounts.st1)
              st1m	= st1m+totalCounts.st1;
              nd2m	= nd2m+totalCounts.nd2;
              rd3m	= rd3m+totalCounts.rd3;
              Spem	= Spem+totalCounts.Spe;
              Conm  = Conm+totalCounts.Con;

              totalm = st1m+nd2m+rd3m+Spem+Conm;
              lastPrize = game1;
              LastDrawDate = moment(value.fetching_date).format('DD/MM/YYYY');
              LastDrawDay = moment(value.fetching_date).format('ddd');
              LastGameId = value.game_play_id;
            }
          });
        })} 
        return (
          <>
            <tr>
              <td>{firstTableData && number}</td>
              <td>{st1m != 0 ? st1m : '' }</td>
              <td>{nd2m != 0 ? nd2m : '' }</td>
              <td>{rd3m != 0 ? rd3m : '' }</td>
              <td>{Spem != 0 ? Spem : '' }</td>
              <td>{Conm != 0 ? Conm : '' }</td>
              <td align="right">
                <b>{totalm != 0 ? totalm : '' }</b>
              </td>
              <td align="right">7120</td>
              <td align="right">6500</td>
              <td>{LastDrawDate}</td>
              <td>{LastDrawDay}</td>
              <td>
                <PrizeSetComm prizeType={lastPrize} />
              </td>
              <td>
              
                {oddSet.map((game, id) => {
                  if(LastGameId && game.game_play.id == LastGameId){
                    return(
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
                    )                            
                  }
                })}
              </td>
            </tr>
            <tr>
              <td>
                <b>Total</b>
              </td>
              <td>{st1m != 0 ? st1m : '' }</td>
              <td>{nd2m != 0 ? nd2m : '' }</td>
              <td>{rd3m != 0 ? rd3m : '' }</td>
              <td>{Spem != 0 ? Spem : '' }</td>
              <td>{Conm != 0 ? Conm : '' }</td>
              <td align="right">
                <b>{totalm != 0 ? totalm : '' }</b>
              </td>
              <td align="right">7120</td>
              <td align="right">6500</td>
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
        )
  }

    let mainst1m	= 0;
    let mainnd2m	= 0;
    let mainrd3m	= 0;
    let mainSpem	= 0;
    let mainConm = 0;
    let maintotalm = 0;
  return (
    <>
      <section className="custom-breadcrumb">
        <div className="container">
          <div className="breadcrumb-heading">
            <h1 className="text-uppercase">Betting Tips</h1>
          </div>
          <div className="breadcrumb-list">
            <ul>
              <li>
                <span>{t("Homepage")} / Betting Tips</span>
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
                  <label className="fw-bold mb-2">Number</label>
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
                    value={number && !search ? number: ""}
                  />
                </FormGroup>
              </Col>
              <Col sm="6" lg="2" md="3">
                <FormGroup>
                  <label className="fw-bold mb-2">Range</label>
                  <DateRangePicker
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
                  </DateRangePicker>
                </FormGroup>
              </Col>
              <Col sm="6" lg="2" md="3">
                <FormGroup>
                  <label className="fw-bold mb-2">Company</label>
                  <ul className="list-inline mb-0 small-company">
                    {oddSet.map((game, id) => (
                      <li key={id} onClick={() => selectCompany(game.game_play.id)} className=" list-inline-item">
                        <span
                          className={`${bettingInitData && bettingInitData[id] && bettingInitData[id].selected ? "selected-gp-btn":""} outer-circle-gp`}
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
                  <label className="fw-bold mb-2">Permutation</label>
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
                          checked={`${permutation == 1 ? "checked":""}`}
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
                          checked={`${permutation == 0 ? "checked":""}`}
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
                  <label className="fw-bold mb-2">Prize</label>
                  <ul className="list-inline mb-0 small">
                    {prizeInitData.map((prize, id) => (
                        <li key={id} className="list-inline-item">
                            <div className="form-check">
                                <input
                                    onClick={() => selectPrize(prize.id)}
                                    className="form-check-input"
                                    type="checkbox"
                                    value={prize.value}
                                    id={"flexCheckDefault2"+prize.id}
                                    checked={prize.selected ? "checked":""}
                                />
                                <label
                                className="form-check-label"
                                htmlFor={"flexCheckDefault2"+prize.id}
                                >
                                {prize.id == 3 ? <><span className="badge bg-primary">{prize.name}</span></> : prize.name }
                                </label>
                            </div>
                        </li>
                    ))}
                  </ul>
                </FormGroup>
              </Col>
              <Col sm="6" lg="2" md="6">
                <FormGroup>
                  <label className="d-block mb-2">&nbsp;</label>
                  <button
                    onClick={() => searchClick()}
                    type="button"
                    id="search"
                    className="btn-custom-curve2-sm w-auto me-2"
                  >
                    Search
                  </button>
                  <button
                    onClick={() => resetClick()}
                    type="button"
                    id="reset"
                    className="btn-custom-curve1-sm"
                  >
                    Reset
                  </button>
                </FormGroup>
              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <Card className="alert alert-warning text-dark p-0 rounded-0 border border-warning">
            <CardHeader className="fw-bold">Total Permutation: {permutationData && permutationData.length}</CardHeader>
            <CardBody>
              <ul className="list-inline mb-0">
                {permutationData && permutationData.map((value, index)=>{
                  return (
                    <>
                      <li key={index} className="list-inline-item">
                        <span className="badge bg-light text-dark">{value}</span>
                      </li>
                    </>
                  )
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
                        <b>{mainCard && mainCard.total_hits ? mainCard.total_hits : 0}</b>
                      </p>
                      <p className="mb-0 fs-6">Total Hits</p>
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
                        <b>{mainCard && mainCard.max_draw_gap ? mainCard.max_draw_gap : 0} Draws</b>
                      </p>
                      <p className="mb-0 fs-6">Max DrawGap</p>
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
                        <b>{mainCard && mainCard.min_draw_gap ? mainCard.min_draw_gap : 0 } Draws</b>
                      </p>
                      <p className="mb-0 fs-6">Min DrawGap</p>
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
                        <b>{mainCard && mainCard.avg_draw_gap ? mainCard.avg_draw_gap : 0 } Draws</b>
                      </p>
                      <p className="mb-0 fs-6">Avg DrawGap</p>
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
                        <b>#{mainCard && mainCard.last_hit_draw_no ? mainCard.last_hit_draw_no : '' }</b>
                      </p>
                      <p className="mb-0 fs-6">Last Hit DrawNo</p>
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
                        <b>#{mainCard && mainCard.last_hit_draw_id ? mainCard.last_hit_draw_id : '' }</b>
                      </p>
                      {/* <p className="mb-0 fs-6">Estimate Next Hit DrawID</p> */}
                      <p className="mb-0 fs-6">Last Hit DrawID</p>
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
                        <b>#{mainCard && mainCard.last_hit_draw_no && mainCard.avg_draw_gap ?
                              (parseInt(mainCard.last_hit_draw_no)+parseInt(mainCard.avg_draw_gap)) : '' }
                        </b>
                      </p>
                      <p className="mb-0 fs-6">Estimate Next Hit DrawNo</p>
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
                      <p className="mb-0 fs-6">Estimate Next Draw Date</p>
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
                  <th>No</th>
                  <th>Number</th>
                  <th>Prize</th>
                  <th>DrawID</th>
                  <th>DrawNo</th>
                  <th>Date</th>
                  <th>Day</th>
                  <th className="text-center">Source</th>
                  <th>DrawGap</th>
                </tr>
              </thead>
              <tbody>
                {firstTableData && firstTableData.map((value, index)=>{
                    let prizeType = '';
                    let betNum = '';
                      let keys = Object.keys(value);
                      keys.map(game1 => {
                        if(permutationData.length > 0){
                          permutationData.map(pdata => {
                            if(value[game1] == pdata){
                              prizeType = game1; 
                              betNum = value[game1];
                            }
                          })
                        }else{
                          if(value[game1] == number){
                            prizeType = game1; 
                            betNum = value[game1];
                          }
                        }
                      });
                    return (
                      <>
                        <tr>
                          <td>{index+1}</td>
                          <td>
                            <b>{betNum}</b>
                          </td>
                          <td>
                            <PrizeSetComm prizeType={prizeType} />
                          </td>
                          <td>{value.reference_number}</td>
                          <td>#{value.reference_number.split('/')[0]}</td>
                          <td>{moment(value.fetching_date).format('DD/MM/YYYY')}</td>
                          <td>{moment(value.fetching_date).format('ddd')}</td>
                          <td align="center">
                            {oddSet.map((game, id) => {
                              if(game.game_play.id == value.game_play_id){
                                return(
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
                                )                            
                              }
                            })}
                          </td>
                          <td>{value.days_since_last ? value.days_since_last : '-'}</td>
                        </tr>
                      </>
                    )
                })}
              </tbody>
            </table>
          </div>
        </Container>
        <Container>
          <div className="table-responsive">
            <table className="table table-striped table-sm small table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Number</th>
                  <th>1st</th>
                  <th>2nd</th>
                  <th>3rd</th>
                  <th>Spe</th>
                  <th>Con</th>
                  <th className="text-end">Total</th>
                  <th className="text-end">Big</th>
                  <th className="text-end">Small</th>
                  <th>LastDraw</th>
                  <th>Day</th>
                  <th>Prize</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                  {permutationData && permutationData.length > 0 ? 
                    <>
                      {permutationData && permutationData.map((pdata, index)=>{
                        let st1m	= 0;
                        let nd2m	= 0;
                        let rd3m	= 0;
                        let Spem	= 0;
                        let Conm = 0;
                        let totalm = 0;
                        let LastDrawDate = '-';
                        let LastDrawDay = '-';
                        let lastPrize = '';
                        let LastGameId = '';
                        {firstTableData && firstTableData.map(value => {
                          let keys = Object.keys(value);
                          keys.map(game1 => {
                            if(value[game1] == pdata){
                              let totalCounts = getCountsPrizeSetComm(game1);
                              st1m	= st1m+totalCounts.st1;
                              nd2m	= nd2m+totalCounts.nd2;
                              rd3m	= rd3m+totalCounts.rd3;
                              Spem	= Spem+totalCounts.Spe;
                              Conm  = Conm+totalCounts.Con;
                              totalm = st1m+nd2m+rd3m+Spem+Conm;
                              lastPrize = game1;
                              LastDrawDate = moment(value.fetching_date).format('DD/MM/YYYY');
                              LastDrawDay = moment(value.fetching_date).format('ddd');
                              LastGameId = value.game_play_id;
                            }
                          });
                        })} 
                        mainst1m	= mainst1m+st1m;
                        mainnd2m	= mainnd2m+nd2m;
                        mainrd3m	= mainrd3m+rd3m;
                        mainSpem	= mainSpem+Spem;
                        mainConm = mainConm+Conm;
                        maintotalm = maintotalm+totalm;
                        return (
                            <tr key={index}>
                              <td>{pdata}</td>
                              <td>{st1m != 0 ? st1m : '' }</td>
                              <td>{nd2m != 0 ? nd2m : '' }</td>
                              <td>{rd3m != 0 ? rd3m : '' }</td>
                              <td>{Spem != 0 ? Spem : '' }</td>
                              <td>{Conm != 0 ? Conm : '' }</td>
                              <td align="right">
                                <b>{totalm != 0 ? totalm : '' }</b>
                              </td>
                              <td align="right">7120</td>
                              <td align="right">6500</td>
                              <td>{LastDrawDate}</td>
                              <td>{LastDrawDay}</td>
                              <td>
                                <PrizeSetComm prizeType={lastPrize} />
                              </td>
                              <td>
                              
                                {oddSet.map((game, id) => {
                                  if(LastGameId && game.game_play.id == LastGameId){
                                    return(
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
                                    )                            
                                  }
                                })}
                              </td>
                            </tr>
                        )
                      })}
                      <tr>
                        <td>
                          <b>Total</b>
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
                        <td align="right">
                          <b>254720</b>
                        </td>
                        <td align="right">
                          <b>241500</b>
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
                        <td align="right">
                          <b>&nbsp;</b>
                        </td>
                      </tr> 
                    </>
                    : 
                    <>
                      <ForData />
                    </>
                  }
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </>
  );
}
