import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'

import 'swiper/css/pagination'

import { FreeMode, Pagination } from 'swiper'

import { ProjectCard } from '../project-card'

export const PortfolioContainer: React.FC = () => {
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
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        loop={true}
        className="flex h-[48rem] 2xl:h-[45rem] mt-8 2xl:mt-0"
      >
        <SwiperSlide className="flex gap-36 w-full items-center 2xl:gap-7 2xl:mr-4 2xl:ml-4">
          <ProjectCard
            projectName="Hidrovias Einstein"
            technologiesUsed="SAP UI5, SAP HANA & Python"
            description="Hidrovias ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco  laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in volupt
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat."
          />
          <ProjectCard
            projectName="Portal Lab2Dev"
            technologiesUsed="SAP UI5, SAP HANA & Python"
            description="Hidrovias ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco  laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in volupt
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat."
          />
          <ProjectCard
            projectName="Monitor Swift"
            technologiesUsed="SAP UI5, SAP HANA & Python"
            description="Hidrovias ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco  laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in volupt
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat."
          />
        </SwiperSlide>

        <SwiperSlide className="flex gap-36 w-full items-center 2xl:gap-7">
          <ProjectCard
            projectName="Hidrovias Einstein"
            technologiesUsed="SAP UI5, SAP HANA & Python"
            description="Hidrovias ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco  laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in volupt
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat."
          />
          <ProjectCard
            projectName="Portal Lab2Dev"
            technologiesUsed="SAP UI5, SAP HANA & Python"
            description="Hidrovias ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco  laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in volupt
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat."
          />
          <ProjectCard
            projectName="Monitor Swift"
            technologiesUsed="SAP UI5, SAP HANA & Python"
            description="Hidrovias ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco  laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in volupt
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat."
          />
        </SwiperSlide>

        <SwiperSlide className="flex gap-36 w-full items-center 2xl:gap-7 2xl:mr-4 2xl:ml-4">
          <ProjectCard
            projectName="Hidrovias Einstein"
            technologiesUsed="SAP UI5, SAP HANA & Python"
            description="Hidrovias ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco  laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in volupt
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat."
          />
          <ProjectCard
            projectName="Portal Lab2Dev"
            technologiesUsed="SAP UI5, SAP HANA & Python"
            description="Hidrovias ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco  laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in volupt
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat."
          />
          <ProjectCard
            projectName="Monitor Swift"
            technologiesUsed="SAP UI5, SAP HANA & Python"
            description="Hidrovias ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco  laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in volupt
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
