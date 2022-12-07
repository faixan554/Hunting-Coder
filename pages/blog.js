import React from 'react'
import Link from 'next/link'

function Blog() {
  return (
    <div className='text-center pt-20 space-y-5 text-lg pb-20'>
        <div>
          <Link href={'/blogpost/learn-javascript'}>
              <h1 className='text-2xl cursor-pointer'>How to learn Javascript</h1>
          </Link>
          <p className='text-base'>learn Javascript in one video is the best way to learn Javascript</p>
        </div>
        <div>
          <h1 className='text-2xl'>How to learn Javascript</h1>
          <p className='text-base'>learn Javascript in one video is the best way to learn Javascript</p>
        </div>
        <div>
          <h1 className='text-2xl'>How to learn Javascript</h1>
          <p className='text-base'>learn Javascript in one video is the best way to learn Javascript</p>
        </div>
        <div>
          <h1 className='text-2xl'>How to learn Javascript</h1>
          <p className='text-base'>learn Javascript in one video is the best way to learn Javascript</p>
        </div>
        
      
      </div>

  )
}

export default Blog