// import { updateTaskReq } from '../api/tasks.api'
import { useTasks } from '../context/TaskProvider';
import { useNavigate } from 'react-router-dom'

function TaskCard({ task }) {

  const { deleteTask, toggleTask } = useTasks()
  const navigate = useNavigate()
  const handleDone = async () => {
    await toggleTask(task.id)
  }


  return(
    <div>
        <h1>{ task.title }</h1>
        <h4>{ task.description }</h4>
        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>
        <button onClick={() => navigate(`edit/${task.id}`)}>
          Edit
        </button>
        <br></br>
        <button onClick={()=> handleDone(task.done)}>{ task.done == 1 ? "🗸" : "❌" }</button>
        <br></br>
        <br></br>
    </div>
  )
};


export default TaskCard