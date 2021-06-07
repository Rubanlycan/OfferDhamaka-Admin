import React, { useState } from "react"
import { useAuth } from "../utils/AuthContext"
import { useHistory } from "react-router-dom"
import clsx from "clsx"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import { Toolbar } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
}))

function Header(props) {
  const open = props.drawerState
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Offer Dhamaka Admin Panel
          </Typography>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </div>
  )
}

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const { userInfo, logout } = useAuth()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const history = useHistory()
  const doLogout = async () => {
    try {
      await logout()
      setAnchorEl(null)
      history.replace("/login")
    } catch {
      console.log("Error in Logging Out")
    }
  }
  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        style={{ color: "white" }}
      >
        <i className="fa fa-user" aria-hidden="true"></i>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        onClose={handleCloseMenu}
      >
        <MenuItem title={userInfo.email}>My Profile</MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem onClick={doLogout}>Logout</MenuItem>
      </Menu>
    </>
  )
}
export default Header
