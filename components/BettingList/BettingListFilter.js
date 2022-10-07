
import Marquee from "react-fast-marquee";
import Link from "next/link";

import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import React, { useState, useEffect, useRef } from 'react';

import { useTranslation } from "react-i18next";
const ListFilter = () => {
    const { t } = useTranslation();
    const c = new Date();
    const msdate = formatDate(c);
    const medate = formatDate(c);
    const keyRef = useRef();
    const [dates1, setDates1] = useState({
      startDate: moment(msdate),
      endDate: moment(medate),
    });

    
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

    return (
        <>
            <div class="clearfix curved-card">
                    <div class="row">
                    <div class="col-md-3 col-12">
                    <div class="form-group">
                        <label class="fw-bold mb-2">{t('Select_Date_Range')}</label>
                        {/* <div id="reportrange" class="daterangepickerstyle">
                            <i class="fa-regular fa-calendar me-2"></i>
                            <span></span> <i class="fa fa-caret-down ms-auto"></i>
                        </div> */}
                        

                      
                        
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
                        <input type="text" class="form-control-custom-big" name="transationid"/>
                    </div>
                    </div>
                    {/* <div class="col-md-2 col-6">
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
                    </div> */}

                    <div class="col-md-3">
                    <div class="form-group">
                        <label class="d-block">&nbsp;</label>
                        <button type="button" class="btn-custom-curve2 w-auto">{t('Search')}</button>
                        <button type="button" class="btn-custom-curve1">{t('Reset')}</button>
                    </div>

                    </div>
                    </div>
                    </div>

        </>
    )
}
export default ListFilter;