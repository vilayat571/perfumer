/* eslint-disable react-hooks/purity */
import { useState } from "react";
import { X, ChevronRight, Check, Download, MessageCircle } from "lucide-react";
import {
  BOTTLE_IMAGES,
  MAGNIFIERS,
  PERFUME_CATEGORIES,
} from "../data/createPerfume";
import Header from "../components/CreatePerfume/Header";

export interface PerfumeData {
  bottleType: string;
  bottleSize: string;
  selectedPerfume: string;
  perfumeCategory: string;
  magnifier: string;
  engraving: string;
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
  });
  const [showPerfumeModal, setShowPerfumeModal] = useState(false);
  const [showMagnifierModal, setShowMagnifierModal] = useState(false);
  const [showDesignModal, setShowDesignModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
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
    const magnifier = MAGNIFIERS.find((m) => m.name === perfumeData.magnifier);
    return magnifier?.image || "";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Simple Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2">
            {[0, 1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all ${
                  s <= step ? "w-12 bg-black" : "w-8 bg-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-3">
            Addım {step + 1} / 5
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
                      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 bg-white/95 px-3 py-1.5 rounded-lg shadow-lg">
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
            {/* Step 0: Choose Bottle Type */}
            {step === 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-2">Qab növü seç</h2>
                <p className="text-gray-600 mb-6">İstədiyiniz qabı seçin</p>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(BOTTLE_IMAGES).map(([type, img]) => (
                    <button
                      key={type}
                      onClick={() =>
                        setPerfumeData({ ...perfumeData, bottleType: type })
                      }
                      className={`p-6 rounded-xl border-2 transition-all ${
                        perfumeData.bottleType === type
                          ? "border-black bg-gray-50"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={img}
                        alt={type}
                        className="w-full object-cover rounded mb-3"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Choose Bottle Size */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-2">Ölçü seç</h2>
                <p className="text-gray-600 mb-6">Qab ölçüsünü seçin</p>
                <div className="grid grid-cols-2 gap-4">
                  {BOTTLE_SIZES.map(({ size, price, label }) => (
                    <button
                      key={size}
                      onClick={() =>
                        setPerfumeData({ ...perfumeData, bottleSize: size })
                      }
                      className={`p-6 rounded-xl border-2 transition-all ${
                        perfumeData.bottleSize === size
                          ? "border-black bg-gray-50"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <div className="text-2xl font-bold mb-1">{label}</div>
                      <div className="text-lg font-semibold text-gray-600">
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
                <h2 className="text-2xl font-bold mb-2">Qoxu seç</h2>
                <p className="text-gray-600 mb-6">Sevimli qoxunuzu seçin</p>
                <button
                  onClick={() => setShowPerfumeModal(true)}
                  className="w-full p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-black transition flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    {getSelectedPerfumeImage() && (
                      <img
                        src={getSelectedPerfumeImage()}
                        alt=""
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    )}
                    <div className="text-left">
                      <div className="text-sm text-gray-500">Qoxu</div>
                      <div className="font-semibold">
                        {perfumeData.selectedPerfume || "Seç"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            {/* Step 3: Choose Magnifier */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-2">Gücləndirici</h2>
                <p className="text-gray-600 mb-6">Əlavə seçin</p>
                <button
                  onClick={() => setShowMagnifierModal(true)}
                  className="w-full p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-black transition flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    {getSelectedMagnifierImage() && (
                      <img
                        src={getSelectedMagnifierImage()}
                        alt=""
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    )}
                    <div className="text-left">
                      <div className="text-sm text-gray-500">Gücləndirici</div>
                      <div className="font-semibold">
                        {perfumeData.magnifier || "Seç"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            {/* Step 4: Design */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold mb-2">Dizayn</h2>
                <p className="text-gray-600 mb-6">İstəyə bağlı mətn</p>
                <button
                  onClick={() => setShowDesignModal(true)}
                  className="w-full p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-black transition flex items-center justify-between"
                >
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Həkk</div>
                    <div className="font-semibold">
                      {perfumeData.engraving || "Mətn əlavə et"}
                    </div>
                  </div>
                  <ChevronRight size={20} />
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
              {step < 4 ? (
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

      {/* Perfume Modal */}
      {showPerfumeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Qoxu seç</h3>
                <button
                  onClick={() => setShowPerfumeModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>
              <input
                type="text"
                placeholder="Axtar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="overflow-y-auto p-6 max-h-[60vh]">
              {Object.entries(filteredPerfumes).map(([category, perfumes]) => (
                <div key={category} className="mb-6">
                  <h4 className="font-semibold mb-3">{category}</h4>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {perfumes.map((perfume) => (
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
                        className={`p-3 rounded-lg border transition ${
                          perfumeData.selectedPerfume === perfume.name
                            ? "border-black bg-gray-50"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        <img
                          src={perfume.image}
                          alt={perfume.name}
                          className="w-full h-20 object-cover rounded mb-2"
                        />
                        <div className="text-xs font-medium">
                          {perfume.name}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Magnifier Modal */}
      {showMagnifierModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Gücləndirici seç</h3>
              <button
                onClick={() => setShowMagnifierModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {MAGNIFIERS.map((mag) => (
                <button
                  key={mag.name}
                  onClick={() => {
                    setPerfumeData({ ...perfumeData, magnifier: mag.name });
                    setShowMagnifierModal(false);
                  }}
                  className={`p-4 rounded-lg border transition ${
                    perfumeData.magnifier === mag.name
                      ? "border-black bg-gray-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={mag.image}
                    alt={mag.name}
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <div className="font-semibold text-sm">{mag.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Design Modal */}
      {showDesignModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Mətn əlavə et</h3>
              <button
                onClick={() => setShowDesignModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Mətn..."
                maxLength={15}
                value={perfumeData.engraving}
                onChange={(e) =>
                  setPerfumeData({ ...perfumeData, engraving: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="text-sm text-gray-500 mt-2 text-right">
                {perfumeData.engraving.length}/15
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() =>
                  setPerfumeData({ ...perfumeData, engraving: "" })
                }
                className="flex-1 py-2 border rounded-lg hover:bg-gray-50 transition"
              >
                Təmizlə
              </button>
              <button
                onClick={() => setShowDesignModal(false)}
                className="flex-1 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Saxla
              </button>
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