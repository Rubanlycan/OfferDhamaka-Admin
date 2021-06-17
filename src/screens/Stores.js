import React, { useEffect } from "react"
import { Form, InputGroup } from "react-bootstrap"
import { useStore } from "../context"
import { useAuth } from "../utils/AuthContext"

function Stores() {
  const { storeData, getStore } = useStore()
  const { userInfo } = useAuth()

  useEffect(() => {
    getStore("Z3Vlc3Q=")
  }, [])

  return (
    <Form style={style.form}>
      <center className="mb-5">
        <Form.Label as="legend">Required Retail Store Information:</Form.Label>
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
    </Form>
  )
}

export default Stores

const style = {
  form: {
    backgroundColor: "white",
    padding: "25px",
    boxShadow: "0 0 15px silver",
  },
}
