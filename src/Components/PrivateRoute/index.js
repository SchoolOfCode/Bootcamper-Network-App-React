import React from "react"
import { Route, Redirect } from "react-router-dom"


function PrivateRoute({ children, user, ...rest }) {
    return user ? (
        <Route {...rest} >
            {children}
        </Route>) : (
            <Redirect to="/signin" />
        )
}


export default PrivateRoute