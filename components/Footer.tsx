import React from 'react'

const Footer = () => {
  return (
    <div className='py-4 flex justify-center md:justify-between items-center'>
        <p className=' whitespace-nowrap hidden md:block'>made with ❤️</p>
        <p className=' whitespace-nowrap '>© 2024 zyllux digital. All rights reserved.</p>
        <p className=' whitespace-nowrap hidden md:block'>by <a href='https://www.instagram.com/hamzaxbella/' target='_blank' className='font-medium'>zyllux digital</a></p>
    </div>
  )
}

export default Footer