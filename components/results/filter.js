
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {getResults} from '../../store/actions/resultActions';

const Filter = ({_setDate}) => {
    const [startDate, setStartDate] = useState(new Date());

    const pickDate = () =>{
        
    }

      const dispatch = useDispatch();
      
    return (
        <>
        <div class="clearfix curved-card bg-light">
        <div class="d-flex align-items-center">
            <div class="filter-text">
            <span class="filter-icon"><i class="fa-solid fa-arrow-down-9-1"></i></span> <span class="text-filter">Filter Results</span>
            </div>
            <div class="filter-date ms-auto">
            <div class="input-group date" style={{flexWrap: 'nowrap'}} id="datepicker">
                {/* <input type="text" class="form-control" id="date"/> */}
                <DatePicker selected={startDate} onChange={(date) => {setStartDate(date), _setDate(date)}} />

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