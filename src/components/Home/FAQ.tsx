import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How long has your company been established?",
      answer: "Our company has been serving clients with excellence for over 15 years, building a reputation for quality and reliability in the industry."
    },
    {
      id: 2,
      question: "How much does it cost for one project?",
      answer: "Project costs vary based on scope and requirements. We offer customized quotes tailored to your specific needs. Contact us for a detailed consultation."
    },
    {
      id: 3,
      question: "How many people work at your company?",
      answer: "We have a dedicated team of over 50 professionals, including designers, developers, and project managers committed to delivering exceptional results."
    },
    {
      id: 4,
      question: "Does your company open job vacancies?",
      answer: "Yes, we regularly post job openings on our careers page. We're always looking for talented individuals to join our growing team."
    },
    {
      id: 5,
      question: "How do I contact Aurra for appointment?",
      answer: "You can reach us through our contact form, email us at contact@aurra.com, or call our office directly. We typically respond within 24 hours."
    },
    {
      id: 6,
      question: "What kind of contracts do you provide?",
      answer: "We offer various contract types including fixed-price, time and materials, and retainer agreements. Each contract is tailored to best suit your project requirements."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#fffaec] flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=600&q=80"
              alt="Perfume with flowers"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Right side - FAQ */}
        <div className="w-full max-w-2xl">
          <div className="mb-8">
            <p className="text-sm tracking-[0.3em] text-gray-600 mb-4">FAQS</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Frequently Asked{' '}
              <span className="italic text-[#666666]">Questions</span>
            </h1>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-300 pb-2"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex justify-between cursor-pointer items-center text-left group"
                >
                  <span className="text-lg">
                    {item.question}
                  </span>
                  <span className="text-black text-3xl shrink-0 transition-transform duration-300">
                    {openItem === item.id ? '−' : '+'}
                  </span>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === item.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;