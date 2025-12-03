// src/components/blog/PostCard.tsx
'use client'

import type { Post } from '@/src/types/blog/post'
import { Card } from '@radix-ui/themes'
import Link from 'next/link'

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`} prefetch>
      <Card className="p-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">
        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-neutral-600 line-clamp-2">{post.body}</p>
      </Card>
    </Link>
  )
}
