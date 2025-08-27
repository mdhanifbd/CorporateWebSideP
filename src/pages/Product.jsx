import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router'
import { FaListOl } from "react-icons/fa";
import { IoMdGrid } from "react-icons/io";
import Post from '../components/Post'
import {ApiData} from "../components/ContextApi"
import Pagination from '../components/Pagination';




const Product = () => {
 let info = useContext(ApiData)
  //console.log(info);
  let [perPage, setPerPage] = useState(6)
  let [currentPage, setCurrentPage] = useState(1)
  let[categoryp,setCategoryp] = useState([])
  let [filterShow,setFilterShow] = useState([])
  let lastPage = perPage * currentPage
  let firstPage = lastPage - perPage
  let allPage = info.slice(firstPage,lastPage)
  let [listItem,setListItem] = useState("")
  let [active, setActive] = useState("grid");
  let pageNumber = []
  for(let i=0; i< Math.ceil(info.length / perPage);i++){
   pageNumber.push(i)
  }
//  console.log(pageNumber);

let paginate =(index)=>{
  setCurrentPage(index+1);
  
}

let next =()=>{
  if(currentPage < pageNumber.length){
    setCurrentPage((state)=>state+1)
  }
  
}
let previous =()=>{
  if(currentPage > 1){
  setCurrentPage((state)=>state-1)
}
}

let handlePerPageChange =(e)=>{
 // console.log("ami",e.target.value);
  setPerPage(e.target.value)
  
}

useEffect(()=>{
setCategoryp([...new Set(info.map((item)=>item.category))])
},[info])

let handleCatagory = (citem)=>{
//console.log("ami",citem);
let cateFilter = info.filter((item)=>item.category == citem)
//console.log(cateFilter);
setFilterShow(cateFilter)
}

let handleByPrice =(e)=>{
  //console.log("ami");
// console.log("ami",e);
 console.log("ami",e.target);
  //setPerPage(e.target)  
}

let handleAll = ()=>{
//console.log("ami");
setFilterShow("")
}

let handleListItem = ()=>{
  //console.log("ami");
  setListItem("active")
  //console.log(listItem);
}



//console.log(activegrid);


 
  return (
   <section>
    <Container>
      <div className='py-10' >
        <h2 className='font-dm text-[49px] text-[#262626] font-bold' >Products</h2>
        <p><Link to="/">Home</Link> / <Link to="/product">Product</Link></p>
        <div className='flex' >
        <div className='w-1/4' >
        <h2 className='font-dm text-[24px] text-[#262626] font-bold' >Shop by Category</h2>
        <ul>
          <li onClick={handleAll} className='font-dm text-[16px] text-[#262626] font-normal' >All Products</li>
        </ul>
        <ul>
         {categoryp.map((item)=>(
           <li onClick={()=>handleCatagory(item)} className='font-dm text-[16px] text-[#262626] font-normal'>{item}</li>
         ))}
       </ul> 
        </div>
        <div className='w-3/4' >
        <div className='flex gap-4' >
           <div  className={`p-3 cursor-pointer ${
          active == "grid" ? "bg-red-500" : "bg-[purple]"
        }`} onClick={()=>setListItem("")} >
           <IoMdGrid />
         </div>
          <div onClick={handleListItem} className=' p-3' >
            <FaListOl />
          </div>
        </div>
      <div className='flex justify-end' >
      <div className='pr-10' >
        <label className='pr-10'  htmlFor=''>Sort by:</label>
        <select onChange={handleByPrice} name='' id='' className='py-1 px-4 border-2 border-[#262626]' >
          <option value="default"><h4>Price</h4></option>
          <option value="Low to High"><h4>Low to High</h4></option>
          <option value="High ti Low"><h4>High ti Low</h4></option>
        </select>
      </div>
      <div className='' >
        <label className='pr-4' htmlFor=''>Show:</label>
         <select onChange={handlePerPageChange} name='' id='' className='py-1 px-4 border-2 border-[#262626]' >
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="24">24</option>
          </select>
      </div> 
  </div>
  
        <Post allPage={allPage} filterShow={filterShow} listItem={listItem}  />
        <Pagination pageNumber={pageNumber} paginate={paginate} next={next} previous={previous} currentPage={currentPage}/>
        </div>
      </div>
      </div>
    </Container>
   </section>
  )
}

export default Product
