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



const DrawSummaryBoxes = ({mainCard}) => {
  const { t } = useTranslation();


    return (

        <Container>
                  <Row className="justify-content-center">
                    <Col md="3">
                      <Card className="border-info">
                        <CardBody>
                          <div className="d-flex align-items-center">
                            <div className="icon-widget bg-info rounded">
                              <div className="icon-widget-out">
                                <img src="assets/images/target.png" />
                              </div>
                            </div>
                            <div className="widget-text">
                              <p className="fw-bold mb-0 fs-5">
                                <b>
                                  {mainCard && mainCard.total_hits
                                    ? mainCard.total_hits
                                    : 0}
                                </b>
                              </p>
                              <p className="mb-0 fs-6">{t('Total_Hits')}</p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="3">
                      <Card className="border-info">
                        <CardBody>
                          <div className="d-flex align-items-center">
                            <div className="icon-widget bg-info rounded">
                              <div className="icon-widget-out">
                                <img src="assets/images/gap.png" />
                              </div>
                            </div>
                            <div className="widget-text">
                              <p className="fw-bold mb-0 fs-5">
                                <b>
                                  {mainCard && mainCard.max_draw_gap
                                    ? mainCard.max_draw_gap
                                    : 0}{" "}
                                  {t('Draws')}
                                </b>
                              </p>
                              <p className="mb-0 fs-6">{t('Max_DrawGap')}</p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="3">
                      <Card className="border-info">
                        <CardBody>
                          <div className="d-flex align-items-center">
                            <div className="icon-widget bg-info rounded">
                              <div className="icon-widget-out">
                                <img src="assets/images/min-gap.png" />
                              </div>
                            </div>
                            <div className="widget-text">
                              <p className="fw-bold mb-0 fs-5">
                                <b>
                                  {mainCard && mainCard.min_draw_gap
                                    ? mainCard.min_draw_gap
                                    : 0}{" "}
                                  {t('Draws')}
                                </b>
                              </p>
                              <p className="mb-0 fs-6">{t('Min_DrawGap')}</p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="3">
                      <Card className="border-info">
                        <CardBody>
                          <div className="d-flex align-items-center">
                            <div className="icon-widget bg-info rounded">
                              <div className="icon-widget-out">
                                <img src="assets/images/avg-gap.png" />
                              </div>
                            </div>
                            <div className="widget-text">
                              <p className="fw-bold mb-0 fs-5">
                                <b>
                                  {mainCard && mainCard.avg_draw_gap
                                    ? mainCard.avg_draw_gap
                                    : 0}{" "}
                                  {t('Draws')}
                                </b>
                              </p>
                              <p className="mb-0 fs-6">{t('Avg_DrawGap')}</p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="3">
                      <Card className="border-info">
                        <CardBody>
                          <div className="d-flex align-items-center">
                            <div className="icon-widget bg-info rounded">
                              <div className="icon-widget-out">
                                <img src="assets/images/last-hit.png" />
                              </div>
                            </div>
                            <div className="widget-text">
                              <p className="fw-bold mb-0 fs-5">
                                <b>
                                  #
                                  {mainCard && mainCard.last_hit_draw_no
                                    ? mainCard.last_hit_draw_no
                                    : ""}
                                </b>
                              </p>
                              <p className="mb-0 fs-6">{t('Last_Hit_DrawNo')}</p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="3">
                      <Card className="border-info">
                        <CardBody>
                          <div className="d-flex align-items-center">
                            <div className="icon-widget bg-info rounded">
                              <div className="icon-widget-out">
                                <img src="assets/images/next-hit.png" />
                              </div>
                            </div>
                            <div className="widget-text">
                              <p className="fw-bold mb-0 fs-5">
                                <b>
                                  #
                                  {mainCard && mainCard.last_hit_draw_id
                                    ? mainCard.last_hit_draw_id
                                    : ""}
                                </b>
                              </p>
                              <p className="mb-0 fs-6">{t('Last_Hit_DrawID')}</p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="3">
                      <Card className="border-info">
                        <CardBody>
                          <div className="d-flex align-items-center">
                            <div className="icon-widget bg-info rounded">
                              <div className="icon-widget-out">
                                <img src="assets/images/latest.png" />
                              </div>
                            </div>
                            <div className="widget-text">
                              <p className="fw-bold mb-0 fs-5">
                                <b>
                                  #
                                  {mainCard &&
                                  mainCard.last_hit_draw_no &&
                                  mainCard.avg_draw_gap
                                    ? parseInt(mainCard.last_hit_draw_no) +
                                      parseInt(mainCard.avg_draw_gap)
                                    : ""}
                                </b>
                              </p>
                              <p className="mb-0 fs-6">{t('Estimate_Next_Hit_DrawNo')}</p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="3">
                      <Card className="border-info">
                        <CardBody>
                          <div className="d-flex align-items-center">
                            <div className="icon-widget bg-info rounded">
                              <div className="icon-widget-out">
                                <img src="assets/images/icons/calendar-small.png" />
                              </div>
                            </div>
                            <div className="widget-text">
                              <p className="fw-bold mb-0 fs-5">
                                <b>
                                  {mainCard && mainCard.estimate_next_draw_date ? mainCard.estimate_next_draw_date : 0}
                                </b>
                              </p>
                              <p className="mb-0 fs-6">{t('Estimate_Next_Draw_Date')}</p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Container>
    );

}

export default DrawSummaryBoxes;