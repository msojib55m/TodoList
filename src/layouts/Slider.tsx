import { NavLink } from "react-router";
import { Fragment } from "react/jsx-runtime";

export default function Slider(){
    return(
        <Fragment>
            <div className="w-60 fixed left-0 top-0 bottom-0 bg-gray-200 bg-gray-50">
                <ul className="mt-16">
                        <li className="p-4 border-b border-gray-300">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li className="p-4 border-b border-gray-300">
                        <NavLink to={"/admin"}>Admin</NavLink>
                    </li>
                    <li className="p-4 border-b border-gray-300">
                        <NavLink to={"/"}>Todo </NavLink>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}