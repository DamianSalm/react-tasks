import axios from "axios";

export const getTasksReq = async () =>
  await axios.get("http://localhost:4000/tasks");

export async function getTaskReq(id) {
  return await axios.get(`http://localhost:4000/tasks/${id}`);
}

export async function createTaskReq(task) {
  return await axios.post("http://localhost:4000/tasks", task);
}

export async function updateTaskReq(id, task) {
  return await axios.put(`http://localhost:4000/tasks/${id}`, task);
}

export async function deleteTaskReq(id) {
  return await axios.delete(`http://localhost:4000/tasks/${id}`);
}

export async function toggleTaskReq(id, done) {
  return await axios.put(`http://localhost:4000/tasks/${id}`, {
    done,
  });
}