import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Wifi, Cloud } from "lucide-react";

const IoT = () => {
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
            IoT Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Empowering businesses with intelligent connected solutions through advanced IoT capabilities, enabling smart decision-making and operational excellence.
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
                  <Wifi className="w-8 h-8 text-[#FF7F50] mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Smart Connected Solutions</h2>
                    <p className="text-gray-600 leading-relaxed">
                      In the realm of IoT, connecting devices and extracting actionable insights is crucial for business success. Our solution empowers organizations to harness the power of connected devices to automate processes, monitor operations in real-time, and make data-driven decisions. By offering robust and scalable IoT infrastructure, we ensure businesses can leverage the full potential of connected technology without compromising on security or reliability.
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
                  <Cloud className="w-8 h-8 text-[#FF7F50] mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Edge Computing Integration</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Our IoT Solution is meticulously engineered to seamlessly integrate with edge computing capabilities, enabling real-time processing and decision-making at the device level. This approach reduces latency, optimizes bandwidth usage, and enhances the overall efficiency of IoT deployments, making it ideal for mission-critical applications.
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
                    <h2 className="text-2xl font-semibold mb-4">Innovation Through Connectivity</h2>
                    <p className="text-gray-600 leading-relaxed">
                      NexirAI stands at the forefront of IoT innovation, driving digital transformation through intelligent connected solutions. As a pioneer in IoT technology, NexirAI collaborates with businesses to implement advanced IoT capabilities that revolutionize operations, enhance efficiency, and create new value streams. By simplifying the complexities of IoT deployment and management, NexirAI enables organizations to harness the transformative power of connected technology to achieve sustainable growth and competitive advantage in the digital age.
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

export default IoT;
