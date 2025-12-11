import { Fragment } from "react/jsx-runtime"
import Button from "../../hoc/Button"
import AdminButton from "./AdminButton"

export default function Admin()
{
    const MyButton = Button(AdminButton)
    return (
        <Fragment>
            <div className="p-10">
              <MyButton title = "my Button "/>
            </div>
        </Fragment>
    )
}