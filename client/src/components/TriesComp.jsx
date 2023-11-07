import { getTasksReq } from '../api/tasks.api'
import { useEffect, useState } from 'react'
import TaskCard from './TaskCard'


function Tries() {

  const [tasks, setTasks] = useState([])

  useEffect( ()=>{
    const loadTasks = async () => {
      const response = await getTasksReq();
      setTasks(response.data)
    }
    loadTasks();}, [])

  return(
    <>
    <h1> Function Tries </h1>
    {tasks.map( (task) => (<TaskCard task={task} key={task.id} />))}
    </>
  )
  }

export default Tries

