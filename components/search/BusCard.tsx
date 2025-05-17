"use client";
import React, { useState } from "react";
import busImg from "@/public/hanif.png";
import Image from "next/image";
import SeatBooking from "@/components/bus-booking/SeatBooking";
import { Trip } from "@/types";
import { formatDate, formatTime, getDuration } from "@/lib/helper";

const BusCard = ({ trip }: { trip: Trip }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  console.log(trip);
  
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-3 lg:gap-4">
      <div className="flex gap-2">
        <Image
          src={
            process.env.NEXT_PUBLIC_API_URL && trip?.company?.site_setting?.logo
              ? `${process.env.NEXT_PUBLIC_API_URL}/${trip.company.site_setting.logo}`
              : busImg
          }
          // `${process.env.NEXT_PUBLIC_API_URL}/${trip?.company?.site_setting?.logo}`
          // trip?.company?.site_setting?.logo ? trip?.company?.site_setting?.logo 
          className="w-20 h-8 object-fit"
          width={100}
          height={10}
          alt="operator logo"
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-xs md:text-base">
            {trip?.vehicle?.name}
          </h3>
          <p className="text-gray-400 text-xs md:text-base">
          {trip?.vehicle?.category == "0" ? "Economy Class" : trip?.vehicle?.category == "1" ? "Business Class" : "Sleeping Coach"}, <span>{trip?.vehicle?.type?.name}</span>
          </p>
          <p className="text-gray-700 text-xs md:text-base">
            <strong>Route: </strong>
            {trip?.route?.from_location?.name} -{" "}
            {trip?.route?.to_location?.name}
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <div className="departure-time">
          <h5 className="text-xs md:text-base">
            {trip?.start_time
              ? formatTime(trip.start_time)
              : "N/A"}
          </h5>
          <p className="text-xs md:text-base">
            {trip?.start_date
              ? formatDate(trip.start_date) 
              : "N/A"}
          </p>
          <p className="text-xs md:text-base">
            {trip?.route.from_location.name}
          </p>
        </div>
        <p className="text-xs md:text-base">
          Duration:{" "}
          {trip?.start_time && trip?.end_time
            ? getDuration(trip.start_time, trip.end_time)
            : "N/A"}
        </p>
        <div className="arrival-time">
          <h5 className="text-xs md:text-base">{trip?.end_time
              ? formatTime(trip.end_time)
              : "N/A"}</h5>
          <p className="text-xs md:text-base">{trip?.end_date
              ? formatDate(trip.end_date)
              : "N/A"}</p>
          <p className="text-xs md:text-base">{trip?.route.to_location.name}</p>
        </div>
      </div>
      <div className="flex justify-between lg:justify-end lg:gap-4 items-center p-2 bg-[#F1F1F1] lg:bg-transparent">
        <h3 className="lg:text-2xl  font-bold text-primary-color">
          ৳<span>{trip?.ticket_price}</span>
        </h3>
        <div className="flex flex-col items-center gap-1">
          <a
            onClick={() => setIsBookingOpen(true)}
            className="inline-block cursor-pointer bg-primary-color hover:bg-primary-color/80 transition-all duration-300 text-white px-4 py-2 rounded-md text-center"
          >
            Book Ticket
          </a>
          <p className="text-gray-800 text-sm text-center">
            <strong>24</strong> Seat(s) Available
          </p>
        </div>
      </div>
      <SeatBooking
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        trip = {trip}
      />
    </div>
  );
};

export default BusCard;
