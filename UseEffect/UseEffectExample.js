import { useEffect, useState } from "react"

export function UseEffectExample({name}){
    const [counter, seCounter] = useState(0);
    const [counter2, seCounter2] = useState(0);

    // Syntax
    // useEffect(()=>{}, [])


    // Example:1 Without dependency array. This effect is executed on every component render.


    //Example2: With empty dependency array
    useEffect(()=>{
        console.log('2. This is executed only once when component is rendered.');
        // API Call
    }, [])

     //Example3: With dependency array
     useEffect(()=>{
        console.log('3. This is executed when counter is updated.', counter);
        // Cleanup Function
        return ()=>{
            console.log('I am cleaning up', counter)
        }
    }, [counter])

    //Example4: With dependency array
     useEffect(()=>{
        console.log('4. This is executed when counter or counter2 is updated.');
    }, [counter, counter2])

   //Example5: With dependency array, prop
    useEffect(()=>{
        console.log('5. This is executed when name prop is changed.');
    }, [name])
    

    return <div>
        Use Effect Example: {name}
        <br></br>
        {counter} 
        <button onClick={()=> seCounter(counter+1)}>Increment</button>
        <br></br>
        {counter2} 
        <button onClick={()=> seCounter2(counter2+1)}>Increment2</button>
    </div>
}