import React from 'react'
import Image from 'next/future/image'

import logo from '../../assets/logo-white.svg'

export const Footer: React.FC = () => {
  return (
    <div className="mt-9 w-full px-24 py-4 flex justify-between items-center bg-lab2dev-purple-700 2xl:px-20">
      <Image src={logo} alt="logo" />
      <span className="text-white font-normal text-xs 2xl:text-[10px]">
        2022 Lab2Dev, ic Lab2Dev, Portfólio
      </span>
    </div>
  )
}
