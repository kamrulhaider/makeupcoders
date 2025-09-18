"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import images from "../../public/images/images";

export default function TeamCard({
  name,
  position,
  image,
  linkedin,
  github,
  behance,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // fade in + slide up
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // animates only once when visible
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }} // hover zoom effect
      className="p-10 text-center bg-gray-800/50 rounded-2xl shadow-md hover:shadow-lg"
    >
      {/* Profile image with hover spin */}
      <motion.div whileHover={{ rotate: 5 }}>
        <Image
          src={image}
          className="w-40 h-40 mx-auto rounded-full object-cover"
          alt="Team Member"
        />
      </motion.div>

      {/* Name & position */}
      <h4 className="text-2xl mt-5 font-semibold text-white">{name}</h4>
      <p className="text-gray-300">{position}</p>

      {/* Social links */}
      <motion.div
        className="flex gap-3 justify-center mt-5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {linkedin && (
          <Link suppressHydrationWarning href={linkedin} target="_blank">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Image
                className="h-8 w-8"
                src={images.linkedin}
                alt="LinkedIn icon"
              />
            </motion.div>
          </Link>
        )}
        {github && (
          <Link suppressHydrationWarning href={github} target="_blank">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Image
                className="h-8 w-8"
                src={images.github}
                alt="GitHub icon"
              />
            </motion.div>
          </Link>
        )}
        {behance && (
          <Link suppressHydrationWarning href={behance} target="_blank">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Image
                className="h-8 w-8"
                src={images.behance}
                alt="Behance icon"
              />
            </motion.div>
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
}
