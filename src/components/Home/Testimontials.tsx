import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const PartnersTestimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const partners = [
    { name: 'ProfitWell', logo: 'ProfitWell' },
    { name: 'ShipBob', logo: 'ShipBob' },
    { name: 'demio', logo: 'demio' },
    { name: 'Fast Company', logo: 'FASTOMPANY' },
    { name: 'AfterPay', logo: 'AfterPay' },
  ];

  const testimonials = [
    {
      id: 1,
      text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
      author: 'Serhiy Hipskyy',
      position: 'CEO Universal',
      avatar: '👤'
    },
    {
      id: 2,
      text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
      author: 'Justus Menke',
      position: 'CEO Eronaman',
      avatar: '👤'
    },
    {
      id: 3,
      text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
      author: 'Britain Eriksen',
      position: 'CEO Universal',
      avatar: '👤'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const partnerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      opacity: 1,
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Partners Section */}
        <motion.div 
          className="mb-40 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl md:text-6xl text-center mb-16 text-gray-900"
            variants={itemVariants}
          >
            Our Partners
          </motion.h2>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="text-2xl md:text-3xl font-semibold text-gray-700"
                variants={partnerVariants}
                whileHover="hover"
              >
                {partner.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl md:text-6xl text-center mb-8 text-gray-900"
            variants={itemVariants}
          >
            Testimonials
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
          </motion.p>

          {/* Navigation Arrows */}
          <motion.div 
            className="flex items-center justify-center gap-8 mb-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>
          </motion.div>

          {/* Testimonials Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-lg p-8 shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 
                }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0.6,
                  scale: index === currentSlide ? 1 : 0.95,
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Star Rating */}
                <motion.div 
                  className="flex gap-1 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 0.2 + (i * 0.05),
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersTestimonials;