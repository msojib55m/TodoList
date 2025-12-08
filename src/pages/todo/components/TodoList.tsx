import { Fragment } from "react/jsx-runtime";

import { useTodoContext } from "../../../contexts/TodoContext";
export default function TodoList()
{
    const {todo} = useTodoContext()
    return(
        <Fragment>
      <div className="w-100 mx-auto px-8 py-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h1 className="text-xl font-semibold">Todo List</h1>
                <br />
                <ul>
                    {
                        todo.map((todo) => (
                            <li className="py-2 px-2 border border-gray-200 rounded-lg mb-2">{todo.text}</li>
                        ))
                    }
                </ul>
            </div>
        </Fragment>
    )
}