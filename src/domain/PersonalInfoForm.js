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
  const [otp, setotp] = React.useState();
  const [otpResult, setOtpResult] = React.useState(null);
  const [mobileNum, setMobileNum] = React.useState("");
  const [isOtpClicked, setOtpClicked] = React.useState(false);
  const {
    ownerName,
    email,
    contactNumber,
    operatingHoursFrom,
    operatingHoursTo,
    weeklyOff,
    agreement,
  } = form;

  const onRegister = () => {
    if (otp) {
      otpResult
        .confirm(otp)
        .then((result) => {
          console.log(result.user, "user");
          alert("number verified Successfully");
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    } else {
      alert("Please enter Otp");
    }
  };
  const onGetOtp = (mobileNo) => {
    if (mobileNo) {
      setOtpClicked(true);
      let reCaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
      let number = "+1" + mobileNo;
      firebase
        .auth()
        .signInWithPhoneNumber(number, reCaptcha)
        .then((res) => {
          setOtpResult(res);
        });
    } else {
      alert("Mobile number is mandatory");
    }
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
          onChange={(e) => setMobileNum(e.target.value)}
        />
      </Form.Group>
      {isOtpClicked ? (
        <Form.Group>
          <Form.Label>Please enter your OTP</Form.Label>
          <Form.Control
            name="otp"
            maxLength={6}
            type="text"
            onChange={(e) => setotp(e.target.value)}
          />
        </Form.Group>
      ) : null}

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
        <Button
          onClick={() => {
            otpResult ? onRegister() : onGetOtp(mobileNum);
          }}
          className="mt-3 w-50 ml-1"
        >
          {isOtpClicked ? "Submit" : " Get OTP"}
        </Button>
      </div>
    </FormContainer>
  );
}

export default PersonalInfoForm;
