import React from "react";
import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className="flex mt-[40px]" > 
      <div className={` max-w-[570px]`}>
        <h3
          className={`${styles.heading2} font-semibold font-poppins text-[48px] mt-4 mb-9 `}
        >
          Find a better card deal in few easy steps.
        </h3>
        <p className={`${styles.paragraph} text-[18px] pr-[20px] `}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div>
        <div className={`${layout.sectionImg} `} >
          <img src={card} alt="" className="w-[500px] ml-[230px]" />
          dsfjasdfj
        </div>
      </div>
    </section>
  );
};

export default CardDeal;
