import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

//*Use this hook to get the error object from the route
//The error object contains the error message and other information about the error

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
     
  return (
    <div>
        <h1>Oops! An Error Occured.</h1>
        {error &&<p>{error.data}</p>}
        <NavLink to="/"> 
        <button>Back to Home</button>
        </NavLink>
    </div>
  )

}
export default ErrorPage