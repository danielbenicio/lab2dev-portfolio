import React from 'react'
import Image from 'next/future/image'

import goldParnerImage from '../../assets/gold-partner.svg'

export const GoldPartnerContainer: React.FC = () => {
  return (
    <div className="mt-28 flex justify-between items-center 2xl:mt-20">
      <Image
        src={goldParnerImage}
        alt="introduction image"
        className="2xl:w-80"
      />
      <div className="flex flex-col ">
        <h1 className="text-5xl font-bold text-lab2dev-purple-900 leading-[3.75rem] 2xl:text-4xl">
          Somos parceiros Gold Partner <br />
          da SAP!
        </h1>
        <span className="leading-8 mt-10 text-xl font-medium opacity-50 2xl:text-lg 2xl:mt-6">
          Os parceiros de serviço SAP são consultores ou integradores de <br />
          sistemas(SIs) que fornecem consultoria estratégica de negócios, <br />
          design de sistemas, integração de soluções e implementação de <br />
          projetos desoluções SAP.
        </span>
      </div>
    </div>
  )
}
