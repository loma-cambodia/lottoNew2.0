import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Row,
  } from "reactstrap";
  import { useTranslation } from "react-i18next";
  import moment from "moment";

  
  
  const FirstTableData = ({firstTableData, permutationData, numberM, oddSet}) => {
    const { t } = useTranslation();
  
    function PrizeSetComm({prizeType }) {
        let prizeTypeStyle = "";
        let prizeTypeY = "";
        if (prizeType == "prize1") {
          prizeTypeY = "1st_Prize";
          prizeTypeStyle = "badge bg-primary";
        } else if (prizeType == "prize2") {
          prizeTypeY = "2nd_Prize";
          prizeTypeStyle = "badge bg-primary";
        } else if (prizeType == "prize3") {
          prizeTypeY = "3rd_Prize";
          prizeTypeStyle = "badge bg-warning text-dark";
        } else if (
          prizeType == "special1" ||
          prizeType == "special2" ||
          prizeType == "special3" ||
          prizeType == "special4" ||
          prizeType == "special5" ||
          prizeType == "special6" ||
          prizeType == "special7" ||
          prizeType == "special8" ||
          prizeType == "special9" ||
          prizeType == "special10"
        ) {
          prizeTypeY = "Special_Prize";
          prizeTypeStyle = "badge bg-info text-white";
        } else if (
          prizeType == "consolation1" ||
          prizeType == "consolation2" ||
          prizeType == "consolation3" ||
          prizeType == "consolation4" ||
          prizeType == "consolation5" ||
          prizeType == "consolation6" ||
          prizeType == "consolation7" ||
          prizeType == "consolation8" ||
          prizeType == "consolation9" ||
          prizeType == "consolation10"
        ) {
          prizeTypeY = "Consolation_Prize";
          prizeTypeStyle = "badge bg-light text-dark border border-dark";
        } else {
          prizeTypeStyle = "badge bg-light text-dark border border-dark";
        }
        return <span className={prizeTypeStyle}>{t(prizeTypeY)}</span>;
      }
  
      return (
  
        <Container>   
        <div className="table-responsive">
          <table className="table table-striped table-sm small table-bordered text-center">
            <thead className="bg-dark text-white">
              <tr>
                <th>{t('No')}</th>
                <th>{t('Number')}</th>
                <th>{t('Prize')}</th>
                <th>{t('DrawID')}</th>
                <th>{t('DrawNo')}</th>
                <th>{t('Date')}</th>
                <th>{t('Day')}</th>
                <th className="text-center">{t('Source')}</th>
              </tr>
            </thead>
            <tbody>
              {firstTableData && firstTableData.length > 0 ? (
                firstTableData.map((value, index) => {
                  let prizeType = [];
                  let betNum = [];
                  let keys = Object.keys(value);
                  keys.map((game1) => {
                    if (permutationData.length > 0) {
                      permutationData.map((pdata) => {
                        if (value[game1] == pdata) {
                          // console.log('value[game1] pdata : '+index+ ' ',pdata)
                          // console.log('value[game1] : '+index+ ' ',value[game1])
                          // console.log('value[game1] game1 : '+index+ ' ',game1)
                          // console.log('value[game1] value : '+index+ ' ',value)
                          // if(prizeType.some(f=> f.includes(game1.substring(0,6))) == false ){
                            prizeType.push(game1);
                            betNum.push(value[game1]);
                          // }
                        }
                      });
                    } 
                    else {
                      if (value[game1] == numberM) {
                        if(prizeType.some(f=> f.includes(game1.substring(0,6))) == false ){
                          prizeType.push(game1);
                          // betNum = value[game1];
                          betNum.push(value[game1]);

                        }
                      }
                    }
                  });
                  // console.log('value[game1] prizeType : '+index+ ' ',prizeType)
                  return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <b>{betNum.map((bv,index)=>(<section key={index}>{bv}<br></br></section>))}</b>
                        </td>
                        <td>
                          {
                            prizeType.map((pt,index)=>(<section key={index}> <PrizeSetComm prizeType={pt} /><br></br> </section>))
                          }
                          
                        </td>
                        <td>{value.reference_number}</td>
                        <td>#{value.id}</td>
                        <td>
                          {moment(value.fetching_date).format("DD/MM/YYYY")}
                        </td>
                        <td>{t(moment(value.fetching_date).format("ddd"))}</td>
                        <td align="center">
                          {oddSet.map((game, id) => {
                            if (game.game_play.id == value.game_play_id) {
                              return (
                                <span key={id}>
                                  <img
                                    src={game.game_play.logo_url}
                                    alt=""
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      borderRadius: "50%",
                                    }}
                                  />
                                </span>
                              );
                            }
                          })}
                        </td>
                       
                      </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={9}>
                    <div className="alert alert-warning">
                      <h3 className="text-center">{t("no_data_found")}</h3>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Container>
      );
  
  }
  
  export default FirstTableData;