import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
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
export default function SearchNumber({ _transactions, _auth }) {
  const { t } = useTranslation();

  const bettingTipsData = {
                            "data": [
                              {
                                "id": 7934,
                                "game_play_id": 3,
                                "fetching_date": "2022-10-05",
                                "result_date": "Wed 05-10-2022",
                                "reference_number": "5530/22",
                                "prize1": "1046",
                                "prize2": "5595",
                                "prize3": "6441",
                                "special1": "0484",
                                "special2": "2796",
                                "special3": "2843",
                                "special4": "9613",
                                "special5": "5391",
                                "special6": "0472",
                                "special7": "3945",
                                "special8": "9353",
                                "special9": "6813",
                                "special10": "8679",
                                "consolation1": "8344",
                                "consolation2": "0822",
                                "consolation3": "9629",
                                "consolation4": "3921",
                                "consolation5": "8404",
                                "consolation6": "8966",
                                "consolation7": "5845",
                                "consolation8": "7320",
                                "consolation9": "5814",
                                "consolation10": "3173",
                                "confirm": "Yes",
                                "created_at": "2022-10-20 16:04:46",
                                "updated_at": "2022-10-20 16:04:46",
                                "deleted_at": null
                              },
                              {
                                "id": 7935,
                                "game_play_id": 1,
                                "fetching_date": "2022-10-05",
                                "result_date": "Wed 05-10-2022",
                                "reference_number": "766/22",
                                "prize1": "6638",
                                "prize2": "2049",
                                "prize3": "5366",
                                "special1": "5064",
                                "special2": "2850",
                                "special3": "6666",
                                "special4": "6386",
                                "special5": "2349",
                                "special6": "7854",
                                "special7": "7894",
                                "special8": "7599",
                                "special9": "6082",
                                "special10": "0799",
                                "consolation1": "0033",
                                "consolation2": "0484",
                                "consolation3": "0785",
                                "consolation4": "9172",
                                "consolation5": "4579",
                                "consolation6": "5925",
                                "consolation7": "8687",
                                "consolation8": "5776",
                                "consolation9": "9394",
                                "consolation10": "5203",
                                "confirm": "Yes",
                                "created_at": "2022-10-20 16:04:46",
                                "updated_at": "2022-10-20 16:04:46",
                                "deleted_at": null
                              }
                            ],
                            "for_card": [
                              
                            ],
                            "permutation": [
                              "0484",
                              "0448",
                              "0844",
                              "4084",
                              "4048",
                              "4804",
                              "4840",
                              "4480",
                              "4408",
                              "8404",
                              "8440",
                              "8044"
                            ]
                          };
  let foo = bettingTipsData.data;
  foo.map(game => {
    let keys = Object.keys(game);
    keys.map(game1 => {
      if(game[game1] == '0484')
      console.log('bettingTipsDatabettingTipsData',game1) 
    });
  });


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
  const [prizeInitData, setPrizeInitData] = useState(prizeObject);
  const [changeData, setChangeData] = useState(0);

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

  const searchClick = () => {
    let dateFull = $("#daterangepicker").val();
    let sdate = '';
    let edate = ''; 
    if(dateFull){
        sdate = dateFull.split("-")[0].trim();
        edate = dateFull.split("-")[1].trim();
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
                      "date":dateFull,
                      "company":company,
                      "permutation":permutation,
                      "prize":prizes
                    };

                    console.log('searchPostData',searchPostData);

  }
  const resetClick = () => {
    setNumber('');
    $("#daterangepicker").val('');
    setPermutation(null); 
    getallcompanydata();  
    setPrizeInitData(prizeObject);  
  }
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
                    value={number}
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
            <CardHeader className="fw-bold">Total Permutation: 24</CardHeader>
            <CardBody>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">0234</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">0243</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">0324</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">0342</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">0423</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">0432</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">2034</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">2043</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">2304</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">2340</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">2403</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">2430</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">3024</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">3042</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">3204</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">3240</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">3402</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">3420</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">4023</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">4032</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">4203</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">4230</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">4302</span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-light text-dark">4320</span>
                </li>
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
                        <b>326</b>
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
                        <b>110 Draws</b>
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
                        <b>1 Draws</b>
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
                        <b>18 Draws</b>
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
                        <b>#6155</b>
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
                        <b>#6173</b>
                      </p>
                      <p className="mb-0 fs-6">Estimate Next Hit DrawID</p>
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
                        <b>#6173</b>
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
                        <b>28-12-2022</b>
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
                <tr>
                  <td>1</td>
                  <td>
                    <b>2403</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>071/85</td>
                  <td>#71</td>
                  <td>05/10/1985</td>
                  <td>Sat</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <b>2043</b>
                  </td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>010/86</td>
                  <td>#118</td>
                  <td>23/01/1986</td>
                  <td>Thu</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>47</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <b>3024</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>022/86</td>
                  <td>#130</td>
                  <td>20/02/1986</td>
                  <td>Thu</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <b>3024</b>
                  </td>
                  <td>
                    <span className="badge bg-primary">Second</span>
                  </td>
                  <td>025/86</td>
                  <td>#133</td>
                  <td>27/02/1986</td>
                  <td>Thu</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <b>4023</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>047/86</td>
                  <td>#156</td>
                  <td>19/04/1986</td>
                  <td>Sat</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    <b>3024</b>
                  </td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>054/86</td>
                  <td>#163</td>
                  <td>04/05/1986</td>
                  <td>Sun</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    <b>0324</b>
                  </td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>064/86</td>
                  <td>#173</td>
                  <td>29/05/1986</td>
                  <td>Thu</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    <b>3204</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>091/86</td>
                  <td>#200</td>
                  <td>31/07/1986</td>
                  <td>Thu</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    <b>3024</b>
                  </td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>125/86</td>
                  <td>#234</td>
                  <td>18/10/1986</td>
                  <td>Sat</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>34</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    <b>2430</b>
                  </td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>078/87</td>
                  <td>#344</td>
                  <td>28/06/1987</td>
                  <td>Sun</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>110</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>
                    <b>0342</b>
                  </td>
                  <td>
                    <span className="badge bg-primary">Second</span>
                  </td>
                  <td>086/87</td>
                  <td>#353</td>
                  <td>18/07/1987</td>
                  <td>Sat</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>
                    <b>0324</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>096/87</td>
                  <td>#363</td>
                  <td>09/08/1987</td>
                  <td>Sun</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>
                    <b>3240</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>141/87</td>
                  <td>#408</td>
                  <td>22/11/1987</td>
                  <td>Sun</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>45</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>
                    <b>2034</b>
                  </td>
                  <td>
                    <span className="badge bg-primary">Second</span>
                  </td>
                  <td>157/87</td>
                  <td>#425</td>
                  <td>31/12/1987</td>
                  <td>Thu</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>
                    <b>0234</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>029/88</td>
                  <td>#454</td>
                  <td>07/03/1988</td>
                  <td>Mon</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>29</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>
                    <b>2034</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>040/88</td>
                  <td>#465</td>
                  <td>02/04/1988</td>
                  <td>Sat</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>
                    <b>2304</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>041/88</td>
                  <td>#466</td>
                  <td>04/04/1988</td>
                  <td>Mon</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>
                    <b>4032</b>
                  </td>
                  <td>
                    <span className="badge bg-primary">Second</span>
                  </td>
                  <td>043/88</td>
                  <td>#468</td>
                  <td>09/04/1988</td>
                  <td>Sat</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>
                    <b>3402</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>067/88</td>
                  <td>#492</td>
                  <td>04/06/1988</td>
                  <td>Sat</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>
                    <b>2403</b>
                  </td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>081/88</td>
                  <td>#506</td>
                  <td>07/07/1988</td>
                  <td>Thu</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>
                    <b>4302</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>085/88</td>
                  <td>#510</td>
                  <td>16/07/1988</td>
                  <td>Sat</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>
                    <b>2340</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>023/89</td>
                  <td>#606</td>
                  <td>23/02/1989</td>
                  <td>Thu</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>96</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>
                    <b>2430</b>
                  </td>
                  <td>
                    <span className="badge bg-primary">Second</span>
                  </td>
                  <td>043/89</td>
                  <td>#626</td>
                  <td>10/04/1989</td>
                  <td>Mon</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>
                    <b>3402</b>
                  </td>
                  <td bgcolor="009900">
                    <span className="badge bg-warning text-dark">Third</span>
                  </td>
                  <td>046/89</td>
                  <td>#629</td>
                  <td>17/04/1989</td>
                  <td>Mon</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>
                    <b>3240</b>
                  </td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>064/89</td>
                  <td>#647</td>
                  <td>29/05/1989</td>
                  <td>Mon</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>
                    <b>0342</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>072/89</td>
                  <td>#655</td>
                  <td>17/06/1989</td>
                  <td>Sat</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>
                    <b>3402</b>
                  </td>
                  <td bgcolor="000099">
                    <span className="badge bg-primary">Second</span>
                  </td>
                  <td>081/89</td>
                  <td>#665</td>
                  <td>08/07/1989</td>
                  <td>Sat</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>
                    <b>4032</b>
                  </td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>097/89</td>
                  <td>#681</td>
                  <td>14/08/1989</td>
                  <td>Mon</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>
                    <b>3024</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>099/89</td>
                  <td>#683</td>
                  <td>19/08/1989</td>
                  <td>Sat</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>
                    <b>3420</b>
                  </td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>127/89</td>
                  <td>#712</td>
                  <td>23/10/1989</td>
                  <td>Mon</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>29</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>
                    <b>4230</b>
                  </td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>136/89</td>
                  <td>#721</td>
                  <td>13/11/1989</td>
                  <td>Mon</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>
                    <b>4230</b>
                  </td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>145/89</td>
                  <td>#730</td>
                  <td>04/12/1989</td>
                  <td>Mon</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>
                    <b>4203</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>151/89</td>
                  <td>#736</td>
                  <td>18/12/1989</td>
                  <td>Mon</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/hTrnoOiPMz9QtA2TWU7b7uTgpOgLFGwCIXKJ6azd.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>
                    <b>3420</b>
                  </td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>0045/90</td>
                  <td>#9</td>
                  <td>03/02/1990</td>
                  <td>Sat</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/AODK45ewx2MNpoUjgbRT95Fo5fA9V8gBnsUcJyhH.png"
                      alt="Da Ma Cai 1+3D (PMP 1+3D)"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>
                    <b>3042</b>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border border-dark">
                      Consolation
                    </span>
                  </td>
                  <td>0066/90</td>
                  <td>#30</td>
                  <td>15/04/1990</td>
                  <td>Sun</td>
                  <td align="center">
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Da Ma Cai 1+3D (PMP 1+3D)"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>21</td>
                </tr>
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
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>0234 </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                  <td align="right">
                    <b>27</b>
                  </td>
                  <td align="right">7120</td>
                  <td align="right">6500</td>
                  <td>19/06/2022</td>
                  <td>Sun</td>
                  <td>
                    <span className="badge bg-info text-white">Special</span>
                  </td>
                  <td>
                    <img
                      src="http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                      alt="Magnum"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Total</b>
                  </td>
                  <td>
                    <b>41</b>
                  </td>
                  <td>
                    <b>31</b>
                  </td>
                  <td>
                    <b>36</b>
                  </td>
                  <td>
                    <b>391</b>
                  </td>
                  <td>
                    <b>417</b>
                  </td>
                  <td align="right">
                    <b>916</b>
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
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </>
  );
}
