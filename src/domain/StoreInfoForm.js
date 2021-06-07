import React from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import styled from "styled-components"

const FormContainer = styled.form`
  width: 500px;
  background-color: #fff;
  padding: 50px;
  margin-top: 75px;
  box-shadow: 0 0 20px silver;
  border-radius: 10px;
  position: relative;
`

function StoreInfoForm({ form, setForm, navigation }) {
  const { storeName, businessName, websiteUrl, logo } = form

  return (
    <FormContainer className="mx-auto">
      <h3 className="text-center mb-3">Store Info</h3>
      <Form.Group>
        <Form.Label>Your preferred store name</Form.Label>
        <Form.Control
          name="storeName"
          type="text"
          value={storeName}
          onChange={setForm}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Company's business name</Form.Label>
        <Form.Control
          name="businessName"
          type="text"
          value={businessName}
          onChange={setForm}
        />
        <Form.Text className="text-muted">
          Enter the company/business name as registered in{" "}
          <strong>corporation</strong>
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Website Url</Form.Label>
        <Form.Control
          name="websiteUrl"
          type="text"
          value={websiteUrl}
          onChange={setForm}
        />
      </Form.Group>

      <Form.Group style={{ display: "none" }}>
        <Form.Control name="logo" type="file" onChange={setForm} />
      </Form.Group>

      <Form.Label>Company Logo</Form.Label>
      <Form.Row className="m-0">
        <Row>
          <Col sm={10}>
            <Form.Group>
              <Form.Control
                name="websiteUrl"
                type="text"
                value={logo}
                readonly
              />
            </Form.Group>
          </Col>
          <Col sm={2}>
            <Form.Group>
              <Button variant="outline-secondary">Browse</Button>
            </Form.Group>
          </Col>
        </Row>
      </Form.Row>

      <Button className="mt-3 w-100" onClick={() => navigation.next()}>
        Next
      </Button>
    </FormContainer>
  )
}

export default StoreInfoForm
