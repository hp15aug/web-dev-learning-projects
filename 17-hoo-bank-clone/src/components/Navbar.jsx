import React from 'react';
import { useState } from 'react';
import styles from '../style';
import {logo , close, menu} from  "../assets";
import {navLinks} from "../constants";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full items-center justify-between flex py-6 navbar' >
        <img src={logo} alt="" className='w-[124px] h-[32px] cursor-pointer'/>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1' >
          {navLinks.map((nav, index) =>{
            return(
              <li className={`text-white font-poppins text-[16px] mr-10`} >
                <a href={`${nav.id}`}> {nav.title} </a>
              </li> 
            )
          } )}
        </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center' >
              <img src={toggle? close: menu} alt="" className='w-[28px]' onClick={ ()=>{
                setToggle((prev)=>!prev)
              } } />

              <div className={`${toggle? 'flex': 'hidden' } p-6 bg-black-gradient min-w-[140px] top-20 absolute sidebar rounded-xl `}>
              <ul className=' justify-start items-center flex-1' >
          {navLinks.map((nav, index) =>{
            return(
              <li className={`text-white font-poppins my-3 text-[16px]`} >
                <a href={`${nav.id}`}> {nav.title} </a>
              </li> 
            )
          } )}
        </ul>
              </div>

            </div>

    </nav>
  )
}

export default Navbar