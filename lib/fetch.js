export async function getAppointment() {
  try {
    const response = await fetch("/api/Appointment");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
