import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { getToken } from "./useAuth";

// Fetch location bus data
export const useFetchLocations = () => {
  return useQuery({
    queryKey: ["location-bus"],
    queryFn: async () => {
      const response = await api.get("/location-bus");
      return response.data;
    },
  });
};

export const useMyBooking = () => {
  return useQuery({
    queryKey: ["ticket-booking-list"],
    queryFn: async () => {
      const token = getToken();
            if (!token) {
              throw new Error("No token found");
            }
      const response = await api.get("/ticket-booking-list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};