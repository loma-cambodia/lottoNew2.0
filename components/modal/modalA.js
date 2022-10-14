import React from "react";

export default class ModalA extends React.Component {
    render(){
        if(!this.props.show){
            return null;
        }
        return
        <div className="modal fade" id="bettingModal" tabIndex="-1" aria-labelledby="bettingModal" aria-hidden="true" >
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="modal-header text-white" style={{backgroundColor:'#bc2263'}}>
                                <h5 className="modal-title" id="bettingModal">
                                    Bet Succesful
                                </h5>
                            </div>
                            <div className="modal-body" >
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-8 col-sm-8">
                                            <p>Total bet amount</p>
                                            <p>Accepted bet amount</p>
                                            <p>Rebate</p>
                                            <p style={{fontWeight:'bold'}}>Net Amount</p>
                                        </div>
                                        <div className="col-8 col-sm-4" style={{textAlign:'right'}}>
                                            <p>200.00</p>
                                            <p>200.00</p>
                                            <p>20.00</p>
                                            <p style={{fontWeight:'bold'}}>180.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer" style={{justifyContent:'center'}}>
                            <button type="button" style={{backgroundColor:'#bc2263',fontWeight:'bold'}} className="btn  btn-sm text-white" data-bs-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
    }
}