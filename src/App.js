import React from "react"
import PrivateRoute from "./utils/PrivateRoute"
import { Switch, Route } from "react-router-dom"
import { HomePage, LandingPage } from "./screens"
import { StoreDataProvider } from "./context"

function App() {
  return (
    <StoreDataProvider>
      <Switch>
        <PrivateRoute path="/home" component={HomePage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </StoreDataProvider>
  )
}

export default App
