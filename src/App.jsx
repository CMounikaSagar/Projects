import './App.css'
import Drop from './components/Drop'
import Form from './components/form'
import Hod from './components/Hod'
import Hof from './components/Hof'
import Dropss from './components/api/Dropss'
import Droph from './components/api/Droph'
import DropG from './components/api/DropG'
import { Route, Routes } from 'react-router-dom'
import DropP from './components/api/DropP'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<DropG />} />
      <Route path='/edit/:id' element={<DropP />} />
    </Routes>
    </>
  )
}

export default App
