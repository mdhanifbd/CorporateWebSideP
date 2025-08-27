import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5"; 
import { RiCloseLine } from "react-icons/ri";
import Cartimg from "../assets/Cart-img.png"

const Navbar = () => {
  let [category, setCategory]= useState(false)
  let [chartshow, setChartshow]= useState(false)
  let [accshow, setAccshow]= useState(false)
  let cateRef = useRef();
  let accRef = useRef();
  let chartRef = useRef();


  useEffect(()=>{
     document.addEventListener("click",(e)=>{
       //console.log(e.target);
       if(cateRef.current.contains(e.target)){
           setCategory(!category)
       }else{
          setCategory(false)
       }
       if(accRef.current.contains(e.target)){
          setAccshow(!accshow)
      }else{
         setAccshow(false)
      }
      if(chartRef.current.contains(e.target)){
         setChartshow(!chartshow)
      }else{
         setChartshow(false)
      }
   })
  },[category,accshow,chartshow])


  
   
  return (
     <section className='bg-[rgba(118,118,118,0.4)] py-2' >
        <Container>
            <div className='flex items-center relative' >
               <div className='w-1/4' >
               <div className='flex gap-2 items-center ' ref={cateRef} >
                  <FaBarsStaggered />
                  <h3 className='hidden lg:block' >Shop by Category</h3>
               </div>
               {category && 
               <div className='bg-[#262626] py-3 absolute top-[60px] left-0 w-[20%] z-[2]' >
                 <ul>
                  <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-dm pl-2 hover:pl-7 duration-300 ease-in-out hover:text-[#fff] py-1' ><a href='#'>Accesories</a></li>
                  <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-dm pl-2 hover:pl-7 duration-300 ease-in-out hover:text-[#fff] py-2' ><a href='#'>Furniture</a></li>
                  <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-dm pl-2 hover:pl-7 duration-300 ease-in-out hover:text-[#fff] py-2' ><a href='#'>Electronics</a></li>
                  <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-dm pl-2 hover:pl-7 duration-300 ease-in-out hover:text-[#fff] py-2' ><a href='#'>Clothes</a></li>
                  <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-dm pl-2 hover:pl-7 duration-300 ease-in-out hover:text-[#fff] py-2' ><a href='#'>Bags</a></li>
                  <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-dm pl-2 hover:pl-7 duration-300 ease-in-out hover:text-[#fff] py-2' ><a href='#'>Home applicatiuon</a></li>
                  </ul> 
               </div>
                 }
               </div>
              
               <div className='relative w-2/4 z-[-1]' >
                <input className='w-full border-2 border-[#262626]  py-3 px-3 rounded-full bg-[#fff] placeholder:text-[10px] lg:placeholder:text-[16px] ' type='search' placeholder='Search Products'  />
                <div className='absolute top-[40%] right-5 translate-Y-[-40%]'>
                <IoSearchSharp />  
                </div>
               </div>
              
               <div className='w-1/4 relative' >
               <div className='flex  justify-end gap-3' >
                <div className='flex items-center gap-3' ref={accRef}>
                  <FaUserAlt />
                 <MdArrowDropDown />
                </div>                
                <div className='' ref={chartRef} >
                  <FaCartShopping />
                </div>
            </div>
            {chartshow &&
               <div className='bg-[#979797] w-full absolute  top-[42px] left-0 z-[2]'>
                  <div className='flex ' >
                     <img className='p-5' src={Cartimg} alt='#'/>
                  <div className='' >
                  <h3 className='text-[#262626] text-[14px] font-dm pl-3 mt-9' >Black Smart Watch</h3>
                  <h4 className='text-[#262626] text-[14px] pl-3 mt-2' >$44.00</h4>
                  <a href='#'><RiCloseLine className='absolute top-[60px] right-[30px] translate-y-[-50%]' /></a>
                  </div> 
                  </div>
                
                <div className=' bg-white shadow-2xl p-5 ' >
                  <div>
                  <h3 className='font-dm text-[16px] mb-5' >Subtotal: <span>$44.00</span></h3>
                  </div>
                  <div className='flex gap-3 ' >
                  <div>
                     <a className='border-1 border-[#282828] font-dm text-[14px] font-bold hover:bg-[#262626] hover:text-white p-3 ' href='#'>View Cart</a>
                  </div>
                  <div>
                     <a className='border-1 border-[#282828] font-dm text-[14px] font-bold hover:bg-[#262626] hover:text-white p-3' href='#'>Checkout</a>
                  </div>   
                  </div>
                </div>
                </div>
                 }
               {accshow &&
                  <div className='bg-[#262626] w-[70%] justify-center absolute top-[87px] right-[30px] translate-y-[-50%] z-[2]' >
                  <ul>
                     <li className='text-[14px] text-white font-dm hover:bg-[#fff] hover:text-[#262626] text-center hover:shadow-2xl py-3' ><a href='#'>My Account</a></li>
                     <li className='text-[14px] text-white font-dm  hover:bg-[#fff] hover:text-[#262626] text-center hover:shadow-2xl py-3' ><a href='#'>Log Out</a></li>
                  </ul>
                </div>
                }
               </div>
            </div>
        </Container>
     </section>
)
}

export default Navbar