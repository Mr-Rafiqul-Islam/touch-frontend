"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useBooking } from "@/utlis/hooks/useBooking";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { formatDate, formatTime } from "@/lib/helper";

type BookingFormData = {
  passenger_phone: number;
  passenger_name: string;
};

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>();
  const [gender, setGender] = useState<"male" | "female">("male");
  const bookingData = useSelector((state: RootState) => state.booking);
  const tripData = useSelector((state: RootState) => state.trip);
  console.log(bookingData, "bookingData");
  console.log(tripData, "tripData");
  const { mutate } = useBooking();

  const onSubmit = (data: BookingFormData) => {
    console.log("Form Submitted:", data);
    const bookingPayload = {
      ...data,
      user_id: bookingData.user_id ?? 0, // Provide a default value or handle null
      trip_id: bookingData.trip_id ?? 0, // Provide a default value or handle null
      seat_data: bookingData.seat_data,
      travel_date: bookingData.travel_date ?? "", // Provide a default value or handle null
    };
    console.log(bookingPayload);
    mutate(bookingPayload, {
      onSuccess: () => {
        // Handle success, e.g., show a success message
        console.log("Booking successful!");
        toast("Booking successful!👌🎉", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce, // Redirect to the verify page on success
          onClose: () => (window.location.href = "/my-booking"),
        });
      },
      onError: (error: any) => {
        // Handle error, e.g., show an error message
        console.log("Booking failed!");
        toast(error.response.data.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Passenger Details */}
      <div className="lg:col-span-2">
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
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Passenger Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="passenger_name">Passenger Name</Label>
                  <Input
                    id="passenger_name"
                    {...register("passenger_name", { required: true })}
                  />
                  {errors.passenger_name && (
                    <p className="text-red-500">First name is required.</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="mobile">Mobile No.</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    {...register("passenger_phone", { required: true })}
                  />
                  {errors.passenger_phone && (
                    <p className="text-red-500">Mobile number is required.</p>
                  )}
                </div>
              </div>
              <div>
                <Label>Gender</Label>
                <div className="flex space-x-4 mt-2">
                  <Button
                    type="button"
                    variant={gender === "male" ? "default" : "outline"}
                    onClick={() => setGender("male")}
                  >
                    Male
                  </Button>
                  <Button
                    type="button"
                    variant={gender === "female" ? "default" : "outline"}
                    onClick={() => setGender("female")}
                  >
                    Female
                  </Button>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary-color hover:bg-primary-color/90"
              >
                Proceed to Payment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Ticket Info */}
      <div className="lg:col-span-1 w-full">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-center lg:text-start">Trip Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="font-semibold text-xl lg:text-start text-center">{tripData?.vehicle}</p>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-primary-color">{`${
                  tripData?.price
                } x${bookingData?.seat_data.length} = ${
                  tripData?.price * bookingData?.seat_data.length
                }`}</p>
                {/* <p>
                  Seat: <span className="font-semibold">A2</span>
                </p> */}
                
                  <div className="flex gap-2 my-2">
                                <strong>Seat :</strong>
                                <span className="flex gap-2">
                                  {tripData?.selected_seats
                                    ?.toSorted((a, b) => a.id - b.id)
                                    .map((seat) => (
                                      <p key={seat.seat_no}>{seat.seat_no},</p>
                                    ))}
                                </span>
                              </div>
               
              </div>
              <div className="grid grid-cols-6 gap-2 place-items-center">
                <div className="col-span-2 text-sm">
                  Departure:{" "}
                  <p className="font-semibold">{tripData?.from}</p>
                  <p className="font-semibold">{formatDate(tripData.start_date)}</p>
                  <p className="font-semibold">{formatTime(tripData.start_time)}</p>
                </div>
                <p className="col-span-2 justify-center flex text-gray-500">
                  ----------------
                </p>
                <div className="col-span-2 text-sm">
                  Arrival:{" "}
                  <p className="font-semibold">{tripData?.to}</p>
                  <p className="font-semibold">{formatDate(tripData.end_date)}</p>
                  <p className="font-semibold">{formatTime(tripData.end_time)}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
