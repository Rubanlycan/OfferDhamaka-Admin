import React, { useState } from "react";
import { Form, Button, InputGroup, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigation } from "@material-ui/icons";
import firebase from "firebase/app";

const FormContainer = styled.form`
  width: 400px;
  background-color: #fff;
  padding: 50px;
  margin-top: 150px;
  box-shadow: 0 0 20px silver;
  border-radius: 10px;
`;
const RegisterLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px 25px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px silver;
  padding: 25px;
  :hover {
    text-decoration: none;
  }
`;

const MobileNo = ({ form, setForm, navigation, setOtpResult }) => {
  const [isOtpClicked, setOtpClicked] = React.useState(false);
  const [reCaptcha, setRecaptcha] = React.useState();
  // firebase.auth().settings.appVerificationDisabledForTesting = true;

  const onGetOtp = () => {
    if (form.mobileNo.length == 10) {
      setOtpClicked(true);
      let reCaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");

      let number = "+1" + form.mobileNo;
      // firebase
      //   .auth()
      //   .signInWithPhoneNumber(number, reCaptcha)
      //   .then((res) => {
      //     setOtpResult(res);
      //     navigation.next();
      //   });
      navigation.next();
    } else {
      alert("Mobile number is mandatory");
    }
  };

  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    navigation.next();
  };
  const history = useHistory();
  return (
    <>
      <RegisterLink to="register">New User ? Register here .</RegisterLink>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <FormContainer className="mx-auto">
          <i
            style={style.backButton}
            className="fa fa-arrow-circle-left"
            aria-hidden="true"
            title="Back to Login"
            onClick={() => history.push(`/Login`)}
          ></i>
          <Form.Group controlId="formBasicEmail" className="mb-4">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              required
              name="mobileNo"
              value={form.mobileNo}
              type="number"
              maxLength={10}
              onChange={setForm}
            />
          </Form.Group>
          <div id="recaptcha"></div>
          <Button variant="primary" type="button" onClick={onGetOtp}>
            Get OTP
          </Button>
        </FormContainer>
      </motion.div>
    </>
  );
};

export default MobileNo;

const style = {
  backButton: {
    fontSize: "25px",
    marginBottom: "10px",
    color: "blue",
    cursor: "pointer",
  },
};
