import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/loginReducer";

const store = configureStore({
    reducer: {
      user: loginReducer,
      // Add other reducers if needed
    },
  });

export default store;