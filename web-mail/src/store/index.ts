import { configureStore } from "@reduxjs/toolkit";
import utilsSlice from "./utilsSlice";

export const store = configureStore({
  reducer: {
    utils: utilsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
