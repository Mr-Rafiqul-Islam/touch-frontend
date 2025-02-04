"use client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyBooking = () => {
  const [activeTab, setActiveTab] = React.useState("all");
  return (
    <div className="container py-10">
      <h1 className="text-center text-primary-color text-4xl font-bold">
        My Booking
      </h1>
      <div className="flex justify-center gap-4 mt-5">
        <button
          className={cn(
            "px-4 py-2 rounded-full border border-primary-color text-sm text-primary-color font-bold",
            activeTab === "all" ? "bg-primary-color text-white" : ""
          )}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={cn(
            "px-4 py-2 rounded-full border border-primary-color text-sm text-primary-color font-bold",
            activeTab === "pending" ? "bg-primary-color text-white" : ""
          )}
          onClick={() => setActiveTab("pending")}
        >
          Pending
        </button>
      </div>
      <hr className="my-4 h-[2px] bg-primary-color" />

      <div className="flex flex-col md:flex-row gap-4">
        {/* side bar */}
        <aside className="w-full md:w-1/4 rounded-lg overflow-hidden">
          <Card className="p-4">
            <CardContent>
              <h3 className="text-base font-bold">Filters</h3>
            </CardContent>
          </Card>
        </aside>
        <div className="w-full md:w-3/4">
          <Card className="p-4 rounded-lg">
            <CardContent>
              {
                activeTab === "all" ? (<div className="all">
                <Image
                  src="/city bus-bro.svg"
                  alt="bus"
                  className="mx-auto my-5 opacity-80"
                  width={300}
                  height={300}
                />
                <h3 className="text-2xl font-bold text-center">
                  No Bookings Available
                </h3>
                <p className="text-center text-gray-600">
                  Begin planning your next journey with ease today
                </p>
                <Link href="/" className="flex justify-center">
                  <button className="mt-4 bg-primary-color text-xl text-white py-2 px-6 rounded-full hover:shadow-lg hover:shadow-[#E0115F] transition-all duration-300">
                    Search
                  </button>
                </Link>
              </div>)
              :(<div className="pending">
                <Image
                  src="/city bus-bro.svg"
                  alt="bus"
                  className="mx-auto my-5 opacity-80"
                  width={300}
                  height={300}
                />
                <h3 className="text-2xl font-bold text-center">
                  You don't have any bookings waiting to happen
                </h3>
                <p className="text-center text-gray-600">
                  But it's never too late to book your next comfortable and easy journey!
                </p>
                <Link href="/" className="flex justify-center">
                  <button className="mt-4 bg-primary-color text-xl text-white py-2 px-6 rounded-full hover:shadow-lg hover:shadow-[#E0115F] transition-all duration-300">
                    Search
                  </button>
                </Link>
              </div>)}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
