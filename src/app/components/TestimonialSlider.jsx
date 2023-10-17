"use client";
import React from "react";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper style
import "swiper/css";
import "swiper/css/pagination";

// import required module
import { Pagination } from "swiper/modules";
//icons
import { FaQuoteLeft } from "react-icons/fa";
// import framer
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../../variants";
//images
import Image from "next/image";

//data
const testimonialData = [
  {
    massege:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint fugit asperiores laborum veritatis",
    avatar: "/assets/images/testimonial/avatar.png",
    name: "Erfan Nasrollahi",
    job: "Programmer",
  },
  {
    massege:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint fugit asperiores laborum veritatis",
    avatar: "/assets/images/testimonial/avatar.png",
    name: "Erfan nasr",
    job: "Developer",
  },
];

const TestimonialSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[450px] "
      >
        {testimonialData.map((person, index) => {
          const { massege, avatar, name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] m-12 font-medium">
                  {massege}
                </div>
                <Image src={avatar} width={64} height={64} alt="" />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secoundary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default TestimonialSlider;
