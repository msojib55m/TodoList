import { useState } from "react";
import { Fragment } from "react";
import type { Todo } from "../../type";
export default function TodoPage()
{
      const [todos, setTodos] = useState<Todo[]>([
        {id:1,text:"sojib"},
        {id:2,text:"Israt"},
        {id:3,text:"sumon"},
      ]);
      const [todoInput,setTodoInput] = useState<string>("");
      function addTodo()
      {
        if(todoInput.trim()==="") return;
        const mixId =todos.reduce((max,todo)=>Math.max(max,todo.id),0 ) + 1;
        const nextTod:Todo = {id:mixId ,text:todoInput};
        setTodos((prevTodos) => [...prevTodos, nextTod]);
        setTodoInput("");
      }
    return (
        <Fragment>
        <div className="p-10">
            <div className="w-100 mx-auto px-8 py-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h1 className="text-xl font-semibold">Todo input</h1>
                <br />
                <br />
                <div>
                    <input type="text" className="border border-gray-300 rounded-lg px-4 py-2 w-full" 
                    value={todoInput}
                    onChange={(e)=>setTodoInput(e.target.value)}
                     placeholder="Enter todo item"/ >
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2
                    
                    7rounded-lg hover:bg-blue-600"
                    onClick={()=>addTodo()}>Add Todo</button>
                </div>
            </div>
          
            <div className="w-100 mx-auto px-8 py-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h1 className="text-xl font-semibold">Todo List</h1>
                <br />
                <br />
                {
                    todos.map((todo)=>(
                        <li className="py-2 px-2 border border-gray-200 rounded-lg mb-2">{todo.text}</li>
                    ))
                }
            </div>
        </div>
        </Fragment>
        
    )
}