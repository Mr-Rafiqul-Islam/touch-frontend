import {  SeatState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";




interface bookingState {
  user_id: number | null;
  trip_id: number | null;
  seat_data: SeatState[];
  travel_date: string | null;
}

const initialState: bookingState = {
  user_id: null,
  trip_id: null,
  seat_data: [],
  travel_date: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingData: (state, action: PayloadAction<Partial<bookingState>>) => {
      return { ...state, ...action.payload };
    },
    resetBooking: () => initialState,
  },
});

export const { setBookingData, resetBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
