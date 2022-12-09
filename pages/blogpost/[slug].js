import React , {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

function slug() {
    
  const router = useRouter();
  
  
  const [blog, setBlog] = useState();
    useEffect(() => {
      if (!router.isReady) return;
      const {slug} = router.query;
      fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
         return a.json();
        })
      .then((data) => {
          setBlog(data);
        })
      },[router.isReady])
    

  return (
    <div>
      <div>
        <h1 className='text-center text-4xl pt-10 text-blue-600 font-bold'>{blog && blog.title}</h1>
        <div className='container my-8 w-3/4 mx-auto text-justify'>
          <p>{blog && blog.content}</p>
        </div>
      </div>
    </div>
  )
}

export default slug