import Link from "next/link";

const ButtomNavigation = () => {
  return (
    <div className="shadow shadow-blue-600 fixed bottom-0 left-0 right-0 gap-10 flex justify-center mx-auto px-6 mt-11 w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white rounded-t-[40px] pt-2 pb-1 ">
      <div className="flex h-full max-w-lg items-center justify-center gap-14">
        <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <Link href="/dashboard/student">
            <svg className="hover:scale-150 duration-150  " width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                  stroke="#2e3e76"
                  strokeWidth="1.5"
                ></path>{" "}
                <path d="M15 18H9" stroke="#2e3e76" strokeWidth="1.5" strokeLinecap="round"></path>{" "}
              </g>
            </svg>
            <p className="text-[12px]  font-medium text-blue-900">Home</p>
            {/* <span className="sr-only">Home</span> */}
          </Link>
        </button>

        <button
          data-tooltip-target="tooltip-new"
          type="button"
          className="inline-flex items-center justify-center w-12 h-12 font-medium bg-blue-600 rounded-2xl hover:bg-blue-400 duration-200 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        >
          <Link href="/dashboard/student/scan">
            <svg className="w-6 h-6 ml-1 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9"
              />
            </svg>
            <p className="text-[12px]  font-medium text-white">Scan</p>
            {/* <span className="sr-only">Scan</span> */}
          </Link>
        </button>

        <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <Link href="/dashboard/student/riwayat">
            <svg className="ml-1 hover:scale-150 duration-150 " width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M9.5 14.4L10.9286 16L14.5 12" stroke="#2e3e76" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{" "}
                <path
                  d="M2 11.9997C2 7.28562 2 4.9286 3.46447 3.46413C4.70529 2.22331 6.58687 2.03382 10 2.00488M22 11.9997C22 7.28562 22 4.9286 20.5355 3.46413C19.2947 2.22331 17.4131 2.03382 14 2.00488"
                  stroke="#2e3e76"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M10 22C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C22 9.79961 22 11.1997 22 14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22"
                  stroke="#2e3e76"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="text-[12px]  font-medium text-blue-900">History</p>
            {/* <span className="sr-only">Settings</span> */}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ButtomNavigation;
