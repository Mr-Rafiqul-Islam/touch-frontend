import React from "react";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { BookingList } from "@/types";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f5f5f5",
    padding: 0,
  },
  printSection: {
    width: "800px",
    margin: "0 auto",
  },
  ticket: {
    position: "relative",
    width: "800px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  ticketBgImage: {
    position: "absolute",
    top: "0",
    left: 0,
    width: "570px",
    height: "500px",
    zIndex: 0,
    objectFit: "fill",
  },
  cardBody: {
    padding: 0,
    position: "relative",
    zIndex: 2,
    width: "100%",
  },
  header: {
    backgroundColor: "#E91E63",
    color: "#fff",
    padding: 10,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    width: "800px",
  },
  logo: {
    width: 80,
    height: 50,
    marginRight: 10,
    objectFit: "contain",
  },
  leftSection: {
    width: "325px",
    // paddingRight: 20,
  },
  rightSection: {
    width: "475px",
    // paddingLeft: 20,
  },
  ticketDetails: {
    flexDirection: "row",
    display: "flex",
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.98)",
    zIndex: 2,
    width: "800px",
  },
  line: {
    borderLeftWidth: 1,
    borderLeftColor: "#E91E63",
    borderLeftStyle: "dotted",
    marginHorizontal: 20,
    height: "100%",
    alignSelf: "stretch",
  },
  title: {
    fontSize: 18,
    textTransform: "uppercase",
    marginLeft: 10,
  },
  subTitle: {
    fontSize: 18,
    paddingLeft: "24px",
    textTransform: "uppercase",
    color: "#fff",
  },
  h5: {
    margin: 0,
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    marginTop: 15,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
    gap: '5px',
  },
  label: {
    fontWeight: 600,
    width: 100,
    fontSize: 12,
    lineHeight: 1.5,
    alignSelf: "flex-start",
  },
  value: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 1.5,
    alignSelf: "flex-start",
  },
  label2: {
    fontWeight: 600,
    width: 100,
    fontSize: 12,
    alignSelf: "flex-start",
  },
  value2: {
    fontWeight: 400,
    fontSize: 12,
    width: 130,
    lineHeight: 1.5,
    alignSelf: "flex-start",
  },
  table: {
    width: "100%",
    marginTop: 10,
    fontSize: 12,
  },
  tableRow: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 2,
  },
  tableCellLabel: {
    width: "50%",
    paddingVertical: 3,
    fontWeight: 600,
  },
  tableCell: {
    paddingVertical: 3,
  },
});

