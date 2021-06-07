import React from "react"
import PrivateRoute from "./utils/PrivateRoute"
import { Switch, Route } from "react-router-dom"
import { HomePage, LandingPage } from "./screens"

function App() {
  return (
    <Switch>
      <PrivateRoute path="/home" component={HomePage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  )
}

export default App
