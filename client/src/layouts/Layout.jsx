import React from 'react'
import Header from '../components/layoutComponents/Header'
import Footer from '../components/layoutComponents/Footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>

    <Outlet/>

    <Footer/>
    </>
  )
}

export default Layout