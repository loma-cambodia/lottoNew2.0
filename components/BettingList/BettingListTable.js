import React, { useState, useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";
import Link from "next/link";
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { useTranslation } from "react-i18next";
import {getLotteryDetailsList} from '../../store/actions/reportActions';

import { useDispatch, useSelector, } from "react-redux";
import ReactPaginate from 'react-paginate';
import Select from 'react-select';

import styles from '../../styles/Home.module.css';

const API_BASE_URL = process.env.apiUrl;
const ListTable = ({_tickets,_ticketsChild, _GetTicketNumber,_auth}) => {
    
    let ticket = _tickets;
    let auth = _auth;
    const items = _tickets;

    let ticketSlaves = ticket && ticket.ticket_slave ? ticket.ticket_slave: []
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


      const itemsPerPage  = 25;
 
      const [currentItems, setCurrentItems] = useState(null);
      const [pageCount, setPageCount] = useState(0);
      const [itemOffset, setItemOffset] = useState(0);
      const [seletedPage, setSeletedPage] = useState(1);
      const [fromDate, setFromDate] = useState(new Date());
      const [toDate, setToDate] = useState(new Date());
      const [detailNo, setDetailNo] = useState('');
      const [filterGamesName, setFilterGamesName] = useState({ value: '', label: 'All' });
      const [filterGameType, setFilterGameType] = useState({ value: '', label: 'All' });
      const [selectedticketId, setSelectedticketId] = useState('');
      const [reset, setReset] = useState(false);




      useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
        setReset(false);
      }, [itemOffset, itemsPerPage,_tickets, reset]);



    const handleApply1 = (event, picker) => {
        setDates1({
          startDate: formatDate(picker.startDate),
          endDate: formatDate(picker.endDate),
        });
        let newDateRange = formatDate2(picker.startDate) + ' - ' + formatDate2(picker.endDate);
        setDateRange(newDateRange);
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

      
      const intailDate = formatDate2(c) + ' - ' +formatDate2(c);

      const [ticketList, setTicketList] = useState([]);
      const [childDataTickets, setChildDataTickets] = useState([]);
      const [startRef, setstartRef] = useState();
      
      const [searchAction, setSearchAction] = useState(true);

      const [parentAction, setParentAction] = useState(true);

      const [dateRange, setDateRange] = useState(intailDate);

      const [ticketNo, setTicketNo] = useState('');

      const GetTicketNumber = _GetTicketNumber

      


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
        return [year, month, day].join('/');
    }

    const state = useSelector(state => state);

    const childShowTable = (ticketId,work,actionFrom) =>{

     
        //actionFrom // unsettledList, serach_button , reset_button

        

       // setDetailNo('');
      //  setFilterGamesName({ value: '', label: 'All' });
       // setFilterGameType({ value: '', label: 'All' });
        setSelectedticketId(ticketId);

       let params = {ticketId};

       if(actionFrom == 'unsettledList' || actionFrom == 'reset_button' ){

            setDetailNo('');
            setFilterGamesName({ value: '', label: 'All' });
            setFilterGameType({ value: '', label: 'All' });

           params.child_ticket_no = '';
           params.game_play_id = '';
           params.game_type = '';

       }else {
           params.child_ticket_no = detailNo;
           params.game_play_id = filterGamesName.value;
           params.game_type = filterGameType.value;
       }

       console.log('params:',params);
       //return false;
       
    
        const state12 = dispatch(getLotteryDetailsList(params));
        let ticketsssss = state && state.tickets && state.tickets.tickets ? state.tickets.tickets : [];
        setChildDataTickets(ticketsssss);
        setParentAction(false);
        setSearchAction(false);
        if(work == 'forMob'){
            $('.hideAndShowForMobileView').hide("slide");
        }
    }

    
    const backButton = () =>{
        setParentAction(true);
        setSearchAction(true);
    }


      const searchGetListonFilter = (work) => {

         let _fromDate = fromDate;
         let _toDate = toDate;
         const d = new Date();
         let dateToday = d.toISOString();
         if(typeof _fromDate == 'string'){
            _fromDate = _fromDate.split('T')[0];
            _toDate = _toDate.split('T')[0];
         }else {
            _fromDate = dateToday.split('T')[0];
            _toDate = dateToday.split('T')[0];

         }
         _fromDate = concertDateFormat(_fromDate);
         _toDate = concertDateFormat(_toDate);;

         let newDateRange = _fromDate + ' - ' + _toDate;

         console.log('newDateRange:',newDateRange);
         console.log('ticketNo:',ticketNo);
         

        let member_id =  auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0;

        _GetTicketNumber(member_id,newDateRange,ticketNo);
        if(work == 'forMob'){
            $('.hideAndShowForMobileView').toggle("slide");
        }
        // $('.hideAndShowForMobileView').toggle("slide");
      }


      const concertDateFormat = (getDate) => {
        let _getDate = getDate.split('-');
         return _getDate[2]+'/'+_getDate[1]+'/'+_getDate[0];
      } 



      const handleEvent = (event, picker) => {
        setFromDate(picker.startDate._d.toISOString());
        setToDate(picker.endDate._d.toISOString());
        let newDateRange = formatDate2(picker.startDate) + ' - ' + formatDate2(picker.endDate);
        setDateRange(newDateRange);
      };


      const resetFilter = () => {
        const d = new Date();
        setFromDate(moment().toDate());
        setToDate(moment().toDate());
        setTicketNo('');
        //location.reload();
        let newDateRange = formatDate2(d) + ' - ' + formatDate2(d);
        setDateRange(newDateRange);
        setReset(true);
      }


      const MoneyFormatDisplay = (theInput, getCase) => {
        //Do something with the input
        let getInput = theInput;
        if(getCase == 1){
         if(getInput){

           let newStr = theInput.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
           newStr = parseFloat(newStr).toFixed(2);
           return newStr;

         }else 
           return '0.00';
        }else{
           return parseFloat(lottery.slave_net_amount).toFixed(2)
        }
     };



