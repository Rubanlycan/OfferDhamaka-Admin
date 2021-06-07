import React from "react"
import MUIDataTable from "mui-datatables"
import Typography from "@material-ui/core/Typography"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import IconButton from "@material-ui/core/IconButton"
import { NavLink } from "react-router-dom"

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
    <IconButton
      aria-label="account of current user"
      aria-haspopup="true"
      component={NavLink}
      to={"/home/users/add"}
      style={{ textDecoration: "none" }}
    >
      <AddCircleIcon />
      <Typography style={{ marginLeft: "5px" }}>Add User</Typography>
    </IconButton>
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
