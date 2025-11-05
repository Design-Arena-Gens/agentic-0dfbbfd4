import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fraggle Rock - Dance Your Cares Away',
  description: 'Explore the magical world of Fraggle Rock',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
