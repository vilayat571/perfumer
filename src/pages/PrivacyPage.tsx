import { useState, useEffect } from "react";
import LayoutGroup from "../layout/Layout";

const sections = [
  {
    id: "collect",
    icon: "📋",
    title: "Topladığımız Məlumatlar",
    content: [
      {
        subtitle: "Şəxsi Məlumatlar",
        text: "Ad, soyad, e-poçt ünvanı, telefon nömrəsi və çatdırılma ünvanı kimi şəxsi məlumatları toplayırıq. Bu məlumatlar yalnız sifarişinizin işlənməsi və çatdırılması üçün istifadə olunur.",
      },
      {
        subtitle: "Ödəniş Məlumatları",
        text: "Kredit kartı və bank məlumatları birbaşa bizim serverlərə saxlanılmır. Bütün ödənişlər sertifikatlı ödəniş prosessoru vasitəsilə həyata keçirilir.",
      },
      {
        subtitle: "Texniki Məlumatlar",
        text: "IP ünvanı, brauzer növü, ziyarət tarixi kimi texniki məlumatlar saytın performansını yaxşılaşdırmaq məqsədilə toplanır.",
      },
    ],
  },
  {
    id: "use",
    icon: "🔍",
    title: "Məlumatların İstifadəsi",
    content: [
      {
        subtitle: "Sifariş İdarəetməsi",
        text: "Məlumatlarınız sifarişlərinizin emalı, çatdırılması və müştəri dəstəyi üçün istifadə olunur.",
      },
      {
        subtitle: "Ünsiyyət",
        text: "Sifariş təsdiqləmə, çatdırılma bildirişləri və müştəri xidmətləri üçün sizinlə əlaqə saxlayırıq.",
      },
      {
        subtitle: "Marketinq",
        text: "Razılığınız olduqda promosyon təkliflər və yeni məhsullar haqqında məlumat göndəririk. İstənilən vaxt abunəlikdən çıxa bilərsiniz.",
      },
    ],
  },
  {
    id: "share",
    icon: "🤝",
    title: "Məlumat Paylaşımı",
    content: [
      {
        subtitle: "Üçüncü Tərəflər",
        text: "Şəxsi məlumatlarınızı üçüncü tərəflərə satmırıq. Yalnız xidmət göstərən tərəfdaşlarla (çatdırılma şirkətləri, ödəniş prosessorları) zəruri məlumatlar paylaşılır.",
      },
      {
        subtitle: "Hüquqi Tələblər",
        text: "Qanunun tələb etdiyi hallarda məlumatlarınız müvafiq dövlət orqanları ilə paylaşıla bilər.",
      },
    ],
  },
  {
    id: "security",
    icon: "🔒",
    title: "Məlumatların Qorunması",
    content: [
      {
        subtitle: "Şifrələmə",
        text: "Bütün məlumatlar SSL/TLS şifrələmə texnologiyası ilə qorunur. Saytımız HTTPS protokolu ilə işləyir.",
      },
      {
        subtitle: "Giriş Nəzarəti",
        text: "Məlumatlarınıza yalnız səlahiyyətli işçilərimiz giriş əldə edə bilər. Daxili giriş siyasətimiz ciddi şəkildə tətbiq edilir.",
      },
    ],
  },
  {
    id: "rights",
    icon: "⚖️",
    title: "Sizin Hüquqlarınız",
    content: [
      {
        subtitle: "Giriş Hüququ",
        text: "Şəxsi məlumatlarınıza dair hesabat tələb edə bilərsiniz. Hansı məlumatları saxladığımızı öyrənmək üçün bizimlə əlaqə saxlayın.",
      },
      {
        subtitle: "Düzəliş Hüququ",
        text: "Yanlış və ya köhnəlmiş məlumatlarınızın düzəldilməsini tələb edə bilərsiniz.",
      },
      {
        subtitle: "Silinmə Hüququ",
        text: "Müəyyən şərtlər daxilində şəxsi məlumatlarınızın silinməsini tələb edə bilərsiniz.",
      },
    ],
  },
  {
    id: "cookies",
    icon: "🍪",
    title: "Çərəzlər (Cookies)",
    content: [
      {
        subtitle: "Zəruri Çərəzlər",
        text: "Saytın işləməsi üçün vacib olan çərəzlər həmişə aktiv olur. Bunlar olmadan sayt düzgün işləməz.",
      },
      {
        subtitle: "Analitik Çərəzlər",
        text: "Google Analytics kimi analitik alətlər sayt trafikini izləmək üçün istifadə edilir. Siz bunu idarə etmə parametrlərindən söndürə bilərsiniz.",
      },
    ],
  },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("collect");

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
            🔒 Məxfilik Siyasəti
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Məxfilik <span className="text-orange-500">Siyasəti</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Məlumatlarınızın necə toplandığını, istifadə edildiyini və qorunduğunu anlamaq üçün bu sənədi oxuyun.
          </p>
          <p className="text-xs text-gray-400 mt-4">Son yenilənmə: 1 Yanvar 2025</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-8">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Bölmələr</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setActiveSection(s.id)}
                    className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg transition-colors ${
                      activeSection === s.id
                        ? "bg-orange-100 text-orange-600 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>{s.icon}</span>
                    <span>{s.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-8">
            {/* Intro banner */}
            <div className="fade-in bg-orange-50 border border-orange-100 rounded-2xl p-6 flex gap-4">
              <div className="text-3xl">🛡️</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Məlumatlarınız bizim üçün önəmlidir</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Perfumer.az olaraq şəxsi məlumatlarınızın qorunmasına ciddi yanaşırıq. Bu məxfilik siyasəti
                  Azərbaycan Respublikasının qanunvericiliyinə uyğun hazırlanmışdır.
                </p>
              </div>
            </div>

            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="fade-in bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100 bg-gray-50">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl">
                    {section.icon}
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="p-6 space-y-5">
                  {section.content.map((item, j) => (
                    <div key={j}>
                      <h3 className="text-sm font-semibold text-orange-500 mb-2">{item.subtitle}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact */}
            <div className="fade-in bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h2 className="text-xl font-bold mb-2">Suallarınız var?</h2>
              <p className="text-orange-100 text-sm mb-4">
                Məxfilik siyasəti ilə bağlı hər hansı sualınız olarsa, bizimlə əlaqə saxlayın.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/contact" className="bg-white text-orange-500 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-orange-50 transition-colors">
                  Əlaqə saxla
                </a>
                <a href="mailto:privacy@perfumer.az" className="border border-white/40 text-white text-sm px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors">
                  privacy@perfumer.az
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </LayoutGroup>
  );
}