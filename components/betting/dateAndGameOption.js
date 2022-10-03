import React, { useState, useEffect } from 'react';


const DateAndGameOption = ({item,_dateAndGameOptionData,_bettingInitData,_setBettingInitData}) => {

  
    const [initData, setInitData] = useState(item);
    const [active, setActive] = useState(false);


    const selectUnSelectDate =(getValue)=>{ // selectUnSelectDate

        // console.log('getValue: ', getValue)

        const newState = Object.assign(initData,{"selected": getValue});

        // console.log('newstate selected: ', newState)

       _setBettingInitData(Object.assign(_dateAndGameOptionData,newState))

      }

      const changeState =(k)=>{
        const newState = initData.map((day,key) => {
          if (key === k) {
          return {  ...day,
            selected: !day.selected
          }
          } else {
            // Return a new circle 50px below
            return day
          }
        });
        setInitData(newState)
      }

    useEffect(() => {
        // Update the document title using the browser API
      console.log('11111111');
     
    //   setInitData(newState);

      },);
    

    return(
        <div className="col-md-3 col-sm-6" onClick={() => selectUnSelectDate(!initData.selected)}>
        <div className= {`${initData.selected ? "selected":"unselected"} date-lottery-selector`}>
            <div className="d-flex align-items-center">
                <div className="round">
                    <input type="checkbox" id={initData.id} checked={initData.selected}/>
                    <label htmlFor={initData.id}></label>
                </div>
                <div className="day-n-date">
                    <p className="fw-bold mb-0">Tuesday</p>
                    <p className="mb-0">{initData.date}</p>
                </div>
            </div>
            <div className="d-flex">
                <div className="select-gp" id="checkboxes">
                    <ul id="checkboxes" className="list-inline">
                        {initData.games.map((game) =>(
                            <li className="list-inline-item gamesPick">
                            <span className="outer-circle-gp" title="Select">
                                <span className="inner-circle-gp">
                                    <img className="img-fluid" src={game.image}/>
                                </span>
                            </span>
                        </li>
                        ))}
                        {/* <li className="list-inline-item">
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
                        </li> */}
                    </ul>
                    {/* <input type="checkbox" id="damacai" checked={initData.damacai}/>
                  <label className="gamesPicked" for="damacai">
                    <img style={{maxWidth:'30px'}} src="img/logo da MACAI.png"></img>
                  </label>
                  <input type="checkbox" id="magnum" checked={initData.magnum}/>
                  <label className="gamesPicked" for="magnum">
                      <img style={{maxWidth:'30px'}} src="img/LOGO Magnum.png"></img>
                    </label>
                  <input type="checkbox" id="toto" checked={initData.toto}/>
                  <label className="gamesPicked" for="toto">
                      <img style={{maxWidth:'30px'}} src="img/LOGO TOTO.png"></img>
                  </label> */}
                </div>
            </div>
        </div>
    </div>
    )

}
export default DateAndGameOption;