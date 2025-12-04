'use client'

import { Button } from '@/src/components/ui/Button'
import { authClient } from '@/src/lib/auth/auth-client'
import Image from 'next/image'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')

  return (
    <div className="h-full flex items-center justify-center bg-white">
      <div
        className="w-full max-w-sm px-8 py-10 rounded-lg shadow-xl border border-neutral-300 relative flex flex-col items-center gap-6"
        style={{ imageRendering: 'pixelated' }}
      >
        {/* pixel vibe header */}
        <h1
          className="font-bold text-3xl tracking-tight"
          style={{ fontFamily: `'Press Start 2P', monospace` }}
        >
          sign in
        </h1>

        {/* subtitle */}
        <p className="text-neutral-600 text-sm text-center -mt-4">
          welcome back, choose a sign in method
        </p>

        {/* google button */}
        <Button
          onClick={() => authClient.signIn.social({ provider: 'google' })}
          className="w-full flex items-center justify-center gap-3 py-3 border border-neutral-300 rounded-md 
                     bg-neutral-100 hover:bg-neutral-200 transition active:scale-[0.98]"
        >
          <Image src="/google.svg" width={20} height={20} alt="google" />
          <span className="text-sm font-medium">continue with google</span>
        </Button>

        {/* apple button (mock) */}
        <Button
          disabled
          className="w-full flex items-center justify-center gap-3 py-3 border border-neutral-300 rounded-md 
                     bg-neutral-600 text-white opacity-60 cursor-not-allowed"
        >
          <Image src="/apple.svg" width={20} height={20} alt="apple" />
          <span className="text-sm font-medium">continue with apple</span>
        </Button>

        {/* separator */}
        <div className="flex items-center gap-3 w-full my-2">
          <div className="h-px bg-neutral-300 flex-1" />
          <span className="text-xs text-neutral-500">or</span>
          <div className="h-px bg-neutral-300 flex-1" />
        </div>

        {/* email input */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email address"
          type="email"
          className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm 
                     focus:outline-none focus:ring-2 focus:ring-neutral-300"
        />

        {/* continue with email */}
        <Button
          disabled={!email}
          className="w-full mt-2 py-3 rounded-md bg-black text-white text-sm font-medium 
                     hover:bg-neutral-800 transition active:scale-[0.98] disabled:opacity-40"
        >
          continue with email
        </Button>
      </div>
    </div>
  )
}
