import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { dataItems } from '../data';



const item = () => {


  const router = useRouter();
  const {index} = router.query;

  return (
    <div>item {dataItems[index]?.title}</div>
  )
}

export default item