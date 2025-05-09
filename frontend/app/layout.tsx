import './globals.css'
import AppLayout from '@/components/layouts/AppLayout'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><AppLayout>{children}</AppLayout></body>
    </html>
  )
}