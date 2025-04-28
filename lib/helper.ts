import { BookingList } from "@/types";
import jsPDF from "jspdf";


export const formatTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(0, 0, 0, hours, minutes));
};

export const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
};
export const formatBDT = (amount?: string) => {
  if (!amount) return "0";
  return parseFloat(amount).toLocaleString();
};
export const getDuration = (startTime: string, endTime: string) => {
  if (!startTime || !endTime) return "";

  const start = new Date(`1970-01-01T${startTime}Z`).getTime();
  const end = new Date(`1970-01-01T${endTime}Z`).getTime();

  let durationMs = end - start;

  // If end time is smaller than start time, assume the trip spans over midnight
  if (durationMs < 0) {
    durationMs += 24 * 60 * 60 * 1000; // Add 24 hours
  }

  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours}h ${minutes}m`;
};


export const setCookie = (name: string, value: string, days = 7) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; Secure; SameSite=Lax`;
};
export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; SameSite=Lax`;
};



// Function to generate and download PDF for a ticket
export const handleDownloadPDF = (booking: BookingList) => {
  const doc = new jsPDF("p", "mm", "a4");
  let marginLeft = 20;
  let pageWidth = 210;

  // 1. Header with Pink Background
  doc.setFillColor("#E91E63"); // Pink color
  doc.rect(0, 0, pageWidth, 30, "F");

  // Insert Logo
  // doc.addImage(logo, "PNG", 10, 5, 20, 20); // Optional logo image

  // Title Text
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor("#FFFFFF");
  doc.text(booking.company?.name ?? "Company Name", 20, 18,);
  doc.text("Passenger Info", pageWidth/2 + 10, 18,);

  let currentY = 40;

  // 2. Two Columns Layout (Business Class Left | Passenger Info Right)
  const middleLine = pageWidth / 2;

  doc.setTextColor("#000000");
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Business Class", marginLeft, currentY);
  doc.text("Business Class", middleLine + 10, currentY);

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  currentY += 10;

  // LEFT COLUMN
  let leftY = currentY;
  doc.text(`Coach: ${booking.vehicle?.vehicle_no}`, marginLeft, leftY);
  leftY += 7;
  doc.text(
    `From: ${booking.trip?.route?.from_location?.name}`,
    marginLeft,
    leftY
  );
  leftY += 7;
  doc.text(
    `To: ${booking.trip?.route?.to_location?.name}`,
    marginLeft,
    leftY
  );
  leftY += 7;
  doc.text(`Reporting Time: ${formatTime(booking.trip?.reporting_time)}`, marginLeft, leftY);
  leftY += 7;
  doc.text(
    `Start Date & Time: ${formatDate(booking.trip?.start_date)}, ${formatTime(booking.trip?.start_time)}`,
    marginLeft,
    leftY
  );
  leftY += 7;
  doc.text(
    `End Date & Time: ${formatDate(booking.trip?.end_date)}, ${formatTime(booking.trip?.end_time)}`,
    marginLeft,
    leftY
  );
  leftY += 7;
  doc.text(
    `Seat: ${booking.seat_data?.toSorted((a,b)=> a.seatId - b.seatId ).map((seat) => seat.seatNo).join(", ")}`,
    marginLeft,
    leftY
  );
  leftY += 7;
  doc.text(`Ticket Price: ${formatBDT(booking.trip?.ticket_price)} BDT`, marginLeft, leftY);
  leftY += 7;
  doc.text(`Quantity: ${booking.seat_data?.length ?? 0}`, marginLeft, leftY);
  leftY += 7;
  const totalPrice = (parseFloat(booking.trip?.ticket_price ?? "0") * (booking.seat_data?.length ?? 0)).toLocaleString();
  doc.text(`Total: ${totalPrice} BDT`, marginLeft, leftY);

  // RIGHT COLUMN
  let rightY = currentY;
  const rightX = middleLine + 10;

  doc.text(`Name: ${booking.passenger_name}`, rightX, rightY);
  rightY += 7;
  doc.text(`Phone: ${booking.passenger_phone}`, rightX, rightY);
  rightY += 7;
  doc.text(`Coach: ${booking.company?.name} - ${booking.vehicle?.vehicle_no}`, rightX, rightY);
  rightY += 7;
  doc.text(`From: ${booking.trip?.route?.from_location?.name}`, rightX, rightY);
  rightY += 7;
  doc.text(`To: ${booking.trip?.route?.to_location?.name}`, rightX, rightY);
  rightY += 7;
  doc.text(`Start Date & Time: ${formatDate(booking.trip?.start_date)}, ${formatTime(booking.trip?.start_time)}`, rightX, rightY);
  rightY += 7;
  doc.text(`End Date & Time: ${formatDate(booking.trip?.end_date)}, ${formatTime(booking.trip?.end_time)}`, rightX, rightY);
  rightY += 7;
  doc.text(`Seat: ${booking.seat_data?.toSorted((a,b)=> a.seatId - b.seatId ).map((seat) => seat.seatNo).join(", ")}`, rightX, rightY);
  rightY += 7;
  doc.text(
    `Price: ${formatBDT(booking.trip?.ticket_price)} BDT X ${booking.seat_data?.length ?? 0}`,
    rightX,
    rightY
  );
  rightY += 7;
  doc.text(`Total: ${totalPrice} BDT`, rightX, rightY);

  // Save PDF
  doc.save(`ticket_${booking.id}.pdf`);
};