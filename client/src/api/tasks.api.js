import axios from "axios"


export async function getTasksReq() {
  return await axios.get("http://localhost:4000/tasks");}


export const createTaskReq = async (task) => 
  await axios.post("http://localhost:4000/tasks", task);


export const updateTaskReq = async (task) => 
  await axios.put("http://localhost:4000/tasks", task);

