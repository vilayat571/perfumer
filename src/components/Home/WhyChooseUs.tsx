import React from 'react';
import { Sparkles, Leaf, Globe, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Feature {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      number: "01",
      title: "Artistic Design",
      description: "Every fragrance is a masterpiece, crafted with precision by world-class parfumers.",
      icon: <Sparkles className="text-amber-500" size={24} />
    },
    {
      id: 2,
      number: "02",
      title: "Organic Ingredients",
      description: "Sourced from nature's finest, each note embodies pure sophistication.",
      icon: <Leaf className="text-green-500" size={24} />
    },
    {
      id: 3,
      number: "03",
      title: "Sustainable Elegance",
      description: "Indulge guilt-free with fragrances designed to honour the planet.",
      icon: <Globe className="text-blue-500" size={24} />
    },
    {
      id: 4,
      number: "04",
      title: "Exclusive Collections",
      description: "Discover scents as rare and unique as the moments they inspire.",
      icon: <Star className="text-purple-500" size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-4"
            variants={itemVariants}
          >
            <span className="text-amber-500 font-medium tracking-wider uppercase text-sm">
              Our Excellence
            </span>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl  text-gray-900 mb-6"
            variants={itemVariants}
          >
            Why Choose Us
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Experience the art of perfumery elevated to its finest form. Each creation tells a story of elegance, sustainability, and uncompromising quality.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                {/* Decorative gradient background */}
                <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Number Badge */}
                  <motion.div
                    className="flex items-center justify-between mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  >
                    <span className="text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                      {feature.number}
                    </span>
                    <motion.div
                      className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-2xl md:text-3xl  text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    {feature.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-gray-600 leading-relaxed text-base md:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Decorative line */}
                  <motion.div
                    className="mt-6 h-1 bg-linear-to-r from-amber-400 via-amber-300 to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Discover Our Collection
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-20" />
      </div>
    </div>
  );
};

export default WhyChooseUs;