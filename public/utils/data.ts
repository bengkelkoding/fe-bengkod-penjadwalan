// data.ts
interface User {
  email: string;
  password: string;
  role: "lecturer" | "student";
}

const users: User[] = [
  { email: "dosen@gmail.com", password: "dosen123", role: "lecturer" },
  { email: "mahasiswa@gmail.com", password: "mahasiswa123", role: "student" },
];

export default users;
