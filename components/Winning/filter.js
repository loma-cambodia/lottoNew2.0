import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";


import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import daterangepicker from 'bootstrap-daterangepicker';
import styles from '../../styles/Home.module.css';

// import {getResults} from '../../store/actions/resultActions';

const Filter = ({_setFilterParams}) => {


    const c = new Date();
    const msdate = formatDate2(c);
    const medate = formatDate2(c);
      
    const intailDate = formatDate2(c) + ' - ' +formatDate2(c);

    const [dateRange, setDateRange] = useState(intailDate); 
    const [ticketNo, setTicketNo] = useState('');
    const [prizeType, setPrizeType] = useState('');

    const [active, setActive] = useState(false);

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const keyRef = useRef();
    const [dates1, setDates1] = useState({
      startDate: moment(msdate),
      endDate: moment(medate),
    });

    
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

    const prizeTypleList = ['','No','P1','P2','P3','S','C']

    const handleEvent = (event, picker) => {
        setFromDate(picker.startDate._d.toISOString());
        setToDate(picker.endDate._d.toISOString());
        let newDateRange = formatDate2(picker.startDate) + ' - ' + formatDate2(picker.endDate);
        setDateRange(newDateRange);
      };

 
      console.log('dateRangedateRange',dates1);

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

    function formatDate2(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day,month,year].join('/');
    }
    const filterList =(work) =>{
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
            
        setDateRange('')
        setPrizeType('')
        setTicketNo('')

        if(work == 'forMob'){
            $('.hideAndShowForMobileView').hide("slide");
        }

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


            _setFilterParams(filter)

    }

      useEffect(() => {
      },[]);

    const openFilterForMob = () => {
        $('.hideAndShowForMobileView').toggle("slide");
    }
    return (
        <>
            <div className="clearfix curved-card">
                <div className={styles.device_detect_for_mobile}>
                    <div className="form-group mb-0">
                        <button className="form-control custom-i-dg" style={{background: '-webkit-linear-gradient(90deg, rgb(253, 184, 3) 0%, rgb(247, 234, 120) 100%)' }}> 
                            <b>BETTING LIST REPORT</b>
                            <img 
                                onClick={() => openFilterForMob()}
                                className="img-fluid" 
                                src="images\betting\filter-icon.png" 
                                alt="" 
                                style={{ width: '20px', float: 'right', marginTop: '5px' }} />
                        </button>
                    </div>
                </div>
                <div className={styles.device_detect_for_desktop+' hideAndShowForMobileView'}>
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <div className="form-group">
                                <label className="fw-bold mb-2">Select Date Range</label>
                                <DateRangePicker
                                            ref={keyRef}
                                            onApply={handleEvent}
                                            onCancel={keyRef}
                                            initialSettings={{ 
                                                startDate: fromDate,
                                                endDate: toDate,
                                                ranges }}
                                        >
                                            <input id="daterangepicker" type="text" className="daterangepickerstyle"  value={dateRange}/>
                                        </DateRangePicker>
                            </div>                    
                        </div>
                        <div className="col-md-2 col-12">
                            <div className="form-group">
                                <label htmlFor="transactionid" className="fw-bold mb-2">Ticket No</label>
                                <input id="ticket_no" type="text" className="form-control-custom-big" name="transationid" onChange={(event) => setTicketNo(event.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-2 col-12">
                            <div className="form-group">
                                <label htmlFor="transactionid" className="fw-bold mb-2">Prize Type</label>
                                <select id="prize_type" type="text" className="form-control-custom-big" name="transationid" onChange={(event) => setPrizeType(event.target.value)}>
                                { prizeTypleList.map((item,id)=>(
                                        <option key={id}>{item}</option>
                                ))}
                                </select>
                            </div>
                        </div>
                        {/* <div className="col-md-2 col-6">
                            <div className="form-group">
                                <label htmlFor="transactionid" className="fw-bold mb-2">Company</label>
                                <select type="text" className="form-control-custom-big" name="transationid">
                                    <option>Toto</option>
                                    <option>Magnum</option>
                                    <option>Da ma cai</option>
                                </select>
                            </div>
                        </div> */}

                        <div className={styles.device_detect_for_mobile+" col-12"}>
                            <div className='row'>
                                <div className='col-md-6 col-6'>
                                    <button style={{ width: '100% !important'  }} type="button" className="btn-custom-curve2"
                                     onClick={() => filterList('forMob')} >{t('Search')}</button>
                                </div>
                                <div className='col-md-6 col-6'>
                                    <button style={{ width: '100% !important'  }} type="button" className="btn-custom-curve2" 
                                    onClick = {() =>resetFiletr('forMob')}>{t('Reset')}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.device_detect_for_desktop+" col-md-4"}>
                            <div className="form-group">
                                <label className="d-block mb-2">&nbsp;</label>
                                <button type="button" id="search" onClick={() => filterList()} className="btn-custom-curve2 w-auto me-2">{t('Search')}</button>
                                <label></label>
                                <button type="button" id="reset" className="btn-custom-curve1" onClick={() => resetFiletr()}>{t('Reset')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
          
        </>
    )
}
export default Filter;