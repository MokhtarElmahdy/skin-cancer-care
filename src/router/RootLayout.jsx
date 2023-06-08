import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function RootLayout() {
  return (
    <React.Fragment>
        <Navbar/>
        <main className='min-h-screen pt-16'>
        <Outlet/>
        </main>
        <Footer/>
    </React.Fragment>
  )
}
