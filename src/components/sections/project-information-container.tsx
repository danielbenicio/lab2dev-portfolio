import React from 'react'
import Image from 'next/future/image'
import * as Tooltip from '@radix-ui/react-tooltip'

import figmaLogo from '../../assets/figma.svg'

import nodeLogo from '../../assets/technologies-logo/node.svg'
import reactJSLogo from '../../assets/technologies-logo/reactjs.svg'
import prismaLogo from '../../assets/technologies-logo/prisma.svg'

export const ProjectInformationContainer: React.FC = () => {
  return (
    <div className="mt-14">
      <div className="flex justify-between">
        <h1 className="text-5xl font-bold text-lab2dev-purple-900 leading-[3.75rem] 2xl:text-4xl">
          Portal Lab - RH & Projetos.
        </h1>
        <a
          className="flex justify-center items-center gap-4 w-[25.4rem] py-4 shadow-button rounded-sm
          2xl:py-3 2xl:text-sm transition-color duration-200 hover:bg-slate-100"
          href="https://www.figma.com/file/z0Jp1zj8QXRSEhth2NGqc0/LabPortf%C3%B3lio?node-id=114%3A48"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={figmaLogo} alt="logo figma" />
          <span>Acessar protótipo</span>
        </a>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <span className="w-[42rem] text-xl font-medium opacity-50 leading-8 2xl:text-lg 2xl:mt-6">
          Sistema de gerenciamento de pessoas, para o melhor controle dos
          funcionários do RH.
        </span>

        <div className="flex flex-col gap-3">
          <span className="font-semibold text-lab2dev-purple-900 opacity-80">
            Tecnologias Utilizadas:
          </span>
          <div className="flex gap-12">
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger className="cursor-default">
                  <Image src={prismaLogo} alt="" width={28} />
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="bottom"
                  className="px-2 py-1 rounded border text-xs mt-1"
                  sideOffset={0.1}
                >
                  <span className="opacity-70 font-semibold">Prisma</span>
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>

            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger className="cursor-default">
                  <Image src={reactJSLogo} alt="" width={32} />
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="bottom"
                  className="px-2 py-1 rounded border text-xs mt-1"
                  sideOffset={0.1}
                >
                  <span className="opacity-70 font-semibold">ReactJS</span>
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>

            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger className="cursor-default">
                  <Image src={nodeLogo} alt="" width={32} />
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="bottom"
                  className="px-2 py-1 rounded border text-xs mt-1"
                  sideOffset={0.1}
                >
                  <span className="opacity-70 font-semibold">NodeJS</span>
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}
