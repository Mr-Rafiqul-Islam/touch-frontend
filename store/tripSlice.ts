import { Seats, SeatState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";




interface TripState {
  user_id: number | null;
  trip_id: number | null;
  seat_data: SeatState[];
  travel_date: string | null;
}

const initialState: TripState = {
  user_id: null,
  trip_id: null,
  seat_data: [],
  travel_date: null,
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setTripData: (state, action: PayloadAction<Partial<TripState>>) => {
      return { ...state, ...action.payload };
    },
    resetTrip: () => initialState,
  },
});

export const { setTripData, resetTrip } = tripSlice.actions;
export default tripSlice.reducer;
