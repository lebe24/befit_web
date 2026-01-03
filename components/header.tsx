import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed flex right-0 left-0 justify-between z-50">
      <motion.div variants={itemVariants} className="relative h-12 w-32 md:h-14 md:w-40">
        <Image
          src="/image/befit_logo.png"
          alt="Befit Logo"
          fill
          className="object-contain"
          quality={100}
          sizes="(max-width: 768px) 128px, 160px"
        />
      </motion.div>
    </motion.div>
  );
}
