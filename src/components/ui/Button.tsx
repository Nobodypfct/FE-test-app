'use client'

import type { ButtonProps as RadixButtonProps } from '@radix-ui/themes'
import { Button as RadixButton } from '@radix-ui/themes'

export type ButtonProps = RadixButtonProps

export const Button = ({ children, ...props }: ButtonProps) => {
  return <RadixButton {...props}>{children}</RadixButton>
}
