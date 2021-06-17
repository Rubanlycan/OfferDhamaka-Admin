import React, { useReducer } from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import Backdrop from "@material-ui/core/Backdrop"
import { Form, InputGroup } from "react-bootstrap"

export default function BranchModal({ BranchData, open, handleClose }) {
  const initialState = {
    branchID: "",
    branchName: "",
    branchManager: "",
    branchInfo: "",
    branchContact: "",
    branchAddress: "",
    branchEmail: "",
  }

  const AddBranch = () => {
    BranchData(state)
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      style={{ width: "100%" }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <DialogTitle id="form-dialog-title">
        Please enter your branch information
      </DialogTitle>
      <DialogContent>
        <Form>
          <InputGroup className="mb-3">
            <Form.Group className="col-6">
              <Form.Label>Branch ID</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  dispatch({ type: "setBranchId", payload: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="col-6">
              <Form.Label>Branch Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  dispatch({ type: "setBranchName", payload: e.target.value })
                }
              />
            </Form.Group>
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Group className="col-6">
              <Form.Label>Branch Manager</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  dispatch({
                    type: "setBranchManager",
                    payload: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="col-6">
              <Form.Label>Branch EmailID</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  dispatch({ type: "setBranchEmail", payload: e.target.value })
                }
              />
            </Form.Group>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Group className="col-6">
              <Form.Label>Branch Contact Number</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  dispatch({
                    type: "setBranchContact",
                    payload: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="col-6">
              <Form.Label>Branch Address</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  dispatch({
                    type: "setBranchAddress",
                    payload: e.target.value,
                  })
                }
              />
            </Form.Group>
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Group className="col-12">
              <Form.Label>Btanch Description</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) =>
                  dispatch({ type: "setBranchInfo", payload: e.target.value })
                }
              />
            </Form.Group>
          </InputGroup>
        </Form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={AddBranch} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "setBranchId":
      return {
        ...state,
        branchID: payload,
      }
    case "setBranchName":
      return {
        ...state,
        branchName: payload,
      }
    case "setBranchManager":
      return {
        ...state,
        branchManager: payload,
      }
    case "setBranchEmail":
      return {
        ...state,
        branchEmail: payload,
      }
    case "setBranchInfo":
      return {
        ...state,
        branchInfo: payload,
      }
    case "setBranchContact":
      return {
        ...state,
        branchContact: payload,
      }
    case "setBranchAddress":
      return {
        ...state,
        branchAddress: payload,
      }
    default:
      throw new Error()
  }
}
