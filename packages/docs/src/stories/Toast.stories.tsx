import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@degui-ui/react'
import { useState } from 'react'

function ToastComponent(props: ToastProps) {
  const [open, setOpen] = useState(true)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Click here!</Button>
      <Toast open={open} onOpenChange={setOpen} {...props} />
    </>
  )
}

export default {
  title: 'Data display/Toast',
  component: ToastComponent,
  args: {
    title: 'Toast title',
    description: 'Toast description',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
