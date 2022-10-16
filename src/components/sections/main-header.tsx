import React from 'react'
import Image from 'next/future/image'

import logo from '../../assets/logo.svg'

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between">
      <Image src={logo} alt="logo" className="w-40 2xl:w-32" />

      <div className="flex gap-12 opacity-60 font-medium 2xl:text-sm">
        <a
          className="cursor-pointer transition-color duration-200 hover:opacity-60"
          href="#introduction-container"
        >
          Home
        </a>
        <a
          className="cursor-pointer transition-color duration-200 hover:opacity-60"
          href="#technologies-container"
        >
          Tecnologias
        </a>
        <a
          className="cursor-pointer transition-color duration-200 hover:opacity-60"
          href="#portfolio-container"
        >
          Portfólio
        </a>
      </div>
    </div>
  )
}
