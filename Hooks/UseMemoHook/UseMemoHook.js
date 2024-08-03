//  UseMemo Hook can be also called as useCallback hook
// The react Usememo hook returns a memorizeed value.(It is like caching the value so that it doesnt need to be recalculated.
//     the useMemo hook only runs when one of its dependecies get updated.
//     this can improve the performance of application.
//     there is one also hook to improve the performance of the hook,I.e useCallbak Hook.

//     the useCallback hook and useMemo hook are mostly similar, one main difference is that,
//     useCallback hook returns the memorized function while 
//     useMemo hook returns the memorized value



import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {
  const [number, setNumber] = useState(0)
  const [counter, setCounter] = useState(0)

  const cubeNum = (num) => {
    console.log('calculation done!!')
    return Math.pow(num, 3)
  }
  // const result = cubeNum(number).
  const result = useMemo(()=>{return cubeNum(number)},[number])

  return (<>
    <div className='h2'>UseMemoHook</div>
    <div className='col-md-4 container-fluid'>
      <input type="text" className='form-control' value={number} onChange={(e)=>{setNumber(e.target.value)}} />
      <br/>
      <h3 className='h3 text-danger'> Cube of {number} is: {result}  </h3>
      <button className='btn btn-danger col-md-3' onClick={()=>setCounter(prev=>prev+1)}> Counter++ </button>
      <br/>  <br/>
      <h3 className='h3 text-primary'> Counter: {counter}  </h3>
    </div>
  </>
  )
}
