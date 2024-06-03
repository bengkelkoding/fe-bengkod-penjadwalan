import React, { useEffect, useState } from "react";
import { ApiLectureSchedule } from "@/app/api/LectureSchedule";
import { ApiDetailLectureSchedule } from "@/app/api/LectureScheduleDetail";
import { DataLectureClass } from "@/model/ModelLectureCardClass";
import ListAllStudents from "@/app/components/lecture/LectureClass/ListAllStudents"; // Komponen untuk menampilkan daftar semua mahasiswa

const AllStudentsPage: React.FC = () => {
  const [lectureSchedules, setLectureSchedules] = useState<DataLectureClass[]>([]);
  const [allStudents, setAllStudents] = useState<any[]>([]); // Sesuaikan tipe data sesuai struktur API

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
        const allStudentsData: any[] = [];
        for (const schedule of lectureSchedules) {
          const scheduleDetails = await ApiDetailLectureSchedule(schedule.id.toString());
          const students = scheduleDetails.payload.students;
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
        <ListAllStudents students={allStudents} />
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default AllStudentsPage;
