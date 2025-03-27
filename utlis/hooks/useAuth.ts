import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../api";
import queryClient from "../queryClient";

// Set token and email in local storage
const setAuthData = (token: string, email: string) => {
  localStorage.setItem("authToken", token);
  localStorage.setItem("registeredEmail", email);
};
const setRegisteredEmail = (email: string) => {
  localStorage.setItem("registeredEmail", email);
};
// Get token from local storage
export const getToken = () => {
  return localStorage.getItem("authToken");
};

// Get registered email from local storage
const getRegisteredEmail = () => {
  return localStorage.getItem("registeredEmail");
};

// Remove token and email from local storage
const removeAuthData = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("registeredEmail");
  localStorage.removeItem("user_id");
};

// Sign up mutation
export const useSignUp = () => {
  return useMutation<
    { name: string; email: string; phone: string; password: string },
    Error,
    { name: string; email: string; phone: string; password: string }
  >({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      password: string;
    }) => {
      const response = await api.post("/user-registration", data);
      const { email } = data;
      setRegisteredEmail(email);
      return response.data;
    },
  });
};

// Verify mutation
export const useVerify = () => {
  return useMutation<
    { verification_code: string },
    Error,
    { verification_code: string }
  >({
    mutationFn: async (data: { verification_code: string }) => {
      const response = await api.post("/verify", data);
      return response.data;
    },
  });
};

// Resend verification code mutation
export const useResend = () => {
  return useMutation<void, Error, void>({
    mutationFn: async () => {
      const email = getRegisteredEmail();
      if (!email) {
        throw new Error("No registered email found");
      }
      const response = await api.post("/resend-verification-code", { email });
      return response.data;
    },
  });
};

// Login mutation
export const useLogin = () => {
  return useMutation<
    { email: string; password: string },
    Error,
    { email: string; password: string }
  >({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await api.post("/login", data);
      const { token, email } = response.data;
      setAuthData(token, email);
      return response.data;
    },
  });
};

// Fetch logged-in user
export const useFetchUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const token = getToken();
      if (!token) {
        throw new Error("No token found");
      }
      const response = await api.get("/user-info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem("user_id", response.data.user.id);
      return response.data;
    },
  });
};

// Logout mutation
export const useLogout = () => {
  return useMutation({
    mutationFn: async () => {
      // Remove token and email upon logout
      removeAuthData();
      // Invalidate the user query and remove the data from the cache
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
};
