import React from "react";
import Moi from "../../img/photomoi.png";
import { AiOutlineMail, AiFillMobile } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Contact() {
  return (
    <div className="bg-zinc-800 px-20 py-20 rounded-lg border-solid border-2 border-gray-500 m-[25%]  w-[423px] h-[284px] max-md:w-[403px] text-gray-400 font-mono mx-auto mt-[150px]">
      <h4 className="absolute text-gray-400 text-[48px] font-bold ml-[-60px] mt-[-70px] max-md:text-[45px]">
        ZENONE Benoît
      </h4>
      <div className="flex ml-[-65px]">
        <img src={Moi} alt="moi" className="w-[162px] h-[162px] mt-[10px]" />
        <p className="mt-[25px] ml-[10px] text-[16px] max-md:text-[14px]">
          Développeur React, Java, Node
          <br />
          <div className="flex">
            <AiOutlineMail className="mt-[4px]" />{" "}
            <span className="ml-[10px]">benoit.zenone@gmail.com</span>
          </div>
          <div className="flex">
            <AiFillMobile className="mt-[4px]" />{" "}
            <span className="ml-[10px]">+33 7 81 70 95 11</span>
          </div>
          <div className="flex">
            <MdLocationPin className="mt-[4px]" />{" "}
            <span className="ml-[10px]">59000 LILLE</span>
          </div>
          <div className="mt-[10px] ml-[-15px]">
            <button
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/beno%C3%AEt-zenone-7763aab1/",
                  "_blank",
                );
              }}
            >
              <BsLinkedin className="ml-[20px] w-[25px] h-[25px] mt-[-3px] mr-[20px]" />
            </button>
            <button
              onClick={() => {
                window.open("https://github.com/BenZen59", "_blank");
              }}
            >
              <BsGithub className="w-[25px] h-[25px] mt-[-3px] mr-[20px]" />
            </button>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Contact;
