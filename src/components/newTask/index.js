import * as styles from "./style";
import { BiPlus } from "react-icons/bi";

export default function NewTask({ setNewTask, addTask, newTask, isError }) {
  return (
    <styles.Container onSubmit={(e) => addTask(e)} isError={isError}>
      <styles.Input
        onChange={(e) => setNewTask(e.target.value)}
        type="text"
        placeholder="Digite aqui sua tarefa"
        value={newTask}
        required
      />
      <styles.SubmitButton onClick={(e) => addTask(e)}>
        <BiPlus size="20" />
      </styles.SubmitButton>
    </styles.Container>
  );
}
