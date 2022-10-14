import { useTranslation } from "react-i18next";
const FinalDataContainer = ({_previewSubmitData, finalSubmitData,_bettingInitData,totalAmount}) => {
    const { t } = useTranslation();


    return (
        <div className="border mt-2">
                <div className="" style={{ height: '150px', overflowY: 'scroll' }}>
                    <table className="table-borderless" style={{ width: '100%' }}>
                        <thead className="text-light" style={{ background: '#e91d25', fontSize: '12px' }}>
                            <tr>
                                <td className="text-center">#</td>
                                <td className="text-center">{t('Date')}</td>
                                <td className="text-center">{t('Company')}</td>
                                <td className="text-center">{t('Number')}</td>
                                <td className="text-center">B/3A</td>
                                <td className="text-center">S/3C</td>
                                <td className="text-center">{t('Bet_Type')}</td>
                                <td className="text-center"></td>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: '12px' }}>
                            {finalSubmitData && finalSubmitData.map((item,id) => {
                            return(
                                <tr key={id}>
                                    <td className="text-center">{id+1}</td>
                                    <td className="text-center">{(item.date).replace(/, .*/,'')}</td>
                                    <td className="text-center">{item.company}</td>
                                    <td className="text-center">{item.number}</td>
                                    <td className="text-center">{item.amount1}</td>
                                    <td className="text-center">{item.amount2}</td>
                                    <td className="text-center">{item.bet_type}</td>
                                    <td onClick={() => _previewSubmitData('remove',id)}>
                                        <img className="img-fluid" src="images\betting\12121121.png" alt="" style={{ width: '18px' }} />
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="row text-light container-fluid m-auto" style={{  background: '#e91d25' }}>
                    <div className="col-6">{t('Total_bet_amount')}</div>
                    <div className="col-6" style={{ textAlign: 'end' }}>{totalAmount ? totalAmount : '0.00'}</div>
                </div>
            </div>
    );
}
export default FinalDataContainer;