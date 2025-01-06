// import type { Metadata } from "next"

import "./globals.css"

import { GeistMono } from "geist/font/mono"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/providers/theme-provider"

export const metadata: Metadata = {
  title: "flexoki shadcn/ui",
  description: "best color scheme meets best components collection",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          GeistMono.className,
          "h-screen w-screen text-pretty font-mono font-medium tracking-tight antialiased [&_*]:shadow-none"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
