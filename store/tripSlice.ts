import { Seats } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TripState {
  company: string;
  price: string;
  from: string;
  to: string;
  start_date: string;
  start_time: string;
  end_time: string;
  end_date: string;
  vehicle: string;
  selected_seats:Seats[];
}

const initialState: TripState = {
  company: "",
  price: "",
  from: "",
  to: "",
  start_date: "",
  start_time: "",
  end_time: "",
  end_date: "",
  vehicle: "",
  selected_seats: [],
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setTripData: (state, action: PayloadAction<TripState>) => {
      return { ...state, ...action.payload };
    },
    resetTrip: () => initialState,
  },
});

export const { setTripData, resetTrip } = tripSlice.actions;
export default tripSlice.reducer;
