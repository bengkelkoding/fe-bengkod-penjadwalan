export interface DataStudentSchedule {
  id: number;
  kode_matkul: string;
  nama_matkul: string;
  kode_kelompok: string;
  sks: number;
  day: string;
  time_start: string;
  time_end: string;
  classroom: string;
  dosen: {
    fullname: string;
    nip: string;
  };
}
