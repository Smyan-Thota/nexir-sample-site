import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Network,
  BarChart,
  Cpu,
  ArrowRight,
  Building2,
  CreditCard,
  Zap,
} from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Bold Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl font-bold mb-6">
              Nothing Can Stop Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              With NEXIRAI, AI-powered solutions work as one—empowering your business to achieve excellence, even in challenging times.
            </p>
            <Button
              className="bg-[#FF7F50] hover:bg-[#FF6B3D] text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="/services">
                Explore Solutions <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Solutions Built for You
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <solution.icon className="w-12 h-12 text-[#FF7F50] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <Link href={solution.link} className="text-[#FF7F50] hover:text-[#FF6B3D] font-medium inline-flex items-center">
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <service.icon className="w-8 h-8 text-[#FF7F50] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About NexirAI</h2>
            <p className="text-lg text-gray-600 mb-8">
              NexirAI is a cutting-edge technology consulting platform delivering advanced digital solutions for global enterprises. With a focused approach to transformative technological services, we specialize in Fintech, Micro-ERP, and Partner Solutions for Energy Management.
            </p>
            <Button
              className="bg-[#FF7F50] hover:bg-[#FF6B3D] text-white"
              asChild
            >
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

const solutions = [
  {
    title: "AI/ML Solutions",
    description: "Empowering businesses with intelligent insights and strategic foresight through advanced Artificial Intelligence and Machine Learning capabilities.",
    icon: Brain,
    link: "/technologies/ai-ml",
  },
  {
    title: "Digital Transformation",
    description: "Transform your business with cutting-edge digital solutions that streamline operations and enhance user experiences across diverse digital touch points.",
    icon: Network,
    link: "/technologies/digital-transformation",
  },
  {
    title: "Advanced Analytics",
    description: "Leverage data-driven insights for informed decision-making and strategic planning with our comprehensive analytics solutions.",
    icon: BarChart,
    link: "/technologies/analytics",
  },
  {
    title: "IoT Applications",
    description: "Connect and optimize your operations with intelligent IoT solutions that enable smart decision-making and operational excellence.",
    icon: Cpu,
    link: "/technologies/iot",
  },
];

const coreServices = [
  {
    title: "Fintech Solutions",
    description: "Enabling financial inclusion through branchless banking and innovative financial technologies that bring banking services directly to underserved communities.",
    icon: CreditCard,
  },
  {
    title: "Micro-ERP Solutions",
    description: "Streamlined enterprise resource planning solutions designed specifically for SMEs, offering essential features without unnecessary complexity.",
    icon: Building2,
  },
  {
    title: "Energy Management",
    description: "Comprehensive energy monitoring and optimization solutions that help organizations reduce costs and meet sustainability goals through smart analytics.",
    icon: Zap,
  },
];

export default Home;