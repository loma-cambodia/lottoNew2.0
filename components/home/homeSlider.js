import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from "react-i18next";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";

const HomeSlider = ({_specialDrawState,datauser,_auth, updateSessionData, setUpdateSessionData}) => {
    const specialDrawState = _specialDrawState;


    const dispatch = useDispatch();
    let auth = _auth;
 
    const state = useSelector(state => state);
 
    
    let language = '';
 
    if(auth && auth.lang){
     language = auth.lang;
    }else {
     language = datauser && datauser.user && datauser.user.data && datauser.user.data.language && datauser.user.data.language.locale ? datauser.user.data.language.locale : 'en'
    }
    // useEffect(() => {
        
    // }, [language])
    
    const { t } = useTranslation();
    function SpecialDrawImg({specialDrawStateMain}){
        if(specialDrawStateMain && specialDrawStateMain.data && specialDrawStateMain.data.game_play){
            return(
                <>
                    {specialDrawStateMain.data.game_play.map((item, id) => {
                        return(
                            <div key={id} className="logo-draw">
                                <div className="draw-logo-div">
                                    <div className="draw-logo-img">
                                        <img src={item.logo_url} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div> 
                        );
                    })}
                </>
            );
        }
    } 
    function GetDrawDate({specialDrawStateMain}){
        if(specialDrawStateMain && specialDrawStateMain.data){
            if(language == 'ch'){
                return(
                    <a href="#" style={{pointerEvents:'none'}}>
                        {t(specialDrawStateMain.data.draw_month_formatted)}&nbsp;
                        {t(specialDrawStateMain.data.draw_date_only_formatted)}&nbsp;
                        ({t(specialDrawStateMain.data.draw_day_formatted)})
                    </a>
                );
            }else if(language == 'kh'){
                return(
                    <a href="#" style={{pointerEvents:'none'}}>
                        {t(specialDrawStateMain.data.draw_date_only_formatted)}&nbsp;
                        {t(specialDrawStateMain.data.draw_month_formatted)}&nbsp;
                        ({t(specialDrawStateMain.data.draw_day_formatted)})
                    </a>
                );
            }else{
                return(
                    <a href="#" style={{pointerEvents:'none'}}>
                        {t(specialDrawStateMain.data.draw_date_only_formatted)}&nbsp;
                        {t(specialDrawStateMain.data.draw_month_formatted)}&nbsp;
                        ({t(specialDrawStateMain.data.draw_day_formatted)})
                    </a>
                );
            }
        }
        else {
            return(
                <a href="#" style={{pointerEvents:'none'}}>
                    {t('coming_soon_text')}
                </a>
            );
        }
    }


    return (
      <>
     <Carousel autoPlay className="homepage-carousel ">
  <div className="item">
    {/*Home */}
            <div className="hero-slider-special-draw">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-sm-5 col-6">
                            <div className="sd-text-part">
                                <p className="text-uppercase">{t('Contest_your_chance_to')}</p>
                                <div className="d-inline-flex align-items-center mb-4">
                                    <SpecialDrawImg specialDrawStateMain={specialDrawState} />  
                                    <div className="draw-name text-uppercase">
                                        {t('Special')}<br/>{t('Draw')}
                                    </div>
                                </div> 
                                <div className="date-block">
                                    {/* <GetDrawDate specialDrawStateMain={specialDrawState} /> */}
                                    <GetDrawDate specialDrawStateMain={specialDrawState} />
                                </div>
                                <p className="">{t("Dont_miss_your_chance")}</p>
                                <h3>{t('Lucky_Winner')}</h3>
                                <div className="clearfix my-3">
                                      <Link href="/betting"> 
                                        <span role='button' className="btn-yellow rounded-full">{t("Start_playing_now")}</span>
                                     </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-7 pt-5 hide-575">
                            <img src="assets/images/special-draw-img.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="item">
            <div className="hero-slider-normal-one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-sm-5">
                            <div className="wb-text-part">
                                <p className="text-uppercase color-1 fs-5">{t('Contest_your_chance_to')}</p>
                                <div className="d-inline-flex align-items-center mb-4">
                                    
                                    <div className="slider-big-text text-white">
                                        {t('win_big')}
                                    </div>
                                </div>
                                <p className="text-white fs-5">{t("Dont_miss_your_chance")}</p>
                                <h3>{t('Lucky_Winner')}</h3>
                                <Link href="/betting"> 
                                        <span role='button' className="btn-yellow rounded-full">{t("Start_playing_now")}</span>
                                     </Link>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-7 pt-5 hide-575">
                            <img src="assets/images/win-big-guy.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

        </div>    
              </Carousel>
      </>
    )
  }
  export default HomeSlider;
  
