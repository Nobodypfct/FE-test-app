'use client'
import type { ButtonProps as RadixButtonProps } from '@radix-ui/themes'

import { Button } from '../ui/Button'

export function SignOutButton(props: RadixButtonProps) {
  return (
    <Button {...props} className="px-4 py-2 rounded bg-red-600 text-white">
      Sign out
    </Button>
  )
}
