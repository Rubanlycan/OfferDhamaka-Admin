import React from "react"
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom"
import { AddUser, ManageUsers } from "../domain"

function Users() {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/manage`} component={ManageUsers} />
      <Route path={`${path}/add`} component={AddUser} />
      <Redirect to={`${path}/manage`} />
    </Switch>
  )
}

export default Users
