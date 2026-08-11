import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Calendar from './page/Calendar'
import Reminder from './page/Reminder'
import Setting from './page/Setting'
import MainLayout from './layouts/MainLayout'
import Register from './page/Register'
import Login from './page/Login'

function App() {

  return (
    <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          
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
