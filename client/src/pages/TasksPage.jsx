import { useEffect, useState } from 'react'
import { getTaskReq } from '../api/tasks.api'


function TasksPage () {
  

  useEffect( () => {
    async function loadTasks() {
      const resp = await getTaskReq()
      console.log(resp)
    }
    loadTasks()
  }, [])
  
  
  return (
    <div>
      <h1>
        Tasks Landing Page!
      </h1>


    </div>
   )
}

export default TasksPage