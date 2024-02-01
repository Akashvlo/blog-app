import React from 'react'
import { useState } from 'react'
import userContext from './userContext'

 function UserProvider({children}) {
    const[user,setUser]=useState({
        name:'Akash'

    })
  return (
    <div>
      <userContext.Provider value={user}>
      {children}
      
      </userContext.Provider>
    </div>
  )
}
export default UserProvider
