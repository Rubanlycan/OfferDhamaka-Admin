import { createContext, useContext, useReducer, useEffect } from "react"
import API from "../utils/API"

export const StoreContext = createContext({})
export const useStore = () => useContext(StoreContext)

const storeActions = {
  MAKE_REQUEST: "MAKE_REQUEST",
  ERROR: "ERROR",
}

const initialState = {
  isLoading: false,
  storeData: {},
  error: "",
}

const reducer = (state, action) => {
  switch (action.type) {
    case storeActions.MAKE_REQUEST:
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export const StoreDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const createStore = async ({ id, body }) => {
    try {
      dispatch({ type: storeActions.MAKE_REQUEST })
      const response = await API.createStore({ id, body })
      console.log(response)
    } catch (error) {
      dispatch({
        type: storeActions.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  const getStore = async (id) => {
    try {
      dispatch({ type: storeActions.MAKE_REQUEST })
      const response = await API.getStore(id)
      console.log(response)
    } catch (error) {
      dispatch({
        type: storeActions.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  return (
    <StoreContext.Provider
      value={{
        ...state,
        createStore,
        getStore,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
