import React, { useEffect } from 'react'

import { Header } from '../components/sections/header'
import { IntroductionContainer } from '../components/sections/introduction-container'
import { GoldPartnerContainer } from '../components/sections/gold-partner-container'
import { CompaniesContainer } from '../components/sections/companies-carousel'
import { TechnologiesContainer } from '../components/sections/ technologies-container'
import { PortfolioContainer } from '../components/sections/portfolio-container'
import { Footer } from '../components/sections/footer'

const Home: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      location.hash = ''
      window.scrollTo(0, 0)
    }, 20)
  }, [])

  return (
    <>
      <div className="px-36 pt-10">
        <Header />
        <IntroductionContainer />
        <GoldPartnerContainer />
        <CompaniesContainer />
        <TechnologiesContainer />
      </div>
      <PortfolioContainer />
      <Footer />
    </>
  )
}

export default Home
