import * as TooltipRadix from '@radix-ui/react-tooltip'

import { ComponentProps } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  children: React.ReactNode
  message: string
}

export function Tooltip({ children, message, ...props }: TooltipProps) {
  return (
    <TooltipRadix.Provider delayDuration={200}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent className="TooltipContent" sideOffset={5} {...props}>
            {message}
            <TooltipArrow className="TooltipArrow" />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
