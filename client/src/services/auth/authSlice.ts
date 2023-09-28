import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

interface User {
  email: string;
  password?: string;
  firstName?: string;
}

interface stateInterrface {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message?: string;
}

const initialState: stateInterrface = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user

export const register = createAsyncThunk<User, User, { rejectValue: string }>(
  "auth/register",
  async (user: User) => {
    return authService.register(user);
  }
);

export const checkEmail = createAsyncThunk(
  "auth/checkEmail",
  async (email: string) => {
    return await authService.checkEmail(email);
  }
);

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (data: { user: User; keepLogIn: boolean }) => {
    return await authService.login(data.user, data.keepLogIn);
  }
);

export const getUser = createAsyncThunk("auth/getUser", async () => {
  return await authService.getCurrentUser();
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

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
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
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
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "";
        state.user = null;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
