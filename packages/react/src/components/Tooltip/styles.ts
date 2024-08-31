import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '$sm',
  padding: '$3 $4',
  gap: '$2',
  lineHeight: '$short',
  backgroundColor: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
