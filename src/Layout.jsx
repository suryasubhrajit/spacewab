import React from 'react'
import { Outlet } from 'react-router-dom'
import Header  from './components/_header'
import  Footer  from './components/_footer'

function Layout() {
  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
  )
}

export default Layout