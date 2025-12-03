export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-0">
      <aside className="w-64 border-r p-6">Blog Navigation</aside>
      <div className="flex-1 p-6 overflow-y-scroll">{children}</div>
    </div>
  )
}
