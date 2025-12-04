'use client'

import Link from 'next/link'
import { HeaderAuthControls } from '../../auth/header-auth-controls'

export function Header() {
  return (
    <header className="w-full border-b bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="hover:text-accent-pink transition">
          <h1 className="text-xl font-semibold">sup?</h1>
        </Link>

        <nav className="flex gap-4 text-sm items-center">
          <Link href="/blog" className="hover:text-accent-pink transition">
            Blog
          </Link>
          <Link href="/projects" className="hover:text-accent-pink transition">
            Projects
          </Link>
          <Link href="/features" className="hover:text-accent-pink transition">
            Features
          </Link>

          <HeaderAuthControls />
        </nav>
      </div>
    </header>
  )
}
