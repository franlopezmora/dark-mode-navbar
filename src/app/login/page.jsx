// src/app/login/page.jsx
import LoginForm from '../../components/LoginForm';

export const metadata = { title: 'Iniciar sesión' };

export default function LoginPage() {
  return (
    <main className="
      flex min-h-screen items-center justify-center
      p-4
      bg-[var(--bg)] text-[var(--fg)]
      transition-colors duration-300 ease-in-out
    ">
      <div className="w-full max-w-sm">
        <div className="
          bg-[var(--card-bg)]
          border border-[var(--border)]
          rounded-lg shadow-lg
          transition-colors duration-300 ease-in-out
        ">
          <div className="px-6 py-4 transition-colors duration-300 ease-in-out">
            <h1 className="
              text-2xl font-bold mb-4
              text-[var(--fg)]
              transition-colors duration-300 ease-in-out
            ">
              Iniciar sesión
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
