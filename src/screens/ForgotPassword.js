import React, { useState } from "react"
import { Form, Button, InputGroup, Alert } from "react-bootstrap"
import { motion } from "framer-motion"
import { useHistory } from "react-router-dom"
import { useAuth } from "../utils/AuthContext"
import { Link } from "react-router-dom"
import styled from "styled-components"

const FormContainer = styled.form`
  width: 400px;
  background-color: #fff;
  padding: 50px;
  margin-top: 150px;
  box-shadow: 0 0 20px silver;
  border-radius: 10px;
`
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
`

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const [btnDisable, setBtnDisable] = useState("")
  const handleChange = (e) => {
    setErrMsg("")
    setSuccessMsg("")
    setEmail(e.target.value)
  }
  const { resetPassword } = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setBtnDisable(true)
      await resetPassword(email)
      setSuccessMsg("Check your inbox for further instruction")
      setEmail("")
    } catch (err) {
      setErrMsg(err.code.split("/")[1])
    }
    setBtnDisable(false)
  }
  const history = useHistory()
  return (
    <>
      <RegisterLink to="register">New User ? Register here .</RegisterLink>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <FormContainer className="mx-auto" onSubmit={handleSubmit}>
          <i
            style={style.backButton}
            class="fa fa-arrow-circle-left"
            aria-hidden="true"
            title="Back to Login"
            onClick={() => history.push(`/Login`)}
          ></i>
          <Form.Group controlId="formBasicEmail" className="mb-4">
            <Form.Label className="text-center">
              Please enter your registered email address and we will help you to
              reset your password.
            </Form.Label>
            {errMsg && <Alert variant="danger">{errMsg}</Alert>}
            {successMsg && <Alert variant="success">{successMsg}</Alert>}
            <InputGroup className="mt-3">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
                required
              />
            </InputGroup>
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
  )
}

export default ForgotPassword

const style = {
  backButton: {
    fontSize: "25px",
    marginBottom: "10px",
    color: "blue",
    cursor: "pointer",
  },
}
