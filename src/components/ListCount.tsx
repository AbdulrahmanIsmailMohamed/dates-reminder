import { Col, Row } from "react-bootstrap";
import { ListProps } from "../types/person.type";


export const ListCount = ({ person }: ListProps) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="mb-2">
        لديك {person.length} مواعيد اليوم:
      </Col>
    </Row>
  );
};
