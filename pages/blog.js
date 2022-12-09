import React, { useEffect , useState } from 'react'
import Link from 'next/link'

// fetch data using useEffect
function Blog() {

  const [blogdata, setBlogdata] = useState([])
   useEffect(() => {
    fetch('http://localhost:3000/api/blogs').then((res) => res.json())
     .then((data) => {
        setBlogdata(data);
        console.log(data);
      })
    },[])
    

  return (
    <div className='text-center pt-16 space-y-5 text-lg pb-20'>
      <h1 className='text-6xl'>Latest Blogs</h1>
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

        
      
      </div>

  )
}

export default Blog