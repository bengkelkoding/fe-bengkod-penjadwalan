"use client";
import React from "react";
import { useParams } from "next/navigation";
import dataLclassroom from "../../../../../../public/utils/dataLectureClass";

const RoomDetail = () => {
  const { id } = useParams(); // disesuaikan dengan folder nya kalo [user] maka user  tapi kalo room maka room

  // Mencari data kelas yang sesuai dengan id dari URL
  const selectedClass = dataLclassroom.find((kelas) => kelas.id === id);

  if (!selectedClass) {
    return <div>kelas tidak ditemukan</div>;
  }
  return <div>id ruang kelas {selectedClass.name} </div>;
};

export default RoomDetail;
