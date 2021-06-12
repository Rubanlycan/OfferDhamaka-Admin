import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import firebase from "firebase/app";

const FormContainer = styled.form`
  width: 500px;
  background-color: #fff;
  padding: 50px;
  margin-top: 25px;
  box-shadow: 0 0 20px silver;
  border-radius: 10px;
`;

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function PersonalInfoForm({ form, setForm, navigation }) {
  const {
    ownerName,
    email,
    contactNumber,
    operatingHoursFrom,
    operatingHoursTo,
    weeklyOff,
    agreement,
  } = form;

  const onRegister = (mobileNo) => {
    let reCaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    let number = "+91" + mobileNo;
    firebase
      .auth()
      .signInWithPhoneNumber(number, reCaptcha)
      .then((res) => {
        let code = prompt("enter the otp", "");
        if (code == null) return;
        res
          .confirm(code)
          .then((result) => {
            console.log(result.user, "user");
            alert("number verified " + number);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  return (
    <FormContainer className="mx-auto">
      <h3 className="text-center mb-3">Personal Info</h3>
      <Form.Group>
        <Form.Label>Owner / Manager name</Form.Label>
        <Form.Control
          name="ownerName"
          type="text"
          value={ownerName}
          onChange={setForm}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          value={email}
          onChange={setForm}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Contact Number</Form.Label>
        <Form.Control
          name="contactNumber"
          type="text"
          value={contactNumber}
          onChange={setForm}
        />
      </Form.Group>

      <Form.Label>Store operating hours</Form.Label>
      <Form.Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control placeholder="From" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control placeholder="To" />
            </Form.Group>
          </Col>
        </Row>
      </Form.Row>

      <Form.Group>
        <Form.Label>Weekly Off</Form.Label>
        <Form.Control
          as="select"
          className="mr-sm-2"
          id="inlineFormCustomSelect"
          custom
          name="weeklyOff"
          value={weeklyOff}
          onChange={setForm}
        >
          <option></option>
          {week.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          className="text-muted"
          label="I agree to comply with terms and conditions of ShopiAds business solution aggreement"
        />
      </Form.Group>
      <div id="recaptcha"></div>
      <div className="w-100 d-flex justify-content-around">
        <Button
          className="mt-3 w-50 mr-1"
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button onClick={() => onRegister()} className="mt-3 w-50 ml-1">
          Submit
        </Button>
      </div>
    </FormContainer>
  );
}

export default PersonalInfoForm;
