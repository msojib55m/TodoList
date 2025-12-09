import { Fragment } from "react/jsx-runtime";

import { useTodoContext } from "../../../contexts/TodoContext";
// import Something from "./Something";
import { Link } from "react-router";
export default function TodoList()
{
    const {todo,deleteTodo} = useTodoContext()
    return(
        <Fragment>
      <div className="w-100 mx-auto px-8 py-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h1 className="text-xl font-semibold">Todo List</h1>
                <br />
                <ul>
                    {
                        todo.map((todo) => (
                            <li className="py-2 px-2 border
                             border-gray-200 rounded-lg mb-2 flex justify-between p-3" key={todo.id}>{todo.text}

                             <Link to={`?id=${todo.id}`} className="ml-auto text-blue-500">Edit</Link>
                              <button className="ml-2 text-red-500" onClick={() => deleteTodo(todo.id)}>Delete</button>
                             </li>
                        ))
                    }
                    {/* <Something/> */}
                </ul>
            </div>
        </Fragment>
    )
}