import { Button, Col, Row } from "react-bootstrap";

interface Props {
  deleteItems: () => void;
  showItems: () => void;
}

export const ListAction = ({ deleteItems, showItems }: Props) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="d-flex justify-content-between">
        <Button onClick={deleteItems} className="btn-style p-2">
          مسح الكل
        </Button>
        <Button onClick={showItems} className="btn-style p-2">
          عرض البيانات
        </Button>
      </Col>
    </Row>
  );
};
