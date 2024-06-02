// components/Login.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import axios from "@/utils/axios";

const Login = () => {
  const router = useRouter();
  const [code, setcode] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // ini axios dapat respon
      const response = await axios.post("login", {
        code,
        password,
      });

      // Ambil token dari respons API
      const token = response.data.access_token;
      const user = response.data.user;
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      // Simpan token ke localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Kalo berhasil
      // Misalnya, redirect ke halaman dashboard
      if (response.data.user.type === "DOSEN") {
        router.push("/dashboard/lecture");
      }
      if (response.data.user.type === "MAHASISWA") {
        router.push("/dashboard/student");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("code atau password salah");
    }
  };

  const handlecodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcode(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="w-full min-h-full flex-1 flex-col px-5 lg:px-8 h-screen flex items-center justify-center">
      <div className="flex w-full lg:w-1/3  px-6 py-12 flex-col bg-white shadow-lg rounded-lg  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="w-full flex justify-center">
            <div className="jadwalin w-1/2 bg-blue-500 text-white rounded-3xl p-2">
              <p className="font-medium text-3xl text-center">Jadwalin</p>
            </div>
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="code" className="block text-sm font-medium leading-6 text-gray-900">
                code address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="text"
                  placeholder="NIM / NIP"
                  value={code}
                  onChange={handlecodeChange}
                  autoComplete="code"
                  required
                  className="block w-full text- rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/not-found" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
