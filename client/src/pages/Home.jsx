import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import VehicleCategories from '../components/VehicleCategories'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <>
      <Hero />
      <VehicleCategories />
      <FeaturedSection />
      <HowItWorks />
      <Banner />
      <WhyChooseUs />
      <Testimonial />
      <FAQ />
      <Newsletter />
    </>
  )
}

export default Home
