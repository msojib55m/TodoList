import React, { useState } from "react";
import { Fragment } from "react";
import type { Todo } from "../../../type";
export default function CreateForm(
    {todos,setTodos}:{todos:Todo[],setTodos:React.Dispatch<React.SetStateAction<Todo>>})
{
    const [todoInput,setTodoInput] = useState<string>("");
     function addTodo() {

        if (todoInput.trim() === "") return;

        const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0) + 1;
        const newTodo: Todo = { id: maxId, text: todoInput };
         setTodos((prevTodos ) => [...prevTodos, newTodo ]);
         setTodoInput("");
    }
    return(
        <Fragment>
         <div className="w-100 mx-auto px-8 py-6 bg-white rounded-xl border border-gray-200 shadow-sm mb-6">
                <h1 className="text-xl font-semibold">Add Todo</h1>
                   <div>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                        placeholder="Enter todo item"
                        value={todoInput}
                        onChange={(e) => setTodoInput(e.target.value)}
                    />
                    <button
                        onClick={() => addTodo()}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Add Todo
                    </button>
                    </div>
            </div>

        </Fragment>
    )
}