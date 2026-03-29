import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, Sparkles, ChevronRight, X } from "lucide-react";
import { PERFUME_CATEGORIES } from "../data/createPerfume";
import LayoutGroup from "../layout/Layout";

type CategoryKey = keyof typeof PERFUME_CATEGORIES;

const CATEGORY_META: Record<CategoryKey, { emoji: string; desc: string; gradient: string; orb: string; tag: string }> = {
  "Çiçəkli və Zərif": {
    emoji: "🌸",
    desc: "Qızılgülün yumşaqlığından yasəmənin cazibəsinə — romantik çiçək dünyası",
    gradient: "from-rose-50 via-pink-50 to-fuchsia-50",
    orb: "bg-gradient-to-br from-rose-200 to-pink-300",
    tag: "bg-rose-50 text-rose-700 border-rose-200",
  },
  "Fresh & Citrusy": {
    emoji: "🍋",
    desc: "Dəniz küləyi, sitrus enerjisi — canlı və canlandırıcı notlar",
    gradient: "from-cyan-50 via-sky-50 to-blue-50",
    orb: "bg-gradient-to-br from-cyan-200 to-sky-300",
    tag: "bg-sky-50 text-sky-700 border-sky-200",
  },
  "Fruity & Delicious": {
    emoji: "🍑",
    desc: "Şirin meyvə notları — yay bahçəsinin dadını hiss edin",
    gradient: "from-amber-50 via-yellow-50 to-orange-50",
    orb: "bg-gradient-to-br from-amber-200 to-orange-300",
    tag: "bg-amber-50 text-amber-700 border-amber-200",
  },
  "Green & Aromatic": {
    emoji: "🌿",
    desc: "Aromatik otlar, lavanda, canlı yaşıllıq — təbiətin özü",
    gradient: "from-green-50 via-emerald-50 to-teal-50",
    orb: "bg-gradient-to-br from-green-200 to-emerald-300",
    tag: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  "Leathery & Distinctive": {
    emoji: "🤎",
    desc: "Dəri, kaşmir, ruh — fərqli və güclü şəxsiyyətlər üçün",
    gradient: "from-stone-50 via-neutral-50 to-slate-50",
    orb: "bg-gradient-to-br from-stone-300 to-slate-400",
    tag: "bg-stone-50 text-stone-700 border-stone-200",
  },
  "Spicy & Ambery": {
    emoji: "🔥",
    desc: "Kəhrəba, mürr, buxur — şərqin sirli dərinliyi",
    gradient: "from-orange-50 via-red-50 to-rose-50",
    orb: "bg-gradient-to-br from-orange-300 to-red-400",
    tag: "bg-orange-50 text-orange-700 border-orange-200",
  },
  "Sweet & Gourmand": {
    emoji: "🍯",
    desc: "Vanil, karamel, bal — şirinliyin nağılı",
    gradient: "from-purple-50 via-violet-50 to-pink-50",
    orb: "bg-gradient-to-br from-purple-200 to-violet-300",
    tag: "bg-violet-50 text-violet-700 border-violet-200",
  },
  "Woody & Profound": {
    emoji: "🌲",
    desc: "Oud, sandalwood, vetiver — dərin köklər, qalıcı iz",
    gradient: "from-amber-50 via-orange-50 to-yellow-50",
    orb: "bg-gradient-to-br from-amber-300 to-yellow-400",
    tag: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
};

const allScents = Object.entries(PERFUME_CATEGORIES).flatMap(([cat, items]) =>
  items.map((p) => ({ ...p, category: cat as CategoryKey }))
);

export default function ScentsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryKey | "all">("all");
  const [selectedScent, setSelectedScent] = useState<null | { name: string; category: CategoryKey }>(null);
  const categories = Object.keys(PERFUME_CATEGORIES) as CategoryKey[];
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Search filters across ALL scents always — category never restricts the list
  const filtered = allScents.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // Group by category, only show categories that have matching scents
  const groupedFiltered = categories.reduce((acc, cat) => {
    const items = filtered.filter((s) => s.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {} as Record<CategoryKey, typeof allScents>);

  const scrollToCategory = (cat: CategoryKey) => {
    setActiveCategory(cat);
    // Small delay so DOM is ready, then scroll
    setTimeout(() => {
      sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <LayoutGroup>
      <div className="min-h-screen bg-white text-gray-900">
        <style>{`
          .fade-up { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
          .fade-up.visible { opacity: 1; transform: translateY(0); }
          .scent-pill { transition: all 0.2s ease; }
          .scent-pill:hover { transform: translateY(-2px) scale(1.04); }
          .cat-filter::-webkit-scrollbar { display: none; }
        `}</style>

        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16 px-6 bg-gradient-to-b from-orange-50/60 to-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-300/15 rounded-full blur-[120px]" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-300/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300/15 rounded-full blur-[80px]" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 text-orange-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" /> {allScents.length} Unikal Qoxu
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-tight tracking-tight text-gray-900">
              Qoxuların{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 bg-clip-text text-transparent">
                dünyası
              </span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              {categories.length} kateqoriya, {allScents.length} ətir notu — öz imzanızı tapın
            </p>
            {/* Search */}
            <div className="relative max-w-md mx-auto mt-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Qoxu axtar... (Rose, Oud, Vanilla...)"
                className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 shadow-sm transition-all"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Category filter pills */}
        <div className="sticky top-[80px] z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 px-6 shadow-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-2 overflow-x-auto cat-filter pb-1">
              <button
                onClick={() => setActiveCategory("all")}
                className={`flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === "all"
                    ? "bg-orange-500 border-orange-500 text-white shadow-md"
                    : "bg-white border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800"
                }`}
              >
                Hamısı
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => scrollToCategory(cat)}
                  className={`flex-shrink-0 text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-orange-50 border-orange-400 text-orange-600 shadow-sm"
                      : "bg-white border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800"
                  }`}
                >
                  {CATEGORY_META[cat].emoji} {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search results info */}
        {search && (
          <div className="max-w-7xl mx-auto px-6 pt-8">
            <p className="text-gray-400 text-sm">
              <span className="text-gray-900 font-medium">{filtered.length}</span> nəticə tapıldı:{" "}
              <span className="text-orange-500">"{search}"</span>
            </p>
          </div>
        )}

        {/* Category sections */}
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
          {Object.entries(groupedFiltered).map(([cat, scents], catIdx) => {
            const meta = CATEGORY_META[cat as CategoryKey];
            return (
              <div
                key={cat}
                ref={(el) => { sectionRefs.current[cat] = el; }}
                className="fade-up"
                style={{ transitionDelay: `${catIdx * 0.05}s` }}
              >
                {/* Category header */}
                <div className="flex items-start justify-between mb-8 gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 ${meta.orb} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-md`}>
                      {meta.emoji}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{cat}</h2>
                      <p className="text-gray-400 text-sm mt-0.5 max-w-sm">{meta.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full flex-shrink-0">
                    {scents.length} not
                  </span>
                </div>

                {/* Scent pills grid */}
                <div className="flex flex-wrap gap-3">
                  {scents.map((scent, i) => (
                    <button
                      key={scent.name}
                      onClick={() => setSelectedScent({ name: scent.name, category: cat as CategoryKey })}
                      className={`scent-pill group relative flex items-center gap-2.5 px-5 py-3 rounded-2xl border text-sm font-medium ${meta.tag} hover:shadow-md hover:shadow-black/10 cursor-pointer`}
                      style={{ animationDelay: `${i * 0.03}s` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0" />
                      {scent.name}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 text-xs">+</span>
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className="mt-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>
            );
          })}

          {Object.keys(groupedFiltered).length === 0 && (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-400">Heç bir nəticə tapılmadı</p>
              <button onClick={() => setSearch("")} className="mt-4 text-orange-500 text-sm hover:underline">
                Axtar silmək
              </button>
            </div>
          )}
        </div>

        {/* Scent detail modal */}
        {selectedScent && (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={() => setSelectedScent(null)}
          >
            <div
              className="bg-white border border-gray-100 rounded-3xl p-8 max-w-sm w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${CATEGORY_META[selectedScent.category].orb} rounded-xl flex items-center justify-center text-xl`}>
                    {CATEGORY_META[selectedScent.category].emoji}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedScent.name}</h3>
                    <p className="text-xs text-gray-400">{selectedScent.category}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedScent(null)} className="text-gray-300 hover:text-gray-700 transition-colors p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {selectedScent.name} notu {selectedScent.category.toLowerCase()} ailəsindən olub özünəməxsus
                aromatik profili ilə fərqlənir. Peşəkar perfumerlərimiz bu notu sizin ətirinizə uyğun şəkildə tənzimləyəcək.
              </p>
              <Link
                to="/create-perfume"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold py-3.5 rounded-2xl hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
                onClick={() => setSelectedScent(null)}
              >
                <Sparkles className="w-4 h-4" />
                Bu notla ətir yarat
              </Link>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-rose-600 p-12 text-center">
            <div className="absolute inset-0 opacity-20">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="absolute w-32 h-32 bg-white rounded-full blur-3xl"
                  style={{ left: `${i * 20}%`, top: `${(i % 3) * 30}%` }} />
              ))}
            </div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-3">Öz ətirinizi yaradın</h2>
              <p className="text-white/80 mb-8 text-sm">Bu notlardan seçin, birləşdirin, unikal bir şey yaradın</p>
              <Link
                to="/create-perfume"
                className="inline-flex items-center gap-2 bg-white text-orange-500 font-bold px-8 py-3.5 rounded-full hover:bg-orange-50 hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                <Sparkles className="w-4 h-4" />
                İndi Başlayın
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </LayoutGroup>
  );
}