import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'


export const Profile = () => {
    const {user}=useContext(UserContext)

    if(!user) return <div>please Login</div>
  return (
    <>
    <h1>Welcome {user.username}</h1>
    </>
  )
}
