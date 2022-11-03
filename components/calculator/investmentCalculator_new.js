/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from '../../styles/Home.module.css';

const Calculator = ({ _transactions, _auth }) => {
  const { t } = useTranslation();
  let transactions = _transactions;
  let market = transactions.market;
  let oddSettings = transactions.market;
  let oddSet =
    transactions && transactions.market && transactions.market.odd_settings
      ? transactions.market.odd_settings
      : [];
  let auth = _auth;
  const merchantCurrency =
    auth &&
    auth.auth &&
    auth.auth.merchant &&
    auth.auth.merchant.currency &&
    auth.auth.merchant.currency.code
      ? auth.auth.merchant.currency.code
      : "USD";

  const onLoadCompany =   0;

  const [number, setNumber] = useState("");
  const [gameType, setGameType] = useState("s");
  const [currentMarket, setCurrentMarket] = useState(oddSet[0]);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [combo, setCombo] = useState();
  const [big, setBig] = useState();
  const [small, setSmall] = useState();
  const [c3, setC3] = useState();
  const [a3, setA3] = useState();
  const [result, setResult] = useState({});
  const [cost, setCost] = useState(0);
  const [RepNumber, setRepNumber] = useState(0);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    setSelectedMarket(onLoadCompany);
    setCurrentMarket(oddSet[0])
  }, [onLoadCompany, oddSet]);

  const [price, setPrice] = useState({
    d4: {
      one: 3500,
      two: 1200,
      three: 600,
      special: 240,
      consolation: 80,
      small_one: 5000,
      small_two: 2400,
      small_three: 1200,
    },
    d3: {
      a3_one: 840,
      one: 280,
      two: 280,
      three: 280,
    },
  });
  const checkPalindrome = (string) => {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
        return 0;
      }
    }
    return 1;
  };

  const getNumberRepeatedCounterArray = (_getNumber) => {
    let strSplited = _getNumber.split("");
    let object_New = {};

    strSplited.map((item) => {
      if (object_New[item]) object_New[item] = 1 + object_New[item];
      else object_New[item] = 1;
    });
    return Object.values(object_New);
  };

  const fact = (N) => {
    if (N <= 1) {
      return "1";
    } else {
      return N * fact(N - 1);
    }
  };

  const calculateCombo = (key, palindrome, rnString, rn) => {
    let totalCombination = 0;
    let mrn = "";
    if (
      rnString.includes("2") &&
      rnString.includes("3") &&
      rnString.includes("4")
    ) {
      totalCombination = fact(rn.length);
    } else {
      if (palindrome && key == 3) {
        totalCombination = 3;
      } else if (palindrome && key == 4) {
        totalCombination = 6;
      } else {
        if (rnString.includes("4") && key == 4) {
          totalCombination = 1;
        } else if (rnString.includes("3") && key == 4) {
          totalCombination = 4;
        } else if (rnString.includes("2") && key == 4) {
          mrn = getNumberRepeatedCounterArray(rnString);
          if (mrn.includes("2")) {
            totalCombination = 6;
          } else {
            totalCombination = 12;
          }
        } else if (rnString.includes("3") && key == 3) {
          totalCombination = 1;
        } else if (rnString.includes("2") && key == 3) {
          totalCombination = 6;
        } else {
          totalCombination = fact(rn.length);
        }
        //totalCombination = fact(rn.length)
      }
    }
    return totalCombination;
  };

  useEffect(() => {
    setCurrentMarket(oddSet[selectedMarket]);
    if (currentMarket) {
      setPrice({
        d4: {
          one: currentMarket.big_first,
          two: currentMarket.big_second,
          three: currentMarket.big_third,
          special: currentMarket.big_special,
          consolation: currentMarket.big_consolation,
          small_one: currentMarket.small_first,
          small_two: currentMarket.small_second,
          small_three: currentMarket.small_third,
          rebate_4d: currentMarket.rebate_4d,
        },
        d3: {
          a3_one: currentMarket.three_a_first,
          one: currentMarket.three_c_first,
          two: currentMarket.three_c_second,
          three: currentMarket.three_c_third,
          rebate_3d: currentMarket.rebate_3d,
        },
      });
    }
    if(gameType == 'i' && number.length == 3){
      setGameType('s')
    }
    handelChange();
  }, [number, big, small, c3, a3, gameType, combo, selectedMarket]);

  const handelChange = () => {
    const key = number.length;
    let numberInput = $("#number").val();
    let _3aInput = $("#3aValue3").val();
    let _3cInput = $("#3cValue3").val();
    let bigInput = $("#bigValue").val();
    let smallInput = $("#smallValue").val();
    let totalCombo = 0;
    let total3dCombo = 0;
    let total4dCombo = 0;
    let repeatedNumber = 0;
    let repeatedNumberString = 0;
    let palindrome = 0;

    let _3aInputTotal = 0;
    let _3cInputTotal = 0;
    let bigInputTotal = 0;
    let smallInputTotal = 0;

    let priceCalculation = {};

    //setCombo(1);


    if (!numberInput.match("^[R-Rr-r0-9]*$")) {
      return false;
    }

    if (
      numberInput &&
      numberInput.match(/r/i) &&
      (numberInput.toLowerCase().match(/r/g).length == 2 ||
        numberInput.toLowerCase().match(/r/g).length == 3 ||
        numberInput.toLowerCase().match(/r/g).length == 4)
    ) {
      return false;
    }

    if (numberInput.includes("-") || numberInput.includes(".")) {
      return false;
    }

    setNumber(numberInput);
    repeatedNumber = getNumberRepeatedCounterArray(numberInput);
    repeatedNumberString = repeatedNumber.toString();
    palindrome = checkPalindrome(numberInput);

    if (numberInput.includes("R") || numberInput.includes("r")) {
      total3dCombo = 10;
      total4dCombo = 10;
      setCombo(10);
    }

    if (key == 3) {
      setBig("");
      setSmall("");
    }
    if (key < 3) {
      setA3("");
      setBig("");
      setC3("");
      setCombo("");
      setResult({});
      setSmall("");
      setCost("");
    }

    if (key == 3) {
      if (!_3aInput.match("^[0-9-.]*$") || !_3cInput.match("^[0-9-.]*$")) {
        return false;
      }
      if (
        _3aInput.includes("-") ||
        _3aInput.includes(".") ||
        _3cInput.includes("-") ||
        _3cInput.includes(".")
      ) {
        return false;
      }
      if (_3aInput) {
        setA3(_3aInput);
      }

      if (_3cInput) {
        setC3(_3cInput);
      }
    } else if (key == 4) {
      if (
        !bigInput.match("^[0-9-.]*$") ||
        !smallInput.match("^[0-9-.]*$")
      ) {
        return false;
      }

      if(key == 3){
        if(_3aInput.includes("-") ||
        _3aInput.includes(".") ||
        _3cInput.includes("-") ||
        _3cInput.includes(".")){
          return false
        }
      } else if( key == 4 ){
        if(bigInput.includes("-") ||
        bigInput.includes(".") ||
        smallInput.includes("-") ||
        smallInput.includes(".")){
          return false;
        }
      } else {
        return false;
      } 

      

      if (_3aInput && key > 0) {
        setA3(_3aInput);
      } else {
        setA3("");
      }

      if (_3cInput && key > 0) {
        setC3(_3cInput);
      } else {
        setC3("");
      }

      if (bigInput && key > 0) {
        setBig(bigInput);
      } else {
        setBig("");
      }

      if (smallInput && key > 0) {
        setSmall(smallInput);
      } else {
        setSmall("");
      }
    }

    switch (key) {
      case 3:
        switch (gameType) {
          case "b":
            if (!numberInput.includes("R")) {
              total3dCombo = calculateCombo(
                key,
                palindrome,
                repeatedNumberString,
                repeatedNumber
              );
            } else {
              total3dCombo = 10;
            }
            break;
          case "i":
            if (!numberInput.includes("R")) {
              total3dCombo = calculateCombo(
                key,
                palindrome,
                repeatedNumberString,
                repeatedNumber
              );
            } else {
              total3dCombo = 10;
            }
            break;
          case "r":
            total3dCombo = palindrome ? 1 : 2;
            break;

          default:
            total3dCombo = 1;
            break;
        }
        break;
      case 4:
        switch (gameType) {
          case "b":
            if (!numberInput.includes("R")) {
              total3dCombo = calculateCombo(
                key,
                palindrome,
                repeatedNumberString,
                repeatedNumber
              );
            } else {
              total3dCombo = 10;
            }
            break;
          case "i":
            if (!numberInput.includes("R")) {
              total3dCombo = calculateCombo(
                key,
                palindrome,
                repeatedNumberString,
                repeatedNumber
              );
            } else {
              total3dCombo = 10;
            }
            break;
          case "r":
            total4dCombo = palindrome ? 1 : 2;
            break;

          default:
            total4dCombo = 1;
            break;
        }

        break;
      default:
        break;
    }

    _3aInputTotal = 0;
    _3cInputTotal = 0;
    bigInputTotal = 0;
    smallInputTotal = 0;

    if (numberInput.includes("R") || numberInput.includes("r")) {
      totalCombo = 10;
    } else if (gameType) {
      totalCombo = parseInt(total3dCombo) + parseInt(total4dCombo);
    } else {
      totalCombo = 1;
    }
    if (key > 0) setCombo(totalCombo);
    else setCombo(0);

    if (key >= 3) console.log("object: ", object);

    let totalCost =
      parseInt(c3 ? c3 : 0) +
      parseInt(a3 ? a3 : 0) +
      parseInt(big ? big : 0) +
      parseInt(small ? small : 0);

    if (totalCost && combo && parseInt(totalCost) > 0 && parseInt(combo) > 0) {
      if (gameType == "i") {
        setCost(parseInt(totalCost));
      } else {
        setCost(parseInt(totalCost) * parseInt(combo));
      }
    } else {
      setCost(0);
    }

    let object = {};
    //if (key >= 3) {
    //let total =

    /* 3D Price */

    //}

    if (gameType == "i") {
      object.d3a_one =
        parseInt(_3aInput) > 0
          ? parseFloat(
              parseFloat(parseInt(_3aInput) / parseInt(combo)) *
                parseInt(price.d3.a3_one)
            ).toFixed(2)
          : 0;
      object.d3c_one =
        parseInt(_3cInput) > 0
          ? parseFloat(
              parseFloat(parseInt(_3cInput) / parseInt(combo)) *
                parseInt(price.d3.one)
            ).toFixed(2)
          : 0;
      object.d3c_two =
        parseInt(_3cInput) > 0
          ? parseFloat(
              parseFloat(parseInt(_3cInput) / parseInt(combo)) *
                parseInt(price.d3.two)
            ).toFixed(2)
          : 0;
      object.d3c_three =
        parseInt(_3cInput) > 0
          ? parseFloat(
              parseFloat(parseInt(_3cInput) / parseInt(combo)) *
                parseInt(price.d3.three)
            ).toFixed(2)
          : 0;

      /* 4D Price Big */
      object.d4_big_one =
        parseInt(bigInput) > 0
          ? parseFloat(
              parseFloat(parseInt(bigInput) / parseInt(combo)) *
                parseInt(price.d4.one)
            ).toFixed(2)
          : 0;
      object.d4_big_two =
        parseInt(bigInput) > 0
          ? parseFloat(
              parseFloat(parseInt(bigInput) / parseInt(combo)) *
                parseInt(price.d4.two)
            ).toFixed(2)
          : 0;
      object.d4_big_three =
        parseInt(bigInput) > 0
          ? parseFloat(
              parseFloat(parseInt(bigInput) / parseInt(combo)) *
                parseInt(price.d4.three)
            ).toFixed(2)
          : 0;
      object.d4_big_special =
        parseInt(bigInput) > 0
          ? parseFloat(
              parseFloat(parseInt(bigInput) / parseInt(combo)) *
                parseInt(price.d4.special)
            ).toFixed(2)
          : 0;
      object.d4_big_consolation =
        parseInt(bigInput) > 0
          ? parseFloat(
              parseFloat(parseInt(bigInput) / parseInt(combo)) *
                parseInt(price.d4.consolation)
            ).toFixed(2)
          : 0;

      /* 4D Price Small */
      object.d4_small_one =
        parseInt(smallInput) > 0
          ? parseFloat(
              parseFloat(parseInt(smallInput) / parseInt(combo)) *
                parseInt(price.d4.small_one)
            ).toFixed(2)
          : 0;
      object.d4_small_two =
        parseInt(smallInput) > 0
          ? parseFloat(
              parseFloat(parseInt(smallInput) / parseInt(combo)) *
                parseInt(price.d4.small_two)
            ).toFixed(2)
          : 0;
      object.d4_small_three =
        parseInt(smallInput) > 0
          ? parseFloat(
              parseFloat(parseInt(smallInput) / parseInt(combo)) *
                parseInt(price.d4.small_three)
            ).toFixed(2)
          : 0;
    } else {
      object.d3a_one =
        parseInt(_3aInput) > 0
          ? parseInt(_3aInput) * parseInt(price.d3.a3_one)
          : 0;
      object.d3c_one =
        parseInt(_3cInput) > 0
          ? parseInt(_3cInput) * parseInt(price.d3.one)
          : 0;
      object.d3c_two =
        parseInt(_3cInput) > 0
          ? parseInt(_3cInput) * parseInt(price.d3.two)
          : 0;
      object.d3c_three =
        parseInt(_3cInput) > 0
          ? parseInt(_3cInput) * parseInt(price.d3.three)
          : 0;

      /* 4D Price Big */
      object.d4_big_one =
        parseInt(bigInput) > 0
          ? parseInt(bigInput) * parseInt(price.d4.one)
          : 0;
      object.d4_big_two =
        parseInt(bigInput) > 0
          ? parseInt(bigInput) * parseInt(price.d4.two)
          : 0;
      object.d4_big_three =
        parseInt(bigInput) > 0
          ? parseInt(bigInput) * parseInt(price.d4.three)
          : 0;
      object.d4_big_special =
        parseInt(bigInput) > 0
          ? parseInt(bigInput) * parseInt(price.d4.special)
          : 0;
      object.d4_big_consolation =
        parseInt(bigInput) > 0
          ? parseInt(bigInput) * parseInt(price.d4.consolation)
          : 0;

      /* 4D Price Small */
      object.d4_small_one =
        parseInt(smallInput) > 0
          ? parseInt(smallInput) * parseInt(price.d4.small_one)
          : 0;
      object.d4_small_two =
        parseInt(smallInput) > 0
          ? parseInt(smallInput) * parseInt(price.d4.small_two)
          : 0;
      object.d4_small_three =
        parseInt(smallInput) > 0
          ? parseInt(smallInput) * parseInt(price.d4.small_three)
          : 0;
    }
    setResult(object);

    setRepNumber(repeatedNumber);
  };

  const handelReset = () => {
    // $("#amountValDefaltB").val('');
    // $("#amountValDefaltS").val('');
    $("#bigValue").val('');
    $("#3aValue3").val('');
    $("#smallValue").val('');
    $("#3cValue3").val('');
    setA3("");
    setBig("");
    setC3("");
    setCombo("");
    setGameType("");
    setNumber("");
    setResult("");
    setSmall("");
    setCost("");
    setSelectedMarket(onLoadCompany);
  };


  return (
    <section className="bg-light custom-padding">
      <div className="container">
        <div className="heading-part text-center mb-4">
          {/* <h5 className="text-uppercase fw-bold">{t('how_to')}</h5> */}
          <h2 className="text-uppercase text-color-main fw-bold">
            {t("Winning_Calculator")}
          </h2>
        </div>
        <div className="clearfix">
          <div className="row justify-conternt-center">
            <div className="col-md-10 offset-md-1">
              <div className="row align-items-center no-gutters g-0">
                <div className="col-md-5 col-sm-6 back-section1">
                  <div className="clearfix p-4 z-index-1 back-section2 mx-4">
                    <div className="row mt-3 m-auto">
                      <div className="col-md-10 offset-md-1 margin-left-52px">
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-4">
                              <b>{t('Company')}</b>
                            </div>
                            <div className="col-md-8">
                              <div className="d-flex">
                                <div className="select-gp" id="checkboxes">
                                  <ul id="checkboxes" className="list-inline">

                                      {oddSet.map((item, index)=>{
                                        return(
                                          <>
                                            <li key={index} className=" list-inline-item">
                                              <span
                                                className={
                                                  selectedMarket == index
                                                    ? "selected-gp-btn outer-circle-gp"
                                                    : "outer-circle-gp"
                                                }
                                                title="Select"
                                                onClick={() => {
                                                  setSelectedMarket(index);
                                                }}
                                              >
                                                <span className="inner-circle-gp">
                                                  <img
                                                    className="img-fluid"
                                                    src={item && item.game_play && item.game_play.logo_url ? item.game_play.logo_url : "http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png" }
                                                  />
                                                </span>
                                              </span>
                                            </li>
                                          </>
                                        )

                                      })}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-4">
                              <b>{t('Number')}</b>
                            </div>
                            <div className="col-md-8">
                              <input
                                className="form-control"
                                id="number"
                                minLength={3}
                                maxLength={4}
                                required
                                value={number}
                                onChange={handelChange}
                                autoComplete="off"
                              />
                              {/* <input type="text" className='form-control' /> */}
                            </div>
                          </div>
                        </div>

                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-lg-4 col-md-4'>
                                    <b>{t('Bet_Type')}</b>
                                </div>
                                <div className='col-lg-8 col-md-8'>
                                    <button type="button" className={gameType == 's' ? "btn me-1 btn-bordered-theme-active" : "btn me-1 btn-bordered-theme"} onClick={()=>{setGameType('s')}} title="Straight">S</button>
                                    <button type="button" className={gameType == 'b' ? "btn me-1 btn-bordered-theme-active" : "btn me-1 btn-bordered-theme"} onClick={()=>{setGameType('b')}} title="Box">B</button>
                                    <button type="button" className={number.length == 3 ? "btn  me-1 btn-bordered-theme-disabled" : gameType == 'i' ? "btn  me-1 btn-bordered-theme-active" : "btn  me-1 btn-bordered-theme"} onClick={number.length != 3 ? ()=>{setGameType('i')} : null} title="iBox">I</button>
                                    <button type="button" className={gameType == 'r' ? "btn me-1 btn-bordered-theme-active" : "btn me-1 btn-bordered-theme"} onClick={()=>{setGameType('r')}} title="Reverse">R</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="d-flex mb-3">
                          <div className="d-flex flex-column gap-2">
                            <div>
                              <b>{t('Bet_Type')}</b>
                            </div>
                            <div>
                              <div>
                                <div className="d-flex justify-content-between gap-2">
                                  <div className="">
                                    <label
                                      for="forBoxValue"
                                      className={
                                        gameType == "s"
                                          ? " form-control show-Selected-bet"
                                          : "form-control disable"
                                      }
                                      title="Enabled"
                                      onClick={() => {
                                        setGameType("s");
                                      }}
                                      style={{ cursor: "pointer",fontSize: "14px" }}
                                    >
                                      Straight
                                    </label>
                                  </div>
                                  <div>
                                    <label
                                      for="forBoxValue"
                                      className={
                                        gameType == "b"
                                          ? " form-control show-Selected-bet"
                                          : "form-control disable"
                                      }
                                      title="Enabled"
                                      style={{ cursor: "pointer",fontSize: "14px" }}
                                      onClick={() => {
                                        setGameType("b");
                                      }}
                                    >
                                      Box
                                    </label>
                                  </div>
                                  {number.length > 3 ? (
                                    <div className="">
                                      <label
                                        for="forIboxValue"
                                        className={
                                          gameType == "i"
                                            ? " form-control show-Selected-bet"
                                            : "form-control disable"
                                        }
                                        title="iBox"
                                        style={{ cursor: "pointer",fontSize: "14px" }}
                                        onClick={() => {
                                          setGameType("i");
                                        }}
                                      >
                                        iBox
                                      </label>
                                    </div>
                                  ) : 
                                  <div className="">
                                      <label
                                        for="forIboxValue"
                                        className="form-control disable"
                                        title="Disabled"
                                        style={{ cursor: "pointer",fontSize: "14px" }}
                                      >
                                        iBox
                                      </label>
                                    </div>
                                  }
                                  <div className="">
                                    <label
                                      for="forReverseValue"
                                      className={
                                        gameType == "r"
                                          ? " form-control show-Selected-bet"
                                          : "form-control disable"
                                      }
                                      title="Enabled"
                                      style={{ cursor: "pointer",fontSize: "14px" }}
                                      onClick={() => {
                                        setGameType("r");
                                      }}
                                    >
                                      {t('Reverse')}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <>
                              <div className="d-flex gap-2">
                                <div className="d-flex">
                                  <div className="d-flex flex-column">
                                    <div
                                      style={{
                                        marginBottom: "10px",
                                        paddingLeft: "3px",
                                      }}
                                    >
                                      <b>{t('Big')} / 3A</b>
                                    </div>
                                    <div className="">
                                     <input
                                      className="form-control"
                                      id={number.length ==3 ? "3aValue3" : number.length == 4 ? "bigValue" : "amountValDefaltB"}
                                      maxLength={6}
                                      value={number.length ==3 ? a3 : number.length == 4 ? big : null}
                                      onChange={handelChange}
                                      autoComplete="off"
                                    />
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <div className="d-flex flex-column">
                                    <div
                                      style={{
                                        marginBottom: "10px",
                                        paddingLeft: "3px",
                                      }}
                                    >
                                      <b>{t('Small_Bet')}: / 3C</b>
                                    </div>
                                    <div className="">
                                    <input
                                      className="form-control"
                                      id={number.length ==3 ? "3cValue3" : number.length == 4 ? "smallValue" : "amountValDefaltS"}
                                      maxLength={6}
                                      value={number.length ==3 ? c3 : number.length == 4 ? small : null}
                                      onChange={handelChange}
                                      autoComplete="off"
                                    />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                        {/* </div> */}

                        <div className="mt-2">
                          <div
                            className="row m-auto"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <div className="col-md-8">
                              <div
                                onClick={handelReset}
                                className="clearfix text-center"
                              >
                                <span
                                  role="button"
                                  className="d-block btn btn-warning rounded-full mt-2 text-light"
                                  style={{ fontWeight: "700", background:"#c22361" }}
                                >
                                  CLEAR
                                </span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-6 text-light">
                <div className='absolute-div'>
                                    <div className='inner-abs-div'>
                                        <h5 className='text-uppercase text-center text-white'>{t('Result')}</h5>
                                        <div className='company-type-heading d-flex align-items-center'>
                                            <div className='comapny-type-logo me-3'>
                                                <img src={currentMarket && currentMarket.game_play && currentMarket.game_play.name == 'Magnum' ? 'assets/images/icons/magnum-square.jpg' : 
                                                currentMarket && currentMarket.game_play && currentMarket.game_play.name == 'Da Ma Cai' ? 'assets/images/icons/damacai-square.jpg' : 
                                                currentMarket && currentMarket.game_play && currentMarket.game_play.name == 'Toto' ? 'assets/images/icons/toto-square.jpg' : null} />
                                            </div>
                                            <div className='company-type-name text-white'>
                                              {t(currentMarket && currentMarket.game_play && currentMarket.game_play.name ? currentMarket.game_play.name : selectedMarket)}
                                            </div>
                                        </div>
                                        <div className='first-2-lines my-3'>
                                            <table>
                                                <tr>
                                                    <td>{t('Total_No_of_Combination')}</td>
                                                    <td className='text-end fw-bold'>{combo}</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('Total_Cost')}</td>
                                                    <td className='text-end fw-bold'>{cost}</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='bottom-3-col'>
                                            <div className='row'>
                                                <div className='col'>
                                                    <div className='prize-div'>
                                                        <div className='heading-part'>{t('Prize')}</div>
                                                        <div className='prize-content-part'>
                                                            <table className='table'>
                                                                <tr>
                                                                    <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>{t('1st_Prize')}</div></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>{t('2nd_Prize')}</div></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>{t('3rd_Prize')}</div></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>{t('Special_Prize')}</div></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><div className='prize-value bg-white rounded text-center text-color-main fw-bold'>{t('Consolation_Prize')}</div></td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className='w-amt-div'>
                                                        <div className='w-amt-heading'>{t('PRIZE_AMOUNT')}</div>
                                                        <div className='blank-div'></div>
                                                        <div className='prize-content-part'>
                                                            <table className='table'>
                                                                <tr>
                                                                    <td><div className='w-amt text-end'>{ number.length == 3 ? <>
                                                                            {parseFloat(
                                                                            result.d3a_one + result.d3c_one
                                                                            ).toFixed(2)} 
                                                                    </>: 
                                                                    number.length == 4 ? <>
                                                                        {parseFloat(
                                                                        result.d4_big_one +
                                                                        result.d4_small_one
                                                                        ).toFixed(2)}
                                                                        </> : '-' }</div></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='w-amt text-end'>

                                                                            { number.length == 3 ? <>
                                                                                    {parseFloat(result.d3c_two).toFixed(2)} 
                                                                            </>: 
                                                                            number.length == 4 ? <>
                                                                                {parseFloat(
                                                                                result.d4_big_two +
                                                                                result.d4_small_two
                                                                                ).toFixed(2)}
                                                                                </> : '-' }
                                                                        
                                                                        
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><div className='w-amt text-end'>
                                                                        { number.length == 3 ? <>
                                                                                        {parseFloat(result.d3c_three).toFixed(2)} 
                                                                                </>: 
                                                                                number.length == 4 ? <>
                                                                                    {parseFloat(
                                                                                    result.d4_big_three +
                                                                                    result.d4_small_three
                                                                                    ).toFixed(2)}
                                                                                    </> : '-' }
                                                                        </div></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><div className='w-amt text-end'>
                                                                            { number.length == 4 ? <>
                                                                                {parseFloat(
                                                                                result.d4_big_special
                                                                                ).toFixed(2)}
                                                                                </> : '-' }
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><div className='w-amt text-end'>
                                                                            { number.length == 4 ? <>
                                                                                        {parseFloat(
                                                                                        result.d4_big_consolation
                                                                                        ).toFixed(2)}
                                                                                        </> : '-' }
                                                                        </div></td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className='w-amt-div'>
                                                        <div className='w-amt-heading'>{t('Odds')}</div>
                                                        <div className='prize-content-part'>
                                                            <table className='table text-white'>
                                                                <tr>
                                                                    <th className='text-end py-2'>{number.length == 4 ? <>{t('Big_Bet')}</> : <>3A</>}</th>
                                                                    <th className='text-end py-2'>{number.length == 4 ? <>{t('Small_Bet')}</> : <>3C</>}</th>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-end py-2'>
                                                                    {number.length == 4 ? 
                                                                        <>
                                                                            {parseInt(
                                                                                price.d4.one
                                                                            )}
                                                                        </>: 
                                                                        <>
                                                                            {parseInt(
                                                                                price.d3.a3_one
                                                                            )}
                                                                        </>
                                                                        }
                                                                    </td>
                                                                    <td className='text-end py-2'>
                                                                    {number.length == 4 ? 
                                                                        <>
                                                                            {parseInt(
                                                                                price.d4.small_one
                                                                            )}
                                                                        </>: <>
                                                                            {parseInt(
                                                                                price.d3.one
                                                                            )}
                                                                        </>}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-end py-2'>
                                                                    {number.length == 4 ? 
                                                                        <>
                                                                            {parseInt(
                                                                                price.d4.two
                                                                            )}
                                                                        </>: '-'}
                                                                    </td>
                                                                    <td className='text-end py-2'>
                                                                    {number.length == 4 ? 
                                                                        <>
                                                                            {parseInt(
                                                                                price.d4.small_two
                                                                            )}
                                                                        </>: <>
                                                                            {parseInt(
                                                                                price.d3.two
                                                                            )}
                                                                        </>}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-end py-2'>
                                                                    {number.length == 4 ? 
                                                                        <>
                                                                            {parseInt(
                                                                                price.d4.three
                                                                            )}
                                                                        </>: '-'}
                                                                    </td>
                                                                    <td className='text-end py-2'>
                                                                        {number.length == 4 ? 
                                                                        <>
                                                                            {parseInt(
                                                                                price.d4.small_three
                                                                            )}
                                                                        </>: <>
                                                                            {parseInt(
                                                                                price.d3.three
                                                                            )}
                                                                        </>}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-end py-2'>
                                                                        { number.length == 4 ?
                                                                            <>
                                                                                {parseInt(
                                                                                price.d4.special
                                                                                )}
                                                                            </> : 
                                                                        '-' }    
                                                                    </td>
                                                                    <td className='text-end py-2'>-</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='text-end py-2'>
                                                                        { number.length == 4 ?
                                                                            <>
                                                                                {parseInt(
                                                                                price.d4.consolation
                                                                                )}
                                                                            </> : 
                                                                        '-' }                                                                    
                                                                    </td>
                                                                    <td className='text-end py-2'>-</td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
