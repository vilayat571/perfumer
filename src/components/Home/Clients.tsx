import { Star, Quote } from "lucide-react";

const ClientFeedbacks = () => {
  const testimonials = [
    {
      name: "Aysel Məmmədova",
      role: "Müştəri",
      rating: 5,
      text: "ZANA ilə öz ətirimi yaratmaq əla təcrübə idi. Komanda çox peşəkar və ətir fantastikdir!",
      avatar: "👩",
      color: "bg-white",
    },
    {
      name: "Elvin Həsənov",
      role: "Müştəri",
      rating: 5,
      text: "Keyfiyyət və xidmət əla səviyyədədir. Hər kəsə tövsiyə edirəm!",
      avatar: "👨",
      color: "bg-white",
    },
    {
      name: "Nigar Əliyeva",
      role: "Müştəri",
      rating: 5,
      text: "Unikal ətir, unikal təcrübə. ZANA-ya təşəkkür edirəm!",
      avatar: "👩‍🦰",
      color: "bg-white",
    },
    {
      name: "Rəşad Quliyev",
      role: "Müştəri",
      rating: 5,
      text: "Mükəmməl xidmət və keyfiyyət. Ətrim həqiqətən unikaldır!",
      avatar: "🧔",
      color: "bg-white",
    },
    {
      name: "Səbinə Nəsirova",
      role: "Müştəri",
      rating: 5,
      text: "ZANA ilə ətir yaratmaq həqiqətən xüsusi bir prosesdir. Çox razıyam!",
      avatar: "👱‍♀️",
      color: "bg-white",
    },
    {
      name: "Tural Əhmədov",
      role: "Müştəri",
      rating: 5,
      text: "Profesional komanda, yüksək keyfiyyət. 10/10 tövsiyə edirəm!",
      avatar: "👨‍💼",
      color: "bg-white",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-orange-600" />
            Müştəri Rəyləri
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Müştərilərimiz{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              nə deyir?
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Minlərlə məmnun müştərinin rəyləri
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className={`bg-gradient-to-br ${testimonial.color} rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer relative overflow-hidden`}>
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-gray-900" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-md">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "5000+", label: "Məmnun Müştəri" },
            { number: "4.9/5", label: "Ortalama Reytinq" },
            { number: "98%", label: "Təkrar Müştərilər" },
            { number: "10K+", label: "Unikal Ətirlər" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
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

export default ClientFeedbacks;