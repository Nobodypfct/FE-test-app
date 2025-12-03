import '@radix-ui/themes/styles.css'
import Link from 'next/link'
import { Button } from '../components/ui/Button'

export default function Home() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">experimenting</h1>

      <nav className="flex flex-col gap-2 text-lg text-blue-600">
        <Link href="/blog" className="hover:underline">
          blog
        </Link>

        <Link href="/projects" className="hover:underline">
          projects
        </Link>

        <Link href="/about" className="hover:underline">
          about me
        </Link>
      </nav>
      <div className="mt-8">
        <Button>example btn</Button>
      </div>
    </div>
  )
}
