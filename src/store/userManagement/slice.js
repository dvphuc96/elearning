import { createSlice } from "@reduxjs/toolkit";
import { storage } from "utils";

const initialState = {
  userLogin: storage.get("userLogin") || null,
  accessToken: storage.get("accessToken"),
};

const userManagementSlice = createSlice({
  name: "userManagement",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      storage.save("accessToken", payload?.accessToken);
      storage.save("userLogin", payload);
      state.accessToken = payload.accessToken;
      state.userLogin = payload;
    },
    getUserByAccessToken: (state, { payload }) => {
      storage.save("userLogin", payload);
      state.userLogin = payload;
    },
    logout: (state, { payload }) => {
      console.log(payload);
      state.accessToken = undefined;
      state.userLogin = undefined;
      storage.remove("accessToken");
      storage.remove("userLogin");
    },
  },
});
export const {
  actions: userManagementActions,
  reducer: userManagementReducer,
} = userManagementSlice;
