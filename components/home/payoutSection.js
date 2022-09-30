import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const PayoutSection = () => {
    return (
      <>
        <section className="payouts-part custom-padding">
    <div className="container">
        <div className="heading-part text-center mb-4">
            <h5 className="text-uppercase fw-bold">Payouts</h5>
            <h2 className="text-uppercase text-color-main fw-bold">Winning Payouts</h2>
        </div>
        <div className="theme-tabs py-4">
              <ul className="nav nav-tabs theme-nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active d-inline-flex align-items-center" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                        <span className="circle-logo-gp me-2"><img src="assets/images/icons/damacai.png" className="img-gp" alt=""/></span> <span className="name-gp">Da Ma Cai</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link d-inline-flex align-items-center" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                    <span className="circle-logo-gp me-2"><img src="assets/images/icons/magnum.png" className="img-gp" alt=""/></span> <span className="name-gp">Magnum</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link d-inline-flex align-items-center" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                    <span className="circle-logo-gp me-2"><img src="assets/images/icons/toto.png" className="img-gp" alt=""/></span> <span className="name-gp">Sports Toto</span>
                  </button>
                </li>
              </ul>
              <div className="tab-content py-5" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="coupon-block">
                                <div className="half-cicle left">

                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">Big</th>
                                                    <th className="text-end">Small</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1st</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>2nd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>3rd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Special</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Consolation</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                        Payout
                                    </div>
                                </div>
                                <div className="half-circles">
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coupon-block">
                                <div className="half-cicle left">

                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">Big</th>
                                                    <th className="text-end">Small</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1st</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>2nd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>3rd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Special</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Consolation</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                        Payout
                                    </div>
                                </div>
                                <div className="half-circles">
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="coupon-block">
                                <div className="half-cicle left">

                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">Big</th>
                                                    <th className="text-end">Small</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1st</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>2nd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>3rd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Special</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Consolation</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                        Payout
                                    </div>
                                </div>
                                <div className="half-circles">
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coupon-block">
                                <div className="half-cicle left">

                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">Big</th>
                                                    <th className="text-end">Small</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1st</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>2nd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>3rd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Special</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Consolation</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                        Payout
                                    </div>
                                </div>
                                <div className="half-circles">
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="coupon-block">
                                <div className="half-cicle left">

                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">Big</th>
                                                    <th className="text-end">Small</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1st</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>2nd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>3rd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Special</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Consolation</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                        Payout
                                    </div>
                                </div>
                                <div className="half-circles">
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coupon-block">
                                <div className="half-cicle left">

                                </div>
                                <div className="content-part">
                                    <div className="table-part">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-end">Big</th>
                                                    <th className="text-end">Small</th>
                                                    <th className="text-end">3 A</th>
                                                    <th className="text-end">3 C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1st</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>2nd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>3rd</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Special</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Consolation</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                    <td className="text-end">5000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="payout-text-part">
                                        Payout
                                    </div>
                                </div>
                                <div className="half-circles">
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                    <span className="circle-coupon"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        </div>
        <div className="clearfix text-center">
            <a href="#" className="btn-yellow rounded-full">Play Now</a>
        </div>
    </div>
  </section>
      </>
    )
  }
  export default PayoutSection;
  