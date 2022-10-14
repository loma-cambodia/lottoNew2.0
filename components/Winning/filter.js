import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";


import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import daterangepicker from 'bootstrap-daterangepicker';

// import {getResults} from '../../store/actions/resultActions';

const Filter = ({_setFilterParams}) => {


    const [dateRange, setDateRange] = useState('');
    const [ticketNo, setTicketNo] = useState('');
    const [prizeType, setPrizeType] = useState('');

    const [active, setActive] = useState(false);

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

    

    const prizeTypleList = ['','No','P1','P2','P3','S','C']

      const handleApply1 = (event, picker) => {
        setDates1({
          startDate: picker.startDate,
          endDate: picker.endDate,
        });

        setDateRange({
            startDate: picker.startDate,
            endDate: picker.endDate,
          })
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
    const filterList =() =>{
        const date = document.getElementById('daterangepicker');
        let filter =''
            if (date.value == ''){
         filter = {
                    'dateRange': '',
                    'prizeType':prizeType,
                    'ticketNo':ticketNo
                    } 
            }
            else{
                filter = {
                    'dateRange': moment(dateRange.startDate).format('DD/MM/YYYY')+'-'+ moment(dateRange.endDate).format('DD/MM/YYYY'),
                    'prizeType':prizeType,
                    'ticketNo':ticketNo
                    } 
            }
        

            _setFilterParams(filter)
        console.log('filter:', filter )
        setDateRange('')
        setPrizeType('')
        setTicketNo('')
    }

    const resetFiletr = () => {
        let filter = {
            'dateRange': '',
            'prizeType':'',
            'ticketNo':''
            } 

            const date = document.getElementById('daterangepicker');
            date.value = '';
            setDateRange('')

            const ticket = document.getElementById('ticket_no');
            ticket.value = '';
            const prize = document.getElementById('prize_type');
            prize.value = '';

            console.log('reset filter: ',filter)

            _setFilterParams(filter)

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
                                    <input id="daterangepicker" type="text" className="daterangepickerstyle" />
                                </DateRangePicker>
                    </div>                    
                </div>
                <div class="col-md-2 col-6">
                    <div class="form-group">
                        <label for="transactionid" class="fw-bold mb-2">Ticket No</label>
                        <input id="ticket_no" type="text" class="form-control-custom-big" name="transationid" onChange={(event) => setTicketNo(event.target.value)}/>
                    </div>
                </div>
                <div class="col-md-2 col-6">
                    <div class="form-group">
                        <label for="transactionid" class="fw-bold mb-2">Prize Type</label>
                        <select id="prize_type" type="text" class="form-control-custom-big" name="transationid" onChange={(event) => setPrizeType(event.target.value)}>
                           { prizeTypleList.map((item,id)=>(
                                <option key={id}>{item}</option>
                           ))}
                        </select>
                    </div>
                </div>
                {/* <div class="col-md-2 col-6">
                    <div class="form-group">
                        <label for="transactionid" class="fw-bold mb-2">Company</label>
                        <select type="text" class="form-control-custom-big" name="transationid">
                            <option>Toto</option>
                            <option>Magnum</option>
                            <option>Da ma cai</option>
                        </select>
                    </div>
                </div> */}

                <div class="col-md-3">
                    <div class="form-group">
                        <label class="d-block">&nbsp;</label>
                        <button type="button" id="search" onClick={() => filterList()} class="btn-custom-curve2 w-auto mx-3">Search</button>
                        <label></label>
                        <button type="button" id="reset" class="btn-custom-curve1" onClick={() => resetFiletr()}>Reset</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Filter;