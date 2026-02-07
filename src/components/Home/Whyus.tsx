import { Sparkles, Shield, Heart, Truck } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Unikal Dizayn",
      description: "Hər bir ətir sizin şəxsi zövqünüzə uyğun hazırlanır",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
    {
      icon: Shield,
      title: "Keyfiyyət Zəmanəti",
      description: "Yüksək keyfiyyətli təbii maddələrdən istifadə edirik",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
    {
      icon: Heart,
      title: "Müştəri Məmnuniyyəti",
      description: "Sizin xoşbəxtliyiniz bizim prioritetimizdir",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
    {
      icon: Truck,
      title: "Sürətli Çatdırılma",
      description: "Sifarişinizi tez və etibarlı şəkildə çatdırırıq",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Niyə Perfumer?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bizi seçməyin{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              səbəbləri
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ZANA ilə ətrinizi yaratmaq sadə, keyfiyyətli və unikaldır
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Card */}
                <div className={`${feature.bgColor} rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}>
                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyUs;