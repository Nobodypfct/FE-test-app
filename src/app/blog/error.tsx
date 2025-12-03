'use client'

import { Button } from '@/src/components/ui/Button'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
      <p className="text-neutral-600 mb-6">{error.message}</p>

      <Button onClick={reset} className="px-4 py-2 bg-black text-white rounded">
        Try again
      </Button>
    </div>
  )
}
