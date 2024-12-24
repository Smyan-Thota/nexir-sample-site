import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, BarChart, Network } from "lucide-react";

const Analytics = () => {
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
            Advanced Analytics Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Empowering organizations with data-driven insights for informed decision-making and strategic planning.
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
                  <BarChart className="w-8 h-8 text-[#FF7F50] mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Predictive Analytics Solutions</h2>
                    <p className="text-gray-600 leading-relaxed">
                      In the realm of advanced analytics, the ability to harness data-driven insights is crucial for informed decision-making and strategic planning. Our solution empowers organizations to leverage predictive analytics to uncover valuable patterns, trends, and forecasts, enabling proactive decision-making and driving business growth. With a focus on user-friendly interfaces and intuitive workflows, our solution ensures that businesses can harness the power of predictive analytics without unnecessary complexity.
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
                    <h2 className="text-2xl font-semibold mb-4">Advanced Insights</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Our Advanced Predictive Analytics Solution is meticulously crafted to meet the sophisticated demands of businesses seeking cutting-edge insights and foresight. Offering a streamlined approach, our solution delivers powerful predictive analytics capabilities without compromising on simplicity.
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
                    <h2 className="text-2xl font-semibold mb-4">Innovation Through Analytics</h2>
                    <p className="text-gray-600 leading-relaxed">
                      NexirAI plays a pivotal role in fostering data-driven innovation through advanced predictive analytics. Serving as a catalyst for transformative change, NexirAI collaborates with organizations to introduce advanced predictive analytics capabilities that empower proactive decision-making and strategic foresight. By simplifying the complexities associated with predictive analytics, NexirAI enables businesses to unlock new opportunities, optimize operations, and stay ahead of the curve in a rapidly evolving landscape.
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

export default Analytics;
