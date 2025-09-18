"use client";

import Image from "next/image";
import images from "../../../public/images/images";
import { motion } from "framer-motion";
import GetInTouch from "@/components/GetInTouch";
import teamList from "../../../teams";
import TeamCard from "@/components/TeamCard";

// Motion variants (reuse across sections)
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const containerStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export default function AboutPage() {
  return (
    <section className="global-container">
      {/* about company section */}
      <motion.div
        className="hero-section rounded-2xl lg:pl-20 lg:pt-0 pt-5 mb-16"
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex lg:flex-row flex-col items-center h-full relative lg:text-left text-center gap-4">
          <motion.div className="lg:w-3/5 px-3" variants={fadeUp}>
            <h1 className="lg:text-6xl text-4xl font-bold mb-5">About Us</h1>
            <motion.p className="mb-5" variants={fadeUp}>
              Established in 2023, we are a dynamic creative agency dedicated to
              achieving enduring outcomes for our clients. Collaborating with
              startups, corporations, and nonprofits, we specialize in designing
              solutions that drive significant change. Our passion lies in
              developing brands, products, and digital experiences that deeply
              resonate with our clients&apos; target audiences.
            </motion.p>
          </motion.div>

          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              className="w-full h-[400px] object-cover lg:rounded-r-2xl lg:rounded-bl-none rounded-b-2xl"
              src={images.ouroffice}
              alt="Hero Image"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* about team section */}
      <motion.div
        className="bg-gray-700 rounded-2xl lg:pr-20 lg:pt-0 lg:pb-0 pb-5"
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex lg:flex-row flex-col items-center h-full lg:text-left text-center gap-4">
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              className="w-full h-[600px] object-cover lg:rounded-l-2xl lg:rounded-tr-none rounded-t-2xl"
              src={images.teamdetails}
              alt="Hero Image"
            />
          </motion.div>

          <div className="lg:w-1/2 px-3">
            <motion.h1
              className="lg:text-6xl text-4xl font-bold mb-5"
              variants={fadeUp}
            >
              Top-tier Talent
            </motion.h1>
            <motion.p className="mb-5" variants={fadeUp}>
              We are a team of strategists, problem-solvers, and technologists.
              Every design is meticulously crafted from concept to launch,
              ensuring it thrives in its intended market. We continuously update
              our skills across various platforms.
            </motion.p>
            <motion.p className="mb-5" variants={fadeUp}>
              Our multi-disciplinary team values not only form but also content
              and meaning. We prioritize craftsmanship, exceptional service, and
              timely delivery. Our clients are consistently impressed with our
              high-quality outcomes that capture their brand&apos;s story and
              mission.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* team members */}
      <div className="mt-16 ">
        <motion.div
          className="grid lg:grid-cols-3 grid-cols-1 gap-5 items-center"
          variants={containerStagger}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamList.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <TeamCard
                name={item.name}
                image={item.image}
                position={item.position}
                github={item.github ? item.github : false}
                linkedin={item.linkedin}
                behance={item.behance ? item.behance : false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Genuine Partners section */}
      <motion.div
        className="hero-section rounded-2xl lg:pl-20 lg:pt-0 pt-5 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex lg:flex-row flex-col items-center h-full relative lg:text-left text-center gap-4">
          {/* Left content (staggered paragraphs) */}
          <motion.div
            className="lg:w-3/5 px-3"
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h1
              className="lg:text-6xl text-4xl font-bold mb-5"
              variants={fadeUp}
            >
              Genuine Partners
            </motion.h1>
            <motion.p className="mb-5" variants={fadeUp}>
              As strategic allies in our clients’ businesses, we embrace every
              challenge as our own. Solving real problems demands empathy and
              collaboration, and we aim to bring a fresh perspective to every
              project. We make design and technology more accessible, providing
              tools to measure success.
            </motion.p>
            <motion.p className="mb-5" variants={fadeUp}>
              We are visual storytellers, creating appealing and captivating
              content. By merging business and marketing strategies, we motivate
              audiences to take action and achieve tangible results.
            </motion.p>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="lg:w-2/5 w-full"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              className="w-full h-[600px] object-cover lg:rounded-r-2xl lg:rounded-bl-none rounded-b-2xl"
              src={images.realdeal}
              alt="Hero Image"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* get in touch */}
      <GetInTouch />
    </section>
  );
}
