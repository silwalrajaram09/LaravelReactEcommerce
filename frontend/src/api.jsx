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

// Create an axios instance with base URL and credentials settings
const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  // As of Axios v1.x, withXSRFToken: true handles this.
   withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// A utility function to fetch the CSRF cookie
export const getCsrfCookie = async () => {
  try {
    await api.get("/sanctum/csrf-cookie");
  } catch (error) {
    console.error("Failed to fetch CSRF cookie:", error);
  }
};

// Login
export const loginUser = async (data) => {
  // Wait for the cookie to be set before sending the POST request
  await getCsrfCookie();
  return api.post("api/login", data);
};

// Register
export const registerUser = async (data) => {
  // Wait for the cookie to be set before sending the POST request
  await getCsrfCookie();
  return api.post("api/register", data);
};

// Logout
export const logoutUser = async (token) => {
  // Wait for the cookie to be set before sending the POST request
  await getCsrfCookie();
  return api.post(
    "api/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Get authenticated user (GET requests do not need the CSRF cookie)
export const getUser = async (token) => {
  return api.get("api/user", {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export default api;

