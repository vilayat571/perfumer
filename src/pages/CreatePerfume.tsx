import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { X, ChevronRight, Check, Download, MessageCircle } from "lucide-react";
import {
  BOTTLE_IMAGES,
  MAGNIFIERS,
  PERFUME_CATEGORIES,
} from "../data/createPerfume";
import Header from "../components/CreatePerfume/Header";
import Progress from "../components/CreatePerfume/Progress";

export interface PerfumeData {
  bottleSize: string;
  selectedPerfume: string;
  perfumeCategory: string;
  magnifier: string;
  engraving: string;
}

const CreatePerfume = () => {
  const [step, setStep] = useState(0);
  const [perfumeData, setPerfumeData] = useState<PerfumeData>({
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

  // WhatsApp number (replace with your actual number)
  const WHATSAPP_NUMBER = "+60176487917"; // Format: country code + number (no + or spaces)

  const handleCreatePerfume = () => {
    setShowSuccessModal(true);
  };

  const sendToWhatsApp = () => {
    const price = perfumeData.bottleSize === "30" ? "22" : 
                  perfumeData.bottleSize === "50" ? "32" : 
                  perfumeData.bottleSize === "70" ? "37" : "40";

    const message = `
🌸 *ZANA - Yeni Sifariş* 🌸

📦 *Sifariş Detalları:*
━━━━━━━━━━━━━━━━

🔸 Qoxu: ${perfumeData.selectedPerfume}
🔸 Kateqoriya: ${perfumeData.perfumeCategory}
🔸 Qab Ölçüsü: ${perfumeData.bottleSize}ML
🔸 Gücləndirici: ${perfumeData.magnifier}
${perfumeData.engraving ? `🔸 Həkk: "${perfumeData.engraving}"` : ""}

━━━━━━━━━━━━━━━━
💰 *Ümumi Qiymət:* ${price} AZN

📅 Tarix: ${new Date().toLocaleDateString("az-AZ", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    })}

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
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #fef3c7 0%, #fce7f3 100%);
      padding: 60px 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .container {
      background: white;
      max-width: 600px;
      width: 100%;
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    }
    
    .header {
      background: linear-gradient(135deg, #f59e0b 0%, #ec4899 100%);
      padding: 40px;
      text-align: center;
      position: relative;
    }
    
    .header::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 60px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .logo {
      font-size: 48px;
      font-weight: 700;
      color: white;
      letter-spacing: 3px;
      margin-bottom: 8px;
    }
    
    .subtitle {
      color: rgba(255, 255, 255, 0.9);
      font-size: 14px;
      letter-spacing: 1px;
    }
    
    .content {
      padding: 60px 40px 40px;
    }
    
    .bottle-image {
      text-align: center;
      margin-bottom: 40px;
    }
    
    .bottle-image img {
      max-width: 250px;
      height: auto;
      filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15));
    }
    
    .perfume-name {
      text-align: center;
      margin-bottom: 40px;
    }
    
    .perfume-name h2 {
      font-size: 32px;
      font-weight: 700;
      color: #111;
      margin-bottom: 8px;
    }
    
    .perfume-name p {
      font-size: 16px;
      color: #666;
      font-weight: 500;
    }
    
    .details-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 40px;
    }
    
    .detail-card {
      background: linear-gradient(135deg, #fef3c7 0%, #fce7f3 100%);
      padding: 20px;
      border-radius: 15px;
      text-align: center;
    }
    
    .detail-label {
      font-size: 12px;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
      font-weight: 600;
    }
    
    .detail-value {
      font-size: 18px;
      color: #111;
      font-weight: 700;
    }
    
    .engraving-section {
      background: linear-gradient(135deg, #f59e0b 0%, #ec4899 100%);
      padding: 30px;
      border-radius: 20px;
      text-align: center;
      margin-bottom: 30px;
    }
    
    .engraving-text {
      font-size: 28px;
      font-weight: 700;
      color: white;
      font-style: italic;
      letter-spacing: 1px;
    }
    
    .price-section {
      text-align: center;
      margin-bottom: 40px;
    }
    
    .price-label {
      font-size: 14px;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }
    
    .price {
      font-size: 48px;
      font-weight: 700;
      background: linear-gradient(135deg, #f59e0b 0%, #ec4899 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .footer {
      text-align: center;
      padding: 30px 40px;
      background: #fafafa;
      border-top: 1px solid #eee;
    }
    
    .footer-date {
      font-size: 13px;
      color: #999;
      margin-bottom: 15px;
    }
    
    .footer-message {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    
    .footer-brand {
      font-size: 18px;
      font-weight: 700;
      color: #111;
      letter-spacing: 2px;
    }
    
    .divider {
      width: 60px;
      height: 3px;
      background: linear-gradient(135deg, #f59e0b 0%, #ec4899 100%);
      margin: 20px auto;
      border-radius: 3px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">ZANA</div>
      <div class="subtitle">Custom Fragrance</div>
    </div>
    
    <div class="content">
      <div class="bottle-image">
        <img src="${BOTTLE_IMAGES[perfumeData.bottleSize as keyof typeof BOTTLE_IMAGES]}" alt="Your Perfume" />
      </div>
      
      <div class="perfume-name">
        <h2>${perfumeData.selectedPerfume}</h2>
        <p>${perfumeData.perfumeCategory}</p>
      </div>
      
      <div class="divider"></div>
      
      <div class="details-grid">
        <div class="detail-card">
          <div class="detail-label">Bottle Size</div>
          <div class="detail-value">${perfumeData.bottleSize}ML</div>
        </div>
        <div class="detail-card">
          <div class="detail-label">Magnifier</div>
          <div class="detail-value">${perfumeData.magnifier}</div>
        </div>
      </div>
      
      ${
        perfumeData.engraving
          ? `
      <div class="engraving-section">
        <div class="engraving-text">"${perfumeData.engraving}"</div>
      </div>
      `
          : ""
      }
      
      <div class="price-section">
        <div class="price-label">Total Price</div>
        <div class="price">${perfumeData.bottleSize === "30" ? "22" : perfumeData.bottleSize === "50" ? "32" : perfumeData.bottleSize === "70" ? "37" : "40"} AZN</div>
      </div>
    </div>
    
    <div class="footer">
      <div class="footer-date">${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
      <div class="footer-message">
        Thank you for creating your unique fragrance with us.<br>
        Your custom scent has been carefully crafted just for you.
      </div>
      <div class="divider"></div>
      <div class="footer-brand">ZANA</div>
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
    if (step === 0) return perfumeData.bottleSize !== "";
    if (step === 1) return perfumeData.selectedPerfume !== "";
    if (step === 2) return perfumeData.magnifier !== "";
    return true;
  };

 const filteredPerfumes = Object.entries(PERFUME_CATEGORIES).reduce<Record<string, (typeof PERFUME_CATEGORIES)[keyof typeof PERFUME_CATEGORIES]>
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
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-white to-rose-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 sm:py-12">
        <Progress step={step} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Bottle Preview */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
                {perfumeData.bottleSize ? (
                  <div className="relative cursor-pointer">
                    <img
                      src={
                        BOTTLE_IMAGES[
                          perfumeData.bottleSize as keyof typeof BOTTLE_IMAGES
                        ]
                      }
                      alt="Bottle"
                      className="w-80 h-auto object-contain"
                    />
                    {perfumeData.engraving && (
                      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-lg">
                        <p className="text-sm font-semibold text-gray-800">
                          {perfumeData.engraving}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-gray-400">
                    <p className="text-lg">Qab seç</p>
                  </div>
                )}
              </div>

              {/* Perfume Info */}
              {perfumeData.selectedPerfume && (
                <div className="mt-6 text-center">
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <p className="text-sm text-gray-500">Seçilmiş Qoxu</p>
                    <p className="text-xl font-bold text-gray-900">
                      {perfumeData.selectedPerfume}
                    </p>
                    <p className="text-sm text-gray-600">
                      {perfumeData.perfumeCategory}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Selection Area */}
          <div>
            {/* Step 0: Choose Bottle Size */}
            {step === 0 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  Qab ölçüsü
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8">
                  Ətrin üçün istədiyin ölçünü seç.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {Object.entries(BOTTLE_IMAGES).map(([size, img]) => (
                    <button
                      key={size}
                      onClick={() =>
                        setPerfumeData({ ...perfumeData, bottleSize: size })
                      }
                      className={`relative cursor-pointer p-4 sm:p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                        perfumeData.bottleSize === size
                          ? " bg-white text-black shadow-2xl scale-105"
                          : "border-gray-200 bg-white hover:border-gray-400 hover:shadow-lg"
                      }`}
                    >
                      {perfumeData.bottleSize === size && (
                        <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <Check className="text-black" size={16} />
                        </div>
                      )}
                      <img
                        src={img}
                        alt={`${size}ML`}
                        className="w-full h-24 sm:h-32 object-contain mb-3 sm:mb-4"
                      />
                      <div className="text-xl sm:text-2xl font-bold">
                        {size}ML
                      </div>
                      <div className="text-xs sm:text-sm mt-1 opacity-75">
                        {size === "30"
                          ? "22"
                          : size === "50"
                            ? "32"
                            : size === "70"
                              ? "37"
                              : "40"}{" "}
                        AZN
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Choose Perfume */}
            {step === 1 && (
              <div>
                <h2 className="text-3xl font-bold mb-8">Qoxu növü:</h2>
                <button
                  onClick={() => setShowPerfumeModal(true)}
                  className="w-full p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-black transition flex items-center justify-between"
                >
                  <div className="text-left flex items-center gap-4">
                    {getSelectedPerfumeImage() && (
                      <img
                        src={getSelectedPerfumeImage()}
                        alt=""
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                    )}
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Qoxular:</div>
                      <div className="text-xl font-semibold cursor-pointer">
                        {perfumeData.selectedPerfume || "Seçmək üçün kliklə"}
                      </div>
                      {perfumeData.perfumeCategory && (
                        <div className="text-sm text-gray-600 mt-1">
                          {perfumeData.perfumeCategory}
                        </div>
                      )}
                    </div>
                  </div>
                  <ChevronRight size={24} />
                </button>
              </div>
            )}

            {/* Step 2: Choose Magnifier */}
            {step === 2 && (
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Gücləndirici əlavə et
                </h2>
                <p className="text-gray-600 mb-8">
                  Mütəxəsislər tərəfindən tövsiyyə edilənlər
                </p>
                <button
                  onClick={() => setShowMagnifierModal(true)}
                  className="w-full p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-black transition flex items-center justify-between"
                >
                  <div className="text-left flex items-center gap-4">
                    {getSelectedMagnifierImage() && (
                      <img
                        src={getSelectedMagnifierImage()}
                        alt=""
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                    )}
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        Seçilmiş Gücləndirici
                      </div>
                      <div className="text-xl font-semibold">
                        {perfumeData.magnifier || "Seçmək üçün kliklə"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={24} />
                </button>
              </div>
            )}

            {/* Step 3: Design Bottle */}
            {step === 3 && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Qabını Dizayn Et</h2>
                <p className="text-gray-600 mb-8">
                  İstəyə bağlı - Şəxsi mətn əlavə et
                </p>
                <button
                  onClick={() => setShowDesignModal(true)}
                  className="w-full p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-black transition flex items-center justify-between"
                >
                  <div className="text-left">
                    <div className="text-sm text-gray-500 mb-1">
                      Həkk olunan mətn
                    </div>
                    <div className="text-xl font-semibold">
                      {perfumeData.engraving || "Mətn əlavə et"}
                    </div>
                  </div>
                  <ChevronRight size={24} />
                </button>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 px-5 cursor-pointer py-3 border-2 border-gray-300 rounded-lg hover:border-black transition"
                >
                  Geri
                </button>
              )}
              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!isStepComplete()}
                  className={`flex-1 px-6 py-4 cursor-pointer rounded-lg transition ${
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
                  className="flex-1 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 text-lg font-semibold"
                >
                  Qoxumu hazırla
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Perfume Selection Modal */}
      {showPerfumeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">İstədiyini qoxunu seç!</h3>
                <button
                  onClick={() => setShowPerfumeModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
              <input
                type="text"
                placeholder="Qoxunu axtar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black outline-none"
              />
            </div>

            <div className="overflow-y-auto p-6">
              {Object.entries(filteredPerfumes).map(([category, perfumes]) => (
                <div key={category} className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-gray-700">
                    {category}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {perfumes.map((perfume: { name: boolean | Key | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; image: string | undefined; }) => (
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
                        className={`p-3 cursor-pointer rounded-xl border-2 transition ${
                          perfumeData.selectedPerfume === perfume.name
                            ? "border-black bg-white text-black"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        <img
                          src={perfume.image}
                          alt={perfume.name}
                          className="w-full h-32 object-cover rounded-lg mb-2"
                        />
                        <div className="font-medium text-sm">
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

      {/* Magnifier Selection Modal */}
      {showMagnifierModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Gücləndirici əlavə et</h3>
              <button
                onClick={() => setShowMagnifierModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MAGNIFIERS.map((mag) => (
                <button
                  key={mag.name}
                  onClick={() => {
                    setPerfumeData({ ...perfumeData, magnifier: mag.name });
                    setShowMagnifierModal(false);
                  }}
                  className={`p-6 rounded-2xl border-2 transition ${
                    perfumeData.magnifier === mag.name
                      ? "border-black bg-black text-white"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={mag.image}
                    alt={mag.name}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <div className="font-semibold text-lg mb-1">{mag.name}</div>
                  <div className="text-sm opacity-75">{mag.category}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Design Modal */}
      {showDesignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Şəxsi Mətn Əlavə Et</h3>
              <button
                onClick={() => setShowDesignModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mətniniz (maksimum 15 simvol)
              </label>
              <input
                type="text"
                placeholder="Mənim ətrim"
                maxLength={15}
                value={perfumeData.engraving}
                onChange={(e) =>
                  setPerfumeData({ ...perfumeData, engraving: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black outline-none text-lg"
              />
              <div className="text-sm text-gray-500 mt-2">
                {perfumeData.engraving.length}/15 simvol
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() =>
                  setPerfumeData({ ...perfumeData, engraving: "" })
                }
                className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl hover:border-black transition"
              >
                Təmizlə
              </button>
              <button
                onClick={() => setShowDesignModal(false)}
                className="flex-1 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                Yadda saxla
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 text-center animate-fadeIn">
            <div className="mb-6">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={48} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Qoxunuz Hazırdır!
              </h2>
              <p className="text-gray-600">
                Xüsusi ətiriniz uğurla yaradıldı
              </p>
            </div>

            <div className="mb-8 bg-linear-to-br from-amber-50 to-rose-50 rounded-2xl p-6">
              <img
                src={
                  BOTTLE_IMAGES[
                    perfumeData.bottleSize as keyof typeof BOTTLE_IMAGES
                  ]
                }
                alt="Your Perfume"
                className="w-48 h-auto mx-auto mb-4 object-contain"
              />
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {perfumeData.selectedPerfume}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  {perfumeData.perfumeCategory}
                </p>
                <p className="text-sm text-gray-600">
                  {perfumeData.magnifier} ilə
                </p>
                {perfumeData.engraving && (
                  <p className="text-sm text-gray-800 mt-2 font-semibold italic">
                    "{perfumeData.engraving}"
                  </p>
                )}
                <p className="text-2xl font-bold text-gray-900 mt-4">
                  {perfumeData.bottleSize === "30"
                    ? "22"
                    : perfumeData.bottleSize === "50"
                      ? "32"
                      : perfumeData.bottleSize === "70"
                        ? "37"
                        : "40"}{" "}
                  AZN
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-4">
              <button
                onClick={sendToWhatsApp}
                className="w-full px-8 py-4 bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={24} />
                WhatsApp ilə Göndər
              </button>

              <button
                onClick={generatePDF}
                className="w-full px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition flex items-center justify-center gap-2 text-lg font-semibold"
              >
                <Download size={24} />
                Qəbzi Yüklə
              </button>
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="text-gray-600 hover:text-gray-900 transition"
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