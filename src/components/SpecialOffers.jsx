import React from 'react'
import Container from "../components/Container"
import Spimg1 from "../assets/spimg1.png"
import Spimg2 from "../assets/spimg2.png"
import Spimg3 from "../assets/spimg3.png"
import Spimg4 from "../assets/spimg4.png"
import Slider from 'react-slick';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router';


const SpecialOffers = () => {
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[50%] right-0 translate-y-[-50%] z-[9] bg-black text-white p-2 rounded-full text-sm md:text-md lg:text-2xl cursor-pointer"
        onClick={onClick}>
         <MdArrowBackIosNew />  
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[50%] left-0 translate-y-[-50%] z-[9] bg-black text-white p-2 rounded-full text-sm md:text-md lg:text-2xl cursor-pointer"
        onClick={onClick}>
         <MdArrowForwardIos />
      </div>
    );
  }
  var settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
 <section className='py-[30px] md:py-[10px] lg:py-[50px]'>
    <Container>
      <div className='py-[30px]' >
        <div className='' >
        <h2 className='font-dm text-[#262626] text-[39px] font-bold mb-3' >Special Offers</h2>
        </div>
         <div className='' >
         <Link to="/specialOffer">
         <Slider {...settings}>
         <div className='px-1' >
             <a href='#'><img  src={Spimg1} alt='#'/></a>
        </div> 
        <div className='px-1' >
            <a href='#'><img  src={Spimg2} alt='#'/></a>
        </div>
        <div className='px-1' >
            <a href='#'><img  src={Spimg3} alt='#'/></a>
        </div>
        <div className='px-1' >
            <a href='#'><img  src={Spimg4} alt='#'/></a>
        </div>
        <div className='px-1' >
             <a href='#'><img  src={Spimg1} alt='#'/></a>
        </div> 
        <div className='px-1' >
            <a href='#'><img  src={Spimg2} alt='#'/></a>
        </div>
        <div className='px-1' >
            <a href='#'><img  src={Spimg3} alt='#'/></a>
        </div>
        <div className='px-1' >
            <a href='#'><img  src={Spimg4} alt='#'/></a>
        </div>
        <div className='px-1' >
             <a href='#'><img  src={Spimg1} alt='#'/></a>
        </div> 
        <div className='px-1' >
            <a href='#'><img  src={Spimg2} alt='#'/></a>
        </div>
        <div className='px-1' >
            <a href='#'><img  src={Spimg3} alt='#'/></a>
        </div>
        <div className='px-1' >
            <a href='#'><img  src={Spimg4} alt='#'/></a>
        </div>
        <div className='px-1' >
             <a href='#'><img  src={Spimg1} alt='#'/></a>
        </div> 
        <div className='px-1' >
            <a href='#'><img  src={Spimg2} alt='#'/></a>
        </div>
        <div className='px-1' >
            <a href='#'><img  src={Spimg3} alt='#'/></a>
        </div>
        <div className='px-1' >
            <a href='#'><img  src={Spimg4} alt='#'/></a>
        </div>
        <div className='px-1' >
             <a href='#'><img  src={Spimg1} alt='#'/></a>
        </div> 
        <div className='px-1' >
            <a href='#'><img  src={Spimg2} alt='#'/></a>
        </div>
        <div className='px-1' >
            <a href='#'><img  src={Spimg3} alt='#'/></a>
        </div>
        <div className='px-1' >
            <a href='#'><img  src={Spimg4} alt='#'/></a>
        </div>
        <div className='px-1' >
             <a href='#'><img  src={Spimg1} alt='#'/></a>
        </div> 
        <div className='px-1' >
            <a href='#'><img  src={Spimg2} alt='#'/></a>
        </div>
        <div className='px-1' >
            <a href='#'><img  src={Spimg3} alt='#'/></a>
        </div>
        <div className='px-1' >
            <a href='#'><img  src={Spimg4} alt='#'/></a>
        </div>
     </Slider>
     </Link>
        </div>
     </div>
    </Container>
 </section>
  )
}

export default SpecialOffers