import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./App.css"
import  About from "./pages/About"
import Contact  from "./pages/Contact"
import  Country  from "./pages/Country"
import  Home  from "./pages/Home";
import AppLayout from "./Layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import CountryDetails from "./Layout/CountryDetails";

const router= createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index: true,
        element: <Navigate to="/home" replace />,// Redirect to /home when the user visits the root URL
        // index: true is used to specify that this route should be rendered when the parent route's path matches exactly.
        // The index route is a child route of the parent route, which in this case is "/".
      },
      {
        path: "/home",
        element:<Home/>,
      },
      {
        path:"about",
        element:<About/>,
      },
      {
        path:"contact",
        element:<Contact/>,
      },
      {
        path:"country",
        element:<Country/>,
      },
      {
        path:"country/:id",
        element:<CountryDetails/>,
      }
      /**
       * path:"country/:id", is a dynamic route that will match any URL that starts with /country/ followed by any value. The value after /country/ will be available in the component as a parameter.
       * For example, if the URL is /country/USA, the value of id will be "USA". You can access this value in the component using the useParams() hook from react-router-dom.
       */
    ]
  }
])

const App = () => {
  return<RouterProvider router={router}/>
}

export default App