import React from "react"
import { useForm, useStep } from "react-hooks-helper"
import {
  StoreInfoForm,
  ChooseCategoryForm,
  PersonalInfoForm,
  AddressForm,
} from "../domain"
import { Link } from "react-router-dom"
import styled from "styled-components"

const defaultData = {
  storeName: "",
  businessName: "",
  websiteUrl: "",
  logo: "",

  mainCategory: "",

  countryBA: "",
  streetBA: "",
  cityBA: "",
  provinceBA: "",
  postalCodeBA: "",

  isPhysicalStore: "",
  isPhysicalSameAsRegisteredAddress: "",

  countryPA: "",
  streetPA: "",
  cityPA: "",
  provincePA: "",
  postalCodePA: "",

  ownerName: "",
  email: "",
  contactNumber: "",
  operatingHoursFrom: "",
  operatingHoursTo: "",
  weeklyOff: "",
  agreement: false,
}

const steps = [
  { id: "storeInfo" },
  { id: "chooseCategory" },
  { id: "address" },
  { id: "personalInfo" },
]

const BackToLogin = styled(Link)`
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

function Register() {
  const [form, setForm] = useForm(defaultData)
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  })

  const props = { form, setForm, navigation }

  return (
    <div>
      <BackToLogin to="/login">Go back to login</BackToLogin>
      <div>
        <RegisterForms id={step.id} data={props} />
      </div>
    </div>
  )
}

const RegisterForms = ({ id, data }) => {
  switch (id) {
    case "storeInfo":
      return <StoreInfoForm {...data} />
    case "chooseCategory":
      return <ChooseCategoryForm {...data} />
    case "address":
      return <AddressForm {...data} />
    case "personalInfo":
      return <PersonalInfoForm {...data} />
  }
}

export default Register
