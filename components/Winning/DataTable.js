import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import { useTranslation } from "react-i18next";

{/* <td>{currentPage*itemsPerPage + (id + 1)}</td>
                              <td className="text-start"><a >{item.child_ticket_no}</a></td>
                              <td className="text-center" >{moment(item.created_at).format('DD-MM-YYYY HH:mm:ss')}</td>
                              <td className="text-center">{moment(item.ticket.betting_date).format('DD-MM-YYYY')}</td>
                              <td className="text-start">{item.ticket.draw_number}</td>
                              
                              <td className="text-center">{item.lottery_number}</td>
                              <td className="text-start">{item.game && item.game.name ? item.game.name : ""}</td>

                              <td className="text-center">{item.prize_type}</td>


                              <td className="text-end">{MoneyFormatDisplay(item.big_bet_amount,1)}</td>
                              <td className="text-end">{MoneyFormatDisplay(item.small_bet_amount,1)}</td>
                              <td className="text-end">{MoneyFormatDisplay(item.three_a_amount,1)}</td>
                              <td className="text-end">{MoneyFormatDisplay(item.three_c_amount,1)}</td>
                              <td className="text-center">
                                {getOddsBig(item.prize_type,item.game_type,item)}
                                </td>
                                
                              <td className="text-center">{getOddsSmall(item.prize_type,item.game_type,item)}</td>

                              <td className="text-end">{MoneyFormatDisplay(item.bet_amount,1)}</td>
                              <td className="text-end">{MoneyFormatDisplay(item.rebate_amount,1)}</td>
                              <td className="text-end">{MoneyFormatDisplay(item.bet_net_amount,1)}</td>

                              <td className="text-end"><b>{MoneyFormatDisplay(item.winning_amount,1)}</b></td>
                              <td className={`${(item.winning_amount - item.bet_net_amount) > 0 ? "winningAmount":""} text-end`}>{MoneyFormatDisplay(item.winning_amount - item.bet_net_amount ,1)}</td> */}
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
