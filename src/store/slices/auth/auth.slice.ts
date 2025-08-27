import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserTypes, AuthResponse, AuthError } from "./auth.types";
import { signupUser } from "./auth.thunk";

export interface AuthState {
  user: UserTypes | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = { user: null, isAuthenticated: false };

export const signupUserThunk = createAsyncThunk<
  AuthResponse,
  UserTypes,
  { rejectValue: AuthError }
>("auth/signup", signupUser);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // signup: (state, action: PayloadAction<UserTypes>) => {
    //   state.user = action.payload;
    //   state.isAuthenticated = true;
    // },
    // login: (state, action: PayloadAction<UserTypes>) => {
    //   const { email, password } = action.payload;
    //   if (email === state.user?.email && password === state.user?.password) {
    //     state.isAuthenticated = true;
    //   } else {
    //     state.isAuthenticated = false;
    //   }
    // },
    // logout: (state) => {
    //   state.isAuthenticated = false;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUserThunk.pending, (state) => {
        state.isAuthenticated = false;
      })
      .addCase(signupUserThunk.fulfilled, (state, action) => {
        debugger;
        state.isAuthenticated = true;
      })
      .addCase(signupUserThunk.rejected, (state) => {
        state.isAuthenticated = false;
      });
  },
});

// export const { signup, logout } = authSlice.actions;
export default authSlice.reducer;
