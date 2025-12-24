import React from 'react'
import Wrapper from './Wrapper'
function User() {
  return (
      <Wrapper active="User">
          {/* USER START CARD */}
          {
            [1,2,3,4,5].map((user)=>(
              <div key={user} className="p-4 mb-4 border rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">User {user}</h3>
                <p className="text-gray-600">This is some information about User {user}.</p>
              </div>
            ))
         }
      </Wrapper>
  )
}

export default User
