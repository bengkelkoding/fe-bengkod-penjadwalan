interface dataLecturePertemuan {
  id: string;
  name: string;
  time: string;
  place: string;
  studentCount: number;
  meetings: number;
  meetingsStatus: "Sesuai" | "Kurang";
  groupCode: string;
}

const dataPertemuan: dataLecturePertemuan[] = [
  {
    id: "1",
    name: "Pemrograman Web Lanjut",
    time: "Senin - 09:00",
    place: "B.2.3",
    studentCount: 35,
    meetings: 12,
    meetingsStatus: "Sesuai",
    groupCode: "TI2021A",
  },
  {
    id: "2",
    name: "Basis Data Terdistribusi",
    time: "Selasa - 13:30",
    place: "C.4.1",
    studentCount: 28,
    meetings: 10,
    meetingsStatus: "Kurang",
    groupCode: "TI2020B",
  },
  {
    id: "3",
    name: "Kriptografi dan Keamanan Data",
    time: "Rabu - 16:00",
    place: "A.1.2",
    studentCount: 42,
    meetings: 14,
    meetingsStatus: "Sesuai",
    groupCode: "TI2019C",
  },
  {
    id: "4",
    name: "Sistem Informasi Geografis",
    time: "Kamis - 11:00",
    place: "D.3.4",
    studentCount: 30,
    meetings: 12,
    meetingsStatus: "Sesuai",
    groupCode: "TI2021D",
  },
  {
    id: "5",
    name: "Penambangan Data",
    time: "Jumat - 14:30",
    place: "B.2.5",
    studentCount: 25,
    meetings: 11,
    meetingsStatus: "Kurang",
    groupCode: "TI2020E",
  },
];

export default dataPertemuan;
