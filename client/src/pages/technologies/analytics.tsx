import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, PieChart, LineChart } from "lucide-react";

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
        <section className="mb-20">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-center mb-8"
          >
            Analytics Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12"
          >
            Unlock the power of your data with advanced analytics solutions that drive informed decision-making.
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
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights with advanced BI tools.",
    icon: BarChart,
  },
  {
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with predictive models.",
    icon: LineChart,
  },
  {
    title: "Data Visualization",
    description: "Create compelling visual representations of complex data sets.",
    icon: PieChart,
  },
];

export default Analytics;
