import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Calendar from './page/Calendar'
import Reminder from './page/Reminder'
import Setting from './page/Setting'
import MainLayout from './layouts/MainLayout'
import Register from './page/Register'
import Login from './page/Login'
import Privacy from './page/Privacy'
import Help from './page/Help'
import About from './page/About'

function App() {

  return (
    <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/help" element={<Help />} />
          
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path='/reminder' element={<Reminder/>}/>
          <Route path='/settings' element={<Setting/>} />
        </Route>
    </Routes>
  )
}

export default App
