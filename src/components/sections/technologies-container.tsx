import React from 'react'

import { TechnologieCard } from '../technologie-card'

export const TechnologiesContainer: React.FC = () => {
  return (
    <div className="mt-28 2xl:mt-24" id="technologies-container">
      <h1 className="text-lab2dev-purple-900 font-medium text-5xl leading-[3.75rem] mb-1 2xl:text-4xl">
        Tecnologias
      </h1>
      <span className="leading-7 font-medium opacity-40 text-lg 2xl:text-base">
        Nosso principal foco sempre foi SAP, somos lider e referências no
        mercado.
        <br />
        Porém isso não significa que não somos os melhores nas outras
        tecnologias também.
      </span>

      <div className="mt-16 flex gap-24 2xl:gap-10">
        <TechnologieCard
          technologieName="SAP UI5"
          description="O OpenUI5 é uma estrutura de aplicativo JavaScript projetada para criar aplicativos prontos para a empresa, compatíveis com várias plataformas."
        />
        <TechnologieCard
          technologieName="Next JS"
          description="Next.js é uma estrutura da web de desenvolvimento front-end React criada por Vercel que permite funcionalidades como renderização do lado do servidor e sites estáticos."
        />
        <TechnologieCard
          technologieName="React Native"
          description="React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa."
        />
        <TechnologieCard
          technologieName="UX/UI Design"
          description=" UI trata dos elementos com os quais o usuário interage, ao passo que o UX procura entender os comportamentos e emoções dessas pessoas no uso do produto."
        />
      </div>
    </div>
  )
}
