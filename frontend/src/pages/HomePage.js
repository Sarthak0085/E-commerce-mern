import React from 'react'
import Layout from '../components/Layout/Layout'
import MainCarousel from '../components/HomeCarousel/MainCarousel'
import HomeCarouselSection from '../components/HomeCarouselSection/HomeCarouselSection'
import { mens_kurta } from '../assets/data/Men'


const HomePage = () => {
  return (
      <Layout>
          <MainCarousel />
          <div className="space-y-9 py-20 flex flex-col justify-center px-4 lg:px-10">
                <HomeCarouselSection data={mens_kurta} sectionName="Men's Kurta" />
                <HomeCarouselSection data={mens_kurta} sectionName="Men's Kurta" />
                <HomeCarouselSection data={mens_kurta} />
                <HomeCarouselSection data={mens_kurta} />
                <HomeCarouselSection data={mens_kurta} />
            </div>
      </Layout>
  )
}

export default HomePage