/* eslint-disable react-hooks/purity */
import { useState, useRef } from "react";
import { X, Check, Download, MessageCircle, AlertTriangle } from "lucide-react";
import {
  BOTTLE_IMAGES,
  POCKET_IMAGES,
} from "../data/createPerfume";
import Header from "../components/CreatePerfume/Header";

// ─── Constants ────────────────────────────────────────────────────────────────

const INGREDIENTS = [
  "Rose", "Cedar", "Jasmine", "Mimosa", "Peony", "Neroli", "Tea",
  "Bergamot", "Ginger", "Mandarin", "Berry", "Peach", "Lavender",
  "Rosemary", "Leather", "Cashmere", "Amber", "Vanilla", "Honey",
  "Musk", "Caramel", "Vetiver", "Oud", "Patchouli", "Orange", "Lime",
  "Magnolia", "Marijuana", "Mango", "Wood",
];

// Pairs that cannot be mixed together
const INCOMPATIBLE_PAIRS: [string, string][] = [
  ["Amber", "Caramel"],
  ["Amber", "Vanilla"],
  ["Caramel", "Vanilla"],
  ["Leather", "Patchouli"],
  ["Oud", "Wood"],
  ["Vanilla", "Neroli"],
  ["Caramel", "Neroli"],
];

const BOTTLE_SIZES = [
  { size: "10", price: "15", label: "10ML" },
  { size: "50", price: "90", label: "50ML" },
];

const WHATSAPP_NUMBER = "994105319193";
const ORDER_HOURS = "10:00–18:00";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getIncompatibleWith(ingredient: string, selected: string[]): string[] {
  const blocked: string[] = [];
  for (const sel of selected) {
    for (const pair of INCOMPATIBLE_PAIRS) {
      if (pair.includes(ingredient) && pair.includes(sel) && ingredient !== sel) {
        blocked.push(sel);
      }
    }
  }
  return blocked;
}

