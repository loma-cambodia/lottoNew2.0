import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from "react-i18next";
import Link from 'next/link';
const HomeSlider = () => {
    const { t } = useTranslation();
    return (
      <>
     <Carousel autoPlay className="homepage-carousel ">
  <div className="item">
            <div className="hero-slider-special-draw">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-sm-5 col-6">
                            <div className="sd-text-part">
                                <p className="text-uppercase">{t('Contest_your_chance_to')}</p>
                                <div className="d-inline-flex align-items-center mb-4">
                                    <div className="logo-draw">
                                        <div className="draw-logo-div">
                                            <div className="draw-logo-img">
                                                <img src="assets/images/1659581469.png" className="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="draw-name text-uppercase">
                                        {t('Special')}<br/>{t('Draw')}
                                    </div>
                                </div>
                                <div className="date-block">
                                    <a href="#">27TH September (TUE)</a>
                                </div>
                                <p className="">{t("Dont_miss_your_chance")}</p>
                                <h3>{t('Lucky_Winner')}</h3>
                                <div className="clearfix my-3">
                                      <Link href="/bettingNew"> 
                                        <a href="#" className="btn-yellow rounded-full">{t("Start_playing_now")}</a>
                                     </Link>
                                    {/* <Link className="btn-yellow rounded-full"  href="/bettingNew">{t('Start_playing_now')}</Link> */}
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
        <div class="item">
            <div class="hero-slider-normal-one">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-7 col-sm-6 col-6">
                            <div class="wb-text-part">
                                <p class="text-uppercase color-1 fs-5">{t('Contest_your_chance_to')}</p>
                                <div class="d-inline-flex align-items-center mb-4">
                                    
                                    <div class="slider-big-text text-white">
                                        {t('win_big')}
                                    </div>
                                </div>
                                <p class="text-white fs-5">{t("Dont_miss_your_chance")}</p>
                                <h3>{t('Lucky_Winner')}</h3>
                                <Link href="/bettingNew"> 
                                        <a href="#" className="btn-yellow rounded-full">{t("Start_playing_now")}</a>
                                     </Link>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-6 pt-0 hide-575">
                            <img src="assets/images/win-big-guy.png" class="img-fluid" alt=""/>
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
  