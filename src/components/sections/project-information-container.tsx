import React from 'react'
import Image from 'next/future/image'
import { v4 as uuidv4 } from 'uuid'
import * as Tooltip from '@radix-ui/react-tooltip'

import figmaLogo from '../../assets/figma.svg'

import { ProjectProps } from '../../pages/project-information/[id]'
import { TECHNOLOGIES_TYPES } from '../../shared/TECHNOLOGIES_TYPES'

type ProjectInformationHeaderProps = Omit<ProjectProps, 'images'>

interface ProjectInformationContainerProps {
  project: ProjectInformationHeaderProps
}

export const ProjectInformationContainer: React.FC<
  ProjectInformationContainerProps
> = ({ project }) => {
  return (
    <div className="mt-14 2xl:mt-12">
      <div className="flex justify-between">
        <h1 className="text-5xl font-bold text-lab2dev-purple-900 leading-[3.75rem] 2xl:text-4xl">
          {project.name}
        </h1>
        <a
          className="flex justify-center items-center gap-4 w-[22rem] py-4 shadow-button rounded-sm
          2xl:py-3 2xl:w-64 2xl:text-sm transition-color duration-200 hover:bg-slate-100"
          href={project.linkFigma}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={figmaLogo} alt="logo figma" className="2xl:w-5" />
          <span>Acessar protótipo</span>
        </a>
      </div>
      <div className="mt-5 flex flex-col gap-3 2xl:mt-3">
        <span className="w-[42rem] text-xl font-medium opacity-50 leading-8 2xl:text-base">
          {project.description}
        </span>

        <div className="flex flex-col gap-3">
          <span className="font-semibold text-lab2dev-purple-900 opacity-80 2xl:text-sm">
            Tecnologias Utilizadas:
          </span>
          <div className="flex gap-12">
            {project.technologies.map((technologie) => {
              return (
                <Tooltip.Provider key={uuidv4()}>
                  <Tooltip.Root>
                    <Tooltip.Trigger className="cursor-default">
                      <Image
                        src={TECHNOLOGIES_TYPES[technologie]}
                        alt={technologie}
                        width={28}
                        className="2xl:w-6"
                      />
                    </Tooltip.Trigger>
                    <Tooltip.Content
                      side="bottom"
                      className="px-2 py-1 rounded border text-xs mt-2"
                      sideOffset={0.1}
                    >
                      <span className="opacity-70 font-semibold">
                        {technologie}
                      </span>
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Tooltip.Provider>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
