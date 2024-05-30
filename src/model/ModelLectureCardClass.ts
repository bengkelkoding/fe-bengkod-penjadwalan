export interface DataLectureClass {
  id: number;
  kode_matkul: string;
  nama_matkul: string;
  kode_kelompok: string;
  sks: number;
  day: string;
  jumlah_mahasiswa: number;
  time_start: string;
  time_end: string;
  classroom: string;
  dosen: {
    fullname: string;
    nip: string;
  };
}
