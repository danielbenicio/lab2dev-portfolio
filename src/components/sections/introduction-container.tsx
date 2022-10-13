import React from 'react'
import Image from 'next/future/image'

import introductionImage from '../../assets/introduction-image.svg'

export const IntroductionContainer: React.FC = () => {
  return (
    <div
      className="mt-28 flex justify-between items-center 2xl:mt-20"
      id="introduction-container"
    >
      <div className="flex flex-col ">
        <h1 className="text-5xl font-bold text-lab2dev-purple-900 leading-[3.75rem] 2xl:text-4xl">
          Inovação com Criatividade <br />& Tecnologia.
        </h1>
        <span className="mt-8 text-xl font-medium opacity-50 leading-8 2xl:text-lg 2xl:mt-6">
          Somos a primeira startup brasileira focada em inovação por meio do
          <br />
          SAP Business Technology Platform. Com soluções inteligentes,
          <br />
          auxiliamos você na jornada da transformação digital.
        </span>
        <a
          className="mt-10 w-96 py-3 bg-lab2dev-purple-700 rounded-md drop-shadow-xl
          text-white text-lg font-semibold transition-color duration-200 hover:opacity-90
          flex items-center justify-center 2xl:mt-8 2xl:py-3 2xl:w-72 2xl:text-base"
          href="https://lab2dev.com/"
          target="_blank"
          rel="noreferrer"
        >
          Conheça nosso site
        </a>
      </div>
      <Image
        src={introductionImage}
        alt="introduction image"
        className="2xl:w-96"
      />
    </div>
  )
}
