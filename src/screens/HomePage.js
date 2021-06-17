import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom"
import { Header, DrawerMenu } from "../domain"
import Offers from "./Offers"
import Products from "./Products"
import Stores from "./Stores"
import Branches from "./Branches"
import Users from "./Users"
import Categories from "./Categories"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "100vw",
    height: "100vh",
    // background: "#eee",
  },
}))

export default function HomePage() {
  const classes = useStyles()
  const { path } = useRouteMatch()
  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  return (
    <div className={classes.root}>
      <Header handleDrawer={handleDrawerOpen} drawerState={open} />
      <DrawerMenu handleDrawer={handleDrawerClose} drawerState={open} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path={`${path}/stores`} component={Stores} />
          <Route path={`${path}/branches`} component={Branches} />
          <Route path={`${path}/offers`} component={Offers} />
          <Route path={`${path}/products`} component={Products} />
          <Route path={`${path}/categories`} component={Categories} />
          <Route path={`${path}/users`} component={Users} />
          <Redirect to={`${path}/stores`} />
        </Switch>
      </main>
    </div>
  )
}
