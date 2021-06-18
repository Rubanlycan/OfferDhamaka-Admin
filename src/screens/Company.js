import React, { useEffect } from "react"
import { Card } from "react-bootstrap"
import Button from "@material-ui/core/Button"
import { useStore } from "../context"
import { useAuth } from "../utils/AuthContext"
import Store from "./Stores"

function Company() {
  const { companyData, storeData, getCompanyByUser, getStoreByCompany } =
    useStore()
  const { userInfo } = useAuth()

  useEffect(() => {
    getCompanyByUser("Z3Vlc3Q=")
  }, [])

  const getStore = (company_id) => {
    try {
      getStoreByCompany(company_id)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(companyData)

  return (
    <>
      <Card className="p-3 pr-5 pl-5 mb-3">
        <Card.Title>Companies</Card.Title>
        {companyData?.map((item, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.address1} {item.address2}
              </Card.Text>
              <Button
                variant="contained"
                color="primary"
                onClick={() => getStore(item.id)}
              >
                Get Store
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Card>

      {storeData?.length > 0 && <Store data={storeData} />}
    </>
  )
}

export default Company
