import {useState} from "react";

export function ConditinalFlag(){

    const [isonline,setOnline]=useState("Online");

    const on=() => {
        setOnline(true);
    }
   const off=() => {
    setOnline(false);
   }
   const getBtn = (handler,btnName) =>{
    return <button onClick={handler}>{btnName}</button>
   }

   return <div>
    <p> This is Conditional Rendering component</p>
    {/* <h1> I am {isonline ? 'online':'offline'}</h1> */}
    {isonline ?"Hello  I am online":" Now I am offline"}
    <br />
    {getBtn(on,"ON")}
    {getBtn(off,"OFF")}
   </div>
}