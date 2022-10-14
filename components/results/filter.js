
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { subDays,addDays } from "date-fns";


import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {getResults} from '../../store/actions/resultActions';

const Filter = ({_setDate}) => {
    const [startDate, setStartDate] = useState();

  
    const dispatch = useDispatch();

        const getLatestDrawDate = () =>{

          let dataSubmit = undefined
         dispatch(getResults(dataSubmit,response =>{
            if(response.statusCode  == 201  || response.statusCode  == 200 ){

            if(response.statusCode == 200){

                let results = response.data.data
                // setStartDate(results[0].result_date)

                setStartDate (new Date(results[0].result_date ? results[0].result_date :''))
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
    const sundaysInMonth = ( m, y ) =>{
        var days = new Date( y,m,0 ).getDate();
        var sundays = [ 8 - (new Date( m +'/01/'+ y ).getDay()) ];
        for ( var i = sundays[0] + 7; i < days; i += 7 ) {
          sundays.push( i );
        }
        return sundays;
      }

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

     
    const highlightWithRanges = [
        {
          "react-datepicker__day--highlighted": getDates(0),      
        },
        {
          "react-datepicker__day--highlighted": getDates(6),
        },
        {
          "react-datepicker__day--highlighted": getDates(3),
        }
      ];


      const datepickerRef = useRef(null);
      function handleClickDatepickerIcon() {
        const datepickerElement = datepickerRef.current;
        // console.log("datepickerElement = ", datepickerElement);
        datepickerElement.setFocus(true);
      }
      useEffect(() => {
        getLatestDrawDate()
      },[]);
    return (
        <>
        <div className="clearfix curved-card bg-light">
        <div className="d-flex align-items-center">
            <div className="filter-text">
            <span className="filter-icon"><i className="fa-solid fa-arrow-down-9-1"></i></span> <span className="text-filter">Filter Results</span>
            </div>
            <div className="filter-date ms-auto">
            <div className="input-group date" style={{flexWrap: 'nowrap'}} id="datepicker">
                {/* <input type="text" className="form-control" id="date"/> */}
                <DatePicker 
                dateFormat="dd/MM/yyyy"
                selected={startDate} 
                onChange={(date) => {setStartDate(date), _setDate(date)}} 
                excludeDates={[addDays(new Date(), 1)]} 
                highlightDates={highlightWithRanges}
                maxDate={new Date()}
                ref={datepickerRef}
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
        </>
    )
}
export default Filter;