import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import edit from "../assets/edit.svg";

export default function EditTask({ id, task, inputRef }) {
  const { setEditedTaskId, setEditedTask } = useContext(GlobalContext);

  const handleEditTask = (id, task) => {
    setEditedTaskId(id);
    setEditedTask(task);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };
  return (
    <button className="w-4 h-4" onClick={() => handleEditTask(id, task)}>
      <img src={edit} alt="edit-icon" />
    </button>
  );
}
