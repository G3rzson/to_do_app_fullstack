import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import check from "../assets/check.svg";

export default function CheckBtn({ id }) {
  const {
    refreshing,
    setRefreshing,
    editedTask,
    setEditedTaskId,
    setTaskError,
    setLoading,
  } = useContext(GlobalContext);

  const handleCheckTask = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8000/updateOneTask/?id=${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task: editedTask }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setEditedTaskId(null);
      setRefreshing(!refreshing);
      setLoading(false);
    } catch (error) {
      setTaskError(error.message);
      setLoading(false);
    }
  };

  return (
    <button className="w-4 h-4" onClick={() => handleCheckTask(id)}>
      <img src={check} alt="check-icon" />
    </button>
  );
}
