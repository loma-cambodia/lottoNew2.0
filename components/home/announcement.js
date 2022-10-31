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
            <ul className="list-inline " >
              {announcementDataNew.map((item, id) => {
              //   console.log('lang',_language)
              //  console.log('announcementDataNew:item:',item);
              //  console.log('announcementDataNew:language:',item.content[language]);
                if(item.content && item.content[language]){
                     let content = item.content[language];
                  //  content = content.replace( /(<([^>]+)>)/ig, '');
                  content = content.replace(/<br>/g, "");
                //  content = content.replace(/''<div></div>/g, "");
                  

                  <br></br>
                  return(
                    <li key={id} className="list-inline-item">
                      {/* <div dangerouslySetInnerHTML={{ __html: item.content[language] }}></div> */}
                      {/* <li key={id} className="list-inline-item">{item.content[language].replace(/(<([^>]+)>)/ig, '')}</li> */}
                      <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </li>
                  );
                }
                })}
            </ul>
          </Marquee> 
        );
      }
    }
    return (
      <>
        <section className="news-wrapper announcement " id="myDIV">
          <div className="container">
              <div className=" d-flex align-items-center" >
                  <div className="announcement-block-icon" style={{zIndex:'10'}}>
                      <div className="annoncement-icon">
                          <span className="icon-img-announcement">
                            <img src="assets/images/icons/announcement-icon-white.png" alt="" className="img-fluid"/>
                          </span>
                          <span className="text-announcement">
                            <span className="announcement-text">
                              {t('Announcement')}
                            </span> 
                            <span className="toggle-icon-news" onClick={() => myFunction() } type="button">
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
  