import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import { useTranslation } from "react-i18next";

import moment from 'moment';

const Table = props => {
    const { t } = useTranslation();


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
                                  
    const customStyles ={
        rows: {
            style: {
                fontSize: '14px',
            },
        },
    }
    const columns = [
        {
            name: 'No',
            cell: (row, index) => index+1,
        },
        {
            name: t('Detail_Number'),
            selector: "child_ticket_no",
            sortable: true
        },
        {
            name: t('Betting_Time'),
            sortable: true,
            cell:row => moment(row.created_at).format('DD-MM-YYYY HH:mm:ss')
        },
        {
            name: t('Draw_Date'),
            sortable: true,
            cell:row => moment(row.ticket.draw_date).format('DD-MM-YYYY')
        },
        {
            name: t('game'),
            selector: "game_type",
            sortable: true,
        },
        {
            name: t('Company'),
            sortable: true,
            cell:row => row.game.name ? row.game.name : ""
        },
        {
            name: t('Bet_Number'),
            selector: "lottery_number",
            sortable: true,
        },
        {
        name: t('Big'),
        selector: "big_bet_amount",
        sortable: true,
        },
        {
        name: t('Small_Bet'),
        selector: "small_bet_amount",
        sortable: true,
        },
        {
        name: "3A",
        selector: "three_a_amount",
        sortable: true
        },
        {
        name: "3C",
        selector: "three_c_amount",
        sortable: true,
        },
        {
        name: t('Total'),
        selector: "bet_amount",
        sortable: true,
        },
        {
            name: t('Rebate'),
            selector: "rebate_amount",
            sortable: true,

        },
        {
            name: t('Net'),
            selector: "bet_net_amount",
            sortable: true,

        },
        {
            name: t('winning'),
            selector: "winning_amount",
            sortable: true,

        },
        {
            name: t('Winning_Loss'),
            selector: row => row.winning_amount - row.bet_net_amount,
            sortable: true,
            conditionalCellStyles: [
                {
                    when: row => row.winning_amount - row.bet_net_amount > 0,
                    style: {color:"green",fontWeight:"bold"}
                },
                {
                    when: row => row.winning_amount - row.bet_net_amount <= 0,
                    style: {color:"red",fontWeight:"bold"},
                },
                                    ],

        }
    ];
  const paginationComponentOptions = {
    // paginationPerPage: 20,
    noRowsPerPage: true,
    rangeSeparatorText: '/',
};
  return (
    <DataTable
        paginationPerPage = {20}
      columns={columns}
      data={props.data}
    //   defaultSortField="name"
      striped
      pagination
      paginationComponentOptions={paginationComponentOptions}
      customStyles={customStyles}  
      dense  
    />
  );
};

export default Table;
