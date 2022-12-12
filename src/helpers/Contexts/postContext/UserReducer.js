import {  UPDATE_USER_DETAILS, FETCH_USER_DETAILS } from "./UserTypes";

const UserReducer = (state, action) => {
  const { type, payload } = action;
  const {user} = state

  console.log(state)
  console.log(user)
  switch (type){
    // case LOGIN_USER: 

    // case REGISTER_USER:
    case UPDATE_USER_DETAILS:
      return{
        
        ...state, user:[...user , payload],
      }
    // case FETCH_USER_DETAILS:
    //   return {
    //     ...state, user:payload,
    //   }
    default:
    return state;     
}
}

export default UserReducer
