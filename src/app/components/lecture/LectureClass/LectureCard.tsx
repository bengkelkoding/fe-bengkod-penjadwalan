import React from "react";

interface LectureCardProps {
  id: number;
  kodeMatkul: string;
  namaMatkul: string;
  kodeKelompok: string;
  sks: number;
  day: string;
  jumlahMahasiswa: number;
  timeStart: string;
  timeEnd: string;
  classroom: string;
  dosen: {
    fullname: string;
    nip: string;
  };
}

const LectureCard: React.FC<LectureCardProps> = ({
  kodeMatkul,
  namaMatkul,
  kodeKelompok,
  sks,
  day,
  jumlahMahasiswa,
  timeStart,
  timeEnd,
  classroom,
  dosen,
}) => {
  return (
    <div className="card">
      <h2>{namaMatkul}</h2>
      <p>Kode Matkul: {kodeMatkul}</p>
      <p>Kode Kelompok: {kodeKelompok}</p>
      <p>SKS: {sks}</p>
      <p>Day: {day}</p>
      <p>
        Time: {timeStart} - {timeEnd}
      </p>
      <p>Classroom: {classroom}</p>
      <p>Jumlah Mahasiswa: {jumlahMahasiswa}</p>
      <p>
        Dosen: {dosen.fullname} ({dosen.nip})
      </p>
    </div>
  );
};

export default LectureCard;
