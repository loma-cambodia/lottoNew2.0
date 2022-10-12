import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { subDays,addDays } from "date-fns";


import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import {getResults} from '../../store/actions/resultActions';

const Filter = ({_setDate}) => {
    const [startDate, setStartDate] = useState();

    console.log('startDate in filter: ', startDate)
  
    const dispatch = useDispatch();

    //     const getLatestDrawDate = () =>{

    //       let dataSubmit = undefined
    //      dispatch(getResults(dataSubmit,response =>{
    //         if(response.statusCode  == 201  || response.statusCode  == 200 ){

    //         if(response.statusCode == 200){

    //             // console.log('results response in filter:',response.data);
    //             let results = response.data.data
    //             // setStartDate(results[0].result_date)
    //             console.log('results response in filter:',results[0].result_date);

    //             setStartDate (new Date(results[0].result_date))
    //         }else {
    //             console.log(response.data.messages); 
    //         }
    //         }else {
    //         console.log('response:',response);
    //         // setIsLoading(false);
    //     }
    // }))
    // }
    // const getStartDate = () =>{
    //   if (startDate === undefined)
    //   {
    //     return 
    //   }
    //   else 
    //   {
    //     console.log('startDate in getstartdate',startDate)
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

        // console.log(result.map(m =>new Date(m.format('YYYY-MM-DD'))));
        // console.log('getDates ',result);
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

      console.log('highlightWithRanges ',highlightWithRanges)


      
      useEffect(() => {
      },[]);
    return (
        <>
        <div class="clearfix curved-card">
            <div class="row">
                <div class="col-md-3 col-12">
                    <div class="form-group">
                        <label class="fw-bold mb-2">Select Date Range</label>
                        <div id="reportrange" class="daterangepickerstyle">
                            <i class="fa-regular fa-calendar me-2"></i>
                            <span></span> <i class="fa fa-caret-down ms-auto"></i>
                        </div>
                    </div>                    
                </div>
                <div class="col-md-2 col-6">
                    <div class="form-group">
                        <label for="transactionid" class="fw-bold mb-2">Ticket No</label>
                        <input type="text" class="form-control-custom-big" name="transationid"/>
                    </div>
                </div>
                <div class="col-md-2 col-6">
                    <div class="form-group">
                        <label for="transactionid" class="fw-bold mb-2">Game</label>
                        <select type="text" class="form-control-custom-big" name="transationid">
                            <option>Transaction type 1</option>
                            <option>Transaction type 2</option>
                            <option>Transaction type 3</option>
                            <option>Transaction type 4</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-2 col-6">
                    <div class="form-group">
                        <label for="transactionid" class="fw-bold mb-2">Company</label>
                        <select type="text" class="form-control-custom-big" name="transationid">
                            <option>Toto</option>
                            <option>Magnum</option>
                            <option>Da ma cai</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="form-group">
                        <label class="d-block">&nbsp;</label>
                        <button type="button" class="btn-custom-curve2 w-auto">Search</button>
                        <button type="button" class="btn-custom-curve1">Reset</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Filter;