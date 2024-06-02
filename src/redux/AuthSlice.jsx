import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedin: false, isAdmin: false };
const User = JSON.parse(localStorage.getItem("User"));
if (User) {
  initialState.isLoggedin = true;
  if (User.user.email == "vaibhavdhamanage12@gmail.com") {
    initialState.isAdmin = true;
  }
}
const AuthSlice = createSlice({
  name: "AuthUser",
  initialState,
  reducers: {
    Login(state, action) {
      state.isLoggedin = true;
      if (action.payload === "vaibhavdhamanage12@gmail.com") {
        state.isAdmin = true;
      }
    },
    Logout(state, action) {
      state.isLoggedin = false;
      state.isAdmin = false;
    },
  },
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice.reducer;