const formatTime = (timeStr: string | undefined): string => {
  if (!timeStr) return "";
  const [h, m] = timeStr.split(":");
  let hour = parseInt(h, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${m} ${ampm}`;
};

const formatDate = (dateStr: string | undefined): string => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getClassLabel = (category: string | undefined): string => {
  if (category === "0") return "Economy Class";
  if (category === "1") return "Business Class";
  if (category === "2") return "Sleeping Coach";
  return "";
};

interface TicketPdfProps {
  booking: BookingList;
}

export const TicketPdf: React.FC<TicketPdfProps> = ({ booking }) => {
  const { seat_data, passenger_name, passenger_phone, company, vehicle, trip } =
    booking;
    const baseurl= process.env.NEXT_PUBLIC_API_URL
  const backgroundImage = "./city_bus_bro1.png"; // Update as needed

  const seatsCount = seat_data.length;
  const firstSeatPrice = parseFloat(seat_data[0]?.seatPrice || "0");
  const totalPrice = seat_data.reduce(
    (acc, s) => acc + parseFloat(s.seatPrice),
    0
  );
  console.log(`${baseurl}/${company?.site_setting?.logo}`);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.printSection}>
          <View style={styles.ticket}>
            {/* Background image */}
            <Image
              alt="Background"
              src={backgroundImage}
              style={[
                styles.ticketBgImage,
                // { position: 'absolute', zIndex: 0, top: 0, left: 0, height: '300px', width: '800px' },
              ]}
              fixed
            />
            <View style={styles.cardBody}>
              <View style={styles.header}>
                <View style={styles.leftSection}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>{vehicle?.name || "N/A"}</Text>
                  </View>
                </View>
                <View style={styles.rightSection}>
                  <Text style={styles.subTitle}>Passenger Info</Text>
                </View>
              </View>

              <View style={styles.ticketDetails}>
                <View style={styles.leftSection}>
                  <Text style={styles.h5}>
                    {getClassLabel(vehicle?.category)}
                  </Text>
                  <View style={styles.details}>
                    <View style={styles.row}>
                      <Text style={styles.label}>Coach: </Text>
                      <Text style={styles.value}>{vehicle?.vehicle_no}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label}>From: </Text>
                      <Text style={styles.value}>
                        {trip?.route?.start_counter?.name},{" "}
                        {trip?.route?.from_location?.name}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label}>To: </Text>
                      <Text style={styles.value}>
                      {trip?.route?.end_counter?.name},{" "}
                      {trip?.route?.to_location?.name}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label}>Reporting Time: </Text>
                      <Text style={styles.value}>
                        {formatTime(trip?.reporting_time)}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label}>Start Date & Time: </Text>
                      <Text style={styles.value}>
                        {formatDate(trip?.start_date)},{" "}
                        {formatTime(trip?.start_time)}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label}>End Date & Time: </Text>
                      <Text style={styles.value}>
                        {formatDate(trip?.end_date)},{" "}
                        {formatTime(trip?.end_time)}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.table}>
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCellLabel}>Seat:</Text>
                      <Text style={styles.tableCell}>
                        {seat_data.map((seat, i) =>
                          i === seat_data.length - 1
                            ? seat.seatNo
                            : seat.seatNo + ", "
                        )}
                      </Text>
                    </View>
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCellLabel}>Ticket Price:</Text>
                      <Text style={styles.tableCell}>
                        {firstSeatPrice.toFixed(2)} BDT
                      </Text>
                    </View>
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCellLabel}>Quantity:</Text>
                      <Text style={styles.tableCell}>{seatsCount}</Text>
                    </View>
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCellLabel}>Total:</Text>
                      <Text style={styles.tableCell}>
                        <Text style={{ fontWeight: 700 }}>
                          {totalPrice.toFixed(2)} BDT
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.line} />

                <View style={styles.rightSection}>
                  <Text style={styles.h5}>
                    {getClassLabel(vehicle?.category)}
                  </Text>
                  <View style={styles.details}>
                    <View style={styles.row}>
                      <Text style={styles.label2}>Name: </Text>
                      <Text style={styles.value2}>
                        {passenger_name || "N/A"}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label2}>Phone: </Text>
                      <Text style={styles.value2}>{passenger_phone || "N/A"}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label2}>Coach: </Text>
                      <Text style={styles.value2}>
                        {vehicle?.name} - {vehicle?.vehicle_no}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label2}>From: </Text>
                      <Text style={styles.value2}>
                      {trip?.route?.start_counter?.name},{" "}
                      {trip?.route?.from_location?.name}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label2}>To: </Text>
                      <Text style={styles.value2}>
                      {trip?.route?.end_counter?.name},{" "}
                      {trip?.route?.to_location?.name}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label2}>Start Date : </Text>
                      <Text style={styles.value2}>
                        {formatDate(trip?.start_date)}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label2}>End Date: </Text>
                      <Text style={styles.value2}>
                        {formatDate(trip?.end_date)}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label2}>Start Time: </Text>
                      <Text style={styles.value2}>
                        {formatTime(trip?.start_time)}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label2}>End Time: </Text>
                      <Text style={styles.value2}>
                        {formatTime(trip?.end_time)}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label2}>Seat: </Text>
                      <Text style={styles.value2}>
                        {seat_data.map((seat, i) =>
                          i === seat_data.length - 1
                            ? seat.seatNo
                            : seat.seatNo + ", "
                        )}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label2}>Price: </Text>
                      <Text style={styles.value2}>
                        {firstSeatPrice.toFixed(2)} BDT X {seatsCount}
                      </Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.label2}>Total: </Text>
                      <Text style={styles.value2}>
                        {totalPrice.toFixed(2)} BDT
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
