export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 animate-pulse">
      <div className="h-10 w-48 bg-neutral-300 dark:bg-neutral-700 rounded mb-6" />

      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-24 bg-neutral-200 dark:bg-neutral-800 rounded" />
        ))}
      </div>
    </div>
  )
}
