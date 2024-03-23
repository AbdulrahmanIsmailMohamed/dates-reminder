/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "react-bootstrap";

export const ListCount = ({person}) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="mb-2">
        لديك {person.length} مواعيد اليوم:
      </Col>
    </Row>
  );
};
