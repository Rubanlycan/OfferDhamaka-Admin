import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MUIDataTable from "mui-datatables"
import Button from "@material-ui/core/Button"
import AddRoundedIcon from "@material-ui/icons/AddRounded"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles(() => ({
  tab: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "0 20px",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
  button: {
    height: "fit-content",
    "&:hover": {
      color: "#fff",
    },
  },
}))

const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "company",
    label: "Company",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: true,
      sort: true,
    },
  },
]

const data = [
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
]

const options = {
  rowsPerPage: 10,
  print: false,
  customToolbar: () => (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<AddRoundedIcon />}
      size="small"
      component={NavLink}
      to={"/home/users/add"}
    >
      Add User
    </Button>
  ),
}

function Users() {
  return (
    <MUIDataTable
      title={"User Management"}
      data={data}
      columns={columns}
      options={options}
    />
  )
}

export default Users
