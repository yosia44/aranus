import Image from "next/image";

// Data Dummy
const dummyJobs = [
  { id: 1, title: "Frontend Developer (React)", company: "Tech Solusindo", location: "Jakarta Selatan", salary: "Rp 8-12 Juta", logo: "/globe.svg" },
  { id: 2, title: "Digital Marketing Specialist", company: "Cemerlang Jaya", location: "Surabaya", salary: "Rp 6-9 Juta", logo: "/globe.svg" },
  { id: 3, title: "Human Resources Manager", company: "Global Corp", location: "Medan", salary: "Rp 15-20 Juta", logo: "/globe.svg" },
  { id: 4, title: "Back-end Engineer (Golang)", company: "Inovasi Digital", location: "Bandung", salary: "Rp 10-15 Juta", logo: "/globe.svg" },
  { id: 5, title: "Social Media Admin", company: "Fashionista", location: "Jakarta Barat", salary: "Rp 4-6 Juta", logo: "/globe.svg" },
  { id: 6, title: "Data Analyst", company: "DataCrunchers", location: "Tangerang", salary: "Rp 9-13 Juta", logo: "/globe.svg" },
];

const dummyCategories = [
  { id: 1, name: "Informasi Teknologi (IT)", count: "1,250 Lowongan", icon: "/globe.svg" },
  { id: 2, name: "Pemasaran & Penjualan", count: "890 Lowongan", icon: "/globe.svg" },
  { id: 3, name: "Administrasi & HR", count: "720 Lowongan", icon: "/globe.svg" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#DDEEF3] font-sans text-[#1A313C]">
      
      {/* --- HEADER --- */}
      <header className="w-full bg-[#1A313C] text-[#DDEEF3] shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2">
            <div className="bg-[#6096BA] p-1.5 rounded-lg">
                <Image src="/globe.svg" alt="Logo" width={24} height={24} className="brightness-200" />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase italic">LOKAK<span className="text-[#A3CEDC]">BEGAWE</span></span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="/job" className="px-4 py-2 text-sm font-bold hover:text-[#A3CEDC] transition">Cari Loker</a>
            <a href="/company" className="px-4 py-2 text-sm font-bold hover:text-[#A3CEDC] transition">Mitra Kami</a>
            
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
              <a href="/auth/user" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#DDEEF3] text-[#1A313C] text-xs font-black hover:bg-[#6096BA] hover:text-white transition group">
                <span className="opacity-70 group-hover:opacity-100">👤</span> LOGIN USER
              </a>
              <a href="/auth/company" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#6096BA] text-white text-xs font-black hover:bg-white hover:text-[#6096BA] transition group shadow-lg shadow-blue-900/20">
                <span className="brightness-200">🏢</span> LOGIN MITRA
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 flex-1 max-w-7xl">
        
        {/* --- 1. SEARCH BAR --- */}
        <section className="py-12">
          <div className="w-full p-2 bg-white rounded-2xl shadow-xl shadow-blue-900/5 border-2 border-[#1A313C]/10 flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 flex items-center gap-3 px-4">
              <span className="text-[#6096BA] font-bold text-xl">🔍</span>
              <input 
                type="text" 
                placeholder="Cari kerja apa hari ini?" 
                className="w-full p-4 bg-transparent outline-none font-medium placeholder:text-stone-400" 
              />
            </div>
            <div className="hidden md:block w-[1.5px] h-8 bg-stone-200"></div>
            <div className="flex-1 flex items-center gap-3 px-4">
              <span className="text-[#6096BA] font-bold text-xl">📍</span>
              <input 
                type="text" 
                placeholder="Lokasi" 
                className="w-full p-4 bg-transparent outline-none font-medium placeholder:text-stone-400" 
              />
            </div>
            <button className="w-full md:w-auto px-12 py-4 bg-[#6096BA] text-white rounded-xl font-black uppercase tracking-wider hover:bg-[#1A313C] transition-all active:scale-95 shadow-md">
              CARI
            </button>
          </div>
        </section>

        {/* --- 2. BANNER PROMOSI --- */}
        <section className="mb-16 relative overflow-hidden bg-[#1A313C] rounded-[3rem] p-12 text-[#DDEEF3] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-b-8 border-[#6096BA]">
          <div className="z-10 text-center md:text-left space-y-4">
            <span className="bg-[#6096BA] px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase text-white">Edisi 2026</span>
            <h2 className="text-5xl font-black italic tracking-tighter leading-none uppercase">
              Cari Kerja <br /> <span className="text-[#A3CEDC]">Gak Pake Ribet!</span>
            </h2>
            <p className="text-[#DDEEF3]/60 font-medium max-w-md">
              Ribuan lowongan dari perusahaan terverifikasi menunggumu. Gabung sekarang dan mulai karir impianmu.
            </p>
            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <button className="bg-[#DDEEF3] text-[#1A313C] px-8 py-3 rounded-xl font-black text-xs uppercase italic hover:bg-[#6096BA] hover:text-white transition">Daftar Sekarang</button>
              <button className="border-2 border-[#DDEEF3]/20 px-8 py-3 rounded-xl font-black text-xs uppercase italic hover:border-[#6096BA] transition">Pelajari Lebih</button>
            </div>
          </div>
          <div className="relative w-64 h-64 opacity-20 md:opacity-100">
             <Image src="/globe.svg" alt="Banner Illustration" fill className="object-contain brightness-200" />
          </div>
        </section>

        {/* --- 3. LOWONGAN TERBARU --- */}
        <section className="py-6">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <h3 className="text-3xl font-black uppercase italic tracking-tight">Lowongan <span className="text-[#6096BA]">Terbaru</span></h3>
              <div className="hidden md:block w-24 h-[2px] bg-[#1A313C]/10"></div>
            </div>
            <a href="/jobs" className="text-xs font-black uppercase border-b-2 border-[#6096BA] pb-1 hover:text-[#6096BA] transition">Lihat Semua Pekerjaan</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyJobs.map((job) => (
              <div key={job.id} className="p-8 bg-white rounded-[2.5rem] border-2 border-transparent hover:border-[#6096BA] shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#1A313C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-[#DDEEF3] rounded-2xl flex items-center justify-center border border-[#1A313C]/5 overflow-hidden p-2">
                     <Image src={job.logo} alt="logo" width={28} height={28} className="object-contain" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-[#1A313C] text-white px-3 py-1 rounded-full">New Update</span>
                </div>
                
                <h3 className="text-xl font-black text-[#1A313C] leading-tight mb-2 group-hover:text-[#6096BA] transition">{job.title}</h3>
                <p className="text-stone-400 font-bold text-xs mb-6 uppercase tracking-wide">{job.company}</p>
                
                <div className="mt-auto space-y-4 pt-6 border-t border-[#DDEEF3]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-[#6096BA]">{job.salary}</span>
                    <span className="text-[10px] font-black text-stone-400 uppercase tracking-tighter">📍 {job.location}</span>
                  </div>
                  <button className="w-full py-4 bg-[#DDEEF3] text-[#1A313C] rounded-xl text-xs font-black uppercase tracking-widest group-hover:bg-[#1A313C] group-hover:text-white transition-all italic">
                      LIHAT DETAIL
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- KATEGORI UNGGULAN --- */}
        <section className="py-20 mt-16 bg-white rounded-[3.5rem] px-10 text-center border-2 border-[#1A313C]/5">
            <h2 className="text-3xl font-black mb-12 text-[#1A313C] uppercase italic tracking-tighter">Telusuri <span className="text-[#6096BA]">Kategori</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dummyCategories.map((cat) => (
                <div key={cat.id} className="p-10 bg-[#DDEEF3] rounded-[2.5rem] flex flex-col items-center gap-4 group hover:bg-[#1A313C] transition-all duration-500 cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm group-hover:bg-[#6096BA] transition-colors">
                     <Image src={cat.icon} alt="icon" width={32} height={32} className="group-hover:brightness-200 transition-all" />
                  </div>
                  <h4 className="text-lg font-black text-[#1A313C] uppercase group-hover:text-white transition">{cat.name}</h4>
                  <p className="text-[10px] font-black text-[#6096BA] tracking-[0.2em]">{cat.count}</p>
                </div>
              ))}
            </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full mt-24 bg-[#1A313C] text-[#DDEEF3] py-20 px-6 border-t-8 border-[#6096BA]">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#DDEEF3]/10 pb-16">
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-10 h-10 bg-[#6096BA] rounded-xl flex items-center justify-center font-black text-white text-xl">K</div>
                  <span className="text-white font-black text-2xl uppercase italic tracking-tighter">LOKAK<span className="text-[#A3CEDC]">BEGAWE</span></span>
                </div>
                <p className="text-sm text-[#DDEEF3]/60 font-medium leading-relaxed">Platform pencarian kerja masa kini dengan tampilan clean dan minimalis.</p>
            </div>
            <div className="space-y-4">
                <h5 className="text-[#6096BA] font-black text-xs uppercase tracking-[0.2em] mb-6">Navigasi</h5>
                <a href="#" className="block text-sm font-bold hover:text-[#6096BA] transition">Tentang Kami</a>
                <a href="#" className="block text-sm font-bold hover:text-[#6096BA] transition">Pusat Bantuan</a>
            </div>
            <div className="space-y-4">
                <h5 className="text-[#6096BA] font-black text-xs uppercase tracking-[0.2em] mb-6">Sosial Media</h5>
                <a href="#" className="block text-sm font-bold hover:text-[#6096BA] transition italic">Instagram</a>
                <a href="#" className="block text-sm font-bold hover:text-[#6096BA] transition italic">LinkedIn</a>
            </div>
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#6096BA] opacity-10 rounded-full -mr-8 -mt-8"></div>
                <h5 className="text-white font-black text-sm mb-4 uppercase tracking-tighter">Newsletter</h5>
                <input type="email" placeholder="Email kamu..." className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-xs mb-3 outline-none focus:border-[#6096BA]" />
                <button className="w-full py-4 bg-[#6096BA] text-white font-black rounded-xl text-xs uppercase tracking-widest hover:bg-white hover:text-[#1A313C] transition-all italic shadow-xl shadow-blue-900/40">GABUNG</button>
            </div>
        </div>
        <div className="container mx-auto max-w-7xl mt-10 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#DDEEF3]/20">© 2026 LOKAK BEGAWE • KARYA POLIM RECRUITMENT</p>
        </div>
      </footer>
    </div>
  );
}