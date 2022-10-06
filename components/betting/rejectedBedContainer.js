const RejectedBedContainer = ({dataRecords}) => {

    
if(dataRecords && dataRecords.length == 0)
  return (<></>);
else 
    return (
        <>
        <div><h5>Rejected Bet</h5></div>
        <div className="row text-center table-responsive " style={{height:"250px"}}>
        <table className="table table-bordered table-striped mb-0">
        <tbody style={{fontWeight:'bold'}}>
            {dataRecords && dataRecords.map((item,i) => {
            return (<tr key={i}>
            <th scope="row">{item.date}</th>
            <td>{item.bet_number}</td>
            <td>{item.big_bet_amount}</td>
            <td>{item.small_bet_amount}</td>
            <td className="text-danger">--</td>
            <td className="text-danger">--</td>
            </tr>);
            })}
            {/* <tr>
            <th scope="row">27/09</th>
            <td>{t('P')}</td>
            <td>1234</td>
            <td>{t('Big')}</td>
            <td className="text-danger">-15</td>
            <td className="text-danger">{t('Over_Limit')}</td>
            </tr>
            <tr>
            <th scope="row">27/09</th>
            <td>{t('P')}</td>
            <td>1234</td>
            <td>{t('Big')}</td>
            <td className="text-danger">-15</td>
            <td className="text-danger">{t('Over_Limit')}</td>
            </tr>
            <tr>
            <th scope="row">27/09</th>
            <td>{t('M')}</td>
            <td>1234</td>
            <td>{t('Big')}</td>
            <td className="text-danger">-20</td>
            <td className="text-danger">{t('Over_Limit')}</td>
            </tr>
            <tr>
            <th scope="row">27/09</th>
            <td>{t('P')}</td>
            <td>1234</td>
            <td>{t('Big')}</td>
            <td className="text-danger">-15</td>
            <td className="text-danger">{t('Over_Limit')}</td>
            </tr>
            <tr>
            <th scope="row">27/09</th>
            <td>{t('M')}</td>
            <td>1234</td>
            <td>{t('Big')}</td>
            <td className="text-danger">-20</td>
            <td className="text-danger">{t('Over_Limit')}</td>
            </tr>
            <tr>
            <th scope="row">27/09</th>
            <td>{t('M')}</td>
            <td>1234</td>
            <td>{t('Big')}</td>
            <td className="text-danger">-20</td>
            <td className="text-danger">{t('Over_Limit')}</td>
            </tr>
            <tr>
            <th scope="row">27/09</th>
            <td>{t('M')}</td>
            <td>1234</td>
            <td>{t('Big')}</td>
            <td className="text-danger">-20</td>
            <td className="text-danger">{t('Over_Limit')}</td>
            </tr> */}
           
        </tbody>
    </table>
    </div>
    </>
    );
}
export default RejectedBedContainer;