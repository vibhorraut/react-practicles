import { useState } from "react"

export function TodoList() {
    const [todos, setTodos] = useState([{ taskId: 1, name: "Task1" }, { taskId: 2, name: "Task2" }, { taskId: 3, name: "Task3" }])
    const [text, setText ] = useState("")
    // const getTodos = () => {
    //     const todoElements = [];
    //     todos.forEach(todo => { todoElements.push(<p>{todo}</p>) })
    //     return todoElements;
    // }
    const onInputChange = (e) =>{
        setText(e.target.value)
    }
    return <div>
        <p>Todo List</p>
        {/* <p>{todos[0]}</p>
        <p>{todos[1]}</p> */}
        {/* {getTodos()} */}

        <input placeholder="Enter TODO" value={text} onChange={onInputChange}></input> 
        <button onClick={()=>{
            //   const updatedTodos = [...todos];
            //   updatedTodos.push({name: text, taskId: todos.length+1});
            //   console.log(updatedTodos);
            //   setTodos(updatedTodos)
            if(text.length>=1){
                console.log([...todos, {name: text, taskId: todos.length+1}])
                setTodos([...todos, {name: text, taskId: todos.length+1}])
            }
        }}>Add</button>
        {todos.map((todo) => {
            return <p key={todo.taskId}>{todo.name}</p>
        })}
    </div>
}