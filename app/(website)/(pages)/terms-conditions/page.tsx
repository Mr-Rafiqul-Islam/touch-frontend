import React from 'react'

const TermsConditon = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-10 px-6 sm:px-16 lg:px-32">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-md p-8">
      <h1
        className="text-3xl font-bold mb-6 text-primary-color"
      >
        Terms of Use
      </h1>

      <section className="mb-6">
        <p className="mb-4">
          Welcome to <span className="font-semibold text-primary-color">Touch Ticketing !</span>{" "}
          We’re here to make booking tickets easy and hassle-free. Please read
          our terms of use carefully, as they outline what you can expect
          from us and what we expect from you while using our services.
        </p>
      </section>

      <section className="mb-6">
        <h2
          className="text-xl font-semibold mb-3 text-primary-color"
        >
          Our Role
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Providing you with valid tickets for buses, events, or other
            services from our partnered operators.
          </li>
          <li>
            Offering refunds and support if a trip or event is canceled,
            following our refund policy.
          </li>
        </ul>
        <p className="mt-4 font-semibold">We are not responsible for:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Delays or early arrivals of buses/events.</li>
          <li>The behavior of bus operators or their staff.</li>
          <li>The quality of buses, seating, or event arrangements.</li>
          <li>
            Trip cancellations, seat changes, or changes in vehicle type made
            by the operator.
          </li>
          <li>Lost, stolen, or damaged baggage.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2
          className="text-xl font-semibold mb-3 text-primary-color"
        >
          Important Passenger Guidelines
        </h2>
        <ul className="list-decimal list-inside space-y-2">
          <li>
            <span className="font-semibold">Arrive Early:</span> Please reach
            the boarding point at least 30 minutes before the scheduled
            departure. If you don’t, your ticket may be considered canceled.
          </li>
          <li>
            <span className="font-semibold">Carry Your Ticket:</span> You must
            bring a printed or digital copy of your ticket. However, we
            recommend having a printed copy to avoid any issues during
            boarding. Without a valid ticket, you may not be allowed to
            travel or attend the event.
          </li>
          <li>
            <span className="font-semibold">Operator Rights:</span> Operators
            may cancel, delay, or reschedule trips/events, or change vehicles,
            venues, or seating due to unforeseen circumstances.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2
          className="text-xl font-semibold mb-3 text-primary-color"
        >
          Luggage Policy
        </h2>
        <p>
          Luggage policies depend on the operators. Passengers are responsible
          for ensuring their baggage complies with the rules. Neither the
          operator nor Touch Ticketing will be held accountable for any issues
          arising from illegal or unauthorized items.
        </p>
      </section>

      <section className="mb-6">
        <h2
          className="text-xl font-semibold mb-3 text-primary-color"
        >
          Communication Policy
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Notifications will be sent to the mobile number or email you
            provided during registration.
          </li>
          <li>
            Ensure your mobile is switched on to receive SMS notifications.
          </li>
          <li>
            Touch Ticketing will not be responsible for delays or non-delivery
            of notifications caused by network issues or errors.
          </li>
          <li>
            If you notice any errors in alerts, notify us immediately, and
            we’ll rectify them.
          </li>
          <li>
            We may call or email you to gather feedback about your experience
            with our services or operators.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2
          className="text-xl font-semibold mb-3 text-primary-color"
        >
          Miscellaneous
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            These terms are governed by the laws of Bangladesh. Any disputes
            should first be resolved with Touch Ticketing directly.
          </li>
          <li>
            Any unresolved claims after 60 days may proceed to arbitration.
          </li>
          <li>
            During peak periods (e.g., Eid), service charges may temporarily
            increase.
          </li>
          <li>
            We may update these terms without prior notice. Please review them
            periodically.
          </li>
        </ul>
      </section>

      <p className="text-center font-semibold mt-6">
        Thank you for choosing Touch Ticketing. We’re here to make your travel
        hassle-free!
      </p>
    </div>
  </div>
  )
}

export default TermsConditon