import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Network } from "lucide-react";

const AIML = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="container">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold mb-6"
          >
            AI/ML Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Empowering businesses with intelligent insights and strategic foresight through advanced Artificial Intelligence and Machine Learning capabilities.
          </motion.p>
        </section>

        {/* Main Content */}
        <div className="grid gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Brain className="w-8 h-8 text-[#FF7F50] mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Transformative AI/ML Solutions</h2>
                    <p className="text-gray-600 leading-relaxed">
                      In the realm of AI and ML, extracting meaningful insights from data and leveraging predictive models are essential for gaining a competitive edge. Our solution empowers businesses to harness the power of AI and ML to uncover hidden patterns, automate processes, and generate actionable recommendations. By offering intuitive interfaces and scalable solutions, our AI/ML technology ensures that businesses can tap into the transformative potential of artificial intelligence without unnecessary complexity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Network className="w-8 h-8 text-[#FF7F50] mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Intelligent Insights</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Our AI/ML Solution is tailored to provide businesses with intelligent insights and strategic foresight through advanced Artificial Intelligence and Machine Learning capabilities. With a focus on simplicity and efficiency, our solution offers a seamless experience for leveraging AI and ML technologies to drive innovation and enhance decision-making processes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Cpu className="w-8 h-8 text-[#FF7F50] mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Innovation Through AI</h2>
                    <p className="text-gray-600 leading-relaxed">
                      NexirAI stands as a frontrunner in transforming data into actionable intelligence through AI and ML technologies. Serving as a driving force for innovation, NexirAI collaborates with businesses to integrate advanced AI/ML capabilities that unlock new opportunities, streamline operations, and enhance decision-making processes. By simplifying the integration and utilization of AI and ML technologies, NexirAI enables organizations to harness the transformative power of artificial intelligence and machine learning to achieve sustainable growth and success in today's data-driven landscape.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIML;
