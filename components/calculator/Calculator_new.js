/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Home.module.css";


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

  const onLoadCompany = 0;

  const [currencyLimit, setCurrencyLimit] = useState(4)
  const [calculate, setGameCalculate] = useState(false);
  const [validate, setValidate] = useState(false);
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
    setCurrentMarket(oddSet[0]);
  }, [onLoadCompany, oddSet]);

  useEffect(() =>{
      merchantCurrency == 'KHR' ? setCurrencyLimit(7):setCurrencyLimit(4)
      console.log('currency: ',auth)
  },[auth])

  const [price, setPrice] = useState();









    //////////////////////////////////////////////////////////



    var firstDigit = 1;
    var secondDigit = 1;
    var thirdDigit = 1;
    var fourthDigit = 1;

    const witchTypesOf = (_getNumber) => {
        var num = _getNumber;
        var numArray = numberToArray(num);
        var first = firstDigitFunction(numArray, firstDigit = 1);
        var second = secondDigitFunction(numArray, secondDigit = 1);
        var third = thirdDigitFunction(numArray, thirdDigit = 1);
        var fourth = fourthDigitFunction(numArray, fourthDigit = 1);
        if (typeof num === 'string') {
          if (num.length == 4) {
              if (first == 1 && second == 1 && third == 1 && fourth == 1) {
                  return 24;
              }
              if (first == 2 || second == 2 || third == 2 || fourth == 2) {
                  if (first == 2 && second == 2 && third == 2 && fourth == 2) {
                      return 6;
                  } else {
                      return 12;
                  }
              }
              if (first == 3 || second == 3 || third == 3 || fourth == 3) {
                  return 4;
              }
          }
          if (num.length == 3) {
              if (first == 1 && second == 1 && third == 1) {
                  return 24;
              }
              if (first == 2 || second == 2 || third == 2) {
                  if (first == 2 && second == 2 && third == 2) {
                      return 6;
                  } else {
                      return 12;
                  }
              }
              if (first == 3 || second == 3 || third == 3) {
                  return 0;
              }
          }
        }
        return 0;
    }

        
    const firstDigitFunction = (numArray, firstDigit) => {
        if (numArray) {
            if (numArray[0] == numArray[1]) {
                firstDigit++;
            }
            if (numArray[0] == numArray[2]) {
                firstDigit++;
            }
            if (numArray[0] == numArray[3]) {
                firstDigit++;
            }
            return firstDigit;
        }
    }
    const secondDigitFunction = (numArray, secondDigit) => {
        if (numArray) {
            if (numArray[1] == numArray[0]) {
                secondDigit++;
            }
            if (numArray[1] == numArray[2]) {
                secondDigit++;
            }
            if (numArray[1] == numArray[3]) {
                secondDigit++;
            }
            return secondDigit;
        }
    }
    const thirdDigitFunction = (numArray, thirdDigit) => {
        if (numArray) {
            if (numArray[2] == numArray[1]) {
                thirdDigit++;
            }
            if (numArray[2] == numArray[0]) {
                thirdDigit++;
            }
            if (numArray[2] == numArray[3]) {
                thirdDigit++;
            }
            return thirdDigit;
        }
    }
    const fourthDigitFunction = (numArray, fourthDigit) => {
        if (numArray) {
            if (numArray[3] == numArray[1]) {
                fourthDigit++;
            }
            if (numArray[3] == numArray[2]) {
                fourthDigit++;
            }
            if (numArray[3] == numArray[0]) {
                fourthDigit++;
            }
            return fourthDigit;
        }
    }

    
    const numberToArray = (num) => {
        if (typeof num === 'string') {
            var digits = num.toString().split('');
            return digits.map(Number)
        }
    }


    /////////////////////////////////////////////////////////////













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
    if (gameType == "i" && number.length == 3) {
      setGameType("s");
    }
    handelChange()

      switch (number.length){
        case 3:
          if(c3 || a3){
            setValidate(true)
            console.log('Validate true')
          }
        break;

        case 4:
          if(small || big){
            setValidate(true)
            console.log('Validate true')
          }
        break;

        default:
          setValidate(false)
          console.log('Validate false')

      }


  }, [number, big, small, c3, a3, gameType, combo, selectedMarket]);

  const handelChange = () => {
    setValidate(false)
    setGameCalculate(false)

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

    if(gameType == 'r' && palindrome == true){
      setGameType('s')
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
      if (!bigInput.match("^[0-9-.]*$") || !smallInput.match("^[0-9-.]*$")) {
        return false;
      }

      if (key == 3) {
        if (
          _3aInput.includes("-") ||
          _3aInput.includes(".") ||
          _3cInput.includes("-") ||
          _3cInput.includes(".")
        ) {
          return false;
        }
      } else if (key == 4) {
        if (
          bigInput.includes("-") ||
          bigInput.includes(".") ||
          smallInput.includes("-") ||
          smallInput.includes(".")
        ) {
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

    // if (){
    //   if()
    // }
    
  };

  const handelReset = () => {
    // $("#amountValDefaltB").val('');
    // $("#amountValDefaltS").val('');
    $("#bigValue").val("");
    $("#3aValue3").val("");
    $("#smallValue").val("");
    $("#3cValue3").val("");
    setA3("");
    setBig("");
    setC3("");
    setCombo("");
    setGameType("s");
    setNumber("");
    setResult("");
    setSmall("");
    setCost("");
    setSelectedMarket(onLoadCompany);
    setValidate(false)
    setGameCalculate(false)
  };
  function palindrome(str) {
    var len = str.length;
    var mid = Math.floor(len / 2);
    for (var i = 0; i < mid; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  function checkRnumber(numm){
    if(numm.includes("R")){
      if(gameType == "b" || gameType == "i" || gameType == "r"){
        setGameType('s');
      }
      return numm.includes("R");
    }else if(numm.includes("r")){
      if(gameType == "b" || gameType == "i" || gameType == "r"){
        setGameType("s");
      }
      return numm.includes("r");
    }else{
      return false;
    }
  }

  // console.log('witchTypesOf(number)',witchTypesOf(number));
  return (
    <section className="bg-light custom-padding h-100">
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
                      <div className="col-md-10 offset-md-1 ml-2">
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-4">
                              <b>{t("Company")}</b>
                            </div>
                            <div className="col-md-8">
                                <div className="select-gp" id="checkboxes" style={{paddingLeft: '15px',whiteSpace: 'nowrap'}}>
                                  <ul id="checkboxes" className="list-inline">
                                    {oddSet.map((item, index) => {
                                      console.log("itemitemitem", item);
                                      return (
                                        <>
                                          <li
                                            key={index}
                                            className=" list-inline-item"
                                          >
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
                                                  src={
                                                    item &&
                                                    item.game_play &&
                                                    item.game_play.logo_url
                                                      ? item.game_play.logo_url
                                                      : "http://api.kk-lotto.com:8080/storage/logos/uSBcaSYf5xV0MW6zt53yhklZhrJcbiv8tmLs8GiS.png"
                                                  }
                                                />
                                              </span>
                                            </span>
                                          </li>
                                        </>
                                      );
                                    })}
                                  </ul>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-5">
                              <b>{t("Number")}</b>
                            </div>
                            <div className="col-md-7">
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
                              <b>{t("Bet_Type")}</b>
                            </div>
                            <div>
                              <div>
                                <div className="d-flex justify-content-between gap-2">
                                  <div className="">
                                    <label
                                      for="forBoxValue"
                                      className={
                                        gameType == "s"
                                          ? "btn me-1 btn-bordered-theme-active"
                                          : "btn me-1 btn-bordered-theme disable"
                                      }
                                      title={t('Straight')}
                                      onClick={() => {
                                        setGameType("s");
                                      }}
                                      style={{
                                        cursor: "pointer",
                                        fontSize: "14px",
                                      }}
                                    >
                                      S
                                    </label>
                                  </div>
                                  <div>
                                  {checkRnumber(number) ?
                                    <label
                                      for="forBoxValue"
                                      className="btn me-1 disable"
                                      title={t('Box')}
                                      style={{
                                        cursor: "",
                                        fontSize: "14px",
                                        // border: "red 1px solid",
                                        border: '1px solid #adb5bd',
                                        width: '35px',
                                        height: '35px',
                                        textAlign: 'center',
                                        color: '#adb5bd',
                                        fontWeight: 'bold',
                                        lineHeight: '22px',
                                        textAlign: 'center'
                                      }}
                                    >
                                    B
                                    </label>
                                    :
                                    witchTypesOf(number)==0 ?
                                        <label
                                        for="forBoxValue"
                                        className="btn me-1 disable"
                                        title={t('Box')}
                                        style={{
                                          cursor: "",
                                          fontSize: "14px",
                                          // border: "red 1px solid",
                                          border: '1px solid #adb5bd',
                                          width: '35px',
                                          height: '35px',
                                          textAlign: 'center',
                                          color: '#adb5bd',
                                          fontWeight: 'bold',
                                          lineHeight: '22px',
                                          textAlign: 'center'
                                        }}
                                      >
                                        B
                                      </label>
                                      : 
                                      <label
                                        for="forBoxValue"
                                        className={
                                          gameType == "b"
                                            ? " btn me-1 btn-bordered-theme-active"
                                            : "btn me-1 btn-bordered-theme disable"
                                        }
                                        title={t('Box')}
                                        style={{
                                          cursor: "pointer",
                                          fontSize: "14px",
                                        }}
                                        onClick={() => {
                                          setGameType("b");
                                        }}
                                      >
                                        B
                                      </label>
                                    }
                                  </div>
                                  {witchTypesOf(number)!=0 && !checkRnumber(number) && number.length > 3 ? (
                                    <div className="">
                                      <label
                                        for="forIboxValue"
                                        className={
                                          gameType == "i"
                                            ? "btn me-1 btn-bordered-theme-active"
                                            : "btn me-1 btn-bordered-theme disable"
                                        }
                                        title={t('iBox')}
                                        style={{
                                          cursor: "pointer",
                                          fontSize: "14px",
                                        }}
                                        onClick={() => {
                                          setGameType("i");
                                        }}
                                      >
                                        I
                                      </label>
                                    </div>
                                  ) : (
                                    <div className="">
                                      <label
                                        for="forIboxValue"
                                        className="btn me-1 disable"
                                        title={t('iBox')}
                                        style={{
                                          cursor: "",
                                          fontSize: "14px",
                                          // border: "red 1px solid",
                                          border: '1px solid #adb5bd',
                                          width: '35px',
                                          height: '35px',
                                          textAlign: 'center',
                                          color: '#adb5bd',
                                          fontWeight: 'bold',
                                          lineHeight: '22px',
                                          textAlign: 'center'
                                        }}
                                      >
                                        I
                                      </label>
                                    </div>
                                  )}
                                  <div className="">
                                    {checkRnumber(number) || palindrome(number) ? (
                                      <label
                                        for="forReverseValue"
                                        className="btn me-1 disable"
                                        title={t('Reverse')}
                                        style={{
                                          cursor: "",
                                          fontSize: "14px",
                                          // border: "red 1px solid",
                                          border: '1px solid #adb5bd',
                                          width: '35px',
                                          height: '35px',
                                          textAlign: 'center',
                                          color: '#adb5bd',
                                          fontWeight: 'bold',
                                          lineHeight: '22px',
                                          textAlign: 'center'
                                        }}
                                      >
                                        R
                                      </label>
                                    ) : (
                                      <label
                                        for="forReverseValue"
                                        className={
                                          gameType == "r"
                                            ? "btn me-1 btn-bordered-theme-active"
                                            : "btn me-1 btn-bordered-theme disable"
                                        }
                                        title={t('Reverse')}
                                        style={{
                                          cursor: "pointer",
                                          fontSize: "14px",
                                        }}
                                        onClick={() => {
                                          setGameType("r");
                                        }}
                                      >
                                        R
                                      </label>
                                    )}
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
                                    whiteSpace:'nowrap'
                                  }}
                                >
                                  <b>{ number.length == 3 ? "3A" : number.length == 4 ? t("Big") : `${t("Big")} / 3A` }</b>
                                </div>
                                <div className="">
                                  <input
                                  onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                                    className="form-control"
                                    id={
                                      number.length == 3
                                        ? "3aValue3"
                                        : number.length == 4
                                        ? "bigValue"
                                        : "amountValDefaltB"
                                    }
                                    maxLength={currencyLimit}
                                    defaultValue={
                                      number.length == 3
                                        ? a3
                                        : number.length == 4
                                        ? big
                                        : null
                                    }
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
                                    whiteSpace:'nowrap'
                                  }}
                                >
                                  <b>{ number.length == 3 ? "3C" : number.length == 4 ? t("Small_Bet") : `${t("Small_Bet")} / 3C` }</b>
                                </div>
                                <div className="">
                                  <input
                                    onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                                    className="form-control"
                                    id={
                                      number.length == 3
                                        ? "3cValue3"
                                        : number.length == 4
                                        ? "smallValue"
                                        : "amountValDefaltS"
                                    }
                                    maxLength={currencyLimit}
                                    defaultValue={
                                      number.length == 3
                                        ? c3
                                        : number.length == 4
                                        ? small
                                        : null
                                    }
                                    onChange={handelChange}
                                    autoComplete="off"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                        <div className="row">
                          <div className="col-5 mt-2">
                            <div
                              className=""
                            >
                              <div className="">
                                <div
                                  onClick={handelReset}
                                  className="clearfix text-center"
                                >
                                  <span
                                    role="button"
                                    className="btn rounded-full mt-2 btn-clr"
                                    style={{
                                      fontWeight: "600",
                                      border:"1px solid grey",
                                      color:'grey'
                                    }}
                                  >
                                    {t('clear')}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-7 mt-2">
                            <div
                              className=""
                            >
                              <div className="">
                                <div
                                  onClick={()=>{validate ? setGameCalculate(true):''}}
                                  className={`clearfix text-center`}
                                >
                                  <span
                                    role="button"
                                    className={`${validate ? "":"cal-disable"} btn rounded-full mt-2 text-light btn-cal`}

                                    style={{
                                      fontWeight: "600",
                                      background: "#c22361",
                                    }}
                                  >
                                    {t('Calculate')}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-6 text-light">
                  <div className="absolute-div1">
                    <div className="inner-abs-div">
                      <div className="company-type-heading d-flex align-items-center mb-4">
                        <div className="comapny-type-logo me-3">
                          <img
                            src={
                              currentMarket &&
                              currentMarket.game_play &&
                              currentMarket.game_play.name == "Magnum"
                                ? "assets/images/icons/magnum-square.jpg"
                                : currentMarket &&
                                  currentMarket.game_play &&
                                  currentMarket.game_play.name == "Da Ma Cai"
                                ? "assets/images/icons/damacai-square.jpg"
                                : currentMarket &&
                                  currentMarket.game_play &&
                                  currentMarket.game_play.name == "Toto"
                                ? "assets/images/icons/toto-square.jpg"
                                : null
                            }
                          />
                        </div>
                        <div className="company-type-name text-white">
                          {t(
                            currentMarket &&
                              currentMarket.game_play &&
                              currentMarket.game_play.name
                              ? currentMarket.game_play.name
                              : selectedMarket
                          )}
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

                      <div className="absolute-div1">
                        <div className="d-flex justify-content-between align-items-center">
                          <label className="" htmlFor="number">
                            {t("Total_No_of_Combination")}
                          </label>
                          <span>{combo}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <label className="" htmlFor="number">
                            {t("Total_Cost")}
                          </label>
                          <span>
                            {merchantCurrency} {parseInt(cost).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-12 flex-column">
                        <div className="absolute-div1 mt-4 height-380px">
                          <h4 className="text-center text-uppercase">
                            <b>{t("Winning_Amount")}</b>
                          </h4>
                          <table className="text-light table table-borderless">
                            <thead>
                              <tr className="">
                                <th style={{ width: "30%" }}></th>
                                {number.length == 3 && calculate ? (
                                  <>
                                    <th
                                      style={{ width: "40%" }}
                                      className="text-left"
                                    ></th>
                                    <th
                                      style={{ width: "30%" }}
                                      className={
                                        styles.device_detect_for_mobile
                                      }
                                    >
                                      3A/3C
                                    </th>
                                  </>
                                ) : number.length == 4 && calculate ? (
                                  <>
                                    <th
                                      style={{ width: "40%" }}
                                      className="text-left"
                                    ></th>
                                    <th
                                      style={{ width: "30%" }}
                                      className={
                                        styles.device_detect_for_mobile
                                      }
                                    >
                                      {t("Big")}/{t("Small_Bet")}
                                    </th>
                                  </>
                                ) : null}
                              </tr>
                            </thead>
                            <tbody>
                              {number.length == 3 && calculate ? (
                                <>
                                  <tr className="">
                                    <td style={{ width: "25%" }}>{t("P1")} </td>
                                    <td
                                      style={{ width: "25%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontWeight: "600",
                                        }}
                                        className={"font-20px-17px text-left row"}
                                      >
                                        <span className="col-md-3 col-12">
                                          {merchantCurrency}&nbsp;
                                        </span>
                                        <span className="col-md-9 col-12">
                                          {merchantCurrency == "KHR"
                                            ? parseFloat(
                                                result.d3a_one + result.d3c_one
                                              ).toLocaleString()
                                            : parseFloat(
                                                result.d3a_one + result.d3c_one
                                              ).toLocaleString()}
                                        </span>
                                      </span>
                                    </td>

                                    {/* <div className={styles.device_detect_for_desktop}>  */}
                                    <td
                                      style={{ width: "100%" }}
                                      className="text-left d-flex flex-column"
                                    >
                                      <div className="w-100">
                                      {a3 ? 
                                        <span className="d-flex justify-content-between w-100">
                                          <span
                                            className={
                                              styles.device_detect_for_desktop
                                            }
                                          >
                                            {" "}
                                            3A:{" "}
                                          </span>
                                          <span className="currency-span">
                                            {merchantCurrency} &nbsp;
                                            {merchantCurrency == "KHR"
                                              ? parseFloat(price.d3.a3_one).toLocaleString()
                                              : parseFloat(
                                                  price.d3.a3_one
                                                ).toLocaleString()}
                                          </span>
                                        </span>                                    
                                      : <></>}
                                        {c3 ? 
                                        <span className="d-flex justify-content-between w-100">
                                          <span
                                            className={
                                              styles.device_detect_for_desktop
                                            }
                                          >
                                            {" "}
                                            3C:{" "}
                                          </span>
                                          <span className="currency-span">
                                            {merchantCurrency} &nbsp;
                                            {merchantCurrency == "KHR"
                                              ? parseFloat(price.d3.one).toLocaleString()
                                              : parseFloat(
                                                  price.d3.one
                                                ).toLocaleString()}
                                          </span>
                                        </span>                                      
                                      : <></>}
                                      </div>
                                    </td>
                                    {/* </div> */}
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "25%" }}>{t("P2")} </td>
                                    <td
                                      style={{ width: "25%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontWeight: "600",
                                        }}
                                        className={"font-20px-17px text-left row"}
                                      >
                                        <span className="col-md-3 col-12">
                                          {merchantCurrency}&nbsp;
                                        </span>
                                        <span className="col-md-9 col-12">
                                          {merchantCurrency == "KHR"
                                            ? parseFloat(result.d3c_two).toLocaleString()
                                            : parseFloat(
                                                result.d3c_two
                                              ).toLocaleString()}
                                        </span>
                                      </span>
                                    </td>

                                    {/* <div className={styles.device_detect_for_desktop}>  */}
                                    <td
                                      style={{ width: "100%" }}
                                      className="text-left d-flex flex-column"
                                    >
                                    {c3 ? 
                                      <span className="d-flex justify-content-between w-100">
                                        <span
                                          className={
                                            styles.device_detect_for_desktop
                                          }
                                        >
                                          {" "}
                                          3C:{" "}
                                        </span>
                                        <span className="currency-span">
                                          {merchantCurrency} &nbsp;
                                          {merchantCurrency == "KHR"
                                            ? parseFloat(price.d3.two).toLocaleString()
                                            : parseFloat(price.d3.two).toLocaleString()}
                                        </span>
                                      </span>                                      
                                      : <></>}
                                    </td>
                                    {/* </div> */}
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>{t("P3")} </td>
                                    <td
                                      style={{ width: "25%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontWeight: "600",
                                        }}
                                        className={"font-20px-17px text-left row"}
                                      >
                                        <span className="col-md-3 col-12">
                                          {merchantCurrency}&nbsp;
                                        </span>
                                        <span className="col-md-9 col-12">
                                          {merchantCurrency == "KHR"
                                            ? parseFloat(result.d3c_three).toLocaleString()
                                            : parseFloat(
                                                result.d3c_three
                                              ).toLocaleString()}
                                        </span>
                                      </span>
                                    </td>

                                    {/* <div className={styles.device_detect_for_desktop}>  */}
                                    <td
                                      style={{ width: "100%" }}
                                      className="text-left d-flex flex-column"
                                    >
                                      {c3 ? 
                                      <span className="d-flex justify-content-between w-100">
                                        <span
                                          className={
                                            styles.device_detect_for_desktop
                                          }
                                        >
                                          {" "}
                                          3C:{" "}
                                        </span>
                                        <span className="currency-span">
                                          {merchantCurrency} &nbsp;
                                          {merchantCurrency == "KHR"
                                            ? parseFloat(price.d3.three).toLocaleString()
                                            : parseFloat(
                                                price.d3.three
                                              ).toLocaleString()}
                                        </span>
                                      </span>                                      
                                      : <></>}
                                    </td>
                                    {/* </div> */}
                                  </tr>
                                  {number.length == 4 ? 
                                  <>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>
                                      {t("Special_Prize")}
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
                                      {t("Consolation_Prize")}
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
                                  :
                                  '' 
                                  }
                                </>
                              ) : number.length == 4 && calculate ? (
                                <>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>{t("P1")} </td>
                                    <td
                                      style={{ width: "30%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontWeight: "600",
                                        }}
                                        className={"font-20px-17px text-left row"}
                                      >
                                        <span className="col-md-3 col-12">
                                          {merchantCurrency}&nbsp;
                                        </span>
                                        <span className="col-md-9 col-12">
                                          {merchantCurrency == "KHR"
                                            ? parseInt(parseFloat(result.d4_big_one) + parseFloat(result.d4_small_one)).toLocaleString()
                                            : parseFloat(parseFloat(result.d4_big_one) + parseFloat(result.d4_small_one)).toLocaleString()}
                                        </span>
                                      </span>
                                    </td>
                                    {/* <div className={styles.device_detect_for_desktop}>  */}
                                    <td
                                      style={{ width: "100%" }}
                                      className="text-left d-flex flex-column"
                                    >
                                      <div className="w-100">
                                      {big ? 
                                        <span className="d-flex justify-content-between w-100">
                                          <span
                                            className={
                                              styles.device_detect_for_desktop
                                            }
                                          >
                                            {" "}
                                            {t("Big")}:{" "}
                                          </span>
                                          <span className="currency-span">
                                            {merchantCurrency} &nbsp;
                                            {merchantCurrency == "KHR"
                                              ? parseInt(price.d4.one).toLocaleString()
                                              : parseFloat(
                                                  price.d4.one
                                                ).toLocaleString()}
                                          </span>
                                        </span>
                                      : <></>}
                                      {small ? 
                                        <span className="d-flex justify-content-between w-100">
                                          <span
                                            className={
                                              styles.device_detect_for_desktop
                                            }
                                          >
                                            {" "}
                                            {t("Small_Bet")}:{" "}
                                          </span>
                                          <span className="currency-span">
                                            {merchantCurrency} &nbsp;
                                            {merchantCurrency == "KHR"
                                              ? parseInt(price.d4.small_one).toLocaleString()
                                              : parseFloat(
                                                  price.d4.small_one
                                                ).toLocaleString()}
                                          </span>
                                        </span>
                                      : <></>}
                                      </div>
                                    </td>
                                    {/* </div> */}
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>{t("P2")} </td>
                                    <td
                                      style={{ width: "30%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontWeight: "600",
                                        }}
                                        className="font-20px-17px text-left row"
                                      >
                                        <span className="col-md-3 col-12">
                                          {merchantCurrency}&nbsp;
                                        </span>
                                        <span className="col-md-9 col-12">
                                          {merchantCurrency == "KHR"
                                            ? parseInt(parseFloat(result.d4_big_two) + parseFloat(result.d4_small_two)).toLocaleString()
                                            : parseFloat(parseFloat(result.d4_big_two) + parseFloat(result.d4_small_two)).toLocaleString()}
                                        </span>
                                      </span>
                                    </td>
                                    {/* <div className={styles.device_detect_for_desktop}>  */}
                                    <td
                                      style={{ width: "100%" }}
                                      className="text-left d-flex flex-column"
                                    >
                                      <div className="w-100">
                                      {big ?
                                        <span className="d-flex justify-content-between w-100">
                                          <span
                                            className={
                                              styles.device_detect_for_desktop
                                            }
                                          >
                                            {" "}
                                            {t("Big")}:{" "}
                                          </span>
                                          <span className="currency-span">
                                            {merchantCurrency} &nbsp;
                                            {merchantCurrency == "KHR"
                                              ? parseInt(price.d4.two).toLocaleString()
                                              : parseFloat(price.d4.two).toLocaleString()}
                                          </span>
                                        </span> 
                                      : <></>}
                                      {small ? 
                                        <span className="d-flex justify-content-between w-100">
                                          <span
                                            className={
                                              styles.device_detect_for_desktop
                                            }
                                          >
                                            {" "}
                                            {t("Small_Bet")}:{" "}
                                          </span>
                                          <span className="currency-span">
                                            {merchantCurrency} &nbsp;
                                            {merchantCurrency == "KHR"
                                              ? parseInt(price.d4.small_two).toLocaleString()
                                              : parseFloat(
                                                  price.d4.small_two
                                                ).toLocaleString()}
                                          </span>
                                        </span>                                    
                                      : <></>}
                                      </div>
                                    </td>
                                    {/* </div> */}
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>{t("P3")} </td>
                                    <td
                                      style={{ width: "30%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontWeight: "600",
                                        }}
                                        className="font-20px-17px text-left row"
                                      >
                                        <span className="col-md-3 col-12">
                                          {merchantCurrency}&nbsp;
                                        </span>
                                        <span className="col-md-9 col-12">
                                          {merchantCurrency == "KHR"
                                            ? parseInt(parseFloat(result.d4_big_three) + parseFloat(result.d4_small_three)).toLocaleString()
                                            : parseFloat(parseFloat(result.d4_big_three) + parseFloat(result.d4_small_three)).toLocaleString()}
                                        </span>
                                      </span>
                                    </td>
                                    {/* <div className={styles.device_detect_for_desktop}>  */}
                                    <td
                                      style={{ width: "100%" }}
                                      className="text-left d-flex flex-column"
                                    >
                                      <div className="w-100">
                                        {big ? 
                                          <span className="d-flex justify-content-between w-100">
                                            <span
                                              className={
                                                styles.device_detect_for_desktop
                                              }
                                            >
                                              {" "}
                                              {t("Big")}:{" "}
                                            </span>
                                            <span className="currency-span">
                                              {merchantCurrency} &nbsp;
                                              {merchantCurrency == "KHR"
                                                ? parseInt(price.d4.three).toLocaleString()
                                                : parseFloat(
                                                    price.d4.three
                                                  ).toLocaleString()}
                                            </span>
                                          </span> : <></>
                                        }
                                        {small ? 
                                        <span className="d-flex justify-content-between w-100">
                                          <span
                                            className={
                                              styles.device_detect_for_desktop
                                            }
                                          >
                                            {" "}
                                            {t("Small_Bet")}:{" "}
                                          </span>
                                          <span className="currency-span">
                                            {merchantCurrency} &nbsp;
                                            {merchantCurrency == "KHR"
                                              ? parseInt(price.d4.small_three).toLocaleString()
                                              : parseFloat(
                                                  price.d4.small_three
                                                ).toLocaleString()}
                                          </span>
                                        </span>                                    
                                        : <></>}
                                      </div>
                                    </td>
                                    {/* </div> */}
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>
                                      {t("Special_Prize")}
                                    </td>
                                    <td
                                      style={{ width: "30%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontWeight: "600",
                                        }}
                                        className="font-20px-17px text-left row"
                                      >
                                        <span className="col-md-3 col-12">
                                          {merchantCurrency}&nbsp;
                                        </span>
                                        <span className="col-md-9 col-12">
                                          {merchantCurrency == "KHR"
                                            ? parseInt(result.d4_big_special).toLocaleString()
                                            : parseFloat(
                                                result.d4_big_special
                                              ).toLocaleString()}
                                        </span>
                                      </span>
                                    </td>
                                    {/* <div className={styles.device_detect_for_desktop}>  */}
                                    <td
                                      style={{ width: "100%" }}
                                      className="text-left d-flex flex-column"
                                    >
                                      {big ? 
                                      <span className="d-flex justify-content-between w-100">
                                        <span
                                          className={
                                            styles.device_detect_for_desktop
                                          }
                                        >
                                          {" "}
                                          {t("Big")}:{" "}
                                        </span>
                                        <span className="currency-span">
                                          {merchantCurrency} &nbsp;
                                          {merchantCurrency == "KHR"
                                            ? parseInt(price.d4.special).toLocaleString()
                                            : parseFloat(
                                                price.d4.special
                                              ).toLocaleString()}
                                        </span>
                                      </span>
                                      
                                      : <></>}

                                    </td>
                                    {/* </div> */}
                                  </tr>
                                  <tr className="">
                                    <td style={{ width: "30%" }}>
                                      {t("Consolation_Prize")}
                                    </td>
                                    <td
                                      style={{ width: "30%" }}
                                      className="text-left"
                                    >
                                      <span
                                        style={{
                                          color: "rgb(255, 228, 0)",
                                          fontWeight: "600",
                                        }}
                                        className="font-20px-17px text-left row"
                                      >
                                        <span className="col-md-3 col-12">
                                          {merchantCurrency}&nbsp;
                                        </span>
                                        <span className="col-md-9 col-12">
                                          {merchantCurrency == "KHR"
                                            ? parseInt(
                                                result.d4_big_consolation
                                              ).toLocaleString()
                                            : parseFloat(
                                                result.d4_big_consolation
                                              ).toLocaleString()}
                                        </span>
                                      </span>
                                    </td>
                                    {/* <div className={styles.device_detect_for_desktop}>  */}
                                    <td
                                      style={{ width: "100%" }}
                                      className="text-left d-flex flex-column"
                                    >
                                      {big ? 
                                      <span className="d-flex justify-content-between w-100">
                                        <span
                                          className={
                                            styles.device_detect_for_desktop
                                          }
                                        >
                                          {" "}
                                          {t("Big")}:{" "}
                                        </span>
                                        <span className="currency-span">
                                          {merchantCurrency} &nbsp;
                                          {merchantCurrency == "KHR"
                                            ? parseInt(price.d4.consolation).toLocaleString()
                                            : parseFloat(
                                                price.d4.consolation
                                              ).toLocaleString()}
                                        </span>
                                      </span>
                                      
                                      : <></>}
                                    </td>
                                    {/* </div> */}
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
                                    <tbody className="align-middle">
                                      <tr className="">
                                        <td style={{ width: "30%" }}>
                                          {t("P1")}
                                        </td>
                                        <td
                                          className="text-left"
                                          style={{ width: "30%" }}
                                        >
                                          <span
                                            style={{
                                              color: "rgb(255, 228, 0)",
                                              fontWeight: "600",
                                            }}
                                            className="font-20px-17px text-left"
                                          >
                                            {merchantCurrency}&nbsp; {merchantCurrency == 'KHR' ? '0':'0.00'}
                                          </span>
                                        </td>
                                        {/* <div className={styles.device_detect_for_desktop}>  */}
                                        <td
                                          className="text-left d-flex flex-column"
                                          style={{ width: "30%" }}
                                        >
                                        </td>
                                        {/* </div> */}
                                      </tr>
                                      <tr className="">
                                        <td style={{ width: "30%" }}>
                                          {t("P2")}
                                        </td>
                                        <td
                                          className="text-start"
                                          style={{ width: "30%" }}
                                        >
                                          <span
                                            style={{
                                              color: "rgb(255, 228, 0)",
                                              fontWeight: "600",
                                            }}
                                            className="font-20px-17px text-left"
                                          >
                                            {merchantCurrency}&nbsp; {merchantCurrency == 'KHR' ? '0':'0.00'}
                                          </span>
                                        </td>

                                        <div
                                          className={
                                            styles.device_detect_for_desktop
                                          }
                                        >
                                          <td
                                            className="text-left d-flex flex-column"
                                            style={{ width: "30%" }}
                                          >
                                            {/* <span className="d-flex justify-content-between w-100">
                                              <span> 0.00</span>
                                            </span>
                                            <span className="d-flex justify-content-between w-100">
                                              <span> 0.00</span>
                                            </span> */}
                                          </td>
                                        </div>
                                      </tr>
                                      <tr className="">
                                        <td style={{ width: "30%" }}>
                                          {t("P3")}
                                        </td>
                                        <td
                                          className="text-left"
                                          style={{ width: "30%" }}
                                        >
                                          <span
                                            style={{
                                              color: "rgb(255, 228, 0)",
                                              fontWeight: "600",
                                            }}
                                            className="font-20px-17px text-left"
                                          >
                                            {merchantCurrency}&nbsp; {merchantCurrency == 'KHR' ? '0':'0.00'}
                                          </span>
                                        </td>

                                        <div
                                          className={
                                            styles.device_detect_for_desktop
                                          }
                                        >
                                          <td
                                            className="text-left d-flex flex-column"
                                            style={{ width: "30%" }}
                                          >
                                            {/* <span className="d-flex justify-content-between w-100">
                                              <span> 0.00</span>
                                            </span>
                                            <span className="d-flex justify-content-between w-100">
                                              <span> 0.00</span>
                                            </span> */}
                                          </td>
                                        </div>
                                      </tr>
                                      <tr className="">
                                        <td style={{ width: "30%" }}>
                                          {t("Special_Prize")}
                                        </td>
                                        <td
                                          className="text-left"
                                          style={{ width: "30%" }}
                                        >
                                          <span
                                            style={{
                                              color: "rgb(255, 228, 0)",
                                              fontWeight: "600",
                                            }}
                                            className="font-20px-17px text-left"
                                          >
                                            {merchantCurrency}&nbsp; {merchantCurrency == 'KHR' ? '0':'0.00'}
                                          </span>
                                        </td>

                                        <div
                                          className={
                                            styles.device_detect_for_desktop
                                          }
                                        >
                                          <td
                                            className="text-left d-flex flex-column"
                                            style={{ width: "30%" }}
                                          >
                                            {/* <span className="d-flex justify-content-between w-100">
                                              <span> 0.00</span>
                                            </span> */}
                                          </td>
                                        </div>
                                      </tr>
                                      <tr className="">
                                        <td style={{ width: "30%" }}>
                                          {t("Consolation_Prize")}
                                        </td>
                                        <td
                                          className="text-left"
                                          style={{ width: "30%" }}
                                        >
                                          <span
                                            style={{
                                              color: "rgb(255, 228, 0)",
                                              fontWeight: "600",
                                            }}
                                            className="font-20px-17px text-left"
                                          >
                                            {merchantCurrency}&nbsp; {merchantCurrency == 'KHR' ? '0':'0.00'}
                                          </span>
                                        </td>
                                        <div
                                          className={
                                            styles.device_detect_for_desktop
                                          }
                                        >
                                          <td
                                            className="text-left d-flex flex-column"
                                            style={{ width: "30%" }}
                                          >
                                            {/* <span className="d-flex justify-content-between w-100">
                                              <span> 0.00</span>
                                            </span> */}
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
      <style jsx>{`
      .currency-span{
        width:77.45px!important;
      }
      .cal-disable{
        filter: grayscale(1)!important,
      }
       .btn-cal:hover, .btn-clr:hover{
        color: #000;

        box-shadow: 0px 8px 9px 0px rgb(0 0 0 / 27%);
       }
       .btn-cal:active{
        color: #000;
        background:rgb(156 11 70)!important;
       }
       .btn-clr:active{
        border:1px solid rgb(194, 35, 97)!important;
        color: rgb(194, 35, 97)!important;
        }
        @media (max-width:575px){

        }
      `}</style>
    </section>
  );
};

export default Calculator;
