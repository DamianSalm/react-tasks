import axios from 'axios'


export const getTaskReq = async () => {
  await axios.get("http://localhost:4000/tasks");
}

export const createTaskReq = async (task) => {
  await axios.post('http://localhost:4000/tasks', task)
}