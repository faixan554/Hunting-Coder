import React , {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

function slug(props) {
    

  function createMarkup(content) {
    return {__html: content};
  }

  const router = useRouter();
  const [blog, setBlog] = useState(props.blog);
    
    

  return (
    <div>
      <div>
        <h1 className='text-center text-4xl pt-10 text-blue-600 font-bold'>{blog && blog.title}</h1>
        { blog && <div className='container my-8 w-3/4 mx-auto text-justify' dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      </div>
    </div>
  )
}


// Server side rendering
export async function getServerSideProps(context) {
  // Fetch data from external API
  const {slug} = context.query;
  const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  const blog = await res.json()

  // Pass data to the page via props
  return { props: { blog } }
}



export default slug