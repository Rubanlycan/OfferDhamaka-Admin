import { createContext, useContext, useReducer, useEffect } from "react";
import API from "../utils/API";

export const StoreContext = createContext({});
export const useStore = () => useContext(StoreContext);

const storeActions = {
  MAKE_REQUEST: "MAKE_REQUEST",
  SET_COMPANY: "SET_COMPANY",
  SET_STORE: "SET_STORE",
  ERROR: "ERROR",
  SAVE_OTP: "SAVE_OTP",
};

const initialState = {
  isLoading: false,
  companyData: [],
  storeData: [],
  error: "",
  otpResult: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case storeActions.MAKE_REQUEST:
      return { ...state, isLoading: true }
    case storeActions.SET_COMPANY:
      return { ...state, companyData: action.payload, isLoading: false }
    case storeActions.SET_STORE:
      return { ...state, storeData: action.payload, isLoading: false }
    default:
      return state;
  }
};

export const StoreDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createStore = async (data) => {
    try {
      dispatch({ type: storeActions.MAKE_REQUEST });
      const response = await API.createStore(data);
      console.log(response);
    } catch (error) {
      dispatch({
        type: storeActions.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  const getCompanyByUser = async (user_id) => {
    try {
      dispatch({ type: storeActions.MAKE_REQUEST })
      const response = await API.getCompanyByUser(user_id)
      dispatch({ type: storeActions.SET_COMPANY, payload: response.data })
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

  const getStoreByCompany = async (company_id) => {
    try {
      dispatch({ type: storeActions.MAKE_REQUEST })
      const response = await API.getStoreByCompany(company_id)
      console.log(response)
      dispatch({ type: storeActions.SET_STORE, payload: response.data })
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

  const getStoreByUser = async (user_id) => {
    try {
      dispatch({ type: storeActions.MAKE_REQUEST })
      const response = await API.getStoreByUser(user_id)
      console.log(response)
    } catch (error) {
      dispatch({
        type: storeActions.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  const getOtpData = async (data) => {
    dispatch({ type: storeActions.SAVE_OTP, payload: data });
  };

  return (
    <StoreContext.Provider
      value={{
        ...state,
        createStore,
        getCompanyByUser,
        getStoreByCompany,
        getStoreByUser,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
