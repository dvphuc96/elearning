import { combineReducers } from "@reduxjs/toolkit";
import { userManagementReducer } from "./userManagement";

export const rootReducer = combineReducers({
  userManagement: userManagementReducer,
});
