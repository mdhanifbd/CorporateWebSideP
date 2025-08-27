import React from 'react'
import Container from "../components/Container"
import Product1 from "../assets/product1.png"
import Product2 from "../assets/product2.png"
import Product3 from "../assets/product3.png"
import Product4 from "../assets/product4.png"


const BestSellers = () => {
  return (
   <section>
    <Container>
      <div className='flex gap-5 py-[30px]' >
        <div className='' >
          <a href='#'><img src={Product1}alt='#'/></a>
        </div>
        <div className='' >
          <a href='#'><img src={Product2}alt='#'/></a>
        </div>
        <div className='' >
          <a href='#'><img src={Product3}alt='#'/></a>
        </div>
        <div className='' >
          <a href='#'><img src={Product4}alt='#'/></a>
        </div>
      </div>
    </Container>
   </section>
  )
}

export default BestSellers