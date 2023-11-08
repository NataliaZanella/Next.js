import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
//import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sistema',
  description: 'Sistema de teste',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
          <body className={inter.className}>
              <div className="min-h-screen min-w-full bg-violet-400">{children}</div>
              <nav>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/users">Usuários</Link></li>
                  <li><Link href="/login">Login</Link></li>
                </ul>
              </nav>
              <hr />
          </body>
    </html>
  )
}
