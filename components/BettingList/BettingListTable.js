import Marquee from "react-fast-marquee";
import Link from "next/link";
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
const API_BASE_URL = process.env.apiUrl;
const ListTable = (_tickets) => {
    
 let ticket = _tickets
 let ticketSlaves = ticket && ticket.ticket_slave ? ticket.ticket_slave: []
 console.log("Parent Ticket:",ticket)
 console.log("Child Tickets:",ticketSlaves)
    const { t } = useTranslation();
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
        console.log("<--START: ",dates1.startDate._d)
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
      function GetTicketNumber(e) {
        
            console.log(e.target.value,"###")
            if (e.target.value) {
                fetch(`${API_BASE_URL}/ticket?member_id=4&ticket_no=`+e.target.value)

                // fetch(`http://api.kk-lotto.com:8080/api/ticket/?member_id=4`)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        if (data.success == true) {
                            setTicketList(data.data)
                        }
                        console.log("GET TICKET-->-->",ticketList.data)
                    })
                setstartRef(e.target.value);
            }
            console.log("STARTREF-->",setstartRef)
        }
        
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
    return (
        <>
        
        <div class="clearfix curved-card">
                    <div class="row">
                    <div class="col-md-3 col-12">
                    <div class="form-group">
                        <label class="fw-bold mb-2">{t('Select_Date_Range')}</label>
                        {/* <div id="reportrange" class="daterangepickerstyle">
                            <i class="fa-regular fa-calendar me-2"></i>
                            <span></span> <i class="fa fa-caret-down ms-auto"></i>
                        </div> */}
                        

                      
                        
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
                        <input type="text" onChange={(event) =>
                                            GetTicketNumber(event)} class="form-control-custom-big" name="transationid"/>
                    </div>
                    </div>
                    {/* <div class="col-md-2 col-6">
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
                    </div> */}

                    <div class="col-md-3">
                    <div class="form-group">
                        <label class="d-block">&nbsp;</label>
                        <button type="button" class="btn-custom-curve2 w-auto">{t('Search')}</button>
                        <button type="button" class="btn-custom-curve1">{t('Reset')}</button>
                    </div>

                    </div>
                    </div>
                    </div>
        <div class="table-responsive my-3">
                <table class="table small table-bordered">
                    <thead>
                        <tr>
                            <th>{t('Number')}</th>
                            <th class="text-start">Ticket Number</th>
                            <th class="text-start">Bet Number</th>
                            <th class="text-center">Betting Time</th>
                            <th class="text-center">Draw Date</th>
                            <th class="text-center">Betting Type</th>
                            {/* <th class="text-center">{t('Company')}</th> */}
                            <th class="text-end">Gross Amount</th>
                            <th class="text-end">{t('Commission')}</th>
                            <th class="text-end">Net Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {ticketList.length ? 
                            <tr>
                                <td>{ticketList.id}</td>
                                <td class="text-start"><Link href="/TicketDetails"><a >{ticketList.ticket_no}</a></Link></td>
                                <td class="text-start">{ticketList.bet_number}</td>
                                <td class="text-center" >{ticketList.created_at}</td>
                                <td class="text-center">{ticketList.betting_date}</td>
                                <td class="text-center">{ticketList.bet_type}</td>
                                {/* <td class="text-center">{gameName}</td> */}
                                <td class="text-end">{ticketList.total_amount}</td>
                                <td class="text-end">{ticketList.rebate_amount}</td>
                                <td class="text-end">{ticketList.net_amount}</td>
                            </tr>
                            :
                            <tr>
                                <td>{ticket._tickets.id}</td>
                                <td class="text-start"><Link href="/TicketDetails"><a >{ticket._tickets.ticket_no}</a></Link></td>
                                <td class="text-start">{ticket._tickets.bet_number}</td>
                                <td class="text-center" >{ticket._tickets.created_at}</td>
                                <td class="text-center">{ticket._tickets.betting_date}</td>
                                <td class="text-center">{ticket._tickets.bet_type}</td>
                                <td class="text-end">{ticket._tickets.total_amount}</td>
                                <td class="text-end">{ticket._tickets.rebate_amount}</td>
                                <td class="text-end">{ticket._tickets.net_amount}</td>
                            </tr>}

                             
                       
                           
                            
                    </tbody>
                    
                </table>
            </div>
        
               
           
           
       
             
      
                            
               
        </>
    )
}
export default ListTable;