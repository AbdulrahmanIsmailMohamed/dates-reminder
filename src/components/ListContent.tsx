import { Col, Row } from "react-bootstrap";
import { ErrorNotFound } from "./ErrorNotFount";
import { ListProps, Person } from "../types/person.type";

export const ListContent = ({person}: ListProps) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle my-2 px-3">
          {person.length !== 0 ? (
            person.map((item: Person) => (
              <div key={item.id} className="d-flex border-bottom py-2">
                <img
                  className="img-avatar"
                  src={item.photo}
                  alt=""
                  srcSet="this item not constain a photo"
                />
                <div className="mx-2">
                  <p className="d-inline fs-5">{item.name}</p>
                  <p className=" fs-6">{item.date}</p>
                </div>
              </div>
            ))
          ) : (
            <ErrorNotFound />
          )}
        </div>
      </Col>
    </Row>
  );
};
