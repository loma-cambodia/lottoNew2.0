import { t } from "i18next";
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
                                    {t('Bet_Successful')}
                                </h5>
                            </div>
                            <div className="modal-body" >
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-8 col-sm-8">
                                            <p>{t('Total_bet_amount')}</p>
                                            <p>{t('Accepted_bet_amount')}</p>
                                            <p>{t('Rebate')}</p>
                                            <p style={{fontWeight:'bold'}}>{t('Net_Amount')}</p>
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
                            <button type="button" style={{backgroundColor:'#bc2263',fontWeight:'bold'}} className="btn  btn-sm text-white" data-bs-dismiss="modal">{t('Ok')}</button>
                            </div>
                        </div>
                    </div>
                </div>
    }
}