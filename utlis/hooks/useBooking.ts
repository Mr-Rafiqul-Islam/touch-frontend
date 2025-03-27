import { useMutation } from "@tanstack/react-query";
import api from "../api";
import { Seats, SeatState } from "@/types";

export const useBooking = () => {
  return useMutation<
    {
      user_id: number;
      passenger_phone: number;
      passenger_name: string;
      seat_data: SeatState[];
      trip_id: number;
      travel_date: string;
    },
    Error,
    {
      user_id: number;
      passenger_phone: number;
      passenger_name: string;
      seat_data: SeatState[];
      trip_id: number;
      travel_date: string;
    }
  >({
    mutationFn: async (data: {
      user_id: number;
      passenger_phone: number;
      passenger_name: string;
      seat_data: SeatState[];
      trip_id: number;
      travel_date: string;
    }) => {
      const response = await api.post("/ticket-booking", data);
      return response.data;
    },
  });
};
