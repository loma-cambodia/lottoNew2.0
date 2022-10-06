import React, { useState, useEffect } from 'react';


const DateAndGameOption = ({item,_bettingInitData,_setBettingInitData,_loadpageCounter,_setLoadpageCounter}) => {

    
    const [initData, setInitData] = useState(item);
    const [active, setActive] = useState(false);


    const getDateName =(dateString) => {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(dateString);
        var dayName = days[d.getDay()];
        return dayName
    }

    const findArrayIndex = (arr,gId) =>{


        const index = arr.findIndex(object => {
            return object.id == gId;
          });
          return index;
    }

    const selectUnSelectDate =(getValue, getId)=>{ // selectUnSelectDate

                      
                        let bettingInitData = _bettingInitData;


                        bettingInitData.map(item => {
                            if(item.id == getId)
                              item.selected = getValue;
                                
                         });

                        

                        _setBettingInitData(bettingInitData);
                        _setLoadpageCounter(_loadpageCounter + 1);
                        setInitData(item)
                      

                        if(getValue == false){
                        initData.games.map((game) => {
                            selectUnSelectgame(true,game.name,false)
                        });

                        }

                    // const newState = Object.assign(initData,{"selected": getValue});

                    // const index = _dateAndGameOptionData.findIndex(object => {
                    //     return object.id === getId;
                    // });

                    // if (index !== -1) {
                    //     _dateAndGameOptionData[index].selected = getValue;
                    // }



                    // _setBettingInitData(_dateAndGameOptionData)


                }

        const selectUnSelectgame =(dateSelect,gId,gselected)=>{ // selectUnSelectgame

                    
                    if(dateSelect)
                    {
                            const newState = initData.games.map(game => {
                                if (game.name == gId){
                                    return {  ...game, 
                                        selected: gselected
                                    }
                                }
                                else {
                                    // Return a new circle 50px below
                                    return game
                                }
                            })
                            _setLoadpageCounter(_loadpageCounter + 1);
                            setInitData(Object.assign(initData,{games:newState}));

                            _bettingInitData[findArrayIndex(_bettingInitData,initData.id)] = initData
                            _setBettingInitData(_bettingInitData);
        }
           
        }


    useEffect(() => {
        // Update the document title using the browser API
     
    // _setBettingInitData(_dateAndGameOptionData);

      },);
    

    return(
        <>
            <div className="d-flex align-items-center py-2 border-bottom">
                <div className="round-h5">
                    <input type="checkbox"  id={initData.id} checked={initData.selected} />
                    <label htmlFor={initData.id} onClick={() => selectUnSelectDate(!initData.selected, item.id)}></label>
                </div>
                <label className= {`${initData.selected ? " selected-dt-h5  date-time-small":" date-time-small"}`} htmlFor={initData.id} onClick={() => selectUnSelectDate(!initData.selected, item.id)}>
                    <small>{initData.date}{initData.day}</small>
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
export default DateAndGameOption;