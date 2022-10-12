import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import { useDispatch, useSelector, } from "react-redux";
import { useTranslation } from "react-i18next";
import styles from '../styles/Home.module.css'
import WinngListBanner from '../components/Winning/Banner';
import ListTable from '../components/BettingList/BettingListTable';
import {getTicketData,searchTicketData} from '../store/actions/reportActions';
import {getWinningData} from '../store/actions/winninglistActions';

import ReactPaginate from 'react-paginate';

import Filter from "../components/Winning/filter";


export default function WinningList({datauser}) {

  const [pageCount, setPageCount] = useState(0);

// console.log("TICKETLIST",datauser);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  console.log('WinningList:auth:',auth);

  const [active, setActive] = useState(false);
  const [winningList, setWinningList] = useState([]);


  const getWinningList = () =>{
    console.log('auth in getwinninglist:',auth.auth.id);

    dispatch(getWinningData(auth && auth.auth && auth.auth.id ? parseInt(auth.auth.id): 0 , response =>{
      // console.log('inside dispatch dataSubmit date:   ',dataSubmit);

        if(response.statusCode  == 201  || response.statusCode  == 200 ){

        if(response.statusCode == 200){

            console.log('results response in winning page:',response.data.data.data);
            setWinningList(response.data.data.data)
            // setWinningList([1,2,3,4,5])
            
        }else {
            console.log(response.data.messages);

        }
        }else {
        console.log('response:',response);
        // setIsLoading(false);
    }
}))
}

       useEffect(() => {
        getWinningList();
      },[auth]);


      useEffect(() => {
        dispatch({
          type: "GET_LOGIN_DETAILS",
          payload: datauser && datauser.user && datauser.user.data ? datauser.user.data : {}
      })
      }, [datauser])
      

      
      const state = useSelector(state => state);
      console.log("state after getwinningdata: ", state)
      
      
      

        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % Pkglottery1.length;
          console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
  
          );
          setItemOffset(newOffset);
        };
  return (
    <>
      <Head>
          <title>{t('Lotteries_tittle')}</title>
          <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet"/>
          <link href="assets/css/style.css" rel="stylesheet"/>
          <link href="assets/css/owl.carousel.css" rel="stylesheet"/>
          <link href="assets/css/owl.theme.default.css" rel="stylesheet"/>
          <link href="assets/text-fonts/poppins/poppins-font.css" rel="stylesheet" />
      </Head>
      <Header datauser={datauser}/>
      <WinngListBanner/>
      <section class="page-content custom-padding">
        <div class="container">
        <Filter/>
            <div class="table-responsive my-3">
                <table class="table small table-bordered">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th class="text-start">Detail Number</th>
                            <th class="text-start">Betting Time</th>
                            <th class="text-center">Draw Date</th>
                            <th class="text-center">Game</th>
                            <th class="text-center">Betting Type</th>
                            <th class="text-center">Company</th>
                            <th class="text-end">Bet Number</th>
                            <th class="text-end">Big</th>
                            <th class="text-end">3A</th>
                            <th class="text-end">3C</th>
                            <th class="text-end">Odds</th>
                            <th class="text-end">Rebate</th>
                            <th class="text-end">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                   { console.log("map is :", winningList)}

                    {winningList ? winningList.map((item)=>(
                      <tr>
                            <td >{item.id}</td>
                            <td class="text-start" ><a href="href">{item.child_ticket_no}</a></td>
                            <td class="text-start" >{item.betting_date}</td>
                            <td class="text-center" >{item.ticket.draw_date}</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                            <td class="text-end">90.07</td>
                            <td class="text-end">90.07</td>
                            <td class="text-end">90.07</td>
                            <td class="text-end">90.07</td>
                      </tr>
                    )) :
                    <span>Nothing</span>
                  }
                   {/* <tr>
                            <td rowspan="2">1</td>
                            <td class="text-start" rowspan="2"><a href="href">BRN0000001</a></td>
                            <td class="text-start" rowspan="2">1234</td>
                            <td class="text-center" rowspan="2">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                            <td class="text-end">90.07</td>
                            <td class="text-end">90.07</td>
                            <td class="text-end">90.07</td>
                            <td class="text-end">90.07</td>
                      </tr> */}
                        {/* <tr>
                            <td rowspan="2">1</td>
                            <td class="text-start" rowspan="2"><a href="href">BRN0000001</a></td>
                            <td class="text-start" rowspan="2">1234</td>
                            <td class="text-center" rowspan="2">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            
                            <td class="text-center">3D</td>
                            <td class="text-center">R</td>
                            <td class="text-center">B</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        
                        <tr>
                            <td>2</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td class="text-start">BRN0000001</td>
                            <td class="text-start">1234</td>
                            <td class="text-center">2022-09-21<br/>11:36:45</td>
                            <td class="text-center">3D</td>
                            <td class="text-center">B</td>
                            <td class="text-center">Magnum</td>
                            <td class="text-end">100.08</td>
                            <td class="text-end">10%</td>
                            <td class="text-end">90.07</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        <div class="clearfix d-flex align-items-center justify-content-center">
            <div class="pagination:container">
                <div class="pagination:number arrow">
                  <svg width="18" height="18">
                    {/* <use xlink:href="#left" /> */}
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
                    {/* <use xlink:href="#right" /> */}
                  </svg>
                </div>
              </div>
              
              <svg class="hide">
                <symbol id="left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></symbol>
                <symbol id="right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></symbol>
              </svg>
        </div>
        </div>
    </section>
      
      <Footer/>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.bundle.js"></script>
        <script src="assets/js/owl.carousel.js"></script>
        <script src="assets/js/main.js"></script>
        
      {/*--Footer--*/}
    </>
  )
}