function isBlocked(ingredient: string, selected: string[]): boolean {
  return getIncompatibleWith(ingredient, selected).length > 0;
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PerfumeData {
  bottleSize: string;
  ingredients: string[];          // max 3
  proportions: Record<string, number>; // ingredient → %
  engraving: string;
  pocketImage: string;
  textPosition: { x: number; y: number };
}

// ─── Component ────────────────────────────────────────────────────────────────

const CreatePerfume = () => {
  const [step, setStep] = useState(0);
  const [perfumeData, setPerfumeData] = useState<PerfumeData>({
    bottleSize: "",
    ingredients: [],
    proportions: {},
    engraving: "",
    pocketImage: "",
    textPosition: { x: 30, y: 30 },
  });

  // Modals
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [showPocketModal, setShowPocketModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Shake animation state: ingredient name currently shaking
  const [shakingIngredient, setShakingIngredient] = useState<string | null>(null);
  const shakeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Drag state for engraving text
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Single bottle image (only one bottle type now)
  const bottleImage = Object.values(BOTTLE_IMAGES)[0] as string;

  // ── Computed ──────────────────────────────────────────────────────────────

  const totalProportion = Object.values(perfumeData.proportions).reduce((a, b) => a + b, 0);
  const remaining = 100 - totalProportion;

  const getPrice = () => {
    return BOTTLE_SIZES.find((b) => b.size === perfumeData.bottleSize)?.price ?? "0";
  };

  const isStepComplete = (): boolean => {
    if (step === 0) return perfumeData.bottleSize !== "";
    if (step === 1) return perfumeData.ingredients.length > 0 && totalProportion === 100;
    if (step === 2) return true; // optional
    if (step === 3) return perfumeData.pocketImage !== "";
    return true;
  };

  const TOTAL_STEPS = 4;

  // ── Ingredient helpers ────────────────────────────────────────────────────

  const triggerShake = (ingredient: string) => {
    if (shakeTimer.current) clearTimeout(shakeTimer.current);
    setShakingIngredient(ingredient);
    shakeTimer.current = setTimeout(() => setShakingIngredient(null), 600);
  };

  const toggleIngredient = (ingredient: string) => {
    const { ingredients, proportions } = perfumeData;

    // Already selected → deselect
    if (ingredients.includes(ingredient)) {
      const newIngredients = ingredients.filter((i) => i !== ingredient);
      const newProportions = { ...proportions };
      delete newProportions[ingredient];
      setPerfumeData({ ...perfumeData, ingredients: newIngredients, proportions: newProportions });
      return;
    }

    // Check max 3
    if (ingredients.length >= 3) return;

    // Check incompatibility
    if (isBlocked(ingredient, ingredients)) {
      // Shake all blocking ingredients
      for (const pair of INCOMPATIBLE_PAIRS) {
        if (pair.includes(ingredient)) {
          const other = pair.find((p) => p !== ingredient && ingredients.includes(p));
          if (other) triggerShake(other);
        }
      }
      return;
    }

    // Add ingredient with 0% proportion
    setPerfumeData({
      ...perfumeData,
      ingredients: [...ingredients, ingredient],
      proportions: { ...proportions, [ingredient]: 0 },
    });
  };

  const updateProportion = (ingredient: string, value: number) => {
    setPerfumeData({
      ...perfumeData,
      proportions: { ...perfumeData.proportions, [ingredient]: value },
    });
  };

  // ── WhatsApp / PDF ────────────────────────────────────────────────────────

  const sendToWhatsApp = () => {
    const ingredientLines = perfumeData.ingredients
      .map((ing) => `  • ${ing}: ${perfumeData.proportions[ing] ?? 0}%`)
      .join("\n");

    const message = `
🌸 ZANA - Yeni Sifariş 🌸

Ölçü: ${perfumeData.bottleSize}ML
Qiymət: ${getPrice()} AZN

İnqrediyentlər:
${ingredientLines}

${perfumeData.engraving ? `Həkk: "${perfumeData.engraving}"` : ""}
Cib: ${perfumeData.pocketImage ? `Dizayn ${perfumeData.pocketImage}` : "Yoxdur"}

Tarix: ${new Date().toLocaleDateString("az-AZ")}

Sifarişimi təsdiq etmək istəyirəm! ✨
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  const generatePDF = () => {
    const ingredientLines = perfumeData.ingredients
      .map(
        (ing) =>
          `<div class="ingredient-row"><span class="ing-name">${ing}</span><span class="ing-pct">${perfumeData.proportions[ing] ?? 0}%</span></div>`
      )
      .join("");

    const html = `
<!DOCTYPE html><html><head><meta charset="UTF-8">
<style>
  body { font-family: Arial, sans-serif; background:#f5f5f5; padding:40px 20px; }
  .container { background:white; max-width:500px; margin:0 auto; border-radius:10px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,.1); }
  .header { background:#2c2c2c; padding:30px; text-align:center; color:white; }
  .logo { font-size:32px; font-weight:bold; letter-spacing:2px; }
  .content { padding:30px; }
  .section { margin-bottom:20px; padding-bottom:20px; border-bottom:1px solid #eee; }
  .section:last-child { border-bottom:none; }
  .label { font-size:12px; color:#666; text-transform:uppercase; margin-bottom:8px; }
  .value { font-size:18px; color:#2c2c2c; font-weight:bold; }
  .ingredient-row { display:flex; justify-content:space-between; padding:4px 0; }
  .ing-name { color:#444; }
  .ing-pct { font-weight:bold; color:#2c2c2c; }
  .price { text-align:center; margin:30px 0; }
  .price-amount { font-size:42px; font-weight:bold; color:#2c2c2c; }
  .footer { text-align:center; padding:20px; background:#f9f9f9; font-size:12px; color:#666; }
</style></head><body>
<div class="container">
  <div class="header"><div class="logo">ZANA</div></div>
  <div class="content">
    <div class="section"><div class="label">Ölçü</div><div class="value">${perfumeData.bottleSize}ML</div></div>
    <div class="section"><div class="label">İnqrediyentlər</div>${ingredientLines}</div>
    ${perfumeData.engraving ? `<div class="section"><div class="label">Həkk</div><div class="value">"${perfumeData.engraving}"</div></div>` : ""}
    ${perfumeData.pocketImage ? `<div class="section"><div class="label">Cib dizaynı</div><div class="value">Dizayn ${perfumeData.pocketImage}</div></div>` : ""}
    <div class="price"><div class="label">Qiymət</div><div class="price-amount">${getPrice()} AZN</div></div>
  </div>
  <div class="footer">${new Date().toLocaleDateString("az-AZ", { year:"numeric", month:"long", day:"numeric" })}<br>ZANA - Custom Fragrance</div>
</div>
</body></html>`;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ZANA-${perfumeData.bottleSize}ml-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // ── Drag handlers for engraving text ─────────────────────────────────────

  const handleTextDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setDragOffset({ x: clientX - perfumeData.textPosition.x, y: clientY - perfumeData.textPosition.y });
  };

  const handleTextDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setPerfumeData({ ...perfumeData, textPosition: { x: clientX - dragOffset.x, y: clientY - dragOffset.y } });
  };

  const handleTextDragEnd = () => setIsDragging(false);

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Shake + step animations */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) scale(1.02); }
          20% { transform: translateX(-6px) scale(1.02); }
          40% { transform: translateX(6px) scale(1.02); }
          60% { transform: translateX(-4px) scale(1.02); }
          80% { transform: translateX(4px) scale(1.02); }
        }
        .shake { animation: shake 0.55s ease; border-color: #ef4444 !important; background: #fef2f2 !important; }

        @keyframes scaleIn {
          from { opacity:0; transform:scale(0.93); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .anim-scale  { animation: scaleIn  0.28s ease-out both; }
        .anim-fadeup { animation: fadeInUp 0.32s ease-out both; }

        /* Proportion slider */
        input[type=range] {
          -webkit-appearance:none; width:100%; height:6px;
          border-radius:3px; outline:none; cursor:pointer;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance:none; width:18px; height:18px;
          border-radius:50%; background:#2c2c2c; cursor:pointer;
          box-shadow:0 1px 4px rgba(0,0,0,.25);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: TOTAL_STEPS }, (_, s) => (
              <div key={s} className={`h-2 rounded-full transition-all ${s <= step ? "w-12 bg-black" : "w-8 bg-gray-300"}`} />
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-3">Addım {step + 1} / {TOTAL_STEPS}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ── Preview ── */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Önizləmə</h3>
            <div className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center p-4">
              <div className="text-center w-full">
                <div className="relative inline-block">
                  <img src={bottleImage} alt="Bottle" className="w-48 h-auto mx-auto" />
                  {perfumeData.engraving && (
                    <div
                      className="absolute bg-white/95 px-3 py-1.5 rounded-lg shadow-lg cursor-move select-none"
                      style={{ left: `${perfumeData.textPosition.x}%`, top: `${perfumeData.textPosition.y}%`, transform: "translate(-50%,-50%)" }}
                      onMouseDown={handleTextDragStart}
                      onMouseMove={handleTextDragMove}
                      onMouseUp={handleTextDragEnd}
                      onMouseLeave={handleTextDragEnd}
                      onTouchStart={handleTextDragStart}
                      onTouchMove={handleTextDragMove}
                      onTouchEnd={handleTextDragEnd}
                    >
                      <p className="text-xs font-bold italic text-gray-800 whitespace-nowrap">"{perfumeData.engraving}"</p>
                    </div>
                  )}
                </div>

                {perfumeData.bottleSize && (
                  <div className="text-sm text-gray-600 mt-4">{perfumeData.bottleSize}ML</div>
                )}

                {perfumeData.pocketImage && (
                  <div className="mt-6">
                    <div className="text-xs text-gray-500 mb-2">Cib Dizaynı</div>
                    <div className="relative inline-block">
                      <img src={POCKET_IMAGES[perfumeData.pocketImage as keyof typeof POCKET_IMAGES]} alt="Pocket" className="w-32 h-auto rounded-lg shadow-md" />
                      {perfumeData.engraving && (
                        <div className="absolute cursor-move select-none"
                          style={{ left: `${perfumeData.textPosition.x}%`, top: `${perfumeData.textPosition.y}%`, transform: "translate(-50%,-50%)" }}
                          onMouseDown={handleTextDragStart}
                          onMouseMove={handleTextDragMove}
                          onMouseUp={handleTextDragEnd}
                          onMouseLeave={handleTextDragEnd}
                          onTouchStart={handleTextDragStart}
                          onTouchMove={handleTextDragMove}
                          onTouchEnd={handleTextDragEnd}
                        >
                          <p className="text-xs font-bold text-white drop-shadow-lg">{perfumeData.engraving}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Summary */}
            {perfumeData.ingredients.length > 0 && (
              <div className="mt-6 space-y-2">
                {perfumeData.ingredients.map((ing) => (
                  <div key={ing} className="flex justify-between text-sm">
                    <span className="text-gray-600">{ing}</span>
                    <span className="font-semibold">{perfumeData.proportions[ing] ?? 0}%</span>
                  </div>
                ))}
                {perfumeData.bottleSize && (
                  <div className="flex justify-between text-lg font-bold pt-3 border-t">
                    <span>Qiymət:</span>
                    <span>{getPrice()} AZN</span>
                  </div>
                )}
              </div>
            )}

            {/* Order hours notice */}
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700 text-center">
              Sifariş saatları: <strong>{ORDER_HOURS}</strong>
            </div>
          </div>

          {/* ── Selection panel ── */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">

            {/* Step 0: Size */}
            {step === 0 && (
              <div className="anim-fadeup">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-1">Ölçü seç</h2>
                  <p className="text-gray-500 text-sm">Qab həcmini seçin</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {BOTTLE_SIZES.map(({ size, price, label }, idx) => (
                    <button
                      key={size}
                      onClick={() => setPerfumeData({ ...perfumeData, bottleSize: size })}
                      className={`relative p-10 rounded-2xl border-2 transition-all duration-300 anim-scale ${
                        perfumeData.bottleSize === size
                          ? "border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg scale-105"
                          : "border-gray-200 hover:border-blue-300 hover:shadow-md hover:scale-105 bg-white"
                      }`}
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {perfumeData.bottleSize === size && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                          <Check size={14} className="text-white" />
                        </div>
                      )}
                      <div className={`text-4xl font-bold mb-2 ${perfumeData.bottleSize === size ? "text-blue-600" : "text-gray-900"}`}>{label}</div>
                      <div className={`text-xl font-semibold ${perfumeData.bottleSize === size ? "text-cyan-600" : "text-gray-500"}`}>{price} AZN</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Ingredients + proportions */}
            {step === 1 && (
              <div className="anim-fadeup">
                <div className="mb-5">
                  <div className="inline-block p-3 bg-gradient-to-r from-orange-500 to-rose-500 rounded-xl mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-1">İnqrediyent seç</h2>
                  <p className="text-gray-500 text-sm">Maksimum 3 inqrediyent seçin və proporsiyaları müəyyən edin</p>
                </div>

                {/* Ingredient grid */}
                <div
                  className="grid grid-cols-3 gap-2 mb-5 overflow-y-auto pr-1"
                  style={{ maxHeight: "220px" }}
                >
                  {INGREDIENTS.map((ing, idx) => {
                    const isSelected = perfumeData.ingredients.includes(ing);
                    const isIncompat = !isSelected && isBlocked(ing, perfumeData.ingredients);
                    const isMaxed = !isSelected && perfumeData.ingredients.length >= 3;
                    const isShaking = shakingIngredient === ing;

                    return (
                      <button
                        key={ing}
                        onClick={() => toggleIngredient(ing)}
                        disabled={isMaxed && !isSelected}
                        className={`relative px-2 py-2.5 rounded-xl border-2 text-xs font-semibold transition-all duration-200 ${
                          isShaking ? "shake" :
                          isSelected
                            ? "border-orange-500 bg-gradient-to-br from-orange-50 to-rose-50 text-orange-700 shadow-md"
                            : isIncompat
                            ? "border-red-200 bg-red-50 text-red-400 cursor-not-allowed"
                            : isMaxed
                            ? "border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed"
                            : "border-gray-200 hover:border-orange-300 hover:bg-orange-50 text-gray-700"
                        }`}
                        style={{ animationDelay: `${idx * 0.02}s` }}
                      >
                        {isSelected && (
                          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                            <Check size={10} className="text-white" />
                          </div>
                        )}
                        {isIncompat && (
                          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <AlertTriangle size={10} className="text-white" />
                          </div>
                        )}
                        {ing}
                      </button>
                    );
                  })}
                </div>

                {/* Proportion sliders */}
                {perfumeData.ingredients.length > 0 && (
                  <div className="space-y-4">
                    {perfumeData.ingredients.map((ing) => {
                      const pct = perfumeData.proportions[ing] ?? 0;
                      return (
                        <div key={ing}>
                          <div className="flex justify-between text-sm font-semibold mb-1">
                            <span className="text-gray-700">{ing}</span>
                            <span className="text-orange-600">{pct}%</span>
                          </div>
                          <div className="relative flex items-center gap-2">
                            <span className="text-xs text-gray-400 w-5">0%</span>
                            <div className="flex-1 relative">
                              <div className="absolute inset-0 flex items-center">
                                <div
                                  className="h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-rose-500"
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                              <input
                                type="range"
                                min={0}
                                max={100}
                                value={pct}
                                onChange={(e) => updateProportion(ing, Number(e.target.value))}
                                className="relative z-10"
                                style={{
                                  background: `linear-gradient(to right, #fb923c ${pct}%, #e5e7eb ${pct}%)`,
                                }}
                              />
                            </div>
                            <span className="text-xs text-gray-400 w-8 text-right">100%</span>
                          </div>
                        </div>
                      );
                    })}

                    {/* Remaining indicator */}
                    <div className={`mt-3 p-3 rounded-xl text-sm font-semibold text-center ${
                      totalProportion === 100
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}>
                      {totalProportion === 100 ? (
                        <span className="flex items-center justify-center gap-1.5">
                          <Check size={16} /> Mükəmməl! 100% tamamlandı
                        </span>
                      ) : remaining > 0 ? (
                        <span><strong>{remaining}%</strong> daha əlavə etməlisiniz</span>
                      ) : (
                        <span>Həddindən artıq! <strong>{Math.abs(remaining)}%</strong> azaldın</span>
                      )}
                    </div>
                  </div>
                )}

                {perfumeData.ingredients.length === 0 && (
                  <p className="text-gray-400 text-sm text-center py-4">Yuxarıdan inqrediyent seçin</p>
                )}
              </div>
            )}

            {/* Step 2: Design / engraving */}
            {step === 2 && (
              <div className="anim-fadeup">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-1">Dizayn</h2>
                  <p className="text-gray-500 text-sm">İstəyə bağlı mətn (cib və qabda görünəcək)</p>
                </div>
                <button
                  onClick={() => setShowDesignModal(true)}
                  className="w-full p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 hover:border-amber-500 transition-all duration-300 flex items-center justify-between group hover:shadow-lg"
                >
                  <div className="text-left">
                    <div className="text-sm text-gray-500 mb-1">Həkk</div>
                    <div className="font-bold text-gray-900">{perfumeData.engraving || "Mətn əlavə et"}</div>
                  </div>
                  <svg className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}

            {/* Step 3: Pocket design */}
            {step === 3 && (
              <div className="anim-fadeup">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-1">Cib dizaynı seç</h2>
                  <p className="text-gray-500 text-sm">Qoxu cibi üçün dizayn seçin</p>
                </div>
                <button
                  onClick={() => setShowPocketModal(true)}
                  className="w-full p-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border-2 border-violet-200 hover:border-violet-500 transition-all duration-300 flex items-center justify-between group hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    {perfumeData.pocketImage && (
                      <img
                        src={POCKET_IMAGES[perfumeData.pocketImage as keyof typeof POCKET_IMAGES]}
                        alt=""
                        className="w-14 h-14 rounded-xl object-cover shadow-md"
                      />
                    )}
                    <div className="text-left">
                      <div className="text-sm text-gray-500 mb-1">Cib dizaynı</div>
                      <div className="font-bold text-gray-900">
                        {perfumeData.pocketImage ? `Dizayn ${perfumeData.pocketImage}` : "Seç"}
                      </div>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-violet-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <button onClick={() => setStep(step - 1)} className="flex-1 py-3 border-2 border-gray-300 rounded-xl hover:border-black transition font-semibold">
                  Geri
                </button>
              )}
              {step < TOTAL_STEPS - 1 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!isStepComplete()}
                  className={`flex-1 py-3 rounded-xl font-semibold transition ${
                    isStepComplete() ? "bg-black text-white hover:bg-gray-800" : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Növbəti
                </button>
              ) : (
                <button
                  onClick={() => setShowSuccessModal(true)}
                  disabled={!isStepComplete()}
                  className={`flex-1 py-3 rounded-xl font-semibold transition ${
                    isStepComplete() ? "bg-black text-white hover:bg-gray-800" : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Hazırla
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Design Modal ── */}
      {showDesignModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl anim-scale">
            <div className="relative p-8 border-b border-gray-100 bg-gradient-to-r from-amber-50 to-orange-50">
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Mətn əlavə et</h3>
                    <p className="text-xs text-gray-600">Cib və qabda görünəcək</p>
                  </div>
                </div>
                <button onClick={() => setShowDesignModal(false)} className="p-2 hover:bg-white/80 rounded-xl transition hover:rotate-90">
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
            <div className="p-8">
              <input
                type="text"
                placeholder="Mətn..."
                maxLength={15}
                value={perfumeData.engraving}
                onChange={(e) => setPerfumeData({ ...perfumeData, engraving: e.target.value })}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all mb-2"
              />
              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <span>{perfumeData.engraving.length > 0 ? "✓ Mətn əlavə edildi" : "İstəyə bağlı"}</span>
                <span>{perfumeData.engraving.length}/15</span>
              </div>
              {perfumeData.engraving && (
                <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-700">
                  Önizləmədə mətni sürüşdürərək yerini dəyişdirin
                </div>
              )}
              <div className="flex gap-3">
                <button onClick={() => setPerfumeData({ ...perfumeData, engraving: "" })} className="flex-1 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-400 transition font-semibold">
                  Təmizlə
                </button>
                <button onClick={() => setShowDesignModal(false)} className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:shadow-lg transition font-semibold">
                  Saxla
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Pocket Modal ── */}
      {showPocketModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl anim-scale">
            <div className="relative p-8 border-b border-gray-100 bg-gradient-to-r from-violet-50 to-purple-50">
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Cib dizaynı seç</h3>
                    <p className="text-sm text-gray-600">Qoxu cibi üçün dizayn</p>
                  </div>
                </div>
                <button onClick={() => setShowPocketModal(false)} className="p-3 hover:bg-white/80 rounded-xl transition hover:rotate-90 group">
                  <X size={24} className="text-gray-600 group-hover:text-violet-500" />
                </button>
              </div>
            </div>
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-160px)]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Object.entries(POCKET_IMAGES).map(([key, img], idx) => (
                  <button
                    key={key}
                    onClick={() => { setPerfumeData({ ...perfumeData, pocketImage: key }); setShowPocketModal(false); }}
                    className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 anim-scale ${
                      perfumeData.pocketImage === key
                        ? "border-violet-500 bg-gradient-to-br from-violet-50 to-purple-50 shadow-lg scale-105"
                        : "border-gray-200 hover:border-violet-300 hover:shadow-md hover:scale-105 bg-white"
                    }`}
                    style={{ animationDelay: `${idx * 0.07}s` }}
                  >
                    {perfumeData.pocketImage === key && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <Check size={14} className="text-white" />
                      </div>
                    )}
                    <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <img src={img as string} alt={`Pocket ${key}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className={`text-center font-semibold transition-colors ${perfumeData.pocketImage === key ? "text-violet-600" : "text-gray-700"}`}>
                      Dizayn {key}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Success Modal ── */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center anim-scale">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Hazırdır!</h2>
            <p className="text-gray-600 mb-6">Sifarişiniz yaradıldı</p>

            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
              <div className="font-semibold mb-2">Ölçü: {perfumeData.bottleSize}ML</div>
              <div className="text-sm text-gray-600 space-y-1">
                {perfumeData.ingredients.map((ing) => (
                  <div key={ing}>{ing}: {perfumeData.proportions[ing] ?? 0}%</div>
                ))}
                {perfumeData.engraving && <div>Həkk: "{perfumeData.engraving}"</div>}
                {perfumeData.pocketImage && <div>Cib: Dizayn {perfumeData.pocketImage}</div>}
              </div>
              <div className="text-2xl font-bold mt-3">{getPrice()} AZN</div>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700 mb-4">
              Sifariş saatları: <strong>{ORDER_HOURS}</strong>
            </div>

            <div className="space-y-3 mb-4">
              <button
                onClick={sendToWhatsApp}
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2 font-semibold"
              >
                <MessageCircle size={20} />
                WhatsApp ilə sifariş et
              </button>
              <button
                onClick={generatePDF}
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 font-semibold"
              >
                <Download size={20} />
                Yüklə
              </button>
            </div>

            <button onClick={() => setShowSuccessModal(false)} className="text-gray-500 hover:text-gray-700 text-sm">
              Bağla
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePerfume;