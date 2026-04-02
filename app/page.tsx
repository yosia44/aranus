import Image from "next/image";

// Data Dummy untuk Lowongan Kerja
const dummyJobs = [
  { id: 1, title: "Frontend Developer (React)", company: "Tech Solusindo", location: "Jakarta Selatan", salary: "Rp 8-12 Juta", logo: "/globe.svg" },
  { id: 2, title: "Digital Marketing Specialist", company: "Cemerlang Jaya", location: "Surabaya", salary: "Rp 6-9 Juta", logo: "/globe.svg" },
  { id: 3, title: "Human Resources Manager", company: "Global Corp", location: "Medan", salary: "Rp 15-20 Juta", logo: "/globe.svg" },
  { id: 4, title: "Back-end Engineer (Golang)", company: "Inovasi Digital", location: "Bandung", salary: "Rp 10-15 Juta", logo: "/globe.svg" },
  { id: 5, title: "Social Media Admin", company: "Fashionista", location: "Jakarta Barat", salary: "Rp 4-6 Juta", logo: "/globe.svg" },
  { id: 6, title: "Data Analyst", company: "DataCrunchers", location: "Tangerang", salary: "Rp 9-13 Juta", logo: "/globe.svg" },
  { id: 7, title: "UI/UX Designer", company: "Creative Hub", location: "Jakarta Pusat", salary: "Rp 7-11 Juta", logo: "/globe.svg" },
  { id: 8, title: "Finance Staff", company: "Abadi Jaya Mandiri", location: "Semarang", salary: "Rp 5-8 Juta", logo: "/globe.svg" },
  { id: 9, title: "DevOps Engineer", company: "CloudNets", location: "Remote", salary: "Rp 12-18 Juta", logo: "/globe.svg" },
];

