import axios from "axios";


//Axios instance
const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
        Accepted: "application/json",
        "Content-Type" : "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const allToken =JSON.parse(localStorage.getItem("EachUser"))
        const token = allToken[0].access
        console.log(token)
        if(token) {
          config.headers["Authorization"] = 'Bearer ' + token; 
        }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default axiosInstance