import {  UPDATE_USER_DETAILS, FETCH_USER_DETAILS } from "./UserTypes";

const UserReducer = (state, action) => {
  const { type, payload } = action;
  
  switch (type){
    // case LOGIN_USER:

    // case REGISTER_USER:
    case UPDATE_USER_DETAILS:
      return{
        ...state, user:payload,
      }
    case FETCH_USER_DETAILS:
      return {
        ...state, user:payload,
      }
    default:
    return state;     
}
}

export default UserReducer
