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

export interface ProjectsProps {
  id: string
  name: string
  frontCover: string
  technologies: string
  description: string
}

interface HomeProps {
  projects: ProjectsProps[]
}

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    setTimeout(() => {
      location.hash = ''
      window.scrollTo(0, 0)
    }, 20)
  }, [])

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
    .get('https://sheetdb.io/api/v1/ts0l2t3yjx9sx')
    .then((response) => response.data)

  const projects = response.map((project: GoogleSheetResponse) => {
    const splitString = project.technologies.split(',')
    const arrayString = Array.from(splitString)
    const lastItem = arrayString[arrayString.length - 1]
    arrayString.pop()

    return {
      id: project.id,
      name: project.name,
      frontCover: project.frontCover,
      technologies: arrayString.toString() + ' & ' + lastItem,
      description: project.description,
    }
  })

  return {
    props: {
      projects,
    },
    revalidate: 1440 * 60, // 1 dia
  }
}
