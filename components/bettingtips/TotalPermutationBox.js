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
  
  
  
  const TotalPermutationBox = ({permutationData,numberM,reserAllData}) => {
    const { t } = useTranslation();
  
  
      return (
  
    <Container>
        <Card className="alert alert-warning text-dark p-0 rounded-0 border border-warning">
          <CardHeader className="fw-bold">
            {t('Total_Permutation')}:{" "}
            {permutationData && permutationData.length ? permutationData.length : numberM ? 1 : ""}
          </CardHeader>
          <CardBody>
            <ul className="list-inline mb-0">
              {reserAllData && permutationData && permutationData.length
                ? ""
                : numberM}
              {reserAllData &&
                permutationData &&
                permutationData.map((value, index) => {
                  return (
                    
                      <li key={index} className="list-inline-item">
                        <span className="badge bg-light text-dark">
                          {value}
                        </span>
                      </li>
                    
                  );
                })}
            </ul>
          </CardBody>
        </Card>
    </Container>
      );
  
  }
  
  export default TotalPermutationBox;