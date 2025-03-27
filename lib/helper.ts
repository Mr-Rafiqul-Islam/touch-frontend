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
