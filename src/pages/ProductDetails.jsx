import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "../components/Container";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import Oval1 from "../assets/Oval1.png";
import Oval2 from "../assets/Oval2.png";
import Oval3 from "../assets/Oval3.png";
import Oval4 from "../assets/Oval4.png";
import Oval5 from "../assets/Oval5.png";

const ProductDetails = () => {
  let {id} = useParams();
  let [singleProduct, setSingleProduct] = useState({});
  //console.log(productId);

  let getProductId = () => {
    axios
      .get(`https://dummyjson.com/products/${id}`).then((response) => {
        setSingleProduct(response.data);
      });
  };

  useEffect(() => {
    getProductId();
  },[id]);
  //console.log(singleProduct.rating);

  let clientRating = Array.from({ length: 5 }, (_, index) => {
   if (!singleProduct.rating) return <FaRegStar />;
    let number = index + 0.5;
    return singleProduct.rating > index + 1 ? (
      <FaStar className="text-[gold]" />
    ) : singleProduct.rating > number ? (
      <FaStarHalfAlt className="text-[gold]" />
    ) : (
      <FaRegStar />
    );
  });
  //console.log(singleProduct.rating);

  let [count, setCount] = useState(1);
  let handleIncrement = () => {
    setCount(count + 1);
  };
  let handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  let [showDetails, setShowDetails] = useState(false);
  let handleDetails = () => {
    setShowDetails(!showDetails);
  };
  let [showReturn, setShowReturn] = useState(false);
  let handleReturn = () => {
    setShowReturn(!showReturn);
  };
  let handlePerPageChange = () => {
    // console.log("ami",e.target.value);
    //setPerPage(e.target.value)
  };

  return (
    <section>
      <Container>
        <div className="">
          <div className="p-8">
            <div className="w-[60%] flex justify-center mx-auto  shadow-2xl border-1 border-[#4800ff1d] bg-gray-50 py-9 mb-7">
              <img src={singleProduct.thumbnail} alt="" />
            </div>
            <div className="">
              <h2 className="font-dm text-[49px] text-[#262626] font-bold">
                Product
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex">
                {clientRating}
                {/* <FaStar />
            <FaStarHalfAlt />
            <FaRegStar /> */}
              </div>
              <div className="">
                <p>1 Review</p>
              </div>
            </div>
            <div className="mt-3">
              <div className="">
                <p className="font-dm text-[#262626] font-bold pb-4">
                  Price:{" "}
                  <span className="text-[#767676] pl-6">
                    ${singleProduct.price}
                  </span>
                </p>
                <p className="font-dm text-[#262626] font-bold pb-4">
                  Stock:{" "}
                  <span className="text-[#767676] pl-6">
                    ${singleProduct.stock}
                  </span>
                </p>
                <p className="font-dm text-[#262626] font-bold pb-4">
                  Brand:{" "}
                  <span className="text-[#767676] pl-6">
                    {singleProduct.brand}
                  </span>
                </p>
                {/* <p className="font-dm text-[#262626] font-bold pb-4">
                  Status:{" "}
                  <span className="text-[#767676] pl-6">
                    ${singleProduct.availabilityStatus}
                  </span>
                </p> */}
              </div>
            </div>
            <div className=" border-1 border-[rgb(240,237,237)]">
              <div className="flex items-center gap-5 py-4">
                <div className="">
                  <h4 className=" font-dm text-[#262626] font-bold">COLOR:</h4>
                </div>
                <div className="flex ">
                  <img
                    className="p-2 transition-transform duration-100 hover:scale-225"
                    src={Oval1}
                    alt=""
                  />
                  <img
                    className="p-2 transition-transform duration-100 hover:scale-225"
                    src={Oval2}
                    alt=""
                  />
                  <img
                    className="p-2 transition-transform duration-300 hover:scale-225"
                    src={Oval3}
                    alt=""
                  />
                  <img
                    className="p-2 transition-transform duration-300 hover:scale-225"
                    src={Oval4}
                    alt=""
                  />
                  <img
                    className="p-2 transition-transform duration-300 hover:scale-225"
                    src={Oval5}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-15">
                <div className="">
                  <h3 className=" font-dm text-[#262626] font-bold">SIZE:</h3>
                </div>
                <div className="flex items-center gap-3 border border-[rgb(201,195,195)] px-15 py-1 mb-5">
                  <div className="">
                    <label className="pr-4" htmlFor="">
                      Show:
                    </label>
                    <select
                      onChange={handlePerPageChange}
                      name=""
                      id=""
                      className=""
                    >
                      <option value="#">Small</option>
                      <option value="#">Medium</option>
                      <option value="#">Large</option>
                      
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="">
                  <h4 className=" font-dm text-[#262626] font-bold">
                    QUANTITY:
                  </h4>
                </div>
                <div className=" flex items-center gap-3 border 1px solid border-[rgb(201,195,195)] px-9 py-1 mb-5">
                  <FaMinus
                    onClick={handleDecrement}
                    className="cursor-pointer ml-2"
                  />
                  <h2>{count}</h2>
                  <FaPlus
                    onClick={handleIncrement}
                    className="cursor-pointer mr-2"
                  />
                </div>
              </div>
              <div className="flex gap-3  border 1px solid border-[rgb(247,238,238)] py-5">
                <div className="inline-block">
                  <h5 className=" font-dm text-[#262626] font-bold">STATUS:</h5>
                </div>
                <div className="">
                  <h5 className="text-[#767676] font-dm font-bold">{singleProduct.category}</h5>
                </div>
              </div>
            </div>
            {/* border end */}
            <div className="flex  gap-9 mt-5">
              <div>
                <button className="text-[#262626] text-[14px] font-bold font-dm px-[30px]  py-[8px]  border-2 border-[#262626] hover:bg-[#262626] hover:text-white hover:border-2 transition-all duration-300 ease-in-out cursor-pointer rounded-[5px]">
                  Add to Wish List
                </button>
              </div>
              <div>
                <button className="text-[#262626] text-[14px] font-bold font-dm px-[45px]  py-[8px]  border-2 border-[#262626] hover:bg-[#262626] hover:text-white hover:border-2 transition-all duration-300 ease-in-out cursor-pointer rounded-[5px]">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* new-Part */}
            <div className="py-7">
              <div className="">
                <div className="flex items-center gap-[18%]">
                  <h2>FEATURES & DETAILS</h2>
                  <FaPlus onClick={handleDetails} className="cursor-pointer" />
                </div>
                <div className="">
                  {showDetails == true ? (
                    <p className="text-[#767676] text-[14px] font-dm font-medium py-2 pl-4">
                      {singleProduct.description}
                    </p>
                  ) : ("")}
                </div>
              </div>
            </div>
            <div className="py-7">
              <div className="">
                <div className="flex items-center gap-[17.5%]">
                  <h2>SHIPPING & RETURNS</h2>
                  <FaPlus onClick={handleReturn} className="cursor-pointer" />
                </div>
                <div className="">
                  {showReturn == true ? (
                    <h3 className="text-[#767676] text-[16px] font-dm font-normal py-2 pl-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </h3>
                  ) : ("")}
                </div>
              </div>
            </div>
            {/* new part */}
            <div className="flex gap-[62px]">
              <div className="">
                <h4 className="text-[#767676] text-[20px] font-dm font-normal">
                  Description
                </h4>
              </div>
              <div className="">
                <h4 className="text-[#262626] text-[20px] font-dm font-bold">
                  Reviews (1)
                </h4>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-[#767676] text-[14px] font-dm font-normal mb-7">
                1 review for Product
              </h3>
            </div>
            <div className="flex">
              <div className="">
                <h2 className="text-[#262626] text-[20px] font-dm font-normal pr-9">
                  John Ford
                </h2>
              </div>
              <div className="flex items-center ">{clientRating}</div>
            </div>
            <div className="">
              <p className="text-[#767676] text-[14px] font-dm font-normal mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="mt-7">
              <h2 className="text-[20px] font-dm font-semibold text-[#262626] pb-8 ">
                Add a Review
              </h2>
              <form action="">
                <div className="pb-4">
                  <label
                    htmlFor="Name"
                    className="block text-[18px] text-[rgb(198,193,193)] font-bold font-dm pb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name here"
                    required
                    autoComplete="name"
                    className="block py-2 px-3 border-2 border-[rgb(232,227,227)] rounded-[5px] w-full "
                  />
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="Name"
                    className="block text-[18px] text-[#262626] font-bold font-dms pb-2"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Your email here"
                    required
                    autoComplete="email"
                    className="block py-2 px-3 border-2 border-[rgb(232,227,227)] rounded-[5px] w-full "
                  />
                </div>
                <div className="pb-8">
                  <label
                    htmlFor="Name"
                    className="block text-[18px] text-[#262626] font-bold font-dms pb-2"
                  >
                    Review
                  </label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Your name here"
                    required
                    autoComplete="text"
                    className="block py-2 px-3 border-2 border-[rgb(232,227,227)] rounded-[5px] w-full "
                  ></textarea>
                </div>
                <div className="pb-8">
                  <button
                    type="submit"
                    className="text-[14px] text-[#fff] font-bold font-dm py-3 px-20 bg-[#262626] cursor-pointer rounded-[5px]"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
