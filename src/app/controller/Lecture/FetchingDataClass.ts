import { DataLectureClass } from "@/model/ModelLectureCardClass";

export const fetchScheduleData = async (): Promise<DataLectureClass[]> => {
  try {
    const response = await fetch("http://localhost:8000/api/dosen/schedules");

    // Periksa status respons
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Periksa struktur data
    if (!data || !data.payload || !Array.isArray(data.payload)) {
      throw new Error("Invalid data structure");
    }

    return data.payload;
  } catch (error) {
    console.error("Error fetching schedules:", error);
    return [];
  }
};
