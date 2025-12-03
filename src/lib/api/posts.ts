import type { Post } from '@/src/types/blog/post'

const API_URL = 'https://jsonplaceholder.typicode.com'

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${API_URL}/posts`, {
    cache: 'force-cache', // SSG
  })

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  return res.json()
}

export async function getPostById(id: string): Promise<Post> {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    cache: 'force-cache', // SSG
  })

  if (!res.ok) {
    throw new Error('Post not found')
  }

  return res.json()
}
