import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section className={`py-10 items-center justify-center ${styles.marginY } flex bg-black-gradient-2 rounded-[20px] box-shadow `} >
      <div className={`${styles.padding} flex flex-col flex-1`} >
        <h4 className={`${styles.heading2}`} >Let’s try our service now!</h4>
        <p className={`${styles.paragraph} w-[470px] mt-4`} >
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <div className={`px-10 mx-10 ${styles.flexCenter}`} >
        <Button></Button>
      </div>
    
  </section>
  )
  
};

export default CTA;
