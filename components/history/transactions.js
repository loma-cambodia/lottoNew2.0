
import React from 'react';
import { useTranslation } from "react-i18next";
const Transactions = () => {
    
    const { t } = useTranslation();
    return (
        <>
        <section class="page-content custom-padding">
            <div class="container">
                <div class="clearfix curved-card">
                    <div class="row">
                        <div class="col-md-3 col-6">
                            <div class="form-group">
                                <label for="transactionid" class="fw-bold mb-2">{t('transaction_id')}</label>
                                <input type="text" class="form-control-custom-big" name="transationid"/>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="form-group">
                                <label for="transactionid" class="fw-bold mb-2">{t('transaction_type')}</label>
                                <select type="text" class="form-control-custom-big" name="transationid">
                                    <option>Transaction type 1</option>
                                    <option>Transaction type 2</option>
                                    <option>Transaction type 3</option>
                                    <option>Transaction type 4</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                        <div class="col-md-3"></div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Transactions;