import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bookingReducer from "./bookingSlice";
import tripReducer from "./tripSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    booking: bookingReducer,
    trip:tripReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
