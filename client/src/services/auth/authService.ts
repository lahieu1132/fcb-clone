import instance from "../api";

const API_URL = import.meta.env.REACT_APP_API_URL + "/users";

interface userInterface {
  email: string;
  password: string;
  refreshToken?: string;
  accessToken?: string;
}

const checkEmail = async (email: string) => {
  try {
    const response = await instance.post(API_URL + "/check", { email });

    console.log(response);

    return response.data;
  } catch (error) {
    return error;
  }
};

const getUsers = async () => {
  try {
    const response = await instance.get(API_URL + "/");

    console.log(response);

    return response.data;
  } catch (error) {
    return error;
  }
};

// Register user
const register = async (userData: userInterface) => {
  try {
    const response = await instance.post(API_URL + "/register", userData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    return error;
  }
};

// Login user
const login = async (userData: userInterface) => {
  const response = await instance.post(API_URL + "/login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response.data);
  }

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
  getUsers,
};

export default authService;
