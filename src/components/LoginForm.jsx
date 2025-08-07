'use client';
import { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Envío login', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-white-700 dark:text-black-300"
        >
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            mt-1 block w-full px-3 py-2
            border rounded-md
            bg-[var(--input-bg)] text-[var(--input-color)]
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
            transition-colors duration-200
          "
        />
      </div>

      {/* Contraseña */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-white-700 dark:text-black-300"
        >
          Contraseña
        </label>
        <div className="relative mt-1">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              block w-full px-3 py-2
              border rounded-md
              bg-[var(--input-bg)] text-[var(--input-color)]
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
              transition-colors duration-200
            "
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-400"
            tabIndex={-1}
          >
                        {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Botón Entrar */}
      <button
        type="submit"
        className="
          w-full flex justify-center px-4 py-2
          bg-blue-600 dark:bg-blue-500
          text-white font-medium
          rounded-md
          hover:bg-blue-700 dark:hover:bg-blue-600
          focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300
          transition-colors duration-200
        "
      >
        Entrar
      </button>
    </form>
  );
}
