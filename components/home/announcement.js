import Marquee from "react-fast-marquee";
import React from 'react';
import { useTranslation } from "react-i18next";
const Announcement = ({_announcementState, _language}) => {
    const { t } = useTranslation();
    const announcementData = _announcementState
    let language =  _language;
    function AnnouncementData({announcementDataNew}){
      if(announcementDataNew.length > 0){
        return (
          <Marquee direction="left" pauseOnHover={true} speed={50}>
            <ul className="list-inline">
              {announcementDataNew.map((item, id) => {
                    return(
                        <li key={id} className="list-inline-item">{item.content[language]}</li>
                    );
                })}
            </ul>
          </Marquee> 
        );
      }
    }
    return (
      <>
        <section className="announcement ">
          <div className="container">
              <div className="news-wrapper d-inline-flex align-item-center" id="myDIV">
                  <div className="announcement-block-icon">
                      <div className="annoncement-icon">
                          <span className="icon-img-announcement">
                            <img src="assets/images/icons/announcement-icon-white.png" alt="" className="img-fluid"/>
                          </span>
                          <span class="text-announcement">
                            <span class="announcement-text">
                              {t('Announcement')}
                            </span> 
                            <span class="toggle-icon-news" onClick={() => myFunction() } type="button">
                              +
                            </span>
                          </span>
                      </div>
                  </div>
                  <div className="marque-div">
                      <AnnouncementData announcementDataNew={announcementData} />
                  </div>
              </div>
          </div>
        </section>
      </>
    )
  }
  export default Announcement;
  