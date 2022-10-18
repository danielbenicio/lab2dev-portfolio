import React, { SyntheticEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface ProjectImagesContainerProps {
  images: string[]
  onOpenModal: () => void
  onSetProjectImageModal: (imageToSet: string) => void
}

export const ProjectImagesContainer: React.FC<ProjectImagesContainerProps> = ({
  images,
  onOpenModal,
  onSetProjectImageModal,
}) => {
  const handleOpenModal = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    onOpenModal()
    onSetProjectImageModal(event.currentTarget.src)
  }

  return (
    <div className="mt-12 grid grid-cols-3 gap-5 2xl:mt-7 2xl:gap-3">
      {images.map((image) => {
        return (
          <img
            key={uuidv4()}
            className="rounded border cursor-pointer"
            src={image}
            alt="Print Projeto"
            onClick={(event) => handleOpenModal(event)}
          />
        )
      })}
    </div>
  )
}
