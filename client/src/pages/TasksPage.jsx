import { useEffect } from 'react'
import { useTasks } from '../context/TaskProvider';
import TaskCard from '../components/TaskCard'


function TasksPage () {

  const { tasks, loadTasks } = useTasks();

  useEffect( () => {
    loadTasks();
  }, []);

  function renderMain() {
    if(tasks.length == 0) return "No tasks yet"
    return tasks.map( (task) => (<TaskCard task={task} key={task.id} />))

}

  return (
    <div className='p-4'>
      <h1 className='text-5xl text-white font-bold text-center py-4'> Tasks here! </h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'>
        {renderMain()}
      </div>
    </div>
  );
}

export default TasksPage