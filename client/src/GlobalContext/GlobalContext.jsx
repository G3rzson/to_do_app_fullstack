import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export function GlobalState({ children }) {
  const [taskField, setTaskField] = useState("");
  const [taskError, setTaskError] = useState("");
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [editedTaskId, setEditedTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        taskField,
        setTaskField,
        taskError,
        setTaskError,
        loading,
        setLoading,
        tasks,
        setTasks,
        refreshing,
        setRefreshing,
        editedTaskId,
        setEditedTaskId,
        editedTask,
        setEditedTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
