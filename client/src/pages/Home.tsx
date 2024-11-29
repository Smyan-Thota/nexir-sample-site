import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Network, TrendingUp, Users, LineChart } from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";

const Home = () => {
  return (
    <>
      <ParticleBackground />
      
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* AI Industry Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            AI Industry Growth
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardContent className="p-6">
                    <stat.icon className="w-12 h-12 text-[#FF7F50] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-gray-600">{stat.title}</p>
                    <p className="text-sm text-gray-500 mt-2">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
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

const statistics = [
  {
    title: "Market Size Growth",
    value: "$1.3T",
    description: "Projected global AI market size by 2029",
    icon: TrendingUp,
  },
  {
    title: "AI Adoption Rate",
    value: "35%",
    description: "Companies implementing AI solutions in 2024",
    icon: Users,
  },
  {
    title: "Annual Growth Rate",
    value: "27.3%",
    description: "Compound Annual Growth Rate (CAGR)",
    icon: LineChart,
  },
];

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
