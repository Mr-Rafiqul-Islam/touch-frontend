import { useMutation } from "@tanstack/react-query";
import api from "../api";

export const useForgetPassword = () => {
  return useMutation<{ email: string }, Error, { email: string }>({
    mutationFn: async (data: { email: string }) => {
      const response = await api.post("/forgot-password", data);
      return response.data;
    },
  });
};
export const useResetPassword = () => {
  return useMutation<
    { email: string; reset_code: number; password: string },
    Error,
    { email: string; reset_code: number; password: string }
  >({
    mutationFn: async (data: {
      email: string;
      reset_code: number;
      password: string;
    }) => {
      const response = await api.post("/reset-password", data);
      return response.data;
    },
  });
};
