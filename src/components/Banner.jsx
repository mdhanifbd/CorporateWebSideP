import React from 'react'
import Ban from "../assets/ban.png"
import Slider from 'react-slick';


const Banner = () => {
   var settings = {
    dots: true,
    // infinite: false,
    // speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position:'absolute',
          left:'10%',
          top:'50%',
          transform:'translateY(-50%)'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          padding:'10px 0',
          borderRight: "2px #fff solid",
          color:"transparent",
        }}
      >
        0{i + 1}
      </div>
    )
  };

  return (
   <section>
    <Slider {...settings}>
       <div className='' >
           <a href='#'><img src={Ban} alt=''/></a>
        </div>
        <div className='' >
           <a href='#'><img src={Ban} alt=''/></a>
        </div>
        <div className='' >
           <a href='#'><img src={Ban} alt=''/></a>
        </div>
    </Slider>
   </section>
    
  )
}

export default Banner