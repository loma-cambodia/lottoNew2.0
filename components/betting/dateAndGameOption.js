const DateAndGameOption = () => {
    return(
        <div className="col-md-3 col-sm-6">
        <div className="date-lottery-selector unslected">
            <div className="d-flex align-items-center">
                <div className="round">
                    <input type="checkbox" id="checkbox1" />
                    <label htmlFor="checkbox1"></label>
                </div>
                <div className="day-n-date">
                    <p className="fw-bold mb-0">Tuesday</p>
                    <p className="mb-0">20 Sep. 2022</p>
                </div>
            </div>
            <div className="d-flex">
                <div className="round"></div>
                <div className="select-gp">
                    <ul className="list-inline">
                        <li className="list-inline-item">
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
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
    )

}
export default DateAndGameOption;