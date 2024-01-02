import React from 'react'
import SidePanel from './SidePanel'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      
      <SidePanel />
      {/* <MainContainer /> */}
      <Outlet />
    </div>
  )
}

export default Body
