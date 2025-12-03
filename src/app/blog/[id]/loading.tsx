export default function LoadingPost() {
  return (
    <article className="max-w-3xl mx-auto py-12 px-6 animate-pulse">
      {/* Title skeleton */}
      <div className="h-10 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded mb-6" />

      {/* Body skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded" />
        <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6" />
        <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-4/6" />

        <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded mt-4" />
        <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4" />
        <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-2/3" />
      </div>
    </article>
  )
}
