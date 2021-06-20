import React from "react"
import MUIDataTable from "mui-datatables"

const columns = [
  {
    name: "storeName",
    label: "Store Name",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "managerName",
    label: "Manger Name",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "mobileNo",
    label: "Mobile Number",
    options: {
      filter: false,
      sort: true,
    },
  },
]

const options = {
  rowsPerPage: 10,
  print: false,
}

function Stores({ data, selectedCompany }) {
  const rowData = data.map((item) => ({
    storeName: item.storeName,
    managerName: item.managerName,
    mobileNo: item.managerMobile,
  }))

  return (
    <MUIDataTable
      title={`${selectedCompany}'s Stores`}
      data={rowData}
      columns={columns}
      options={options}
    />
  )
}

export default Stores
