import { Fragment } from "react";
import CreateForm from "./components/CreateFrom";
import type { Todo } from "../../type";
import TodoList from "./components/TodoList";
import TodoProvider from "../../contexts/TodoContext";
export default function TodoPage()
{
  
    return (
        <Fragment>
          <TodoProvider>
            {/* <CreateForm />
            <TodoList /> */}
          </TodoProvider>
        </Fragment>
        
    )
}