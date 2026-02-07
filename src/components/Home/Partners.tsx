const Partners = () => {
  const partners = [
    { name: "M10", logo: "https://play-lh.googleusercontent.com/Ed1t7GNFW0l0ECikvBHkVCIhlrKwLluzaxlHb4OlqAD4u8LByjV9hDbTvnAoSg2V6oe2r48wPjjfYGeMGuUftkY" },
    { name: "Pasha Malls", logo: "https://iseqebul.az/wp-content/uploads/2023/07/pasha-malls-iseqebul.webp" },
    { name: "Deniz Mall", logo: "https://cdn.prod.website-files.com/67769643f6f3ca67f521373f/687f69e256af2f919a2cbcbe_images%20-%20Edited.png" },
    { name: "Kinderland", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3f6NoYD_CC402wodlLWh189lUeqy8mE54QA&s" },
    { name: "Bulud Media", logo: "https://play-lh.googleusercontent.com/z7YGRxP-0Gtz6UG7D9PPyV3tQdTRLWeq3XElO5a29O79RhmPRRcQR6-wHDVKDO4Lp-AE=w416-h235-rw" },
    { name: "Wolt", logo: "https://play-lh.googleusercontent.com/qp3dvrnvMAYmJj6ok1AtYJdCP0l4BD_PnyEpXde3nPeufoOc7WH_hIzIlIKVEjYdEAtq=s256-rw" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bəzi Partnyorlarımız
          </h2>
          <p className="text-gray-600 text-lg">
            Dünya brendləri ilə əməkdaşlıq edirik
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <img src={partner.logo} className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 rounded-full" />
    
              <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
                {partner.name}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 px-6 py-3 rounded-full">
            <span className="text-2xl">🤝</span>
            <span className="text-sm font-semibold text-gray-700">
              15+ Dünya Brendləri ilə Əməkdaşlıq
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;