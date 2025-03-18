import { useMutation } from "@tanstack/react-query";
import api from "../api";

export const useSearchTrip = () => {
    return useMutation<
      { from_location_id: string; to_location_id: string; date: string },
      Error,
      { from_location_id: string; to_location_id: string; date: string }
    >({
      mutationFn: async (data: {
        from_location_id: string;
        to_location_id: string;
        date: string;
      }) => {
        const response = await api.post("/search-bus", data);
        return response.data;
      },
    });
  };