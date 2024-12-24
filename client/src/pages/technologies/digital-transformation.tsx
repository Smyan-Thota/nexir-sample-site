import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Network } from "lucide-react";

const DigitalTransformation = () => {
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
            Digital Transformation Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Empowering organizations to embrace digitalization, streamline operations, and enhance user experiences across diverse digital touch points.
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
                  <Network className="w-8 h-8 text-[#FF7F50] mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Bridging Technology Gaps</h2>
                    <p className="text-gray-600 leading-relaxed">
                      In the realm of digital transformation, bridging the gap between traditional processes and modern advancements is paramount. Our solution empowers organizations to embrace digitalization, streamline operations, and enhance user experiences across diverse digital touch points. By leveraging technology, businesses can unlock new opportunities for innovation, growth, and efficiency.
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
                  <Cpu className="w-8 h-8 text-[#FF7F50] mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Enterprise-Grade Solutions</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Our Digital Transformation Solution is meticulously designed to seamlessly adapt to a wide array of devices including Mobiles, Tablets, and POS Terminals, catering to various Platforms and networks. Leveraging open Standards and time-tested technologies, our solution embodies true enterprise-grade adaptability and scalability.
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
                  <Brain className="w-8 h-8 text-[#FF7F50] mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Innovation Through Partnership</h2>
                    <p className="text-gray-600 leading-relaxed">
                      NexirAI plays a pivotal role in the digital landscape by serving as a catalyst for change and innovation. As a trusted partner, NexirAI operates as a banking correspondent, extending the capabilities of financial institutions and enhancing the accessibility of digital banking services. This collaboration propels the digital transformation journey, enabling organizations to reach new heights of success and relevance in the digital era.
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

export default DigitalTransformation;
