import React from "react";
import ButtomNavigation from "@/app/components/ButtomNavigation";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen px-4 pb-24 bg-slate-300 w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
      <p className=" text-center font-semibold rounded-br-[35px] rounded-bl-[35px] bg-blue-900 text-white text-2xl py-5 px-8  -mx-4">Form Izin Mahasiswa</p>
      <div className="mx-3 mt-12">
        <form className="max-w-sm mx-auto">
          <label className="block mb-2 font-semibold text-blue-900">Masukkan Mata Kuliah</label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Pilih Mata Kuliah</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          <label className="block mt-3 mb-2 font-semibold text-blue-900">Pertemuan</label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Pilih Pertemuan</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
        <div className=" bg-blue-900 w-40 mt-3 items-center font-semibold text-white px-4  py-2 rounded-2xl rounded-bl-none rounded-br-none flex justify-between">
          <p>Keterangan Izin </p>
        </div>
        <div className=" items-center py-3 px-4 flex gap-3 bg-white rounded-2xl rounded-tl-none w-auto">
          <div className="flex gap-1">
            <input type="radio" name="" id="" />
            <label className="text-blue-900 font-semibold">Sakit</label>
          </div>

          <div className="flex  gap-1">
            <input type="radio" name="" id="" />
            <label className="text-blue-900 font-semibold">Izin</label>
          </div>

          <div className="flex  gap-1">
            <input type="radio" name="" id="" />
            <label className="text-blue-900 font-semibold">Lainnya</label>
          </div>
        </div>

        <p className="block mb-2 mt-3 font-semibold text-blue-900">Upload Bukti</p>
        <div className="flex flex-col items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
      <ButtomNavigation />
    </div>
  );
}
