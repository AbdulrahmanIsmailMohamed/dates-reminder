/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "react-bootstrap";
import { person } from "./data";
import { ListContent } from "./components/ListContent";
import { ListCount } from "./components/ListCount";
import { ListAction } from "./components/ListAction";
import { useEffect, useState } from "react";

function App() {
  const [personData, setPersonData] = useState(person);

  // it run when the page refresh or load
  useEffect(() => {
    setPersonData([]);
  }, []);

  const deleteItems = () => {
    setPersonData([]);
  };

  const showItems = () => {
    setPersonData(person);
  };

  return (
    <div className="font color-body py-5">
      <Container className="py-5">
        <ListCount person={personData} />
        <ListContent person={personData} />
        <ListAction deleteItems={deleteItems} showItems={showItems} />
      </Container>
    </div>
  );
}

export default App;
