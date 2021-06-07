import React from "react"
import MUIDataTable from "mui-datatables"
import { makeStyles } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import TabContext from "@material-ui/lab/TabContext"
import TabList from "@material-ui/lab/TabList"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import AddRoundedIcon from "@material-ui/icons/AddRounded"
import { TabPanel } from "@material-ui/lab"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles(() => ({
  tab: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "0 10px",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
}))

const columns = [
  {
    name: "offer name",
    label: "Offer Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "company",
    label: "Company",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "state",
    label: "State",
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
}

function ManageOffers() {
  const classes = useStyles()
  const [value, setValue] = React.useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <div className={classes.tab}>
        <TabList
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="simple tabs example"
          centered
        >
          <Tab
            className={value === "1" && "font-weight-bold"}
            label="Live (50)"
            value="1"
          />
          <Tab
            className={value === "2" && "font-weight-bold"}
            label="Pending (25)"
            value="2"
          />
          <Tab
            className={value === "3" && "font-weight-bold"}
            label="Inactive (10)"
            value="3"
          />
        </TabList>

        <IconButton
          aria-label="account of current user"
          aria-haspopup="true"
          component={NavLink}
          to={"/home/offers/add"}
          style={{ textDecoration: "none" }}
        >
          <AddRoundedIcon />
          <Typography style={{ marginLeft: "5px" }}>Add Offer</Typography>
        </IconButton>
      </div>
      <TabPanel value="1">
        <MUIDataTable
          title={"Live Offers"}
          data={data}
          columns={columns}
          options={options}
        />
      </TabPanel>
      <TabPanel value="2">
        <MUIDataTable
          title={"Pending Offers"}
          data={data}
          columns={columns}
          options={options}
        />
      </TabPanel>
      <TabPanel value="3">
        <MUIDataTable
          title={"Inactive Offers"}
          data={data}
          columns={columns}
          options={options}
        />
      </TabPanel>
    </TabContext>
  )
}
export default ManageOffers
