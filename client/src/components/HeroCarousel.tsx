import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";
import { Link } from "wouter";

const slides = [
  {
    title: "Transforming Business Through AI Innovation",
    description: "Leverage cutting-edge artificial intelligence solutions to drive your business forward.",
    ctaText: "Explore Solutions",
    ctaLink: "/services",
    backgroundImage: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
  },
  {
    title: "AI Market Growth & Potential",
    description: "The global AI market size is projected to grow from $387.45 billion in 2024 to over $1.3 trillion by 2029, representing a CAGR of 27.3%.",
    ctaText: "Learn More",
    ctaLink: "/services",
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    title: "Innovative AI Solutions",
    description: "From machine learning to natural language processing, we offer comprehensive AI solutions tailored to your needs.",
    ctaText: "View Services",
    ctaLink: "/services",
    backgroundImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <HeroSection {...slides[currentSlide]} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#FF7F50]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
