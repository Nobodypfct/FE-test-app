'use client'

import type { ButtonProps as RadixButtonProps } from '@radix-ui/themes'
import { Button } from '../ui/Button'

export function SignInButton(props: RadixButtonProps) {
  return (
    <Button {...props} className="px-4 py-2 rounded bg-black text-white">
      Sign in with Google
    </Button>
  )
}
