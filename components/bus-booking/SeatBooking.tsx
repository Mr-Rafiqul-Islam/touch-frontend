"use client";
import React, { useState } from "react";
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

const seats = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2","C3", "C4", "D1", "D2", "D3", "D4", "E1", "E2", "E3", "E4", "F1", "F2", "F3", "F4", "G1", "G2", "G3", "G4", "H1", "H2", "H3", "H4","I1","I2","I3","I4"];
function SeatBooking({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [bookedSeats, setBookedSeats] = useState<string[]>(["A1", "B3"]); // add booked seats here
  const maxSeats = 4;

  const toggleSeat = (seat: string) => {
    if (selectedSeats.length < maxSeats) {
      setSelectedSeats((prev) =>
        prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
      );
    } else if (selectedSeats.includes(seat)) {
      setSelectedSeats((prev) => prev.filter((s) => s !== seat));
    }
  };

  return (
    
      <Sheet open={isOpen} onOpenChange={onClose} >
        <SheetContent className="w-full max-h-screen overflow-y-scroll">
          <Tabs defaultValue="seat">
                <SheetHeader>
                  <SheetTitle className="font-gesit uppercase text-xl mb-2">
                    Select Seats
                  </SheetTitle>
                  <SheetDescription>
            Maximum 4 seats can be selected. {selectedSeats.length} ticket(s) selected.
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
                        <h2 className="text-xl font-bold">Hanif Enterprise</h2>
                        <p className="text-sm text-gray-600">
                          Hino, AK1J Super Plus Non AC
                        </p>
                        <p className="text-sm text-gray-600">Coach No. #800</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Departure</p>
                          <p className="text-lg font-bold">Dhaka</p>
                          <p className="text-sm text-gray-600">06:30 AM</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Arrival</p>
                          <p className="text-lg font-bold">Cox's Bazar</p>
                          <p className="text-sm text-gray-600">02:01 PM</p>
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
                      <div className="grid grid-cols-4 gap-2 mt-2">
                      {seats.map((seat, i) => (
                        <button
                          key={i}
                          onClick={() => toggleSeat(seat)}
                          className={`p-2 rounded ${
                            bookedSeats.includes(seat) ? 'bg-red-500 text-white opacity-50 cursor-not-allowed' :
                            selectedSeats.includes(seat) && selectedSeats.length <= maxSeats
                              ? "bg-primary-color text-white"
                              : "bg-gray-300 text-gray-600"
                          } ${selectedSeats.length >= maxSeats && !selectedSeats.includes(seat) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {seat}
                        </button>
                      ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-lg font-bold">Total: ৳2000</p>
                      <button className="bg-primary-color text-white p-3 w-full rounded mt-2">
                        Continue
                      </button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="amneties">
                  Change your password here.
                </TabsContent>
                <TabsContent value="policies">
                  Policies are given here.
                </TabsContent>
              </Tabs>
        </SheetContent>
      </Sheet>
    
  );
}

export default SeatBooking;
