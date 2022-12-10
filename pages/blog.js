import React, { useEffect , useState } from 'react'
import Link from 'next/link'

// fetch data using useEffect
function Blog(props) {

  const [blogdata, setBlogdata] = useState(props.allblogs)

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



// Server side rendering
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/blogs`)
  const allblogs = await res.json()

  // Pass data to the page via props
  return { props: { allblogs } }
}



export default Blog