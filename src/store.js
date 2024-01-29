import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/loginReducer";

const store = configureStore({
    reducer: {
        userInfo: loginReducer,
      // Add other reducers if needed
    },
  });

export default store;