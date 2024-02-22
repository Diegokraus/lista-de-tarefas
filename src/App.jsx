import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Trash,
  Check,
} from "./styles.js";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function inputMudou(event) {
    setTask(event.target.value);
  }

  function cliqueiNoBotao() {
    if(task){
      setList([...list, { id: uuid(), task, finished: false }]);
    }
  }

  function finishTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  }

  function deleteItem(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <Container>
      <ToDoList>
        <Input
          className="input-value"
          onChange={inputMudou}
          placeholder="O que tenho que fazer..."
        />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem $isFinished={item.finished} key={item.id}>
                <Check onClick={() => finishTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deleteItem(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Não há itens...</h3>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
