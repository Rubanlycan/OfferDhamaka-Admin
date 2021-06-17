import React, { useState } from "react";
import { Form, Button, InputGroup, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigation } from "@material-ui/icons";

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

const SignUp = ({ navigation, form, setForm, otpResult }) => {
  const [mobile, setMobile] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [btnDisable, setBtnDisable] = useState("");
  const handleChange = (e) => {
    setErrMsg("");
    setSuccessMsg("");
  };
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    if (form.otp) {
      otpResult
        .confirm(form.otp)
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

  const history = useHistory();

  return (
    <>
      <RegisterLink to="register">New User ? Register here .</RegisterLink>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <FormContainer className="mx-auto" onSubmit={handleSubmit}>
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
              readOnly
              value={form.mobileNo}
              type="number"
              maxLength={10}
              max={10}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="mb-4">
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
              type="number"
              name="otp"
              value={form.otp}
              onChange={setForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control name="firstName" type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control name="email" type="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Set Password</Form.Label>
            <Form.Control name="password" type="password" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={btnDisable}
          >
            Submit
          </Button>
        </FormContainer>
      </motion.div>
    </>
  );
};

export default SignUp;

const style = {
  backButton: {
    fontSize: "25px",
    marginBottom: "10px",
    color: "blue",
    cursor: "pointer",
  },
};
