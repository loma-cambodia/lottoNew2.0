import React from 'react';
import { useTranslation } from "react-i18next";
const GamePlayPrize = ({_winnerResultDetails}) => {
    const { t } = useTranslation();
    const getDateName =(dateString) => {
        var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        var d = new Date(dateString);
        var dayName = days[d.getDay()];
        return dayName
    }
    let winnerResultDetails = _winnerResultDetails;
    return (
      <>
    <section className="gp-prize">
    <div className="container">
        <div className="row">
    

   {winnerResultDetails && winnerResultDetails.map((item,id) => {
    let gameImage = '';
    let cardName = '';
    //toto.png"  magnum.png
    if(item.game_play_id == 1){
         //gameImage = 'assets/images/icons/damacai.png';
         gameImage = 'assets/images/icons/magnum.png';
        cardName = 'card magnum';
    }else if(item.game_play_id == 2){
      
        gameImage = 'assets/images/icons/toto.png';
        cardName = 'card toto'
    }else if(item.game_play_id == 6 || item.game_play_id == 3){
        gameImage = 'assets/images/icons/damacai.png';
        cardName = 'card damamcai'
    }

    return(
<div className="col-md-4" key={id}>
                <div className={cardName}>
                    <div className="card-body">
                        <div className="card-top">
                            <div className="logo-gp-prize">
                                <div className="logo-gp-prize-outer">
                                    <div className="logo-gp-prize-inner">
                                        <img  src={gameImage} alt="" className="img-icon-prize"/>
                                    </div>
                                </div>
                            </div>
                            <div className="name-lottery">
                                <p className="fw-bold">{item.title}</p>
                                <p className="date-cal"><span className="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span>{item.fetching_date}</p>
                                <p className="date-cal">{getDateName(item.fetching_date)}</p>
                            </div>
                            <div className="gp-prize-play-btn ms-auto">
                                <div className="gp-prize-play-btn ms-auto">
                                  <p className="fw-bold small mb-0 text-end">{t('Draw_Id')}</p>
                                  <p className="mb-0 fs-5 fw-bold">{item.reference_number}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row first-three">
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                        {t('1st_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                        {item.prize1}
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('2nd_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                    {item.prize2}
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('3rd_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                    {item.prize3}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">{t('Special_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">{item.special1}</td>
                                    <td className="border-bottom border-light">{item.special2}</td>
                                    <td className="border-bottom border-light">{item.special3}</td>
                                    <td className="border-bottom border-light">{item.special4}</td>
                                    <td className="border-bottom border-light">{item.special5}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">{item.special6}</td>
                                    <td className="border-bottom border-light">{item.special7}</td>
                                    <td className="border-bottom border-light">{item.special8}</td>
                                    <td className="border-bottom border-light">{item.special9}</td>
                                    <td className="border-bottom border-light">{item.special10}</td>
                                </tr>
                              </tbody>  
                            </table>
                        </div>
                         <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">{t('Consolation_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">{item.consolation1}</td>
                                    <td className="border-bottom border-light">{item.consolation2}</td>
                                    <td className="border-bottom border-light">{item.consolation3}</td>
                                    <td className="border-bottom border-light">{item.consolation4}</td>
                                    <td className="border-bottom border-light">{item.consolation5}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">{item.consolation6}</td>
                                    <td className="border-bottom border-light">{item.consolation7}</td>
                                    <td className="border-bottom border-light">{item.consolation8}</td>
                                    <td className="border-bottom border-light">{item.consolation9}</td>
                                    <td className="border-bottom border-light">{item.consolation10}</td>
                                </tr>
                              </tbody>  
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    );
   })}
            









            {/* <div className="col-md-4">
                <div className="card magnum">
                    <div className="card-body">
                        <div className="card-top">
                            <div className="logo-gp-prize">
                                <div className="logo-gp-prize-outer">
                                    <div className="logo-gp-prize-inner">
                                        <img src="assets/images/icons/magnum.png" alt="" className="img-icon-prize"/>
                                    </div>
                                </div>
                            </div>
                            <div className="name-lottery">
                                <p className="fw-bold">MAGNUM</p>
                                <p className="date-cal"><span className="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span> 22-09-2022</p>
                               
                            </div>
                            <div className="gp-prize-play-btn ms-auto">
                                <div className="gp-prize-play-btn ms-auto">
                                  <p className="fw-bold small mb-0 text-end">{t('Draw_Id')}</p>
                                  <p className="mb-0 fs-5 fw-bold">4567891</p>
                                </div>
                            </div>
                        </div>
                        <div className="row first-three">
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('1st_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('2nd_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('3rd_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">{t('Special_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                </tbody>   
                            </table>
                        </div>
                        <div className="s-and-c">
                            <table className="table-custom">
                            <tbody> 
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">{t('Consolation_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                </tbody>  
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card toto">
                    <div className="card-body">
                        <div className="card-top">
                            <div className="logo-gp-prize">
                                <div className="logo-gp-prize-outer">
                                    <div className="logo-gp-prize-inner">
                                        <img src="assets/images/icons/toto.png" alt="" className="img-icon-prize"/>
                                    </div>
                                </div>
                            </div>
                            <div className="name-lottery">
                                <p className="fw-bold">SPORTS TOTO</p>
                                 <p className="date-cal"><span className="small-calendar"><img src="assets/images/icons/calendar-small.png" alt=""/></span> 22-09-2022</p> 
                            </div>
                            <div className="gp-prize-play-btn ms-auto">
                                <div className="gp-prize-play-btn ms-auto">
                                  <p className="fw-bold small mb-0 text-end">{t('Draw_Id')}</p>
                                  <p className="mb-0 fs-5 fw-bold">4567891</p>
                                </div>
                            </div>
                        </div>
                        <div className="row first-three">
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                        {t('1st_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('2nd_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="first-three-block">
                                    <div className="prize-type">
                                    {t('3rd_Prize')}
                                    </div>
                                    <div className="prize-amt">
                                        124563
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s-and-c">
                            <table className="table-custom">
                            <tbody>
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">{t('Special_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                </tbody>    
                            </table>
                        </div>
                        <div className="s-and-c">
                            <table className="table-custom">
                            <tbody> 
                                <tr>
                                    <td colspan="5" className="border-bottom border-light">{t('Consolation_Prize')}</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                <tr>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                    <td className="border-bottom border-light">87537</td>
                                </tr>
                                </tbody>   
                            </table>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  </section>
      </>
    )
  }
  export default GamePlayPrize;
  