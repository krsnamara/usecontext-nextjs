import type { Metadata } from 'next'
import './globals.css'
import { GlobalContextProvider } from './context/store'
import { NavBar } from '@/components/NavBar'

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
      <body>
        <GlobalContextProvider>
          <NavBar />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
