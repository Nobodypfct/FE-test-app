import { getPostById, getPosts } from '@/src/lib/api/posts'
import type { Post } from '@/src/types/blog/post'
import { notFound } from 'next/navigation'

export const revalidate = 3600
export const dynamicParams = true

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((p: Post) => ({
    id: p.id.toString(),
  }))
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const post = await getPostById(id)
  if (!post) notFound()

  return (
    <article className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-neutral-700 leading-relaxed">{post.body}</p>
    </article>
  )
}
