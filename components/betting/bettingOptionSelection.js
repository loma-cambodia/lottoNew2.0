import DateAndGameOption from './dateAndGameOption';
import BettingInputs from './bettingInputs';
import React, { useState, useEffect } from 'react';

let bettingInputsData = ['01','02','03','04','05','06','07','08','09','10'];


const BettingOptionSelection = () => {
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
          "date": '2017-01-03',
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
          "date": '2017-09-13',
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

    const [bettingInitData, setBettingInitData] = useState(dateAndGameOptionData);
    console.log("bettingInitData " ,bettingInitData)

    return(
        <section className="page-content custom-padding">
         <div className="container">
          <div className="row justify-content-center">

          {dateAndGameOptionData.map((item) => (<DateAndGameOption key={'dateAndGameOption'+item.id} item={item} _dateAndGameOptionData={dateAndGameOptionData} _bettingInitData={bettingInitData} _setBettingInitData={setBettingInitData}/>) )}
              
              

            {/* <div className="col-md-3 col-sm-6">
                <div className="date-lottery-selector unslected">
                    <div className="d-flex align-items-center">
                        <div className="round">
                            <input type="checkbox" id="checkbox1" />
                            <label for="checkbox1"></label>
                        </div>
                        <div className="day-n-date">
                            <p className="fw-bold mb-0">Tuesday</p>
                            <p className="mb-0">20 Sep. 2022</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="round"></div>
                        <div className="select-gp">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/damacai.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/magnum.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/toto.png"/>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="date-lottery-selector selected">
                    <div className="d-flex align-items-center">
                        <div className="round">
                            <input type="checkbox"  id="checkbox2" checked/>
                            <label for="checkbox2"></label>
                        </div>
                        <div className="day-n-date">
                            <p className="fw-bold mb-0">Tuesday</p>
                            <p className="mb-0">20 Sep. 2022</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="round"></div>
                        <div className="select-gp">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp selected-gp-btn" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/damacai.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp selected-gp-btn" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/magnum.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp">
                                        <span className="inner-circle-gp selected-gp-btn" title="Select">
                                            <img className="img-fluid" src="assets/images/icons/toto.png"/>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="date-lottery-selector unslected">
                    <div className="d-flex align-items-center">
                        <div className="round">
                            <input type="checkbox"  id="checkbox3"/>
                            <label for="checkbox3"></label>
                        </div>
                        <div className="day-n-date">
                            <p className="fw-bold mb-0">Tuesday</p>
                            <p className="mb-0">20 Sep. 2022</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="round"></div>
                        <div className="select-gp">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/damacai.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/magnum.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/toto.png"/>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="date-lottery-selector selected">
                    <div className="d-flex align-items-center">
                        <div className="round">
                            <input type="checkbox"  id="checkbox4" checked/>
                            <label for="checkbox4"></label>
                        </div>
                        <div className="day-n-date">
                            <p className="fw-bold mb-0">Tuesday</p>
                            <p className="mb-0">20 Sep. 2022</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="round"></div>
                        <div className="select-gp">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp selected-gp-btn" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/damacai.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp selected-gp-btn" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/magnum.png"/>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="outer-circle-gp selected-gp-btn" title="Select">
                                        <span className="inner-circle-gp">
                                            <img className="img-fluid" src="assets/images/icons/toto.png"/>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div> */}
         </div>
        <div className="table-scalable my-3">
            <table className="">
                <tbody>
                <tr>
                    <th className="border-0"></th>
                    <th className="border-0">Number</th>
                    <th className="border-0">Big</th>
                    <th className="border-0">Small</th>
                    <th className="border-0">3 A</th>
                    <th className="border-0">3 C</th>
                    <th className="border-0">Bet type</th>
                    <th className="border-0">Amount</th>
                    <th className="border-0"></th>
                </tr>
                
                {bettingInputsData.map((item) => (<BettingInputs key={'bettingInputs'+item} item={item}/>) )}
                <tr>
                    <td colSpan="6">
                        Total Bet Amount 216.00
                    </td>
                    <td><button type="button" className="btn-custom-curve1 me-1">CLEAR</button></td>
                    <td colSpan="2">
                            <button type="button" className="btn-custom-curve2">Submit</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
    )
} 
export default BettingOptionSelection;