import './App.css'
import CreateTask from './components/CreateTask'
import Tasks from './pages/Tasks'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
      <CreateTask />
      <Routes>
        <Route path="tasks" element={<Tasks />} />
      </Routes>
    </>
  )
}

export default App
