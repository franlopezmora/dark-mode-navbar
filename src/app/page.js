// src/app/page.jsx
import Link from 'next/link'

export default function Home() {
  return (
    <main
      className="
        flex min-h-screen flex-col items-center justify-center
        p-24 transition-colors duration-300 ease-in-out
      "
      style={{
        backgroundColor: 'var(--bg)',
      }}
    >
    <h1
      className="text-5xl font-bold transition-colors duration-300 ease-in-out"
      style={{ color: 'var(--fg)' }}
    >
        Bienvenido a Mi App de Torneos
      </h1>
      <p
        className="mt-4 text-2xl transition-colors duration-300 ease-in-out"
        style={{ color: 'var(--fg)' }}
      >
        Empieza a explorar pulsando el botón de abajo.
      </p>

      {/* Botón al Login */}
      <div className="mt-8">
        <Link href="/login">
          <button
            className="
              px-6 py-3
              bg-blue-600 dark:bg-blue-500
              text-white font-semibold
              rounded-md
              hover:bg-blue-700 dark:hover:bg-blue-600
              focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300
              transition-colors duration-200
            "
          >
            Ir a Login
          </button>
        </Link>
      </div>
    </main>
  )
}
