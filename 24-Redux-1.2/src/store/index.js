import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counter.js";
import authReducer from "../store/auth.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});


export default store;
