import React, { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import Button from "@material-ui/core/Button"
import { useStore } from "../context"
import { useAuth } from "../utils/AuthContext"
import { Stores } from "../domain"
import MUIDataTable from "mui-datatables"

const columns = [
  {
    name: "id",
    label: "Company ID",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "name",
    label: "Company Name",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "regName",
    label: "Register Name",
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
    name: "managerMobile",
    label: "Manager Mobile",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "pincode",
    label: "Pincode",
    options: {
      filter: false,
      sort: true,
    },
  },
]

function Company() {
  const { companyData, storeData, getCompanyByUser, getStoreByCompany } =
    useStore()
  const { userInfo } = useAuth()

  const [selectedCompany, setSelectedCompany] = useState("")

  const [rowIndex, setRowIndex] = useState(-1)

  useEffect(() => {
    getCompanyByUser("Z3Vlc3Q=")
  }, [])

  const options = {
    rowsPerPage: 10,
    print: false,
    selectableRows: "single",
    selectableRowsOnClick: true,
    onRowSelectionChange: (curRowSelected) => {
      const selectedRow = companyData[curRowSelected[0].index]
      getStoreByCompany(selectedRow.id)
      setSelectedCompany(selectedRow.name)
    },
  }

  const rowData = companyData.map((item) => ({
    id: item.id,
    name: item.name,
    regName: item.regName,
    managerName: item.managerName,
    managerMobile: item.managerMobile,
    pincode: item.pincode,
  }))

  return (
    <>
      {/* {companyData?.map((item, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.address1} {item.address2}
              </Card.Text>
              <Button
                variant="contained"
                color="primary"
                onClick={() => getStore(item.id)}
              >
                Get Store
              </Button>
            </Card.Body>
          </Card>
        ))} */}

      <MUIDataTable
        className="mb-3"
        title="Companies"
        data={rowData}
        columns={columns}
        options={options}
      />

      {storeData?.length > 0 && (
        <Stores data={storeData} selectedCompany={selectedCompany} />
      )}
    </>
  )
}

export default Company
