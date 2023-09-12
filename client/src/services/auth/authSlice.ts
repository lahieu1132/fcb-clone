import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

interface User {
  email: string;
  password: string;
}

interface stateInterrface {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message?: string;
}

// Get user from localStorage
const user: User = JSON.parse(localStorage.getItem("user") ?? "null") as User;

const initialState: stateInterrface = {
  user: user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user

export const register = createAsyncThunk<User, User, { rejectValue: string }>(
  "client/register",
  async (user: User) => {
    return await authService.register(user);
  }
);

export const checkEmail = createAsyncThunk(
  "client/checkEmail",
  async (email: string) => {
    return await authService.checkEmail(email);
  }
);

// Login user
export const login = createAsyncThunk("auth/login", async (user: User) => {
  return await authService.login(user);
});

// export const logout = createAsyncThunk("auth/logout", async () => {
//   await authService.logout();
// });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(checkEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = action.payload.error;
        state.isError = !action.payload.error;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "";
        state.user = null;
      });
    //   .addCase(logout.fulfilled, (state) => {
    //     state.user = null;
    //   });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
