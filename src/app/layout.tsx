import type { Metadata } from 'next'
import { Overpass, Overpass_Mono } from 'next/font/google'
import { Footer } from '../components/layout/footer/footer'
import { Header } from '../components/layout/header/header'
import { AppProviders } from '../providers'
import './globals.css'

const geistSans = Overpass({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Overpass_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'your bunnyi v rot',
  description: 'etogo kazino',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <AppProviders>
          <div className="grid grid-rows-[auto_1fr_auto] h-full">
            <Header />
            <main className="min-h-0">{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  )
}
