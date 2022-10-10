
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

import {getResults} from '../../store/actions/resultActions';

const Filter = () => {
    const c = new Date();
    const msdate = formatDate(c);
    const medate = formatDate(c);
    const keyRef = useRef();
    const [dates1, setDates1] = useState({
      startDate: moment(msdate),
      endDate: moment(medate),
    });

    const [dates2, setDates2] = useState({
        startDate: moment(msdate),
        endDate: moment(medate),
      });

      const handleApply1 = (event, picker) => {
        let currentDate = picker
        setDates1({
          startDate: picker.startDate,
          endDate: picker.endDate,
        });

        console.log("<--START: ",currentDate.startDate._d)
        console.log("<--END: ",currentDate.endDate._d)
        setDates1(currentDate.startDate._d)
      };

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
      const dispatch = useDispatch();

      const [ranges, setRanges] = useState({
        ['Today']: [moment().subtract(0, 'days'), moment().add(0, 'days')],
        ['Yesterday']: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        ['Last 7 Days']: [moment().subtract(6, 'days'), moment().add(0, 'days')],
        ['Last 14 Days']: [moment().subtract(13, 'days'), moment().add(0, 'days')],
        ['This Month']: [moment().startOf('month')],
        ['Last Month']: [moment().subtract(1,'months').startOf('month'), moment().subtract(1,'months').endOf('month')],
        ['This Year']: [moment().startOf('year')],
      });
    return (
        <>
        <div class="clearfix curved-card bg-light">
        <div class="d-flex align-items-center">
            <div class="filter-text">
            <span class="filter-icon"><i class="fa-solid fa-arrow-down-9-1"></i></span> <span class="text-filter">Filter Results</span>
            <span>For: {moment(dates1).format('MM/DD/YYYY')}</span>
            </div>
            <div class="filter-date ms-auto">
            <div class="input-group date" id="datepicker">
                {/* <input type="text" class="form-control" id="date"/> */}
                <DateRangePicker
                                ref={keyRef}
                                onApply={handleApply1}
                                onCancel={keyRef}
                                initialSettings={{ ranges }}
                            >
                                <input type="text" className="daterangepickerstyle result-filter" />
                            </DateRangePicker>
                <span class="input-group-append">
                <span class="input-group-text bg-light d-block">
                    <i class="fa-regular fa-calendar"></i>
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