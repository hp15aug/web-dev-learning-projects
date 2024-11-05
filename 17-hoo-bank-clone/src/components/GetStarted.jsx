import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div>
      <div className={` ${styles.flexCenter} p-[2px] cursor-pointer h-[140px] w-[140px] bg-blue-gradient rounded-full`}>
        <div className={` ${styles.flexCenter} flex-col bg-black rounded-full w-[100%] h-[100%]`}>
          <div className={`${styles.flexStart} flex-row`} >
              <p className='text-gradient text-[18px]' >
                <span>Get</span> <img src={arrowUp} alt="" className='inline ml-2' /> <br />
                <span>Started</span>
              </p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default GetStarted