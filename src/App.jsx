 import React from 'react'
import Background from './Components/Background'
 
 const App = () => {
   
   return (
       <div className='relative w-full h-screen bg-zinc-800'> 
          <Background></Background>


          <div className='fixed top-0 left-0 z-[3] w-full h-full  '> </div>

       </div>
   )
 }
 
 export default App