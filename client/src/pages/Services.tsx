import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, BarChart, Lock, MessageSquare, Zap } from "lucide-react";

const Services = () => {
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
            Our AI Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover how our AI-powered solutions can transform your business
          </motion.p>
        </section>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <service.icon className="w-10 h-10 text-[#FF7F50] mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-100"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1584291527935-456e8e2dd734"
                alt="Data Visualization"
                className="rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Financial Analysis AI</h3>
              <p className="text-gray-600">
                How we helped a leading financial institution automate their data analysis process.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1640622842008-1897f26aafe3"
                alt="Modern Office Tech"
                className="rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Smart Office Solutions</h3>
              <p className="text-gray-600">
                Implementing AI-powered workplace optimization for enhanced productivity.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

const services = [
  {
    title: "Machine Learning Solutions",
    description: "Custom ML models tailored to your specific business needs",
    icon: Brain,
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    title: "Data Analytics",
    description: "Advanced analytics and visualization platforms",
    icon: BarChart,
    technologies: ["Big Data", "Predictive Analytics", "Real-time Processing"],
  },
  {
    title: "Natural Language Processing",
    description: "Text analysis and chatbot development",
    icon: MessageSquare,
    technologies: ["BERT", "GPT", "Custom Models"],
  },
  {
    title: "AI Infrastructure",
    description: "Scalable and secure AI deployment solutions",
    icon: Database,
    technologies: ["Cloud Computing", "Edge AI", "MLOps"],
  },
];

export default Services;
