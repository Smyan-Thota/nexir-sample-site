import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="container">
        {/* Vision Section */}
        <section className="mb-20">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Vision
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608"
                alt="AI Vision"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                At NexirAI, we envision a future where artificial intelligence empowers businesses to reach their full potential. Our mission is to make advanced AI technologies accessible and practical for organizations of all sizes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Leadership Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-32 h-32 mx-auto mb-4">
                      <AvatarImage src={member.image} />
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-600 mb-3">{member.role}</p>
                    <p className="text-sm text-gray-500">{member.bio}</p>
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

const team = [
  {
    name: "Smyan Sathyarthi Thota",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806",
    bio: "Visionary leader with extensive experience in AI and machine learning.",
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1",
    bio: "Expert in neural networks and deep learning architectures.",
  },
  {
    name: "David Kumar",
    role: "Head of AI Research",
    image: "https://images.unsplash.com/photo-1584291527908-033f4d6542c8",
    bio: "Leading breakthrough research in artificial intelligence applications.",
  },
];

export default About;
