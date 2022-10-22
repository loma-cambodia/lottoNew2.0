import React, { useState, useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";
import Link from "next/link";
import moment from 'moment';
import {DateRangePicker,daterangepicker} from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { useTranslation } from "react-i18next";
import {filterLotteryDetailsList} from '../../store/actions/reportActions';
import { useDispatch, useSelector, } from "react-redux";
import ReactPaginate from 'react-paginate';
import Select from 'react-select';

import styles from '../../styles/Home.module.css';
import $ from 'jquery'; 
import Table from "./DataTable";
import Table_Child from "./DataTablewinning";

const API_BASE_URL = process.env.apiUrl;
const ListTable = ({_tickets,_ticketsChild, _GetTicketNumber,_auth,_resetTable,_isLoading}) => {
    
    let ticket = _tickets;



    console.log('ListTable:ticket:',ticket);
    let auth = _auth;
    const items = _tickets;
    let loading =_isLoading;

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const c = new Date();
    const msdate = formatDate(c);
    const medate = formatDate(c);
  
      
    const intailDate = formatDate2(c) + ' - ' +formatDate2(c);

    const keyRef = useRef();
    const [dates1, setDates1] = useState({
      startDate: moment(msdate),
      endDate: moment(medate),
    });


      const itemsPerPage  = 10;
 
      const [currentItems, setCurrentItems] = useState(null);
      const [pageCount, setPageCount] = useState(0);
      const [itemOffset, setItemOffset] = useState(0);
      const [seletedPage, setSeletedPage] = useState(1);
      const [fromDate, setFromDate] = useState(new Date());
      const [toDate, setToDate] = useState(new Date());
      const [detailNo, setDetailNo] = useState('');
      const [filterGamesName, setFilterGamesName] = useState({ value: '', label: t('All') });
      const [filterGameType, setFilterGameType] = useState({ value: '', label: t('All')  });
      const [selectedticketId, setSelectedticketId] = useState('');
      const [isLoading, setIsLoading] = useState(false);




      useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
        if(currentItems){
        setIsLoading(loading)
        }
      }, [itemOffset, itemsPerPage,_tickets,_ticketsChild]);



    const handleApply1 = (event, picker) => {
        setDates1({
          startDate: picker.startDate,
          endDate: picker.endDate,
        });
        let newDateRange = formatDate2(picker.startDate) + ' - ' + formatDate2(picker.endDate);
        setDateRange(newDateRange);
      };

     
    
      const [ranges, setRanges] = useState({
        [t('Today')]: [moment().subtract(0, 'days'), moment().add(0, 'days')],
        [t('Yesterday')]: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        [t('Last_7_Days')]: [moment().subtract(6, 'days'), moment().add(0, 'days')],
        [t('Last_14_Days')]: [moment().subtract(13, 'days'), moment().add(0, 'days')],
        [t('This_Month')]: [moment().startOf('month')],
        [t('Last_Month')]: [moment().subtract(1,'months').startOf('month'), moment().subtract(1,'months').endOf('month')],
        [t('This_Year')]: [moment().startOf('year')],
      });

      const change = () => {
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
            "startDate": moment(dateRange.startDate),
            "endDate": moment(dateRange.endDate),
        })
      
      }

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
        return [day,month,year].join('/');
    }

    const state = useSelector(state => state);

    const childShowTable = (ticketId,work,actionFrom) =>{
            setIsLoading(true)
     //   detailNo
      //  filterGamesName
       // filterGameType

       setSelectedticketId(ticketId);

       let params = {ticketId};
       if(actionFrom == 'settledList' || actionFrom == 'reset_button' ){

        setDetailNo('');
        setFilterGamesName({ value: '', label: t('All') });
        setFilterGameType({ value: '', label: t('All') });

       params.child_ticket_no = '';
       params.game_play_id = '';
       params.game_type = '';

        }else {
            params.child_ticket_no = detailNo;
            params.game_play_id = filterGamesName.value;
            params.game_type = filterGameType.value;
        }
    //    params.child_ticket_no = detailNo;
    //    params.game_play_id = filterGamesName.value;
    //    params.game_type = filterGameType.value;

       //return false;
       
    
        const state12 = dispatch(filterLotteryDetailsList(params));
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
        setDetailNo('');
        setFromDate(moment(fromDate).toDate());
        setToDate(moment(toDate).toDate());
    }


    function isValidDate(d) {
        return d instanceof Date && !isNaN(d);
      }

    const searchGetListonFilter = (work) => {
        setIsLoading(true)
        const date = document.getElementById('daterangepicker').value;
        let dateValue1 = date.split('-')[0].trim();
        let dateValue2 = date.split('-')[1].trim();


        
         let _fromDate = fromDate;
         let _toDate = toDate;
         const d = new Date();
         let dateToday = d.toISOString();
         if(typeof _fromDate == 'string'){
            _fromDate = _fromDate.split('T')[0];
            _toDate = _toDate.split('T')[0];
         }else if(typeof _fromDate == 'object'){
            _fromDate = formatDate(_fromDate)
            _toDate = formatDate(_toDate)
        }else {
            _fromDate = dateToday.split('T')[0];
            _toDate = dateToday.split('T')[0];

         }
         _fromDate = concertDateFormat(_fromDate);
         _toDate = concertDateFormat(_toDate);;

         let newDateRange = dateValue1 + ' - ' + dateValue2;


        let member_id =  auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0;

        _GetTicketNumber(member_id,newDateRange,ticketNo);
        if(work == 'forMob'){
            $('.hideAndShowForMobileView').hide("slide");
        }
        
       setDateRange(newDateRange)
    }


      const concertDateFormat = (getDate) => {
        let _getDate = getDate.split('-');
         return _getDate[2]+'/'+_getDate[1]+'/'+_getDate[0];
      } 

      

      const handleEvent = (event, picker) => {
        if(isValidDate(picker.startDate._d)){
            setFromDate(picker.startDate._d.toISOString());
            setToDate(picker.endDate._d.toISOString());
            let newDateRange = formatDate2(picker.startDate) + ' - ' + formatDate2(picker.endDate);
            setDateRange(newDateRange);
        }
      };


      const resetFilter = () => {
        const d = new Date();
        setFromDate(moment().toDate());
        setToDate(moment().toDate());
        let newDateRange = formatDate2(d) + ' - ' + formatDate2(d);
        setDateRange(newDateRange);
        setTicketNo('');
        // location.reload();
        _resetTable()
        setIsLoading(true)
      }

      

      const MoneyFormatDisplay = (theInput, getCase) => {
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
    
    setItemOffset(newOffset);
  };

  const childDataReset = () => {
    childShowTable(selectedticketId,'forDesk')
   setDetailNo('');
   setFilterGamesName({ value: '', label: t('All')  });
//    setTimeout(childShowTable(selectedticketId), 5000);
  }


  const optionsGameType = [
    { value: '', label: t('All')  },
    { value: '3D', label: '3D' },
    { value: '4D', label: '4D' }
  ];

  const optionsGamesName = [
    { value: '', label: t('All')  },
    { value: '1', label: 'Magnum' },
    { value: '2', label: 'Da ma cai' },
    { value: '3', label: 'Toto'}
  ]

    function ShowTableDataParent({tickets}){
        const currentPage = Math.round(itemOffset/itemsPerPage);
        function winParent(e){
            if (e > 0){
                return(
                    {color:"green",fontWeight:"bold"}
                )
            }else if(e <= 0){
                return(
                    {color:"red",fontWeight:"bold"}
                )
            }
        }
        
        function winLose(net,win){
            const wl = net - win
            return(
                MoneyFormatDisplay(wl,1)
            )
        }
        if(currentItems && currentItems.length > 0){
            return (
                <>

                    <div className={styles.device_detect_for_mobile}>
                        <table className="mob-table mb-3">
                            <thead>
                                <tr>
                                    <th><span>{t('Ticket_No')}<br />{t('Betting_Time')}<br/>{t('Draw_Date')}</span></th>
                                    <th><span>{t('Draw_Id')}<br/>{t('Bet_Number')}<br/>{t('Company')}</span></th>
                                    <th style={{ textAlign: 'end' }}><span>{t('Total')}<br/>{t('Rebate')}<br/>{t('Net')}</span></th>
                                    <th style={{ textAlign: 'end' }}><span>{t('winning')}<br/>{t('Winning_Loss')}</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems && currentItems.map((item,i) =>(
                                    <tr key={i}>
                                        <td >
                                            <span  style={{color: '#0a58ca',cursor: 'pointer'}} onClick={() => childShowTable(item.id,'forDesk','settledList')}>
                                                {item.ticket_no}
                                            </span>
                                            <br/>
                                            {moment(item.created_at).format('DD-MM-YYYY HH:mm:ss')}<br/>
                                            {moment(item.draw_date).format('DD-MM-YYYY')}<br/>
                                        </td>
                                        <td>
                                            {item.id}<br/>
                                            {item.bet_number}<br/>
                                            {item.games && item.games.map((item,i) =>(item.abbreviation))}
                                        </td>
                                        <td style={{ textAlign: 'end' }}>
                                            {MoneyFormatDisplay(item.total_amount, 1)}<br/>
                                            {MoneyFormatDisplay(item.rebate_amount, 1)}<br/>
                                            {MoneyFormatDisplay(item.bet_net_amount, 1)}
                                        </td>
                                        <td style={{ textAlign: 'end' }}>
                                            <span style={winParent(item.winning_amount)}>
                                                {MoneyFormatDisplay(item.winning_amount,1)}</span><br/>
                                            <span style={winParent(winLose(item.winning_amount,item.bet_net_amount))}>
                                                {winLose(item.winning_amount,item.bet_net_amount)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.device_detect_for_desktop}>
                                                    <Table data={currentItems} _childShowTable={childShowTable}/>
                    </div>
                    <div class="clearfix d-flex align-items-center justify-content-center">
                        { pageCount > 1 ?
                            <ReactPaginate
                            breakLabel="..."
                            nextLabel={t('next')} 
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel={t('previous')}
                            renderOnZeroPageCount={null}
                            className="pagination"
                            pageLinkClassName="pagination"
                            forcePage={currentPage} 
                            // activeClassName={"pagination__link--active"}
                        /> : null }
                
                        <svg class="hide">
                            <symbol id="left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></symbol>
                            <symbol id="right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></symbol>
                        </svg>
                    </div>
                </>
            );
        }else{
            return(
                <div className='alert alert-warning'>
                    <h3 className='text-center'>
                    {t('no_data_found')}
                    </h3>
               </div>
               )

        }
    }
    function ShowTableDataChild({tickets})
    {
        
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
            function winChild(e){
                if (e > 0){
                    return(
                        {color:"green",fontWeight:"bold"}
                    )
                }else if(e <= 0){
                    return(
                        {color:"red",fontWeight:"bold"}
                    )
                }
            }
            function winLoseChild(net,win){
                const wl = net - win
                return(
                    MoneyFormatDisplay(wl,1)
                )
            }
            return (
                <>
                <div class="d-flex flex-row">
                     <div class="p-2">  <button onClick={() => backButton() } className="btn btn-warning ">{t('back')}</button></div>
                </div>
              


                <div className={styles.device_detect_for_mobile}>
                    <table className="mob-table">
                        <thead>
                            <tr>
                                <th><span>{t('Detail_Number')}<br />{t('Betting_Time')}<br />{t('Draw_Date')}</span></th>
                                <th><span>{t('Bet_Number')}<br />{t('game')}<br/>{t('Company')}<br /></span></th>
                                <th style={{ textAlign: 'end' }}><span>{t('Big')}<br />{t('Small_Bet')}<br />3A<br />3C</span></th>
                                <th style={{ textAlign: 'end' }}><span>{t('Total')}<br />{t('Rebate')}<br />{t('Net')}</span></th>
                                <th style={{ textAlign: 'end' }}>{t('winning')}<br/>{t('Winning_Loss')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map((item,id) =>(
                                <tr key={id}>
                                    <td><span>{item.child_ticket_no}<br />{moment(item.created_at).format('DD-MM-YYYY HH:mm:ss')}<br />{item.ticket.betting_date}</span></td>
                                    <td><span>{item.lottery_number} <br/> {item.game_type}<br />{item.game && item.game.name ? item.game.name : ""}</span></td>
                                    <td style={{ textAlign: 'end' }}><span>{MoneyFormatDisplay(item.big_bet_amount,1)}<br />{MoneyFormatDisplay(item.small_bet_amount,1)}<br />{MoneyFormatDisplay(item.three_a_amount,1)}<br />{MoneyFormatDisplay(item.three_c_amount,1)}</span></td>
                                    <td style={{ textAlign: 'end' }}><span>{MoneyFormatDisplay(item.bet_amount,1)}<br />{MoneyFormatDisplay(item.rebate_amount,1)}<br />{MoneyFormatDisplay(item.bet_net_amount,1)}</span></td>
                                    <td style={{ textAlign: 'end' }}>
                                        <span style={winChild(item.winning_amount)}>
                                            {MoneyFormatDisplay(item.winning_amount,1)}
                                        </span><br/>
                                        <span style={winChild(winLoseChild(item.winning_amount,item.bet_net_amount))}>
                                            {winLoseChild(item.winning_amount,item.bet_net_amount)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div className={styles.device_detect_for_desktop}>
                    <table class="table small table-bordered">
                        <thead>
                            <tr>
                                <th>{t('No')}</th>
                                <th class="text-start">{t('Detail_Number')}</th>
                                <th class="text-center">{t('Betting_Time')}</th>
                                <th class="text-center">{t('Draw_Date')}</th>
                                <th class="text-center">{t('game')}</th>
                                <th class="text-center">{t('Company')}</th>
                                <th class="text-center">{t('Bet_Number')}</th>
                                <th class="text-end">{t('Big')}</th>
                                <th class="text-end">{t('Small_Bet')}</th>
                                <th class="text-end">3A</th>
                                <th class="text-end">3C</th>
                                <th class="text-end">{t('Total')}</th>
                                <th class="text-end">{t('Rebate')}</th>
                                <th class="text-end">{t('Net')}</th>
                                {/* <th class="text-end">{t('Odds')}</th> */}
                                <th class="text-end">{t('winning')}</th>
                                <th class="text-end">{t('Winning_Loss')}</th>
                            </tr>
                        </thead>
                        <tbody>
                    
                            {tickets.map((item,id) =>(
                                <tr key={id}>
                                    <td>{id+1}</td>
                                    <td class="text-start"><a >{item.child_ticket_no}</a></td>
                                    <td class="text-center" >{moment(item.created_at).format('DD-MM-YYYY HH:mm:ss')}</td>
                                    <td class="text-center">{moment(item.ticket.draw_date).format('DD-MM-YYYY')}</td>
                                    <td class="text-center">{item.game_type}</td>
                                    <td class="text-center">{item.game && item.game.name ? item.game.name : ""}</td>
                                    <td class="text-center">{item.lottery_number}</td>

                                    <td class="text-end">{MoneyFormatDisplay(item.big_bet_amount,1)}</td>
                                    <td class="text-end">{MoneyFormatDisplay(item.small_bet_amount,1)}</td>
                                    <td class="text-end">{MoneyFormatDisplay(item.three_a_amount,1)}</td>
                                    <td class="text-end">{MoneyFormatDisplay(item.three_c_amount,1)}</td>
                                    <td class="text-end">{MoneyFormatDisplay(item.bet_amount,1)}</td>
                                    <td class="text-end">{MoneyFormatDisplay(item.rebate_amount,1)}</td>
                                    <td class="text-end">{MoneyFormatDisplay(item.bet_net_amount,1)}</td>
                                    {/* <td class="text-end">0.00</td> */}
                                
                                    <td class="text-end"  style={winChild(item.winning_amount)}>{MoneyFormatDisplay(item.winning_amount,1)}</td>
                                <td class="text-end"  style={winChild(winLoseChild(item.winning_amount,item.bet_net_amount))}>{winLoseChild(item.winning_amount,item.bet_net_amount)}</td>
                                    
                                
                                </tr>
                            ))}

                        {tickets.length == 0 ?(
                                <tr key={id}>
                                    <td colSpan={14}>{id+1}</td>
                                </tr>
                            ): null}
                        </tbody>
                    </table>
                    <Table_Child data={tickets}/>

                </div>
                </>
            );
            }else{
                return(
                    
                    <div className='alert alert-warning'>
                        <div class="d-flex justify-content-between">
                        <button onClick={() => backButton() } className="btn btn-warning ">{t('back')}</button>
                        </div>
                    <h3 className='text-center'>
                    {t('no_data_found')}
                    </h3>
                    
                </div>
                )

            }
    }


    function SearchAbleFormChild()
    {
        return (
            
            <div class="clearfix curved-card">
                <div class="row">
                    <div class="col-md-3 col-12">
                        <div class="form-group">
                            <label class="fw-bold mb-2">{t('Select_Date_Range')}</label>
                                <DateRangePicker ref={keyRef} onApply={handleApply1} onCancel={keyRef} initialSettings={{ ranges }} >
                                    <input id='daterangepicker' readOnly name="datefilter" type="text" className="daterangepickerstyle" value={dateRange} />
                                </DateRangePicker>
                        </div>                    
                    </div>
                    <div class="col-md-2 col-6">
                        <div class="form-group">
                            <label for="transactionid" class="fw-bold mb-2">{t('Ticket_No')}</label>
                            <input type="text" onChange={(event) => GetTicketNumber(event)} class="form-control-custom-big" name="transationid"/>
                        </div>
                    </div>
                    <div class="col-md-2 col-6">
                        <div class="form-group">
                            <label for="transactionid" class="fw-bold mb-2">{t('Game')}</label>
                            <select type="text" class="form-control-custom-big" name="transationid">
                                <option>4D</option>
                                <option>3D</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-2 col-6">
                        <div class="form-group">
                            <label for="transactionid" class="fw-bold mb-2">{t('Company')}</label>
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
                            <button type="button" class="btn-custom-curve2 w-auto">{t('Search')}</button>
                            <button type="button" class="btn-custom-curve1">{t('Reset')}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    const openFilterForMob = () => 
    {
        $('.hideAndShowForMobileView').toggle("slide");
    }

    // useEffect(() => {
    //     change();
    //     if(filterGamesName.value === '') {
    //         setFilterGamesName({ value: '', label: t('All') });
    //     }
    //   },[t])

      useEffect(() =>{
        change();
      },[fromDate])
    return (
        <>
            {/* {searchAction ? <SearchAbleFormParent />  : <SearchAbleFormChild /> } */}
            {/* <SearchAbleFormParent />  */}
            <div className='showForMobileViewSearch'>
                <div className="clearfix curved-card">
                    <div className={styles.device_detect_for_mobile+ ' mb-2'}>
                        <div className="form-group mb-0">
                            <button className="form-control custom-i-dg" style={{background: '-webkit-linear-gradient(90deg, rgb(253, 184, 3) 0%, rgb(247, 234, 120) 100%)' }}> 
                                <b>{t('betting_history_report')}</b>
                                <image 
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
                                <div class="row">
                                    <div class="col-md-3 col-12">
                                        <div class="form-group">
                                            <label class="fw-bold mb-2">{t('Select_Date_Range')}</label>
                                                <DateRangePicker format ref={keyRef} onCancel={keyRef} 
                                                initialSettings={{ startDate: fromDate,
                                                endDate: toDate,
                                                ranges  }} onEvent={handleEvent}
                                                onApply={handleApply1} >
                                                    <input id='daterangepicker' name="datefilter" type="text" value={dateRange} className="daterangepickerstyle" onChange={(e)=>setDateRange(e.target.value)}/>
                                                </DateRangePicker>
                                        </div>                    
                                    </div>
                                    <div class="col-md-2 col-12">
                                        <div class="form-group">
                                            <label for="transactionid" class="fw-bold mb-2">{t('Ticket_No')}</label>
                                            <input style={{ width: '100% !important' }} type="text" onChange={(e)=>{setTicketNo(e.target.value)}}  class="form-control-custom-big" value={ticketNo} name="transationid"/>
                                        </div>
                                    </div>

                                    <div className={styles.device_detect_for_mobile+" col-md-12 col-12"}>
                                        <div className='row'>
                                            <div className='col-md-6 col-6'>
                                                <button style={{ width: '100% !important' }} type="button" className="btn-custom-curve2 " onClick={()=>searchGetListonFilter('forMob')} >
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

                                    {/* <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="d-block">&nbsp;</label>
                                            <button type="button" class="btn-custom-curve2 w-auto m-2" onClick={()=>searchGetListonFilter()} >{t('Search')}</button>
                                            <button type="button" class="btn-custom-curve1" onClick={()=>resetFilter()}>{t('Reset')}</button>
                                        </div>
                                    </div> */}
                                    
                                    <div className={styles.device_detect_for_desktop+" col-md-4"}>
                                        <div className="form-group">
                                            <label className="d-block mb-2">&nbsp;</label>
                                            <button type="button" className="btn-custom-curve2 w-auto  me-2" onClick={()=>searchGetListonFilter('forDesk')} >{t('Search')}</button>
                                            <button type="button" className="btn-custom-curve1" onClick={()=>resetFilter()}>{t('Reset')}</button>
                                        </div>
                                    </div>
                                
                                </div>
                            ) :
                            (
                                <div class="row">
                                    <div class="col-md-2 col-12">
                                        <div class="form-group">
                                            <label for="transactionid" class="fw-bold mb-2">{t('Detail_Number')}</label>
                                            <input type="text" onChange={(e)=>{ 
                                                            setDetailNo(e.target.value)}}  class="form-control-custom-big" value={detailNo} name="transationid"/>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-2 col-12">
                                        <div class="form-group">
                                            <label for="transactionid" class="fw-bold mb-2">{t('Company')}</label>
                                            {/* <select type="text" class="form-control-custom-big" name="transationid">
                                                <option>All</option>
                                                <option>Toto</option>
                                                <option>Magnum</option>
                                                <option>Da ma cai</option>
                                            </select> */}
                                            <Select 
                                                options={optionsGamesName} 
                                                defaultValue = { { value: '', label: t('All') }} 
                                                value = {filterGamesName}
                                                onChange={value => setFilterGamesName(value)}
                                                />
                                        </div>
                                    </div>

                                    <div className={styles.device_detect_for_mobile+" col-12"}>
                                        <div className='row'>
                                            <div className='col-md-6 col-6'>
                                                {/* <label className="d-block">&nbsp;</label> */}
                                                <button style={{ width: '100% !important'  }} type="button" className="btn-custom-curve2" onClick = {() => childShowTable(selectedticketId,'forMob','serach_button')}>{t('Search')}</button>
                                            </div>
                                            <div className='col-md-6 col-6'>
                                                {/* <label className="d-block">&nbsp;</label> */}
                                                <button style={{ width: '100% !important'  }} type="button" className="btn-custom-curve2" onClick = {() =>childShowTable(selectedticketId,'forMob', 'reset_button')}>{t('Reset')}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.device_detect_for_desktop+" col-md-4"}>
                                        <div className="form-group">
                                            <label className="d-block mb-2">&nbsp;</label>
                                            <button type="button" className="btn-custom-curve2 w-auto me-2" onClick = {() =>childShowTable(selectedticketId,'forDesk','serach_button')}>{t('Search')}</button>
                                            <button type="button" className="btn-custom-curve1" onClick = {() => childShowTable(selectedticketId,'forDesk', 'reset_button')}>{t('Reset')}</button>
                                        </div>
                                    </div>

                                    {/* <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="d-block">&nbsp;</label>
                                            <button type="button" class="btn-custom-curve2 w-auto m-2" onClick = {() => childShowTable(selectedticketId)}>{t('Search')}</button>
                                            <button type="button" class="btn-custom-curve1" onClick = {() => childDataReset()}>{t('Reset')}</button>
                                        </div>
                                    </div> */}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div class="table-responsive my-3">
                {isLoading ? 
                <div className='text-center'>
                     <img src="assets/images/loader.gif" alt="" className="img-icon-prize" width="60" />
                </div>
                    :
                    parentAction ? <ShowTableDataParent tickets={ticket} /> : <ShowTableDataChild tickets={_ticketsChild} /> }
            </div>  
        </>
    )
}
export default ListTable;