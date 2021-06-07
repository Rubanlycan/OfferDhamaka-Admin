import React from "react"
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom"
import { AddOffer, ManageOffers } from "../domain"

function Offers() {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/manage`} component={ManageOffers} />
      <Route path={`${path}/add`} component={AddOffer} />
      <Redirect to={`${path}/manage`} />
    </Switch>
  )
}

export default Offers
