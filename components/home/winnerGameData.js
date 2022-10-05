import { useTranslation } from "react-i18next";
const WinnerGameData = () => {

    const { t } = useTranslation();

    return (
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="coupon-block">
                <div className="half-cicle left">

                </div>
                <div className="content-part">
                    <div className="table-part">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="text-end">{t('Big_Bet')}</th>
                                    <th className="text-end">{t('Small_Bet')}</th>
                                    <th className="text-end">3 A</th>
                                    <th className="text-end">3 C</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t('1st_Prize')}</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                </tr>
                                <tr>
                                    <td>{t('2nd_Prize')}</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                </tr>
                                <tr>
                                    <td>{t('3rd_Prize')}</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                </tr>
                                <tr>
                                    <td>{t('Special_Prize')}</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                </tr>
                                <tr>
                                    <td>{t('Consolation_Prize')}</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                    <td className="text-end">5000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="payout-text-part">
                        {t('PAYOUTS')}
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


    );

}

export default WinnerGameData;