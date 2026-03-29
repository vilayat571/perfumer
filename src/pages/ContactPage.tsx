import { useState, useEffect } from "react";
import LayoutGroup from "../layout/Layout";

const contactMethods = [
  {
    icon: "📞",
    title: "Zəng edin",
    value: "+994 50 123 45 67",
    sub: "Bazar ertəsi – Cümə, 09:00–18:00",
    bg: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    icon: "✉️",
    title: "E-poçt yazın",
    value: "info@perfumer.az",
    sub: "24 saat ərzində cavab veririk",
    bg: "bg-amber-50",
    color: "text-amber-600",
  },
  {
    icon: "📍",
    title: "Ünvanımız",
    value: "Nizami küçəsi 15, Bakı",
    sub: "Azərbaycan, AZ1010",
    bg: "bg-rose-50",
    color: "text-rose-500",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: "+994 50 123 45 67",
    sub: "Sürətli məsləhət üçün",
    bg: "bg-green-50",
    color: "text-green-600",
  },
];

const socials = [
  { icon: "📸", name: "Instagram", handle: "@perfumer.az" },
  { icon: "📘", name: "Facebook", handle: "Perfumer Az" },
  { icon: "🎵", name: "TikTok", handle: "@perfumer.az" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

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
        input:focus, textarea:focus, select:focus { outline: none; ring: 2px solid #f97316; }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white pt-24 pb-16">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100 rounded-full opacity-40 -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            📬 Əlaqə
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Bizimlə <span className="text-orange-500">əlaqə</span> saxlayın
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Sualınız, təklifiniz və ya ətir sifarişiniz üçün bizə müraciət edin
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactMethods.map((c, i) => (
            <div
              key={i}
              className={`fade-in fade-in-delay-${i + 1} ${c.bg} rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className={`font-semibold ${c.color} mb-1`}>{c.title}</h3>
              <p className="text-gray-900 font-medium text-sm">{c.value}</p>
              <p className="text-gray-400 text-xs mt-1">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Mesaj göndərin</h2>
            <p className="text-gray-500 mb-8">Ən qısa zamanda sizə cavab verəcəyik</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mesajınız göndərildi!</h3>
                <p className="text-gray-500 text-sm">24 saat ərzində sizinlə əlaqə saxlayacağıq.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-orange-500 text-sm font-medium hover:underline"
                >
                  Yeni mesaj göndər
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Ad Soyad</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Adınızı daxil edin"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">E-poçt</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Mövzu</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all bg-white"
                  >
                    <option value="">Mövzu seçin</option>
                    <option>Ətir sifarişi</option>
                    <option>Çatdırılma məlumatı</option>
                    <option>Geri qaytarma</option>
                    <option>Əməkdaşlıq</option>
                    <option>Digər</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Mesaj</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Göndərilir...
                    </>
                  ) : (
                    <>Mesaj Göndər ✉️</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info side */}
          <div className="fade-in fade-in-delay-2 space-y-6">
            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-orange-100 to-amber-50 rounded-2xl h-52 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="absolute border border-orange-300" style={{ left: `${(i % 5) * 20}%`, top: `${Math.floor(i / 5) * 25}%`, width: "20%", height: "25%" }} />
                ))}
              </div>
              <div className="relative text-center">
                <div className="text-4xl mb-2">📍</div>
                <p className="text-orange-600 font-semibold">Nizami küçəsi 15</p>
                <p className="text-orange-400 text-sm">Bakı, Azərbaycan</p>
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                🕐 İş saatları
              </h3>
              <div className="space-y-2">
                {[
                  ["Bazar ertəsi – Cümə", "09:00 – 18:00"],
                  ["Şənbə", "10:00 – 15:00"],
                  ["Bazar", "Bağlı"],
                ].map(([day, time], i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-gray-600">{day}</span>
                    <span className={`font-medium ${time === "Bağlı" ? "text-red-400" : "text-gray-900"}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Sosial Media</h3>
              <div className="space-y-3">
                {socials.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow text-lg">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{s.name}</p>
                      <p className="text-xs text-orange-500">{s.handle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10 fade-in">
            <h2 className="text-3xl font-bold text-gray-900">Tez-tez soruşulan suallar</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "Sifarişimi necə verə bilərəm?", a: "Saytımızdakı 'Create Perfume' düyməsini istifadə edərək ətirinizi yaradın və sifariş verin." },
              { q: "Çatdırılma nə qədər vaxt alır?", a: "Bakı daxili 1–2 iş günü, regionlara 3–5 iş günü ərzində çatdırılır." },
              { q: "Geri qaytarma mümkündürmü?", a: "Bəli, 14 gün ərzində açılmamış məhsullar geri qaytarıla bilər." },
              { q: "Toplu sifariş üçün endirim varmı?", a: "10+ ədəd sifarişlər üçün xüsusi qiymətlər tətbiq edilir. Bizimlə əlaqə saxlayın." },
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  </LayoutGroup>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`fade-in fade-in-delay-${(index % 4) + 1} bg-white rounded-2xl border border-gray-100 overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900 text-sm">{question}</span>
        <span className={`text-orange-500 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-sm text-gray-500 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}