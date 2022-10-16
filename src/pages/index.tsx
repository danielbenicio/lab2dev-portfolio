import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import axios from 'axios'

import { Header } from '../components/sections/main-header'
import { IntroductionContainer } from '../components/sections/introduction-container'
import { GoldPartnerContainer } from '../components/sections/gold-partner-container'
import { CompaniesContainer } from '../components/sections/companies-carousel'
import { TechnologiesContainer } from '../components/sections/technologies-container'
import { PortfolioContainer } from '../components/sections/portfolio-container'
import { Footer } from '../components/sections/footer'

import { GoogleSheetResponse } from '../model/GoogleSheetResponse'

interface HomeProps {
  projects: GoogleSheetResponse[]
}

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    setTimeout(() => {
      location.hash = ''
      window.scrollTo(0, 0)
    }, 20)
  }, [])

  console.log(projects)
  return (
    <>
      <div className="2xl:px-20 px-36 pt-10">
        <Header />
        <IntroductionContainer />
        <GoldPartnerContainer />
        <CompaniesContainer />
        <TechnologiesContainer />
      </div>
      <PortfolioContainer projects={projects} />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios
    .get('https://sheetdb.io/api/v1/6oksumgm1riyo')
    .then((response) => response.data)

  const projects = response.map((project: GoogleSheetResponse) => {
    return {
      id: project.id,
      name: project.name,
      frontCover: project.frontCover,
      technologies: project.technologies,
      description: project.description,
    }
  })

  return {
    props: {
      projects,
    },
  }
}
