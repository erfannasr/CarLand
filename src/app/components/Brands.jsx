"use client";
import React from "react";
//  images
import Image from "next/image";
//framer
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../../../variants";
const Brands = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div 
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto">
        {/* brand warapper */}
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          <div>
            <Image
              width={60}
              height={60}
              alt=""
              src={"assets/icons/brands/ford.svg"}
            />
          </div>

          <div>
            <Image
              width={60}
              height={60}
              alt=""
              src={"assets/icons/brands/bmw.svg"}
            />
          </div>

          <div>
            <Image
              width={60}
              height={60}
              alt=""
              src={"assets/icons/brands/audi.svg"}
            />
          </div>

          <div>
            <Image
              width={60}
              height={60}
              alt=""
              src={"assets/icons/brands/mazda.svg"}
            />
          </div>

          <div>
            <Image
              width={60}
              height={60}
              alt=""
              src={"assets/icons/brands/skoda.svg"}
            />
          </div>

          <div>
            <Image
              width={60}
              height={60}
              alt=""
              src={"assets/icons/brands/vw.svg"}
            />
          </div>

          <div>
            <Image
              width={60}
              height={60}
              alt=""
              src={"assets/icons/brands/mercedes.svg"}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
