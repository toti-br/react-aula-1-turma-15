import axios from "axios";
import { useEffect, useState } from "react";

import FormTask from "./components/molecules/form-task";
import TaskList from "./components/organisms/task-list";

import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/tasks");
      setTasks(response.data);

      // ALTERNATIVA COM FETCH
      /* let response = await fetch("http://localhost:3000/tasks");
      response = await response.json();
      setTasks(response.data) */
    };
    getData();
  }, []);

  const addNewTask = async function (newTask) {
    const response = await axios.post("http://localhost:3000/tasks", {
      ...newTask,
      done: false,
    });
    setTasks(function (oldTaskList) {
      return [...oldTaskList, response.data];
    });
  };

  const toggleComplete = async function (done, id) {
    const response = await axios.patch(`http://localhost:3000/tasks/${id}`, {
      done,
      //é a mesma coisa que `done: done`
    });
    const updatedTask = response.data;

    setTasks((oldTasks) => {
      const oldTaskIndex = oldTasks.findIndex((task) => {
        return task.id === updatedTask.id;
      });
      const newTasks = [...oldTasks];
      newTasks[oldTaskIndex] = updatedTask;
      return newTasks;
    });
  };

  const removeTask = async function (id) {
    const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
    if (response.status === 200) {
      setTasks((oldTaskList) => {
        return oldTaskList.filter((task) => task.id !== id);
      });
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <FormTask onSubmit={addNewTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
      />
    </div>
  );
}
