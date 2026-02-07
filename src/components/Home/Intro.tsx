import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Float, useTexture } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as THREE from 'three';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  color: string;
}

// 3D Image Bottle Component - Uses real product images
const ImageBottle3D: React.FC<{ 
  imageUrl: string;
  isActive: boolean;
}> = ({ imageUrl, isActive }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { viewport } = useThree();
  
  // Responsive scaling based on viewport
  const isMobile = viewport.width < 7;
  const baseScale = isMobile ? 0.6 : 0.8;

  // Load the texture with error handling - use a fallback
  const texture = useTexture(imageUrl, (err) => {
    console.warn('Texture loading failed:', err);
  });

  useFrame((state) => {
    if (meshRef.current) {
      // Auto rotation
      meshRef.current.rotation.y += 0.003;
      
      // Smooth float animation
      if (isActive) {
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
      }
      
      // Scale on hover (desktop only)
      const targetScale = (hovered && !isMobile) ? baseScale * 1.1 : baseScale;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.2}
      floatIntensity={0.3}
      enabled={!isMobile} // Disable float on mobile for performance
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => !isMobile && setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        {/* Plane geometry to display the image */}
        <planeGeometry args={[4, 5]} />
        <meshStandardMaterial
          map={texture}
          transparent={true}
          side={THREE.DoubleSide}
          alphaTest={0.1}
        />
      </mesh>
    </Float>
  );
};

// Fallback 3D bottle if image fails

// 3D Loader Component (must be 3D objects, not HTML)
const Loader3D: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 2;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <ambientLight intensity={0.5} />
    </group>
  );
};

// 3D Scene Component
const Scene3D: React.FC<{ 
  currentSlide: number; 
  slides: Slide[];
}> = ({ currentSlide, slides }) => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 7;
  const isTablet = viewport.width >= 7 && viewport.width < 10;

  // Responsive camera positioning
  const cameraZ = isMobile ? 7 : isTablet ? 6 : 5.5;

  return (
    <>
      <PerspectiveCamera 
        makeDefault 
        position={[0, 0, cameraZ]} 
        fov={isMobile ? 65 : 55} 
      />
      
      {/* Lighting - reduced on mobile */}
      <ambientLight intensity={isMobile ? 0.7 : 0.5} />
      <spotLight
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={isMobile ? 1 : 1.5}
        castShadow={!isMobile}
      />
      <pointLight 
        position={[-4, 4, -4]} 
        intensity={isMobile ? 0.4 : 0.7} 
        color="#ffa500" 
      />
      <pointLight 
        position={[4, -4, 4]} 
        intensity={0.3} 
        color="#ff69b4" 
      />

      {/* Main Bottle with error boundary */}
      <Suspense fallback={<Loader3D />}>
        <ImageBottle3D
          imageUrl={slides[currentSlide].image}
          isActive={true}
        />
      </Suspense>

      {/* Environment - lighter on mobile */}
      <Environment preset="sunset" background={false} />

      {/* Ground shadow */}
      {!isMobile && (
        <mesh 
          receiveShadow 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, -2.8, 0]}
        >
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.25} />
        </mesh>
      )}

      {/* OrbitControls - simplified on mobile */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate={false}
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={isMobile ? 0.3 : 0.5}
      />
    </>
  );
};

// Main Component
const PerfumeHero3D: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setDirection] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    // Simulate initial load
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const slides: Slide[] = [
    {
      id: 1,
      image: "https://media.istockphoto.com/id/144318776/photo/transparent-perfume-bottle-isolated-on-white.jpg?s=612x612&w=0&k=20&c=n4eyl6xTRXZQ_5w4DPWUa3Up8theTNg8YQfDDBbkohM=",
      title: "SUITS COLLECTION",
      subtitle: "Classic Elegance",
      color: "#1a1a1a"
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/144318776/photo/transparent-perfume-bottle-isolated-on-white.jpg?s=612x612&w=0&k=20&c=n4eyl6xTRXZQ_5w4DPWUa3Up8theTNg8YQfDDBbkohM=",
      title: "MAN ESSENCE",
      subtitle: "Timeless Sophistication",
      color: "#2d2d2d"
    },
    {
      id: 3,
      image: "https://media.istockphoto.com/id/144318776/photo/transparent-perfume-bottle-isolated-on-white.jpg?s=612x612&w=0&k=20&c=n4eyl6xTRXZQ_5w4DPWUa3Up8theTNg8YQfDDBbkohM=",
      title: "ORCHID MYSTIQUE",
      subtitle: "Romantic Charm",
      color: "#e91e63"
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  if (!isMounted) {
    return null; // Prevent SSR issues
  }

  return (
    <div className="min-h-screen bg-white relative bottom-12 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-orange-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-gray-500 uppercase">
                Luxury Fragrances
              </span>
            </motion.div>

            {/* Title */}
            <div className="space-y-2 sm:space-y-4">
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={currentSlide}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`subtitle-${currentSlide}`}
                  className="text-base sm:text-lg md:text-xl text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Description */}
            <motion.p 
              className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Indulge in a fragrance crafted to transcend time—a symphony of
              elegance, mystery, and allure, designed for those who seek
              beauty in every breath.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Discover Collection
              </motion.button>
              <motion.button 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-lg transition-all border-2 border-gray-200 hover:border-gray-300 text-sm sm:text-base"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-6 sm:pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">100+</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">Fragrances</div>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">100%</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">Authentic</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Canvas */}
          <motion.div 
            className="relative h-87.5 sm:h-112.5 md:h-137.5 lg:h-150 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Discount Badge */}
            <motion.div 
              className="absolute top-2 sm:top-4 right-4 sm:right-6 lg:right-8 z-30"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 12 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <motion.div 
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-linear-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl"
                animate={{ 
                  rotate: [12, 18, 12],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">30%</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">OFF</div>
                </div>
              </motion.div>
            </motion.div>

            {/* HTML Loading Overlay (outside Canvas) */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-gray-100 via-gray-50 to-white rounded-2xl sm:rounded-3xl z-20">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-600 text-sm sm:text-base">Yüklənir...</p>
                </div>
              </div>
            )}

            {/* 3D Canvas */}
            <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-linear-to-br from-gray-100 via-gray-50 to-white shadow-2xl">
              <Canvas 
                shadows 
                dpr={[1, 2]}
                gl={{ 
                  antialias: true,
                  alpha: true,
                  preserveDrawingBuffer: true
                }}
              >
                <Suspense fallback={<Loader3D />}>
                  <Scene3D currentSlide={currentSlide} slides={slides} />
                </Suspense>
              </Canvas>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4 z-20">
              <motion.button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center hover:bg-white transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-900" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center hover:bg-white transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-900" />
              </motion.button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                  }}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-6 sm:w-8 lg:w-10 bg-gray-900' 
                      : 'w-1.5 sm:w-2 bg-gray-400 hover:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Interaction Hint - Desktop Only */}
            <motion.div
              className="hidden lg:block absolute top-6 lg:top-8 left-6 lg:left-8 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-gray-600 shadow-lg z-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
            >
              ↻ Drag to rotate
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PerfumeHero3D;