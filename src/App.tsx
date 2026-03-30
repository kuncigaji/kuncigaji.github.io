import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  AlertCircle,
  Download,
  PieChart,
  Smile,
  Briefcase,
  Compass,
  Bell,
  TrendingUp,
  Heart,
  Lock
} from 'lucide-react';

// Asset Imports
import logoIcon from './assets/icon.png';
import heroImage from './assets/hero.png';
import playIcon from './assets/google-play-icon.svg';
import imgDashboard from './assets/apps/dashboard.jpg';
import imgPerformance from './assets/apps/performance.jpg';
import imgScore from './assets/apps/score.jpg';
import imgSetting from './assets/apps/setting.jpg';

// --- Reusable Fade-In Animation Component ---
const FadeIn = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${className}`}
    >
      {children}
    </div>
  );
};

// --- Mobile CTA Sticky component ---
const MobileStickyCTA = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
    <a
      href="#mulai"
      className="flex w-full items-center justify-center gap-3 py-3 px-6 rounded-full font-bold text-white bg-pink-500 shadow-[0_8px_20px_-6px_rgba(236,72,153,0.5)] active:scale-95 transition-all"
    >
      <img src={playIcon} alt="Play" className="w-5 h-5" />
      Mulai Sekarang
    </a>
  </div>
);

// --- Sections ---

const Header = () => (
  <header className="absolute top-0 w-full py-6 z-10 px-6">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <a href="#" className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm">
        <img src={logoIcon} alt="KunciGaji Logo" className="w-9 h-9 rounded-xl shadow-sm" />
        KunciGaji
      </a>
      <nav className="hidden md:block">
        <a
          href="#mulai"
          className="inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-full font-semibold text-white bg-pink-500 hover:bg-pink-600 shadow-[0_4px_14px_rgba(236,72,153,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(236,72,153,0.5)] transition-all"
        >
          <img src={playIcon} alt="Play" className="w-4 h-4" />
          Mulai Sekarang
        </a>
      </nav>
    </div>
  </header>
);

const Hero = () => {
  return (
    <section className="relative pt-44 pb-32 px-6 bg-[radial-gradient(120%_120%_at_50%_0%,#FCE7F3_0%,#F1F5F9_60%)] flex flex-col items-center overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10 w-full">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6 drop-shadow-sm">
            Gaji Masuk. <br className="hidden md:block" /> Uang Terkontrol.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            30 menit pertama setelah gajian menentukan kondisi finansialmu bulan ini.
          </p>
          <a
            href="#mulai"
            className="inline-flex items-center gap-3 py-4 px-8 rounded-full font-bold text-lg text-white bg-pink-500 hover:bg-pink-600 shadow-[0_8px_20px_-6px_rgba(236,72,153,0.5)] hover:-translate-y-1 hover:shadow-[0_12px_25px_-5px_rgba(236,72,153,0.6)] transition-all"
          >
            <img src={playIcon} alt="Google Play" className="w-6 h-6" />
            <span>Mulai Sekarang</span>
          </a>
        </FadeIn>

        {/* Hero App Image Asset */}
        <FadeIn delay={200} className="mt-16 w-full max-w-2xl mx-auto relative px-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-pink-300 to-pink-50 rounded-full blur-[80px] opacity-40 -z-10 animate-pulse transition-opacity duration-1000" />
          <img
            src={heroImage}
            alt="KunciGaji App Showcase"
            className="w-full h-auto drop-shadow-[0_25px_40px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-transform duration-700 ease-out rounded-[2rem] md:rounded-[3rem] object-contain border-[8px] md:border-[12px] border-white max-h-[600px] bg-white mx-auto"
          />
        </FadeIn>

      </div>
    </section>
  );
};

const Problem = () => (
  <section className="py-24 px-6 text-center">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <div className="w-16 h-16 hidden rounded-2xl mx-auto flex items-center justify-center text-slate-500 mb-6 bg-slate-100">
          <AlertCircle size={36} strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight drop-shadow-sm">
          Masalahnya <span className='text-pink-500'>Bukan</span> di Gaji
        </h2>
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Gaji seringkali sekadar "numpang lewat". Bukan karena penghasilanmu kurang,
          tapi karena kamu tidak punya sistem otomatis yang membagi kemana uang itu harus pergi.
          Penyakit utama kita adalah menabung dari sisa, bukan menyisihkan di awal.
        </p>
      </FadeIn>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-24 px-6 text-center bg-white border-y border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight drop-shadow-sm">
          Bukan Nambah Gaji. <br />Tapi <span className='text-pink-500'>Sistem</span>.
        </h2>
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
          KunciGaji membantu kamu membangun sistem personal yang tenang.
          Begitu notifikasi transfer gaji masuk, kamu sudah tahu apa yang harus dilakukan.
          Tidak ada lagi rasa bersalah atau kecemasan di akhir bulan.
        </p>
      </FadeIn>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: <Download size={28} />,
      title: "1. Catat Gaji",
      desc: "Masukkan total pemasukan begitu gaji masuk. Mulai dari angka nyata, bukan asumsi."
    },
    {
      icon: <PieChart size={28} />,
      title: "2. Bagi & Kunci",
      desc: "Bagi uang ke kebutuhan, masa depan, dan kesenangan — lalu kunci di 30 menit pertama."
    },
    {
      icon: <Smile size={28} />,
      title: "3. Nikmati Tanpa Beban",
      desc: "Sisa uang adalah “guilt-free money”. Gunakan tanpa rasa khawatir."
    }
  ];

  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight drop-shadow-sm">
            Cara Kerja dalam 3 Langkah
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Ritual sederhana yang kamu lakukan setiap setelah gajian.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="bg-white p-10 h-full rounded-[32px] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.03),0_2px_4px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 border border-slate-100">
                <div className="w-16 h-16 bg-pink-50 text-pink-500 rounded-2xl flex flex-col items-center justify-center mb-8">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-[1.05rem]">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const fts = [
    { icon: <Briefcase size={28} className="text-pink-500" />, title: "Semua Uang Punya Tujuan", desc: "Tidak ada lagi uang “hilang” tanpa arah." },
    { icon: <Compass size={28} className="text-pink-500" />, title: "Prioritas Jadi Jelas", desc: "Kamu tahu mana yang harus didahulukan, tanpa mikir berulang." },
    { icon: <Bell size={28} className="text-pink-500" />, title: "Tidak Pernah Telat Bayar", desc: "Semua sudah diingatkan sebelum jadi masalah." },
    { icon: <TrendingUp size={28} className="text-pink-500" />, title: "Lihat Perubahan Nyata", desc: "Kamu bisa melihat progres dari bulan ke bulan." },
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-[85rem] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text & Features List */}
        <div className="lg:col-span-5">
          <FadeIn className="mb-12 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight drop-shadow-sm">
              Sistem yang Menjaga Uangmu Tetap Terkontrol
            </h2>
            <p className="text-lg text-slate-500">
              Dari gajian sampai akhir bulan, semuanya sudah punya arah.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {fts.map((f, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="flex gap-6 p-6 md:p-8 bg-slate-50 hover:bg-pink-50/50 rounded-[28px] transition-colors duration-300 items-start border border-slate-100/50 hover:border-pink-100 group">
                  <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300 text-pink-500 flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h4>
                    <p className="text-slate-500">{f.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Right Column: App Screenshots Composition (3-Finger Fan) */}
        <div className="lg:col-span-7 relative h-[650px] hidden lg:block perspective-1000">
          <div className="absolute inset-0 bg-pink-100/40 rounded-full blur-[120px] opacity-70"></div>

          {/* Left Finger */}
          <FadeIn delay={100} className="absolute left-2 xl:left-8 top-20 z-10 w-64 -rotate-12 hover:z-40 hover:-translate-y-6 hover:-rotate-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <img
              src={imgPerformance}
              alt="Performance KunciGaji"
              className="rounded-[2.5rem] border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full block bg-white opacity-95 hover:opacity-100"
            />
          </FadeIn>

          {/* Right Finger */}
          <FadeIn delay={400} className="absolute right-2 xl:right-8 top-20 z-20 w-64 rotate-12 hover:z-40 hover:-translate-y-6 hover:rotate-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <img
              src={imgSetting}
              alt="Settings KunciGaji"
              className="rounded-[2.5rem] border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full block bg-white opacity-95 hover:opacity-100"
            />
          </FadeIn>

          {/* Center Finger (Highest) */}
          <FadeIn delay={200} className="absolute left-1/2 -translate-x-1/2 top-0 z-30 w-64 hover:-translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <img
              src={imgDashboard}
              alt="Dashboard KunciGaji"
              className="rounded-[2.5rem] border-[8px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.2)] w-full block bg-white"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const PremiumSection = () => (
  <section className="py-32 px-6 bg-slate-100 text-center hidden">
    <div className="max-w-5xl mx-auto">
      <FadeIn className="mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight drop-shadow-sm">
          Insight Lebih Dalam
        </h2>
        <p className="text-lg text-slate-500 max-w-xl mx-auto">
          Dapatkan analisis spesifik untuk kebiasaan belanja dan masa depan finansialmu menggunakan algoritma canggih.
        </p>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-md border border-slate-200/60 max-w-4xl mx-auto">

          {/* Locked App Previews Background */}
          <div className="grid sm:grid-cols-2 gap-8 p-8 md:p-12 blur-[10px] opacity-60 pointer-events-none select-none">
            <img
              src={imgPerformance}
              alt="Performance Feature"
              className="w-full rounded-[2rem] shadow-sm transform -rotate-2 scale-105"
            />
            <img
              src={imgScore}
              alt="Score Feature"
              className="w-full rounded-[2rem] shadow-sm transform translate-y-12 rotate-2 scale-105"
            />
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-pink-50/95 via-white/80 to-white/30 flex flex-col items-center justify-center p-8 z-10 backdrop-blur-[2px]">
            <div className="bg-pink-100 p-4 rounded-full mb-6 text-pink-500 shadow-sm animate-bounce">
              <Lock size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 drop-shadow-sm tracking-tight text-center">
              Unlock Fitur Premium
            </h3>
            <button className="py-4 px-10 rounded-full font-bold text-lg text-white bg-slate-900 hover:bg-black shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              Lihat Paket Premium <ArrowRight size={20} />
            </button>
            <p className="mt-6 text-sm font-semibold text-slate-500 max-w-xs text-center">
              Hanya Rp15.000 / Bulan. Batalkan Kapan Saja.
            </p>
          </div>

        </div>
      </FadeIn>
    </div>
  </section>
);

const EmotionalSection = () => (
  <section className="py-32 px-6 bg-pink-50 text-center relative overflow-hidden">
    {/* Decorative blur elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 blur-[80px] rounded-full pointer-events-none -z-10" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

    <div className="max-w-3xl mx-auto z-10">
      <FadeIn>
        <div className="w-24 h-24 bg-white/80 backdrop-blur-sm shadow-sm rounded-[2rem] mx-auto flex items-center justify-center mb-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500 border border-pink-100">
          <Heart className="text-pink-500 fill-pink-500/20" size={48} strokeWidth={1.5} />
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight drop-shadow-sm">
          Bukan soal uang. <br className="hidden sm:block" /> Tapi <span className="text-pink-500">kebiasaan.</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
          KunciGaji tidak dibuat untuk merantai kamu dari kesenangan hidup.
          Aplikasi ini dibangun agar kamu bisa tidur nyenyak di malam hari, yakin bahwa tagihan bulan depan sudah terurus.
        </p>
      </FadeIn>
    </div>
  </section>
);

const FinalCta = () => (
  <section id="mulai" className="py-40 px-6 bg-white text-center">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight drop-shadow-sm">
          Mulai dari gajian berikutnya
        </h2>
        <p className="text-xl text-slate-500 mb-12 max-w-lg mx-auto leading-relaxed">
          Ubah kondisimu mulai hari ini. Bangun sistem otomatis yang menenangkan pikiran.
        </p>
        <a
          href="#"
          className="flex items-center justify-center gap-3 w-full max-w-md mx-auto py-5 px-8 rounded-full font-bold text-xl md:text-2xl text-white bg-pink-500 hover:bg-pink-600 shadow-[0_8px_25px_-4px_rgba(236,72,153,0.5)] hover:-translate-y-1.5 hover:shadow-[0_15px_30px_-5px_rgba(236,72,153,0.6)] transition-all active:scale-95"
        >
          <img src={playIcon} alt="Play" className="w-6 h-6 opacity-90" />
          <span>Mulai Gunakan Sistem</span>
        </a>
      </FadeIn>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-50 py-16 text-center border-t border-slate-200 pb-28 md:pb-16">
    <div className="max-w-4xl mx-auto px-6">
      <a href="#" className="flex justify-center items-center gap-2 text-xl font-bold tracking-tight text-slate-900 mb-8 opacity-60 hover:opacity-100 transition-opacity">
        <img src={logoIcon} alt="KunciGaji Logo" className="w-12 h-12 grayscale opacity-80" />
        KunciGaji
      </a>
      <p className="text-slate-400 font-medium">&copy; 2026 KunciGaji App. All rights reserved.</p>
      <div className="mt-4">
        <a href="#privacy-policy" className="text-sm font-medium text-slate-400 hover:text-pink-500 transition-colors">Kebijakan Privasi</a>
      </div>
    </div>
  </footer>
);

// --- Privacy Policy Page ---
const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-pink-500 selection:text-white flex flex-col">
      <header className="w-full py-6 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm">
            <img src={logoIcon} alt="KunciGaji Logo" className="w-9 h-9 rounded-xl shadow-sm" />
            KunciGaji
          </a>
          <a href="#" className="text-pink-500 font-semibold hover:underline bg-pink-50 py-2.5 px-6 rounded-full text-sm hover:bg-pink-100 transition-colors">
            Kembali
          </a>
        </div>
      </header>

      <main className="flex-grow py-16 px-6">
        <section className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[24px] shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-8 pb-6 border-b border-slate-100">
            Kebijakan Privasi
          </h1>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>Aplikasi ini tidak mengumpulkan, menyimpan, atau membagikan data pribadi pengguna ke server mana pun.</p>
            <p>Seluruh data finansial yang dimasukkan pengguna disimpan secara lokal di perangkat pengguna menggunakan penyimpanan internal aplikasi.</p>
            <p>Aplikasi ini tidak menggunakan akun, tidak melakukan pelacakan, dan tidak mengirim data ke pihak ketiga.</p>
            <p>Jika pengguna memilih untuk menghapus data melalui fitur Reset Data, seluruh data akan dihapus dari perangkat.</p>
            <p className="pt-6 font-bold text-slate-900">Tanggal berlaku: Agustus 2026</p>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-12 text-center border-t border-slate-200 pb-16">
        <p className="text-slate-400 font-medium">&copy; 2026 KunciGaji App. All rights reserved.</p>
      </footer>
    </div>
  );
};

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (hash === '#privacy-policy') {
    return <PrivacyPolicyPage />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-pink-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <PremiumSection />
        <EmotionalSection />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
