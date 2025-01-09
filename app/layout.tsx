import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import UserAuth from './components/UserAuth'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fish Recommendations System',
  description: 'Get personalized fish recommendations for consumption, aquaculture, or aquarium management.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>
          <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Fish Recommendations System</h1>
            <UserAuth />
          </header>
          <main className="container mx-auto p-4">
            {children}
          </main>
          <footer className="bg-gray-200 p-4 text-center">
            <p>&copy; 2023 Fish Recommendations System</p>
          </footer>
        </body>
      </SessionProvider>
    </html>
  )
}

