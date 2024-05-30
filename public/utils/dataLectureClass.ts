interface dataLecturClass {
  id: string;
  name: string;
  time: string;
  place: string;
  studentCount: number;
  meetings: number;
  meetingsStatus: "Sesuai" | "Kurang";
  groupCode: string;
  sks: number;
}

const dataLclassroom: dataLecturClass[] = [
  {
    id: "1",
    name: "Pemrograman Web Lanjut",
    time: "Senin - 09:00",
    place: "B.2.3",
    studentCount: 35,
    meetings: 12,
    meetingsStatus: "Sesuai",
    groupCode: "TI2021A",
    sks: 4,
    // bgsession: "#FF8C00",
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
    sks: 4,
    // bgsession: "#FF8C00",
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
    sks: 4,
    // bgsession: "#FF8C00",
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
    sks: 4,
    // bgsession: "#FF8C00",
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
    sks: 4,
    // bgsession: "#FF8C00",
  },
];

export default dataLclassroom;
