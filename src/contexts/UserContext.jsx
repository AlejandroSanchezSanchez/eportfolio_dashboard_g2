import { createContext, useContext, useState } from 'react'

const UserContext = createContext()
export function useUser(){ 
  return useContext(UserContext)
}

export function UserProvider(props) {
  return (
    <UserContext.Provider value={{ userName: props.value }}>
      {props.children}
    </UserContext.Provider>
  )
}
