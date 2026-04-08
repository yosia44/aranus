import Link from "next/link";

export default function Home() {
  const jobs = [
    { id: 1, title: "Frontend Developer (React)" },
    { id: 2, title: "Frontend Developer (React)" },
    { id: 3, title: "Frontend Developer (React)" },
    { id: 4, title: "Frontend Developer (React)" },
  ];

  return (
    // Background Cream ala Warkop Polim
    <div className="flex flex-col min-h-screen bg-[#F5F2EA] font-sans text-[#3D2B1F]">
      
      {/* --- HEADER (Cokelat Tua dengan Navigasi Kotak) --- */}
      {/* Mengikuti struktur header dari gambar */}
      <header className="w-full bg-[#3D2B1F] shadow-md">
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between max-w-7xl">
          <div className="font-black text-2xl tracking-tighter text-[#F5F2EA] italic">
            LOWONGAN<span className="text-[#FF6B35]">POLIM</span>
          </div>

          {/* Tombol Navigasi Kotak sesuai referensi gambar */}
          <div className="flex items-center gap-2">
            {["HOME", "LOWONGAN", "PERUSAHAAN", "LOGIN"].map((item) => (
              <Link
                key={item}
                href="#"
                className="px-5 py-2 bg-[#F5F2EA]/10 border border-[#F5F2EA]/20 text-[#F5F2EA] text-[10px] font-black tracking-widest hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-all rounded"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* --- SEARCH BAR (Seksi Abu-abu/Cream Tua) --- */}
      {/* Mengikuti struktur layout bar pencarian */}
      <section className="w-full py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="w-full p-6 bg-[#E8E4D9] rounded-xl border-2 border-[#3D2B1F]/10 flex flex-col md:flex-row items-center gap-4">
            {/* Kotak Input Panjang */}
            <div className="flex-1 w-full p-4 bg-[#F5F2EA] border-2 border-[#3D2B1F]/10 rounded-lg font-bold text-sm">
              Cari Lowongan...
            </div>
            {/* Kotak Input Sedang */}
            <div className="w-full md:w-1/3 p-4 bg-[#F5F2EA] border-2 border-[#3D2B1F]/10 rounded-lg font-bold text-sm">
              Lokasi
            </div>
            {/* Tombol Go */}
            <div className="w-full md:w-[100px] p-4 bg-[#3D2B1F] text-[#F5F2EA] rounded-lg text-center font-black cursor-pointer hover:bg-[#FF6B35] transition">
              GO
            </div>
          </div>
        </div>
      </section>

      {/* --- DAFTAR LOWONGAN --- */}
      <main className="container mx-auto px-6 flex-1 max-w-7xl">
        {/* Teks Judul Oranye sesuai struktur */}
        <h1 className="text-2xl font-black text-[#FF6B35] italic uppercase tracking-tighter mb-10">
          Baru di tambahkan
        </h1>

        {/* Grid 2x2 sesuai referensi visual */}
        <section className="pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {jobs.map((job) => (
              <div 
                key={job.id} 
                className="p-10 bg-white rounded-[2rem] border-2 border-[#3D2B1F]/5 shadow-sm hover:shadow-xl hover:border-[#FF6B35]/30 transition-all group relative overflow-hidden"
              >
                {/* Judul Pekerjaan */}
                <h3 className="text-xl font-black text-[#3D2B1F] text-center mb-12 uppercase tracking-tight">
                  {job.title}
                </h3>

                {/* Tombol Lamar Oranye di pojok kanan bawah */}
                <div className="flex justify-end">
                  <button className="px-8 py-3 bg-[#FF6B35] text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#3D2B1F] transition-colors shadow-lg shadow-orange-950/20">
                    lamar sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- FOOTER (Pemanis Cokelat) --- */}
      <footer className="w-full bg-[#3D2B1F] py-10 px-6 text-center">
          <p className="text-[10px] font-black tracking-[0.4em] text-[#F5F2EA]/40 uppercase">
            © 2026 KARYA POLIM • Warung Lowongan Terpercaya
          </p>
      </footer>
    </div>
  );
}