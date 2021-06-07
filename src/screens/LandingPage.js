import React from "react"
import PublicRoute from "../utils/PublicRoute"
import { Switch, Redirect } from "react-router-dom"
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import Register from "./Register"

function LandingPage() {
  return (
    <div className="LandingPage">
      <Switch>
        <PublicRoute path="/login" exact component={Login} />
        <PublicRoute path="/forgotPassword" exact component={ForgotPassword} />
        <PublicRoute path="/register" exact component={Register} />
        <Redirect to="/register" />
      </Switch>
    </div>
  )
}

export default LandingPage
