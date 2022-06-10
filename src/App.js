import { useState } from "react";

import FormTask from "./components/molecules/form-task";
import TaskList from "./components/organisms/task-list";

import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([{ title: "Titulo da Tarefa", id: "0" }]);

  const addNewTask = function (newTask) {
    setTasks(function (oldTaskList) {
      const newId = `${oldTaskList.length}`;
      const newTasks = [...oldTaskList];

      newTasks.push({
        ...newTask,
        id: newId,
      });

      return newTasks;
    });
  };

  const removeTask = function (id) {
    setTasks((oldTaskList) => {
      return oldTaskList.filter((task) => task.id !== id);
    });
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <FormTask onSubmit={addNewTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}
