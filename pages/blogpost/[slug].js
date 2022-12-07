import React from 'react'
import { useRouter } from 'next/router'

function slug() {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div className='text-center text-4xl pt-10 text-blue-600 font-bold'>{slug}</div>
  )
}

export default slug