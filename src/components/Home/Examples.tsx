import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ChevronRight, ArrowRight } from "lucide-react";
import { PERFUME_CATEGORIES } from "../../data/createPerfume";

type CategoryKey = keyof typeof PERFUME_CATEGORIES;

const CATEGORY_META: Record<CategoryKey, { emoji: string; gradient: string; light: string; accent: string }> = {
  "Çiçəkli və Zərif":    { emoji: "🌸", gradient: "from-rose-400 to-pink-500",     light: "bg-rose-50",    accent: "text-rose-500" },
  "Fresh & Citrusy":     { emoji: "🍋", gradient: "from-sky-400 to-cyan-500",      light: "bg-sky-50",     accent: "text-sky-500" },
  "Fruity & Delicious":  { emoji: "🍑", gradient: "from-amber-400 to-orange-500",  light: "bg-amber-50",   accent: "text-amber-600" },
  "Green & Aromatic":    { emoji: "🌿", gradient: "from-green-400 to-emerald-500", light: "bg-green-50",   accent: "text-green-600" },
  "Leathery & Distinctive": { emoji: "🤎", gradient: "from-stone-400 to-slate-500",  light: "bg-stone-50",   accent: "text-stone-600" },
  "Spicy & Ambery":      { emoji: "🔥", gradient: "from-orange-500 to-red-500",    light: "bg-orange-50",  accent: "text-orange-600" },
  "Sweet & Gourmand":    { emoji: "🍯", gradient: "from-violet-400 to-purple-500", light: "bg-violet-50",  accent: "text-violet-600" },
  "Woody & Profound":    { emoji: "🌲", gradient: "from-yellow-500 to-amber-600",  light: "bg-yellow-50",  accent: "text-yellow-700" },
};

const categories = Object.keys(PERFUME_CATEGORIES) as CategoryKey[];
const totalScents = Object.values(PERFUME_CATEGORIES).reduce((acc, arr) => acc + arr.length, 0);

export default function ScentsPreview() {
  const [hovered, setHovered] = useState<CategoryKey | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const hoveredScents = hovered ? PERFUME_CATEGORIES[hovered].slice(0, 6) : null;

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Qoxu Kolleksiyası
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {totalScents}+ ətir notu,{" "}
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
              sonsuz kombinasiya
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {categories.length} kateqoriyadan öz sevdiyiniz notları seçin və unikal bir imza ətri yaradın
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {categories.map((cat, i) => {
            const meta = CATEGORY_META[cat];
            const count = PERFUME_CATEGORIES[cat].length;
            const isHovered = hovered === cat;

            return (
              <div
                key={cat}
                onMouseEnter={() => setHovered(cat)}
                onMouseLeave={() => setHovered(null)}
                className={`
                  group relative rounded-2xl p-5 cursor-pointer transition-all duration-400 border
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  ${isHovered
                    ? `${meta.light} border-transparent shadow-xl scale-[1.03]`
                    : "bg-gray-50 border-gray-100 hover:border-gray-200 hover:shadow-md hover:scale-[1.01]"
                  }
                `}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                {/* Gradient glow on hover */}
                {isHovered && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-8 rounded-2xl`} />
                )}

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${meta.gradient} rounded-xl flex items-center justify-center text-xl mb-3 shadow-md transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}>
                    {meta.emoji}
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-sm leading-tight mb-1 transition-colors duration-200 ${isHovered ? meta.accent : "text-gray-900"}`}>
                    {cat}
                  </h3>

                  {/* Count */}
                  <p className="text-xs text-gray-400">{count} not</p>

                  {/* Arrow */}
                  <div className={`absolute top-0 right-0 transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}>
                    <ArrowRight className={`w-4 h-4 ${meta.accent}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hover preview panel */}
        <div
          className={`transition-all duration-300 overflow-hidden ${hovered ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0 mb-0"}`}
        >
          {hoveredScents && hovered && (
            <div className={`${CATEGORY_META[hovered].light} rounded-2xl p-5 border border-current/10`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold ${CATEGORY_META[hovered].accent}`}>
                  {hovered} — seçilmiş notlar
                </span>
                <Link
                  to="/scents"
                  className={`text-xs ${CATEGORY_META[hovered].accent} flex items-center gap-1 hover:underline font-medium`}
                >
                  Hamısına bax <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {PERFUME_CATEGORIES[hovered].map((scent) => (
                  <span
                    key={scent.name}
                    className={`text-xs px-3 py-1.5 rounded-full border font-medium bg-white/70 border-current/20 ${CATEGORY_META[hovered].accent} backdrop-blur-sm`}
                  >
                    {scent.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Stats bar */}
        <div
          className={`bg-gray-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-8">
            {[
              { value: `${totalScents}+`, label: "Ətir Notu" },
              { value: `${categories.length}`, label: "Kateqoriya" },
              { value: "∞", label: "Kombinasiya" },
            ].map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Link
              to="/scents"
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-xl hover:bg-white/15 transition-colors"
            >
              Kolleksiyaya bax
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/create-perfume"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-semibold rounded-xl hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-900/30"
            >
              <Sparkles className="w-4 h-4" />
              Ətir Yarat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}