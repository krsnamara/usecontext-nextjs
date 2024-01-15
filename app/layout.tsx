import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from '@/components/NavBar'
import RockContextProvider from './context/RockContextProvider'

export const metadata: Metadata = {
  title: 'useContext with TypeScript',
  description: 'building a global context with TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar />
        <RockContextProvider>{children}</RockContextProvider>
      </body>
    </html>
  )
}
