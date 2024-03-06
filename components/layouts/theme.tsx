"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa"

export function ThemeMode() {
  const {theme, setTheme } = useTheme()

  const themeMode = () => {
    if(theme === "dark"){
        setTheme("light")
    }else{
        setTheme("dark")
    }
  }

  return (
    <div className="flex border-r border-l border-slate-400 dark:border-slate-200 pl-2 pr-2">
        <button onClick={() => themeMode()} className="p-1 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500 rounded-md">
          <FaLightbulb className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <FaRegLightbulb className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Claro ou Escuro</span>
        </button>
    </div>
  )
}