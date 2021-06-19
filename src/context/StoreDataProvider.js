import { createContext, useContext, useReducer, useEffect } from "react";
import API from "../utils/API";

export const StoreContext = createContext({});
export const useStore = () => useContext(StoreContext);

const storeActions = {
  MAKE_REQUEST: "MAKE_REQUEST",
  ERROR: "ERROR",
  SAVE_OTP: "SAVE_OTP",
};

const initialState = {
  isLoading: false,
  storeData: {},
  error: "",
  otpResult: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case storeActions.MAKE_REQUEST:
      return { ...state, data: action.payload };
    case storeActions.SAVE_OTP:
      return { ...state, data: action.payload };
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

  const getStore = async (id) => {
    try {
      dispatch({ type: storeActions.MAKE_REQUEST });
      const response = await API.getStore(id);
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

  const getOtpData = async (data) => {
    dispatch({ type: storeActions.SAVE_OTP, payload: data });
  };

  return (
    <StoreContext.Provider
      value={{
        ...state,
        createStore,
        getStore,
        getOtpData,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
