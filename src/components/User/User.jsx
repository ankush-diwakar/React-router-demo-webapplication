import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userId} = useParams()
  return (
    <div className='bg-orange-400 text-yellow-50 p-8 text-xl font-bold'>
      UserId : {userId}
    </div>
  )
}

export default User
