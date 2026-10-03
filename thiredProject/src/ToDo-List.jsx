import { useState } from "react";
import { ChecklistAlt, Check, ArrowUp2, ArrowDown2 } from "reicon-react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addTask(e) {
    e.preventDefault();
    if (newTask.trim() !== "") setTasks((t) => [...t, newTask]);

    setNewTask("");
  }

  function deleteTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [ updatedTask[index + 1], updatedTask[index],
      ];
      setTasks(updatedTask)
    }
  }

  return (
    <div className="ToDoList-container">
      <ChecklistAlt className="task-icons" />
      <h1>To-Do List</h1>
      <form>
        <input
          className="task-input"
          type="text"
          placeholder="Enter a Task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={addTask} className="btn1">
          Add
        </button>
      </form>

      <ol>
        {tasks.map((task, i) => (
          <li key={i} className="task-li">
            <span className="tak-name">{task}</span>
            <div onClick={(e) => moveUp(i)} className="up">
              <ArrowUp2 />
            </div>
            <div onClick={(e) => moveDown(i)} className="down">
              <ArrowDown2 />
            </div>
            <div onClick={(e) => deleteTask(i)} className="delete">
              <Check />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
