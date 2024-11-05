import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section className={`${layout.sectionReverse} `} id="product">
      <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full -left-[40%] blue__gradient' />

    </div>
      <div className={`${layout.sectionInfo} ml-[300px] `}>
        <h4 className={`${styles.heading2} max-w-[500px]`}>
          Easily control your billing & invoicing.
        </h4>
        <p className={`${styles.paragraph} max-w-[470px] pt-6 pb-11`}>
          {" "}
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className=" flex " >
          <img src={apple} alt="" className="mr-11 ml-4 cursor-pointer "/>
        <img src={google} alt="" className="cursor-pointer " />
        </div>
        
      </div>
    </section>
  );
};

export default Billing;
