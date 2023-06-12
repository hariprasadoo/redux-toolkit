import './globals.css'
import { Providers } from '../app/redux/provider';

export const metadata = {
  title: 'Redux Toolkit | Hari Prasad',
  description: 'By Hari Prasad Dahal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><Providers>{children}</Providers></body>
    </html>
  )
}
