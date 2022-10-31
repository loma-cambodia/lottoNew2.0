
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { subDays, addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function Home() {
  const [startDate, setStartDate] = useState(new Date("01/01/2016"));
  const [endDate, setEndDate] = useState(new Date());
  const getYear = (date) => {
    return moment(date).year();
  }
  const range = (startDate,toDate) => {
    let rangeArray = []
    let dif = toDate - startDate;
    for (let index = 0; index < dif; index++) {
        rangeArray.push(startDate + index);
    }
    return rangeArray;
  }
  const getMonth  = (date) =>{
    return moment(date).month()
  }
  const sYears = range(2016, getYear(new Date())+1);
  const eYears = range(moment(startDate).year(), getYear(new Date())+1);
  const sMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]; 
  const eMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (<>
     {/* <style jsx>{`
        .react-datepicker__day_sushil {
            position: relative;
            pointer-events: auto !important;
        }
      `}</style> */}
      
        <DatePicker 
            dayClassName={(date) =>
                "react-datepicker__day_sushil"
            }
        renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
        }) => (
            <div
            style={{
                // margin: 10,
                display: "flex",
                justifyContent: "center",
            }}
            >
            <button className="btn btn-primary" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
            </button>
            <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
            >
                {sYears.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
                ))}
            </select>

            <select
                value={sMonths[getMonth(date)]}
                onChange={({ target: { value } }) =>
                changeMonth(sMonths.indexOf(value))
                }
            >
                {sMonths.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
                ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
            </button>
            </div>
        )}
        value={moment(startDate).format("DD/MM/YYYY")}
        selected={startDate}
            onChange={(date) => setStartDate(date)}
        />
      
        <DatePicker 
            dayClassName={(date) =>
                "react-datepicker__day_sushil"
            }
        renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
        }) => (
            <div
            style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
            }}
            >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
            </button>
            <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
            >
                {eYears.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
                ))}
            </select>

            <select
                value={eMonths[getMonth(date)]}
                onChange={({ target: { value } }) =>
                changeMonth(eMonths.indexOf(value))
                }
            >
                {eMonths.map((option ,id) => (<>
                    <option key={option} value={option}>
                            {option}
                    </option>
                {/* {
                    id <= moment(startDate).month() ? 
                    <>
                        <option key={option} value={option}>
                            {option}
                        </option>
                    </> : <>
                        <option key={option} value={option}>
                            {option}
                        </option>
                    </>
                } */}
                </>
                ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
            </button>
            </div>
        )}
        excludeDates={[addDays(new Date(), 1)]}
        value={moment(endDate).format("DD/MM/YYYY")}
        selected={endDate}
            onChange={(date) => setEndDate(date)}
        />
    </>
  );
};
