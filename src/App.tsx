import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="font color-body">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col sm="8" className="">
            لديك اربع مواعيد اليوم:
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8" className="">
            <div className="rectangle"></div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8" className="d-flex justify-content-between">
            <Button className="btn-style p-2">مسح الكل</Button>
            <Button className="btn-style p-2">عرض البيانات</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
