import instance from "../api";

const API_URL = import.meta.env.REACT_APP_API_URL + "/users";

interface userInterface {
  email: string;
  password: string;
  refreshToken?: string;
  accessToken?: string;
}

const checkEmail = async (email: string) => {
  const response = await instance.post(API_URL + "/check", { email });
  return response.data;
};

// Register user
const register = async (userData: userInterface) => {
  const response = await instance.post(API_URL + "/register", userData);

  if (response.data) {
    // localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response.data);
  }

  return response.data;
};

// Login user
const login = async (userData: userInterface, keepLogIn: boolean) => {
  const response = await instance.post(API_URL + "/login", userData);

  if (response.data && keepLogIn) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  localStorage.removeItem("user");
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") ?? "null") as userInterface;
};

const authService = {
  checkEmail,
  register,
  logout,
  login,
  getCurrentUser,
};

export default authService;
