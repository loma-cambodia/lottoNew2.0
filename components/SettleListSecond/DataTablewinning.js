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
                                  
     const customStyles = {
        rows: {
            style: {
                minWidth: 'fit-content',
                paddingTop: '10px',
                paddingBottom: '10px',
            },
        },
        headCells: {
            style: {
                paddingLeft: '4px', // override the cell padding for head cells
                paddingRight: '4px',
                maxWidth: 'fit-content',

            },
        },
        cells: {
            style: {
                paddingLeft: '4px', // override the cell padding for data cells
                paddingRight: '4px',
                maxWidth: 'fit-content',
            },
        },
    };
    const columns = [
        {
            name: 'No',
            cell: (row, index) => index+1,
            sortable: true
        },
        {
            name: t('Detail_Number'),
            selector: row => row.child_ticket_no,
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
            selector: row=>row.game_type,
            sortable: true,
        },
        {
            name: t('Company'),
            sortable: true,
            selector:row => row.game.name ? row.game.name : "",
            cell:row => row.game.name ? row.game.name : ""
        },
        {
            name: t('Bet_Number'),
            selector: row=>row.lottery_number,
            sortable: true,
        },
        {
        name: t('Big'),
        selector: row=>row.big_bet_amount,
        sortable: true,
        },
        {
        name: t('Small_Bet'),
        selector: row=>row.small_bet_amount,
        sortable: true,
        },
        {
        name: "3A",
        selector: row=>row.three_a_amount,
        sortable: true
        },
        {
        name: "3C",
        selector: row=>row.three_c_amount,
        sortable: true,
        },
        {
        name: t('Total'),
        selector: row=>row.bet_amount,
        sortable: true,
        },
        {
            name: t('Rebate'),
            selector: row=>row.rebate_amount,
            sortable: true,

        },
        {
            name: t('Net'),
            selector: row => row.bet_net_amount.toFixed(2),
            sortable: true,

        },
        {
            name: t('winning'),
            selector: row => row.winning_amount.toFixed(2),
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
    />
  );
};

export default Table;
