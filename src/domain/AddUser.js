import React from "react"
import { Form, InputGroup } from "react-bootstrap"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Button from "@material-ui/core/Button"

function AddUsers() {
  return (
    <Form style={style.form}>
      <center className="mb-5">
        <Form.Label as="legend">User Form Details</Form.Label>
      </center>

      <InputGroup className="mb-3">
        <Form.Group className="col-4">
          <Form.Label>User Full Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="col-4">
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="col-4">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Group className="col-4">
          <Form.Label>User Type</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="col-4">
          <Form.Label>Company Type</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="col-4">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Group className="col-4">
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Activate User"
          />
        </Form.Group>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Group className="col-2">
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </Form.Group>
      </InputGroup>
    </Form>
  )
}

export default AddUsers

const style = {
  form: {
    backgroundColor: "white",
    padding: "25px",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
}
