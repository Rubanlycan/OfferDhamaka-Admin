import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const FormContainer = styled.form`
  width: 500px;
  background-color: #fff;
  padding: 50px;
  margin-top: 25px;
  box-shadow: 0 0 20px silver;
  border-radius: 10px;
`;

const country = ["Canada"];

function AddressForm({ form, setForm, navigation }) {
  const {
    countryBA,
    streetBA,
    cityBA,
    provinceBA,
    postalCodeBA,
    isPhysicalStore,
    AppartmentName,
    secStreetBA,
    secCityBA,
    secProvinceBA,
    secPostalCodeBA,
    secAppartmentName,
    isPhysicalSameAsRegisteredAddress,
    countryPA,
    streetPA,
    cityPA,
    provincePA,
    postalCodePA,
  } = form;

  return (
    <FormContainer className="mx-auto">
      <h3 className="text-center mb-3">Business Address</h3>

      <Form.Group>
        <Form.Label>Country</Form.Label>
        <Form.Control
          as="select"
          className="mr-sm-2"
          id="inlineFormCustomSelect"
          name="countryBA"
          custom
          value={countryBA}
          onChange={setForm}
        >
          <option></option>
          {country.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Appartment No</Form.Label>
        <Form.Control
          name="AppartmentName"
          type="text"
          value={AppartmentName}
          onChange={setForm}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Street Address</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="streetBA"
          value={streetBA}
          onChange={setForm}
        />
      </Form.Group>

      {/* <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control
          name="cityBA"
          type="text"
          value={cityBA}
          onChange={setForm}
        />
      </Form.Group> */}
      <Form.Group>
        <Form.Label>Province</Form.Label>
        <Form.Control
          name="provinceBA"
          type="text"
          value={provinceBA}
          onChange={setForm}
        />
      </Form.Group>
      <Form.Row className="m-0">
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                name="cityBA"
                placeholder="City"
                value={cityBA}
                onChange={setForm}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control
                name="postalCodeBA"
                placeholder="Postal Code"
                value={postalCodeBA}
                onChange={setForm}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form.Row>
      {/* <Form.Group>
        <Form.Label>Postal Code</Form.Label>
        <Form.Control
          name="postalCodeBA"
          type="text"
          value={postalCodeBA}
          onChange={setForm}
        />
      </Form.Group> */}
      <Form.Label>Is this a physical store as well !</Form.Label>
      <Form.Group>
        <Form.Check
          inline
          label="Yes"
          name="isPhysicalStore"
          type="radio"
          value="Y"
          onChange={setForm}
          id="inline-radio-1"
        />
        <Form.Check
          inline
          label="No"
          name="isPhysicalStore"
          type="radio"
          value="N"
          onChange={setForm}
          id="inline-radio-2"
        />
      </Form.Group>

      {isPhysicalStore == "N" && (
        <div>
          <Form.Label>
            Physical address same as registered business address !
          </Form.Label>
          <Form.Group>
            <Form.Check
              inline
              label="Yes"
              value="Y"
              name="isPhysicalSameAsRegisteredAddress"
              type="radio"
              onChange={setForm}
              id="same-address-1"
            />
            <Form.Check
              inline
              label="No"
              value="N"
              name="isPhysicalSameAsRegisteredAddress"
              type="radio"
              onChange={setForm}
              id="same-address-2"
            />
          </Form.Group>
        </div>
      )}

      {isPhysicalStore === "N" && isPhysicalSameAsRegisteredAddress === "N" && (
        <div>
          <Form.Group>
            <Form.Label>Appartment No</Form.Label>
            <Form.Control
              name="AppartmentName"
              type="text"
              value={AppartmentName}
              onChange={setForm}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Street Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="secStreetBA"
              value={secStreetBA}
              onChange={setForm}
            />
          </Form.Group>

          {/* <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control
          name="cityBA"
          type="text"
          value={cityBA}
          onChange={setForm}
        />
      </Form.Group> */}
          <Form.Group>
            <Form.Label>Province</Form.Label>
            <Form.Control
              name="secProvinceBA"
              type="text"
              value={secProvinceBA}
              onChange={setForm}
            />
          </Form.Group>
          <Form.Row className="m-0">
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    name="secCityBA"
                    placeholder="City"
                    value={secCityBA}
                    onChange={setForm}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control
                    name="secPostalCodeBA"
                    placeholder="Postal Code"
                    value={secPostalCodeBA}
                    onChange={setForm}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form.Row>
        </div>
      )}

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
  );
}

export default AddressForm;
