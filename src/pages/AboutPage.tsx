import { useEffect, useRef } from "react";
import LayoutGroup from "../layout/Layout";

const stats = [
  { value: "2019", label: "Quruluş ili" },
  { value: "5000+", label: "Məmnun Müştəri" },
  { value: "10K+", label: "Unikal Ətirlər" },
  { value: "15+", label: "Dünya Brendi" },
];

const values = [
  {
    icon: "❤️",
    title: "Müştəri Məmnuniyyəti",
    desc: "Hər bir müştərimiz bizim üçün xüsusidir və onların xoşbəxtliyi prioritetimizdir",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: "🏆",
    title: "Yüksək Keyfiyyət",
    desc: "Premium və təbii maddələrdən istifadə edərək ən yüksək standartları təmin edirik",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: "⚡",
    title: "İnnovasiya",
    desc: "Ən son texnologiya və kreativ yanaşma ilə unikal təcrübə yaradırıq",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: "👥",
    title: "Komanda İşi",
    desc: "Peşəkar komandamız sizə ən yaxşı xidməti göstərmək üçün çalışır",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
];

const timeline = [
  { year: "2019", event: "ZANA-nın əsası qoyuldu", side: "right" },
  { year: "2020", event: "İlk 500 müştəriyə çatdıq", side: "left" },
  { year: "2021", event: "Onlayn platforma açıldı", side: "right" },
  { year: "2022", event: "15+ dünya brendi ilə əməkdaşlıq", side: "left" },
  { year: "2023", event: "10.000+ unikal ətir yaradıldı", side: "right" },
  { year: "2024", event: "Beynəlxalq bazar genişlənməsi", side: "left" },
];

const team = [
  { name: "Zana Əliyeva", role: "Baş Perfumer", emoji: "👩‍🔬" },
  { name: "Rauf Həsənov", role: "Kreativ Direktor", emoji: "🎨" },
  { name: "Leyla Məmmədova", role: "Müştəri Xidmətləri", emoji: "💼" },
  { name: "Kamran Nəsirov", role: "Texnologiya", emoji: "💻" },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
   <LayoutGroup>
     <div className="min-h-screen bg-white">
      <style>{`
        .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        .fade-in-delay-1 { transition-delay: 0.1s; }
        .fade-in-delay-2 { transition-delay: 0.2s; }
        .fade-in-delay-3 { transition-delay: 0.3s; }
        .fade-in-delay-4 { transition-delay: 0.4s; }
        .timeline-line { background: linear-gradient(to bottom, #f97316, #ea580c); }
      `}</style>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white pt-24 pb-20"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-40 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100 rounded-full opacity-30 translate-y-1/2 -translate-x-1/4" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            ✨ Haqqımızda
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Perfumer{" "}
            <span className="text-orange-500">hekayəsi</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            2019-cu ildən bəri biz insanlara öz unikal ətir təcrübələrini yaratmaq imkanı veririk.
            ZANA ilə hər kəs özünü ifadə edə və fərqlənə bilər.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`fade-in fade-in-delay-${i + 1} bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-shadow`}
            >
              <div className="text-3xl font-bold text-orange-500 mb-1">{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              ✨ Bizim Hekayəmiz
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Hər ətir bir <span className="text-orange-500">hekayədir</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              ZANA, ətir sənətini demokratikləşdirmək üçün yaradılmışdır. Biz inanırıq ki, hər bir insan
              özünə məxsus, unikal bir ətirə layiqdir — birinin kəşf etdiyi deyil, özünün yaratdığı.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Peşəkar perfumerlərimiz sizinlə birlikdə çalışaraq xarakter, yaddaş və emosiyalarınızı
              bir şüşəyə sığışdırır. Nəticədə yalnız sizin olan bir ətir əldə edirsiniz.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Dünyada 15+ premium maddə təchizatçısı ilə əməkdaşlıq edərək ən yüksək keyfiyyəti
              əlçatan qiymətlərlə təqdim edirik.
            </p>
          </div>
          <div className="fade-in fade-in-delay-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-100 rounded-3xl rotate-3 opacity-60" />
              <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-10 text-center">
                <div className="text-8xl mb-4">🌸</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ZANA</h3>
                <p className="text-gray-500 text-sm">Azərbaycan sözü — "qadın ruhu"</p>
                <div className="mt-6 flex justify-center gap-2 flex-wrap">
                  {["Çiçəklər", "Odunlu", "Şərq", "Sitrus", "Dəniz"].map((t) => (
                    <span key={t} className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 mb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-gray-900">Dəyərlərimiz</h2>
            <p className="text-gray-500 mt-3">Hər qərarımızın arxasındakı prinsiplər</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className={`fade-in fade-in-delay-${i + 1} bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center text-xl mb-4`}>
                  {v.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold text-gray-900">Bizim Yolumuz</h2>
          <p className="text-gray-500 mt-3">İlk addımdan bu günə qədər</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 to-orange-500 -translate-x-1/2" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`fade-in fade-in-delay-${(i % 4) + 1} flex items-center gap-6 ${
                  item.side === "right" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${item.side === "right" ? "text-right" : "text-left"}`}>
                  <div className="inline-block bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-4">
                    <div className="text-2xl font-bold text-orange-500">{item.year}</div>
                    <div className="text-sm text-gray-600 mt-1">{item.event}</div>
                  </div>
                </div>
                <div className="relative z-10 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-md flex-shrink-0" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-20 mb-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-gray-900">Komandamız</h2>
            <p className="text-gray-500 mt-3">Sizin üçün çalışan peşəkarlar</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div
                key={i}
                className={`fade-in fade-in-delay-${i + 1} bg-white rounded-2xl p-6 text-center shadow-sm border border-orange-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {m.emoji}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{m.name}</h3>
                <p className="text-xs text-orange-500 mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white fade-in">
          <h2 className="text-3xl font-bold mb-4">Öz ətir hekayənizi yaradın</h2>
          <p className="text-orange-100 mb-8">Bizimlə birlikdə unikal, şəxsi və unudulmaz ətir təcrübəsi yaşayın</p>
          <a
            href="/create"
            className="inline-flex items-center gap-2 bg-white text-orange-500 font-semibold px-8 py-3 rounded-full hover:bg-orange-50 transition-colors"
          >
            İndi Başlayın ✨
          </a>
        </div>
      </section>
    </div>
   </LayoutGroup>
  );
}