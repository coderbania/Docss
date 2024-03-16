import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
// import { LuDownload } from "react-icons/lu";
import { SlLike } from "react-icons/sl";
import { motion } from "framer-motion"


const Card = ({reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} className=" relative w-60 h-80 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold ">
        MAYNK AGRAWAL
        <hr />
      </p>
      <p className="py-2">MERN Stack Developer
      <br />
      <br />
      <h6>mayankagrawal037@gmail.com</h6>
      </p>
      <div className="footer absolute bottom-0   w-full   left-0 ">
        <div className="flex items-center justify-between px-8 py-3 mb-5 ">
            <h1>o.4mb</h1>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">

            {/* <LuDownload size= ".7em" color="#fff"/> */
          <SlLike/> }
            </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
