import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import { useTranslation } from "react-i18next";


const Table = props => {
    const { t } = useTranslation();

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Website",
      selector: "website",
      sortable: true
    },
    {
      name: "Company",
      selector: "company.name",
      sortable: true,
    },
    {
      name: t('Bet_Number'),
      selector: row => row.address.city,
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
    },
    {
        name: "Total",
        selector: row => row.id + row.address.city,
        sortable: true,

    }
  ];
  const paginationComponentOptions = {
    rangeSeparatorText: 'de',
    noRowsPerPage: true,
};
  return (
    <DataTable
      columns={columns}
      data={props.data}
      defaultSortField="id"
      striped
      pagination
      paginationComponentOptions={paginationComponentOptions}    
    />
  );
};

export default Table;
