import {Route, Routes} from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import TasksForm from './pages/TasksForm'
import NotFound from './pages/NotFound'
import Navbar from './components/NavbarComp'
import Tries from './components/TriesComp'
import {TaskContextProvider} from './context/TaskProvider'





function App(){
  return (
    <TaskContextProvider>
      <Navbar />
      <div className='bg-zinc-900 h-screen px-40'>
      <Routes>

        <Route path="/" element={ <TasksPage /> } />
        <Route path="/new" element={ <TasksForm /> } />
        <Route path="/edit/:id" element={ <TasksForm /> } />
        <Route path="/tries" element={ <Tries /> } />

        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </div>
    </TaskContextProvider>
  )
}

export default App