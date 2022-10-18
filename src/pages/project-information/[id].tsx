import React, { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { v4 as uuidv4 } from 'uuid'
import Modal from 'react-modal'
import Image from 'next/future/image'
import Link from 'next/link'
import axios from 'axios'

import { CaretLeft } from 'phosphor-react'

import logo from '../../assets/logo.svg'

import { ProjectInformationContainer } from '../../components/sections/project-information-container'
import { ProjectImagesContainer } from '../../components/sections/project-images-container'
import { ImageModal } from '../../components/sections/image-modal'

import { GoogleSheetResponse } from '../../model/GoogleSheetResponse'

Modal.setAppElement('#root')

export interface ProjectProps {
  id: string
  name: string
  technologies: string[]
  linkFigma: string
  images: string[]
  description: string
}

interface ProjectInformationProps {
  project: ProjectProps
}

export default function ProjectInformation({
  project,
}: ProjectInformationProps) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [imageToOpen, setImageToOpen] = useState<string[]>([])

  useEffect(() => {
    document.body.style.overflowY = 'hidden'

    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [])

  const handleOpenModal = () => {
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
    setImageToOpen([])
  }

  const handleSetProjectImageModal = (imageToSet: string) => {
    setImageToOpen(project.images.filter((image) => image === imageToSet))
  }

  return (
    <div>
      {imageToOpen.map((imageToOpen: string) => (
        <ImageModal
          key={uuidv4()}
          isModalOpen={modalIsOpen}
          onCloseModal={handleCloseModal}
          projectImage={imageToOpen}
        />
      ))}

      <div className="2xl:pl-20 pl-36 pr-[45vw] pt-10 flex justify-between items-center">
        <Link href="/">
          <CaretLeft
            size={36}
            className="text-lab2dev-purple-700 opacity-40 cursor-pointer 2xl:w-8"
          />
        </Link>
        <Image src={logo} alt="logo" width={166} className="2xl:w-36" />
      </div>
      <div className="2xl:px-20 px-36">
        <ProjectInformationContainer project={project} />
        <ProjectImagesContainer
          images={project.images}
          onOpenModal={handleOpenModal}
          onSetProjectImageModal={handleSetProjectImageModal}
        />
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await axios
    .get('https://sheetdb.io/api/v1/ts0l2t3yjx9sx')
    .then((response) => response.data)

  const paths = data.map((project: GoogleSheetResponse) => {
    return { params: { id: project.id } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params

  const data = await axios
    .get(
      `https://sheetdb.io/api/v1/ts0l2t3yjx9sx/search?id=${id}&casesensitive=true`,
    )
    .then((response) => response.data)

  const project = data.map((project: GoogleSheetResponse) => {
    const splitString = project.technologies.split(',')
    const technologiesArray = Array.from(splitString)

    const printsArray = [
      project.print1,
      project.print2,
      project.print3,
      project.print4,
      project.print5,
      project.print6,
    ]

    return {
      id: project.id,
      name: project.name,
      technologies: technologiesArray,
      linkFigma: project.figmaLink,
      images: printsArray,
      description: project.description,
    }
  })

  return {
    props: {
      project: project[0],
    },
    revalidate: 1440 * 60, // 1 dia
  }
}
