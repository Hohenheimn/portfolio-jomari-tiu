import React from "react";
import Link from "next/link";
import { AiTwotonePhone } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" h-screen w-full flex justify-center py-10 bg-[#1a1a1a93]">
      <ul className=" w-11/12 flex flex-col justify-center  items-center space-y-5 py-10">
        <li className=" col-span-3 text-center">
          <h1 className=" font-bold tracking-widest text-white text-[2rem] md:text-[4rem]">
            LETS WORK TOGETHER FOR <br /> YOUR NEXT PROJECTS
          </h1>
        </li>

        <li className=" flex items-center space-x-2">
          <FaFacebookF className=" text-white  md:text-[2rem]" />{" "}
          <Link href="" className=" text-white md:text-[2rem]">
            Tiu Jmri
          </Link>
        </li>
        <li className=" flex items-center space-x-2 ">
          <MdEmail className=" text-white md:text-[2rem]" />
          <Link href="" className=" text-white md:text-[2rem]">
            jomtiu16@gmail.com
          </Link>
        </li>
        <li className=" flex items-center space-x-2">
          <AiTwotonePhone className=" text-white md:text-[2rem]" />
          <Link href="" className=" text-white md:text-[2rem]">
            9515-532-773
          </Link>
        </li>
        <li className=" flex items-center space-x-2">
          <FaLinkedinIn className=" text-white md:text-[2rem]" />
          <Link href="" className=" text-white md:text-[2rem]">
            jomari-tiu
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
