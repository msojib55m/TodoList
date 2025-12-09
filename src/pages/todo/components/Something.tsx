import { Fragment } from "react/jsx-runtime";
import { useTodoContext } from "../../../contexts/TodoContext";

export default function Something()
{
    const {todo} = useTodoContext();
    return(
        <Fragment>
            {JSON.stringify(todo)};
        </Fragment>
    )
}