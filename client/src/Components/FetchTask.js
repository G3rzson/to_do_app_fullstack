export const fetchTasks = async (setTasks, setTaskError) => {
  try {
    setTaskError("");
    const response = await fetch("http://localhost:8000/getAllTasks");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    setTasks(data.reverse());
  } catch (error) {
    setTaskError(error.message);
  }
};
