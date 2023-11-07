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
    <div className='bg-slate-400 rounded-xl p-4 m-2 flex-vertical justify-between'>
      <header className='flex justify-between'>
        <h1 className='text-lg font-bold'>{ task.title }</h1>
        <button className='px-1 hover:rounded-full hover:bg-slate-600' onClick={()=> handleDone(task.done)}>{ task.done == 1 ? "🗸" : "❌" }</button>
      </header>
      <h4 className='text-sm font-medium'>{ task.description }</h4>
      {/* <span>{ task.createdAt }</span> */}
      <div className='flex gap-x-2'>
        <button className='rounded-md bg-red-500 px-2 py-1 my-2 text-white hover:brightness-125 hover:rounded' onClick={() => deleteTask(task.id)}>
          Delete
        </button>
        <button className='rounded-md bg-blue-500 px-2 py-1 my-2 text-white hover:brightness-125 hover:rounded' onClick={() => navigate(`edit/${task.id}`)}>
          Edit
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
};


export default TaskCard