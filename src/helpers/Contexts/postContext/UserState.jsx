import React, {useReducer} from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import {
 
  FETCH_USER_DETAILS,
  UPDATE_USER_DETAILS,
} from "./UserTypes";

export const UserState = ({ children }) => {
  const initialState = {
    user: {},
    };

  const [state, dispatch] = useReducer(UserReducer, initialState)


  // Pure functions - GOING TO DISPATCH ACTIONS
  const eachUser = (userObject) => {
    dispatch({ type: FETCH_USER_DETAILS, payload: userObject })
  }
  const updateUser = (updateUserObject) => {
    dispatch({ type: UPDATE_USER_DETAILS, payload: updateUserObject })
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        eachUser,
        updateUser,
        ...state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}