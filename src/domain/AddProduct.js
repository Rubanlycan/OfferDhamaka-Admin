import React, { useState } from "react"
import { Form, InputGroup } from "react-bootstrap"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Button from "@material-ui/core/Button"
import { NavLink } from "react-router-dom"

const rootCategory = ["Appliances", "Electronics", "Fashion", "Home"]

function AddProducts() {
  const [category, setCategory] = useState(rootCategory)
  const [subCategory1, setSubCategory1] = useState([])
  const [subCategory2, setSubCategory2] = useState([])

  const handleRootCategoryChange = (e) => {
    const val = e.target.value
    if (val === "Electronics")
      setSubCategory1(["Cameras", "Earphone", "Laptop", "Mobile"])
    if (val === "Fashion") setSubCategory1(["Mens", "Womens", "Kids"])
  }
  const handleSubCategory1Change = (e) => {
    const val = e.target.value
    if (val === "Mens") setSubCategory2(["Shirts", "Footwears", "Suits"])
  }

  return (
    <Form style={style.form}>
      <center className="mb-5">
        <Form.Label as="legend">Product Form Details</Form.Label>
      </center>

      <InputGroup className="mb-3">
        <Form.Group className="col-4">
          <Form.Label>Choose Existing Offer</Form.Label>
          <Form.Control as="select" className="mr-sm-2" custom>
            <option></option>
          </Form.Control>
        </Form.Group>
        <Form.Label>OR</Form.Label>
        <Form.Group className="col mt-4">
          <Button
            variant="contained"
            color="default"
            // type="button"
            component={NavLink}
            to={"/home/offers/add"}
            style={{ textDecoration: "none" }}
          >
            Create New Offer
          </Button>
        </Form.Group>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Group className="col-4">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="col-4">
          <Form.Label>Product Heading</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="col-4">
          <Form.Label>Product Sub-Heading</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Group className="col-8">
          <Form.Label>Product Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="col-4">
          <Form.Label>Website Link</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Group className="col-4">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            className="mr-sm-2"
            custom
            onChange={handleRootCategoryChange}
          >
            <option></option>
            {category.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className="col-4">
          <Form.Label>Sub-Category-1</Form.Label>
          <Form.Control
            as="select"
            className="mr-sm-2"
            custom
            onChange={handleSubCategory1Change}
          >
            <option></option>
            {subCategory1.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className="col-4">
          <Form.Label>Sub-Category-2</Form.Label>
          <Form.Control as="select" className="mr-sm-2" custom>
            <option></option>
            {subCategory2.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Group className="col-4">
          <Form.Label>Actual Price</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="col-4">
          <Form.Label>Discount Percentage</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="col-4">
          <Form.Label>Offer Price</Form.Label>
          <Form.Control type="text" />
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
          <Form.Label>Product Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Group className="col-4">
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Activate Product"
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

export default AddProducts

const style = {
  form: {
    backgroundColor: "white",
    padding: "25px",
    boxShadow: "0 0 15px silver",
  },
}
