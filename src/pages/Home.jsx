import React from 'react'
import Banner from '../components/Banner'
import Information from '../components/Information'
import Ads from '../components/Ads'
import NewArrival from '../components/NewArrival'
import BestSellers from '../components/BestSellers'
import Ads2 from '../components/Ads2'
import SpecialOffers from '../components/SpecialOffers'


const Home = () => {
  return (
    <>
     <Banner />
     <Information />
     <Ads />
     <NewArrival />
     <BestSellers />
     <Ads2 />
     <SpecialOffers />
    </>
  )
}

export default Home