import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import moviesReducer from "../features/moviesSlice";

const store = configureStore({
  reducer: {
    authReducer,
    moviesReducer,
  },
});
export default store;
