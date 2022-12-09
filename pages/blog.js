import React, { useEffect , useState } from 'react'
import Link from 'next/link'

// fetch data using useEffect
function Blog() {

  const [blogdata, setBlogdata] = useState([])
   useEffect(() => {
    fetch('http://localhost:3000/api/blogs').then((a) => a.json())
     .then((data) => {
        setBlogdata(data);
      })
    },[])

  return (
    <div className='text-center pt-16 space-y-5 text-lg pb-20'>
      
      <h1 className='text-5xl pb-7 font-bold text-blue-800'>Latest Blogs</h1>
        {blogdata.map((blogitem)=>{
          return <div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
                <h1 className='text-2xl text-blue-800 font-semibold p-3 cursor-pointer'>{blogitem.title}</h1>
            </Link>
            <p className='text-base text-justify text-gray-600 w-1/2 mx-auto'>{blogitem.content.substr(0,250)}</p>
          </div>
        })}

    </div>

  )
}

export default Blog