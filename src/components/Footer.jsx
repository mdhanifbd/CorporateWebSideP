import React from 'react'
import Container from "../components/Container"
import FooterLogo from "../assets/footerLogo.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";


const Footer = () => {
  return (
    <section className='bg-[#F5F5F3] py-[30px]' >
        <Container>
         <div className='flex' >
            <div className='w-1/5' >
                <h1 className='font-dm text-[12px] lg:text-[16px] font-bold' >MENU</h1>
                <div className='' >
                 <ul className='py-5' >
                    <li className=' font-dm  text-[10px] lg:text-[14px] text-[#6D6D6D] mb-3' ><a href='#'>Home</a></li>
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D] mb-3' ><a href='#'>Shop</a></li>
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D] mb-3 ' ><a href='#'>About</a></li>
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D] mb-3 ' ><a href='#'>Contact</a></li>
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D] mb-3 ' ><a href='#'>Journal</a></li>
                 </ul>
                </div>
               
            </div>
            <div className='w-1/5' >
            <h1 className='font-dm text-[12px] lg:text-[16px] font-bold' >SHOP</h1>
                <div className='' >
                 <ul className='py-5' >
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D]  mb-3 ' ><a href='#'>Category 1</a></li>
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D]  mb-3 ' ><a href='#'>Category 2</a></li>
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D]  mb-3 ' ><a href='#'>Category 3</a></li>
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D]  mb-3 ' ><a href='#'>Category 4</a></li>
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D]  mb-3 ' ><a href='#'>Category 5</a></li>
                  
                 </ul>
                </div>
            </div>
            <div className='md:w-1/5 w-2/5' >
            <h1 className='font-dm text-[12px] lg:text-[16px] font-bold' >HELP</h1>
                <div className='' >
                 <ul className='py-5' >
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D] mb-3  ' ><a href='#'>Privacy Policy</a></li>
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D] mb-3  ' ><a href='#'>Terms & Conditions</a></li>
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D] mb-3  ' ><a href='#'>Special E-shop</a></li>
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D] mb-3  ' ><a href='#'>Shipping</a></li>
                    <li className=' font-dm text-[10px] lg:text-[14px] text-[#6D6D6D] mb-3  ' ><a href='#'>Secure Payments</a></li>
                </ul>
                </div>        
            </div>
            <div className='w-2/5 hidden md:block' >
            <h2 className='font-dm text-[10px] lg:text-[16px] font-bold text-[#262626]' >(052) 611-5711</h2>
            <h3 className='font-dm text-[10px] lg:text-[16px] font-bold text-[#262626]' >company@domain.com</h3>
            <p className='font-dm text-[10px] lg:text-[14px] text-[#6D6D6D]' >575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className='w-1/5 ' >
            <img  src={FooterLogo} alt='#'/>
            </div>
             </div>
         <div className='flex justify-between items-end gap-5 mb-5 ' >
            <div className='flex gap-3' >
               <a href='#'><FaFacebookF /></a>
               <a href='#'><FaLinkedinIn /></a>
               <a href='#'><CiInstagram /></a>
            </div>
            <div className='justify-center hidden lg:block' >
                <h5 className='font-dm text-[14px] text-[#6D6D6D] ' >2020 Orebi Minimal eCommerce Figma Template by Adveits</h5>
            </div>
           </div>
            <div className='justify-center block lg:hidden' >
                <h5 className='font-dm text-[12px] text-[#6D6D6D] pb-6 ' >2020 Orebi Minimal eCommerce Figma Template by Adveits</h5>
            </div>
        </Container>
    </section>
  )
}

export default Footer