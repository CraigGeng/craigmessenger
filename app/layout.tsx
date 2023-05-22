import ActiveStatus from '@/app/components/ActiveStatus'
import AuthContext from '@/app/context/AuthContext'
import ToasterContext from '@/app/context/ToasterContext'
import '@/app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Craig Messenger',
  description: 'A real-time messenger app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
