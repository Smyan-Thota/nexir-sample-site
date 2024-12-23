import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Network, LineChart } from "lucide-react";

const AiMl = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="container">
        {/* Hero Section */}
        <section className="mb-20">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-center mb-8"
          >
            AI & Machine Learning Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12"
          >
            Empowering businesses with intelligent insights and strategic foresight through advanced Artificial Intelligence and Machine Learning capabilities.
          </motion.p>
        </section>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <Brain className="w-12 h-12 text-[#FF7F50] mb-4" />
                <h2 className="text-2xl font-semibold mb-4">Data-Driven Intelligence</h2>
                <p className="text-gray-600">
                  In the realm of AI and ML, extracting meaningful insights from data and leveraging predictive models are essential for gaining a competitive edge. Our solution empowers businesses to harness the power of AI and ML to uncover hidden patterns, automate processes, and generate actionable recommendations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <Network className="w-12 h-12 text-[#FF7F50] mb-4" />
                <h2 className="text-2xl font-semibold mb-4">Simplified Integration</h2>
                <p className="text-gray-600">
                  By offering intuitive interfaces and scalable solutions, our AI/ML technology ensures that businesses can tap into the transformative potential of artificial intelligence without unnecessary complexity. Our focus on simplicity and efficiency offers a seamless experience for leveraging AI and ML technologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* AIFACET Partnership Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-20">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold text-center mb-8"
          >
            AIFACET Partnership
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-gray-600 mb-6">
              AIFACET stands as a frontrunner in transforming data into actionable intelligence through AI and ML technologies. Serving as a driving force for innovation, AIFACET collaborates with businesses to integrate advanced AI/ML capabilities that unlock new opportunities, streamline operations, and enhance decision-making processes.
            </p>
            <p className="text-gray-600">
              By simplifying the integration and utilization of AI and ML technologies, AIFACET enables organizations to harness the transformative power of artificial intelligence and machine learning to achieve sustainable growth and success in today's data-driven landscape.
            </p>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Key Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <capability.icon className="w-10 h-10 text-[#FF7F50] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                    <p className="text-gray-600">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

const capabilities = [
  {
    title: "Predictive Analytics",
    description: "Leverage advanced algorithms to forecast trends and make data-driven decisions.",
    icon: LineChart,
  },
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent automation powered by machine learning.",
    icon: Cpu,
  },
  {
    title: "Pattern Recognition",
    description: "Uncover hidden insights and patterns in complex datasets.",
    icon: Brain,
  },
];

export default AiMl;
