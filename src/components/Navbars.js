import Logo from "../images/logo.png";
import "../css/App.css";
function Navbars() {
  return (
    <nav class="bg-prim fixed w-full z-20 top-0 start-0 py-3 px-3 bg-img">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="javascript:void(0" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} alt="Sehat Rakya Logo" className="logo" />
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul class="flex flex-col font-medium mt-4 border border-gray-100 rounded-lg md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 px-3 py-3">
            <li>
              <a href="#" class="block text-white hovver bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">
                Beranda
              </a>
            </li>
            <li>
              <button id="dropdownprofileLink" data-dropdown-toggle="Profile" class="flex items-center justify-between w-full text-white hovver rounded md:p-0 md:w-auto">
                Profile
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="Profile" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Tentang Kami
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Mutu Layanan
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Pencapaian Kami
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Profile Manajemen
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Mitra Kami
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button id="dropdownlayananLink" data-dropdown-toggle="Layanan" class="flex items-center justify-between w-full text-white hovver rounded md:p-0 md:w-auto">
                Layanan
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="Layanan" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Rawat Jalan
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Rawat Inap
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Penunjang Medis
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Fasilitas Publik
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Medical Checkup
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Promo Kesehatan
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button id="dropdownCentreLink" data-dropdown-toggle="Centerofexcellence" class="flex items-center justify-between w-full text-white hovver rounded md:p-0 md:w-auto">
                Center Of Excellence
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="Centerofexcellence" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      OH-HI Occupational Health & Industrial Hygine
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Geriatri (Lava Senior)
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      NICU
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Kidney Center
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Cancer Center
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" class="block text-white hovver bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">
                Dokter Kami
              </a>
            </li>
            <li>
              <a href="#" class="block text-white hovver bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">
                Artikel
              </a>
            </li>
            <li>
              <button id="dropdownMediaLink" data-dropdown-toggle="Media" class="flex items-center justify-between w-full text-white hovver rounded md:p-0 md:w-auto">
                Media
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="Media" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-white hovver dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Video
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Berita
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" class="block text-white hovver bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:bg-transparent" aria-current="page">
                Layanan Pelanggan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbars;
