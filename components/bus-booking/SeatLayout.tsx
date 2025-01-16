import React from "react";

interface SeatLayoutProps {
  seats: string[];
  bookedSeats: string[];
  selectedSeats: string[];
  toggleSeat: (seat: string) => void;
  maxSeats: number;
}

const SeatLayout: React.FC<SeatLayoutProps> = ({
  seats,
  bookedSeats,
  selectedSeats,
  toggleSeat,
  maxSeats,
}) => {
  return (
    <div className="grid grid-cols-2 gap-10 mt-2">
      <div className="grid grid-cols-2 gap-2">
        {seats
          .filter((seat) => seat.includes("1") || seat.includes("2"))
          .map((seat, i) => (
            <button
              key={i}
              disabled={bookedSeats.includes(seat)}
              onClick={() => toggleSeat(seat)}
              className={`p-2 rounded ${
                bookedSeats.includes(seat)
                  ? "bg-red-500 text-white opacity-50 cursor-not-allowed"
                  : selectedSeats.includes(seat) && selectedSeats.length <= maxSeats
                  ? "bg-primary-color text-white"
                  : "bg-gray-300 text-gray-600"
              } ${
                selectedSeats.length >= maxSeats && !selectedSeats.includes(seat)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              {seat}
            </button>
          ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {seats
          .filter((seat) => seat.includes("3") || seat.includes("4"))
          .map((seat, i) => (
            <button
              key={i}
              disabled={bookedSeats.includes(seat)}
              onClick={() => toggleSeat(seat)}
              className={`p-2 rounded ${
                bookedSeats.includes(seat)
                  ? "bg-red-500 text-white opacity-50 cursor-not-allowed"
                  : selectedSeats.includes(seat) && selectedSeats.length <= maxSeats
                  ? "bg-primary-color text-white"
                  : "bg-gray-300 text-gray-600"
              } ${
                selectedSeats.length >= maxSeats && !selectedSeats.includes(seat)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              {seat}
            </button>
          ))}
      </div>
    </div>
  );
};

export default SeatLayout;
