import React, { useContext } from 'react'
import { UseContext } from './UseContext'

const UserDetail = () => {
    const { name, number} = useContext(UseContext)
  return (
    <div>
      <p>Name: {name}</p>
      <p>Phone: {number}</p>
    </div>
  )
}

export default UserDetail;


