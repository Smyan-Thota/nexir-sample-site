import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/animations";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const HeroSection = ({
  title,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroSectionProps) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative h-[80vh] flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gray-900/70" />
      <div className="container relative z-10">
        <motion.div
          variants={slideUp}
          className="max-w-2xl"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-5xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-200 mb-8"
          >
            {description}
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button 
              className="bg-[#FF7F50] hover:bg-[#FF6B3D] text-white"
              onClick={() => window.location.href = ctaLink}
            >
              {ctaText} <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
