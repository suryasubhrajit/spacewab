import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/_header'
import Footer from './components/_footer'

function Layout() {
  return (
    <>
      <main className="bg-[#F5EFFF] dark:bg-[#121212] h-screen w-full">
        <Header />
        <section>
          <Outlet />
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Layout