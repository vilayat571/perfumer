import { useState, useEffect } from "react";
import LayoutGroup from "../layout/Layout";

const zones = [
  {
    icon: "🏙️",
    zone: "Bakı şəhəri",
    time: "1–2 iş günü",
    price: "Pulsuz (50 AZN+)",
    priceSub: "3 AZN (50 AZN altı)",
    color: "from-orange-400 to-orange-500",
    badge: "bg-orange-100 text-orange-600",
  },
  {
    icon: "🏘️",
    zone: "Abşeron Rayonu",
    time: "1–3 iş günü",
    price: "5 AZN",
    priceSub: "Pulsuz (100 AZN+)",
    color: "from-amber-400 to-amber-500",
    badge: "bg-amber-100 text-amber-600",
  },
  {
    icon: "🌍",
    zone: "Azərbaycan Regionları",
    time: "3–5 iş günü",
    price: "8 AZN",
    priceSub: "Pulsuz (150 AZN+)",
    color: "from-rose-400 to-rose-500",
    badge: "bg-rose-100 text-rose-600",
  },
  {
    icon: "✈️",
    zone: "Beynəlxalq",
    time: "7–14 iş günü",
    price: "25 AZN+",
    priceSub: "Ölkəyə görə dəyişir",
    color: "from-purple-400 to-purple-500",
    badge: "bg-purple-100 text-purple-600",
  },
];

const carriers = [
  { name: "AzərPoçt", icon: "📮", desc: "Dövlət poçt xidməti" },
  { name: "Bravo Kuryer", icon: "🚴", desc: "Sürətli şəhərdaxili çatdırılma" },
  { name: "DHL", icon: "✈️", desc: "Beynəlxalq ekspres" },
  { name: "FedEx", icon: "📦", desc: "Dünyaya sürətli çatdırılma" },
];

const trackingSteps = [
  { icon: "📦", title: "Sifariş Verildi", desc: "Sifarişiniz qəbul edildi" },
  { icon: "🔨", title: "Hazırlanır", desc: "Ətiriniz hazırlanır" },
  { icon: "🏷️", title: "Qablaşdırıldı", desc: "Göndərilməyə hazırdır" },
  { icon: "🚚", title: "Yola Düşdü", desc: "Kuryer sizə doğru gedir" },
  { icon: "✅", title: "Çatdırıldı", desc: "Ətiriniz əlinizə çatdı" },
];

const faqs = [
  {
    q: "Sifarişimi necə izləyə bilərəm?",
    a: "Sifariş təsdiq e-poçtunda olan izləmə kodu ilə sifariş səhifəmizdən və ya kuryer şirkətinin saytından sifarişinizi izləyə bilərsiniz.",
  },
  {
    q: "Evdə olmadıqda nə olur?",
    a: "Kuryer ilə əlaqə saxlanır. Evdə olmadığınız halda qonşuya buraxmaq, ya da yenidən çatdırılma təyin etmək mümkündür.",
  },
  {
    q: "Çatdırılma zamanı zədə olarsa?",
    a: "Çatdırılma zamanı baş verən hər hansı zədə üçün biz tam məsuliyyət daşıyırıq. Bizimlə 24 saat ərzində əlaqə saxlayın.",
  },
  {
    q: "Ekspres çatdırılma mümkündürmü?",
    a: "Bakı üçün eyni günlük çatdırılma (sabaha qədər sifarişlər üçün 09:00-a qədər sifariş verin) əlavə 10 AZN ödəməklə mümkündür.",
  },
];

