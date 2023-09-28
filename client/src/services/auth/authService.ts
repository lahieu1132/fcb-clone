import instance from "../api";

const API_URL = import.meta.env.REACT_APP_API_URL + "/users";

interface userInterface {
  email: string;
  password?: string;
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
  return response.data;
};

// Login user
const login = async (userData: userInterface, keepLogIn: boolean) => {
  const response = await instance.post(API_URL + "/login", userData);
  console.log(keepLogIn);
  if (response.data) {
    localStorage.setItem(
      "accessToken",
      JSON.stringify(response.data.accessToken)
    );
    localStorage.setItem(
      "refreshToken",
      JSON.stringify(response.data.refreshToken)
    );
  }
  if (keepLogIn) {
    localStorage.setItem("keepLogIn", JSON.stringify(true));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.clear();
};

const getCurrentUser = async () => {
  const response = await instance.get(API_URL + "/info");
  if (response.data) {
    localStorage.setItem("user", response.data);
  }
  return response.data;
};

const authService = {
  checkEmail,
  register,
  logout,
  login,
  getCurrentUser,
};

export default authService;
