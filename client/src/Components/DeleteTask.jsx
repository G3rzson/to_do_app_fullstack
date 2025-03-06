import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import trash from "../assets/trash.svg";

export default function DeleteTask({ id }) {
  const { refreshing, setRefreshing, setTaskError, setLoading } =
    useContext(GlobalContext);

  const handleDeleteTask = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8000/deleteOneTask/?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setRefreshing(!refreshing);
      setLoading(false);
    } catch (error) {
      setTaskError(error.message);
      setLoading(false);
    }
  };

  return (
    <button className="w-4 h-4" onClick={() => handleDeleteTask(id)}>
      <img src={trash} alt="trash-icon" />
    </button>
  );
}
