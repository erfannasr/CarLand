"use client";
import React from "react";

import Image from "next/image";

//icons
import {
  MdOutlineHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

// react count Up
import CountUp from "react-countup";
//react intersection observer
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../../variants";

const Aboute = () => {
  const [ref, inview] = useInView({
    threshold: 0.5,
  });
  return (

            //    2:49:44

    <section className="section flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* image */}
          <motion.div 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          
          className="flex-1 mb-8 xl:mb-0">
            <Image
              className="rounded-[20px]"
              src="/assets/images/about/car01.png"
              width={600}
              height={448}
              alt=""
            />
          </motion.div>
          {/* text & stats */}
          <div className="flex-1 flex xl:justify-center items-center">
            <div className="xl:max-w-[517px]">
              <h2 className="h2">Car servise simplefild.</h2>
              <p className="mb-[42px] max-w-md">
                Rent , choose , and repair with ease. our convenient location ,
                diverse car types , and reliable repair points ensure a seamless
                car experience
              </p>
              {/* stats */}
              <div className="flex items-center gap-x-8 mb-12">
                {/* car types */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inview ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secoundary">
                    car <br />
                    types
                  </div>
                </div>
                {/* Rental outlets */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineHomeWork className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inview ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secoundary">
                    Rental <br />
                    outlets
                  </div>
                </div>
                {/* repaier points */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inview ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secoundary">
                    repair <br />
                    points
                  </div>
                </div></div>
                {/*Btn */}
                <button className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]">
                  See All Cars
                </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboute;
