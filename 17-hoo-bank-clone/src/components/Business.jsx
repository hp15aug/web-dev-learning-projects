import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard =({icon, title, content, index}) =>(
  <div className={`flex flex-row p-6 rounded-[20px] mb-6 hover:bg-slate-900 `} >
    <div className={`w-[64px] h-[64px] rounded-full bg-slate-900 ${styles.flexCenter} mr-6`} >
      <img src={icon} alt="" className="object-contain"/>
      </div>
      <div className="flex flex-1 flex-col w-[400px] h-[100px]" >
        <h4 className="font-poppins text-white font-semibold text-[18px] mb-1 " >{title}</h4>
        <p  className={`${styles.paragraph}`} >{content}</p>
      </div>
  </div>
)

const Business = () => {
  return (
    <div id="features" className="flex">
      <div className={`${layout.sectionInfo}`} >
        <h1 className={`${styles.heading2 } max-w-[500px]`} >You do the business, we’ll handle the money.</h1>
        <p className={`${styles.paragraph} max-w-[570px] pt-6`} >
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div>
        {features.map((feature,index) =>{
          return(
            <FeatureCard 
            key={feature.id} {...feature} index={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Business;
