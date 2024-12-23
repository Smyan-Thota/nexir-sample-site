import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Wifi, Settings } from "lucide-react";

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
        <section className="mb-20">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-center mb-8"
          >
            IoT Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12"
          >
            Connect and optimize your devices with our advanced IoT solutions for enhanced efficiency and automation.
          </motion.p>
        </section>

        {/* Features Grid */}
        <section>
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
    title: "Smart Devices",
    description: "Connect and manage IoT devices with our intelligent platform.",
    icon: Cpu,
  },
  {
    title: "Network Solutions",
    description: "Secure and efficient network infrastructure for IoT deployments.",
    icon: Wifi,
  },
  {
    title: "Automation",
    description: "Streamline operations with automated IoT processes and workflows.",
    icon: Settings,
  },
];

export default IoT;
