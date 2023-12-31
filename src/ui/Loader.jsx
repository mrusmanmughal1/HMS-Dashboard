import React from 'react'
import pic from '../data/load.gif'
const Loader = ({width}) => {
  return (
    <div className='flex justify-center items-center py-5 '>

        <img src={pic} alt='loader' width={width ?? 150} height={150}/>
    </div>
  )
}

export default Loader