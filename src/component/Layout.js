import React from 'react'
import { Outlet } from 'react-router-dom'
import Header  from "./Header"
import CartTab from "./CartTab"
import statustab from "../store/cart"

function Layout() {
  return (
    <div className='bg-zinc-200'>
      <main className={`w-[1200px] max-w-full p-5 m-auto ${statustab === false ? "-translate-x-28 transition-transform " : ""}`}>
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  )
}

export default Layout
