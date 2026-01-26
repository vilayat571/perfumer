
const Intro = () => {
  return (
  <div className="relative px-8 pb-16 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl md:text-7xl  font-bold text-gray-900 mb-4">
                   Unikal ətirini
                  <br />
                   hazırla!
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                  Indulge in a fragrance crafted to transcend time—a symphony of
                  elegance, mystery, and allure, designed for those who seek
                  beauty in every breath.
                </p>
              </div>

              <div className="flex gap-4">
                <button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors">
                  Discover More
                </button>
              </div>
            </div>

            {/* Right Content - Perfume Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://cdn.salla.sa/doPqe/da13fb25-4193-49ed-a5cd-67fd50255da0-1000x1000-JJKKO5W3Xc8xKSYO0n8IVULRtUhTWt778a9vpGiR.png"
                  alt="SUITS Perfume"
                  className="w-auto object-cover h-140 max-w-md mx-auto drop-shadow-2xl"
                />
              </div>

              {/* 30% OFF Badge */}
              <div className="absolute top-0 right-0 md:right-20">
                <div className="relative">
                  <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">30%</div>
                      <div className="text-sm font-semibold text-white">
                        OFF
                      </div>
                    </div>
                  </div>
                  <svg
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2"
                    width="60"
                    height="40"
                  >
                    <path
                      d="M 10 0 Q 30 20 50 0"
                      stroke="#d97706"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      fill="none"
                    />
                    <circle cx="50" cy="0" r="4" fill="#d97706" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Intro
