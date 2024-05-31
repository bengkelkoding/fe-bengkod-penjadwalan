import axios from "axios";
interface Data {
  id: string;
  payload: {
    presences: any[];
  };
}
export const ApiDetailLectureSchedule = async (id: string): Promise<Data> => {
  try {
    // Ambil token dari localStorage
    const token = localStorage.getItem("token");

    // Jika token ada, lakukan permintaan API dengan memasukkan token ke dalam header
    if (token !== null) {
      const response = await axios.get(
        `http://localhost:8000/api/dosen/schedules/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Kembalikan data yang diterima dari API
      return response.data;
    } else {
      // Jika token tidak ada, tampilkan pesan error atau lakukan tindakan yang sesuai
      console.error("Token not found");
      throw new Error("Token not found");
    }
  } catch (error) {
    console.error("Error fetching schedules:", error);
    throw error;
  }
};
