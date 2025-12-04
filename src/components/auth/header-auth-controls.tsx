'use client'

import { authClient } from '@/src/lib/auth/auth-client'
import Image from 'next/image'
import { SignInButton } from './sign-in-button'
import { SignOutButton } from './sign-out-button'

export function HeaderAuthControls() {
  const { data: session, isPending } = authClient.useSession()

  if (isPending)
    return <div className="h-8 w-24 bg-neutral-200 animate-pulse rounded-md" />

  if (!session)
    return (
      <SignInButton onClick={() => authClient.signIn.social({ provider: 'google' })} />
    )

  return (
    <div className="flex items-center gap-3">
      {session.user.image && (
        <Image
          width="32"
          height="32"
          src={session.user.image}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      )}
      <span className="text-sm font-medium">{session.user.name}</span>
      <SignOutButton onClick={() => authClient.signOut()} />
    </div>
  )
}
