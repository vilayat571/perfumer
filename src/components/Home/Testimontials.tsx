import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anne Oliva",
    role: "Wall Painter Designer",
    feedback: "Coco Noir Eau de Parfum is the ultimate expression of feminine power. With radiant grapefruit and bergamot, sensual rose and jasmine, and an unforgettable base of patchouli and frankincense—this is a perfume that lingers long after you've left the room. Encased in a sleek black bottle, it's more than a fragrance—it's a signature."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Creative Director",
    feedback: "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched in the industry. Every project exceeds expectations."
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Brand Strategist",
    feedback: "The level of professionalism and creativity brought to our campaigns has transformed our brand identity. We couldn't be happier with the results and ongoing partnership."
  }
];

export default function ClientFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-teal-900 flex items-center justify-center p-6 sm:p-8">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Section - Header */}
          <div className="space-y-4">
            <p className="text-gray-400 text-sm tracking-wider uppercase font-light">
              Client Feedback
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
              What our client say's about us
            </h1>
          </div>

          {/* Right Section - Testimonial Content */}
          <div className="space-y-8">
            {/* Client Info */}
            <div className="space-y-2">
              <h3 className="text-3xl lg:text-4xl font-light text-white">
                {currentTestimonial.name}
              </h3>
              <p className="text-gray-400 text-base font-light">
                {currentTestimonial.role}
              </p>
            </div>

            {/* Feedback Text */}
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed font-light">
              {currentTestimonial.feedback}
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handlePrevious}
                className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 hover:border-gray-400 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </button>
              <button
                onClick={handleNext}
                className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 hover:border-gray-400 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-white' 
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}