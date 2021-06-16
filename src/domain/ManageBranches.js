import React from "react"
import MUIDataTable from "mui-datatables"
import { makeStyles } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import TabContext from "@material-ui/lab/TabContext"
import TabList from "@material-ui/lab/TabList"
import Button from "@material-ui/core/Button"
import AddRoundedIcon from "@material-ui/icons/AddRounded"
import { TabPanel } from "@material-ui/lab"
import { NavLink } from "react-router-dom"
import BranchModal from "./BranchModal"

const useStyles = makeStyles(() => ({
  tab: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: "0 20px",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
  button: {
    margin: "10px",
    height: "fit-content",
    "&:hover": {
      color: "#fff",
    },
  },
}))

const columns = [
  {
    name: "Store ID",
    label: "Store ID",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Store Name",
    label: "Store Name",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Store Manager",
    label: "Store Manger",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Store Contact",
    label: "Store Contact",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Store Email",
    label: "Store Email",
    options: {
      filter: true,
      sort: false,
    },
  },
]

const data = []

const options = {
  download: false,
  print: false,
  rowsPerPage: 10,
  expandableRows: true,
  renderExpandableRow: (rowData, rowMeta) => {
    console.log(rowData, rowMeta)
    return <p>Hiii</p>
  },
}

function ManageBranches() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("1")

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <TabContext value={value}>
        <div className={classes.tab}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddRoundedIcon />}
            size="small"
            onClick={handleClickOpen}
          >
            Add Branch
          </Button>
        </div>
        <TabPanel value="1">
          <MUIDataTable
            title={"List of Stores and it's branches"}
            data={data}
            columns={columns}
            options={options}
          />
        </TabPanel>
      </TabContext>

      <BranchModal
        open={open}
        handleClose={handleClose}
        // BranchData={(val) => getBranchData(val)}
      />
    </>
  )
}
export default ManageBranches
