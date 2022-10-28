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
                                 
            //  Internally, customStyles will deep merges your customStyles with the default styling.
        const customStyles = {
            rows: {
                style: {
                    minHeight: '72px', // override the row height
                },
            },
            headCells: {
                style: {
                    paddingLeft: '8px', // override the cell padding for head cells
                    paddingRight: '8px',
                },
            },
            cells: {
                style: {
                    paddingLeft: '8px', // override the cell padding for data cells
                    paddingRight: '8px',
                },
            },
        };
    const columns = [
        {
            name: t('No'),
            cell: (row, index) => index+1,
        },
        {
            name: t('Ticket_No'),
            selector: row => row.Ticket_No,
            sortable: true,
            cell: row =>
                    <span  style={{color: '#0a58ca',cursor: 'pointer'}} onClick={() => props._childShowTable(row.id,'forDesk','settledList')}>
                    {row.Ticket_No}
                </span>
        },
        {
            name: t('Betting_Time'),
            selector:row=> moment(row.draw_date).format('DD-MM-YYYY'),
            sortable: true,
            // cell:row =>row.created_at
        },
        {
            name: t('Draw_Date'),
            sortable: true,
            cell:row =>moment(row.created_at).format('DD-MM-YYYY HH:mm:ss')
        },
        {
            name: t('Draw_Id'),
            sortable: true,
            cell:row =>row.draw_number
        },
        {
            name: t('Bet_Number'),
            selector: row => row.Bet_Number,
            sortable: true,
        },
        {
            name: t('Company'),
            sortable: true,
            cell:row => row.Company
        },
        {
        name: t('Total'),
        selector: row => row.Total,
        sortable: true,
        },
        {
            name: t('Rebate'),
            selector: row => row.Rebate,
            sortable: true,

        },
        {
            name: t('Net'),
            selector: row => row.Net,
            sortable: true,

        },
        {
            name: t('winning'),
            selector: row => row.winning,
            sortable: true,

        },
        {
            name: t('Winning_Loss'),
            selector: row => row.winning_amount + row.bet_net_amount,
            sortable: true,
            conditionalCellStyles: [
                {
                    when: row => row.winning_amount + row.bet_net_amount > 0,
                    style: {color:"green",fontWeight:"bold"}
                },
                {
                    when: row => row.winning_amount + row.bet_net_amount <= 0,
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
        paginationPerPage = {5}
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
