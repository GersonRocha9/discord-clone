import './globals.css'

import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ReactNode } from 'react'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Team Chat App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
