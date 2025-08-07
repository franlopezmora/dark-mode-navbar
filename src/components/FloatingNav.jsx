'use client';
import clsx from 'clsx';

export default function FloatingNav({ items }) {
  return (
    <nav
      className={clsx(
        'fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 p-3 rounded-full',
        'backdrop-blur-md bg-white/70 dark:bg-gray-900/70',
        'shadow-lg dark:shadow-black/50 transition-colors duration-300'
      )}
    >
      {items.map((it, i) => (
        <button
          key={i}
          onClick={it.onClick}
          className={clsx(
            'flex flex-col items-center text-sm p-2 rounded-md transition-colors',
            it.active
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          )}
        >
          {it.icon}
          <span className="mt-1">{it.label}</span>
        </button>
      ))}
    </nav>
  );
}
