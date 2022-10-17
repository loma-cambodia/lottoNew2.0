import React, { useState, useEffect } from 'react';


const DateAndGameOption = ({item,_bettingInitData,_setBettingInitData,_loadpageCounter,_setLoadpageCounter}) => {
    
    const selectUnSelectgame =(dateId,gameId, work)=>{
        let bettingInitData =  _bettingInitData;
        let newArr = [];
        if(work == 'child'){
            newArr = bettingInitData.map(obj => {
                if (obj.id === dateId && obj.selected) {
                    return {...obj, "games":obj.games.map(itemGame => {
                        let itemGameNew = {...itemGame};
                        if(itemGame.id == gameId){
                            if(itemGameNew.selected)
                            itemGameNew = {...itemGameNew, selected:false}
                            else
                            itemGameNew = {...itemGameNew, selected:true}  
                        }
                        return itemGameNew;
                    })};
                }
                return obj;
            });
        }
        if(work == 'parent'){
            newArr = bettingInitData.map(obj => {
            if (obj.id === dateId) {
                if(obj.selected){
                    obj.selected = false;
                }else{
                    obj.selected = true;
                }
                return {...obj, "games":obj.games.map(itemGame => {
                let itemGameNew = {...itemGame};
                itemGameNew = {...itemGameNew, selected:false} 
                return itemGameNew;
                })};
            }
            
            return obj;
            });
        }
        _setBettingInitData(newArr);
    }
 
    return(
        <>
            <div className="d-flex align-items-center py-2 border-bottom">
                <div className="round-h5">
                    <input type="checkbox"  id={item.id} checked={item.selected} />
                    {/* <label htmlFor={item.id} onClick={() => selectUnSelectDate(!item.selected, item.id)}></label> */}
                    <label htmlFor={item.id} onClick={() => selectUnSelectgame(item.id,'','parent')}></label>
                </div>
                <label className= {`${item.selected ? " selected-dt-h5  date-time-small":" date-time-small"}`} htmlFor={item.id} onClick={() => selectUnSelectgame(item.id,'','parent')}>
                    <small>{item.date}</small>
                    <br />
                    <b>{item.day}</b>
                </label>
                <div className="select-gp p-2">
                    
                <div className="d-flex">
                        <div className="select-gp" id="checkboxes">
                            <ul id="checkboxes" className="list-inline">
                                {item.games.map((game,id) =>(
                                    <li key={id} className={`${item.selected ? "":""} list-inline-item`}>
                                    <span onClick={() => selectUnSelectgame(item.id,game.id,'child')} className={`${game.selected ? "selected-gp-btn":""} outer-circle-gp`} title="Select">
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