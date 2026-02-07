import { motion } from 'framer-motion';
import { containerVariants, itemVariants, partners, partnerVariants } from '../../data/home';

const Partners = () => {
  return (
    <section className="relative bg-white">
      <motion.div
        className="relative bottom-32 container mx-auto px-6 md:px-12 max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Simple Header */}
        <motion.div 
          className="text-center mb-10"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-1">
            Our Partners
          </h2>
          <p className="text-gray-500 text-lg">
            Trusted by industry leaders
          </p>
        </motion.div>

        {/* Partners Grid - Clean & Simple */}
        <motion.div 
          className="grid grid-cols-5"
          variants={itemVariants}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center hover:bg-gray-50 rounded-xl transition-all duration-300"
              variants={partnerVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-300">
                {partner.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Partners;