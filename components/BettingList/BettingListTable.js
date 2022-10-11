import Marquee from "react-fast-marquee";
import Link from "next/link";
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";

import {getTicketData,searchTicketData, getLotteryDetailsList} from '../../store/actions/tickets';

import { useDispatch, useSelector, } from "react-redux";
import ReactPaginate from 'react-paginate';

const API_BASE_URL = process.env.apiUrl;
const ListTable = ({_tickets,_ticketsChild, _GetTicketNumber,_auth}) => {
    
 let ticket = _tickets;
 let auth = _auth;





 let ticketSlaves = ticket && ticket.ticket_slave ? ticket.ticket_slave: []

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const c = new Date();
    const msdate = formatDate(c);
    const medate = formatDate(c);

    console.log('msdate:',msdate);


    const keyRef = useRef();
    const [dates1, setDates1] = useState({
      startDate: moment(msdate),
      endDate: moment(medate),
    });

    const [dates2, setDates2] = useState({
        startDate: moment(msdate),
        endDate: moment(medate),
      });


      const itemsPerPage  = 5;
      const [currentItems, setCurrentItems] = useState(null);
      const [pageCount, setPageCount] = useState(5);
      const [itemOffset, setItemOffset] = useState(0);



      const [fromDate, setFromDate] = useState(new Date('2022-10-12'));
      const [toDate, setToDate] = useState(new Date());



     //   console.log('fromDate:',fromDate);
     //   console.log('toDate:',toDate);




      useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
     //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(_tickets.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(_tickets.length / itemsPerPage));
      }, [itemOffset,itemsPerPage,_tickets]);


    //   useEffect(() => {
    //     const endOffset = itemOffset + itemsPerPage;
    //     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    //     setCurrentItems(Pkglottery1.slice(itemOffset, endOffset));
    //     setPageCount(Math.ceil(Pkglottery1.length / itemsPerPage));
    //   }, [itemOffset, itemsPerPage, Pkglottery1]);



    const handleApply1 = (event, picker) => {
        setDates1({
          startDate: picker.startDate,
          endDate: picker.endDate,
        });
       // console.log("<--START: ",dates1)
       // console.log("<--END: ",dates1.endDate._d)
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

      console.log("ranges: ",ranges);

    //   const range = {
    //     Today: [moment(), moment()],
    //     Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    //     "Last 7 Days": [moment().subtract(6, "days"), moment()],
    //     "Last 30 Days": [moment().subtract(29, "days"), moment()],
    //     "This Month": [moment().startOf("month"), moment().endOf("month")],
    //     "Last Month": [
    //       moment()
    //         .subtract(1, "month")
    //         .startOf("month"),
    //       moment()
    //         .subtract(1, "month")
    //         .endOf("month")
    //     ],
    //     "Last Year": [
    //       moment()
    //         .subtract(1, "year")
    //         .startOf("year"),
    //       moment()
    //         .subtract(1, "year")
    //         .endOf("year")
    //     ]
    //   };

      const [ticketList, setTicketList] = useState([]);
      const [childDataTickets, setChildDataTickets] = useState([]);
      const [startRef, setstartRef] = useState();
      
      const [searchAction, setSearchAction] = useState(true);

      const [parentAction, setParentAction] = useState(true);

      const [dateRange, setDateRange] = useState('10/10/2022-10/10/2022');

      const [ticketNo, setTicketNo] = useState('');

      const GetTicketNumber = _GetTicketNumber

    //  useEffect(() => {
      //  console.log(ticketNo)
   //   }, [ticketNo])
        
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

    const state = useSelector(state => state);
     //console.log('BettingListTable:state',state)

    const childShowTable = (ticketId) =>{
        const state12 = dispatch(getLotteryDetailsList(ticketId));
        let ticketsssss = state && state.tickets && state.tickets.tickets ? state.tickets.tickets : [];
        setChildDataTickets(ticketsssss);
        setParentAction(false);
        setSearchAction(false);
    }

    // const ticketNumber = (event) =>{
    //     const val = event.target.value;
    //     // const state12 = dispatch(searchTicketData(val));
    //     // let ticketsssss = state && state.tickets && state.tickets.tickets ? state.tickets.tickets : [];
    //     GetTicketNumber(val)
    //     console.log("TicketNumber STATE:",val)
    // }
    
    const backButton = () =>{
        setParentAction(true);
        setSearchAction(true);
    }

    //const handlePageClick = () => {};

    
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % _tickets.length;
       console.log(
         `User requested page number ${event.selected}, which is offset ${newOffset}`

       );
        setItemOffset(newOffset);
      };

      const searchGetListonFilter = () => {

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

         let newDateRange = _fromDate + '-' + _toDate;

         console.log('newDateRange:',newDateRange);
         console.log('ticketNo:',ticketNo);
         

        let member_id =  auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0;

        _GetTicketNumber(member_id,newDateRange,ticketNo);
  
      }


      const concertDateFormat = (getDate) => {
        let _getDate = getDate.split('-');
         return _getDate[2]+'/'+_getDate[1]+'/'+_getDate[0];
      } 



      const handleEvent = (event, picker) => {
      //  console.log("start: ", picker.startDate._d);
      //  console.log("end: ", picker.endDate._d);
        setFromDate(picker.startDate._d.toISOString());
        setToDate(picker.endDate._d.toISOString());
      };


      const resetFilter = () => {

        const d = new Date();
        setFromDate(d);
        setToDate(d);
        setTicketNo('');
        location.reload();
      }

      let initData = { startDate: '1/1/2014', endDate: '3/1/2014' };

      const MoneyFormatDisplay = (theInput, getCase) => {
        //Do something with the input
        let getInput = theInput;
        if(getCase == 1){
         if(getInput)
           return theInput.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
         else 
           return '';
        }else{
           return parseFloat(lottery.slave_net_amount).toFixed(2)
        }
     };
      

      
    

    console.log('ranges:',ranges);

    

    

    function ShowTableDataParent({tickets}){
        if(tickets.length > 0){
            return (
                <>
                <table class="table small table-bordered">
                    <thead>
                        <tr>
                            <th>{t('No.')}</th>
                            <th class="text-start">Ticket Number</th>
                            <th class="text-center">Betting Time</th>
                            <th class="text-center">Draw Date</th>
                            {/* <th class="text-center">Game</th> */}
                            <th class="text-center">{t('Company')}</th>
                            <th class="text-start">Rebate Amount</th>
                            <th class="text-start">Net Amount</th>
                            <th class="text-end">Bet Number</th>
                            <th class="text-end">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {currentItems && currentItems.map((item,i) =>(
                        <tr>
                            <td>{i + 1}</td>
                            <td class="text-start"><a className="btn btn-link" onClick={() => childShowTable(item.id)} >{item.ticket_no}</a></td>
                            <td class="text-center" >{moment(item.created_at).format('YYYY-DD-MM h:mm:ss')}</td>
                            <td class="text-center">{item.betting_date}</td>
                            {/* <td class="text-center">{item.game_type}</td> */}
                            <td class="text-end">
                            {
                               item.games && item.games.map((item,i) =>(
                                  item.abbreviation
                               )
                               ) 
                            }
                          </td>

                            <td class="text-end">{ item.rebate_amount ? MoneyFormatDisplay(item.rebate_amount, 1) : 0}</td>
                            <td class="text-end">{MoneyFormatDisplay(item.total_bet_net_amount, 1)}</td>

                            <td class="text-end">{MoneyFormatDisplay(item.bet_number, 1)}</td>
                            <td class="text-end">{MoneyFormatDisplay(item.total_amount, 1)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div class="clearfix d-flex align-items-center justify-content-center">
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
            /> : null }

                     {/* <div class="pagination:container">
                        <div class="pagination:number arrow">
                        <svg width="18" height="18">
                        </svg>
                        <span class="arrow:text">Previous</span> 
                        </div>
                        
                        <div class="pagination:number">
                        1
                        </div>
                        <div class="pagination:number">
                        2
                        </div>
                        
                        <div class="pagination:number pagination:active">
                        3
                        </div>
                        
                        <div class="pagination:number">
                        4
                        </div>
                        
                        <div class="pagination:number">
                        540
                        </div>
                        
                        <div class="pagination:number arrow">
                        <svg width="18" height="18">
                        </svg>
                        </div>
                    </div>  */}
              
                    <svg class="hide">
                        <symbol id="left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></symbol>
                        <symbol id="right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></symbol>
                    </svg>
                </div>
                </>
            );
        }else{

        }
    }
    function ShowTableDataChild({tickets}){
        
        if(tickets.length > 0){
            //let ticket_slave = tickets[0].ticket_slave;
          //  let drow_date = tickets[0].betting_date;
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
                <table class="table small table-bordered">
                    <thead>
                        <tr>
                            <th>{t('No.')}</th>
                            <th class="text-start">Detail Number</th>
                            {/* <th class="text-start">Detail Number</th> */}
                            <th class="text-center">Betting Time</th>
                            <th class="text-center">Draw Date</th>
                            <th class="text-center">Game</th>
                            <th class="text-center">{t('Company')}</th>
                            <th class="text-end">Bet Number</th>

                            <th class="text-start">Big Bet</th>
                            <th class="text-start">Small Bet</th>
                            <th class="text-start">3A</th>
                            <th class="text-start">3C</th>

                            <th class="text-start">Rebate Amount</th>
                            <th class="text-start">Net Amount</th>
                            <th class="text-end">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                
                        {tickets.map((item,id) =>(
                                
                                
                            <tr key={id}>
                                <td>{id+1}</td>
                                <td class="text-start"><a >{item.child_ticket_no}</a></td>
                                <td class="text-center" >{moment(item.created_at).format('YYYY-DD-MM h:mm:ss')}</td>
                                <td class="text-center">{drow_date}</td>
                                <td class="text-center">{item.game_type}</td>
                                <td class="text-end">{gameName(item.game_play_id)}</td>
                                <td class="text-end">{item.lottery_number}</td>

                                <td class="text-end">{item.big_bet_amount}</td>
                                <td class="text-end">{item.small_bet_amount}</td>
                                <td class="text-end">{item.three_a_amount}</td>
                                <td class="text-end">{item.three_c_amount}</td>



                                <td class="text-end">{item.rebate_amount}</td>
                                <td class="text-end">{item.bet_net_amount}</td>
                                <td class="text-end">{item.bet_amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </>
            );
        }else{

        }
    }
    // function SearchAbleFormParent(){
    //     return (
            
    //     );
    // }

    function SearchAbleFormChild(){
        return (
            
            <div class="clearfix curved-card">
                <div class="row">
                    <div class="col-md-3 col-12">
                        <div class="form-group">
                            <label class="fw-bold mb-2">{t('Select_Date_Range')}</label>
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

    // console.log("ticketList:sushil:",ticket)

    return (
        <>

            {/* {searchAction ? <SearchAbleFormParent />  : <SearchAbleFormChild /> } */}
            {/* <SearchAbleFormParent />  */}
            {searchAction ? (
            <div class="clearfix curved-card">
                <div class="row">
                    <div class="col-md-3 col-12">
                        <div class="form-group">
                            <label class="fw-bold mb-2">{t('Select_Date_Range')}</label>
                                <DateRangePicker
                                    ref={keyRef}
                                    onCancel={keyRef}
                                    initialSettings={{ ranges }}
                                    onEvent={handleEvent}
                                >
                                    <input type="text" className="daterangepickerstyle" onChange={(e)=>setDateRange(e.target.value)}/>
                                </DateRangePicker>
                        </div>                    
                    </div>
                    <div class="col-md-2 col-6">
                        <div class="form-group">
                            <label for="transactionid" class="fw-bold mb-2">{t('Ticket_No')}</label>
                            <input type="text" onChange={(e)=>{ 
                                 setTicketNo(e.target.value)}}  class="form-control-custom-big" value={ticketNo} name="transationid"/>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label class="d-block">&nbsp;</label>
                            <button type="button" class="btn-custom-curve2 w-auto" onClick={()=>searchGetListonFilter()} >{t('Search')}</button>
                            <button type="button" class="btn-custom-curve1" onClick={()=>resetFilter()}>{t('Reset')}</button>
                        </div>
                    </div>
                </div>
            </div>
    ) :
    (<div class="clearfix curved-card">
    <div class="row">
        <div class="col-md-3 col-12">
            <div class="form-group">
                <label class="fw-bold mb-2">{t('Select_Date_Range')}</label>
                <DateRangePicker
                                    ref={keyRef}
                                    onCancel={keyRef}
                                    initialSettings={{ ranges }}
                                    onEvent={handleEvent}
                                >
                                    <input type="text" className="daterangepickerstyle" onChange={(e)=>setDateRange(e.target.value)}/>
                                </DateRangePicker>
            </div>                    
        </div>
        <div class="col-md-2 col-6">
            <div class="form-group">
                <label for="transactionid" class="fw-bold mb-2">{t('Ticket_No')}</label>
                <input type="text" onChange={(e)=>{ 
                                 setTicketNo(e.target.value)}}  class="form-control-custom-big" value={ticketNo} name="transationid"/>
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
</div>)}

            <div class="table-responsive my-3">
                {parentAction ? <ShowTableDataParent tickets={ticket} /> : <ShowTableDataChild tickets={_ticketsChild} /> }


            </div>  
             

    </>
    )
}
export default ListTable;