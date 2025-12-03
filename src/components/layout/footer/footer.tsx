export function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl px-6 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Chto tam na frontende?
      </div>
    </footer>
  )
}
