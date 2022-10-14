import React from 'react'

import { ArrowRight } from 'phosphor-react'
interface ProjectCardProps {
  frontCover: string
  projectName: string
  technologiesUsed: string
  description: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  frontCover,
  projectName,
  technologiesUsed,
  description,
}) => {
  return (
    <div className="shadow-card rounded w-[27.375rem] h-[42.4rem] flex flex-col 2xl:w-[25.8rem] 2xl:h-[38.5rem]">
      <img
        src={frontCover}
        alt="project image"
        className="w-[500px] h-[294px] rounded-tr rounded-tl 2xl:h-[274px]"
        width={20}
        height={20}
      />
      <div className="px-4 pt-3">
        <span className="text-red-450 font-medium text-sm">
          Tecnologias: {technologiesUsed}
        </span>
        <h1 className="mt-1 text-lab2dev-purple-900 opacity-80 font-semibold text-xl">
          {projectName}
        </h1>
        <div className="mt-6">
          <span className="mt-7 opacity-60 font-normal 2xl:text-sm">
            {description}
          </span>
        </div>
        <button
          className="mt-4 flex justify-center items-center gap-4 w-full py-4 border rounded-sm
          transition-color duration-500 hover:bg-lab2dev-purple-900 hover:rounded hover:text-white
          2xl:py-3 2xl:text-sm"
        >
          <span>Mais informações</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  )
}
