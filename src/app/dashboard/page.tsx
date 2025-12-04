import { auth } from '@/src/lib/auth/auth'
import { headers } from 'next/headers'
import Image from 'next/image'

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  console.log('session :', session)
  if (!session) {
    return <p className="p-6">Access denied</p>
  }

  return (
    <div className="p-6">
      {session.user.image && (
        <Image
          width="32"
          height="32"
          src={session.user.image}
          alt="avatar"
          className="w-8 h-8 rounded-full mb-4"
        />
      )}
      <h1 className="text-2xl font-bold mb-4">Hello, {session.user?.name} 👋</h1>
      <p>Your email: {session.user?.email}</p>
    </div>
  )
}
