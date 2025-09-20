// import axios from "axios";

// // Base URLs
// const BASE_URL = "http://localhost:8000";
// const API_URL = `${BASE_URL}/api`;

// // Axios instance
// const api = axios.create({
//   baseURL: API_URL,
//   withCredentials: true, 
//   withXSRFToken: true, 
//   headers: {
//     "Content-Type": "application/json",
//     "Accept":"application/json",
//   },
// });

// // Get CSRF token before login/register/logout
// export const getCsrfToken = async () => {
//   await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
//     withCredentials: true,
//   });
// };

// // Unified auth request
// export const authRequest = async (endpoint, data) => {
//   await getCsrfToken(); // always fetch CSRF
//   return api.post(endpoint, data);
// };

// // Auth APIs
// export const registerUser = (data) => authRequest("/register", data);
// export const loginUser = (data) => authRequest("/login", data);
// export const logoutUser = () => authRequest("/logout");
// export const getUser = () =>
//   api.get("/user", { withCredentials: true });

// export default api;
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Login
export const loginUser = async (data) => {
  return api.post("/login", data);
};

// Register
export const registerUser = async (data) => {
  return api.post("/register", data);
};

// Logout
export const logoutUser = async (token) => {
  return api.post(
    "/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Get authenticated user
export const getUser = async (token) => {
  return api.get("/user", {
    headers: { Authorization: `Bearer ${token}` }
  });
};
export default api;
