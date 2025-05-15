'use client';
import React, { useEffect, useState } from "react";
import { TicketPdf } from "../my-booking/TicketPdf";
import { PDFViewer } from "@react-pdf/renderer";

const bokingData = {
  id: 73,
  company_id: 26,
  trip_id: 9,
  vehicle_id: 8,
  seat_data: [
    {
      seatId: 201,
      seatNo: "B3",
      seatPrice: "600",
    },
  ],
  passenger_name: "Rafiqul",
  passenger_phone: "01889693061",
  travel_date: "2025-04-11",
  user_id: "29",
  type: "App",
  deleted_at: null,
  created_at: "2025-04-06T07:12:12.000000Z",
  updated_at: "2025-04-06T07:12:12.000000Z",
  company: {
    id: 26,
    name: "Golden Line",
    email: "golden.line@company.com",
    email_verified_at: null,
    phone: null,
    verification_code: null,
    reset_password_token: null,
    reset_password_token_created_at: null,
    image: "./hanif.png",
    status: 1,
    is_registration_by: "1",
    created_at: "2025-03-23T05:26:38.000000Z",
    updated_at: "2025-03-24T05:12:18.000000Z",
    site_setting: {
      id: 1,
      company_id: 26,
      name: "Golden Line",
      title: null,
      meta_description: null,
      favicon: "images/favicons/1742719775.jpg",
      logo: "images/logos/1742719775.jpg",
      site_preview_image: "images/site_preview_image/1742719775.jpg",
      email: "golden.line@company.com",
      phone: "01766229715",
      address: "Bangla Bazar",
      short_description: null,
      site_link: null,
      facebook_link: null,
      twitter_link: null,
      linkedin_link: null,
      instagram_link: null,
      youtube_link: null,
      created_at: "2025-03-08T02:56:03.000000Z",
      updated_at: "2025-03-23T08:49:35.000000Z",
    },
  },
  trip: {
    id: 9,
    company_id: 26,
    route_id: 8,
    vehicle_id: 8,
    driver_id: 14,
    supervisor_id: 16,
    helper_id: 15,
    start_date: "2025-04-30",
    end_date: "2025-05-01",
    start_time: "23:30:00",
    end_time: "06:00:00",
    reporting_time: "23:00:00",
    total_route_cost: "2000",
    ticket_price: "600",
    trip_status: 1,
    status: "1",
    created_at: "2025-03-24T06:14:14.000000Z",
    updated_at: "2025-04-26T04:14:40.000000Z",
    route: {
      id: 8,
      company_id: 26,
      from_location_id: "22",
      to_location_id: "21",
      start_counter_id: 24,
      end_counter_id: 26,
      via_counters_id: '["26","25","24"]',
      route_manager_id: 18,
      checkers_id: '["17"]',
      document: "uploads/pdfs/1742709455.png",
      status: "1",
      created_at: "2025-03-23T05:57:35.000000Z",
      updated_at: "2025-03-23T05:57:35.000000Z",
      from_location: {
        id: 22,
        district_id: 2,
        name: "Dhaka",
        status: 1,
        created_at: "2025-03-03T03:21:00.000000Z",
        updated_at: "2025-03-03T03:21:00.000000Z",
      },
      to_location: {
        id: 21,
        district_id: 7,
        name: "Cox’s Bazar",
        status: 1,
        created_at: "2025-03-03T03:08:25.000000Z",
        updated_at: "2025-03-03T03:08:25.000000Z",
      },
      start_counter: {
        id: 24,
        company_id: 26,
        name: "Badda Counter",
        counter_no: "001",
        location_id: 22,
        status: "1",
        created_at: "2025-03-23T05:30:06.000000Z",
        updated_at: "2025-03-23T05:30:39.000000Z",
      },
      end_counter: {
        id: 26,
        company_id: 26,
        name: "Dolfin More Counter",
        counter_no: "003",
        location_id: 21,
        status: "1",
        created_at: "2025-03-23T05:30:55.000000Z",
        updated_at: "2025-03-23T05:30:55.000000Z",
      },
    },
  },
  vehicle: {
    id: 8,
    company_id: 26,
    owner_id: 19,
    type_id: 9,
    category: "1",
    name: "Golden Line",
    vehicle_no: "254505",
    engin_no: "154252",
    chest_no: "456325",
    total_seat: 20,
    amenities_id: '["13","12"]',
    document: "uploads/vehiclesPdf/1742796774.jfif",
    is_booked: "1",
    current_location_id: 21,
    status: 1,
    created_at: "2025-03-24T06:12:54.000000Z",
    updated_at: "2025-03-24T06:14:14.000000Z",
  },
};
function TicketPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className="h-screen w-full">
    {loaded && (
      <PDFViewer className="h-full w-full" showToolbar={true}>
        <TicketPdf booking={bokingData} />
      </PDFViewer>
    )}
    </div>
  );
}

export default TicketPage;
