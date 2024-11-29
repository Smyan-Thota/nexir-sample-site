import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Cpu, Network } from "lucide-react";

const Home = () => {
  return (
    <>
      <ParticleBackground />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1535378917042-10a22c95931a)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Transforming Business Through AI Innovation
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Leverage cutting-edge artificial intelligence solutions to drive your business forward.
            </p>
            <Button className="bg-[#FF7F50] hover:bg-[#FF6B3D] text-white">
              Explore Solutions <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our AI Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-[#FF7F50] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const features = [
  {
    title: "Machine Learning",
    description: "Custom ML solutions tailored to your business needs",
    icon: Brain,
  },
  {
    title: "Neural Networks",
    description: "Advanced pattern recognition and prediction systems",
    icon: Network,
  },
  {
    title: "AI Integration",
    description: "Seamless integration of AI into existing workflows",
    icon: Cpu,
  },
];

export default Home;
