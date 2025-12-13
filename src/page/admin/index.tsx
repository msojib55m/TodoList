import { Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../stores"; 
export default function AdminPage()
{
     const counter = useSelector((store: RootState) => store.counter);
    const dispatch = useDispatch();
    return(
        <Fragment>
                  <h1 className="text-3xl">
            {counter}
        </h1>
        <button onClick={() => dispatch({ type: "UPDATE" })} >Increment</button>
        </Fragment>
    )
}