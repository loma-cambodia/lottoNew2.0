import React, { useState, useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";
import Link from "next/link";
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { useTranslation } from "react-i18next";
import {filterLotteryDetailsList} from '../../store/actions/reportActions';
import { useDispatch, useSelector, } from "react-redux";
import ReactPaginate from 'react-paginate';
import Select from 'react-select';

const API_BASE_URL = process.env.apiUrl;
const ListTable = ({_tickets,_ticketsChild, _GetTicketNumber,_auth,_resetTable}) => {
    
    let ticket = _tickets;
    let auth = _auth;
    const items = _tickets;

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


      const itemsPerPage  = 10;
 
      const [currentItems, setCurrentItems] = useState(null);
      const [pageCount, setPageCount] = useState(0);
      const [itemOffset, setItemOffset] = useState(0);
      const [seletedPage, setSeletedPage] = useState(1);
      const [fromDate, setFromDate] = useState(new Date('2022-10-12'));
      const [toDate, setToDate] = useState(new Date());
      const [detailNo, setDetailNo] = useState('');
      const [filterGamesName, setFilterGamesName] = useState({ value: '', label: 'All' });
      const [filterGameType, setFilterGameType] = useState({ value: '', label: 'All' });
      const [selectedticketId, setSelectedticketId] = useState('');




      useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
      }, [itemOffset, itemsPerPage,_tickets]);



    const handleApply1 = (event, picker) => {
        setDates1({
          startDate: picker.startDate,
          endDate: picker.endDate,
        });
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
      const [childDataTickets, setChildDataTickets] = useState([]);
      const [startRef, setstartRef] = useState();
      
      const [searchAction, setSearchAction] = useState(true);

      const [parentAction, setParentAction] = useState(true);

      const [dateRange, setDateRange] = useState('10/10/2022-10/10/2022');

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

    const state = useSelector(state => state);

    const childShowTable = (ticketId) =>{

     //   detailNo
      //  filterGamesName
       // filterGameType

       setSelectedticketId(ticketId);

       let params = {ticketId};

       params.child_ticket_no = detailNo;
       params.game_play_id = filterGamesName.value;
       params.game_type = filterGameType.value;

       console.log('params:',params);
       //return false;
       
    
        const state12 = dispatch(filterLotteryDetailsList(params));
        let ticketsssss = state && state.tickets && state.tickets.tickets ? state.tickets.tickets : [];
        setChildDataTickets(ticketsssss);
        setParentAction(false);
        setSearchAction(false);
    }

    
    const backButton = () =>{
        setParentAction(true);
        setSearchAction(true);
        setDetailNo('');
   setFilterGamesName({ value: '', label: 'All' });
    }


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
        setFromDate(picker.startDate._d.toISOString());
        setToDate(picker.endDate._d.toISOString());
      };


      const resetFilter = () => {
        const d = new Date();
        setFromDate(d);
        setToDate(d);
        setTicketNo('');
        // location.reload();
        _resetTable()
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
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const childDataReset = () => {
    childShowTable(selectedticketId)
   setDetailNo('');
   setFilterGamesName({ value: '', label: 'All' });
//    setTimeout(childShowTable(selectedticketId), 5000);
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
                <table class="table small table-bordered">
                    <thead>
                        <tr>
                            <th>{t('No')}</th>
                            <th class="text-center">{t('Ticket_No')}</th>
                            <th class="text-center">{t('Betting_Time')}</th>
                            <th class="text-center">{t('Draw_Date')}</th>
                            <th class="text-center">{t('Draw_Id')}</th>
                            <th class="text-center">{t('Bet_Number')}</th>
                            <th class="text-center">{t('Company')}</th>
                            <th class="text-end">{t('Total')}</th>
                            <th class="text-end">{t('Rebate')}</th>
                            <th class="text-end">{t('Net')}</th>
                            <th class="text-center">{t('winning')}</th>
                            <th class="text-center">{t('Winning_Loss')}</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                    {currentItems && currentItems.map((item,i) =>(
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td class="text-center" ><span  style={{color: '#0a58ca',cursor: 'pointer'}} onClick={() => childShowTable(item.id)} >{item.ticket_no}</span></td>
                            <td class="text-center" >{moment(item.created_at).format('YYYY-DD-MM h:mm:ss A')}</td>
                            <td class="text-center">{item.draw_date}</td>
                            <td class="text-center">12345</td>
                            <td class="text-center">{item.bet_number}</td>
                            <td class="text-center">
                            {
                               item.games && item.games.map((item,i) =>(
                                  item.abbreviation
                               )
                               ) 
                            }
                          </td>
                            <td class="text-end">{MoneyFormatDisplay(item.total_amount, 1)}</td>
                            <td class="text-end">{MoneyFormatDisplay(item.rebate_amount, 1)}</td>
                            <td class="text-end">{MoneyFormatDisplay(item.bet_net_amount, 1)}</td>
                            <td class="text-end"  style={winParent(item.winning_amount)}>{MoneyFormatDisplay(item.winning_amount,1)}</td>
                            <td class="text-center"  style={winParent(winLose(item.winning_amount,item.bet_net_amount))}>{winLose(item.winning_amount,item.bet_net_amount)}</td>

                            
                            
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div class="clearfix d-flex align-items-center justify-content-center">
              { pageCount > 1 ?
                <ReactPaginate
                forcePage={pageCount}
                breakLabel="..."
                nextLabel="Next >" 
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< Previous"
                renderOnZeroPageCount={null}
                className="pagination"
                pageLinkClassName="pagination"
                pageStartIndex='1'
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
                            <th class="text-center">{t('Big')}</th>
                            <th class="text-center">{t('Small_Bet')}</th>
                            <th class="text-center">3A</th>
                            <th class="text-center">3C</th>
                            <th class="text-end">{t('Total')}</th>
                            <th class="text-end">{t('Rebate')}</th>
                            <th class="text-end">{t('Net')}</th>
                            {/* <th class="text-end">{t('Odds')}</th> */}
                            <th class="text-center">{t('winning')}</th>
                            <th class="text-center">{t('Winning_Loss')}</th>
                        </tr>
                    </thead>
                    <tbody>
                
                        {tickets.map((item,id) =>(
                            <tr key={id}>
                                <td>{id+1}</td>
                                <td class="text-start"><a >{item.child_ticket_no}</a></td>
                                <td class="text-start" >{moment(item.created_at).format('YYYY-DD-MM h:mm:ss A')}</td>
                                <td class="text-center">{item.ticket.draw_date}</td>
                                <td class="text-center">{item.game_type}</td>
                                <td class="text-center">{item.game && item.game.name ? item.game.name : ""}</td>
                                <td class="text-center">{item.lottery_number}</td>

                                <td class="text-center">{MoneyFormatDisplay(item.big_bet_amount,1)}</td>
                                <td class="text-center">{MoneyFormatDisplay(item.small_bet_amount,1)}</td>
                                <td class="text-center">{MoneyFormatDisplay(item.three_a_amount,1)}</td>
                                <td class="text-center">{MoneyFormatDisplay(item.three_c_amount,1)}</td>
                                <td class="text-center">{MoneyFormatDisplay(item.bet_amount,1)}</td>
                                <td class="text-center">{MoneyFormatDisplay(item.rebate_amount,1)}</td>
                                <td class="text-center">{MoneyFormatDisplay(item.bet_net_amount,1)}</td>
                                {/* <td class="text-end">0.00</td> */}
                               
                                <td class="text-end"  style={winChild(item.winning_amount)}>{MoneyFormatDisplay(item.winning_amount,1)}</td>
                            <td class="text-center"  style={winChild(winLoseChild(item.winning_amount,item.bet_net_amount))}>{winLoseChild(item.winning_amount,item.bet_net_amount)}</td>
                                
                               
                            </tr>
                        ))}

                    {tickets.length == 0 ?(
                            <tr key={id}>
                                <td colSpan={14}>{id+1}</td>
                            </tr>
                        ): null}
                    </tbody>
                </table>
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
                            <button type="button" class="btn-custom-curve2 w-auto m-2" onClick={()=>searchGetListonFilter()} >{t('Search')}</button>
                            <button type="button" class="btn-custom-curve1" onClick={()=>resetFilter()}>{t('Reset')}</button>
                        </div>
                    </div>
                   
                </div>
            </div>
    ) :
    (<div class="clearfix curved-card">
    <div class="row">
       
        <div class="col-md-2 col-6">
            <div class="form-group">
                <label for="transactionid" class="fw-bold mb-2">{t('Detail_Number')}</label>
                <input type="text" onChange={(e)=>{ 
                                 setDetailNo(e.target.value)}}  class="form-control-custom-big" value={detailNo} name="transationid"/>
            </div>
        </div>
        
        <div class="col-md-2 col-6">
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
                     defaultValue = { { value: '', label: 'All' }} 
                     value = {filterGamesName}
                     onChange={value => setFilterGamesName(value)}
                     />
            </div>
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label class="d-block">&nbsp;</label>
                <button type="button" class="btn-custom-curve2 w-auto m-2" onClick = {() => childShowTable(selectedticketId)}>{t('Search')}</button>
                <button type="button" class="btn-custom-curve1" onClick = {() => childDataReset()}>{t('Reset')}</button>
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