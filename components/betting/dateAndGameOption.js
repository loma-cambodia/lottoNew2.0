import { t } from 'i18next';
import React, { useState, useEffect } from 'react';

import { useTranslation } from "react-i18next";

const DateAndGameOption = ({item,_bettingInitData,_setBettingInitData,_loadpageCounter,_setLoadpageCounter}) => {

    const { t } = useTranslation();

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
    // console.log("AAAAAA",{t("filter_results")});
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
        <div className="col-md-3 col-sm-6" 
        >
        <div 
        className= {`${initData.selected ? "selected":"unselected"} date-lottery-selector`}>
            {/* <div className="d-flex align-items-center"
                    onClick={() => selectUnSelectDate(!initData.selected)}
            > */}
           <div className="d-flex align-items-center"> 
                <div className="round">
                    <input type="checkbox" id={initData.id} checked={initData.selected} />
                    <label htmlFor={initData.id}
                        onClick={() => selectUnSelectDate(!initData.selected, item.id)}
                    ></label>
                </div>
                <div className="day-n-date" style={{cursor:'pointer'}}
                    onClick={() => selectUnSelectDate(!initData.selected, item.id)}
                >
                    <p className="fw-bold mb-0">{t(initData.day)}</p>
                    <p className="mb-0">{initData.date}</p>
                </div>
            </div>
            <div className="d-flex">
                <div className='round'/>
                <div className="select-gp" id="checkboxes">
                    <ul id="checkboxes" className="list-inline">
                        {initData.games.map((game,id) =>(
                            <li key={id} className={`${initData.selected ? "":""} list-inline-item`}>

                            <span onClick={() => selectUnSelectgame(initData.selected,game.name,!game.selected)} className={`${game.selected ? "selected-gp-btn":""} outer-circle-gp`} title={t('Select')}>
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
                  <label className="gamesPicked" htmlFor="damacai">
                    <img style={{maxWidth:'30px'}} src="img/logo da MACAI.png"></img>
                  </label>
                  <input type="checkbox" id="magnum" checked={initData.magnum}/>
                  <label className="gamesPicked" htmlFor="magnum">
                      <img style={{maxWidth:'30px'}} src="img/LOGO Magnum.png"></img>
                    </label>
                  <input type="checkbox" id="toto" checked={initData.toto}/>
                  <label className="gamesPicked" htmlFor="toto">
                      <img style={{maxWidth:'30px'}} src="img/LOGO TOTO.png"></img>
                  </label> */}
                </div>
            </div>
        </div>
    </div>
    )

}
export default DateAndGameOption;