import React from 'react'
import UserLayouts from './layouts/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<UserLayouts/>} >
        <Route index element={<Home/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App