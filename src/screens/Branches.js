import React from "react"
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom"
import { AddOffer, ManageBranches } from "../domain"

function Branches() {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/manage`} component={ManageBranches} />
      <Redirect to={`${path}/manage`} />
    </Switch>
  )
}

export default Branches
