import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Footer from './components/Footer'
import Cart from './pages/Cart'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
