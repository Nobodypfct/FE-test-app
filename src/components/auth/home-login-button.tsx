'use client'

import { authClient } from '@/src/lib/auth/auth-client'
import type { ButtonProps as RadixButtonProps } from '@radix-ui/themes'
import Link from 'next/link'
import { Button } from '../ui/Button'

export function HomeLoginButton(props: RadixButtonProps) {
  const { data: session, isPending } = authClient.useSession()

  if (isPending)
    return <div className="h-8 w-24 bg-neutral-200 animate-pulse rounded-md mt-8" />

  if (session) return null

  return (
    <Link href="/login" className="mt-8">
      <Button {...props}>Login</Button>
    </Link>
  )
}
