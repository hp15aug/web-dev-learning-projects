import React from 'react';
import styles from '../style';
import { clients } from '../constants';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4 `} >
      {clients.map((client) =>{
        return(
          <div className='flex-1 flex justify-center items-center' >
            <img src={client.logo} alt="" className='w-[192px] object-contain '/>
          </div>
        )
      })}
    </section>
  )
}

export default Clients