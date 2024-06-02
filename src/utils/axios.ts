import axios from "axios";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: process.env.NEXT_PUBLIC_HOST_API });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = `${process.env.NEXT_PUBLIC_HOST_CLIENT}`;
    }
    return Promise.reject((error.response && error.response.data) || "Something went wrong");
  }
);

export default axiosInstance;
