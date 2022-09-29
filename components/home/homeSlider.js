import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HomeSlider = () => {
    return (
      <>
     <Carousel>
  <div className="item">
            <div className="hero-slider-special-draw">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-sm-5 col-6">
                            <div className="sd-text-part">
                                <p className="text-uppercase">CONTEST FOR YOUR CHANCE TO</p>
                                <div className="d-inline-flex align-items-center mb-4">
                                    <div className="logo-draw">
                                        <div className="draw-logo-div">
                                            <div className="draw-logo-img">
                                                <img src="assets/images/1659581469.png" className="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="draw-name">
                                        SPECIAL<br/>DRAW
                                    </div>
                                </div>
                                <div className="date-block">
                                    <a href="#">27TH September (TUE)</a>
                                </div>
                                <p className="small">Don't miss your chance. Will you be our next</p>
                                <h3>lucky winner?</h3>
                                <div className="clearfix my-3">
                                    <a href="#" className="btn-yellow rounded-full">Start Playing Now</a>
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
            <div className="hero-slider-special-draw">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-sm-5">
                            <div className="sd-text-part">
                                <p className="text-uppercase">CONTEST FOR YOUR CHANCE TO sdfksdjflksdf</p>
                                <div className="d-inline-flex align-items-center mb-4">
                                    <div className="logo-draw">
                                        <div className="draw-logo-div">
                                            <div className="draw-logo-img">
                                                <img src="assets/images/1659581469.png" className="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="draw-name">
                                        SPECIAL<br/>DRAW
                                    </div>
                                </div>
                                <div className="date-block">
                                    <a href="#">27TH September (TUE)</a>
                                </div>
                                <p className="small">Don't miss your chance. Will you be our next</p>
                                <h3>lucky winner?</h3>
                                <div className="clearfix">
                                    <a href="#" className="btn-yellow rounded-full">Start Playing Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-7 pt-5 hide-575 col-6">                            
                            <img src="assets/images/special-draw-img.png" className="img-fluid" alt=""/>
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
  