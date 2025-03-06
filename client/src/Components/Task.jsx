import { useRef, useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";
import CheckBtn from "./CheckBtn";

export default function Task({ task, id }) {
  const inputRef = useRef(null);
  const { editedTaskId, setEditedTask, editedTask } = useContext(GlobalContext);

  const handleEditingTask = (e) => {
    setEditedTask(e.target.value);
  };

  return (
    <div
      key={id}
      className="p-2 bg-gray-600 rounded w-full flex items-center justify-between"
    >
      {editedTaskId === id ? (
        <div className="flex items-center justify-between w-full gap-3">
          <input
            ref={inputRef}
            value={editedTask}
            onChange={handleEditingTask}
            className="border-none outline-none w-full bg-transparent"
          />
          <CheckBtn id={id} editedTask={editedTask} />
        </div>
      ) : (
        <>
          <span>{task}</span>
          <div className="flex items-center justify-center gap-4">
            <EditTask id={id} task={task} inputRef={inputRef} />
            <DeleteTask id={id} />
          </div>
        </>
      )}
    </div>
  );
}
