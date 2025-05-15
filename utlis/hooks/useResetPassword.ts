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
    { email: string; resetCode: string; password: string },
    Error,
    { email: string; resetCode: string; password: string }
  >({
    mutationFn: async (data: {
      email: string;
      resetCode: string;
      password: string;
    }) => {
      const response = await api.post("/reset-password", data);
      return response.data;
    },
  });
};
export const useUpdatePassword = () => {
  return useMutation<
    {
      current_password: string;
      new_password: string;
      new_password_confirmation: string;
    },
    Error,
    {
      current_password: string;
      new_password: string;
      new_password_confirmation: string;
    }
  >({
    mutationFn: async (data: {
      current_password: string;
      new_password: string;
      new_password_confirmation: string;
    }) => {
      const response = await api.post("/update-password", data);
      return response.data;
    },
  });
};
export const useUpdateProfile = () => {
  return useMutation<
    { name: string; email: string; phone: string },
    Error,
    { name: string; email: string; phone: string }
  >({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
    }) => {
      const response = await api.post("/update-info", data);
      return response.data;
    },
  });
};
