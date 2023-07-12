import './globals.css'
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Angel',
  description: 'Їстівні букети',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body className={comfortaa.className}>
  
        {children}
        
      </body>
    </html>
  )
}
