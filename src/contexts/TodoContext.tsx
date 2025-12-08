import { createContext, Fragment, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { Todo } from "../type";

interface TodoContextType{
    todo: Todo[],
    setTodos: Dispatch<SetStateAction<Todo[]>>
};

const initialValue: TodoContextType = {
    todo: [],
    setTodos: () => {}, // function placeholder
};


const TodoContext = createContext<TodoContextType>(initialValue);
export default function TodoProvider({children}:{children:ReactNode})
{
    const [todo,setTodos] = useState<Todo[]>([]);
    return(
        <Fragment>
            <TodoContext.Provider value={{todo,setTodos}}>
                {children}
            </TodoContext.Provider>
        </Fragment>
    )
}

export  function useTodoContext():TodoContextType{
    return useContext(TodoContext)
}