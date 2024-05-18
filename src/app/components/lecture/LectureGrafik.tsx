"use client";
import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

export default function LectureGrafik() {
  const chartRef = useRef<ApexCharts | null>(null);
  useEffect(() => {
    const getChartOptions = () => {
      return {
        // keals normal. 12 pertemuan
        /* 
          misal aku punya 5 kelas.

          1. weekAllClass = ini sama setiap kelas nambah 1 ketika week start 1 dimulai -- weekAllClass++
          2. weekClass = variabel kelas dimulai ketika open gembok kelas sebelum qrcode hanya sekali aja.
          3. totClass = weekClass++; ketika weekClass minggu 1 selesai maka 

          totKelas = 5
          - tau normal gimana? kalo sesuai jumlah pertemuan saat ini dengan jumlah week pertemuan all kelas
          belum normal = 2.
          normal = 3.
        */
        series: [9, 3],
        colors: ["#1C64F2", "#16BDCA"],
        chart: {
          height: 320,
          width: "100%",
          type: "donut",
        },
        stroke: {
          colors: ["transparent"],
          lineCap: "",
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: 20,
                },
                total: {
                  showAlways: true,
                  show: true,

                  label: "pertemuan",
                  fontFamily: "Inter, sans-serif",
                  formatter: function (w) {
                    const sum = w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0);
                    return 8 + "/" + sum;
                  },
                },
                value: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: -20,
                  formatter: function (value) {
                    return value + "k";
                  },
                },
              },
              size: "60%",
            },
          },
        },
        grid: {
          padding: {
            top: -2,
          },
        },
        labels: ["Kelas Sesuai", "Kelas tidak sesuai"],
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "bottom",
          fontFamily: "Inter, sans-serif",
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value + " kelas";
            },
          },
        },
        xaxis: {
          labels: {
            formatter: function (value) {
              return value + " kelas";
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      };
    };

    const chartElement = document.getElementById("donut-chart");

    if (chartElement && !chartRef.current) {
      chartRef.current = new ApexCharts(chartElement, getChartOptions());
      chartRef.current.render();
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-3">
        <div className="flex justify-center items-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
            Ketentuan pertemuan
          </h5>
          <svg
            data-popover-target="chart-info"
            data-popover-placement="bottom"
            className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
          </svg>
          <div
            data-popover
            id="chart-info"
            role="tooltip"
            className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
          >
            <div className="p-3 space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Activity growth - Incremental
              </h3>
              <p>
                Report helps navigate cumulative growth of community activities.
                Ideally, the chart should have a growing trend, as stagnating
                chart signifies a significant decrease of community activity.
              </p>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Calculation
              </h3>
              <p>
                For each date bucket, the all-time volume of activities is
                calculated. This means that activities in period n contain all
                activities up to period n, plus the activities generated by your
                community in period.
              </p>
              <a
                href="#"
                className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
              >
                Read more{" "}
                <svg
                  className="w-2 h-2 ms-1.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </div>
            <div data-popper-arrow></div>
          </div>
        </div>
      </div>

      {/* <!-- Donut Chart --> */}
      <div className="py-6" id="donut-chart"></div>

      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          <a
            href="#"
            className="text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
          >
            Detail kelas sesuai
            <svg
              className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
