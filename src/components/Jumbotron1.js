import "../css/App.css";
import Doctor1 from "../images/doctor1.png";
import Doctor2 from "../images/doctor2.png";
import Doctor3 from "../images/doctor3.png";
import Thumbnail from "../images/thumbnail.jpg";
import React, { useEffect, useState } from "react";

const Jumbotron = () => {
  const [melayaniCount, setMelayaniCount] = useState(0);
  const [penghargaanCount, setPenghargaanCount] = useState(0);
  const [dokterCount, setDokterCount] = useState(0);

  const targetMelayani = 80;
  const targetPenghargaan = 18;
  const targetDokter = 90;
  const duration = 8000; // duration of the animation in milliseconds
  const interval = duration / Math.max(targetMelayani, targetPenghargaan, targetDokter); // interval time

  useEffect(() => {
    let currentMelayani = 0;
    let currentPenghargaan = 0;
    let currentDokter = 0;

    const counter = setInterval(() => {
      if (currentMelayani < targetMelayani) {
        currentMelayani++;
        setMelayaniCount(currentMelayani);
      }

      if (currentPenghargaan < targetPenghargaan) {
        currentPenghargaan++;
        setPenghargaanCount(currentPenghargaan);
      }

      if (currentDokter < targetDokter) {
        currentDokter++;
        setDokterCount(currentDokter);
      }

      if (currentMelayani >= targetMelayani && currentPenghargaan >= targetPenghargaan && currentDokter >= targetDokter) {
        clearInterval(counter);
      }
    }, interval);

    return () => clearInterval(counter);
  }, [targetMelayani, targetPenghargaan, targetDokter, interval]);

  return (
    <section className="bg-white dark:bg-gray-900 spacing bg-prim bg-img">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl gap-2">
            Kesehatan dan Keselamatan Anda adalah <p className="text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl prio">Prioritas Kami</p>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl">
            Kami memberikan pelayanan kesehatan unggul dengan fokus pada kebutuhan pasien dan keluarga. Didukung oleh teknologi canggih, edukasi, serta tenaga kesehatan berpengalaman dan profesional untuk memberikan pengalaman terbaik bagi
            pasien.
          </p>
          <div className="flex flex-col-2 sm:flex-row items-center">
            <button type="button" className="buttons text-base font-medium text-prim text-center rounded-full bg-white relative z-10" style={{ fontSize: "18px" }}>
              Konsultasi
            </button>
            <div className="arrows text-prim bg-white font-medium rounded-full text-sm text-center inline-flex items-center px-2.5 py-2.5 z-20 top-0 transform -translate-x-7">
              <svg className="w-5 h-5 -rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </div>
          </div>
        </div>
        <div className="sidePages sm:hidden lg:block hidden">
          <div className="utama relative">
            <img src={Thumbnail} />
          </div>

          <div className="gap-2 grid grid-cols-3">
            <div className="second text-prim px-4 py-3.5">
              <div id="Informasi1">
                <h1 className="font-bold text-2xl">{melayaniCount} Tahun</h1>
                <p className="font-medium text-sm">Melayani Anda</p>
              </div>
              <img src={Doctor1} className="Doctor" alt="Doctor1" />
            </div>
            <div className="second text-prim px-4 py-3.5">
              <div id="Informasi2">
                <h1 className="font-bold text-2xl">{penghargaanCount}</h1>
                <p className="font-medium text-sm">Penghargaan</p>
              </div>
              <img src={Doctor2} className="Doctor" alt="Doctor2" />
            </div>
            <div className="second text-prim px-4 py-3.5">
              <div id="Informasi3">
                <h1 className="font-bold text-2xl">{dokterCount}</h1>
                <p className="font-medium text-sm">Dokter</p>
              </div>
              <img src={Doctor3} className="Doctor" alt="Doctor3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
