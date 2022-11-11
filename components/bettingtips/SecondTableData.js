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

  
  
  const SecondTableData = ({firstTableData, permutationData, numberM, oddSet}) => {
    const { t } = useTranslation();
  
    function ForData() {
        let st1m = 0;
        let nd2m = 0;
        let rd3m = 0;
        let Spem = 0;
        let Conm = 0;
        let totalm = 0;
        let LastDrawDate = "-";
        let LastDrawDay = "-";
        let lastPrize = "";
        let LastGameId = "";
        let mainNum = "";
        {
          firstTableData &&
            firstTableData.map((value) => {
              let keys = Object.keys(value);
              keys.map((game1) => {
                if (game1 != 'id' && value[game1] == numberM) {
                  mainNum = value[game1];
                  let totalCounts = getCountsPrizeSetComm(game1);
                  st1m = parseInt(st1m) + parseInt(totalCounts.st1);  
                  nd2m = parseInt(nd2m) + parseInt(totalCounts.nd2);
                  rd3m = parseInt(rd3m) + parseInt(totalCounts.rd3);
                  Spem = parseInt(Spem) + parseInt(totalCounts.Spe);
                  Conm = parseInt(Conm) + parseInt(totalCounts.Con);
    
                  totalm = st1m + nd2m + rd3m + Spem + Conm;
                  lastPrize = game1;
                  LastDrawDate = moment(value.fetching_date).format("DD/MM/YYYY");
                  LastDrawDay = moment(value.fetching_date).format("ddd");
                  LastGameId = value.game_play_id;
                }
              });
            });
        }
        return (
          <>
            {firstTableData && mainNum ? (
              <tr>
                <td>{firstTableData && mainNum}</td>
                <td>{st1m != 0 ? st1m : ""}</td>
                <td>{nd2m != 0 ? nd2m : ""}</td>
                <td>{rd3m != 0 ? rd3m : ""}</td>
                <td>{Spem != 0 ? Spem : ""}</td>
                <td>{Conm != 0 ? Conm : ""}</td>
                <td align="right">
                  <b>{totalm != 0 ? totalm : ""}</b>
                </td>
                {/* <td align="right">--</td>
              <td align="right">--</td> */}
                <td>{LastDrawDate}</td>
                <td>{t(LastDrawDay)}</td>
                <td>
                  <PrizeSetComm prizeType={lastPrize} />
                </td>
                <td align="center">
                  {oddSet.map((game, id) => {
                    if (LastGameId && game.game_play.id == LastGameId) {
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
            ) : (
              <tr>
                <td colSpan={11}>
                  <div className="alert alert-warning">
                    <h3 className="text-center">{t("no_data_found")}</h3>
                  </div>
                </td>
              </tr>
            )}
            <tr>
              <td>
                <b>{t('Total')}</b>
              </td>
              <td>{st1m != 0 ? st1m : ""}</td>
              <td>{nd2m != 0 ? nd2m : ""}</td>
              <td>{rd3m != 0 ? rd3m : ""}</td>
              <td>{Spem != 0 ? Spem : ""}</td>
              <td>{Conm != 0 ? Conm : ""}</td>
              <td align="right">
                <b>{totalm != 0 ? totalm : ""}</b>
              </td>
              {/* <td align="right">--</td>
              <td align="right">--</td> */}
              <td align="right">
                <b>&nbsp;</b>
              </td>
              <td align="right">
                <b>&nbsp;</b>
              </td>
              <td align="right">
                <b>&nbsp;</b>
              </td>
              <td align="right">
                <b>&nbsp;</b>
              </td>
            </tr>
          </>
        );
      }
      
    let mainst1m = 0;
  let mainnd2m = 0;
  let mainrd3m = 0;
  let mainSpem = 0;
  let mainConm = 0;
  let maintotalm = 0;

    function PrizeSetComm({ prizeType }) {
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

      function getCountsPrizeSetComm(prizeType) {
        let st1 = 0;
        let nd2 = 0;
        let rd3 = 0;
        let Spe = 0;
        let Con = 0;
        if (prizeType == "prize1") {
          st1++;
        } else if (prizeType == "prize2") {
          nd2++;
        } else if (prizeType == "prize3") {
          rd3++;
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
          Spe++;
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
          Con++;
        }
        let totalCounts = {
          st1: st1,
          nd2: nd2,
          rd3: rd3,
          Spe: Spe,
          Con: Con,
        };
        return totalCounts;
      }
  
      return (
  
        <Container>
                  <div className="table-responsive">
                    <table className="table table-striped table-sm small table-bordered text-center">
                      <thead className="bg-dark text-white">
                        <tr>
                          <th>{t('Number')}</th>
                          <th>{t('1st')}</th>
                          <th>{t('2nd')}</th>
                          <th>{t('3rd')}</th>
                          <th>{t('S')}</th>
                          <th>{t('C')}</th>
                          <th className="text-end">{t('Total')}</th>
                          {/* <th className="text-end">Big</th>
                          <th className="text-end">Small</th> */}
                          <th>{t('LastDraw')}</th>
                          <th>{t('Day')}</th>
                          <th>{t('Prize')}</th>
                          <th className="text-center">{t('Source')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {firstTableData &&
                        permutationData &&
                        permutationData.length > 0 ? (
                          <>
                            {firstTableData.length > 0 && permutationData ? (
                              permutationData.map((pdata, index) => {
                                let st1m = 0;
                                let nd2m = 0;
                                let rd3m = 0;
                                let Spem = 0;
                                let Conm = 0;
                                let totalm = 0;
                                let LastDrawDate = "-";
                                let LastDrawDay = "-";
                                let lastPrize = "";
                                let LastGameId = "";
                                let totalCounts = [];
                                {
                                  firstTableData &&
                                    firstTableData.map((value) => {
                                      let keys = Object.keys(value);
                                      keys.map((game1) => {
                                        if (game1 != 'id' && value[game1] == pdata) {
                                          totalCounts = getCountsPrizeSetComm(game1);
                                          st1m = parseInt(st1m) + parseInt(totalCounts.st1);
                                          nd2m = parseInt(nd2m) + parseInt(totalCounts.nd2);
                                          rd3m = parseInt(rd3m) + parseInt(totalCounts.rd3);
                                          Spem = parseInt(Spem) + parseInt(totalCounts.Spe);
                                          Conm = parseInt(Conm) + parseInt(totalCounts.Con);
                                          totalm = st1m + nd2m + rd3m + Spem + Conm;
                                          lastPrize = game1;
                                          LastDrawDate = moment(
                                            value.fetching_date
                                          ).format("DD/MM/YYYY");
                                          LastDrawDay = moment(
                                            value.fetching_date
                                          ).format("ddd");
                                          LastGameId = value.game_play_id;
                                        }
                                      });
                                    });
                                }
                                mainst1m = mainst1m + st1m;
                                mainnd2m = mainnd2m + nd2m;
                                mainrd3m = mainrd3m + rd3m;
                                mainSpem = mainSpem + Spem;
                                mainConm = mainConm + Conm;
                                maintotalm = maintotalm + totalm;
                                return (
                                  <tr key={index}>
                                    <td>{pdata}</td>
                                    <td>{st1m != 0 ? st1m : ""}</td>
                                    <td>{nd2m != 0 ? nd2m : ""}</td>
                                    <td>{rd3m != 0 ? rd3m : ""}</td>
                                    <td>{Spem != 0 ? Spem : ""}</td>
                                    <td>{Conm != 0 ? Conm : ""}</td>
                                    <td align="right">
                                      <b>{totalm != 0 ? totalm : ""}</b>
                                    </td>
                                    {/* <td align="right">--</td>
                                    <td align="right">--</td> */}
                                    <td>{LastDrawDate}</td>
                                    <td>{t(LastDrawDay)}</td>
                                    <td>
                                      <PrizeSetComm prizeType={lastPrize} />
                                    </td>
                                    <td align="center">
                                      {oddSet.map((game, id) => {
                                        if (
                                          LastGameId &&
                                          game.game_play.id == LastGameId
                                        ) {
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
                                <td colSpan={11}>
                                  <div className="alert alert-warning">
                                    <h3 className="text-center">
                                      {t("no_data_found")}
                                    </h3>
                                  </div>
                                </td>
                              </tr>
                            )}
                            <tr>
                              <td>
                                <b>{t('Total')}</b>
                              </td>
                              <td>
                                <b>{mainst1m}</b>
                              </td>
                              <td>
                                <b>{mainnd2m}</b>
                              </td>
                              <td>
                                <b>{mainrd3m}</b>
                              </td>
                              <td>
                                <b>{mainSpem}</b>
                              </td>
                              <td>
                                <b>{mainConm}</b>
                              </td>
                              <td align="right">
                                <b>{maintotalm}</b>
                              </td>
                              {/* <td align="right">
                                <b>--</b>
                              </td>
                              <td align="right">
                                <b>--</b>
                              </td> */}
                              <td align="right">
                                <b>&nbsp;</b>
                              </td>
                              <td align="right">
                                <b>&nbsp;</b>
                              </td>
                              <td align="right">
                                <b>&nbsp;</b>
                              </td>
                              <td align="right">
                                <b>&nbsp;</b>
                              </td>
                            </tr>
                          </>
                        ) : (
                          <>
                            <ForData />
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </Container>
      );
  
  }
  
  export default SecondTableData;