export default function DeliveryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [trackCode, setTrackCode] = useState("");
  const [tracking, setTracking] = useState(false);
  const [trackResult, setTrackResult] = useState<number | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleTrack = () => {
    if (!trackCode.trim()) return;
    setTracking(true);
    setTimeout(() => {
      setTracking(false);
      setTrackResult(3); // simulate "yola düşdü" step
    }, 1400);
  };

  return (
 <LayoutGroup>
     <div className="min-h-screen bg-white">
      <style>{`
        .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            🚚 Çatdırılma
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Çatdırılma <span className="text-orange-500">Məlumatları</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Sifarişinizi tez və etibarlı şəkildə çatdırırıq — Bakıdan dünyaya
          </p>
        </div>
      </section>

      {/* Order tracker */}
      <section className="max-w-3xl mx-auto px-6 -mt-4 mb-20">
        <div className="fade-in bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">📦 Sifariş İzləyin</h3>
          <div className="flex gap-3">
            <input
              type="text"
              value={trackCode}
              onChange={(e) => setTrackCode(e.target.value)}
              placeholder="Sifariş nömrəsini daxil edin (məs: PF-2025-1234)"
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
            />
            <button
              onClick={handleTrack}
              disabled={tracking}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm disabled:bg-orange-300 flex items-center gap-2"
            >
              {tracking ? (
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : "İzlə"}
            </button>
          </div>

          {trackResult !== null && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-700">Sifariş: <span className="text-orange-500">{trackCode}</span></p>
                <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">Yolda</span>
              </div>
              <div className="flex items-center gap-1">
                {trackingSteps.map((step, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mb-1 transition-all ${
                      i <= trackResult
                        ? "bg-orange-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-400"
                    }`}>
                      {i <= trackResult ? "✓" : step.icon}
                    </div>
                    <p className={`text-[10px] text-center leading-tight ${i <= trackResult ? "text-orange-500 font-medium" : "text-gray-400"}`}>
                      {step.title}
                    </p>
                    {i < trackingSteps.length - 1 && (
                      <div className={`hidden sm:block absolute`} />
                    )}
                  </div>
                ))}
              </div>
              <div className={`mt-3 h-1.5 bg-gray-100 rounded-full overflow-hidden`}>
                <div
                  className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-700"
                  style={{ width: `${((trackResult + 1) / trackingSteps.length) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Zones */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="text-center mb-10 fade-in">
          <h2 className="text-3xl font-bold text-gray-900">Çatdırılma Zonaları</h2>
          <p className="text-gray-500 mt-2">Bölgənizə görə müddət və qiymət</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {zones.map((z, i) => (
            <div
              key={i}
              className="fade-in group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${z.color} p-5 text-white`}>
                <div className="text-3xl mb-2">{z.icon}</div>
                <h3 className="font-bold text-sm">{z.zone}</h3>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-400 text-xs">⏱</span>
                  <span className="font-semibold text-gray-900 text-sm">{z.time}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="font-bold text-gray-900 text-sm">{z.price}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{z.priceSub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Carriers */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 fade-in">
            <h2 className="text-3xl font-bold text-gray-900">Kuryer Tərəfdaşlarımız</h2>
            <p className="text-gray-500 mt-2">Etibarlı kuryer şirkətləri ilə əməkdaşlıq edirik</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {carriers.map((c, i) => (
              <div key={i} className="fade-in bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm">{c.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important notes */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="fade-in text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Vacib Məlumatlar</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: "📅", title: "Sifariş Kəsmə Saatı", desc: "Saat 14:00-a qədər verilən sifarişlər eyni gün emal edilir. Sonra verilən sifarişlər növbəti iş gününə keçir.", color: "bg-blue-50 border-blue-100" },
            { icon: "🎁", title: "Hədiyyə Qablaşdırması", desc: "Hədiyyə qablaşdırması seçimi zamanı sifarişiniz xüsusi qutu və personal card ilə hazırlanır. +5 AZN.", color: "bg-purple-50 border-purple-100" },
            { icon: "❄️", title: "Qorunma", desc: "Bütün ətirlər işıqdan qorunan, temperatur sabit qutu içərisində çatdırılır. Keyfiyyət zəmanəti.", color: "bg-orange-50 border-orange-100" },
          ].map((item, i) => (
            <div key={i} className={`fade-in ${item.color} border rounded-2xl p-6`}>
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 mb-0">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10 fade-in">
            <h2 className="text-3xl font-bold text-gray-900">Tez-tez soruşulan suallar</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="fade-in bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 text-sm pr-4">{item.q}</span>
                  <span className={`text-orange-500 text-xl transition-transform duration-300 flex-shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 text-center text-white fade-in">
          <h2 className="text-2xl font-bold mb-2">Sifarişinizi indi verin</h2>
          <p className="text-orange-100 text-sm mb-6">Bugün sifariş verin, sabah qapınızda olsun</p>
          <a href="/create" className="inline-flex items-center gap-2 bg-white text-orange-500 font-semibold px-8 py-3 rounded-full hover:bg-orange-50 transition-colors text-sm">
            Ətir Yarat ✨
          </a>
        </div>
      </section>
    </div>
 </LayoutGroup>
  );
}