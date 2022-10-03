
import React, { useState } from "react";

const dateAndGameOptionMob = ({item}) => {
    
  const [isModal, setIsModal] = useState(false);

  const contentClassname = isModal ? ' selected-dt-h5 ' : ' ';
  
    return(
        <div className="d-flex align-items-center py-2 border-bottom">
            <div className="round-h5">
                <input type="checkbox" id={'checkbox'+item} />
                <label htmlFor={'checkbox'+item} onClick={() => setIsModal(!isModal)}></label>
            </div>
            <label className={contentClassname+" date-time-small" } htmlFor={'checkbox'+item} onClick={() => setIsModal(!isModal)}>
                <small>22-09-2022<br/>WED</small>
            </label>
            <div className="select-gp p-2">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <span className="outer-circle-gp selected-gp-h5" title="Select">
                            <span className="inner-circle-gp">
                                <img className="img-fluid" src="assets/images/icons/damacai.png" />
                            </span>
                        </span>
                    </li>
                    <li className="list-inline-item">
                        <span className="outer-circle-gp selected-gp-h5" title="Select">
                            <span className="inner-circle-gp">
                                <img className="img-fluid" src="assets/images/icons/magnum.png" />
                            </span>
                        </span>
                    </li>
                    <li className="list-inline-item">
                        <span className="outer-circle-gp" title="Select">
                            <span className="inner-circle-gp">
                                <img className="img-fluid" src="assets/images/icons/toto.png" />
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default dateAndGameOptionMob;