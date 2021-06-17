import React, { useState, useEffect } from "react"
import MUIDataTable from "mui-datatables"
import { makeStyles } from "@material-ui/core/styles"
import TabContext from "@material-ui/lab/TabContext"
import Button from "@material-ui/core/Button"
import AddRoundedIcon from "@material-ui/icons/AddRounded"
import { TabPanel } from "@material-ui/lab"
import BranchModal from "./BranchModal"
import { useStore } from "../context"
import { useAuth } from "../utils/AuthContext"

const useStyles = makeStyles(() => ({
  tab: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "0 0 15px silver",
  },
  button: {
    margin: "5px 10px",
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

const body = {
  id: "98a631a9b613eb7d19e8319b2aa32c91",
  code: "Primary",
  gstin: "string",
  storeName: "testDV121",
  companyBusinessName: "testCompany",
  websiteUrl: "test.com",
  companyLogo: "test",
  categories: [
    {
      id: "1",
      name: "fashoin",
    },
  ],
  countryId: "1",
  address1: "test",
  address2: "test",
  stateId: "1",
  cityId: "1",
  pincode: "11021",
  isphysical: "Y",
  isSameAddress: "N",
  storeCountryId: "2",
  storeAddress1: "test2",
  storeAddress2: "test2",
  storeStateId: "1",
  storeCityId: "1",
  storePincode: "111021",
  managerName: "test",
  managerMobile: "13123123",
  managerEmail: "test@test.com",
  fromHrs: 0,
  toHrs: 0,
  weeklyOff: "Sunday",
  featuredFrom: "2021-06-15T05:02:19.236Z",
  featuredTill: "2021-06-15T05:02:19.236Z",
  companyId: "string",
  active: "Y",
  isPremium: "Y",
  areas: ["string"],
  createdOn: "2021-06-15T05:02:19.236Z",
  updatedOn: "2021-06-15T05:02:19.236Z",
  createdBy: "string",
  updatedBy: "string",
  logo: "string",
  area: "string",
}

function ManageBranches() {
  const { createStore } = useStore()
  const { userInfo } = useAuth()
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("1")

  const handleClickOpen = () => {
    createStore({ id: "Z3Vlc3Q=", body })
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
