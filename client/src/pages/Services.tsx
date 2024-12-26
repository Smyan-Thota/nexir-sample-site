import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, CreditCard, Zap } from "lucide-react";

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
            Our Core Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Empowering businesses with innovative solutions across Financial Technology, Enterprise Management, and Energy Systems
          </motion.p>
        </section>

        {/* Services Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-[#FF7F50] mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className="bg-gray-100"
                      >
                        {feature}
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
    title: "Fintech Solutions",
    description: "In rural regions, individuals facing challenges in accessing banking services, particularly the underprivileged, often encounter issues such as high travel costs and extensive wait times in queues. Our FI Solution is expertly crafted to seamlessly operate across a diverse range of devices including Mobiles, Tablets, and POS Terminals, accommodating various Platforms and networks. NexirAI will be instrumental as a banking correspondent, acting as an extended arm to the banks for the provision of their banking services. This strategic partnership ensures enhanced reach and accessibility of essential financial services to marginalized communities, bolstering financial inclusion efforts.",
    icon: CreditCard,
    features: ["Mobile Banking", "POS Integration", "Financial Inclusion", "Branchless Banking", "Enterprise-grade Scalability"],
  },
  {
    title: "Micro-ERP Solutions",
    description: "Empowering SMEs with agile and scalable modules, our Micro-ERP solution focuses on providing essential features without unnecessary complexity. Through our innovative approach, we incorporate simplicity and practicality into enterprise solutions, ensuring SMEs can optimize their workflows and manage resources effectively. NexirAI's Micro-ERP platform streamlines operations across finance, inventory, and human resources, enabling businesses to focus on growth while maintaining operational excellence. Our solution adapts to various industry needs while ensuring cost-effectiveness and ease of implementation.",
    icon: Building2,
    features: ["Workflow Optimization", "Resource Management", "SME-focused", "Cloud-based", "Integrated Analytics"],
  },
  {
    title: "Energy Management Solutions",
    description: "Our comprehensive Energy Management System revolutionizes how organizations monitor, control, and optimize their energy consumption. NexirAI's partner solutions leverage advanced IoT sensors and real-time analytics to provide actionable insights for energy efficiency. By combining cutting-edge technology with practical implementation, we help businesses reduce operational costs, meet sustainability goals, and maintain regulatory compliance. Our system adapts to various facility types and scales, ensuring optimal energy utilization across different operational scenarios.",
    icon: Zap,
    features: ["Real-time Monitoring", "Smart Analytics", "Sustainability", "Cost Optimization", "IoT Integration"],
  },
];

export default Services;