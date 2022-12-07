import React from 'react'
import { useRouter } from 'next/router'

function slug() {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div>
      <div>
        <h1 className='text-center text-4xl pt-10 text-blue-600 font-bold'>Title of the page is {slug}</h1>
        <div className='container my-8 w-1/2 mx-auto text-center'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum impedit architecto voluptatibus saepe ducimus totam aperiam, ex qui a rem ipsam similique nihil consectetur fugiat debitis id deleniti nobis obcaecati earum quod. Tenetur ipsum beatae reiciendis fugit, eaque sequi repudiandae fugiat ex tempora delectus, aperiam illo quod! Voluptatum, facere est.</p>
        </div>
      </div>
      
    </div>
  )
}

export default slug