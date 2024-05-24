import React, { useState } from 'react'
import Search from './components/Search'

const App = () => {

  return (
    <div className='h-screen bg-purple-100'>
      <div className='flex w-screen justify-center '>
       <h2 className='jacquard text-center text-4xl text-purple-800 mt-[5rem]'>The <br /> <span className='text-purple-500 text-[5rem]'>Dictionary</span></h2>
      </div>
      <Search />
    </div>
  )
}

export default App
