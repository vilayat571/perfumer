import { useState } from "react";
import { X, Check, Download } from "lucide-react";
import {
  BOTTLE_IMAGES,
  MAGNIFIERS,
  PERFUME_CATEGORIES,
} from "../data/createPerfume";
import Header from "../components/CreatePerfume/Header";
import Progress from "../components/CreatePerfume/Progress";
import BottleSection from "../components/CreatePerfume/BottleSection";

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

  const handleCreatePerfume = () => {
    setShowSuccessModal(true);
  };

  const generatePDF = () => {
    // Create a more professional PDF content with HTML
    const pdfContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: 'Arial', sans-serif;
      max-width: 800px;
      margin: 40px auto;
      padding: 40px;
      background: linear-gradient(135deg, #FFF8DC 0%, #FFE4E1 100%);
    }
    .container {
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 40px;
      border-bottom: 3px solid #000;
      padding-bottom: 20px;
    }
    .header h1 {
      font-size: 36px;
      margin: 0;
      color: #000;
      letter-spacing: 2px;
    }
    .header p {
      color: #666;
      margin-top: 10px;
      font-size: 14px;
    }
    .product-image {
      text-align: center;
      margin: 30px 0;
    }
    .product-image img {
      max-width: 300px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
    .details {
      margin: 30px 0;
    }
    .detail-row {
      display: flex;
      padding: 15px;
      border-bottom: 1px solid #eee;
      align-items: center;
    }
    .detail-label {
      font-weight: bold;
      width: 200px;
      color: #333;
      font-size: 16px;
    }
    .detail-value {
      flex: 1;
      color: #666;
      font-size: 16px;
    }
    .engraving {
      text-align: center;
      margin: 30px 0;
      padding: 20px;
      background: #f8f8f8;
      border-radius: 10px;
    }
    .engraving p {
      font-size: 24px;
      font-weight: bold;
      color: #000;
      font-style: italic;
    }
    .footer {
      margin-top: 40px;
      text-align: center;
      padding-top: 20px;
      border-top: 2px solid #000;
    }
    .footer p {
      color: #666;
      font-size: 12px;
    }
    .price {
      text-align: center;
      margin: 30px 0;
      font-size: 32px;
      font-weight: bold;
      color: #000;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>LA CRÉATION</h1>
      <p>Your Custom Perfume Order</p>
    </div>
    
    <div class="product-image">
      <img src="${BOTTLE_IMAGES[perfumeData.bottleSize as keyof typeof BOTTLE_IMAGES]}" alt="Your Custom Perfume" />
    </div>
    
    <div class="details">
      <div class="detail-row">
        <div class="detail-label">Bottle Size:</div>
        <div class="detail-value">${perfumeData.bottleSize}ML</div>
      </div>
      <div class="detail-row">
        <div class="detail-label">Perfume:</div>
        <div class="detail-value">${perfumeData.selectedPerfume}</div>
      </div>
      <div class="detail-row">
        <div class="detail-label">Category:</div>
        <div class="detail-value">${perfumeData.perfumeCategory}</div>
      </div>
      <div class="detail-row">
        <div class="detail-label">Scent Magnifier:</div>
        <div class="detail-value">${perfumeData.magnifier}</div>
      </div>
      ${
        perfumeData.engraving
          ? `
      <div class="detail-row">
        <div class="detail-label">Personalization:</div>
        <div class="detail-value">${perfumeData.engraving}</div>
      </div>
      `
          : ""
      }
    </div>
    
    ${
      perfumeData.engraving
        ? `
    <div class="engraving">
      <p>"${perfumeData.engraving}"</p>
    </div>
    `
        : ""
    }
    
    <div class="price">US$ ${perfumeData.bottleSize === "30" ? "138" : perfumeData.bottleSize === "50" ? "198" : perfumeData.bottleSize === "70" ? "258" : "318"}</div>
    
    <div class="footer">
      <p>Order Date: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
      <p>Thank you for creating your unique fragrance with us!</p>
      <p style="margin-top: 20px; font-weight: bold;">LA CRÉATION PARIS</p>
    </div>
  </div>
</body>
</html>
    `;

    const blob = new Blob([pdfContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `LA-CREATION-${perfumeData.selectedPerfume}-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Close the success modal after download
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 1000);
  };

  const isStepComplete = () => {
    if (step === 0) return perfumeData.bottleSize !== "";
    if (step === 1) return perfumeData.selectedPerfume !== "";
    if (step === 2) return perfumeData.magnifier !== "";
    return true;
  };

  const filteredPerfumes = Object.entries(PERFUME_CATEGORIES).reduce(
    (acc, [category, perfumes]) => {
      const filtered = perfumes.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      if (filtered.length > 0) {
        acc[category] = filtered;
      }
      return acc;
    },
    {} as Record<
      string,
      (typeof PERFUME_CATEGORIES)[keyof typeof PERFUME_CATEGORIES]
    >,
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

      <div className="max-w-7xl mx-auto px-4 sm:px-8  sm:py-12">
        <Progress step={step} />
        <BottleSection
          setShowMagnifierModal={setShowMagnifierModal}
          isStepComplete={isStepComplete}
          handleCreatePerfume={handleCreatePerfume}
          setShowDesignModal={setShowDesignModal}
          setStep={setStep}
          getSelectedMagnifierImage={getSelectedMagnifierImage}
          getSelectedPerfumeImage={getSelectedPerfumeImage}
          step={step}
          perfumeData={perfumeData}
          setPerfumeData={setPerfumeData} setShowPerfumeModal={function (): void {
            throw new Error("Function not implemented.");
          } }        />
      </div>

      {/* Perfume Selection Modal */}
      {showPerfumeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">
                  Choose Your Eau de Parfum
                </h3>
                <button
                  onClick={() => setShowPerfumeModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
              <input
                type="text"
                placeholder="Search perfumes..."
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
                        className={`p-3 rounded-xl border-2 transition ${
                          perfumeData.selectedPerfume === perfume.name
                            ? "border-black bg-black text-white"
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
              <h3 className="text-2xl font-bold">Add a Scent Magnifier</h3>
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
              <h3 className="text-2xl font-bold">Add Personalized Text</h3>
              <button
                onClick={() => setShowDesignModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Text (max 15 characters)
              </label>
              <input
                type="text"
                placeholder="My perfume"
                maxLength={15}
                value={perfumeData.engraving}
                onChange={(e) =>
                  setPerfumeData({ ...perfumeData, engraving: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black outline-none text-lg"
              />
              <div className="text-sm text-gray-500 mt-2">
                {perfumeData.engraving.length}/15 characters
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() =>
                  setPerfumeData({ ...perfumeData, engraving: "" })
                }
                className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl hover:border-black transition"
              >
                Clear
              </button>
              <button
                onClick={() => setShowDesignModal(false)}
                className="flex-1 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                Save
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
                Your Perfume is Ready!
              </h2>
              <p className="text-gray-600">
                Your custom fragrance has been created successfully
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
                  with {perfumeData.magnifier}
                </p>
                {perfumeData.engraving && (
                  <p className="text-sm text-gray-800 mt-2 font-semibold italic">
                    "{perfumeData.engraving}"
                  </p>
                )}
                <p className="text-2xl font-bold text-gray-900 mt-4">
                  US${" "}
                  {perfumeData.bottleSize === "30"
                    ? "138"
                    : perfumeData.bottleSize === "50"
                      ? "198"
                      : perfumeData.bottleSize === "70"
                        ? "258"
                        : "318"}
                </p>
              </div>
            </div>

            <button
              onClick={generatePDF}
              className="w-full px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition flex items-center justify-center gap-2 text-lg font-semibold mb-4"
            >
              <Download size={24} />
              Download Your Order Details
            </button>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePerfume;
