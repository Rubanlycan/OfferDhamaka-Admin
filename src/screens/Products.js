import React from "react"
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom"
import { AddProduct, ManageProducts } from "../domain"

function Products() {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/manage`} component={ManageProducts} />
      <Route path={`${path}/add`} component={AddProduct} />
      <Redirect to={`${path}/manage`} />
    </Switch>
  )
}

export default Products
