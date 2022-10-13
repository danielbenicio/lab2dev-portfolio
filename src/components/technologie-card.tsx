import React from 'react'
import Image from 'next/future/image'

import { TECHNOLOGIES_TYPES } from '../shared/TECHNOLOGIES_TYPES'

interface TechnologieCardProps {
  technologieName: 'Node JS' | 'Python' | 'SAP UI5' | 'React JS'
  description: string
}

export const TechnologieCard: React.FC<TechnologieCardProps> = ({
  technologieName,
  description,
}) => {
  return (
    <div className="shadow-card pt-4 pb-6 px-5 rounded max-h-80 max-w-xs 2xl:max-h-72 2xl:w-[17rem]">
      <div className="w-16 h-16 border flex items-center justify-center rounded mb-6 2xl:w-14 2xl:h-14">
        <Image
          src={TECHNOLOGIES_TYPES[technologieName]}
          alt="technologie image"
          className="w-10 2xl:w-8"
        />
      </div>
      <h1 className="text-lab2dev-purple-900 font-semibold text-xl mb-3">
        {technologieName}
      </h1>
      <span className="font-semibold opacity-50 text-sm 2xl:text-xs">
        {description}
      </span>
    </div>
  )
}
