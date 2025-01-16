// utils/queryClient.ts
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry failed requests once
      refetchOnWindowFocus: false, // Disable automatic refetch on window focus
    },
    mutations: {
      retry: 1, // Retry mutations once on failure
    },
  },
});



export default queryClient;