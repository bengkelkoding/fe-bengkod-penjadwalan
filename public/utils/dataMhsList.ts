interface MhsList {
  id: number;
  user_id: number;
  nim: string;
  created_at: string;
  updated_at: string;
  pivot: {
    schedule_id: number;
    mahasiswa_id: number;
  };
  user: {
    id: number;
    code: string;
    fullname: string;
    type: "MAHASISWA";
    profile_picture: null;
    created_at: string;
    updated_at: string;
  };
}
export default MhsList;
