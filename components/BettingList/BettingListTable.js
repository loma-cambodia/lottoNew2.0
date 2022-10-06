import Marquee from "react-fast-marquee";
import Link from "next/link";

import React from 'react';
import { useTranslation } from "react-i18next";
import ListFilter from "./BettingListFilter";
const ListTable = () => {
    const { t } = useTranslation();
    return (
        <>
       <section class="page-content custom-padding">
    <div class="container">
        <ListFilter/>
            <div class="table-responsive my-3">
                <table class="table small table-bordered">
                    <thead>
                        <tr>
                            <th>{t('No')}.</th>
                            <th class="text-start">Ticket No</th>
                            <th class="text-start">Bet No.</th>
                            <th class="text-center">{t('Date')}</th>
                            <th class="text-center">{t('Game')}</th>
                            <th class="text-center">Betting Type</th>
                            <th class="text-center">{t('Company')}</th>
                            <th class="text-end">Gross Amt.</th>
                            <th class="text-end">{t('Commission')}</th>
                            <th class="text-end">Net Amt.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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
                        </tr>
                        <tr>
                            <td>4</td>
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
                            <td>5</td>
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
                            <td>6</td>
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
                            <td>7</td>
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
                            <td>8</td>
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
                            <td>9</td>
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
                            <td>10</td>
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
                            <td>11</td>
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
                            <td>12</td>
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
                            <td>13</td>
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
        </>
    )
}
export default ListTable;