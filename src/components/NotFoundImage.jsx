import React from 'react'
import image from '../assets/images/no-results-found.png';

function NotFoundImage() {
  return (
    <div className='w-100 text-center'>
      <img src={image} alt="" srcset="" className='w-50' />
    </div>
  )
}

export default NotFoundImage