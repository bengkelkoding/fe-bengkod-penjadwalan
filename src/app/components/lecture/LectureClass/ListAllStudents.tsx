import React, { useEffect, useState } from "react";
import { ApiLectureSchedule } from "@/app/api/LectureSchedule";
import { ApiDetailLectureSchedule } from "@/app/api/LectureScheduleDetail";
import { DataLectureClass } from "@/model/ModelLectureCardClass";

interface Student {
  id: number;
  code: string;
  fullname: string;
  type: string;
  profile_picture: string | null;
  created_at: string;
  updated_at: string;
}

interface ScheduleDetail {
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
  students: Student[];
}

const AllStudentsPage: React.FC = () => {
  const [lectureSchedules, setLectureSchedules] = useState<DataLectureClass[]>([]);
  const [allStudents, setAllStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchLectureSchedules = async () => {
      try {
        const lectureSchedulesData = await ApiLectureSchedule();
        setLectureSchedules(lectureSchedulesData.payload);
      } catch (error) {
        console.error("Error fetching lecture schedules:", error);
      }
    };

    fetchLectureSchedules();
  }, []);

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const allStudentsData: Student[] = [];
        for (const schedule of lectureSchedules) {
          const scheduleDetails: ScheduleDetail = await ApiDetailLectureSchedule(schedule.id.toString());
          const students = scheduleDetails.students;
          allStudentsData.push(...students);
        }
        setAllStudents(allStudentsData);
      } catch (error) {
        console.error("Error fetching all students:", error);
      }
    };

    if (lectureSchedules.length > 0) {
      fetchAllStudents();
    }
  }, [lectureSchedules]);

  return (
    <div>
      <h1>All Students Taught by the Dosen</h1>
      {allStudents.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Code</th>
                <th>Fullname</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {allStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.code}</td>
                  <td>{student.fullname}</td>
                  <td>{student.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default AllStudentsPage;