import React from 'react'

import { TechnologieCard } from '../technologie-card'

export const TechnologiesContainer: React.FC = () => {
  return (
    <div className="mt-28" id="technologies-container">
      <h1 className="text-lab2dev-purple-900 font-medium text-5xl leading-[3.75rem] mb-1">
        Tecnologias
      </h1>
      <span className="leading-7 font-medium opacity-40 text-lg">
        Nosso principal foco sempre foi SAP, somos lider e referências no
        mercado.
        <br />
        Porém isso não significa que não somos os melhores nas outras
        tecnologias também.
      </span>

      <div className="mt-16 flex gap-24">
        <TechnologieCard
          technologieName="SAP UI5"
          description="O OpenUI5 é uma estrutura de aplicativo JavaScript projetada para criar aplicativos prontos para a empresa, compatíveis com várias plataformas."
        />
        <TechnologieCard
          technologieName="Python"
          description="Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte."
        />
        <TechnologieCard
          technologieName="Node JS"
          description="Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web."
        />
        <TechnologieCard
          technologieName="React JS"
          description="React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente."
        />
      </div>
    </div>
  )
}
