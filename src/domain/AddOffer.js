import React from "react"
import { Form, InputGroup } from "react-bootstrap"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Button from "@material-ui/core/Button"

function AddOffers() {
  return (
    <Form style={style.form}>
      <center className="mb-5">
        <Form.Label as="legend">Offer Form Details</Form.Label>
      </center>

      <InputGroup className="mb-3">
        <Form.Group className="col-4">
          <Form.Label>Offer Heading</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="col-4">
          <Form.Label>Offer Sub-Heading</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="col-4">
          <Form.Label>Categories</Form.Label>
          <Form.Control as="select" className="mr-sm-2" custom>
            <option value="0"></option>
          </Form.Control>
        </Form.Group>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Group className="col-8">
          <Form.Label>Offer Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Group className="col-4">
          <Form.Label>Valid From</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="col-4">
          <Form.Label>Valid Till</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="col-4">
          <Form.Label>Offer Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Group className="col-4">
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Activate Offer"
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

export default AddOffers

const style = {
  form: {
    backgroundColor: "white",
    padding: "25px",
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
}
