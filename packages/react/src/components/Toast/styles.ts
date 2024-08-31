import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'
import { Text } from '../Text'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: `translateX(calc(100% + 32px))`,
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: `translateX(calc(100% + 32px))`,
  },
})

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '2px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
  fontFamily: '$default',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Text, {
  lineHeight: '$base',
  fontWeight: '$bold',
  fontSize: '$xl',
  color: '$white',
})

export const ToastDescription = styled(Text, {
  lineHeight: '$base',
  fontWeight: '$regular',
  fontSize: '$sm',
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  background: 'none',
  border: 'none',
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$2',
  gap: '$1',
  width: 360,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
