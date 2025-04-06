import { useQuery } from "@tanstack/react-query"; 
import api from "../api";

export const useSearchTrip = ({
  from_location_id,
  to_location_id,
  date,
}: {
  from_location_id: string;
  to_location_id: string;
  date: string;
}) => {
  return useQuery({
    queryKey: ['searchTrip', from_location_id, to_location_id, date],
    queryFn: async () => {
      const response = await api.get("/search-bus", {
        params: {
          from_location_id,
          to_location_id,
          date,
        },
      });
      return response.data;
    },
    enabled: !!from_location_id && !!to_location_id && !!date, // prevent auto-fire
  });
};
