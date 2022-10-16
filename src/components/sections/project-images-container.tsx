import React from 'react'
import { v4 as uuidv4 } from 'uuid'

interface ProjectImagesContainerProps {
  images: string[]
}

export const ProjectImagesContainer: React.FC<ProjectImagesContainerProps> = ({
  images,
}) => {
  return (
    <div className="mt-12 grid grid-cols-3 gap-5 2xl:mt-7 2xl:gap-3">
      {images.map((image) => {
        return (
          <img
            key={uuidv4()}
            className="rounded border"
            src={image}
            alt="Print Projeto"
          />
        )
      })}
    </div>
  )
}
