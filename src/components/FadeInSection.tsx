import { motion } from "framer-motion";

interface FadeInSectionProps {
  children: React.ReactNode;
  direction?: "left" | "right";
}

export const FadeInSection = ({
  children,
  direction = "left",
}: FadeInSectionProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};