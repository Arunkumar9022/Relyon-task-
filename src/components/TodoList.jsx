import React, { useState } from "react";
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    // if (taskInput.trim() === " ") return;

    if (taskInput.trim() === "") return;

    if (editIndex === null) {
      setTasks([...tasks, taskInput]);
    } else {
      const updatetask = [...tasks];
      updatetask[editIndex] = taskInput;
      setTasks(updatetask);
      setEditIndex(null);
    }
    setTaskInput("");
  };

  const deleteTask = (index) => {
    const updateTask = [...tasks];
    updateTask.splice(index, 1);
    setTasks(updateTask);
  };

  const editTask = (index) => {
    setTaskInput(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ backgroundColor: "blanchedalmond", minHeight: "100vh",width:"1200px" }}>
      <div className="container">
      <h1 className="text-center">TodoList</h1>
        <div className="mb-3">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            type="button"
            onClick={addTask}
            className="btn btn-primary px-5 ms-2"
          >
            {editIndex === null ? "Add" : "update"}
          </button>
        </div>
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-center align-items-center"
            >
              {task}
              <span
                className="badge btn btn-primary px-5 py-2 ms-3"
                onClick={() => editTask(index)}
              >
                √
              </span>
              <span
                className="badge btn btn-danger px-5 py-2 ms-2"
                onClick={() => deleteTask("index")}
              >
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoList;
