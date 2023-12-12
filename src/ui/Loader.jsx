import React from 'react'
import pic from '../data/load.gif'
const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full py-10'>

        <img src={pic} alt='loader' width={150} height={150}/>
    </div>
  )
}

export default Loader