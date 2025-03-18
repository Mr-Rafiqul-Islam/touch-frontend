import { useQuery } from "@tanstack/react-query";
import api from "../api";

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