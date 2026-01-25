import { Check, ChevronRight } from "lucide-react";
import { BOTTLE_IMAGES } from "../../data/createPerfume";
import type { PerfumeData } from "../../pages/CreatePerfume";

const BottleSection = ({
  step,
  perfumeData,
  setPerfumeData,
  setShowPerfumeModal,
  getSelectedPerfumeImage,
  getSelectedMagnifierImage,
  setStep,
  setShowDesignModal,
  handleCreatePerfume,
  isStepComplete,
  setShowMagnifierModal,
}: {
  step: number;
  getSelectedPerfumeImage: () => string;
  setShowPerfumeModal: React.Dispatch<React.SetStateAction<boolean>>;
  perfumeData: PerfumeData;
  setPerfumeData: React.Dispatch<React.SetStateAction<PerfumeData>>;
  getSelectedMagnifierImage: () => string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setShowDesignModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleCreatePerfume: () => void;
  isStepComplete: () => boolean;
  setShowMagnifierModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left Side - Bottle Preview */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="w-80 h-96 bg-linear-to-br from-amber-100 to-rose-100 rounded-3xl flex items-center justify-center shadow-2xl">
            {perfumeData.bottleSize ? (
              <div className="relative">
                <img
                  src={
                    BOTTLE_IMAGES[
                      perfumeData.bottleSize as keyof typeof BOTTLE_IMAGES
                    ]
                  }
                  alt="Bottle"
                  className="w-48 h-auto object-contain"
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
                <div className="text-6xl mb-4">🧴</div>
                <p className="text-lg">Select your bottle</p>
              </div>
            )}
          </div>

          {/* Perfume Info */}
          {perfumeData.selectedPerfume && (
            <div className="mt-6 text-center">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <p className="text-sm text-gray-500">Selected Perfume</p>
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
              Choose Your Bottle Size
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8">
              Select the perfect size for your custom fragrance
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {Object.entries(BOTTLE_IMAGES).map(([size, img]) => (
                <button
                  key={size}
                  onClick={() =>
                    setPerfumeData({ ...perfumeData, bottleSize: size })
                  }
                  className={`relative p-4 sm:p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
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
                  <div className="text-xl sm:text-2xl font-bold">{size}ML</div>
                  <div className="text-xs sm:text-sm mt-1 opacity-75">
                    US${" "}
                    {size === "30"
                      ? "138"
                      : size === "50"
                        ? "198"
                        : size === "70"
                          ? "258"
                          : "318"}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Choose Perfume */}
        {step === 1 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Choose Your Eau de Parfum
            </h2>
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
                  <div className="text-sm text-gray-500 mb-1">
                    Selected Perfume
                  </div>
                  <div className="text-xl font-semibold">
                    {perfumeData.selectedPerfume || "Click to choose"}
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
            <h2 className="text-3xl font-bold mb-4">Add a Scent Magnifier</h2>
            <p className="text-gray-600 mb-8">
              Strongly recommended by our experts
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
                    Selected Magnifier
                  </div>
                  <div className="text-xl font-semibold">
                    {perfumeData.magnifier || "Click to choose"}
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
            <h2 className="text-3xl font-bold mb-4">Design Your Bottle</h2>
            <p className="text-gray-600 mb-8">
              Optional - Add personalized text
            </p>
            <button
              onClick={() => setShowDesignModal(true)}
              className="w-full p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-black transition flex items-center justify-between"
            >
              <div className="text-left">
                <div className="text-sm text-gray-500 mb-1">
                  Bottle Engraving
                </div>
                <div className="text-xl font-semibold">
                  {perfumeData.engraving || "Click to add text"}
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
              className={`flex-1 px-8 py-3 rounded-lg transition ${
                isStepComplete()
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleCreatePerfume}
              className="flex-1 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 text-lg font-semibold"
            >
              Create My Perfume
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottleSection;
