import { Fragment } from "react/jsx-runtime";

export default function AdminButton({title,handleClick}:{title:string,handleClick:()=>void})
{
    return(
        <Fragment>
            <button className="px-6 py-3
            
            bg-gray-300 rounded-xl"  onClick={()=>handleClick()} >{title}</button>;
        </Fragment>
    )
}