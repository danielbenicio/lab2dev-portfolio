import React from 'react'
import Image from 'next/future/image'

import { ArrowRight } from 'phosphor-react'

import { PROJECT_IMAGES } from '../shared/PROJECT_IMAGES'

interface ProjectCardProps {
  projectName:
    | 'Hidrovias Einstein'
    | 'Portal Lab2Dev'
    | 'Monitor Swift'
    | 'Whirlpool Pricing Spring Boot'
  technologiesUsed: string
  description: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  technologiesUsed,
  description,
}) => {
  return (
    <div className="shadow-card rounded !w-[438px] mt-14 h-[42.4rem] flex flex-col">
      <Image
        src={PROJECT_IMAGES[projectName]}
        alt="project image"
        className="w-full"
      />
      <div className="px-4 pb-7 pt-3">
        <span className="text-red-450 font-medium text-sm">
          Tecnologias: {technologiesUsed}
        </span>
        <h1 className="mt-1 text-lab2dev-purple-900 opacity-80 font-semibold text-xl">
          {projectName}
        </h1>
        <div className="mt-6">
          <span className="mt-7 opacity-60 font-normal">{description}</span>
        </div>
        <button
          className="mt-4 flex justify-center items-center gap-4 w-full py-4 border rounded-sm
          transition-color duration-500 hover:bg-lab2dev-purple-900 hover:rounded hover:text-white"
        >
          <span>Mais informações</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  )
}