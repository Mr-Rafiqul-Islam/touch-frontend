import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api";


// Sign up mutation
export const useSignUp = () => {
  return useMutation<
    { name: string; email: string; phone: string; password: string },
    Error,
    { name: string; email: string; phone: string; password: string }
  >({
    mutationFn: (data: { name: string; email: string; phone: string; password: string }) =>
      api.post("/user-registration", data),
  });
};
// Verify  mutation
export const useVerify = () => {
  return useMutation<
    { verification_code: string; },
    Error,
    { verification_code: string; }
  >({
    mutationFn: (data: { verification_code: string; }) =>
      api.post("/verify", data),
  });
};

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

// Logout mutation
export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await api.post("/logout");
      // Invalidate the user query and remove the data from the cache
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
};