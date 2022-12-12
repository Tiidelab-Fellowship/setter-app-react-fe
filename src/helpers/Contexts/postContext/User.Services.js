import axiosInstance from "../../axiosConfig/axiosConfig";

export const registerUser = async (userInfo) => {
  try {
    const response = await axiosInstance.post("/auth/register", userInfo);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (loginDetails) => {
  try {
    const response = await axiosInstance.post("/auth/login", loginDetails);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async () => {
  try {
    const id = JSON.parse(localStorage.getItem("userId"));
    const response = await axiosInstance.get(`/users/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const UserServices = {
  getUserInfo,
  loginUser,
  registerUser,
};

export default UserServices;
