
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { subDays,addDays } from "date-fns";
import { useTranslation } from "react-i18next";

import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {getResults} from '../../store/actions/resultActions';
import { t } from 'i18next';

const resultNew = ({_setDate}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [highlightedData,setHighlightedData] = useState();
  
    const dispatch = useDispatch();
        const getLatestDrawDate = () =>{

          let dataSubmit = undefined
          dispatch(getResults(dataSubmit,response =>{
            if(response.statusCode  == 201  || response.statusCode  == 200 ){

                if(response.statusCode == 200){

                    let results = response.data.data
                    // setStartDate(results[0].result_date)
                    console.log(results)
                    let resultDate = []
                    // let resultHighlited = []
                    results.map(data=>{
                      data.result_date
                      if(!resultDate.includes(data.fetching_date)){
                        resultDate.push(data.fetching_date)
                        // resultHighlited.push(
                        //   {
                        //       "react-datepicker__day--highlighted":getDates(moment(data.fetching_date).format('d')),      
                        //   })
                    }
                    
                    }) 
                    let highlight = resultDate.map(date => subDays(new Date(date), 0));
                    console.log("DDDDDDD",resultDate)
                    console.log("resultHighlited:",highlight,resultDate)

                    setHighlightedData(highlight)
                    setStartDate (results.fetching_date ? results.fetching_date :''.dateFormat('DD/MM/YYYY'))
                    // setStartDate (new Date(results[0].result_date ? results[0].result_date :'').dateFormat('DD/MM/YYYY'))
                }else {

                }
                }else {

            // setIsLoading(false);
        }
    }))
    }
    
    // const getStartDate = () =>{
    //   if (startDate === undefined)
    //   {
    //     return 
    //   }
    //   else 
    //   {
    //    return startDate
    //   }
    // }
    // const sundaysInMonth = ( m, y ) =>{
    //     var days = new Date( y,m,0 ).getDate();
    //     var sundays = [ 8 - (new Date( m +'/01/'+ y ).getDay()) ];
    //     for ( var i = sundays[0] + 7; i < days; i += 7 ) {
    //       sundays.push( i );
    //     }
    //     return sundays;
    //   }

      const getDates = (dateName) =>{
        var start = moment('2022-01-01'), // Sept. 1st
        end   = moment(new Date()) // Nov. 2nd
          // Sun = 0
          // Mon = 1
          // Tue = 2
          // Wed = 3
          // Thu = 4
          // Fri = 5
          // Sat = 6

        var result = [];
        var current = start.clone();

        while (current.day(7 + dateName).isBefore(end)) {
          result.push(new Date(current.clone()));
        }

        return result
      }

     
    // const highlightWithRanges = [
    //     {
    //       "react-datepicker__day--highlighted": getDates(0),      
    //     },
    //     {
    //       "react-datepicker__day--highlighted": getDates(6),
    //     },
    //     {
    //       "react-datepicker__day--highlighted": getDates(3),
    //     }
    //   ];

      
      


      const datepickerRef = useRef(null);
      function handleClickDatepickerIcon() {
        const datepickerElement = datepickerRef.current;
        // console.log("datepickerElement = ", datepickerElement);
        datepickerElement.setFocus(true);
      }
      useEffect(() => {
        getLatestDrawDate()
      },[]);
      console.log(startDate)

    //   FOR RESULT
    
  let drawResult =[]

  const { t } = useTranslation();
 
  const getDateName =(dateString) => {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var d = new Date(dateString);
    var dayName = days[d.getDay()];
    return dayName
}

const [initResult, setResult] = useState([]);



    const getDrawResults = () =>{
      const selectedDate = moment(startDate).format('YYYY-MM-DD');
      console.log("selectedDate:",selectedDate)
      // startDate = undefined
    dispatch(getResults(selectedDate, response =>{

        if(response.statusCode  == 201  || response.statusCode  == 200 ){

        if(response.statusCode == 200){

          let filteredResult = []
             let results = response.data.data.data


            // CAL FILTER HIGHLIGHT

            let resultDate = response.data.data.result_dates
            
                    let highlight = resultDate.map(date => subDays(new Date(date), 0));
                    console.log("DDDDDDD",highlight)
                    console.log("resultHighlited:",highlight,results)

                    setHighlightedData(highlight)


             console.log(results)
             results.map((data => {
              if(data.fetching_date == selectedDate){
                filteredResult.push(data)
              }
             })) 
             if(selectedDate == undefined){
              drawResult = results
             }else{
              drawResult = filteredResult
             }
             
             setResult(drawResult)
        }else {

        }
        }else {
        // setIsLoading(false);
    }
}))

}


useEffect(() => {
  getDrawResults()
},[startDate]);
    return (
        <>
        <div className="clearfix curved-card bg-light">
        <div className="d-flex align-items-center">
            <div className="filter-text">
            <span className="filter-icon"><i className="fa-solid fa-arrow-down-9-1"></i></span> <span className="text-filter">{t('filter_results')}</span>
            </div>
            <div className="filter-date ms-auto">
            <div className="input-group date" style={{flexWrap: 'nowrap'}} id="datepicker">
                {/* <input type="text" className="form-control" id="date"/> */}
                <DatePicker 
                dateFormat="dd/MM/yyyy"
                selected={startDate} 
                onChange={(date) => {setStartDate(date), _setDate(date)}} 
                excludeDates={[addDays(new Date(), 1)]} 
                highlightDates={highlightedData}
                maxDate={new Date()}
                ref={datepickerRef}
                value={startDate}
                onSelect={(date) => {setStartDate(date), _setDate(date)}}
                />

                <span className="input-group-append" onClick={() => handleClickDatepickerIcon()}>
                <span className="input-group-text bg-light d-block">
                    <i className="fa-regular fa-calendar"></i>
                </span>
                </span>
            </div>
            </div>
        </div>
        </div>
        <div className="accordion my-3 custom-accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button" type="button">
             {
              startDate === undefined ?
              <div>
              <span>{t('Last_draw_date')}</span> <span className="print-btn"><i className="fa-solid fa-print"></i></span>
              </div> 
              :
              !initResult .length == 0 ?
            <div>
            <span>{t('Past_Draw_Result')}:  {initResult[0].result_date} </span> <span className="print-btn"><i className="fa-solid fa-print"></i></span>
            </div>    
            :
            <div>
            <span>{t('no_draw_result')}</span> <span className="print-btn"><i className="fa-solid fa-print"></i></span>
            </div> 
              }
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={{minHeight: '40vh'}}>
            <div className="accordion-body">
              <div className="row">
              {!initResult.length == 0 ?
              initResult.map((item,id) =>(
                  <div key={id} className="col-md-4">
                  <div className={`${item.game_play.abbreviation} card`}>
                      <div className="card-body">
                          <div className="card-top">
                              <div className="logo-gp-prize">
                                  <div className="logo-gp-prize-outer">
                                      <div className="logo-gp-prize-inner">
                                          <img src={item.game_play.logo_url} alt="" className="img-icon-prize"/>
                                      </div>
                                  </div>
                              </div>
                              <div className="name-lottery">
                                  <p className="fw-bold">{item.game_play.name}</p>
                                  <p className="date-cal"><span className="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span> {item.result_date}</p>
                              </div>
                              <div className="gp-prize-play-btn ms-auto">
                                <div className="gp-prize-play-btn ms-auto">
                                  <p className="fw-bold small mb-0 text-end">{t('Draw_Id')}</p>
                                  <p className="mb-0 fs-5 fw-bold text-end">{item.id}</p>
                                </div>
                            </div>
                          </div>
                          <div className="row first-three">
                              <div className="col-12">
                                  <div className="verticle-prizelist">
                                    <ul className="list-group">
                                      <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="prize-name">{t('1st_Prize')}</span>
                                        <span className={`${item.game_play.abbreviation} badge rounded-pill fs-6`}>{item.prize1}</span>
                                      </li>
                                      <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="prize-name">{t('2nd_Prize')}</span>
                                        <span className={`${item.game_play.abbreviation} badge rounded-pill fs-6`}>{item.prize2}</span>
                                      </li>
                                      <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="prize-name">{t('3rd_Prize')}</span>
                                        <span className={`${item.game_play.abbreviation} badge rounded-pill fs-6`}>{item.prize3}</span>
                                      </li>
                                    </ul>
                                  </div>
                              </div>                                
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div className="s-and-c">
                                <table className="table-custom">
                                <tbody>
                                    <tr>
                                        <td colSpan="2" className="border-bottom border-light">{t('Special_Prize')}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">{item.special1}</td>
                                        <td className="border-bottom border-light">{item.special2}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">{item.special3}</td>
                                        <td className="border-bottom border-light">{item.special4}</td>
                                    </tr>
                                    <tr>
                                      <td className="border-bottom border-light">{item.special5}</td>
                                      <td className="border-bottom border-light">{item.special6}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">{item.special7}</td>
                                        <td className="border-bottom border-light">{item.special8}</td>
                                    </tr>
                                    <tr>
                                    <td className="border-bottom border-light">{item.special9}</td>
                                    <td className="border-bottom border-light">{item.special10}</td>
                                  </tr>
                                  </tbody>
                                </table>
                            </div>
                            </div>
                            <div className="col-6">
                              <div className="s-and-c">
                                <table className="table-custom">
                                  <tbody>
                                    <tr>
                                        <td colSpan="5" className="border-bottom border-light">{t('Consolation_Prize')}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">{item.consolation1}</td>
                                        <td className="border-bottom border-light">{item.consolation2}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">{item.consolation3}</td>
                                        <td className="border-bottom border-light">{item.consolation4}</td>
                                    </tr>
                                    <tr>
                                      <td className="border-bottom border-light">{item.consolation5}</td>
                                      <td className="border-bottom border-light">{item.consolation6}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">{item.consolation7}</td>
                                        <td className="border-bottom border-light">{item.consolation8}</td>
                                    </tr>
                                    <tr>
                                      <td className="border-bottom border-light">{item.consolation9}</td>
                                      <td className="border-bottom border-light">{item.consolation10}</td>
                                    </tr>
                                    </tbody>  
                                </table>
                            </div>
                            </div>
                          </div>
                          
                          
                      </div>
                  </div>
                </div>
                ))
                :
                <div className='alert alert-warning'>
                 <h3 className='text-center'>   
                         {t('no_data_found')}
                 </h3>
                </div>
                }
                 {/* <div className="col-md-4">
                  <div className="card damamcai">
                      <div className="card-body">
                          <div className="card-top">
                              <div className="logo-gp-prize">
                                  <div className="logo-gp-prize-outer">
                                      <div className="logo-gp-prize-inner">
                                          <img src="assets/images/icons/damacai.png" alt="" className="img-icon-prize"/>
                                      </div>
                                  </div>
                              </div>
                              <div className="name-lottery">
                                  <p className="fw-bold">DA MA CAI</p>
                                  <p className="date-cal"><span className="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span> 22-09-2022</p>
                              </div>
                              <div className="gp-prize-play-btn ms-auto">
                                <div className="gp-prize-play-btn ms-auto">
                                  <p className="fw-bold small mb-0 text-end">{t('Draw_Id')}</p>
                                  <p className="mb-0 fs-5 fw-bold">4567891</p>
                                </div>
                            </div>
                          </div>
                          <div className="row first-three">
                              <div className="col-12">
                                  <div className="verticle-prizelist">
                                    <ul className="list-group">
                                      <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="prize-name">{t('1st_Prize')}</span>
                                        <span className="badge bg-danger rounded-pill fs-6">6459</span>
                                      </li>
                                      <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="prize-name">{t('2nd_Prize')}</span>
                                        <span className="badge bg-danger rounded-pill fs-6">6459</span>
                                      </li>
                                      <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className="prize-name">{t('3rd_Prize')}</span>
                                        <span className="badge bg-danger rounded-pill fs-6">6459</span>
                                      </li>
                                    </ul>
                                  </div>
                              </div>                                
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div className="s-and-c">
                                <table className="table-custom">
                                <tbody>
                                    <tr>
                                        <td colSpan="2" className="border-bottom border-light">{t('Special_Prize')}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                      <td className="border-bottom border-light">87537</td>
                                      <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                  </tr>
                                  <tr>
                                      <td className="border-bottom border-light">87537</td>
                                      <td className="border-bottom border-light">87537</td>
                                  </tr>
                                  <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                  </tr>
                                  <tr>
                                      <td className="border-bottom border-light">87537</td>
                                      <td className="border-bottom border-light">87537</td>
                                  </tr>
                                  </tbody>
                                </table>
                            </div>
                            </div>
                            <div className="col-6">
                              <div className="s-and-c">
                                <table className="table-custom">
                                  <tbody>
                                    <tr>
                                        <td colSpan="5" className="border-bottom border-light">{t('Consolation_Prize')}</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                      <td className="border-bottom border-light">87537</td>
                                      <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                      <td className="border-bottom border-light">87537</td>
                                      <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                      <td className="border-bottom border-light">87537</td>
                                      <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom border-light">87537</td>
                                        <td className="border-bottom border-light">87537</td>
                                    </tr>
                                    </tbody>  
                                </table>
                            </div>
                            </div>
                          </div>
                          
                          
                      </div>
                  </div>
                </div> 
              <div className="col-md-4">
                  <div className="card magnum">
                    <div className="card-body">
                      <div className="card-top">
                          <div className="logo-gp-prize">
                              <div className="logo-gp-prize-outer">
                                  <div className="logo-gp-prize-inner">
                                      <img src="assets/images/icons/magnum.png" alt="" className="img-icon-prize"/>
                                  </div>
                              </div>
                          </div>
                          <div className="name-lottery">
                              <p className="fw-bold">MAGNUM</p>
                              <p className="date-cal"><span className="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span> 22-09-2022</p>
                          </div>
                          <div className="gp-prize-play-btn ms-auto">
                            <div className="gp-prize-play-btn ms-auto">
                              <p className="fw-bold small mb-0 text-end">{t('Draw_Id')}</p>
                              <p className="mb-0 fs-5 fw-bold">4567891</p>
                            </div>
                        </div>
                      </div>
                      <div className="row first-three">
                          <div className="col-12">
                              <div className="verticle-prizelist">
                                <ul className="list-group">
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="prize-name">{t('1st_Prize')}</span>
                                    <span className="badge bg-warning rounded-pill fs-6 text-dark">6459</span>
                                  </li>
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="prize-name">{t('2nd_Prize')}</span>
                                    <span className="badge bg-warning rounded-pill fs-6 text-dark">6459</span>
                                  </li>
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="prize-name">{t('3rd_Prize')}</span>
                                    <span className="badge bg-warning rounded-pill fs-6 text-dark">6459</span>
                                  </li>
                                </ul>
                              </div>
                          </div>                                
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colSpan="2" className="border-bottom border-light">{t('Special_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                <td className="border-bottom border-light">87537</td>
                                <td className="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                <td className="border-bottom border-light">87537</td>
                                <td className="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                              </tr>
                              </tbody>
                            </table>
                        </div>
                        </div>
                        <div className="col-6">
                          <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colSpan="5" className="border-bottom border-light">{t('Consolation_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                      </div>
                      
                      
                  </div>
                  </div>
              </div>
               <div className="col-md-4">
                  <div className="card toto">
                    <div className="card-body">
                      <div className="card-top">
                          <div className="logo-gp-prize">
                              <div className="logo-gp-prize-outer">
                                  <div className="logo-gp-prize-inner">
                                      <img src="assets/images/icons/toto.png" alt="" className="img-icon-prize"/>
                                  </div>
                              </div>
                          </div>
                          <div className="name-lottery">
                              <p className="fw-bold">SPORTS TOTO</p>
                              <p className="date-cal"><span className="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span> 22-09-2022</p>
                          </div>
                          <div className="gp-prize-play-btn ms-auto">
                            <p className="fw-bold small mb-0 text-end">{t('Draw_Id')}</p>
                            <p className="mb-0 fs-5 fw-bold">4567891</p>
                          </div>
                      </div>
                      <div className="row first-three">
                          <div className="col-12">
                              <div className="verticle-prizelist">
                                <ul className="list-group">
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="prize-name">{t('1st_Prize')}</span>
                                    <span className="badge bg-toto rounded-pill fs-6">6459</span>
                                  </li>
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="prize-name">{t('2nd_Prize')}</span>
                                    <span className="badge bg-toto rounded-pill fs-6">6459</span>
                                  </li>
                                  <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="prize-name">{t('3rd_Prize')}</span>
                                    <span className="badge bg-toto rounded-pill fs-6">6459</span>
                                  </li>
                                </ul>
                              </div>
                          </div>                                
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="s-and-c">
                            <table className="table-custom">
                              <tbody>
                                <tr>
                                    <td colSpan="2" className="border-bottom border-light">{t('Special_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                <td className="border-bottom border-light">87537</td>
                                <td className="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                <td className="border-bottom border-light">87537</td>
                                <td className="border-bottom border-light">87537</td>
                              </tr>
                              <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                              </tr>
                              </tbody>
                            </table>
                        </div>
                        </div>
                        <div className="col-6">
                          <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colSpan="5" className="border-bottom border-light">{t('Consolation_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                  <td className="border-bottom border-light">87537</td>
                                  <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                      </div>
                      
                      
                  </div>
                  </div>
              </div>  */}
            </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default resultNew;