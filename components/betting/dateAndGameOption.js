import React, { useState, useEffect } from 'react';


const DateAndGameOption = ({item,_dateAndGameOptionData,_bettingInitData,_setBettingInitData}) => {


    //console.log('DateAndGameOption:_bettingInitData:',_bettingInitData);
    
    const [initData, setInitData] = useState(item);
    const [active, setActive] = useState(false);


    const getDateName =(dateString) => {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(dateString);
        var dayName = days[d.getDay()];
        return dayName
    }

    const selectUnSelectDate =(getValue)=>{ // selectUnSelectDate

        console.log('getValue: ', getValue)

        if(getValue == false){
           // selectUnSelectgame(true,"da ma chai",false)
           // selectUnSelectgame(true,"toto",false)
           // selectUnSelectgame(true,"magnum",false)
           initData.games.map((game) => {
            selectUnSelectgame(true,game.name,false)
           });

        }

        const newState = Object.assign(initData,{"selected": getValue});

        

       //  console.log('newstate selected: ', newState);

       _setBettingInitData(Object.assign(_dateAndGameOptionData,newState))

      }

      const selectUnSelectgame =(dateSelect,gName,gselected)=>{ // selectUnSelectgame

        console.log('selectUnSelectgame is clicked: ', gName + gselected )

        if(dateSelect)
        {const newState =  initData.games.map((game) => {
            if (game.name === gName) {
            return {  ...game,
              selected: gselected,
            }
            } else {
              // Return a new circle 50px below
              return game
            }

          });
          console.log('GamesnewState', newState)

       _setBettingInitData(Object.assign(_dateAndGameOptionData,Object.assign(initData.games,newState)))
}
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
    //  console.log('11111111');
     
    //   setInitData(newState);

      },);
    

    return(
        <div className="col-md-3 col-sm-6" 
        >
        <div 
        className= {`${initData.selected ? "selected":"unselected"} date-lottery-selector`}>
            <div className="d-flex align-items-center"
                    onClick={() => selectUnSelectDate(!initData.selected)}
            >
                <div className="round">
                    <input type="checkbox" id={initData.id} checked={initData.selected}/>
                    <label htmlFor={initData.id}
                    onClick={() => selectUnSelectDate(!initData.selected)}
                    ></label>
                </div>
                <div className="day-n-date">
                    <p className="fw-bold mb-0">{getDateName(initData.date)}</p>
                    <p className="mb-0">{initData.date}</p>
                </div>
            </div>
            <div className="d-flex">
                <div className="select-gp" id="checkboxes">
                    <ul id="checkboxes" className="list-inline">
                        {initData.games.map((game) =>(
                            <li className={`${initData.selected ? "":""} list-inline-item`}>
                            <span onClick={() => selectUnSelectgame(initData.selected,game.name,!game.selected)} className={`${game.selected ? "selected-gp-btn":""} outer-circle-gp`} title="Select">
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