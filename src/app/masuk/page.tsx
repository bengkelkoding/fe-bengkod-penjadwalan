import InputForm from "../components/FormInput";

const Masuk = () => {
  return (
    <div className="w-full min-h-screen  flex justify-center items-center">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Masuk dulu adik adik
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Gas absen, Ilham udah masuk loh.
        </p>
        <InputForm
          label="Email"
          type="email"
          name="email"
          placeholder="11120210001@mhs.dinus.ac.id"
          required
        />
        <InputForm
          label="Password"
          type="password"
          name="password"
          placeholder="Input password anda"
          required
        />
        <div className="w-full flex justify-center">
          <a href="/dashboard/1">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Masuk
            </button>
          </a>
        </div>
        <p className="pt-5 font-thin italic text-sm">By Windah Basudara</p>
      </div>
    </div>
  );
};

export default Masuk;
