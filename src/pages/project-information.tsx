import React from 'react'
import Image from 'next/future/image'
import { CaretLeft } from 'phosphor-react'
import Link from 'next/link'

import logo from '../assets/logo.svg'

import { ProjectInformationContainer } from '../components/sections/project-information-container'
import { ProjectImagesContainer } from '../components/sections/project-images-container'

const ProjectInformation: React.FC = () => {
  return (
    <>
      <div className="pl-36 pr-[50vw] pt-10 flex justify-between items-center">
        <Link href="/">
          <CaretLeft
            size={36}
            className="text-lab2dev-purple-700 opacity-40 cursor-pointer"
          />
        </Link>
        <Image src={logo} alt="logo" width={166} />
      </div>
      <div className="2xl:px-20 px-36">
        <ProjectInformationContainer />
        <ProjectImagesContainer />
      </div>
    </>
  )
}

export default ProjectInformation
