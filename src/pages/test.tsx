import React from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'

const Test: React.FC = () => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="cursor-default">
          Hello World
        </Tooltip.Trigger>
        <Tooltip.Content
          className="px-2 py-1 rounded border text-xs"
          sideOffset={0.1}
        >
          NodeJS
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default Test
