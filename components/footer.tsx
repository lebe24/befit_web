import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import Image from "next/image";

export default function Footer() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto flex w-full items-center justify-center gap-2 border-t border-gray-800 bg-black p-6 text-gray-400 md:justify-center">
      <motion.div variants={itemVariants} className="flex items-center gap-2">
        <p>Brought to you by BEFIT Team</p>
      </motion.div>
    </motion.div>
  );
}
