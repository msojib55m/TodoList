import { createContext, Fragment, useContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { Todo } from "../type";

interface TodoContextType{
    todo: Todo[],
    setTodos: Dispatch<SetStateAction<Todo[]>>,
    deleteTodo:(id:number)=>void;
};

const initialValue: TodoContextType = {
    todo: [],
    setTodos: () => {}, 
    deleteTodo() {
    },
};



const TodoContext = createContext<TodoContextType>(initialValue);
export default function TodoProvider({children}:{children:ReactNode})
{
    const [todo,setTodos] = useState<Todo[]>([]);
    const [isMounted,setIsMounted] = useState<boolean>(false);
    function deleteTodo(id:number)
{
      setTodos((prevTodos:any) => prevTodos.filter((todo:any) => todo.id !== id));
}
    useEffect(()=>{
        if(!isMounted)
        {
            const storedTodes = localStorage.getItem('todo');
            if(storedTodes)
            {
                setTodos(JSON.parse(storedTodes));
            }
            setIsMounted(true);
            return;
        }
        localStorage.setItem("todo",JSON.stringify(todo));

    },[todo])
    return(
        <Fragment>
            <TodoContext.Provider value={{todo,setTodos,deleteTodo}}>
                {children}
            </TodoContext.Provider>
        </Fragment>
    )
}

export  function useTodoContext():TodoContextType{
    return useContext(TodoContext)
}