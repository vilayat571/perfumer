import { useState, useEffect } from "react";
import LayoutGroup from "../layout/Layout";

const steps = [
  { number: "01", icon: "📝", title: "Sorğu Göndərin", desc: "info@perfumer.az ünvanına sifariş nömrənizi və geri qaytarma səbəbinizi yazın." },
  { number: "02", icon: "✅", title: "Təsdiq Alın", desc: "24 saat ərzində geri qaytarma üçün RMA kodu və təlimatları göndərəcəyik." },
  { number: "03", icon: "📦", title: "Məhsulu Göndərin", desc: "Məhsulu orijinal qablaşdırmasında RMA kodu ilə bizə göndərin." },
  { number: "04", icon: "💳", title: "Geri Ödəniş", desc: "Məhsulun alınmasından 3–5 iş günü ərzində ödənişi geri qaytarırıq." },
];

const returnableItems = [
  { icon: "✅", text: "Açılmamış, orijinal qablaşdırmada olan məhsullar", ok: true },
  { icon: "✅", text: "30 gün ərzində müraciət edilmiş sifarişlər", ok: true },
  { icon: "✅", text: "Qüsurlu və ya zədəli gəlmiş məhsullar", ok: true },
  { icon: "❌", text: "Açılmış və ya istifadə edilmiş ətirlər", ok: false },
  { icon: "❌", text: "30 gündən çox olmuş sifarişlər", ok: false },
  { icon: "❌", text: "Xüsusi sifarişlə hazırlanmış şəxsəlləşdirilmiş ətirlər", ok: false },
];

const faqItems = [
  {
    q: "Geri qaytarma üçün nə qədər vaxtım var?",
    a: "Sifariş tarixindən etibarən 30 gün ərzində geri qaytarma sorğusu göndərə bilərsiniz. 30 gün keçdikdən sonra geri qaytarma qəbul edilmir.",
  },
  {
    q: "Çatdırılma xərclərini geri alacağammı?",
    a: "Qüsurlu məhsullar üçün çatdırılma xərcləri tam ödənilir. Şəxsi qərarla geri qaytarmalarda orijinal çatdırılma xərcləri geri qaytarılmır.",
  },
  {
    q: "Fərqli məhsulla dəyişdirə bilərəmmi?",
    a: "Bəli, geri qaytarma əvəzinə məhsul dəyişdirməni seçə bilərsiniz. Qiymət fərqi varsa, fərq tutulur və ya geri qaytarılır.",
  },
  {
    q: "Hədiyyə olaraq aldığım məhsulu geri qaytara bilərəmmi?",
    a: "Hədiyyə olaraq alınan məhsullar üçün mağaza krediti təklif edirik. Bizimlə əlaqə saxlayaraq proseduru başlada bilərsiniz.",
  },
];

export default function ReturnPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
            🔄 Geri Qaytarma
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Geri <span className="text-orange-500">Qaytarma</span> Siyasəti
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Məmnun qalmadığınız halda asan geri qaytarma prosesimiz ilə xərcinizi geri alın
          </p>
        </div>
      </section>

      {/* Guarantee banner */}
      <section className="max-w-6xl mx-auto px-6 -mt-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "🛡️", title: "30 Gün Zəmanət", desc: "Alışdan 30 gün ərzində geri qaytarın" },
            { icon: "⚡", title: "Sürətli Geri Ödəniş", desc: "3–5 iş günü ərzində ödəniş" },
            { icon: "🚚", title: "Pulsuz Geri Göndərmə", desc: "Qüsurlu məhsullar üçün biz ödəyirik" },
          ].map((item, i) => (
            <div key={i} className="fade-in bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900">Geri Qaytarma Prosesi</h2>
            <p className="text-gray-500 mt-2">4 sadə addımda məhsulunuzu geri qaytarın</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200" />
            {steps.map((step, i) => (
              <div key={i} className="fade-in relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-md">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-orange-300 mb-1">{step.number}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What can/cannot be returned */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="fade-in text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Geri Qaytarma Şərtləri</h2>
          <p className="text-gray-500 mt-2">Hansı məhsullar qəbul edilir?</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="fade-in bg-green-50 rounded-2xl p-6 border border-green-100">
            <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              Qəbul edilir
            </h3>
            <div className="space-y-3">
              {returnableItems.filter(r => r.ok).map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-500 text-lg flex-shrink-0">{item.icon}</span>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-in bg-red-50 rounded-2xl p-6 border border-red-100">
            <h3 className="font-bold text-red-600 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">✕</span>
              Qəbul edilmir
            </h3>
            <div className="space-y-3">
              {returnableItems.filter(r => !r.ok).map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-red-500 text-lg flex-shrink-0">{item.icon}</span>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 mb-0">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10 fade-in">
            <h2 className="text-3xl font-bold text-gray-900">Tez-tez soruşulan suallar</h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
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
          <h2 className="text-2xl font-bold mb-2">Geri qaytarma üçün hazırsınız?</h2>
          <p className="text-orange-100 text-sm mb-6">Komandamız sizə kömək etməyə hazırdır</p>
          <div className="flex justify-center flex-wrap gap-3">
            <a href="mailto:info@perfumer.az" className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors text-sm">
              ✉️ E-poçt Göndər
            </a>
            <a href="/contact" className="border border-white/40 text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
              Əlaqə Formu
            </a>
          </div>
        </div>
      </section>
    </div>
  </LayoutGroup>
  );
}