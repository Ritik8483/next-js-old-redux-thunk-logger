import { useRouter } from 'next/router'
import React from 'react'

const HomeProfile = () => {
    const router = useRouter();
    console.log(router);
    
  return (
    <div>Home profile: {router.query.id}</div>
  )
}

export default HomeProfile