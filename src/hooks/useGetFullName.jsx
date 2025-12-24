import React from 'react'

function useGetFullName(firstName, lastName) {  
    
  return (
    `My name is ${firstName} ${lastName}`
  )
}

export default useGetFullName
