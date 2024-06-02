// types.ts

export interface Dosen {
  fullname: string;
  nip: string;
}

export interface Schedule {
  id: number;
  kode_matkul: string;
  nama_matkul: string;
  kode_kelompok: string;
  sks: number;
  day: string;
  time_start: string;
  time_end: string;
  classroom: string;
  dosen: Dosen;
}

export interface Presence {
  id: number;
  week: number;
  presence_date: string;
  status: number;
  status_label: string;
}

export interface ScheduleDetail {
  schedule: Schedule;
  all_presence_count: number;
  attended_presence_count: number;
  absence_max_limit: string;
  absence_count: number;
  absence_with_reason_count: number;
  absence_no_reason_count: number;
  presences: Presence[];
}
