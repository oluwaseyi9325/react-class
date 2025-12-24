

import React, { useState } from 'react';
const Counter = ({ count,setCount }) => {
    

    return (
        <div>Counter Component {count}
           {/* counter functionality here */}
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    )
}

export default Counter;