import React, { useState } from 'react'
import { useReducer } from 'react';

export function UseReducerHook() {

    const initialValue = { count: 0 };

    const reducer = (state, action) => {
        console.log(state, action);
        switch (action.type) {
            case 'Increased': {
                return { count: state.count + action.payload }
            }
            case 'Decreased': {
                return { count: state.count - action.payload }
            }
            case 'Input': {
                return { count: action.payload }
            }
            default: {
                return state
            }
        }


    }
    const [state, dispatch] = useReducer(reducer, initialValue);
    return <>
        <div className="container-fluid">
            <h1 className='text-warning font-weight-bold h1'> Use Reducer Hook Example</h1>
            <div>
                <h3> Counter: <span className='text-danger'>{state.count}</span></h3>

                <button type='button' className='btn btn-success mx-2' onClick={() => dispatch({ type: 'Increased', payload: 5 })}> Increase </button>
                <button type='button' className='btn btn-danger' onClick={() => dispatch({ type: 'Decreased', payload: 2 })}> Decrease </button>
            </div>
            <div className='mt-4 col-md-4 d-flex align-items-center' >
                <input type='text' className='form-control' value={state.count} onChange={(e) => dispatch({ type: 'Input', payload: Number(e.target.value) })} />
            </div>
        </div>
    </>
}


//  By Using USeState
// export function UseReducerHook() {
//     console.log("State Updated")
//     const [counter, setCounter] = useState(0);

//     return (
//         <div className="container-fluid">
//             <h1 className='text-warning font-weight-bold h1'> Use Reducer Hook Example</h1>
//             <div>
//                 <h3> Counter: <span className='text-danger'>{counter}</span></h3>

//                 <button type='button' className='btn btn-success mx-2' onClick={() => setCounter(Prev => Prev + 1)}> Increase </button>
//                 <button type='button' className='btn btn-danger' onClick={() => setCounter(Prev => Prev - 1)}> Decrease </button>

//             </div>



//         </div>
//     )
// }