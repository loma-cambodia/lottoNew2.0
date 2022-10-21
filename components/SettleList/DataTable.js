import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import { useTranslation } from "react-i18next";


const Table = props => {
    const { t } = useTranslation();

                                
  const columns = [
    {
        name: t('No'),
        selector: "id",
        sortable: true,
        style: {
            backgroundColor: 'green',
        },
      },
      {
        name: t('Detail_Number'),
        selector: "id",
        sortable: true,
      },
      {
        name: t('Betting_Time'),
        selector: "id",
        sortable: true,
      },
      {
        name: t('game'),
        selector: "id",
        sortable: true,
      },
      {
        name: t('Company'),
        selector: "id",
        sortable: true,
      },
      {
        name: t('Bet_Number'),
        selector: "id",
        sortable: true,
      },
    {
      name: t('Big'),
      selector: "name",
      sortable: true,
    },
    {
      name: t('Small_Bet'),
      selector: "email",
      sortable: true,
      cell: row =>
      <span  style={{color: '#0a58ca',cursor: 'pointer'}} onClick={() => props._childShowTable(row.id,'forDesk','settledList')}>
      {row.email}
  </span>
    },
    {
      name: "3A",
      selector: "website",
      sortable: true
    },
    {
      name: "3C",
      selector: "company.name",
      sortable: true,
    },
    {
      name: t('Total'),
      selector: row => row.address.city,
      sortable: true,
    },
    {
        name: t('Rebate'),
        selector: row => row.id + row.address.city,
        sortable: true,

    },
    {
        name: t('Net'),
        selector: row => row.id + row.address.city,
        sortable: true,

    },
    {
        name: t('winning'),
        selector: row => row.id + row.address.city,
        sortable: true,

    },
    {
        name: t('Winning_Loss'),
        selector: row => row.id + row.address.city,
        sortable: true,
        conditionalCellStyles: [
            {
                when: row => row.address.city < 300,
                style: {color:"green",fontWeight:"bold"}
            },
            {
                when: row => row.address.city >= 300 && row.address.city < 400,
                style: {color:"red",fontWeight:"bold"},
            },
            {
                when: row => row.address.city >= 400,
                style: {color:"black",fontWeight:"bold"},
            },
                                ],

    }
  ];
  const paginationComponentOptions = {
    noRowsPerPage: true,
    rangeSeparatorText: '/',
};
  return (
    <DataTable
      columns={columns}
      data={props.data}
      defaultSortField="name"
      striped
      pagination
      paginationComponentOptions={paginationComponentOptions}    
    />
  );
};

export default Table;
