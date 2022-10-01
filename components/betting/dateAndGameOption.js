import React, { useState, useEffect } from 'react';


const DateAndGameOption = ({item,_bettingInitData,_setBettingInitData}) => {


    console.log('_bettingInitData:',_bettingInitData);
    
    const [initData, setInitData] = useState(item);
    const [active, setActive] = useState(false);


    const selectUnSelectDate =(getValue)=>{ // selectUnSelectDate

        console.log('getValue: ', getValue)

        const newState = Object.assign(initData,{"selected": getValue});

        console.log('newstate selected: ', newState.selected)

    //    setInitData(newState)
       _setBettingInitData(newState)
      }

    useEffect(() => {
        // Update the document title using the browser API
      console.log('11111111');
     
    //   setInitData(newState);

      },);
    

    return(
        <div className="col-md-3 col-sm-6" onChange={() => selectUnSelectDate(!initData.selected)}>
        <div className= {`${initData.selected ? "selected":"unselected"} date-lottery-selector`}>
            <div className="d-flex align-items-center">
                <div className="round">
                    <input type="checkbox" id={initData.id} checked={initData.selected}/>
                    <label htmlFor={initData.id}></label>
                </div>
                <div className="day-n-date">
                    {initData.selected ? 'true':'false'}
                    <p className="fw-bold mb-0">Tuesday</p>
                    <p className="mb-0">{initData.date}</p>
                </div>
            </div>
            <div className="d-flex">
                <div className="round"></div>
                <div className="select-gp">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <span className="outer-circle-gp" title="Select">
                                <span className="inner-circle-gp">
                                    <img className="img-fluid" src="assets/images/icons/damacai.png"/>
                                </span>
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span className="outer-circle-gp" title="Select">
                                <span className="inner-circle-gp">
                                    <img className="img-fluid" src="assets/images/icons/magnum.png"/>
                                </span>
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span className="outer-circle-gp" title="Select">
                                <span className="inner-circle-gp">
                                    <img className="img-fluid" src="assets/images/icons/toto.png"/>
                                </span>
                            </span>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
    )

}
export default DateAndGameOption;