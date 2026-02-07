import { Sparkles, Heart, Award, Users, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Müştəri Məmnuniyyəti",
      description: "Hər bir müştərimiz bizim üçün xüsusidir və onların xoşbəxtliyi prioritetimizdir",
      iconColor: "text-rose-500",
    },
    {
      icon: Award,
      title: "Yüksək Keyfiyyət",
      description: "Premium və təbii maddələrdən istifadə edərək ən yüksək standartları təmin edirik",
      iconColor: "text-amber-500",
    },
    {
      icon: Zap,
      title: "İnnovasiya",
      description: "Ən son texnologiya və kreativ yanaşma ilə unikal təcrübə yaradırıq",
      iconColor: "text-blue-500",
    },
    {
      icon: Users,
      title: "Komanda İşi",
      description: "Peşəkar komandamız sizə ən yaxşı xidməti göstərmək üçün çalışır",
      iconColor: "text-green-500",
    },
  ];

  const milestones = [
    { year: "2019", event: "ZANA-nın əsası qoyuldu" },
    { year: "2020", event: "İlk 1000 müştəri" },
    { year: "2022", event: "Beynəlxalq genişlənmə" },
    { year: "2024", event: "10K+ unikal ətir yaradıldı" },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-orange-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-rose-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Haqqımızda
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perfumer
            <span className="bg-linear-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
              hekayəsi
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            2019-cu ildən bəri biz insanlara öz unikal ətir təcrübələrini yaratmaq imkanı veririk. 
            ZANA ilə hər kəs özünü ifadə edə və fərqlənə bilər.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Image */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ animation: "fadeInLeft 1s ease-out" }}
          >
            <div className="aspect-[4/3] bg-linear-to-br from-amber-50 to-orange-50 flex items-center justify-center p-12">
              <div className="text-center space-y-6">
                <div className="text-8xl mb-4">🌸</div>
                <div className="space-y-2">
                  <div className="text-6xl font-bold bg-linear-to-br from-amber-50 to-orange-50 bg-clip-text text-transparent">
                    10K+
                  </div>
                  <div className="text-xl text-gray-700 font-semibold">
                    Unikal Ətir Yaradılıb
                  </div>
                </div>
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-orange-500/10 via-transparent to-rose-500/10 pointer-events-none"></div>
          </div>

          {/* Right - Content */}
          <div
            className="flex flex-col justify-center space-y-6"
            style={{ animation: "fadeInRight 1s ease-out" }}
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Hər ətir bir hekayədir
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                ZANA olaraq, biz inanırıq ki, hər insan unikaldır və öz şəxsi qoxusuna 
                layiqdir. Bu viziya ilə 2019-cu ildə yola çıxdıq və bu günə qədər minlərlə 
                insana kömək etdik.
              </p>
              <p>
                Komandamız peşəkar parfümərlər, dizaynerlər və müştəri xidmətləri 
                mütəxəssislərindən ibarətdir. Hər birimiz sizə ən yaxşı təcrübəni təqdim 
                etmək üçün ehtiraslıyıq.
              </p>
              <p>
                Premium təbii maddələr, innovativ texnologiya və sənət əsərləri kimi 
                qablaşdırma ilə biz ətir sənətini yeni səviyyəyə qaldırırıq.
              </p>
            </div>

            {/* Mission Badge */}
            <div className="bg-linear-to-r from-orange-50 to-rose-50 p-6 rounded-2xl border-l-4 border-orange-500">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Missiyamız</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Hər kəsə öz şəxsiyyətini əks etdirən, unikal və keyfiyyətli ətir 
                    yaratmaq imkanı vermək.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Dəyərlərimiz
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className={`bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}>
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-xl bg-white shadow-md">
                        <Icon className={`w-6 h-6 ${value.iconColor}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-white/0 to-white/50 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Bizim Yolumuz
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-br from-amber-50 to-orange-50 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row  items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                  }}
                >
                  {/* Content */}
                  <div className="flex-1 bg-linear-to-br from-amber-50 to-orange-50  text-center md:text-left">
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <div className="text-3xl font-bold text-black  mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-gray-700 font-semibold">
                        {milestone.event}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block flex-shrink-0">
                    <div className="w-6 h-6 bg-linear-to-r from-orange-500 to-rose-500 rounded-full shadow-lg relative">
                      <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-rose-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#f2f4f7] rounded-3xl p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#fafbfc] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#fafbfc] rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Öz ətir hekayənizi yaradın
            </h3>
            <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
              Bizimlə birlikdə unikal, şəxsi və unudulmaz ətir təcrübəsi yaşayın
            </p>
            <a
              href="/create-perfume"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>İndi Başlayın</span>
              <Sparkles className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

export default AboutSection;