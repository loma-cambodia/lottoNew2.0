
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { subDays,addDays } from "date-fns";


import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {getResults} from '../../store/actions/resultActions';

const Filter = ({_setDate}) => {
    const [startDate, setStartDate] = useState(new Date('2022-10-05'));

    console.log('startDate in filter: ', startDate)
    const pickDate = () =>{
        
    }

    const dispatch = useDispatch();

    const [initResult, setResult] = useState([]);

    console.log('inititresult in result: ',initResult)

    //     const getDrawResults = () =>{
    //     const dataSubmit ={"date":moment(_initDate).format('YYYY/MM/DD')}
    //     console.log('dataSubmit date:   ',moment(_initDate).format('YYYY/MM/DD'));

    //     dispatch(getResults(dataSubmit, response =>{
    //         if(response.statusCode  == 201  || response.statusCode  == 200 ){

    //         if(response.statusCode == 200){

    //             console.log('results response:',response.data);
    //             let results = response.data.data
    //             return results
    //         }else {
    //             console.log(response.data.messages);

    //         }
    //         }else {
    //         console.log('response:',response);
    //         // setIsLoading(false);
    //     }
    // }))
    // }
    
    const sundaysInMonth = ( m, y ) =>{
        var days = new Date( y,m,0 ).getDate();
        var sundays = [ 8 - (new Date( m +'/01/'+ y ).getDay()) ];
        for ( var i = sundays[0] + 7; i < days; i += 7 ) {
          sundays.push( i );
        }
        return sundays;
      }

      
    const highlightWithRanges = [
        {
          "react-datepicker__day--highlighted": [
            new Date('2022-10-09'),
            subDays(new Date('2022-10-09'),7),
            subDays(new Date('2022-10-09'),14),
            subDays(new Date('2022-10-09'),21),
            subDays(new Date('2022-10-09'),28),
            subDays(new Date('2022-10-09'),35),
            subDays(new Date('2022-10-09'),42),
            new Date('2022-10-12'),
            subDays(new Date('2022-10-12'),7),
            subDays(new Date('2022-10-12'),14),
            subDays(new Date('2022-10-12'),21),
            subDays(new Date('2022-10-12'),28),
            subDays(new Date('2022-10-12'),35),
            subDays(new Date('2022-10-12'),42),
            new Date('2022-10-15'),
            subDays(new Date('2022-10-15'),7),
            subDays(new Date('2022-10-15'),14),
            subDays(new Date('2022-10-15'),21),
            subDays(new Date('2022-10-15'),28),
            subDays(new Date('2022-10-15'),35),
            subDays(new Date('2022-10-15'),42),
          ],
          
        }
      ];

      console.log(highlightWithRanges)


      
      useEffect(() => {
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
                selected={startDate} 
                onChange={(date) => {setStartDate(date), _setDate(date)}} 
                excludeDates={[new Date(), subDays(new Date(), 1)]} 
                placeholderText="Select a date other than today or yesterday"
                highlightDates={highlightWithRanges}
                maxDate={new Date()}
                />

                <span className="input-group-append">
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