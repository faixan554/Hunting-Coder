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
        {blogdata.map((blogitem)=>{
          return <div key={blogitem.title}>
            <Link href={'/blogpost/learn-javascript'}>
                <h1 className='text-2xl cursor-pointer'>{blogitem.title}</h1>
            </Link>
            <p className='text-base'>learn Javascript in one video is the best way to learn Javascript</p>
          </div>
        })}

    </div>

  )
}

export default Blog