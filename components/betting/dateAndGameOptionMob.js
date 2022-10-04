import React, { useState, useEffect } from 'react';


const DateAndGameOptionMob = ({item,_dateAndGameOptionData,_bettingInitData,_setBettingInitData}) => {


    console.log('games:',_bettingInitData.games);
    
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
                selectUnSelectgame(true,"da ma chai",false)
                selectUnSelectgame(true,"toto",false)
                selectUnSelectgame(true,"magnum",false)
            }
            const newState = Object.assign(initData,{"selected": getValue});
            _setBettingInitData(Object.assign(_dateAndGameOptionData,newState))
        }
        const selectUnSelectgame =(dateSelect,gName,gselected)=>{ // selectUnSelectgame
            if(dateSelect)
            {const newState =  initData.games.map((game) => {
                if (game.name === gName) {
                return {  ...game,
                selected: gselected,
                }
                } else {
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
        
  const [isModal, setIsModal] = useState(false);

  const contentClassname = isModal ? ' selected-dt-h5 ' : ' ';
    console.log("item:",item);
    return(
        <>
        <div className="d-flex align-items-center py-2 border-bottom">
            <div className="round-h5">
                <input type="checkbox" id={'checkbox'+initData.id} checked= {`${initData.selected ? "checked":""}`} />
                <label htmlFor={'checkbox'+initData.id} onClick={() => selectUnSelectDate(!initData.selected)}></label>
            </div>
            <label className= {`${initData.selected ? " selected-dt-h5  date-time-small":" date-time-small"}`} htmlFor={'checkbox'+initData.id}  onClick={() => selectUnSelectDate(!initData.selected)}>
                <small>{initData.date}<br/>{getDateName(initData.date)}</small>
            </label>
            <div className="select-gp p-2">
                
            <div className="d-flex">
                    <div className="select-gp" id="checkboxes">
                        <ul id="checkboxes" className="list-inline">
                            {initData.games.map((game,id) =>(
                                <li key={id} className={`${initData.selected ? "":""} list-inline-item`}>
                                <span onClick={() => selectUnSelectgame(initData.selected,game.name,!game.selected)} className={`${game.selected ? "selected-gp-btn":""} outer-circle-gp`} title="Select">
                                    <span className="inner-circle-gp">
                                        <img className="img-fluid" src={game.image}/>
                                    </span>
                                </span>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}
export default DateAndGameOptionMob;