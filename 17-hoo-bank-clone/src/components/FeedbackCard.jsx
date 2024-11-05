import React from "react";
import { quotes } from "../assets";
import styles from "../style";

const FeedbackCard = ({ content, title, img, name }) => {
  return (
    <div className="flex justify-between items-center flex-col px-10 py-12 rounded-[20px] max-w-[370px] my-5 feedback-card mx-7">
      <img src={quotes} alt="" className="w-[42px] h-[27px] object-contain " />
      <p className={`${styles.paragraph} my-10  hover:text-white ` }>{content}</p>

      <div className="flex flex-row font-poppins ">
        <img src={img} alt="" className="h-[48px] w-[48px]" />
        <div className="flex flex-col mt-2 pl-4 ">
          <p className="text-white">{name}</p>
          <p className="text-zinc-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