const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const childDataReset = () => {
   setDetailNo('');
   setFilterGamesName({ value: '', label: 'All' });
   setFilterGameType({ value: '', label: 'All' });
   setTimeout(childShowTable(selectedticketId,'work'), 5000);
   
  }


  const optionsGameType = [
    { value: '', label: 'All' },
    { value: '3D', label: '3D' },
    { value: '4D', label: '4D' }
  ];

  const optionsGamesName = [
    { value: '', label: 'All' },
    { value: '1', label: 'Magnum' },
    { value: '2', label: 'Da ma cai' },
    { value: '3', label: 'Toto'}
  ]



  
    function ShowTableDataParent({tickets}){

        const currentPage = Math.round(itemOffset/itemsPerPage);
        if(currentItems && currentItems.length > 0){
            return (
                <>
                    <div className={styles.device_detect_for_mobile}>
                        <table className="mob-table mb-3">
                            <thead>
                                <tr>
                                    <th><span>Ticket Number<br />Betting Time<br/>Draw Date</span></th>
                                    <th><span>Bet Number<br/>{t('Company')}</span></th>
                                    {/* <th><span></span></th> */}
                                    <th><span>Total<br/>Rebate<br/>Net</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems && currentItems.map((item,i) =>(
                                    
                                    <tr key={i}>
                                        <td>
                                            <span>
                                                <a  style={{color: '#0a58ca',cursor: 'pointer'}} onClick={() => childShowTable(item.id,'forMob')} >
                                                    {item.ticket_no}
                                                </a><br />
                                                {moment(item.created_at).format('YYYY-DD-MM h:mm:ss a')}<br />
                                                {item.betting_date}
                                            </span>
                                        </td>
                                        {/* <td><span>{item.bet_number}<br />{item.betting_date}</span></td> */}
                                        <td>
                                            {item.bet_number}<br/>
                                            <span>
                                                {
                                                    item.games && item.games.map((item,i) =>(
                                                        item.abbreviation
                                                    )) 
                                                }
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                {MoneyFormatDisplay(item.bet_amount, 1)}<br />
                                                {MoneyFormatDisplay(item.rebate_amount, 1)}<br />
                                                {MoneyFormatDisplay(item.bet_net_amount, 1)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.device_detect_for_desktop}>
                        <table className="table small table-bordered">
                            <thead>
                                <tr>
                                    <th>{t('No.')}</th>
                                    <th className="text-center">Ticket Number</th>
                                    <th className="text-center">Betting Time</th>
                                    <th className="text-center">Draw Date</th>
                                    <th className="text-start">Bet Number</th>
                                    <th className="text-start">{t('Company')}</th>
                                    <th className="text-end">Total</th>
                                    <th className="text-end">Rebate</th>
                                    <th className="text-end">Net</th>
                                </tr>
                            </thead>
                            <tbody>
                            {currentItems && currentItems.map((item,i) =>(
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td className="text-center" ><span style={{color: '#0a58ca',cursor: 'pointer'}} onClick={() => childShowTable(item.id,'forDesk','unsettledList')} >{item.ticket_no}</span></td>
                                    <td className="text-center" >{moment(item.created_at).format('YYYY-DD-MM h:mm:ss a')}</td>
                                    <td className="text-center">{item.betting_date}</td>
                                    <td className="text-start">{item.bet_number}</td>
                                    <td className="text-start">
                                    {
                                    item.games && item.games.map((item,i) =>(
                                        item.abbreviation
                                    )
                                    ) 
                                    }
                                </td>
                                    <td className="text-end">{MoneyFormatDisplay(item.bet_amount, 1)}</td>
                                    <td className="text-end">{MoneyFormatDisplay(item.rebate_amount, 1)}</td>
                                    <td className="text-end">{MoneyFormatDisplay(item.bet_net_amount, 1)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>                
                    <div className="clearfix d-flex align-items-center justify-content-center">

                        { pageCount > 1 ?
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Next >" 
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="< Previous"
                            renderOnZeroPageCount={null}
                            className="pagination"
                            forcePage={currentPage}
                        /> : null } 
                
                        <svg className="hide">
                            <symbol id="left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></symbol>
                            <symbol id="right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></symbol>
                        </svg>
                    </div>
                </>
            );
        }else{
            return (<>
               <div className='alert alert-warning'>
                <h3 className='text-center'>
                    No Data Found!
                </h3>
               </div>
            </>)

        }
    }
    function ShowTableDataChild({tickets}){
        
        if(tickets.length > 0){
          let drow_date = '--';
            let companyGame = '';
            function gameName(e){
                if(e == 1){
                    return(
                        companyGame = "Toto"
                    )
                   
                }else if(e == 2){
                    return(
                        companyGame = "Magnum"
                    )
                }else{
                    return(
                        companyGame = "Da Ma Cai"
                    )
                }
            }
            return (
                <>
                <button onClick={() => backButton() } className="btn btn-warning">Back</button>
                    <div className={styles.device_detect_for_mobile}>
                        <table className="mob-table">
                            <thead>
                                <tr>
                                    <th><span>Detail Number<br />Betting Time<br />Draw Date</span></th>
                                    <th><span>Bet Number<br />Game<br />{t('Company')}</span></th>
                                    <th><span>Big<br />Small<br />3A<br />3C</span></th>
                                    <th><span>Total<br />Rebate<br />Net</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.map((item,id) =>(
                                    <tr key={id}>
                                        <td><span>{item.child_ticket_no}<br />{moment(item.created_at).format('YYYY-DD-MM h:mm:ss a')}<br />{item.ticket.betting_date}</span></td>
                                        <td><span>{item.lottery_number} <br/> {item.game_type}<br />{item.game && item.game.name ? item.game.name : ""}</span></td>
                                        <td><span>{MoneyFormatDisplay(item.big_bet_amount,1)}<br />{MoneyFormatDisplay(item.small_bet_amount,1)}<br />{MoneyFormatDisplay(item.three_a_amount,1)}<br />{MoneyFormatDisplay(item.three_c_amount,1)}</span></td>
                                        <td><span>{MoneyFormatDisplay(item.bet_amount,1)}<br />{MoneyFormatDisplay(item.rebate_amount,1)}<br />{MoneyFormatDisplay(item.bet_net_amount,1)}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.device_detect_for_desktop}>
                        <table className="table small table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>{t('No.')}</th>
                                    <th className="text-start">Detail Number</th>
                                    {/* <th className="text-start">Detail Number</th> */}
                                    <th className="text-center">Betting Time</th>
                                    <th className="text-center">Draw Date</th>
                                    <th className="text-center">Game</th>
                                    <th className="text-center">{t('Company')}</th>
                                    <th className="text-start">Bet Number</th>

                                    <th className="text-end">Big</th>
                                    <th className="text-end">Small</th>
                                    <th className="text-end">3A</th>
                                    <th className="text-end">3C</th>
                                    <th className="text-end">Total</th>
                                    <th className="text-end">Rebate</th>
                                    <th className="text-end">Net</th>
                                
                                </tr>


                            </thead>
                            <tbody>
                                {tickets.map((item,id) =>(
                                    <tr key={id}>
                                        <td>{id+1}</td>
                                        <td className="text-start"><a >{item.child_ticket_no}</a></td>
                                        <td className="text-center" >{moment(item.created_at).format('YYYY-DD-MM h:mm:ss a')}</td>
                                        <td className="text-center">{item.ticket.betting_date}</td>
                                        <td className="text-center">{item.game_type}</td>
                                        <td className="text-end">{item.game && item.game.name ? item.game.name : ""}</td>
                                        <td className="text-start">{item.lottery_number}</td>

                                        <td className="text-end">{MoneyFormatDisplay(item.big_bet_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.small_bet_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.three_a_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.three_c_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.bet_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.rebate_amount,1)}</td>
                                        <td className="text-end">{MoneyFormatDisplay(item.bet_net_amount,1)}</td>
                                    
                                    </tr>
                                ))}

                            {tickets.length == 0 ?(
                                    <tr key={id}>
                                        <td colSpan={14}>{id+1}</td>
                                    </tr>
                                ): null}
                        </tbody>
                        </table>
                    </div>
                </>
            );
        }else{
            return (<>
                <div className='alert alert-warning'>
                <button onClick={() => backButton() } className="btn btn-warning">Back</button>
                 <h3 className='text-center'>   
                         No Data Found!
                 </h3>
                </div>
             </>)   
        }
    }


    function SearchAbleFormChild(){
        return (
            
            <div className="clearfix curved-card">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <div className="form-group">
                            <label className="fw-bold mb-2">{t('Select_Date_Range')}</label>
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
                    <div className="col-md-2 col-6">
                        <div className="form-group">
                            <label for="transactionid" className="fw-bold mb-2">{t('Ticket_No')}</label>
                            <input type="text" onChange={(event) => GetTicketNumber(event)} className="form-control-custom-big" name="transationid"/>
                        </div>
                    </div>
                    <div className="col-md-2 col-6">
                        <div className="form-group">
                            <label for="transactionid" className="fw-bold mb-2">{t('Game')}</label>
                            <select type="text" className="form-control-custom-big" name="transationid">
                                <option>4D</option>
                                <option>3D</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2 col-6">
                        <div className="form-group">
                            <label for="transactionid" className="fw-bold mb-2">{t('Company')}</label>
                            <select type="text" className="form-control-custom-big" name="transationid">
                                <option>Toto</option>
                                <option>Magnum</option>
                                <option>Da ma cai</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="d-block">&nbsp;</label>
                            <button type="button" className="btn-custom-curve2 w-auto me-2">{t('Search')}</button>
                            <button type="button" className="btn-custom-curve1">{t('Reset')}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    const openFilterForMob = () => {
        $('.hideAndShowForMobileView').toggle("slide");
    }

    return (
        <>

                {/* {searchAction ? <SearchAbleFormParent />  : <SearchAbleFormChild /> } */}
                {/* <SearchAbleFormParent />  */}
            <div className='showForMobileViewSearch'>
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
                        {searchAction ? (
                                <div className="row">
                                    <div className="col-md-3 col-12">
                                        <div className="form-group">
                                            <label className="fw-bold mb-2">{t('Select_Date_Range')}</label>
                                                <DateRangePicker
                                                    ref={keyRef}
                                                    onCancel={keyRef}
                                                    initialSettings={{ 
                                                        startDate: fromDate,
                                                        endDate: toDate,
                                                        ranges }}
                                                    onEvent={handleEvent}
                                                >
                                                    <input type="text" className="daterangepickerstyle" onChange={(e)=>setDateRange(e.target.value)} value={dateRange} />
                                                </DateRangePicker>
                                        </div>                    
                                    </div>
                                    <div className="col-md-2 col-12">
                                        <div className="form-group">
                                            <label for="transactionid" className="fw-bold mb-2">{t('Ticket_No')}</label>
                                            <input type="text" onChange={(e)=>{ 
                                                setTicketNo(e.target.value)}}  className="form-control-custom-big" value={ticketNo} name="transationid"/>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.device_detect_for_mobile+" col-md-12 col-12"}>
                                        <div className='row'>
                                            <div className='col-md-6 col-6'>
                                                {/* <label className="d-block">&nbsp;</label> */}
                                                <button style={{ width: '100% !important' }} type="button" className="btn-custom-curve2" onClick={()=>searchGetListonFilter('forMob')} >
                                                    {t('Search')}
                                                </button>
                                            </div>
                                            <div className='col-md-6 col-6'>
                                                <button style={{ width: '100% !important' }} type="button" className="btn-custom-curve2" onClick={()=>resetFilter()}>
                                                    {t('Reset')}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.device_detect_for_desktop+" col-md-6"}>
                                        <div className="form-group">
                                            <label className="d-block">&nbsp;</label>
                                            <button type="button" className="btn-custom-curve2 w-auto me-2" onClick={()=>searchGetListonFilter('forDesk')} >{t('Search')}</button>
                                            <button type="button" className="btn-custom-curve1" onClick={()=>resetFilter()}>{t('Reset')}</button>
                                        </div>
                                    </div>
                                </div>
                            ) 
                            :
                            (
                                <div className="row">
                                
                                    <div className="col-md-2 col-12">
                                        <div className="form-group">
                                            <label for="transactionid" className="fw-bold mb-2">Detail Number</label>
                                            <input type="text" onChange={(e)=>{ 
                                                            setDetailNo(e.target.value)}}  className="form-control-custom-big" value={detailNo} name="transationid"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-12">
                                        <div className="form-group">
                                            <label for="transactionid" className="fw-bold mb-2">{t('Game')}</label>
                                            <Select 
                                                options={optionsGameType} 
                                                defaultValue = { { value: '', label: 'All' }} 
                                                value = {filterGameType}
                                                onChange={value => setFilterGameType(value)}
                                                />
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-12">
                                        <div className="form-group">
                                            <label for="transactionid" className="fw-bold mb-2">{t('Company')}</label>
                                            <Select 
                                                options={optionsGamesName} 
                                                defaultValue = { { value: '', label: 'All' }} 
                                                value = {filterGamesName}
                                                onChange={value => setFilterGamesName(value)}
                                                />
                                        </div>
                                    </div>
                                    
                                    <div className={styles.device_detect_for_mobile+" col-12"}>
                                        <div className='row'>
                                            <div className='col-md-6 col-6'>
                                                {/* <label className="d-block">&nbsp;</label> */}
                                                <button style={{ width: '100% !important'  }} type="button" className="btn-custom-curve2" onClick = {() => childShowTable(selectedticketId,'forMob', 'serach_button')}>{t('Search')}</button>
                                            </div>
                                            <div className='col-md-6 col-6'>
                                                {/* <label className="d-block">&nbsp;</label> */}
                                                <button style={{ width: '100% !important'  }} type="button" className="btn-custom-curve2" onClick = {() =>childShowTable(selectedticketId,'forMob', 'reset_button')}>{t('Reset')}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.device_detect_for_desktop+" col-md-3"}>
                                        <div className="form-group">
                                            <label className="d-block">&nbsp;</label>
                                            <button type="button" className="btn-custom-curve2 w-auto me-2" onClick = {() => childShowTable(selectedticketId,'forDesk', 'serach_button')}>{t('Search')}</button>
                                            <button type="button" className="btn-custom-curve1" onClick = {() => childShowTable(selectedticketId,'forDesk', 'reset_button')}>{t('Reset')}</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="table-responsive my-3">

                {parentAction ? <ShowTableDataParent tickets={ticket} /> : <ShowTableDataChild tickets={_ticketsChild} /> }

            </div>  
             

    </>
    )
}
export default ListTable;