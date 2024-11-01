"use client"

import * as React from "react"
import { Half2Icon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

import { Button } from "./ui/button"

export function ThemeSwitch({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant={"outline"}
      id="theme-toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "flex items-center justify-center transition-opacity duration-300 hover:opacity-90",
        className
      )}
    >
      <Half2Icon className="h-[14px] w-[14px] text-[#1c1c1c] dark:text-[#D4D4D4]" />
    </Button>
  )
}
