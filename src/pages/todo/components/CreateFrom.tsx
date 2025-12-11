import React, { useState, Fragment, useEffect } from "react";
import type { Todo } from "../../../type";
import { useTodoContext } from "../../../contexts/TodoContext";
import { useLocation } from "react-router";
import GlobalButton from "../../../components/GlobalButton";

export default function CreateForm() {
    const { todo, setTodos } = useTodoContext();
    const [todoInput, setTodoInput] = useState<string>("");
    const {search} = useLocation();
    const [updateData,setUpdateData] = useState<Todo | null>(null);
     useEffect(() => {

        const params = new URLSearchParams(search);
        console.log(params)
        const id = params.get("id");

        if (id == null) return;

        const todoToEdit = todo.find((todo) => todo.id === parseInt(id));
        if (todoToEdit) {
            setUpdateData({ ...todoToEdit });
            setTodoInput(todoToEdit.text);
        }

        return () => {
            setUpdateData(null);
            setTodoInput("");
        }

    }, [search, todo]);
    function addTodo() {
        if (todoInput.trim() === "") return;

        const maxId = todo.reduce((max, t) => Math.max(max, t.id), 0) + 1;
        const newTodo: Todo = { id: maxId, text: todoInput };

        setTodos((prev) => [...prev, newTodo]);
        setTodoInput("");
    }
       function updateTodo() {
        if (updateData == null) return;
        setTodos((prevTodos) => prevTodos.map((todo) => todo.id === updateData.id ? { ...todo, text: todoInput } : todo));
    }

    return (
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
                          onClick={() => updateData ? updateTodo() : addTodo()}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                           {updateData ? "Update Todo" : "Add Todo"}
                    </button>
                </div>
                <div>
                    <GlobalButton onClick={()=>console.log("sojib")}     title="Update"   className="bg-red-600 hover:bg-red-700" />
                </div>
            </div>
        </Fragment>
    );
}
