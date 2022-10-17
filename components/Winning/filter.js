import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import $ from 'jquery'; 
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import {DateRangePicker,daterangepicker} from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
// import daterangepicker from 'react-bootstrap-daterangepicker';
import styles from '../../styles/Home.module.css';


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

    const change = () => {
        const date = document.getElementById('daterangepicker');

        
        $('input[name="datefilter"]').daterangepicker({
            ranges: {
                [t('Today')]: [moment().subtract(0, 'days'), moment().add(0, 'days')],
                [t('Yesterday')]: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                [t('Last_7_Days')]: [moment().subtract(6, 'days'), moment().add(0, 'days')],
                [t('Last_14_Days')]: [moment().subtract(13, 'days'), moment().add(0, 'days')],
                [t('This_Month')]: [moment().startOf('month')],
                [t('Last_Month')]: [moment().subtract(1,'months').startOf('month'), moment().subtract(1,'months').endOf('month')],
                [t('This_Year')]: [moment().startOf('year')],
            },
            "locale": {
                "applyLabel": t('submit'),
                "cancelLabel": t('clear'),
                "format": "DD/MM/YYYY",
                "customRangeLabel": (t('custom_range')),
                "daysOfWeek": [
                    t('Su'),
                    t('Mo'),
                    t('Tu'),
                    t('We'),
                    t('Th'),
                    t('Fr'),
                    t('Sa')
                ],
                "monthNames": [
                    t("January"),
                    t("February"),
                    t("March"),
                    t("April"),
                    t("May"),
                    t("June"),
                    t("July"),
                    t("August"),
                    t("September"),
                    t("October"),
                    t("November"),
                    t("December")
                ],
            },
            "startDate": moment(new Date()),
            "endDate": moment(new Date()),
        })
      
      }

    // const getInputDate =() =>{

    // }
    const prizeTypleList = ['All','P1','P2','P3','S','C']

    const handleEvent = (event, picker) => {
        setFromDate(picker.startDate._d.toISOString());
        setToDate(picker.endDate._d.toISOString());
        let newDateRange = formatDate2(picker.startDate) + ' - ' + formatDate2(picker.endDate);
        setDateRange(newDateRange);
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
                let dateValue = date.value.split('-')[0].trim()+'-'+date.value.split('-')[1].trim()
                filter = {
                    'dateRange': dateValue,
                    'prizeType':prizeType,
                    'ticketNo':ticketNo
                    } 
            }
        
            //console.log('filter:',filter);
            _setFilterParams(filter)
            
        setDateRange(date.value)
        setPrizeType('')
        setTicketNo('')

        if(work == 'forMob'){
            $('.hideAndShowForMobileView').hide("slide");
        }

    }

    const resetFiletr = () => {
        let filter = {
            'dateRange': '',
            'prizeType':'All',
            'ticketNo':''
            } 

            const date = document.getElementById('daterangepicker');
            date.value = intailDate;
            setDateRange(intailDate)

            const ticket = document.getElementById('ticket_no');
            ticket.value = '';
            const prize = document.getElementById('prize_type');
            prize.value = 'All';


            _setFilterParams(filter)

    }
    
      useEffect(() => {
        change()
        
      },[t]);

    const openFilterForMob = () => {
        $('.hideAndShowForMobileView').toggle("slide");
    }
    function DateDayRangePicker(){
        const [ranges, setRanges] = useState({
            [t('Today')]: [moment().subtract(0, 'days'), moment().add(0, 'days')],
            [t('Yesterday')]: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            [t('Last_7_Days')]: [moment().subtract(6, 'days'), moment().add(0, 'days')],
            [t('Last_14_Days')]: [moment().subtract(13, 'days'), moment().add(0, 'days')],
            [t('This_Month')]: [moment().startOf('month')],
            [t('Last_Month')]: [moment().subtract(1,'months').startOf('month'), moment().subtract(1,'months').endOf('month')],
            [t('This_Year')]: [moment().startOf('year')],
          });
        return (
            <>
                <DateRangePicker
                    id="daterpicker"
                        ref={keyRef}
                        onApply={handleEvent}
                        onCancel={keyRef}
                        initialSettings={{ 
                            startDate: fromDate,
                            endDate: toDate,
                            ranges }}
                        locale = {{
                                customRangeLabel: t('custom_range'),
                                toLabel: "To",
                        }}
                    >
                        <input id="daterangepicker" type="text" className="daterangepickerstyle"  value={dateRange}/>
                    </DateRangePicker>
            </>
        );
    }
    return (
        <>
            <div className="clearfix curved-card">
                <div className={styles.device_detect_for_mobile}>
                    <div className="form-group mb-0">
                        <button className="form-control custom-i-dg" style={{background: '-webkit-linear-gradient(90deg, rgb(253, 184, 3) 0%, rgb(247, 234, 120) 100%)' }}> 
                            <b>{t('winning_list')}</b>
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
                    <div class="row">
                        <div class="col-md-3 col-12">
                            <div class="form-group">
                                <label class="fw-bold mb-2">{t('Select_Date_Range')}</label>
                                <DateRangePicker
                                id="daterpicker"
                                            ref={keyRef}
                                            onApply={handleEvent}
                                            onCancel={keyRef}
                                            initialSettings={{ 
                                                startDate: fromDate,
                                                endDate: toDate,
                                                ranges }}
                                            locale = {{
                                                    customRangeLabel: t('custom_range'),
                                                    toLabel: "To",
                                                    cancelLabel: t('Cancel'), 
                                                    applyLabel: t('apply'),
                                            }}
                                        >
                                            <input id="daterangepicker" type="text" className="daterangepickerstyle" name="datefilter" value={dateRange}/>
                                        </DateRangePicker>
                            </div>                    
                        </div>
                        <div class="col-md-2 col-12">
                            <div class="form-group">
                                <label for="transactionid" class="fw-bold mb-2">{t('Ticket_No')}</label>
                                <input id="ticket_no" type="text" class="form-control-custom-big" name="transationid" onChange={(event) => setTicketNo(event.target.value)}/>
                            </div>
                        </div>
                        <div class="col-md-2 col-12">
                            <div class="form-group">
                                <label for="transactionid" class="fw-bold mb-2">{t('prize_type')}</label>
                                <select id="prize_type" type="text" class="form-control-custom-big" name="transationid" onChange={(event) => setPrizeType(event.target.value)}>
                                <option  value="All">{t('All')}</option>
                                <option  value="P1">{t('P1')}</option>
                                <option  value="P2">{t('P2')}</option>
                                <option  value="P3">{t('P3')}</option>
                                <option  value="S">{t('S')}</option>
                                <option  value="C">{t('C')}</option>
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