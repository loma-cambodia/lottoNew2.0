import Marquee from "react-fast-marquee";
import Link from "next/link";

import React from 'react';
import { useTranslation } from "react-i18next";
import ListFilter from "./BettingListFilter";
const ListTable = (_tickets) => {
    
 let ticket = _tickets._tickets
 let ticketSlaves = ticket && ticket.ticket_slave ? ticket.ticket_slave: []
 console.log("STATE_TICKETS:",ticket)
 console.log("ticketSlaves:",ticketSlaves)
    const { t } = useTranslation();
    return (
        <>
        
       
        {ticketSlaves && ticketSlaves.map(item => {
            let gameName = '';
            if(item.game_play_id == 1){
                gameName = 'Magnum';
            } else  if(item.game_play_id == 2){
                gameName = 'To To';
            }
            if(item.game_play_id == 3){
                gameName = 'Da Ma Cai';
            }
            return (
                <tr>
                <td>{item.id}</td>
                <td class="text-start"><a href="href">{ticket.ticket_no}</a></td>
                <td class="text-start">{ticket.bet_number}</td>
                <td class="text-center" >{ticket.created_at}</td>
                <td class="text-center">{item.game_type}</td>
                <td class="text-center">{ticket.bet_type}</td>
                <td class="text-center">{gameName}</td>
                <td class="text-end">{ticket.total_amount}</td>
                <td class="text-end">{item.rebate_percentage}%</td>
                <td class="text-end">{ticket.net_amount}</td>
                </tr>
           )
           
        })}
             
      
                            
               
        </>
    )
}
export default ListTable;