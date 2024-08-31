import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@degui-ui/react'
export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: <Button disabled>Mouse on!</Button>,
    message: 'Tooltip message',
    side: 'top',
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    side: {
      options: ['left', 'bottom', 'right', 'top'],
      control: 'inline-radio',
      description:
        'The direction is preferred, but it only appears if there is space',
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const RightPosition: StoryObj<TooltipProps> = {
  args: {
    side: 'right',
  },
}
