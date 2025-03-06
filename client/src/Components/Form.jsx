import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";

export default function Form() {
  const {
    taskField,
    setTaskField,
    taskError,
    setTaskError,
    loading,
    setLoading,
    refreshing,
    setRefreshing,
  } = useContext(GlobalContext);

  const handleInputChange = (e) => {
    setTaskField(e.target.value);
    setTaskError("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (taskField === "") {
      setTaskError("Add meg a taskot!");
      return;
    }

    try {
      setLoading(true);
      setTaskError("");
      const response = await fetch("http://localhost:8000/addTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: taskField }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setRefreshing(!refreshing);
      setLoading(false);
      setTaskField("");
    } catch (error) {
      setTaskError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <p className="text-red-400 text-center mb-2">{taskError}</p>
      <form className="flex flex-col gap-2 w-96 mx-auto mb-8">
        <input
          type="text"
          value={taskField}
          onChange={(e) => handleInputChange(e)}
          className="text-sm rounded border-none outline-none p-2 w-full"
          placeholder="Adj hozzá a feladatot..."
          required
        />
        <button
          className={`py-2 px-4 rounded bg-green-800 hover:bg-green-600 font-medium ${
            loading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          type="submit"
          onClick={(e) => handleFormSubmit(e)}
          disabled={loading}
        >
          Hozzáadás
        </button>
      </form>
    </>
  );
}
