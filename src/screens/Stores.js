import React from "react"
import { Form, InputGroup } from "react-bootstrap"
import { BranchModal } from "../domain"
import Button from "@material-ui/core/Button"

function Stores() {
  const [open, setOpen] = React.useState(false)

  const columns = [
    { heading: "BranchID", property: "branchID" },
    { heading: "Branch Name", property: "branchName" },
    { heading: "Branch Manager", property: "branchManager" },
    { heading: "Branch Contact", property: "branchContact" },
    { heading: "Branch Email", property: "branchEmail" },
  ]

  const [branchData, setBranchData] = React.useState([])
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const getBranchData = (data) => {
    setBranchData([...branchData, data])
    handleClose()
  }

  //Table Creator
  const Table = ({ columns, data, propertyAsKey }) => (
    <table className="table">
      <thead style={{ backgroundColor: "#3f51b5" }}>
        <tr>
          {columns.map((col) => (
            <th style={{ color: "#fff" }} key={`header-${col.heading}`}>
              {col.heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={`${item[propertyAsKey]}-row`}>
            {columns.map((col) => (
              <td key={`${item[propertyAsKey]}-${col.property}`}>
                {item[col.property]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <>
      {/* <BranchModal
        open={open}
        handleClose={handleClose}
        BranchData={(val) => getBranchData(val)}
      /> */}
      <Form style={style.form}>
        <center className="mb-5">
          <Form.Label as="legend">
            Required Retail Store Information:
          </Form.Label>
        </center>

        <InputGroup className="mb-3 ">
          <Form.Group className="col-3">
            <Form.Label>Company ID</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="col-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="col-3">
            <Form.Label>Company Website</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="col-3">
            <Form.Label>Company GSTN</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </InputGroup>

        <InputGroup className="mb-3 ">
          <Form.Group className="col-3">
            <Form.Label>Company Owner Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="col-3">
            <Form.Label>Company Manager Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="col-6">
            <Form.Label>Company Description</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
        </InputGroup>

        <InputGroup className="mb-3 ">
          <Form.Group className="col-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="col-3">
            <Form.Label>Province</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="col-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="col-3">
            <Form.Label>Zip code</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </InputGroup>

        <InputGroup className="mb-3 ">
          <Form.Group className="col-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="number" maxLength={10} max={10} />
          </Form.Group>
          <Form.Group className="col-3">
            <Form.Label>Email-Id</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="col-3">
            <Form.Label>Company Logo</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </InputGroup>

        {/* <Form.Group className="col-2 mt-4 mb-4">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClickOpen}
          >
            Add Branch
          </Button>
        </Form.Group> */}

        {branchData && branchData.length > 0 ? (
          <Table columns={columns} data={branchData} propertyAsKey="name" />
        ) : null}
      </Form>
    </>
  )
}

export default Stores

const style = {
  form: {
    backgroundColor: "white",
    padding: "25px",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
}