// Data Dummy untuk Kategori Unggulan
const dummyCategories = [
  { id: 1, name: "Informasi Teknologi (IT)", count: "1,250 Lowongan", icon: "/globe.svg" },
  { id: 2, name: "Pemasaran & Penjualan", count: "890 Lowongan", icon: "/globe.svg" },
  { id: 3, name: "Administrasi & HR", count: "720 Lowongan", icon: "/globe.svg" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans text-zinc-900">

      {/* --- HEADER (Navigasi Manual) --- */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2">
            <Image
              src="/globe.svg"
              alt="JobStreet Logo"
              width={140}
              height={35}
              priority
              className="object-contain"
            />
          </div>

          <div className="flex items-center gap-2">
            <a href="/job" className="px-4 py-2 rounded text-sm font-medium hover:bg-white/10 transition">Cari Lowongan</a>
            <a href="/profile" className="px-4 py-2 rounded text-sm font-medium hover:bg-white/10 transition">Profil Saya</a>
            <a href="/company" className="px-4 py-2 rounded text-sm font-medium hover:bg-white/10 transition">Perusahaan</a>
            <a href="/help" className="px-4 py-2 rounded text-sm font-medium hover:bg-white/10 transition">Bantuan</a>
            <a href="/auth" className="ml-2 px-5 py-2 rounded-full bg-white text-blue-600 text-sm font-semibold hover:bg-zinc-100 transition shadow">Login / Daftar</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 flex-1 max-w-7xl">
        
        {/* --- 1. SEARCH BAR --- */}
        <section className="py-12">
          <div className="w-full p-6 bg-white rounded-lg shadow-lg border border-zinc-100 flex items-center gap-4">
            <div className="flex-1">
              <input type="text" placeholder="Cari posisi, perusahaan, atau keahlian..." className="w-full p-4 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none transition" />
            </div>
            <div className="w-1/3">
              <input type="text" placeholder="Lokasi (misal: Jakarta)" className="w-full p-4 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none transition" />
            </div>
            <button className="h-full px-10 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition shadow-md">Cari Kerja</button>
          </div>
        </section>

        {/* --- TEMPAT INPUT DATA JOBDESK --- */}
        <section className="mb-10 p-8 bg-white rounded-xl shadow-md border border-zinc-200">
          <h2 className="text-xl font-bold mb-4 text-zinc-800">Input Deskripsi Pekerjaan (Jobdesk)</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-zinc-600 mb-1">Judul Posisi</label>
              <input type="text" placeholder="Contoh: Senior Web Developer" className="w-full p-3 border border-zinc-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-600 mb-1">Tanggung Jawab Pekerjaan</label>
              <textarea 
                rows={6} 
                placeholder="Sebutkan poin-poin jobdesk di sini..." 
                className="w-full p-4 border border-zinc-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button className="w-fit px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
              Simpan & Publikasikan
            </button>
          </div>
        </section>

        {/* --- 2. DAFTAR LOWONGAN (GRID 3x3) --- */}
        <section className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyJobs.map((job) => (
              <div key={job.id} className="p-6 bg-white rounded-xl border border-zinc-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-zinc-100 rounded-lg border border-zinc-200 flex items-center justify-center overflow-hidden p-2">
                     <Image src={job.logo} alt="logo" width={60} height={60} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-700 group-hover:text-blue-600 transition truncate">{job.title}</h3>
                    <p className="text-zinc-700 font-medium truncate">{job.company}</p>
                    <p className="text-sm text-zinc-500">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm mt-auto border-t border-zinc-100 pt-4">
                  <span className="font-semibold text-green-700">{job.salary}</span>
                  <span className="text-zinc-400">1 hari yang lalu</span>
                </div>
                <button className="w-full mt-2 py-2.5 bg-zinc-100 text-blue-700 rounded-lg text-sm font-semibold group-hover:bg-blue-600 group-hover:text-white transition">
                    Lamar Sekarang
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. KATEGORI UNGGULAN --- */}
        <section className="py-16 mt-12 bg-blue-50/50 rounded-2xl border border-blue-100 px-10 text-center">
            <h2 className="text-3xl font-bold mb-10 text-zinc-800">Jelajahi Berdasarkan Kategori Unggulan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dummyCategories.map((cat) => (
                <div key={cat.id} className="p-8 bg-white rounded-2xl border border-zinc-100 shadow hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center gap-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center p-5">
                     <Image src={cat.icon} alt="icon" width={60} height={60} className="object-contain" />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900">{cat.name}</h4>
                  <p className="text-sm text-zinc-600 bg-zinc-100 px-4 py-1 rounded-full font-medium">{cat.count}</p>
                  <a href="#" className="text-sm text-blue-600 font-semibold hover:underline">Lihat Semua →</a>
                </div>
              ))}
            </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full mt-20 bg-white border-t border-zinc-100 text-zinc-600 py-12 px-6">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-2 flex flex-col gap-4">
                <Image src="/globe.svg" alt="Logo" width={140} height={35}/>
                <p className="text-sm">Platform pencarian kerja terkemuka menghubungkan jutaan pencari kerja dengan perusahaan impian.</p>
            </div>
            <div>
                <h5 className="font-bold text-zinc-800 mb-4">Pencari Kerja</h5>
                <ul className="text-sm space-y-2">
                    <li><a href="#" className="hover:text-blue-600">Cari Kerja</a></li>
                    <li><a href="#" className="hover:text-blue-600">Profil</a></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold text-zinc-800 mb-4">Perusahaan</h5>
                <ul className="text-sm space-y-2">
                    <li><a href="#" className="hover:text-blue-600">Pasang Iklan</a></li>
                    <li><a href="#" className="hover:text-blue-600">Pusat HR</a></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold text-zinc-800 mb-4">Bantuan</h5>
                <ul className="text-sm space-y-2">
                    <li><a href="#" className="hover:text-blue-600">Tentang Kami</a></li>
                    <li><a href="#" className="hover:text-blue-600">Kontak</a></li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto max-w-7xl mt-10 text-center text-xs border-t border-zinc-100 pt-6">
            © 2026 Portal Kerja. All rights reserved.
        </div>
      </footer>
    </div>
  );
}