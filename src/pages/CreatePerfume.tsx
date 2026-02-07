/* eslint-disable react-hooks/purity */
import { useState } from "react";
import { X, ChevronRight, Check, Download, MessageCircle } from "lucide-react";
import {
  BOTTLE_IMAGES,
  PERFUME_CATEGORIES,
  POCKET_IMAGES,
  SCENT_MAGNIFIERS
} from "../data/createPerfume";
import Header from "../components/CreatePerfume/Header";

export interface PerfumeData {
  bottleType: string;
  bottleSize: string;
  selectedPerfume: string;
  perfumeCategory: string;
  magnifier: string;
  engraving: string;
  pocketImage: string;
  textPosition: { x: number; y: number };
}

const CreatePerfume = () => {
  const [step, setStep] = useState(0);
  const [perfumeData, setPerfumeData] = useState<PerfumeData>({
    bottleType: "",
    bottleSize: "",
    selectedPerfume: "",
    perfumeCategory: "",
    magnifier: "",
    engraving: "",
    pocketImage: "",
    textPosition: { x: 30, y: 30 },
  });
  const [showPerfumeModal, setShowPerfumeModal] = useState(false);
  const [showMagnifierModal, setShowMagnifierModal] = useState(false);
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [showPocketModal, setShowPocketModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const WHATSAPP_NUMBER = "60176487917";

  const BOTTLE_SIZES = [
    { size: "30", price: "22", label: "30ML" },
    { size: "50", price: "32", label: "50ML" },
    { size: "70", price: "37", label: "70ML" },
    { size: "100", price: "45", label: "100ML" },
  ];

  const handleCreatePerfume = () => {
    setShowSuccessModal(true);
  };

  const getPrice = () => {
    const sizeData = BOTTLE_SIZES.find((b) => b.size === perfumeData.bottleSize);
    return sizeData?.price || "0";
  };

  const sendToWhatsApp = () => {
    const message = `
🌸 ZANA - Yeni Sifariş 🌸

Qoxu: ${perfumeData.selectedPerfume}
Kateqoriya: ${perfumeData.perfumeCategory}
Ölçü: ${perfumeData.bottleSize}ML
Gücləndirici: ${perfumeData.magnifier}
${perfumeData.engraving ? `Həkk: "${perfumeData.engraving}"` : ""}
Cib: ${perfumeData.pocketImage ? `Dizayn ${perfumeData.pocketImage}` : "Yoxdur"}

Qiymət: ${getPrice()} AZN

Tarix: ${new Date().toLocaleDateString("az-AZ")}

Sifarişimi təsdiq etmək istəyirəm! ✨
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const generatePDF = () => {
    const pdfContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      padding: 40px 20px;
    }
    
    .container {
      background: white;
      max-width: 500px;
      margin: 0 auto;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .header {
      background: #2c2c2c;
      padding: 30px;
      text-align: center;
      color: white;
    }
    
    .logo {
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 2px;
    }
    
    .content {
      padding: 30px;
    }
    
    .bottle-section {
      text-align: center;
      margin-bottom: 30px;
      padding: 20px;
      background: #f9f9f9;
      border-radius: 10px;
    }
    
    .bottle-container {
      position: relative;
      display: inline-block;
      margin: 0 auto;
    }
    
    .bottle-image {
      max-width: 200px;
      height: auto;
      display: block;
    }
    
    .bottle-text {
      position: absolute;
      left: ${perfumeData.textPosition.x}%;
      top: ${perfumeData.textPosition.y}%;
      transform: translate(-50%, -50%);
      font-size: 12px;
      font-weight: bold;
      font-style: italic;
      color: #2c2c2c;
      background: rgba(255, 255, 255, 0.95);
      padding: 6px 14px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      white-space: nowrap;
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .pocket-section {
      text-align: center;
      margin-bottom: 30px;
      padding: 20px;
      background: #f9f9f9;
      border-radius: 10px;
    }
    
    .pocket-container {
      position: relative;
      display: inline-block;
      margin: 0 auto;
    }
    
    .pocket-image {
      max-width: 200px;
      height: auto;
      display: block;
      border-radius: 10px;
    }
    
    .pocket-text {
      position: absolute;
      left: ${perfumeData.textPosition.x}%;
      top: ${perfumeData.textPosition.y}%;
      transform: translate(-50%, -50%);
      font-size: 11px;
      font-weight: bold;
      color: white;
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
      white-space: nowrap;
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .section {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }
    
    .section:last-child {
      border-bottom: none;
    }
    
    .label {
      font-size: 12px;
      color: #666;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    
    .value {
      font-size: 18px;
      color: #2c2c2c;
      font-weight: bold;
    }
    
    .price {
      text-align: center;
      margin: 30px 0;
    }
    
    .price-amount {
      font-size: 42px;
      font-weight: bold;
      color: #2c2c2c;
    }
    
    .footer {
      text-align: center;
      padding: 20px;
      background: #f9f9f9;
      font-size: 12px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">ZANA</div>
    </div>
    
    <div class="content">
      <div class="bottle-section">
        <div class="bottle-container">
          <img 
            src="${BOTTLE_IMAGES[perfumeData.bottleType as keyof typeof BOTTLE_IMAGES]}" 
            alt="Bottle" 
            class="bottle-image"
          />
          ${perfumeData.engraving ? `
          <div class="bottle-text">"${perfumeData.engraving}"</div>
          ` : ''}
        </div>
      </div>
      
      ${perfumeData.pocketImage ? `
      <div class="pocket-section">
        <div class="label">Cib Dizaynı</div>
        <div class="pocket-container">
          <img 
            src="${POCKET_IMAGES[perfumeData.pocketImage as keyof typeof POCKET_IMAGES]}" 
            alt="Pocket" 
            class="pocket-image"
          />
          ${perfumeData.engraving ? `
          <div class="pocket-text">${perfumeData.engraving}</div>
          ` : ''}
        </div>
      </div>
      ` : ''}
      
      <div class="section">
        <div class="label">Qoxu</div>
        <div class="value">${perfumeData.selectedPerfume}</div>
      </div>
      
      <div class="section">
        <div class="label">Kateqoriya</div>
        <div class="value">${perfumeData.perfumeCategory}</div>
      </div>
      
      <div class="section">
        <div class="label">Ölçü</div>
        <div class="value">${perfumeData.bottleSize}ML</div>
      </div>
      
      <div class="section">
        <div class="label">Gücləndirici</div>
        <div class="value">${perfumeData.magnifier}</div>
      </div>
      
      <div class="price">
        <div class="label">Qiymət</div>
        <div class="price-amount">${getPrice()} AZN</div>
      </div>
    </div>
    
    <div class="footer">
      ${new Date().toLocaleDateString("az-AZ", { year: "numeric", month: "long", day: "numeric" })}
      <br>
      ZANA - Custom Fragrance
    </div>
  </div>
</body>
</html>
    `;

    const blob = new Blob([pdfContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ZANA-${perfumeData.selectedPerfume}-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const isStepComplete = () => {
    if (step === 0) return perfumeData.bottleType !== "";
    if (step === 1) return perfumeData.bottleSize !== "";
    if (step === 2) return perfumeData.selectedPerfume !== "";
    if (step === 3) return perfumeData.magnifier !== "";
    if (step === 4) return true; // Design is optional
    if (step === 5) return perfumeData.pocketImage !== "";
    return true;
  };

  const filteredPerfumes = Object.entries(PERFUME_CATEGORIES).reduce<
    Record<string, (typeof PERFUME_CATEGORIES)[keyof typeof PERFUME_CATEGORIES]>
  >(
    (acc, [category, perfumes]) => {
      const filtered = perfumes.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      if (filtered.length > 0) {
        acc[category] = filtered;
      }
      return acc;
    },
    {},
  );

  const getSelectedPerfumeImage = () => {
    for (const category of Object.values(PERFUME_CATEGORIES)) {
      const perfume = category.find(
        (p) => p.name === perfumeData.selectedPerfume,
      );
      if (perfume) return perfume.image;
    }
    return "";
  };

  const getSelectedMagnifierImage = () => {
    if (!perfumeData.selectedPerfume || !perfumeData.magnifier) return "";
    const magnifiers = SCENT_MAGNIFIERS[perfumeData.selectedPerfume];
    if (!magnifiers) return "";
    const magnifier = magnifiers.find((m) => m.name === perfumeData.magnifier);
    return magnifier?.image || "";
  };

  const getAvailableMagnifiers = () => {
    if (!perfumeData.selectedPerfume) return [];
    return SCENT_MAGNIFIERS[perfumeData.selectedPerfume] || [];
  };

  const handleTextDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragOffset({
      x: clientX - perfumeData.textPosition.x,
      y: clientY - perfumeData.textPosition.y,
    });
  };

  const handleTextDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setPerfumeData({
      ...perfumeData,
      textPosition: {
        x: clientX - dragOffset.x,
        y: clientY - dragOffset.y,
      },
    });
  };

  const handleTextDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Simple Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2">
            {[0, 1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all ${
                  s <= step ? "w-12 bg-black" : "w-8 bg-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-3">
            Addım {step + 1} / 6
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Preview */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Önizləmə</h3>
            <div className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center p-4">
              {perfumeData.bottleType ? (
                <div className="text-center w-full">
                  {/* Bottle with text overlay */}
                  <div className="relative inline-block">
                    <img
                      src={
                        BOTTLE_IMAGES[
                          perfumeData.bottleType as keyof typeof BOTTLE_IMAGES
                        ]
                      }
                      alt="Bottle"
                      className="w-48 h-auto mx-auto"
                    />
                    {perfumeData.engraving && (
                      <div 
                        className="absolute bg-white/95 px-3 py-1.5 rounded-lg shadow-lg cursor-move select-none"
                        style={{
                          left: `${perfumeData.textPosition.x}%`,
                          top: `${perfumeData.textPosition.y}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        onMouseDown={handleTextDragStart}
                        onMouseMove={handleTextDragMove}
                        onMouseUp={handleTextDragEnd}
                        onMouseLeave={handleTextDragEnd}
                        onTouchStart={handleTextDragStart}
                        onTouchMove={handleTextDragMove}
                        onTouchEnd={handleTextDragEnd}
                      >
                        <p className="text-xs font-bold italic text-gray-800 whitespace-nowrap">
                          "{perfumeData.engraving}"
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Size info */}
                  {perfumeData.bottleSize && (
                    <div className="text-sm text-gray-600 mt-4">
                      {perfumeData.bottleSize}ML
                    </div>
                  )}

                  {/* Pocket Preview */}
                  {perfumeData.pocketImage && (
                    <div className="mt-6">
                      <div className="text-xs text-gray-500 mb-2">Cib Dizaynı</div>
                      <div className="relative inline-block">
                        <img
                          src={POCKET_IMAGES[perfumeData.pocketImage as keyof typeof POCKET_IMAGES]}
                          alt="Pocket"
                          className="w-32 h-auto rounded-lg shadow-md"
                        />
                        {perfumeData.engraving && (
                          <div 
                            className="absolute cursor-move select-none"
                            style={{
                              left: `${perfumeData.textPosition.x}%`,
                              top: `${perfumeData.textPosition.y}%`,
                              transform: 'translate(-50%, -50%)',
                            }}
                            onMouseDown={handleTextDragStart}
                            onMouseMove={handleTextDragMove}
                            onMouseUp={handleTextDragEnd}
                            onMouseLeave={handleTextDragEnd}
                            onTouchStart={handleTextDragStart}
                            onTouchMove={handleTextDragMove}
                            onTouchEnd={handleTextDragEnd}
                          >
                            <p className="text-xs font-bold text-white drop-shadow-lg">
                              {perfumeData.engraving}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-400">Qab seç</p>
              )}
            </div>

            {/* Summary */}
            {perfumeData.selectedPerfume && (
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Qoxu:</span>
                  <span className="font-semibold">
                    {perfumeData.selectedPerfume}
                  </span>
                </div>
                {perfumeData.magnifier && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Gücləndirici:</span>
                    <span className="font-semibold">{perfumeData.magnifier}</span>
                  </div>
                )}
                {perfumeData.bottleSize && (
                  <div className="flex justify-between text-lg font-bold pt-3 border-t">
                    <span>Qiymət:</span>
                    <span>{getPrice()} AZN</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Selection */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {/* Step 0: Choose Bottle Type - Enhanced Design */}
            {step === 0 && (
              <div>
                <div className="mb-6">
                  <div className="inline-block p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Qab növü seç</h2>
                  <p className="text-gray-600">İstədiyiniz qabı seçin</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(BOTTLE_IMAGES).map(([type, img], index) => (
                    <button
                      key={type}
                      onClick={() =>
                        setPerfumeData({ ...perfumeData, bottleType: type })
                      }
                      className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                        perfumeData.bottleType === type
                          ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg scale-105"
                          : "border-gray-200 hover:border-purple-300 hover:shadow-md hover:scale-105 bg-white"
                      }`}
                      style={{ animation: `scaleIn 0.3s ease-out ${index * 0.1}s both` }}
                    >
                      {perfumeData.bottleType === type && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                          <Check size={14} className="text-white" />
                        </div>
                      )}
                      <div className="relative aspect-square mb-3 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        <img
                          src={img}
                          alt={type}
                          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className={`text-center text-sm font-semibold transition-colors ${
                        perfumeData.bottleType === type ? "text-purple-600" : "text-gray-700"
                      }`}>
                        Dizayn {parseInt(type) + 1}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Choose Bottle Size - Enhanced Design */}
            {step === 1 && (
              <div>
                <div className="mb-6">
                  <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Ölçü seç</h2>
                  <p className="text-gray-600">Qab ölçüsünü seçin</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {BOTTLE_SIZES.map(({ size, price, label }, index) => (
                    <button
                      key={size}
                      onClick={() =>
                        setPerfumeData({ ...perfumeData, bottleSize: size })
                      }
                      className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                        perfumeData.bottleSize === size
                          ? "border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg scale-105"
                          : "border-gray-200 hover:border-blue-300 hover:shadow-md hover:scale-105 bg-white"
                      }`}
                      style={{ animation: `scaleIn 0.3s ease-out ${index * 0.1}s both` }}
                    >
                      {perfumeData.bottleSize === size && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                          <Check size={14} className="text-white" />
                        </div>
                      )}
                      <div className={`text-3xl font-bold mb-2 transition-colors ${
                        perfumeData.bottleSize === size ? "text-blue-600" : "text-gray-900"
                      }`}>
                        {label}
                      </div>
                      <div className={`text-xl font-semibold transition-colors ${
                        perfumeData.bottleSize === size ? "text-cyan-600" : "text-gray-600"
                      }`}>
                        {price} AZN
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Choose Perfume */}
            {step === 2 && (
              <div>
                <div className="mb-6">
                  <div className="inline-block p-3 bg-gradient-to-r from-orange-500 to-rose-500 rounded-xl mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Qoxu seç</h2>
                  <p className="text-gray-600">Sevimli qoxunuzu seçin</p>
                </div>
                <button
                  onClick={() => setShowPerfumeModal(true)}
                  className="w-full p-6 bg-gradient-to-r from-orange-50 to-rose-50 rounded-2xl border-2 border-orange-200 hover:border-orange-500 transition-all duration-300 flex items-center justify-between group hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    {getSelectedPerfumeImage() && (
                      <div className="relative">
                        <img
                          src={getSelectedPerfumeImage()}
                          alt=""
                          className="w-14 h-14 rounded-xl object-cover shadow-md"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-orange-500/20 to-transparent"></div>
                      </div>
                    )}
                    <div className="text-left">
                      <div className="text-sm text-gray-500 mb-1">Qoxu</div>
                      <div className="font-bold text-gray-900">
                        {perfumeData.selectedPerfume || "Seç"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={24} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* Step 3: Choose Magnifier - Enhanced Design */}
            {step === 3 && (
              <div>
                <div className="mb-6">
                  <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Gücləndirici</h2>
                  <p className="text-gray-600">Əlavə seçin</p>
                </div>
                <button
                  onClick={() => setShowMagnifierModal(true)}
                  className="w-full p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-200 hover:border-emerald-500 transition-all duration-300 flex items-center justify-between group hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    {getSelectedMagnifierImage() && (
                      <div className="relative">
                        <img
                          src={getSelectedMagnifierImage()}
                          alt=""
                          className="w-14 h-14 rounded-xl object-cover shadow-md"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-emerald-500/20 to-transparent"></div>
                      </div>
                    )}
                    <div className="text-left">
                      <div className="text-sm text-gray-500 mb-1">Gücləndirici</div>
                      <div className="font-bold text-gray-900">
                        {perfumeData.magnifier || "Seç"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={24} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* Step 4: Design - Enhanced Design */}
            {step === 4 && (
              <div>
                <div className="mb-6">
                  <div className="inline-block p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Dizayn</h2>
                  <p className="text-gray-600">İstəyə bağlı mətn (cib və qabda görünəcək)</p>
                </div>
                <button
                  onClick={() => setShowDesignModal(true)}
                  className="w-full p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 hover:border-amber-500 transition-all duration-300 flex items-center justify-between group hover:shadow-lg"
                >
                  <div className="text-left">
                    <div className="text-sm text-gray-500 mb-1">Həkk</div>
                    <div className="font-bold text-gray-900">
                      {perfumeData.engraving || "Mətn əlavə et"}
                    </div>
                  </div>
                  <ChevronRight size={24} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* Step 5: Choose Pocket - New Step */}
            {step === 5 && (
              <div>
                <div className="mb-6">
                  <div className="inline-block p-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Cib dizaynı seç</h2>
                  <p className="text-gray-600">Qoxu cibi üçün dizayn seçin</p>
                </div>
                <button
                  onClick={() => setShowPocketModal(true)}
                  className="w-full p-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border-2 border-violet-200 hover:border-violet-500 transition-all duration-300 flex items-center justify-between group hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    {perfumeData.pocketImage && (
                      <div className="relative">
                        <img
                          src={POCKET_IMAGES[perfumeData.pocketImage as keyof typeof POCKET_IMAGES]}
                          alt=""
                          className="w-14 h-14 rounded-xl object-cover shadow-md"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-violet-500/20 to-transparent"></div>
                      </div>
                    )}
                    <div className="text-left">
                      <div className="text-sm text-gray-500 mb-1">Cib dizaynı</div>
                      <div className="font-bold text-gray-900">
                        {perfumeData.pocketImage ? `Dizayn ${perfumeData.pocketImage}` : "Seç"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={24} className="text-violet-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 py-3 border-2 border-gray-300 rounded-xl hover:border-black transition font-semibold"
                >
                  Geri
                </button>
              )}
              {step < 5 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!isStepComplete()}
                  className={`flex-1 py-3 rounded-xl font-semibold transition ${
                    isStepComplete()
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Növbəti
                </button>
              ) : (
                <button
                  onClick={handleCreatePerfume}
                  className="flex-1 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition font-semibold"
                >
                  Hazırla
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Perfume Modal - Keep existing design */}
      {showPerfumeModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div 
            className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            style={{ animation: "scaleIn 0.3s ease-out" }}
          >
            {/* Header */}
            <div className="relative p-8 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-rose-50">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-rose-500 rounded-xl shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Qoxu seç</h3>
                      <p className="text-sm text-gray-600">Sevimli qoxunuzu tapın</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPerfumeModal(false)}
                    className="p-3 hover:bg-white/80 rounded-xl transition-all duration-300 hover:rotate-90 group"
                  >
                    <X size={24} className="text-gray-600 group-hover:text-orange-500" />
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Qoxu axtar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto p-8 max-h-[calc(90vh-200px)] custom-scrollbar">
              {Object.entries(filteredPerfumes).length > 0 ? (
                Object.entries(filteredPerfumes).map(([category, perfumes], categoryIndex) => (
                  <div 
                    key={category} 
                    className="mb-8 last:mb-0"
                    style={{ animation: `fadeInUp 0.4s ease-out ${categoryIndex * 0.1}s both` }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full"></div>
                      <h4 className="text-lg font-bold text-gray-900">{category}</h4>
                      <div className="flex-1 h-px bg-gray-200"></div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {perfumes.length} qoxu
                      </span>
                    </div>

                    {/* Perfume Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {perfumes.map((perfume, index) => (
                        <button
                          key={perfume.name}
                          onClick={() => {
                            setPerfumeData({
                              ...perfumeData,
                              selectedPerfume: perfume.name,
                              perfumeCategory: category,
                            });
                            setShowPerfumeModal(false);
                            setSearchTerm("");
                          }}
                          className={`group relative p-4 rounded-2xl border-2 transition-all duration-300 ${
                            perfumeData.selectedPerfume === perfume.name
                              ? "border-orange-500 bg-gradient-to-br from-orange-50 to-rose-50 shadow-lg scale-105"
                              : "border-gray-200 hover:border-orange-300 hover:shadow-md hover:scale-105 bg-white"
                          }`}
                          style={{ animation: `scaleIn 0.3s ease-out ${index * 0.05}s both` }}
                        >
                          {/* Selected Badge */}
                          {perfumeData.selectedPerfume === perfume.name && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}

                          {/* Image Container */}
                          <div className="relative aspect-square mb-3 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                            <img
                              src={perfume.image}
                              alt={perfume.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>

                          {/* Perfume Name */}
                          <div className="text-center">
                            <div className={`text-sm font-semibold transition-colors duration-300 ${
                              perfumeData.selectedPerfume === perfume.name
                                ? "text-orange-600"
                                : "text-gray-700 group-hover:text-gray-900"
                            }`}>
                              {perfume.name}
                            </div>
                          </div>

                          {/* Glow Effect on Selected */}
                          {perfumeData.selectedPerfume === perfume.name && (
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-rose-500/20 blur-xl -z-10"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg font-semibold">Heç bir nəticə tapılmadı</p>
                  <p className="text-gray-400 text-sm mt-2">Başqa bir açar söz ilə cəhd edin</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  {perfumeData.selectedPerfume ? (
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Seçildi: <span className="font-semibold text-gray-900">{perfumeData.selectedPerfume}</span>
                    </span>
                  ) : (
                    <span>Qoxu seçin</span>
                  )}
                </div>
                <button
                  onClick={() => {
                    setShowPerfumeModal(false);
                    setSearchTerm("");
                  }}
                  className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Təsdiq et
                </button>
              </div>
            </div>
          </div>

          {/* Custom Styles */}
          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.95);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }

            .custom-scrollbar::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 10px;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: linear-gradient(to bottom, #f97316, #fb923c);
              border-radius: 10px;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(to bottom, #ea580c, #f97316);
            }
          `}</style>
        </div>
      )}

      {/* Magnifier Modal - Enhanced Design */}
      {showMagnifierModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="relative p-8 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-teal-50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Gücləndirici seç</h3>
                    <p className="text-sm text-gray-600">Qoxunu gücləndir</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMagnifierModal(false)}
                  className="p-3 hover:bg-white/80 rounded-xl transition-all duration-300 hover:rotate-90 group"
                >
                  <X size={24} className="text-gray-600 group-hover:text-emerald-500" />
                </button>
              </div>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(90vh-160px)]">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {getAvailableMagnifiers().map((mag, index) => (
                  <button
                    key={mag.name}
                    onClick={() => {
                      setPerfumeData({ ...perfumeData, magnifier: mag.name });
                      setShowMagnifierModal(false);
                    }}
                    className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                      perfumeData.magnifier === mag.name
                        ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg scale-105"
                        : "border-gray-200 hover:border-emerald-300 hover:shadow-md hover:scale-105 bg-white"
                    }`}
                    style={{ animation: `scaleIn 0.3s ease-out ${index * 0.1}s both` }}
                  >
                    {perfumeData.magnifier === mag.name && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                        <Check size={14} className="text-white" />
                      </div>
                    )}
                    <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <img
                        src={mag.image}
                        alt={mag.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className={`text-center font-semibold transition-colors ${
                      perfumeData.magnifier === mag.name ? "text-emerald-600" : "text-gray-700"
                    }`}>
                      {mag.name}
                    </div>
                  </button>
                ))}
              </div>
              {getAvailableMagnifiers().length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg font-semibold">Əvvəlcə qoxu seçin</p>
                  <p className="text-gray-400 text-sm mt-2">Gücləndirici seçmək üçün qoxu seçməlisiniz</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Design Modal - Enhanced */}
      {showDesignModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl">
            <div className="relative p-8 border-b border-gray-100 bg-gradient-to-r from-amber-50 to-orange-50">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Mətn əlavə et</h3>
                    <p className="text-xs text-gray-600">Cib və qabda görünəcək</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowDesignModal(false)}
                  className="p-2 hover:bg-white/80 rounded-xl transition-all duration-300 hover:rotate-90"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Mətn..."
                  maxLength={15}
                  value={perfumeData.engraving}
                  onChange={(e) =>
                    setPerfumeData({ ...perfumeData, engraving: e.target.value })
                  }
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="text-xs text-gray-500">
                    {perfumeData.engraving.length > 0 ? "✓ Mətn əlavə edildi" : "İstəyə bağlı"}
                  </div>
                  <div className="text-sm text-gray-500">
                    {perfumeData.engraving.length}/15
                  </div>
                </div>
                {perfumeData.engraving && (
                  <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-xs text-amber-700 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                      </svg>
                      <span>Önizləmədə mətni sürüşdürərək yerini dəyişdirin</span>
                    </p>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() =>
                    setPerfumeData({ ...perfumeData, engraving: "" })
                  }
                  className="flex-1 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-400 transition font-semibold"
                >
                  Təmizlə
                </button>
                <button
                  onClick={() => setShowDesignModal(false)}
                  className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:shadow-lg transition font-semibold"
                >
                  Saxla
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pocket Modal - New Modal */}
      {showPocketModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="relative p-8 border-b border-gray-100 bg-gradient-to-r from-violet-50 to-purple-50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-200/30 to-transparent rounded-full blur-3xl"></div>
              
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
                <button
                  onClick={() => setShowPocketModal(false)}
                  className="p-3 hover:bg-white/80 rounded-xl transition-all duration-300 hover:rotate-90 group"
                >
                  <X size={24} className="text-gray-600 group-hover:text-violet-500" />
                </button>
              </div>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(90vh-160px)]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Object.entries(POCKET_IMAGES).map(([key, img], index) => (
                  <button
                    key={key}
                    onClick={() => {
                      setPerfumeData({ ...perfumeData, pocketImage: key });
                      setShowPocketModal(false);
                    }}
                    className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                      perfumeData.pocketImage === key
                        ? "border-violet-500 bg-gradient-to-br from-violet-50 to-purple-50 shadow-lg scale-105"
                        : "border-gray-200 hover:border-violet-300 hover:shadow-md hover:scale-105 bg-white"
                    }`}
                    style={{ animation: `scaleIn 0.3s ease-out ${index * 0.1}s both` }}
                  >
                    {perfumeData.pocketImage === key && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <Check size={14} className="text-white" />
                      </div>
                    )}
                    <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <img
                        src={img}
                        alt={`Pocket ${key}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {perfumeData.engraving && (
                        <div 
                          className="absolute"
                          style={{
                            left: `${perfumeData.textPosition.x}%`,
                            top: `${perfumeData.textPosition.y}%`,
                            transform: 'translate(-50%, -50%)',
                          }}
                        >
                          <p className="text-xs font-bold text-white drop-shadow-lg">
                            {perfumeData.engraving}
                          </p>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className={`text-center font-semibold transition-colors ${
                      perfumeData.pocketImage === key ? "text-violet-600" : "text-gray-700"
                    }`}>
                      Dizayn {key}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Hazırdır!</h2>
            <p className="text-gray-600 mb-6">Sifarişiniz yaradıldı</p>

            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
              <div className="font-semibold mb-3">
                {perfumeData.selectedPerfume}
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Ölçü: {perfumeData.bottleSize}ML</div>
                <div>Gücləndirici: {perfumeData.magnifier}</div>
                {perfumeData.engraving && (
                  <div>Həkk: "{perfumeData.engraving}"</div>
                )}
                {perfumeData.pocketImage && (
                  <div>Cib: Dizayn {perfumeData.pocketImage}</div>
                )}
              </div>
              <div className="text-2xl font-bold mt-3">{getPrice()} AZN</div>
            </div>

            <div className="space-y-3 mb-4">
              <button
                onClick={sendToWhatsApp}
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2 font-semibold"
              >
                <MessageCircle size={20} />
                WhatsApp
              </button>

              <button
                onClick={generatePDF}
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 font-semibold"
              >
                <Download size={20} />
                Yüklə
              </button>
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Bağla
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePerfume;