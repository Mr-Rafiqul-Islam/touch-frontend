"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import queryClient from "@/utlis/queryClient";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
        <Footer />

        {/* React Query Devtools for debugging */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
