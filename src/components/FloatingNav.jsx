// src/components/FloatingNav.jsx
'use client';
import { useState, cloneElement } from 'react';
import clsx from 'clsx';

export default function FloatingNav({ items }) {
  const [activeIdx, setActiveIdx] = useState(
    () => items.findIndex(it => it.active) ?? 0
  );

  return (
    <nav
      className={clsx(
        'fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center',
        'space-x-6 px-12 py-2 rounded-full',
        'backdrop-blur-md bg-white/70 dark:bg-gray-900/70',
        'shadow-lg dark:shadow-black/50 transition-colors duration-300 border'
      )}
    >
      {items.map((it, i) => {
        const isPlus = it.label === 'Crear';
        
        const isActive = i === activeIdx;

        // Clonamos el icono para inyectar las clases de tamaño
       const icon = cloneElement(it.icon, {
         className: clsx(
           it.icon.props.className,
           // tamaño
           isPlus ? 'w-8 h-8' : 'w-6 h-6',
           // si es “Crear”, lo subimos 2px con margin-top negativo
           isPlus && '-mt-1',
           'transition-transform duration-200'
         )
       });

        return (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={clsx(
              'flex flex-col items-center text-sm p-2 rounded-md transition-colors duration-200',
              isActive
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            )}
          >
            {icon}
                <span
       className={clsx(
         // si es el plus, margin-top muy pequeño (2px); si no, mt-1 (4px)
         isPlus ? 'mt-[0,9px]' : 'mt-1',
         'transition-colors duration-200'
       )}
     >
             {it.label}
             </span>
          </button>
        );
      })}
    </nav>
  );
}
