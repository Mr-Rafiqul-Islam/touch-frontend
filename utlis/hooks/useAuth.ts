import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../api";

// Login mutation
export const useLogin = () => {
  return useMutation<
    { email: string; password: string },
    Error,
    { email: string; password: string }
  >({
    mutationFn: (data: { email: string; password: string }) =>
      api.post("/login", data),
  });
};

// Fetch logged-in user
export const useFetchUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await api.get("/user-info");
      return data;
    },
  });
};
