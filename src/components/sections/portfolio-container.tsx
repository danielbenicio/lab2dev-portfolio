import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'

import 'swiper/css/pagination'

import { FreeMode, Pagination } from 'swiper'

import { ProjectCard } from '../project-card'

import { GoogleSheetResponse } from '../../model/GoogleSheetResponse'

interface PortfolioContainerProps {
  projects: GoogleSheetResponse[]
}

export const PortfolioContainer: React.FC<PortfolioContainerProps> = ({
  projects,
}) => {
  return (
    <div className="mt-24 pl-36 2xl:pl-20 2xl:mt-20" id="portfolio-container">
      <h1 className="text-lab2dev-purple-900 font-medium text-5xl leading-[3.75rem] mb-1 2xl:text-4xl">
        Portfólio
      </h1>
      <span className="leading-7 font-medium opacity-40 text-lg 2xl:text-base">
        Temos orgulho de nossos projetos, pois todos conseguimos cumprir
        <br />o que nos foi pedido com excelência e perfeição.
      </span>
      <Swiper
        freeMode={true}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        loop={true}
        className="flex h-[48rem] 2xl:h-[45rem] mt-8 2xl:mt-0"
      >
        {projects.map((project) => {
          return (
            <SwiperSlide
              className="flex gap-36 w-full items-center 2xl:gap-7 2xl:mr-4 2xl:ml-4"
              key={project.id}
            >
              <ProjectCard
                frontCover={project.frontCover}
                projectName={project.name}
                technologiesUsed={project.technologies}
                description={project.description}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
