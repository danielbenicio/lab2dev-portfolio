import React from 'react'
import Image from 'next/future/image'

import portalImage from '../../assets/project-images/portal.png'

export const ProjectImagesContainer: React.FC = () => {
  return (
    <div className="mt-12 grid grid-cols-3 gap-5">
      <Image className="rounded" src={portalImage} alt="logo figma" />
      <Image className="rounded" src={portalImage} alt="logo figma" />
      <Image className="rounded" src={portalImage} alt="logo figma" />

      <Image className="rounded" src={portalImage} alt="logo figma" />
      <Image className="rounded" src={portalImage} alt="logo figma" />
      <Image className="rounded" src={portalImage} alt="logo figma" />
    </div>
  )
}
