import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Cpu,
  Network,
  TrendingUp,
  Users,
  LineChart,
  ArrowRight,
  Building2,
  Newspaper,
} from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Bold Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
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

      {/* Solutions Grid */}
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
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardContent className="p-6">
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

      {/* Customer Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">
            Trusted by Industry Leaders
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Building2 className="w-8 h-8 text-[#FF7F50] mb-4" />
                    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Latest Updates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Newspaper className="w-8 h-8 text-[#FF7F50] mb-4" />
                    <p className="text-sm text-[#FF7F50] mb-2">{item.category}</p>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Link href={item.link} className="text-[#FF7F50] hover:text-[#FF6B3D] font-medium inline-flex items-center">
                      Read more <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const solutions = [
  {
    title: "AI-enabled FinTech",
    description: "Empower your business with AI-driven financial services and alternative credit scoring solutions.",
    icon: Brain,
    link: "/services#fintech",
  },
  {
    title: "Digital Transformation",
    description: "Transform your business with cutting-edge digital solutions and advanced analytics.",
    icon: Network,
    link: "/services#digital",
  },
  {
    title: "Smart Micro ERP",
    description: "Streamline operations with intelligent ERP applications designed for modern businesses.",
    icon: Cpu,
    link: "/services#erp",
  },
  {
    title: "IoT Applications",
    description: "Harness the power of IoT for enhanced efficiency and automation.",
    icon: TrendingUp,
    link: "/services#iot",
  },
];

const testimonials = [
  {
    quote: "NEXIRAI's AI-enabled solutions have transformed our financial operations, making them more efficient and accessible.",
    author: "John Smith",
    role: "CFO, TechCorp Inc.",
  },
  {
    quote: "The digital transformation journey with NEXIRAI has been remarkable. Our productivity has increased significantly.",
    author: "Sarah Johnson",
    role: "CTO, Innovation Labs",
  },
  {
    quote: "Their Micro ERP solution perfectly fits our business needs, providing the right balance of features and simplicity.",
    author: "Michael Chen",
    role: "CEO, GrowthTech",
  },
];

const news = [
  {
    category: "Innovation",
    title: "Revolutionizing Financial Inclusion",
    description: "NEXIRAI introduces new AI-powered solutions for alternative credit scoring.",
    link: "/news/financial-inclusion",
  },
  {
    category: "Technology",
    title: "Smart ERP Evolution",
    description: "Launch of next-generation Micro ERP applications with enhanced AI capabilities.",
    link: "/news/smart-erp",
  },
  {
    category: "Business",
    title: "Digital Transformation Success",
    description: "Case study: How NEXIRAI helped transform a traditional business into a digital leader.",
    link: "/news/transformation",
  },
];

export default Home;
