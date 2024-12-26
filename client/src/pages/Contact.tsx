import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-12"
          >
            Contact Us
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-2xl font-semibold mb-2"
              >
                Our Offices
              </motion.h2>

              <motion.div 
                variants={containerVariants}
                className="space-y-2"
              >
                {/* Company Name */}
                <motion.h4 
                  variants={itemVariants}
                  className="font-medium"
                >
                  NEXIRAI TECHNOLOGIES PVT LTD
                </motion.h4>

                {/* India Office */}
                <motion.div
                  variants={containerVariants}
                  className="mt-2"
                >
                  <motion.h3 
                    variants={itemVariants}
                    className="text-xl font-medium mb-1"
                  >
                    India Office
                  </motion.h3>
                  <motion.div
                    variants={containerVariants}
                    className="space-y-2"
                  >
                    <motion.div variants={itemVariants} className="flex items-center space-x-2">
                      <MapPin className="text-[#FF7F50] w-4 h-4" />
                      <p className="text-gray-600">Hyderabad, Telangana</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center space-x-2">
                      <Phone className="text-[#FF7F50] w-4 h-4" />
                      <p className="text-gray-600">+91-9676879459</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center space-x-2">
                      <Mail className="text-[#FF7F50] w-4 h-4" />
                      <p className="text-gray-600">venu.thota@nexirai.com</p>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* USA Office */}
                <motion.div
                  variants={containerVariants}
                  className="mt-6"
                >
                  <motion.h3 
                    variants={itemVariants}
                    className="text-xl font-medium mb-1"
                  >
                    USA Office
                  </motion.h3>
                  <motion.div
                    variants={containerVariants}
                    className="space-y-2"
                  >
                    <motion.div variants={itemVariants} className="flex items-center space-x-2">
                      <MapPin className="text-[#FF7F50] w-4 h-4" />
                      <p className="text-gray-600">Cleveland, OH</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center space-x-2">
                      <Phone className="text-[#FF7F50] w-4 h-4" />
                      <p className="text-gray-600">+1 (216) 301-9280</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center space-x-2">
                      <Mail className="text-[#FF7F50] w-4 h-4" />
                      <p className="text-gray-600">smyan@nexirai.com</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="pt-12 pl-8"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What's this about?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#FF7F50] hover:bg-[#FF6B3D]"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;