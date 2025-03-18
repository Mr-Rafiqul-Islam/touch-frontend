"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SearchProvider } from "@/utlis/provider/SearchProvider";
import queryClient from "@/utlis/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <Header />
          {children}
          <Footer />
        </SearchProvider>
        {/* React Query Devtools for debugging */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
