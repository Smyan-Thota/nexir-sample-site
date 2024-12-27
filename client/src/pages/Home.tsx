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
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
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

      {/* Solutions Grid with hover effects */}
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
                <Card className="h-full hover:shadow-lg transition-all relative overflow-hidden group">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ backgroundImage: `url(${solution.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                  <CardContent className="p-6 relative z-10">
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

      {/* Core Services Section with hover effects */}
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
                <Card className="h-full relative overflow-hidden group">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ backgroundImage: `url(${service.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                  <CardContent className="p-6 relative z-10">
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
    backgroundImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2965&auto=format&fit=crop",
  },
  {
    title: "Digital Transformation",
    description: "Transform your business with cutting-edge digital solutions that streamline operations and enhance user experiences across diverse digital touch points.",
    icon: Network,
    link: "/technologies/digital-transformation",
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Advanced Analytics",
    description: "Leverage data-driven insights for informed decision-making and strategic planning with our comprehensive analytics solutions.",
    icon: BarChart,
    link: "/technologies/analytics",
    backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "IoT Applications",
    description: "Connect and optimize your operations with intelligent IoT solutions that enable smart decision-making and operational excellence.",
    icon: Cpu,
    link: "/technologies/iot",
    backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  },
];

const coreServices = [
  {
    title: "Fintech Solutions",
    description: "Enabling financial inclusion through branchless banking and innovative financial technologies that bring banking services directly to underserved communities.",
    icon: CreditCard,
    backgroundImage: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Micro-ERP Solutions",
    description: "Streamlined enterprise resource planning solutions designed specifically for SMEs, offering essential features without unnecessary complexity.",
    icon: Building2,
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Energy Management",
    description: "Comprehensive energy monitoring and optimization solutions that help organizations reduce costs and meet sustainability goals through smart analytics.",
    icon: Zap,
    backgroundImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
  },
];

export default Home;