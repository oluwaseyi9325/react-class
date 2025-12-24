import React from 'react'
import Wrapper from '../Wrapper'

const Home = () => {
  const first_name = "John"
  const last_name = "Seyi"
  
  let initiols = first_name.charAt(0) + last_name.charAt(0)
  alert(initiols)
    
    return (
      <Wrapper active="Dashboard">
     

    </Wrapper>
  )
}

export default Home