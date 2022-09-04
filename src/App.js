import { useState } from "react";
import NewTask from "./components/newTask";
import styled from "styled-components";
import Task from "./components/task";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  width: 700px;
  min-height: 100vh;
  margin: 0 auto;
`;

const Content = styled.div`
  height: 300px;
  width: fit-content;
  padding-right: 25px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ disabled }) => (disabled ? "transparent" : "#000")};
  }
  ::-webkit-scrollbar-thumb {
    background-image: linear-gradient(to right, #a04ff8, #9d50f0, #b33dd9);
    width: 5px;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #cecece;
  }
`;

const TextError = styled.p`
  font-size: 12px;
  font-style: italic;
  color: red;
`;

const ClearButton = styled.button`
  margin: 10px 0;
  font-size: 12px;
  padding: 0 8px;
  border-radius: 5px;
  border: none;
  background-color: ${({ disabled }) => (disabled ? "#cecece" : "red")};
  color: #fff;
  height: 35px;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  transition: 0.5s all;

  :hover {
    filter: ${({ disabled }) => !disabled && "brightness(90%)"};
  }
`;

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isError, setIsError] = useState(false);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.length === 0 || !newTask.trim()) {
      setIsError(true);
    } else {
      setNewTask("");
      setIsError(false);
      setTaskList([...taskList, { id: uuidv4(), task: newTask }]);
    }
  };

  const removeTask = (item) => {
    setTaskList((prevState) => prevState.filter((task) => task.id !== item.id));
  };

  const clearList = () => {
    setTaskList([]);
  };

  return (
    <Container>
      <h2>TO DO LIST</h2>
      <NewTask
        setNewTask={setNewTask}
        addTask={addTask}
        newTask={newTask}
        isError={isError}
      />
      {isError && <TextError>Digite alguma tarefa</TextError>}
      <ClearButton onClick={() => clearList()} disabled={taskList?.length < 1}>
        Limpar lista
      </ClearButton>
      <Content disabled={taskList?.length < 1}>
        <Task taskList={taskList} removeTask={removeTask} />
      </Content>
    </Container>
  );
}
