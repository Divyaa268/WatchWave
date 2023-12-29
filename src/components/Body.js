import React from 'react'
import SidePanel from './SidePanel'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      
      <SidePanel />
      <MainContainer />
    </div>
  )
}

export default Body
