import Marquee from "react-fast-marquee";
import Link from "next/link";
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";

import {getTicketData,searchTicketData,searchTicketDataP} from '../../store/actions/tickets';

import { useDispatch, useSelector, } from "react-redux";

const API_BASE_URL = process.env.apiUrl;
const ListTable = ({_tickets,_ticketsChild}) => {
    
 let ticket = _tickets;

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

    const [dates2, setDates2] = useState({
        startDate: moment(msdate),
        endDate: moment(medate),
      });
    const handleApply1 = (event, picker) => {
        setDates1({
          startDate: picker.startDate,
          endDate: picker.endDate,
        });
        console.log("<--START: ",dates1)
        console.log("<--END: ",dates1.endDate._d)
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

      const [ticketList, setTicketList] = useState([]);
      const [startRef, setstartRef] = useState();
      
      const [searchAction, setSearchAction] = useState(true);

      const [parentAction, setParentAction] = useState(true);

      
        
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
    // console.log('BettingListTable:state',state)

    const childShowTable = (ticketId) =>{
        dispatch(searchTicketData(ticketId));
        setParentAction(false);
        setSearchAction(false);
    }
    
    const backButton = () =>{
        setParentAction(true);
        setSearchAction(true);
    }
    

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
                            <th class="text-end">Bet Number</th>
                            <th class="text-end">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ticket.map((item,id) =>(
                            <tr key={id}>
                                <td>{id+1}</td>
                                <td class="text-start"><a className="btn btn-link" onClick={() => childShowTable(item.ticket_no)} >{item.ticket_no}</a></td>
                                <td class="text-center" >{item.created_at}</td>
                                <td class="text-center">{item.betting_date}</td>
                                {/* <td class="text-center">{item.game_type}</td> */}
                                <td class="text-end"></td>
                                <td class="text-end">{item.bet_number}</td>
                                <td class="text-end">{item.total_amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div class="clearfix d-flex align-items-center justify-content-center">
                    <div class="pagination:container">
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
                    </div>
              
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
            let ticket_slave = tickets[0].ticket_slave;
            let drow_date = tickets[0].betting_date;
            return (
                <>
                <button onClick={() => backButton() } className="btn btn-warning">Back</button>
                <table class="table small table-bordered">
                    <thead>
                        <tr>
                            <th>{t('No.')}</th>
                            <th class="text-start">Ticket Number</th>
                            <th class="text-center">Betting Time</th>
                            <th class="text-center">Draw Date</th>
                            <th class="text-center">Game</th>
                            <th class="text-center">{t('Company')}</th>
                            <th class="text-end">Bet Number</th>
                            <th class="text-end">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ticket_slave.map((item,id) =>(
                            <tr key={id}>
                                <td>{id+1}</td>
                                <td class="text-start"><a >{item.child_ticket_no}</a></td>
                                <td class="text-center" >{item.created_at}</td>
                                <td class="text-center">{drow_date}</td>
                                <td class="text-center">{item.game_type}</td>
                                <td class="text-end">{item.total_amount}</td>
                                <td class="text-end">{item.lottery_number}</td>
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
    
    const searchDataForParent = () =>{
        const ticketNumber = 'C0000001';
        dispatch(searchTicketDataP(ticketNumber));
    }
    const searchDataForChild = () =>{
        alert('child')
    }

    function SearchAbleFormParent(){
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
                            <input type="text" class="form-control-custom-big" name="transationid"/>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label class="d-block">&nbsp;</label>
                            <button type="button" onClick={() => searchDataForParent()} class="btn-custom-curve2 w-auto">{t('Search')}</button>
                            <button type="button" class="btn-custom-curve1">{t('Reset')}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

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
                            <input type="text" class="form-control-custom-big" name="transationid"/>
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
                            <button type="button" onClick={() => searchDataForChild()} class="btn-custom-curve2 w-auto">{t('Search')}</button>
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

            {searchAction ? <SearchAbleFormParent />  : <SearchAbleFormChild /> }

            <div class="table-responsive my-3">
                {parentAction ? <ShowTableDataParent tickets={ticket} /> : <ShowTableDataChild tickets={_ticketsChild} /> }
            </div>  
             

    </>
    )
}
export default ListTable;