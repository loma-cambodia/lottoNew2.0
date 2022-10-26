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

  console.log("currentMarket: ", price);
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

  console.log("price: ", price);
  console.log("result: ", result);
  function palindrome(str) {

      var len = str.length;
      var mid = Math.floor(len/2);

      for ( var i = 0; i < mid; i++ ) {
          if (str[i] !== str[len - 1 - i]) {
              return false;
          }
      }

      return true;
  }


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
                <div className="col-md-5 col-sm-6 back-section">
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
                                        console.log('itemitemitem',item);
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

                        <div className="d-flex mb-3">
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
                                      {/*  <img
                                          className="img-fluid"
                                          src="images\betting\0000.png"
                                          alt=""
                                        style={{ width: '20px' }}
                                      /> */}
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
                                        style={{ cursor: "help",fontSize: "14px" }}
                                      >
                                        iBox
                                      </label>
                                    </div>
                                  }
                                  <div className="">
                                  {palindrome(number) ? (
                                    <label
                                      for="forReverseValue"
                                      className={"form-control disable"}
                                      title="Disabled"
                                      style={{ cursor: "help",fontSize: "14px" }}
                                    >
                                      {t('Reverse')}
                                    </label> )
                                    :
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
                                  }
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
                  <div className="absolute-div">
                    <div className="inner-abs-div">
                        <div className='company-type-heading d-flex align-items-center mb-4'>
                            <div className='comapny-type-logo me-3'>
                                <img src={currentMarket && currentMarket.game_play && currentMarket.game_play.name == 'Magnum' ? 'assets/images/icons/magnum-square.jpg' : 
                                currentMarket && currentMarket.game_play && currentMarket.game_play.name == 'Da Ma Cai' ? 'assets/images/icons/damacai-square.jpg' : 
                                currentMarket && currentMarket.game_play && currentMarket.game_play.name == 'Toto' ? 'assets/images/icons/toto-square.jpg' : null} />
                            </div>
                            <div className='company-type-name text-white'>
                              {t(currentMarket && currentMarket.game_play && currentMarket.game_play.name ? currentMarket.game_play.name : selectedMarket)}
                            </div>
                        </div>
                      {/* <h3 className="text-center gap-2 justify-content-center d-flex text-uppercase">
                        
                          <span className="selected-gp-btn outer-circle-gp" style={{ height:'45px', width:"45px" }}>
                            
                            <img className="img-fluid" src={currentMarket && currentMarket.game_play && currentMarket.game_play.name == 'Magnum' ? 'assets/images/icons/magnum-square.jpg' : 
                            currentMarket && currentMarket.game_play && currentMarket.game_play.name == 'Da Ma Cai' ? 'assets/images/icons/damacai-square.jpg' : 
                            currentMarket && currentMarket.game_play && currentMarket.game_play.name == 'Toto' ? 'assets/images/icons/toto-square.jpg' : null} />
                          </span>
                        {t(currentMarket && currentMarket.game_play && currentMarket.game_play.name ? currentMarket.game_play.name : selectedMarket)}
                      </h3> */}

                      <div className="absolute-div">
                        <div className="d-flex justify-content-between align-items-center">
                          <label className="" htmlFor="number">
                            {t('Total_No_of_Combination')}
                          </label>
                          <span>{combo}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <label className="" htmlFor="number">
                            {t('Total_Cost')}
                          </label>
                          <span>{merchantCurrency} {cost}</span>
                        </div>
                      </div>
                      <div className="col-md-12 flex-column">
                        <div className="absolute-div mt-4">
                          <h4 className="text-center text-uppercase">
                            <b>{t('Winning_Amount')}</b>
                          </h4>
                          <table className="text-light table table-borderless">
                            <thead>
                              <tr className="">
                                <th style={{ width: "30%" }}></th>
                                {number.length == 3 ? (
                                  <>
                                    <th
                                      style={{ width: "40%" }}
                                      className="text-left"
                                    ></th>
                                    <th
                                      style={{ width: "30%" }}
                                      className="text-left"
                                    ></th>
                                  </>
                                ) : number.length == 4 ? (
                                  <>
                                    <th
                                      style={{ width: "40%" }}
                                      className="text-left"
                                    ></th>
                                    <th
                                      style={{ width: "30%" }}
                                      className="text-left"
                                    ></th>
                                  </>
                                ) : null}
                              </tr>
                            </thead>
                            <tbody>
                              {number.length == 3 ? (
                                <>
                                  <tr className="">
                                    <td style={{ width: "25%" }}>{t('P1')} </td>
                                    <td
                                      style={{ width: "25%" }}
                                      className="text-left"
                                    >
                                    <span
                                      style={{
                                        color: "rgb(255, 228, 0)",
                                        fontSize: "20px",
                                        fontWeight: "700",
                                      }}
                                      className={" text-left row"}
                                    >
                                      <span className="col-md-3 col-12">{merchantCurrency}&nbsp;</span>
                                      <span className="col-md-9 col-12">
                                        {merchantCurrency == 'KHR' ? parseFloat(
                                          result.d3a_one + result.d3c_one
                                        ) : parseFloat(
                                          result.d3a_one + result.d3c_one
                                        ).toFixed(2)}
                                      </span>

                                    </span>
                                    </td>
                                    
                                    <div className={styles.device_detect_for_desktop}> 
                                      <td
                                        style={{ width: "100%" }}
                                        className="text-left d-flex flex-column"
                                      >
                                        <div className="w-100">
                                          <span className="d-flex justify-content-between">
                                            <span> 3A: </span>
                                            <span>
                                              {merchantCurrency} &nbsp;
                                              {parseFloat(price.d3.a3_one).toFixed(
                                                2
                                              )}
                                            </span>
                                          </span>
                                          <span className="d-flex justify-content-between">
                                            <span> 3C: </span>
                                            <span>
                                              {merchantCurrency} &nbsp;
                                              {parseFloat(price.d3.one).toFixed(
                                                2
                                              )}
                                            </span>
                                          </span>
                                        </div>
                                      </td>
                                    </div>
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "25%" }}>{t('P2')} </td>
                                    <td
                                      style={{ width: "25%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontSize: "20px",
                                          fontWeight: "700",
                                        }}
                                        className={" text-left row"}
                                      >
                                        <span className="col-md-3 col-12">{merchantCurrency}&nbsp;</span>
                                        <span className="col-md-9 col-12">
                                          {merchantCurrency == 'KHR' ? parseFloat(result.d3c_two) : parseFloat(result.d3c_two).toFixed(2)}
                                        </span>
                                      </span>
                                    </td>
                                    
                                    <div className={styles.device_detect_for_desktop}> 
                                      <td
                                        style={{ width: "100%" }}
                                        className="text-left d-flex flex-column"
                                      >
                                          <span className="d-flex justify-content-between">
                                            <span> 3C: </span>
                                            <span>
                                              {merchantCurrency} &nbsp;
                                              {merchantCurrency == 'KHR' ? parseFloat(price.d3.two) : parseFloat(price.d3.two).toFixed(2)}
                                            </span>
                                          </span>
                                      </td>
                                    </div>
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>{t('P3')} </td>
                                    <td
                                      style={{ width: "25%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontSize: "20px",
                                          fontWeight: "700",
                                        }}
                                        className={" text-left row"}
                                      >
                                        <span className="col-md-3 col-12">{merchantCurrency}&nbsp;</span>
                                        <span className="col-md-9 col-12">
                                          {merchantCurrency == 'KHR' ? parseFloat(result.d3c_three) : parseFloat(result.d3c_three).toFixed(2)}
                                        </span>
                                      </span>
                                    </td>
                                    
                                    <div className={styles.device_detect_for_desktop}> 
                                    <td
                                      style={{ width: "100%" }}
                                      className="text-left d-flex flex-column"
                                    >
                                        <span className="d-flex justify-content-between">
                                          <span> 3C: </span>
                                          <span>
                                            {merchantCurrency}                                            
                                            {merchantCurrency == 'KHR' ? parseFloat(price.d3.three) : parseFloat(price.d3.three).toFixed(2) }
                                          </span>
                                        </span>
                                    </td>
                                    </div>
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>
                                      {t('Special_Prize')}
                                    </td>
                                    <td
                                      style={{ width: "25%" }}
                                      className="text-left"
                                    ></td>
                                    <td
                                      style={{ width: "50%" }}
                                      className="text-left"
                                    ></td>
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>
                                      {t('Consolation_Prize')}
                                    </td>
                                    <td
                                      style={{ width: "25%" }}
                                      className="text-left"
                                    ></td>
                                    <td
                                      style={{ width: "25%" }}
                                      className="text-left"
                                    ></td>
                                  </tr>
                                </>
                              ) : number.length == 4 ? (
                                <>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>{t('P1')} </td>
                                    <td
                                      style={{ width: "30%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontSize: "20px",
                                          fontWeight: "700",
                                        }}
                                        className={" text-left row"}
                                      >
                                        <span className="col-md-3 col-12">{merchantCurrency}&nbsp;</span>
                                        <span className="col-md-9 col-12">
                                          {merchantCurrency == 'KHR' ? parseFloat(result.d4_big_one +result.d4_small_one) : parseFloat(result.d4_big_one +result.d4_small_one).toFixed(2)}
                                        </span>
                                      </span>
                                    </td>
                                    <div className={styles.device_detect_for_desktop}> 
                                      <td
                                        style={{ width: "100%" }}
                                        className="text-left d-flex flex-column"
                                      >
                                        <div className="w-100">
                                          <span className="d-flex justify-content-between">
                                            <span> {t('Big')}: </span>
                                            <span>
                                              {merchantCurrency} &nbsp;
                                              {merchantCurrency == 'KHR' ? parseFloat(price.d4.one) : parseFloat(price.d4.one).toFixed(2) }
                                            </span>
                                          </span>
                                          <span className="d-flex justify-content-between">
                                            <span>  {t('Small_Bet')}: </span>
                                            <span>
                                              {merchantCurrency} &nbsp;
                                              {merchantCurrency == 'KHR' ? parseFloat(price.d4.small_one) : parseFloat(price.d4.small_one).toFixed(2)}
                                            </span>
                                          </span>
                                        </div>
                                      </td>
                                    </div>
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>{t('P2')} </td>
                                    <td
                                      style={{ width: "30%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontSize: "20px",
                                          fontWeight: "700",
                                        }}
                                        className="text-left row"
                                      >
                                        <span className="col-md-3 col-12">{merchantCurrency}&nbsp;</span>
                                        <span className="col-md-9 col-12">
                                        {merchantCurrency == 'KHR' ? parseFloat(result.d4_big_two + result.d4_small_two) : parseFloat(result.d4_big_two + result.d4_small_two).toFixed(2)}</span>
                                      </span>
                                    </td>
                                    <div className={styles.device_detect_for_desktop}> 
                                      <td
                                        style={{ width: "100%" }}
                                        className="text-left d-flex flex-column"
                                      >
                                        <div className="w-100">
                                          <span className="d-flex justify-content-between">
                                            <span> {t('Big')}: </span>
                                            <span>
                                              {merchantCurrency} &nbsp;
                                              {merchantCurrency == 'KHR' ? parseFloat(price.d4.two) : parseFloat(price.d4.two).toFixed(2)}
                                            </span>
                                          </span>
                                          <span className="d-flex justify-content-between">
                                            <span>  {t('Small_Bet')}: </span>
                                            <span>
                                              {merchantCurrency} &nbsp;
                                              {merchantCurrency == 'KHR' ? parseFloat(price.d4.small_two) : parseFloat(price.d4.small_two).toFixed(2)}
                                            </span>
                                          </span>
                                        </div>
                                      </td>
                                    </div>
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>{t('P3')} </td>
                                    <td
                                      style={{ width: "30%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontSize: "20px",
                                          fontWeight: "700",
                                        }}
                                        className="text-left row"
                                      >
                                        <span className="col-md-3 col-12">{merchantCurrency}&nbsp;</span>
                                        <span className="col-md-9 col-12">
                                        {merchantCurrency == 'KHR' ? parseFloat(result.d4_big_three + result.d4_small_three) : parseFloat(result.d4_big_three + result.d4_small_three).toFixed(2)}</span>
                                      </span>
                                    </td>
                                    <div className={styles.device_detect_for_desktop}> 
                                      <td
                                        style={{ width: "100%" }}
                                        className="text-left d-flex flex-column"
                                      >
                                        <div className="w-100">
                                          <span className="d-flex justify-content-between">
                                            <span> {t('Big')}: </span>
                                            <span>
                                              {merchantCurrency} &nbsp;
                                              {merchantCurrency == 'KHR' ? parseFloat(price.d4.three) : parseFloat(price.d4.three).toFixed(2)}
                                            </span>
                                          </span>
                                          <span className="d-flex justify-content-between">
                                            <span>  {t('Small_Bet')}: </span>
                                            <span>
                                              {merchantCurrency} &nbsp;
                                              {merchantCurrency == 'KHR' ? parseFloat(price.d4.small_three) : parseFloat(price.d4.small_three).toFixed(2)}
                                            </span>
                                          </span>
                                        </div>
                                      </td>
                                    </div>
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>
                                      {t('Special_Prize')}
                                    </td>
                                    <td
                                      style={{ width: "30%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontSize: "20px",
                                          fontWeight: "700",
                                        }}
                                        className="text-left row"
                                      >
                                        <span className="col-md-3 col-12">{merchantCurrency}&nbsp;</span>
                                        <span className="col-md-9 col-12">
                                        {merchantCurrency == 'KHR' ? parseFloat(result.d4_big_special) : parseFloat(result.d4_big_special).toFixed(2)}</span>
                                      </span>
                                    </td>
                                    <div className={styles.device_detect_for_desktop}> 
                                      <td
                                        style={{ width: "100%" }}
                                        className="text-left d-flex flex-column"
                                      >
                                          <span className="d-flex justify-content-between w-100">
                                            <span> {t('Big')}: </span>
                                            <span>
                                              {merchantCurrency} &nbsp;
                                              {merchantCurrency == 'KHR' ? parseFloat(price.d4.special) : parseFloat(price.d4.special).toFixed(2)}
                                            </span>
                                          </span>
                                      </td>
                                    </div>
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>
                                      {t('Consolation_Prize')}
                                    </td>
                                    <td
                                      style={{ width: "30%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontSize: "20px",
                                          fontWeight: "700",
                                        }}
                                        className="text-left row"
                                      >
                                        <span className="col-md-3 col-12">{merchantCurrency}&nbsp;</span>
                                        <span className="col-md-9 col-12">
                                        {merchantCurrency == 'KHR' ? parseFloat(result.d4_big_consolation) : parseFloat(result.d4_big_consolation).toFixed(2)}</span>
                                      </span>
                                    </td>
                                    <div className={styles.device_detect_for_desktop}> 
                                      <td
                                        style={{ width: "100%" }}
                                        className="text-left d-flex flex-column"
                                      >
                                          <span className="d-flex justify-content-between">
                                            <span> {t('Big')}: </span>
                                            <span>
                                              {merchantCurrency} &nbsp;
                                              {merchantCurrency == 'KHR' ? parseFloat(price.d4.consolation) : parseFloat(price.d4.consolation).toFixed(2)}
                                            </span>
                                          </span>
                                      </td>
                                    </div>
                                  </tr>
                                </>
                              ) : (
                                <>
                                  <table className="text-light table table-borderless">
                                    <thead>
                                      <tr className="">
                                        <th style={{ width: "30%" }}></th>
                                        <th
                                          className="text-left"
                                          style={{ width: "30%" }}
                                        ></th>
                                        <th
                                          className="text-left"
                                          style={{ width: "30%" }}
                                        ></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="">
                                        <td style={{ width: "30%" }}>
                                          {t('P1')}
                                        </td>
                                        <td
                                          className="text-left"
                                          style={{ width: "30%" }}
                                        >
                                          <span
                                            style={{
                                              color: "rgb(255, 228, 0)",
                                              fontSize: "20px",
                                              fontWeight: "700",
                                            }}
                                            className="text-left"
                                          >
                                            {merchantCurrency}&nbsp;0.00
                                          </span>
                                        </td>
                                        <div className={styles.device_detect_for_desktop}> 
                                            <td
                                              className="text-left d-flex flex-column"
                                              style={{ width: "30%" }}
                                            >
                                                <span className="d-flex justify-content-start">
                                                  <span> 0.00</span>
                                                </span>
                                                <span className="d-flex justify-content-start">
                                                  <span> 0.00</span>
                                                </span>
                                            </td>
                                        </div>
                                      </tr>
                                      <tr className="">
                                        <td style={{ width: "30%" }}>
                                          {t('P2')}
                                        </td>
                                        <td
                                          className="text-start"
                                          style={{ width: "30%" }}
                                        >
                                          <span
                                            style={{
                                              color: "rgb(255, 228, 0)",
                                              fontSize: "20px",
                                              fontWeight: "700",
                                            }}
                                            className="text-left"
                                          >
                                            {merchantCurrency}&nbsp;0.00
                                          </span>
                                        </td>
                                        
                                    <div className={styles.device_detect_for_desktop}> 
                                        <td
                                          className="text-left d-flex flex-column"
                                          style={{ width: "30%" }}
                                        >
                                            <span className="d-flex justify-content-start">
                                              <span> 0.00</span>
                                            </span>
                                            <span className="d-flex justify-content-start">
                                              <span> 0.00</span>
                                            </span>
                                        </td>
                                        </div>
                                      </tr>
                                      <tr className="">
                                        <td style={{ width: "30%" }}>
                                          {t('P3')}
                                        </td>
                                        <td
                                          className="text-left"
                                          style={{ width: "30%" }}
                                        >
                                          <span
                                            style={{
                                              color: "rgb(255, 228, 0)",
                                              fontSize: "20px",
                                              fontWeight: "700",
                                            }}
                                            className="text-left"
                                          >
                                            {merchantCurrency}&nbsp;0.00
                                          </span>
                                        </td>
                                        
                                    <div className={styles.device_detect_for_desktop}> 
                                        <td
                                          className="text-left d-flex flex-column"
                                          style={{ width: "30%" }}
                                        >
                                            <span className="d-flex justify-content-start">
                                              <span> 0.00</span>
                                            </span>
                                            <span className="d-flex justify-content-start">
                                              <span> 0.00</span>
                                            </span>
                                        </td>
                                        </div>
                                      </tr>
                                      <tr className="">
                                        <td style={{ width: "30%" }}>
                                          {t('Special_Prize')}
                                        </td>
                                        <td
                                          className="text-left"
                                          style={{ width: "30%" }}
                                        >
                                          <span
                                            style={{
                                              color: "rgb(255, 228, 0)",
                                              fontSize: "20px",
                                              fontWeight: "700",
                                            }}
                                            className="text-left"
                                          >
                                            {merchantCurrency}&nbsp;0.00
                                          </span>
                                        </td>
                                        
                                    <div className={styles.device_detect_for_desktop}> 
                                        <td
                                          className="text-left d-flex flex-column"
                                          style={{ width: "30%" }}
                                        >
                                            <span className="d-flex justify-content-start">
                                              <span> 0.00</span>
                                            </span>
                                        </td>
                                        </div>
                                      </tr>
                                      <tr className="">
                                        <td style={{ width: "30%" }}>
                                          {t('Consolation_Prize')}
                                        </td>
                                        <td
                                          className="text-left"
                                          style={{ width: "30%" }}
                                        >
                                          <span
                                            style={{
                                              color: "rgb(255, 228, 0)",
                                              fontSize: "20px",
                                              fontWeight: "700",
                                            }}
                                            className="text-left"
                                          >
                                            {merchantCurrency}&nbsp;0.00
                                          </span>
                                        </td>
                                    <div className={styles.device_detect_for_desktop}> 
                                        <td
                                          className="text-left d-flex flex-column"
                                          style={{ width: "30%" }}
                                        >
                                            <span className="d-flex justify-content-start">
                                              <span> 0.00</span>
                                            </span>
                                        </td>
                                        </div>
                                      </tr>
                                    </tbody>
                                  </table>
                                </>
                              )}
                            </tbody>
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
    </section>
  );
};

export default Calculator;
