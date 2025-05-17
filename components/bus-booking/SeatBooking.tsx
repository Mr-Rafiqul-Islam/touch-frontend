"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiSeatBold } from "react-icons/pi";
import { GiStarFormation } from "react-icons/gi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import SeatLayout from "./SeatLayout";
import { Seats, SeatState, Trip } from "@/types";
import { formatTime } from "@/lib/helper";
import { useDispatch } from "react-redux";
import { setBookingData } from "@/store/bookingSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { setTripData } from "@/store/tripSlice";

function SeatBooking({
  isOpen,
  onClose,
  trip,
}: {
  isOpen: boolean;
  onClose: () => void;
  trip: Trip;
}) {
  const dispatch = useDispatch();
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [bookedSeats, setBookedSeats] = useState<Seats[]>([]);
  const [selectedSeatsInfo, setSelectedSeatsInfo] = useState<Seats[]>([]);
  const [seatData, setSeatData] = useState<SeatState[]>([]);
  const totalSeatsArray = trip?.vehicle?.seats;
  useEffect(() => {
    const initialBookedSeats = totalSeatsArray.filter((seat) => seat.is_booked == 2);
    setBookedSeats(initialBookedSeats);
  }, [trip]);
  const maxSeats = 4;

  const toggleSeat = (seat: number) => {
    if (selectedSeats.length < maxSeats) {
      setSelectedSeats((prev) =>
        prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
      );
      console.log(selectedSeats);
    } else if (selectedSeats.includes(seat)) {
      setSelectedSeats((prev) => prev.filter((s) => s !== seat));
      console.log(selectedSeats);
    }
  };

  useEffect(() => {
    const selectedSeatsData = selectedSeats.map((seatId) => ({
      id: seatId,
    }));
    setSeatData(selectedSeatsData);
  }, [selectedSeats]);
  
 console.log(seatData);
 // Update selectedSeatsInfo whenever selectedSeats changes
  useEffect(() => {
    const selectedSeatsDetails = totalSeatsArray.filter((seat) =>
      selectedSeats.includes(seat.id)
    );
    setSelectedSeatsInfo(selectedSeatsDetails);
  }, [selectedSeats, totalSeatsArray]);
  console.log(selectedSeatsInfo, "selectedSeatsInfo");
 
  const router = useRouter();
  const handleContinue = (trip: Trip) => {
    const getToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("user_id");
    const tripInfo={
        company: trip?.company?.name,
        price: trip?.ticket_price,
        from: trip?.route?.from_location.name,
        to: trip?.route?.to_location.name,
        start_date: trip?.start_date,
        start_time: trip?.start_time,
        end_time: trip?.end_time,
        end_date: trip?.end_date,
        vehicle: trip?.vehicle?.name,
        selected_seats: selectedSeatsInfo,
      }
    if (getToken) {
      dispatch(
        setBookingData({
          user_id: userId ? parseInt(userId, 10) : null,
          trip_id: trip.id,
          seat_data: seatData,
          travel_date: trip.start_date,
        })
      );
      dispatch(setTripData(tripInfo))
      router.push("/booking");
    } else {
      toast.error("Please login to continue", {
        onClose: () => {
          router.push("/login");
        },
      });
    }
  }
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <SheetContent className="w-full max-h-screen overflow-y-scroll">
        <Tabs defaultValue="seat">
          <SheetHeader>
            <SheetTitle className="font-gesit uppercase text-xl mb-2">
              Select Seats
            </SheetTitle>
            <SheetDescription>
              Maximum 4 seats can be selected. {selectedSeats.length} ticket(s)
              selected.
            </SheetDescription>
          </SheetHeader>
          <TabsList className="w-full justify-around bg-primary-color">
            <TabsTrigger
              value="seat"
              className="font-gesit text-xs md:text-base text-white"
            >
              <PiSeatBold className="me-1" size="16" />
              Seat
            </TabsTrigger>
            <TabsTrigger
              value="amneties"
              className="font-gesit text-xs md:text-base text-white"
            >
              <GiStarFormation className="me-1" size="16" />
              Amneties
            </TabsTrigger>
            <TabsTrigger
              value="policies"
              className="font-gesit text-xs md:text-base text-white"
            >
              <IoShieldCheckmarkOutline className="me-1" size="16" />
              Policies
            </TabsTrigger>
          </TabsList>
          <TabsContent value="seat" className="h-full">
            <div className="h-full">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">{trip?.vehicle?.name}</h2>
                  <p className="text-sm text-gray-600">
                    {trip?.vehicle?.type?.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Coach No. #{trip?.vehicle?.vehicle_no}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Departure</p>
                    <p className="text-lg font-bold">
                      {trip?.route.from_location.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {trip?.start_time ? formatTime(trip.start_time) : "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Arrival</p>
                    <p className="text-lg font-bold">
                      {trip?.route.to_location.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {trip?.end_time ? formatTime(trip.end_time) : "N/A"}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Trip time may delay due to traffic
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Maximum 4 seats can be selected.
                </p>
                <div className="flex justify-around my-4">
                  <ul className="flex items-center">
                    <li className="w-[15px] h-[15px] mr-[5px] rounded-[4px] available-example bg-[#d7d7d7] border border-[#d7d7d7]"></li>
                    <li className="text-[12px] font-normal leading-[15px] text-[#202020]">
                      Available
                    </li>
                  </ul>
                  <ul className="flex items-center">
                    <li className="w-[15px] h-[15px] mr-[5px] rounded-[4px] sold-example bg-red-500  opacity-50 border border-[#ef4444]"></li>
                    <li className="text-[12px] font-normal leading-[15px] text-[#202020]">
                      Sold
                    </li>
                  </ul>
                  <ul className="flex items-center">
                    <li className="w-[15px] h-[15px] mr-[5px] rounded-[4px] selected-example bg-primary-color border border-primary-color"></li>
                    <li className="text-[12px] font-normal leading-[15px] text-[#202020]">
                      Selected
                    </li>
                  </ul>
                </div>
                {/* Seat Layout part start  */}
                <SeatLayout
                  seats={trip?.vehicle.seats}
                  vehicle_category={trip?.vehicle.category}
                  bookedSeats={bookedSeats}
                  selectedSeats={selectedSeats}
                  toggleSeat={toggleSeat}
                  maxSeats={maxSeats}
                />
                {/* Seat Layout part end  */}
              </div>
              <div className="mt-4">
                <p className="text-lg font-bold">
                  Total: ৳{trip?.ticket_price}
                </p>
                <button className="bg-primary-color text-white p-3 w-full rounded mt-2" onClick={() => handleContinue(trip)}>
                  Continue
                </button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="amneties">
            Check Your Amnities here.
            <ol className="mt-2 list-decimal">{trip?.vehicle?.amenities?.map((item) => (
              <li key={item.id} className="py-2">{item.name}</li>
            ))}</ol>
          </TabsContent>
          <TabsContent value="policies">Policies are given here.</TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}

export default SeatBooking;
