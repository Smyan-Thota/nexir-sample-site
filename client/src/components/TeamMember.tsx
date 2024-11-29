import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { fadeIn, slideUp } from "@/lib/animations";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  delay?: number;
}

const TeamMember = ({ name, role, bio, image, delay = 0 }: TeamMemberProps) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="p-6 text-center">
          <motion.div variants={slideUp}>
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage src={image} alt={name} />
            </Avatar>
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <p className="text-[#FF7F50] mb-3">{role}</p>
            <p className="text-sm text-gray-500">{bio}</p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamMember;
