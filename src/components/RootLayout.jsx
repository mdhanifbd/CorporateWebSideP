import React from 'react'
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from 'react-router'
const RootLayout = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout
