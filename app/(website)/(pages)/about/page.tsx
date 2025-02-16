import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <>
      <div className="container">
        <div className="sm:flex items-center max-w-screen-xl">
          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
              <Image src="/about.svg" alt="About" className=" !aspect-auto" width={100000} height={100000} />
            </div>
          </div>
          <div className="sm:w-1/2 p-5">
            <div className="text">
              <span className="text-gray-500 border-b-2 border-primary-color uppercase">
                About us
              </span>
              <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                About <span className="text-primary-color">Our Company</span>
              </h2>
              <p className="text-gray-700">
                A ticket booking site is a platform that allows users to book
                tickets for various events such as movies, concerts, plays,
                sports events, and more. The site will provide users with a
                user-friendly interface to search and book tickets online. The
                site will also provide users with a variety of payment options,
                including credit cards, PayPal, and bank transfers. The site
                will also provide users with the ability to view their booking
                history and cancel or modify their bookings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our mission is to provide a convenient and reliable online bus ticket
          booking experience. We strive to provide a user-friendly interface for
          searching and booking bus tickets, as well as a variety of payment
          options and a responsive customer support team.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">100+</h3>
            <p className="text-gray-700">Routes</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">100+</h3>
            <p className="text-gray-700">Bus Operators</p>
          </div>
        </div>
      </section>
      <section className="bg-primary-color text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Our vision is to be the go-to platform for all ticket booking needs,
          providing users with a seamless and enjoyable experience.
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <div className="container">
          <h2 className="text-2xl font-bold">Ticket Booking Specialties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-primary-color hover:text-white transition-colors">
              <h3 className="text-xl font-bold">Business Class</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-primary-color hover:text-white transition-colors">
              <h3 className="text-xl font-bold">Economy Class</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-primary-color hover:text-white transition-colors">
              <h3 className="text-xl font-bold">Sleeping Coach</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-primary-color hover:text-white transition-colors">
              <h3 className="text-xl font-bold">Premium Economy</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-12 px-4">
        <div className="container">
          <h2 className="text-2xl font-bold">
            Book Your Tickets For A Comfortable Journey
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-primary-color hover:text-white transition-colors">
              <h3 className="text-xl font-bold">Book Bus Ticket</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-primary-color hover:text-white transition-colors">
              <h3 className="text-xl font-bold">Book Air Ticket</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-primary-color hover:text-white transition-colors">
              <h3 className="text-xl font-bold">Book Launch Ticket</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-primary-color hover:text-white transition-colors">
              <h3 className="text-xl font-bold">Book Rail Ticket</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-12 px-4 w-full">
        <div className="container">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-8">
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
              <h3 className="text-xl font-bold">
                Q: How do I book a ticket online?
              </h3>
              <p className="mt-2 text-gray-700">
                A: You can book a ticket online by following these steps: Search
                for your route, select your desired schedule, choose your seat,
                and complete the booking form.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
              <h3 className="text-xl font-bold">
                Q: What payment methods do you accept?
              </h3>
              <p className="mt-2 text-gray-700">
                A: We accept a variety of payment methods such as credit cards,
                debit cards, and online banking.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
              <h3 className="text-xl font-bold">
                Q: How do I know if my booking is successful?
              </h3>
              <p className="mt-2 text-gray-700">
                A: Once your booking is successful, you will receive a
                confirmation email with a booking reference number.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
