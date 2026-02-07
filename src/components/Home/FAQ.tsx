import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "ZANA nədir?",
      answer:
        "ZANA sizə öz unikal ətrinizi yaratmaq imkanı verən premium ətir brendidir. Biz sizin zövqünüzə və tələblərinizə uyğun fərdi ətir hazırlayırıq.",
    },
    {
      question: "Ətir hazırlama prosesi necə işləyir?",
      answer:
        "Sadəcə 5 addımda öz ətrinizi yarada bilərsiniz: Qab növü seçin, ölçü seçin, qoxu seçin, gücləndirici əlavə edin və istəyə bağlı dizayn əlavə edin.",
    },
    {
      question: "Çatdırılma nə qədər vaxt aparır?",
      answer:
        "Standart çatdırılma 3-5 iş günü aparır. Sürətli çatdırılma seçimi ilə 1-2 iş günü ərzində sifarişinizi ala bilərsiniz.",
    },
    {
      question: "Ətirlərin qalıcılığı necədir?",
      answer:
        "Bütün ətirlərimiz yüksək keyfiyyətli təbii maddələrdən hazırlanır və 8-12 saat qalıcılığa malikdir. Gücləndirici əlavə etməklə qalıcılığı artıra bilərsiniz.",
    },
    {
      question: "Qiymətlər nə qədərdir?",
      answer:
        "Qiymətlər ölçüyə görə dəyişir: 30ML - 22 AZN, 50ML - 32 AZN, 70ML - 37 AZN, 100ML - 45 AZN. Əlavə xidmətlər üçün əlavə ödəniş tələb olunur.",
    },
    {
      question: "Geri qaytarma siyasəti varmı?",
      answer:
        "Bəli, məhsuldan məmnun qalmasanız, 14 gün ərzində geri qaytara bilərsiniz. Ətraflı məlumat üçün bizə müraciət edin.",
    },
    {
      question: "Hədiyyə paketi mövcuddurmu?",
      answer:
        "Bəli, premium hədiyyə paketi seçimlərimiz mövcuddur. Sifarişinizi verərkən hədiyyə paketi əlavə edə bilərsiniz.",
    },
    {
      question: "Necə əlaqə saxlaya bilərəm?",
      answer:
        "WhatsApp, telefon və ya email vasitəsilə bizimlə əlaqə saxlaya bilərsiniz. Müştəri xidmətləri komandamız həmişə sizə kömək etməyə hazırdır.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            Suallar
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tez-tez{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              soruşulan suallar
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Sualınızın cavabını burada tapa bilərsiniz
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300 hover:bg-gray-100"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <div className="p-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                      <Minus className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="p-1 bg-gray-300 rounded-lg group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                      <Plus className="w-5 h-5 text-gray-700 group-hover:text-white" />
                    </div>
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Cavab tapa bilmədiniz?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Bizimlə əlaqə saxlayın
          </a>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
};

export default FAQ;