import Marquee from "react-fast-marquee";
import React from 'react';
import { useTranslation } from "react-i18next";
const Announcement = () => {
    const { t } = useTranslation();
  //  const userDatas = JSON.parse(localStorage.getItem("name"));

    return (
      <>
     {/*--Announcement--*/}
  <section className="announcement ">
    <div className="container">
        <div className="news-wrapper d-inline-flex align-item-center" id="myDIV">
            <div className="announcement-block-icon">
                <div className="annoncement-icon">
                    <span className="icon-img-announcement"><img src="assets/images/icons/announcement-icon-white.png" alt="" className="img-fluid"/></span>
                    <span class="text-announcement"><span class="announcement-text">{t('Announcement')}</span> <span class="toggle-icon-news" onClick={() => myFunction() } type="button">+</span></span>
                </div>
            </div>
            <div className="marque-div">
            <Marquee pauseOnHover={true} speed={80}>
            <ul className="list-inline">
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                    </ul>
            
            </Marquee>
                {/* <marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
                    <ul className="list-inline">
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                        <li className="list-inline-item">Go on... hover me (and hold the mouse over)!</li>
                    </ul>
                </marquee> */}
            </div>
        </div>
    </div>
  </section>
  {/*--Announcement--*/}
      </>
    )
  }
  export default Announcement;
  