import { Seats } from "@/types";
import React from "react";


interface SeatLayoutProps {
  seats: Seats[];
  vehicle_category: string;
  bookedSeats: Seats[];
  selectedSeats: number[];
  toggleSeat: (seat: number) => void;
  maxSeats: number;
}

const  SeatLayout: React.FC<SeatLayoutProps> = ({
  seats,
  vehicle_category,
  bookedSeats,
  selectedSeats,
  toggleSeat,
  maxSeats,
}) => {
  return (
    <>
      {vehicle_category == "0" ? (
        <div className="px-4">
          <div className="grid grid-cols-2 gap-10 mt-2">
            <div className="grid grid-cols-2 gap-2">
              {seats
                .filter(
                  (seat) =>
                    seat.seat_no.includes("1") || seat.seat_no.includes("2")
                )
                .map((seat) => (
                  <button
                    key={seat.id}
                    disabled={bookedSeats.some(s => s.seat_no === seat.seat_no)}
                    onClick={() => toggleSeat(seat.id)}
                    className={`p-2 rounded ${
                      bookedSeats.some(s => s.seat_no === seat.seat_no)
                        ? "bg-red-500 text-white opacity-50 cursor-not-allowed"
                        : selectedSeats.includes(seat.id) &&
                          selectedSeats.length <= maxSeats
                        ? "bg-primary-color text-white"
                        : "bg-gray-300 text-gray-600"
                    } ${
                      selectedSeats.length >= maxSeats &&
                      !selectedSeats.includes(seat.id)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {seat.seat_no}
                  </button>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {seats
                .filter(
                  (seat) =>
                    seat.seat_no.includes("3") || seat.seat_no.includes("4")
                )
                .map((seat, i) => (
                  <button
                    key={seat.id}
                    disabled={bookedSeats.some(s => s.seat_no === seat.seat_no)}
                    onClick={() => toggleSeat(seat.id)}
                    className={`p-2 rounded ${
                      bookedSeats.some(s => s.seat_no === seat.seat_no)
                        ? "bg-red-500 text-white opacity-50 cursor-not-allowed"
                        : selectedSeats.includes(seat.id) &&
                          selectedSeats.length <= maxSeats
                        ? "bg-primary-color text-white"
                        : "bg-gray-300 text-gray-600"
                    } ${
                      selectedSeats.length >= maxSeats &&
                      !selectedSeats.includes(seat.id)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {seat.seat_no}
                  </button>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4">
          <div className="grid grid-cols-2 gap-10 mt-2">
            {/* Left Column - Seats ending with 1 */}
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-2">
                {seats
                  .filter((seat) => seat.seat_no.includes("1"))
                  .map((seat) => (
                    <button
                      key={seat.id}
                      disabled={bookedSeats.some(s => s.seat_no === seat.seat_no)}
                      onClick={() => toggleSeat(seat.id)}
                      className={`w-full p-2 rounded ${
                        bookedSeats.some(s => s.seat_no === seat.seat_no)
                          ? "bg-red-500 text-white opacity-50 cursor-not-allowed"
                          : selectedSeats.includes(seat.id) &&
                            selectedSeats.length <= maxSeats
                          ? "bg-primary-color text-white"
                          : "bg-gray-300 text-gray-600"
                      } ${
                        selectedSeats.length >= maxSeats &&
                        !selectedSeats.includes(seat.id)
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      {seat.seat_no}
                    </button>
                  ))}
              </div>
              <div className="px-4"></div>
            </div>
            {/* Right Column - Seats ending with 2 or 3 */}
            <div className="grid grid-cols-2 gap-2">
              {seats
                .filter(
                  (seat) =>
                    seat.seat_no.includes("2") || seat.seat_no.includes("3")
                )
                .map((seat) => (
                  <button
                    key={seat.id}
                    disabled={bookedSeats.some(s => s.seat_no === seat.seat_no)}
                    onClick={() => toggleSeat(seat.id)}
                    className={`w-full p-2 rounded ${
                      bookedSeats.some(s => s.seat_no === seat.seat_no)
                        ? "bg-red-500 text-white opacity-50 cursor-not-allowed"
                        : selectedSeats.includes(seat.id) &&
                          selectedSeats.length <= maxSeats
                        ? "bg-primary-color text-white"
                        : "bg-gray-300 text-gray-600"
                    } ${
                      selectedSeats.length >= maxSeats &&
                      !selectedSeats.includes(seat.id)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {seat.seat_no}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SeatLayout;
