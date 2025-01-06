import React from "react";
const BusCard = ({ bus }: { bus?: any }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-3 lg:gap-4">
      <div className="flex gap-2">
        <img
          src='./hanif.png'
          alt="bus logo"
          className="w-20 h-20 object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-xs md:text-base">Hanif Enterprise</h3>
          <p className="text-gray-400 text-xs md:text-base">Hino, AK1J Super Plus Non AC</p>
          <p className="text-gray-700 text-xs md:text-base">
            <strong>Route:</strong>Dhaka - Cox's Bazar
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <div className="departure-time">
          <h5 className="text-xs md:text-base">06:30 AM</h5>
          <p className="text-xs md:text-base">Wed, 8 Jan</p>
          <p className="text-xs md:text-base">Dhaka</p>
        </div>
        <p className="text-xs md:text-base">Duration: 11h 0m</p>
        <div className="arrival-time">
          <h5 className="text-xs md:text-base">06:30 AM</h5>
          <p className="text-xs md:text-base">Wed, 8 Jan</p>
          <p className="text-xs md:text-base">Dhaka</p>
        </div>
      </div>
      <div className="flex justify-between lg:justify-end lg:gap-4 items-center p-2 bg-[#F1F1F1] lg:bg-transparent">
        <h3 className="lg:text-2xl  font-bold text-primary-color">৳<span>1000</span></h3>
        <div className="flex flex-col items-center gap-1">
            <button className="bg-primary-color hover:bg-primary-color/80 transition-all duration-300 text-white px-4 py-2 rounded-md">
            Book Ticket
            </button>
            <p className="text-gray-800 text-sm"><strong>24</strong> Seat(s) Available</p>
        </div>
      </div>
    </div>
  );
};

export default BusCard;
