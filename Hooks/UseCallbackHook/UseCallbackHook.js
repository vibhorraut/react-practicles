import React, { useCallback, useState } from 'react'
import  Header  from './Header'

export default function UseCallbackHook() {
    const [number, setNumber] = useState(0) 
    // const newFn=()=>{}
        const newFn=useCallback((counter)=>{
            return (counter)

        },[])

  return <>
    <div className='h2 text-center'>UseCallbackHook</div>

    <div className='text-danger h4'> 
        <Header newFn={newFn}> </Header>
    </div>
    <div>
        <h4> Counter :{number}</h4>
        <br/>
        <button className='btn btn-primary' onClick={()=>{setNumber(prev=>prev+1)}}> Click Me</button>
    </div>
    </>
}
