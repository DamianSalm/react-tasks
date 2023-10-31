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
    <div>
      <h1> Tasks Landing Page! </h1>
      {renderMain()}
    </div>
  );
}

export default TasksPage