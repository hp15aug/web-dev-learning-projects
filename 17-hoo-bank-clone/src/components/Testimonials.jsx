import React from 'react';
import styles from '../style';
import { feedback } from '../constants';
import FeedbackCard from "./FeedbackCard";


const Testimonials = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}> 
    <div className='absolute z-[0] w-[60%] h-[60%] rounded-full -right-[50%] blue__gradient' />
    <div className='flex'>
      <h1 className={`${styles.heading2}`} >What people are <br />saying about us</h1>
      <p className={`${styles.paragraph} mt-10`} >
      Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
    </div>

    <div className={`flex mt-[100px] justify-center w-full feedback-container flex-wrap  `} >
        {feedback.map((feed) =>{
          return(
            <FeedbackCard key={feed.id} {...feed}  />
          )
        })}
    </div>

  </section>
)

export default Testimonials
