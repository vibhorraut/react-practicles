import React, { useEffect, useRef, useState } from 'react'

export function UseRefExample() {

    const [value, setValue] = useState(0);
    // const [count,setCount] = useState(0);

    // useEffect(() =>{
    // // setCount(count+1);
    // setCount(prev=>prev+1)
    // },[]);

    // useRef
    const count = useRef(0)
    console.log(count)

    useEffect(() => {
        count.current = count.current + 1;
    })

    //  Accessing the dom elements using Hook
    const inputText=useRef();

    const btnClicked=() => {
        console.log(inputText.current)
        inputText.current.style.background="red"
          inputText.current.style.color="white"
    }

    return <>
        <div>
            <h3 className='text-center text-danger'>UseRefExample </h3>
        </div>
        <div className='container-fluid'>
            {/* <button className='btn btn-danger' onClick={() => setValue(prev => prev - 1)}> -1</button>
            <br />  <br />
            <h3 className='text-primary'> {value}</h3>
            <br />
            <button className='btn btn-success' onClick={() => setValue(prev => prev + 1)}> +1</button>

            <div>
                <h2 className='text-dark'>Render Count :{count.current}</h2>
            </div> */}



            {/* type 2 ===>  accessing the dom element using UseRef*/}

            <div className="col-md-4">
            <input className="form-control" type="text" ref={inputText}/>
            <button className="btn btn-success mt-3" onClick={btnClicked}> Clicked Here</button>
            {/* <p> {inputText}</p> */}
            </div>

        </div>

    </>
}
