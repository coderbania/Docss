import React, { useRef } from 'react'
import Card from './Card'
 

const Foregorund = () => {
const ref =useRef(null);
  return (
    <div ref={ref} className=' flex px-10 py-10 gap-[20px] fixed top-0 left-0 z-[3] w-full h-full  '>
      
      <Card reference={ref}></Card>
       
       </div>
  )
}

export default Foregorund
