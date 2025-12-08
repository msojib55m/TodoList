import { Fragment } from "react/jsx-runtime";
import Header from "./Header";
import Slider from "./Slider";
import { Outlet } from "react-router";
export default function Layouts()
{
    return(
        <Fragment>
               <section className="w-full min-h-screen flex flex-col">
                <Header/>
                <Slider/>
                  <div className="ml-60 py-8 px-4">
                      <Outlet />
                  </div>
               </section>
        </Fragment>
    )
}