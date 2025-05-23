"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { formatTime, formatDate } from "@/lib/helper";
import { cn } from "@/lib/utils";
import { BookingList } from "@/types";
import { useMyBooking } from "@/utlis/hooks/useFetchLocations";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TicketPdf } from "./TicketPdf";

const MyBooking = () => {
  const { data, isLoading } = useMyBooking();
  const [bookingList, setBookingList] = useState<BookingList[] | []>(
    data?.data ?? []
  );

  useEffect(() => {
    setBookingList(data?.data?.slice().reverse() ?? []);
  }, [data]);

  const [activeTab, setActiveTab] = useState("all");

  const filterOptions = ["2025", "2024"];

  const initialFilters = Object.fromEntries(
    filterOptions.map((option) => [option, false])
  );
  const [filters, setFilters] = useState(initialFilters);

  const isAnyFilterChecked = Object.values(filters).some((checked) => checked);

  const handleCheckboxChange = (id: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleReset = () => {
    setFilters({
      2025: false,
      2024: false,
    });
  };

  // Filter the booking list based on activeTab and year filters
  const filteredBookings = bookingList.filter((item) => {
    // Filter by active tab "all" or "pending"
    if (activeTab === "pending") {
      // Adjust this condition based on how you define "pending"
      if (item.status !== "pending") {
        return false;
      }
    }

    // If no filters checked, include all
    if (!isAnyFilterChecked) {
      return true;
    }

    // Extract year from trip start_date (assuming ISO format)
    const bookingYear = new Date(item?.trip?.start_date).getFullYear().toString();

    // Include booking if its year is one of the checked filters
    return filters[bookingYear as keyof typeof filters];
  });

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
        <aside className="w-full md:w-1/4 rounded-lg overflow-hidden">
          <Card className="p-4">
            <CardContent>
              <div className="flex justify-center items-center w-full pb-3 border-b-2">
                <h3 className="text-xl font-bold w-full">Filters</h3>
                <Button
                  variant="outline"
                  className="!border-0 !bg-transparent text-primary-color"
                  size="sm"
                  disabled={!isAnyFilterChecked}
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <h5 className="uppercase text-primary-color font-semibold mb-2">
                  Year
                </h5>
                {filterOptions.map((year) => (
                  <p key={year} className="flex gap-2 items-center">
                    <Checkbox
                      id={year}
                      checked={filters[year as keyof typeof filters]}
                      onCheckedChange={() =>
                        handleCheckboxChange(year as keyof typeof filters)
                      }
                      className="data-[state=checked]:bg-primary-color data-[state=checked]:border-primary-color"
                    />
                    <Label htmlFor={year} className="cursor-pointer capitalize">
                      {year.replace(/([A-Z])/g, " \$1").trim()}
                    </Label>
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
        <div className="w-full md:w-3/4">
          <Card className="p-4 rounded-lg">
            <CardContent>
              {activeTab === "all" ? (
                <div>
                  {isLoading ? (
                    <>
                      <Skeleton className="h-20 w-full rounded-lg" />
                      <Skeleton className="h-20 w-full rounded-lg" />
                    </>
                  ) : (
                    <div>
                      {filteredBookings.length > 0 ? (
                        <div>
                          {filteredBookings.map((item) => (
                            <div key={item.id} className="border-b mb-2 ">
                              <h2 className="text-xl text-primary-color font-bold">
                                {item.company?.name}
                              </h2>
                              <div className="flex gap-2 my-2">
                                <span>
                                  {item?.trip?.route?.from_location?.name}
                                </span>{" "}
                                To{" "}
                                <span>
                                  {item?.trip?.route?.to_location?.name},
                                </span>
                              </div>
                              <div className="flex gap-2 my-2">
                                <strong>Departure :</strong>
                                <span>
                                  {formatDate(item?.trip?.start_date)}
                                </span>{" "}
                                |{" "}
                                <span>
                                  {formatTime(item?.trip?.start_time)},
                                </span>
                              </div>
                              <div className="flex gap-2 my-2">
                                <strong>Seat :</strong>
                                <span className="flex gap-2">
                                  {item?.seat_data
                                    ?.toSorted((a, b) => a.seatId - b.seatId)
                                    .map((seat) => (
                                      <p key={seat.seatNo}>{seat.seatNo},</p>
                                    ))}
                                </span>
                              </div>
                              <div className="flex gap-2 my-2">
                                <strong>Total Price :</strong>
                                <span className="flex gap-2">{`${
                                  item?.trip?.ticket_price
                                }BDT x${item?.seat_data?.length} = ${
                                  (Number(item?.trip?.ticket_price) || 0) *
                                  (item?.seat_data?.length || 0)
                                }BDT`}</span>
                              </div>
                              <div className="my-2 text-start md:text-end">
                                <Button
                                  variant="default"
                                  className="bg-primary-color text-white transition-all duration-300 mx-2"
                                  size="sm"
                                >
                                  <PDFDownloadLink
                                    document={<TicketPdf booking={item} />}
                                    fileName={`${item?.passenger_name}-ticket.pdf`}
                                  >
                                    Download Ticket
                                  </PDFDownloadLink>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="all">
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
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="pending">
                  <Image
                    src="/city bus-bro.svg"
                    alt="bus"
                    className="mx-auto my-5 opacity-80"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-2xl font-bold text-center">
                    You don&apos;t have any bookings waiting to happen
                  </h3>
                  <p className="text-center text-gray-600">
                    But it&apos;s never too late to book your next comfortable and
                    easy journey!
                  </p>
                  <Link href="/" className="flex justify-center">
                    <button className="mt-4 bg-primary-color text-xl text-white py-2 px-6 rounded-full hover:shadow-lg hover:shadow-[#E0115F] transition-all duration-300">
                      Search
                    </button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
