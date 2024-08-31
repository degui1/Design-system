import * as ToastRadix from '@radix-ui/react-toast'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastRadix.Provider swipeDirection="right">
      <ToastContainer {...props}>
        <ToastRadix.Title asChild>
          <ToastTitle>{title}</ToastTitle>
        </ToastRadix.Title>

        {!!description && (
          <ToastRadix.Description asChild>
            <ToastDescription>{description}</ToastDescription>
          </ToastRadix.Description>
        )}

        <ToastClose>
          <X weight="bold" size={20} />
        </ToastClose>
      </ToastContainer>

      <ToastViewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
