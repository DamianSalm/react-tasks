import { TaskContext } from "./TaskContext";
import { useContext, useState } from "react";
import {
  getTasksReq,
  getTaskReq,
  createTaskReq,
  deleteTaskReq,
  updateTaskReq,
  toggleTaskReq,
} from "../api/tasks.api";

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  //load tasks
  const loadTasks = async () => {
    const response = await getTasksReq();
    setTasks(response.data);
  };
  //get one
  const getTask = async (id) => {
    try {
      const response = await getTaskReq(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  //create
  const createTask = async (task) => {
    try {
      const response = await createTaskReq(task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error(error);
    }
  };
  //update
  const updateTask = async (id, task) => {
    try {
      const response = await updateTaskReq(id, task);
      // setTasks(tasks.forEach(item => if (item.id == id) {
      //   item.title = task.title
      //   item.description = task.description
      // }))
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  //delete
  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskReq(id);
      console.log(response.data);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  //toggle
  const toggleTask = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskReq(id, taskFound.done === 0 ? true : false);
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        getTask,
        deleteTask,
        createTask,
        updateTask,
        toggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
