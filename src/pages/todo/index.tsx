import { Fragment, useState } from "react";
import CreateForm from "./components/CreateFrom";
import type { Todo } from "../../type";
import TodoList from "./components/TodoList";
export default function TodoPage()
{
  
    const [todos,setTodos] = useState<Todo[]>([]);
    return (
        <Fragment>
        <CreateForm todos={todos} setTodos={setTodos as any}/>
        <TodoList todos = {todos}/>
        </Fragment>
        
    )
}