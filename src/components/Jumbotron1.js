import "../css/App.css";
function Jumbotron() {
  return (
    <section class="bg-white dark:bg-gray-900 spacing bg-prim">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex flex-col justify-center">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5x">
            Kepuasan dan Keselamatan Anda adalah <span class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5x prio">Priotitas Kami</span>
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-400 lg:text-xl ">
            Kami hadir memberikan pelayanan kesehatan dengan memprioritaskan kebutuhan pasien dan keluarga. D idukung dengan teknologi, edukasi dan tenaga kesehatan yang berpengalaman serta profesional sehingga dapat memberikan pengalaman
            terbaik bagi pasien.
          </p>
          <div class="flex flex-col-2 sm:flex-row items-center">
            <button type="button" class="buttons text-base font-medium text-prim text-center rounded-full bg-white relative z-10" style={{ fontSize: "18px" }}>
              Konsultasi
            </button>
            <div type="button" class="arrows text-prim bg-white font-medium rounded-full text-sm text-center inline-flex items-center px-2.5 py-2.5 z-20 top-0 transform -translate-x-6">
              <svg class="w-5 h-5 -rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div className="utama mb-3"></div>
          <div className="gap-2 grid grid-cols-3">
            <div className="second"></div>
            <div className="second"></div>
            <div className="second"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
