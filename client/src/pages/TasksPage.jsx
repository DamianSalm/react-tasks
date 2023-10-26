import { getTasksReq } from '../api/tasks.api'
import { useEffect, useState } from 'react'
import TaskCard from '../components/TaskCard'
import axios from 'axios'


function TasksPage () {

  const [tasks, setTasks] = useState([])

  useEffect( () => {
    const loadTasks = async () => {
      const response = await getTasksReq();
      setTasks(response.data);
    }
    loadTasks();
  }, []);


  return (
    <div>
      <h1> Tasks Landing Page! </h1>

      {tasks.map( (task) => (<TaskCard task={task} key={task.id} />))}
    </div>
  );
}

export default TasksPage