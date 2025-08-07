// src/app/layout.jsx
import './globals.css'
import { Inter } from 'next/font/google'
import DarkModeToggle from '../components/DarkModeToggle'
import NavWrapper      from '../components/NavWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AcePoint',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.className}>
      {/* BODY: fondo + texto + transición */}
      <body className="
        flex min-h-screen flex-col
        bg-[var(--bg)] text-[var(--fg)]
        transition-colors duration-300 ease-in-out
      ">
        {/* HEADER: usa mismo bg + transición */}
        <header className="
          p-4 flex justify-end
          bg-[var(--bg)] text-[var(--fg)]
          transition-colors duration-300 ease-in-out
        ">
          <DarkModeToggle/>
        </header>

        {/* MAIN: aquí van tus páginas */}
        <main className="
          flex-grow
          transition-colors duration-300 ease-in-out
        ">
          {children}
        </main>

        {/* NAV: envolvemos el NavWrapper para animar su fondo también */}
        <footer className="
          bg-[var(--bg)] text-[var(--fg)]
          transition-colors duration-300 ease-in-out
        ">
          <NavWrapper/>
        </footer>
      </body>
    </html>
  )
}
