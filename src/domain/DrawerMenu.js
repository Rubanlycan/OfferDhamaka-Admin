import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import StoreIcon from "@material-ui/icons/Store"
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded"
import ExtensionRoundedIcon from "@material-ui/icons/ExtensionRounded"
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded"
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded"
import Tooltip from "@material-ui/core/Tooltip"
import { NavLink } from "react-router-dom"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const menuList = [
  {
    title: "Stores",
    tooltip: "Manage Stores",
    icon: StoreIcon,
    url: "/home/stores",
  },
  {
    title: "Offers",
    tooltip: "Manage Offers",
    icon: LocalOfferRoundedIcon,
    url: "/home/offers",
  },
  {
    title: "Products",
    tooltip: "Manage Products",
    icon: ExtensionRoundedIcon,
    url: "/home/products",
  },
  {
    title: "Categories",
    tooltip: "Manage Categories",
    icon: CategoryRoundedIcon,
    url: "/home/categories",
  },
  {
    title: "Users",
    tooltip: "Manage Users",
    icon: PeopleAltRoundedIcon,
    url: "/home/users",
  },
]

const DrawerMenuItems = () => {
  return (
    <List>
      {menuList.map((item, index) => (
        <ListItem button key={index} component={NavLink} to={item.url}>
          <Tooltip title={item.tooltip} arrow placement="right-end">
            <ListItemIcon>{<item.icon />}</ListItemIcon>
          </Tooltip>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  )
}

function DrawerMenu(props) {
  const open = props.drawerState
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={props.handleDrawer}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <DrawerMenuItems />
    </Drawer>
  )
}

export default DrawerMenu
