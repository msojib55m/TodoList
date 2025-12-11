import { Fragment } from "react/jsx-runtime"
import Button from "../../hoc/Button"
import AdminButton from "./AdminButton"
import Layout from "./Layout"

export default function Admin()
{
    const MyButton = Button(AdminButton)
    return (
        <Fragment>
            <div className="p-10">
              <MyButton title = "my sojib "/>
            <Layout
          header={({ year }) => {
            return <h1 className="text-xl font-bold">Header from Render Props - {year}</h1>;
          }}
          footer={() => {
            return <h1 className="text-lg mt-4 text-gray-600">Footer from Render Props</h1>;
          }}
          render={() => {
            return <p className="text-blue-600">This is inside render() prop</p>;
          }}
        >
          <p>Children content inside Layout</p>
        </Layout>
            </div>
        </Fragment>
    )
}