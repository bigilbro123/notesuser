
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'
import { useEffect, useState } from 'react'

function App() {
  const [user, setuser] = useState({})

  console.log(user);
  useEffect(() => {
    const checkuser = () => {
      const getuser = JSON.parse(localStorage.getItem('appuser'))
      setuser(getuser)


    }
    checkuser()

  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={user ? (<Home user={user} />) : (<Navigate to="/login" />)} />
        <Route path={'/login'} element={!user ? (<Login />) : (<Navigate to='/' />)} />
        <Route path={'/signup'} element={!user ? (<Signup />) : (<Navigate to={'/'} />)} />

      </Routes>


    </>
  )
}

export default App
