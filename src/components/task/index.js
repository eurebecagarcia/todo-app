import { FiTrash2 } from "react-icons/fi";
import * as styles from "./style";

export default function Task({ taskList, removeTask }) {
  return (
    <>
      {taskList?.length < 1 ? (
        <styles.EmptyTitle>
          <h2>Nenhuma tarefa cadastrada</h2>
        </styles.EmptyTitle>
      ) : (
        taskList?.map((item) => (
          <styles.Container key={item.id}>
            <p>{item.task}</p>
            <FiTrash2
              size="20"
              style={{ cursor: "pointer" }}
              onClick={() => removeTask(item)}
            />
          </styles.Container>
        ))
      )}
    </>
  );
}
