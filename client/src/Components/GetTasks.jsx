import { useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import "./scrollbar.css";
import { fetchTasks } from "./FetchTask";
import Task from "./Task";
import { PuffLoader } from "react-spinners";

export default function GetTasks() {
  const { tasks, setTasks, refreshing, setTaskError, loading } =
    useContext(GlobalContext);

  // Fetch tasks from server
  useEffect(() => {
    fetchTasks(setTasks, setTaskError);
  }, [refreshing]);

  return (
    <>
      {loading ? (
        <div className="flex text-center justify-center">
          <PuffLoader color="green" />
        </div>
      ) : (
        <div className="w-96 mx-auto flex items-center justify-center gap-2 flex-col">
          {tasks && tasks.length !== 0 ? (
            tasks.map((task) => {
              return <Task key={task._id} task={task.task} id={task._id} />;
            })
          ) : (
            <div className="h-28 text-2xl text-green-500 flex items-center justify-center">
              Nincsenek tennivalóid 😁
            </div>
          )}
        </div>
      )}
    </>
  );
}
