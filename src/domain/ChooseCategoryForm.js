import React from "react"
import { Form, Button, Alert, InputGroup } from "react-bootstrap"
import styled from "styled-components"

const FormContainer = styled.form`
  width: 500px;
  background-color: #fff;
  padding: 50px;
  margin-top: 75px;
  box-shadow: 0 0 20px silver;
  border-radius: 10px;
`

function ChooseCategoryForm({ form, setForm, navigation }) {
  const { mainCategory } = form
  return (
    <FormContainer className="mx-auto">
      <h3 className="text-center mb-3">Category</h3>
      <Form.Group>
        <Form.Label>
          Choose your main selling category (you can show Ads in other
          categories as well)
        </Form.Label>
        <div className="row ml-0 mb-3 mt-3">
          <Form.Check
            className="col"
            label="Electronics"
            name="mainCategory"
            type="radio"
            id="Electronics"
          />
          <Form.Check
            className="col"
            label="Fashion"
            name="mainCategory"
            type="radio"
            id="Fashion"
          />
        </div>
        <div className="row ml-0 mb-3">
          <Form.Check
            className="col"
            label="Beauty & Grooming"
            name="mainCategory"
            type="radio"
            id="BeautyGrooming"
          />
          <Form.Check
            className="col"
            label="Toys & Games"
            name="mainCategory"
            type="radio"
            id="ToysGames"
          />
        </div>
        <div className="row ml-0 mb-3">
          <Form.Check
            className="col"
            label="Homes & Living"
            name="mainCategory"
            type="radio"
            id="HomesLiving"
          />
          <Form.Check
            className="col"
            label="Grocery & Essentials"
            name="mainCategory"
            type="radio"
            id="GroceryEssentials"
          />
        </div>
        <div className="row ml-0 mb-3">
          <Form.Check
            className="col"
            label="Hobbies"
            name="mainCategory"
            type="radio"
            id="Hobbies"
          />
          <Form.Check
            className="col"
            label="Handcrafts"
            name="mainCategory"
            type="radio"
            id="Handcrafts"
          />
        </div>
        <div className="row ml-0 mb-3">
          <Form.Check
            className="col"
            label="Gifts "
            name="mainCategory"
            type="radio"
            id="Gifts"
          />
          <Form.Check
            className="col"
            label="Books "
            name="mainCategory"
            type="radio"
            id="Books"
          />
        </div>
        <div className="row ml-0 mb-3">
          <Form.Check
            className="col"
            label="Business "
            name="mainCategory"
            type="radio"
            id="Business"
          />
        </div>
      </Form.Group>
      <div className="w-100 d-flex justify-content-around">
        <Button
          className="mt-3 w-50 mr-1"
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button className="mt-3 w-50 ml-1" onClick={() => navigation.next()}>
          Next
        </Button>
      </div>
    </FormContainer>
  )
}

export default ChooseCategoryForm
