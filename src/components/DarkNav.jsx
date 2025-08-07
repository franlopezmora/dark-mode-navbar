// components/PillNavBarDark.jsx
"use client"

import { useState } from "react"
import { Home, Trophy, Plus, Calendar, User } from "lucide-react"

export default function DarkNav() {
  const [activeKey, setActiveKey] = useState("home")

  const items = [
    { label: "Inicio",   icon: Home,     key: "home" },
    { label: "Torneos",  icon: Trophy,   key: "tournaments" },
    { label: "Crear",    icon: Plus,     key: "create" },
    { label: "Calendario", icon: Calendar, key: "calendar" },
    { label: "Perfil",   icon: User,     key: "profile" },
  ]

  return (
    <div
      className="
        fixed bottom-6
        left-1/2 transform -translate-x-1/2
        bg-gray-900 bg-opacity-90 backdrop-blur-sm
        w-[90vw] max-w-md
        px-8 py-3
        rounded-full shadow-lg
      "
    >
      <ul className="flex justify-around items-center">
        {items.map(item => {
          const isActive = item.key === activeKey

          return (
            <li key={item.key} className="flex-1 text-center">
              <button
                type="button"
                onClick={() => setActiveKey(item.key)}
                className={`
                  inline-flex flex-col items-center
                  focus:outline-none transition-colors
                  ${isActive
                    ? "text-blue-500"
                    : "text-white/75 hover:text-white"}
                `}
              >
                <item.icon
                  className={`
                    w-6 h-6
                    ${isActive ? "scale-110" : "scale-100"}
                    transition-transform
                  `}
                />
                <span className="text-[12px] mt-1 leading-none">
                  {item.label}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
