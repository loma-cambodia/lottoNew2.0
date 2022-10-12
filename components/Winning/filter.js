import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";


import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

// import {getResults} from '../../store/actions/resultActions';

const Filter = ({_setDate}) => {
    const [startDate, setStartDate] = useState();

    console.log('startDate in filter: ', startDate)
  
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const c = new Date();
    const msdate = formatDate(c);
    const medate = formatDate(c);

    const keyRef = useRef();
    const [dates1, setDates1] = useState({
      startDate: moment(msdate),
      endDate: moment(medate),
    });

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
    

      const handleApply1 = (event, picker) => {
        setDates1({
          startDate: picker.startDate,
          endDate: picker.endDate,
        });
      };

      const [ranges, setRanges] = useState({
        ['Today']: [moment().subtract(0, 'days'), moment().add(0, 'days')],
        ['Yesterday']: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        ['Last 7 Days']: [moment().subtract(6, 'days'), moment().add(0, 'days')],
        ['Last 14 Days']: [moment().subtract(13, 'days'), moment().add(0, 'days')],
        ['This Month']: [moment().startOf('month')],
        ['Last Month']: [moment().subtract(1,'months').startOf('month'), moment().subtract(1,'months').endOf('month')],
        ['This Year']: [moment().startOf('year')],
      });
      
      function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
      
      useEffect(() => {
      },[]);
    return (
        <>
        <div class="clearfix curved-card">
            <div class="row">
                <div class="col-md-3 col-12">
                    <div class="form-group">
                        <label class="fw-bold mb-2">Select Date Range</label>
                        <DateRangePicker
                                    ref={keyRef}
                                    onApply={handleApply1}
                                    onCancel={keyRef}
                                    initialSettings={{ ranges }}
                                >
                                    <input type="text" className="daterangepickerstyle" />
                                </DateRangePicker>
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