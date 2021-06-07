import React, { useState } from "react"
import { useAuth } from "../utils/AuthContext"
import { Form, Button, Alert, InputGroup } from "react-bootstrap"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"
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

function Login() {
  const { login } = useAuth()
  const [user, setUser] = useState({
    adminEmail: "",
    adminPassword: "",
  })

  const [inputType, setInputType] = useState("password")
  const [btnDisable, setBtnDisable] = useState(false)
  const [errMsg, setErrMsg] = useState("")

  const handleChange = (e) => {
    setErrMsg("")
    setBtnDisable(false)
    const { name, value } = e.target
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const toggleInputType = (type) => setInputType(type)

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setBtnDisable(true)
      await login(user.adminEmail, user.adminPassword)
      history.replace("/home")
      setUser({
        adminEmail: "",
        adminPassword: "",
      })
    } catch (err) {
      setErrMsg(err.code.split("/")[1])
    }
    setBtnDisable(false)
  }

  return (
    <>
      <RegisterLink to="register">New User ? Register here .</RegisterLink>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <FormContainer className="mx-auto" onSubmit={handleSubmit}>
          {errMsg && <Alert variant="danger">{errMsg}</Alert>}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                name="adminEmail"
                type="email"
                value={user.adminEmail}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-5">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                className="passwordField"
                name="adminPassword"
                type={inputType}
                value={user.adminPassword}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon1">
                  {inputType === "password" ? (
                    <i
                      className="fa fa-eye-slash"
                      aria-hidden="true"
                      onClick={() => toggleInputType("text")}
                    ></i>
                  ) : (
                    <i
                      className="fa fa-eye"
                      aria-hidden="true"
                      onClick={() => toggleInputType("password")}
                    ></i>
                  )}
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <NavLink to={`/forgotPassword`} className="small float-right">
              Forgot Password ?
            </NavLink>
          </Form.Group>

          <Button
            variant="primary"
            disabled={btnDisable}
            type="submit"
            className="w-100"
          >
            Login
          </Button>
        </FormContainer>
      </motion.div>
    </>
  )
}

export default Login
