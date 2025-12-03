import { PostCard } from '@/src/components/features/blog/PostCard'
import { getPosts } from '@/src/lib/api/posts'

export const revalidate = 3600
export const dynamic = 'force-static'

export const metadata = {
  title: 'Blog',
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
