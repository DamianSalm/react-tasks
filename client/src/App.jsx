import {Route, Routes} from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import TasksForm from './pages/TasksForm'
import NotFound from './pages/NotFound'
import Navbar from './components/NavbarComp'
import Tries from './components/TriesComp'





function App(){
  return (
    <>
    <Navbar />
    <Routes>

      <Route path="/" element={ <TasksPage /> } />
      <Route path="/new" element={ <TasksForm /> } />
      <Route path="/tries" element={ <Tries /> } />


      <Route path="*" element={ <NotFound/> } />
    </Routes>
    </>
  )
}

export default App